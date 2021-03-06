import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeeStructureComponent} from './fee-structure.component';

const routes: Routes = [
  {
    path: '',
    component: FeeStructureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeStructureRoutingModule { }
