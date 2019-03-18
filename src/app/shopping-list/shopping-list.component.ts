import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
import * as ShoppingListActions from './ngrx-store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;

  constructor(// private shoppingListService: ShoppingListService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.shoppingListService.getShoppingList();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.shoppingListService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
