import { Component } from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";
import {SidenavComponent} from "../sidenav/sidenav.component";

@Component({
  selector: 'app-configure',
  standalone: true,
  imports: [
    SidenavComponent
  ],
  templateUrl: './configure.component.html',
  styleUrl: './configure.component.css'
})
export class ConfigureComponent {

  constructor(public authService: AuthService) {

  }

}
