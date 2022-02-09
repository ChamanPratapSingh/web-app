import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TeamComponent } from './team/team.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [
    SideNavComponent,
    TeamComponent,
    SigninComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PublicModule { }
