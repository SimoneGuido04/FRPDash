import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicAuth: string = ""
  static logged : boolean;

  getAuthorizationHeader() {
    return {
      headers: new HttpHeaders({'Authorization': "Basic " + this.basicAuth})

    };
  }

  getLogged() {
    return AuthService.logged;
  }


  getStatus() {
    this.http.get("https://frpadmin.simoneguido.it", this.getAuthorizationHeader()).subscribe({

      next: (data)=> {
        AuthService.logged = true;
      },

      error: err => {
        console.log(err);
        AuthService.logged = true;
        this.router.navigate(['/login']);
      },

      complete: () => {

      }


    })
  }

  constructor(private http: HttpClient, private router: Router) {
  }
}
