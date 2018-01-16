import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <div class='jumbotron container'>
    <div *ngFor="let recipe of recipeBox">
      <h3>Name:</h3>
      <h2>{{recipe.name}}</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
      </ul>
      <h3>Directions:</h3>
      <ul>
        <li (click)="isDone(direction)" *ngFor="let direction of recipe.directions"><button (click)="removeStep()">Done!</button>{{direction}}</li>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  recipeBox: Recipe[] = [
    new Recipe('Torta', ['8 large garlic cloves','minced, 2/3 cup orange juice, 2/3 cup lime juice', '2 tablespoons achiote seasoning paste', '2 tablespoons olive oil', '2 tsp. kosher salt', 'divided', '2 teaspoons Mexican oregano', '1 whole chicken'], ['Step 1 - In a large, deep bowl, combine garlic, orange and lime juices, achiote, oil, 1 tsp. salt, and the oregano.', 'Step 2 - With poultry shears or kitchen scissors, cut backbone and tail from chicken and discard. Set chicken with breast up on a work surface and press firmly with hands to flatten somewhat. Tuck wing tips under body. Turn chicken to coat in seasonings and chill at least 4 hours and up to 24 hours, turning occasionally.', 'Step 3 - Meanwhile, put onion in a heatproof bowl. Add boiling water to cover. Let stand until onion is softened, about 10 minutes. Drain, then add vinegar and 1 tsp. salt. Chill, stirring occasionally.', 'Step 4 - Heat a grill (preferably mesquite charcoal briquets) to medium (350° to 450°) with an area cleared of coals (for charcoal grill) or a burner turned off (for gas) to make an indirect heat area. Grill chicken over indirect heat, covered, turning occasionally, until no longer pink in thickest part (cut to test), 45 to 50 minutes; for charcoal add 4 more briquets to each side of fire after 30 minutes. Transfer to a board and let rest about 10 minutes.', 'Step 5 - Pull chicken and skin from bones with fingers and a fork. Drain onion. In a bowl, combine avocado with salt to taste; smear over bottoms of rolls. Add chicken, lettuce, and pickled onion, and serve with hot sauce on the side.', 'Step 6 - Make ahead: Pickled onion, up to 3 days, chilled.', 'Step 7 - Find achiote paste and telera rolls at well-stocked grocery stores and Latino markets.', 'Step 8 - Pull chicken and skin from bones with fingers and a fork. Drain onion. In a bowl, combine avocado with salt to taste; smear over bottoms of rolls. Add chicken, lettuce, and pickled onion, and serve with hot sauce on the side.']),

    new Recipe('Hamburger', ['8 large garlic cloves, minced', '2/3 cup orange juice', '2/3 cup lime juice', '2 tablespoons achiote seasoning paste', '2 tablespoons olive oil', '2 tsp. kosher salt, divided', '2 teaspoons Mexican oregano', '1 whole chicken'], ['Step 1 - In a large, deep bowl, combine garlic, orange and lime juices, achiote, oil, 1 tsp. salt, and the oregano.', 'Step 2 - With poultry shears or kitchen scissors, cut backbone and tail from chicken and discard. Set chicken with breast up on a work surface and press firmly with hands to flatten somewhat. Tuck wing tips under body. Turn chicken to coat in seasonings and chill at least 4 hours and up to 24 hours, turning occasionally.', 'Step 3 - Meanwhile, put onion in a heatproof bowl. Add boiling water to cover. Let stand until onion is softened, about 10 minutes. Drain, then add vinegar and 1 tsp. salt. Chill, stirring occasionally.', 'Step 4 - Heat a grill (preferably mesquite charcoal briquets) to medium (350° to 450°) with an area cleared of coals (for charcoal grill) or a burner turned off (for gas) to make an indirect heat area. Grill chicken over indirect heat, covered, turning occasionally, until no longer pink in thickest part (cut to test), 45 to 50 minutes; for charcoal add 4 more briquets to each side of fire after 30 minutes. Transfer to a board and let rest about 10 minutes.', 'Step 5 - Pull chicken and skin from bones with fingers and a fork. Drain onion. In a bowl, combine avocado with salt to taste; smear over bottoms of rolls. Add chicken, lettuce, and pickled onion, and serve with hot sauce on the side.', 'Step 6 - Make ahead: Pickled onion, up to 3 days, chilled.', 'Step 7 - Find achiote paste and telera rolls at well-stocked grocery stores and Latino markets.', 'Step 8 - Pull chicken and skin from bones with fingers and a fork. Drain onion. In a bowl, combine avocado with salt to taste; smear over bottoms of rolls. Add chicken, lettuce, and pickled onion, and serve with hot sauce on the side.'])
  ];
  removeStep() {
    alert("This is hell!")
  }

  isDone(clickedDirection: Recipe) {
    if(clickedDirection.done === true) {
      alert("This task is done!");
    } else {
      alert("This task is not done. Better get to work!");
    }
  }
}

export class Recipe {
  public done: boolean = false;

  constructor(
    public name: string,
    public ingredients: string[],
    public directions: string[]
  ) { }
}
