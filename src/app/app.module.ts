import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderOuterComponent } from './component/common/header-outer/header-outer.component';
import { HeaderInnerComponent } from './component/common/header-inner/header-inner.component';
import { LayoutComponent } from './component/common/layout/layout.component';
import { HomeComponent } from './component/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './component/common/footer/footer.component';
import { MatTreeModule } from '@angular/material/tree';
import { SidebarComponent } from './component/common/sidebar/sidebar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './component/test/test.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NdhsMapComponent } from './component/pages/ndhs-map/ndhs-map.component';
import { LayoutInnerComponent } from './component/common/layout-inner/layout-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderOuterComponent,
    HeaderInnerComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    TestComponent,
    NdhsMapComponent,
    LayoutInnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatFormFieldModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
