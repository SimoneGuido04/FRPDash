import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";
import {Service, Services} from "../../Classes/services";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicAuth: string = ""
  logged : boolean = false;
  data! : Services ;

  getAuthorizationHeader() {
    return {
      headers: new HttpHeaders({'Authorization': "Basic " + this.basicAuth})

    };
  }

  getLogged() {
    return this.logged;
  }

  setLData(key: string, value: any) {

    typeof value === "object" ? localStorage.setItem(key, JSON.stringify(value)) : localStorage.setItem(key, value)
  }

  getLData(key: string): any | null {

    try {
      let l = localStorage.getItem(key)
      if (l !== null) {
        return JSON.parse(l)

      }
      return null

    } catch (e) {
      return localStorage.getItem(key)
    }

  }

  getStatus() {
    this.http.get <Services>("http://localhost:7400/api/status", this.getAuthorizationHeader()).subscribe({
      next: (data)=> {
        this.data = data;
        this.setLData("services", data);
      },

      error: err => {
        console.log(err);
        this.logged = false;
        this.setLData("logged", false);
        this.router.navigate(['/login']);
      },

      complete: () => {
        this.logged = true;
        this.setLData("token", this.basicAuth);
        this.setLData("logged", true);
        this.router.navigate(['/services']);
      }

    })
  }

  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.logged = this.getLData("logged");
    }
  }
}
