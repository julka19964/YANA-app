import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
// import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivateFn {
  
  constructor(
    // private authService:AuthService
  ) { }

  canActivateFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree; {
    console.log(state.url);
    // return this.authService.logged;
  }
}

