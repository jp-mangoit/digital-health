import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LayoutComponent } from './component/common/layout/layout.component';
import { TestComponent } from './component/test/test.component';
import { LayoutInnerComponent } from './component/common/layout-inner/layout-inner.component';
import { NdhsMapComponent } from './component/pages/ndhs-map/ndhs-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'home' },
      },
      {
        path: 'test',
        component: TestComponent,
        data: { title: 'test' },
      },
    ],
  },
  {
    path: '',
    component: LayoutInnerComponent,
    children: [
      {
        path: 'ndhs-map',
        component: NdhsMapComponent,
        data: { title: 'NDHS-Map' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
