import { MbscModule } from '@mobiscroll/angular';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from './my-profile/ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingsComponent } from './main-page/settings/settings.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { FriendsService } from './services/friends.service';
import { ChatComponent } from './main-page/chat/chat.component';



const routes: Routes = [
  { path: 'registrate', component: RegistrateComponent },
  { path: 'my-profile', loadChildren: () => import("./my-profile/my-profile.module").then(m => m.MyProfileModule) },
  { path: 'main-page', loadChildren: () => import("./main-page/main-page.module").then(m => m.MainPageModule)},
  { path: '**', redirectTo: 'registrate' },
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrateComponent,
    MyProfileComponent,
    MainPageComponent,
    SettingsComponent,
    ChatComponent
  ],
  imports: [  
    MbscModule, 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatButtonToggleModule,
    MatSliderModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (friendsService: FriendsService) => () => friendsService.setInitFriends(),
    multi: true,
    deps: [FriendsService]
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }



