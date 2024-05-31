import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  opened: boolean = true

  navigateToConfigure() {
    this.router.navigate(['/configure']);
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }

  constructor(private router: Router) {


  }


}
