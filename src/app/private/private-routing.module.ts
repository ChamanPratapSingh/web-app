import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';




const routes: Routes = [
  { path:'',component:HomeComponent},
  { path: 'timesheet', component:HeaderComponent} ,
  { path:'employee',component:EmployeeComponent },
  { path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
