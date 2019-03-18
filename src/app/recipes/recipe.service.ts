// // import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// // import { Store } from '@ngrx/store';

// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingredient.model';

// // import { ShoppingListService } from '../shopping-list/shopping-list.service';
// // import * as ShoppingListActions from '../shopping-list/ngrx-store/shopping-list.actions';

// // @Injectable()
// export class RecipeService {
// 	recipesChanged = new Subject<Recipe[]>();

// 	private recipes: Recipe[] = [
// 		new Recipe(
// 			'Big Burger',
// 			'Huge burger for meat lovers!',
// 			'https://static.urbandaddy.com/uploads/assets/image/articles/standard/86a3b490c0fc9e242364c964e2160624.png',
// 			[
// 				new Ingredient('Beef Patty', 1),
// 				new Ingredient('Hamburger Buns', 1),
// 				new Ingredient('Tomatoes', 2),
// 				new Ingredient('Lettuce', 1),
// 				new Ingredient('Onion', 1)
// 			]), 
// 		new Recipe(
// 			'French Fries',
// 			'Delicious french fries!',
// 			'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/baked-garlic-fries_40221.jpg',
// 			[
// 				new Ingredient('Potatoes', 20),
// 				new Ingredient('Cooking Oil', 1)
// 			]) 
// 	];

// 	// constructor(private shoppingListService: ShoppingListService, 
// 				// private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

// 	setRecipes(recipes: Recipe[]) {
// 		this.recipes = recipes;
// 		this.recipesChanged.next(this.recipes.slice());
// 	}

// 	getRecipes() {
// 		return this.recipes.slice();
// 	}

// 	// getRecipe(index: number) {
// 	// 	return this.recipes[index];
// 	// }

// 	// addIngredientsToShoppingList(ingredients: Ingredient[]) {
// 	// 	// this.shoppingListService.addIngredients(ingredients);
// 	// 	this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
// 	// }

// 	// addRecipe(recipe: Recipe) {
// 	// 	this.recipes.push(recipe);
// 	// 	this.recipesChanged.next(this.recipes.slice());
// 	// }

// 	// updateRecipe(index: number, newRecipe: Recipe) {
// 	// 	this.recipes[index] = newRecipe;
// 	// 	this.recipesChanged.next(this.recipes.slice());
// 	// }

// 	// deleteRecipe(index: number) {
// 	// 	this.recipes.splice(index, 1);
// 	// 	this.recipesChanged.next(this.recipes.slice());
// 	// }
// }