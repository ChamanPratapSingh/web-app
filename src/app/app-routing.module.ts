import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';


const PRIVATE_ROUTES:Routes=[
  { path:'',
    loadChildren: () =>import('./private/private.module').then(m=>m.PrivateModule)
},
]

const PUBLIC_ROUTES:Routes=[
  {
    path: 'public',
    loadChildren:() => import('./public/public.module').then(m=>m.PublicModule)
  }
  
]

const routes: Routes = [
  {
    path:'private', component:PrivateLayoutComponent,
    children: PRIVATE_ROUTES
  },
  {
    path: '', component:PublicLayoutComponent,
    children: PUBLIC_ROUTES
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
