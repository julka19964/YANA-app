import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

const routes = [
  { path: ':id', component: ChatComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
