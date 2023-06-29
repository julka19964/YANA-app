import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { DetailsComponent } from './details/details.component';
import { MainPageComponent } from './main-page.component';
import { SettingsComponent } from './settings/settings.component';



const routes = [
  // { path: '', redirectTo:'main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent},
  {path: 'details', loadChildren: () => import("./details/details.module").then(m => m.DetailsModule)},
  {path: 'chat', loadChildren: () => import("./chat/chat.module").then(m => m.ChatModule)},
  { path: 'settings', component:SettingsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  
  ],
  exports: []
})
export class MainPageModule { }
