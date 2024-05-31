import { Routes } from '@angular/router';
import {LoginComponent} from "./Pages/login/login.component";
import {ActiveServicesComponent} from "./Pages/active-services/active-services.component";
import {ConfigureComponent} from "./Pages/configure/configure.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: "FRPDash - Login",
  },
  {
    path: 'services',
    component: ActiveServicesComponent,
    title: "FRPDash - Services",
  },
  {
    path: 'configure',
    component: ConfigureComponent,
    title: "FRPDash - Configure",
  }];
