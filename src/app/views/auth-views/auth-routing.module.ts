import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'',
        loadChildren:'./login/login.module#LoginModule'
      }, 
      {
        path:'login',
        loadChildren:'./login/login.module#LoginModule'
      },
      {
        path:'404',
        loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
