import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UxPipe } from '../pipes/ux.pipe';
import { HighlightDirective } from '../highlight.directive';



@NgModule({
  declarations: [
    UxPipe,
    HeaderComponent,
    EmployeeComponent,
    ProfileComponent,
    AboutComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
