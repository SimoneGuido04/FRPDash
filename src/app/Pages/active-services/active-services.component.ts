import { Component } from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";
import {SidenavComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-active-services',
  standalone: true,
  imports: [
    SidenavComponent
  ],
  templateUrl: './active-services.component.html',
  styleUrl: './active-services.component.css'
})
export class ActiveServicesComponent {

  constructor(private authService: AuthService) {
    console.log(authService.getLogged());
  }
}
