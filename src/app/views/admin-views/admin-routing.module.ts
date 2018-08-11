import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'create-student',
        loadChildren: './create-student/create-student.module#CreateStudentModule'
      },
      {
        path: 'fee-structure',
        loadChildren: './fee-structure/fee-structure.module#FeeStructureModule'
      },
      {
        path: 'students-list',
        loadChildren: './students-list/students-list.module#StudentsListModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
