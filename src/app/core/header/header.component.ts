import { Component, OnInit } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { DataStorageService } from '../../shared/data-storage.service';
// import { AuthService } from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers';
import * as AuthActions from '../../auth/ngrx-store/auth.actions';
import * as RecipeActions from '../../recipes/ngrx-store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	authState: Observable<fromAuth.State>;

	constructor(// private dataStorageService: DataStorageService,
				// private authService: AuthService,
				private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		this.authState = this.store.select('auth');
	}

	onSaveData() {
		// this.dataStorageService.storeRecipes()
		// 	.subscribe(
		// 		(response) => {
		// 			console.log(response);
		// 		}
		// 	);
		this.store.dispatch(new RecipeActions.StoreRecipes());
	}

	onFetchData() {
		// this.dataStorageService.getRecipes();
		this.store.dispatch(new RecipeActions.FetchRecipes());
	}

	onLogout() {
		// this.authService.logout();
    	this.store.dispatch(new AuthActions.Logout());
	}

	// isAuthenticated() {
	//     return this.authService.isAuthenticated();
	// }
}
