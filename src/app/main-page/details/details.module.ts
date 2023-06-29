import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

const routes = [
  { path: ':id', component: DetailsComponent }
]

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
