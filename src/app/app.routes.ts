import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurProjectsComponent } from './pages/our-projects/our-projects.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard'; // Ensure you import AuthGuard

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent,},
  { path: 'our-projects', component: OurProjectsComponent,  },
  { path: 'contact-us', component: ContactUsComponent, },
  { path: 'login', component: LoginComponent },
];
