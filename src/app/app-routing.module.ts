import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {AuthService} from './services/auth.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './views/auth-views/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '',
    // canActivate: [AuthService],
    component: AdminLayoutComponent,
    children: [
      {
        path:'admin',
        loadChildren: './views/admin-views/admin.module#AdminModule'
      }
    ]
  }, 
  {
    path: '**',
    redirectTo: 'auth/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
