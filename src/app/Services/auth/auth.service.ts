import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicAuth: string = ""

  getAuthorizationHeader() {
    return {headers : new HttpHeaders({'Authorization': "Basic " + this.basicAuth}).set('Www-Authenticate', '')

    };
  }



  getStatus() {
    this.http.get("https://frpadmin.simoneguido.it", this.getAuthorizationHeader()).subscribe({

      next: response => {
        console.log(response);
      },

      error: err => {
        console.log(err);
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      },

      complete: () => {
      }


    })
  }

  constructor(private http: HttpClient, private router : Router) {
  }
}
