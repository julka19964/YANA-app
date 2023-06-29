import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrateComponent } from 'src/app/registrate/registrate.component';
import {RouterModule} from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';



@NgModule({
  declarations: [RegistrateComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [

    AuthGuard,
    AuthService
  ],
  exports: [RegistrateComponent]
})
export class CoreModule { }
