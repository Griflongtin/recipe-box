import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='jumbotron container'>
    <h1>Name:</h1>
    <h3>{{name}}</h3>
    <h1>Ingredients:</h1>
    <ul>
      <li *ngFor="let currentIngredients of ingredients">{{currentIngredients.ingredients}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  name: string = 'Torta';
  ingredients: Ingredient[] = [
    new Ingredient('8 large garlic cloves, minced'),
    new Ingredient('2/3 cup orange juice'),
    new Ingredient('2/3 cup lime juice'),
    new Ingredient('2 tablespoons achiote seasoning paste'),
    new Ingredient('2 tablespoons olive oil'),
    new Ingredient('2 tsp. kosher salt, divided'),
    new Ingredient('2 teaspoons Mexican oregano'),
    new Ingredient('1 whole chicken')
  ];
}

export class Ingredient {
  public done: boolean = false;
  constructor(public ingredients: string) { }
}
