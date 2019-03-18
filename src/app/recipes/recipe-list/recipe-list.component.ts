import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
import * as fromRecipe from '../ngrx-store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	// recipes: Recipe[];
  recipeState: Observable<fromRecipe.State>;
  // subscription: Subscription;

  constructor(// private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    // this.subscription = this.recipeService.recipesChanged
    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipes = recipes;
    //     }
    //   );
    // this.recipes = this.recipeService.getRecipes();
    this.recipeState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
