import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SigninComponent } from './signin/signin.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:'',component:SigninComponent},
  { path:'contact', component:SideNavComponent},
  { path:'team',component:TeamComponent},
  { path:'blog',component:BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { 
  
}
