import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../Token-Service/token.service';

@Injectable({
  providedIn: 'root'
})
export class PremetionService implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const checkTokenExist = this.tokenService.hasToken()
    if (checkTokenExist) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
