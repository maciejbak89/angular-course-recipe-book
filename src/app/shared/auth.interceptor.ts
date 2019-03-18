import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, switchMap } from 'rxjs/operators';

// import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(// private authService: AuthService,
				private store: Store<fromApp.AppState>) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('Intercepted: ', req);
		// const copiedReq = req.clone({headers: req.headers.append('', '')});
		// const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
		return this.store.select('auth').pipe(
			take(1),
			switchMap((authState: fromAuth.State) => {
				const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
				return next.handle(copiedReq);
			})
		);
	}
}