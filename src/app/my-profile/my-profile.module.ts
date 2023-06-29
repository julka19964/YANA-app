import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from '../main-page/main-page.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const routes = [
  {path: 'main-page', component:MainPageComponent},
  { path: '', component: MyProfileComponent },
  // { path: 'main-page', loadChildren: () => import("./main-page.module").then(m => m.MainPageModule) },
  { path: '**', redirectTo: 'my-profile' },
]

@NgModule({
  imports: [
  RouterModule.forChild(routes),
  HttpClientModule,
  MatSliderModule,
  MatButtonToggleModule
  ],
  declarations: [],
  exports: []
})
export class MyProfileModule { }
