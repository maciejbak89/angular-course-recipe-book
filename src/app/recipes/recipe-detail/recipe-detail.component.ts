import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
// import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from '../../shopping-list/ngrx-store/shopping-list.actions';
// import * as fromApp from '../../store/app.reducers';
import * as fromRecipe from '../ngrx-store/recipe.reducers';
import * as RecipeActions from '../ngrx-store/recipe.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	// recipe: Recipe;
  recipeState: Observable<fromRecipe.State>;
	id: number;

  constructor(// private recipeService: RecipeService,
  			  private route: ActivatedRoute,
  			  private router: Router,
          private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
  	this.route.params
  		.subscribe((params: Params) => {
  			this.id = +params['id'];
  			// this.recipe = this.recipeService.getRecipe(this.id);
        this.recipeState = this.store.select('recipes');
  		});
  }

  onAddToShoppingList() {
  	// this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.select('recipes')
      .pipe(take(1))
      .subscribe((recipeState: fromRecipe.State) => {
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients)
        );
      });
    // this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
