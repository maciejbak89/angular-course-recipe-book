import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

// import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(// private authService: AuthService,
				private store: Store<fromApp.AppState>) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		// return this.authService.isAuthenticated();
		return this.store.select('auth').pipe(
			take(1),
			map((authState: fromAuth.State) => {
				return authState.authenticated;
			})
		);
	}

 } 
