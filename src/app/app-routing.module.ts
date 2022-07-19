import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderInnerComponent } from './component/common/header-inner/header-inner.component';
import { HeaderOuterComponent } from './component/common/header-outer/header-outer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { LayoutComponent } from './component/common/layout/layout.component';
import { NhdcMapComponent } from './component/nhdc-map/nhdc-map.component';
import { LayoutInnerComponent } from './component/common/layout-inner/layout-inner.component';
import { NdhsMapComponent } from './component/pages/ndhs-map/ndhs-map.component';
import { FilterAreaComponent } from './component/common/filter-area/filter-area.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '', component: LayoutComponent,  children:  [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'home' }
      },
      {
        path: 'nhdc-map',
        component: NhdcMapComponent,
        data: { title: 'nhdc-map' }
      },
      
    ]
  },
  {
    path: '', component: LayoutInnerComponent,  children:  [
      {
        path: 'ndhs-map',
        component: NdhsMapComponent,
        data: { title: 'NDHS-Map' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
