import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderInnerComponent } from './component/common/header-inner/header-inner.component';
import { HeaderOuterComponent } from './component/common/header-outer/header-outer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LayoutComponent } from './component/common/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '', component: LayoutComponent,  children:  [
      {
        path: 'Headerinner',
        component: HeaderInnerComponent,
        data: { title: 'header' }
      },
      {
        path: 'Headerouter',
        component: HeaderOuterComponent,
        data: { title: 'header-outer' }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'home' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
