import { Component } from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";

@Component({
  selector: 'app-active-services',
  standalone: true,
  imports: [],
  templateUrl: './active-services.component.html',
  styleUrl: './active-services.component.css'
})
export class ActiveServicesComponent {

  constructor(private authService: AuthService) {
    console.log(this.authService.getLogged());
  }
}
