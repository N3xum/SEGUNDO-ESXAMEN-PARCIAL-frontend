import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { Empleados } from './components/empleados/empleados';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'empleados', component: Empleados }
      
    ]
  }
];