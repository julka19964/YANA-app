import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from 'src/app/my-profile/my-profile.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: MyProfileComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
