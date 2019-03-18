import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
recipes: [
    new Recipe(
      'Big Burger',
      'Huge burger for meat lovers!',
      'https://static.urbandaddy.com/uploads/assets/image/articles/standard/86a3b490c0fc9e242364c964e2160624.png',
      [
        new Ingredient('Beef Patty', 1),
        new Ingredient('Hamburger Buns', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Lettuce', 1),
        new Ingredient('Onion', 1)
      ]), 
    new Recipe(
      'French Fries',
      'Delicious french fries!',
      'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/baked-garlic-fries_40221.jpg',
      [
        new Ingredient('Potatoes', 20),
        new Ingredient('Cooking Oil', 1)
      ]) 
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
