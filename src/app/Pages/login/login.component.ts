import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../Services/auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatIcon,
    MatIconButton,
    MatButton,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username=""
  password=""
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  loginEvent($event: MouseEvent) {
    if(this.username && this.password){

      this.authService.basicAuth = btoa(this.username+":"+this.password);
      this.authService.getStatus();
    }
  }

  constructor(private authService: AuthService) {
  }
}
