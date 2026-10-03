import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../../services/auth-service";

export class AuthGuard implements CanActivate {


    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        if(this.authService.isAuthenticated()) {
            if(this.authService.isTokenExpired()) {
                this.authService.logout();
                this.router.navigate(['/login']);
                return false
            }
            return true;
        }
        this.router.navigate(['/login'])
        return false;
    }

    
}
