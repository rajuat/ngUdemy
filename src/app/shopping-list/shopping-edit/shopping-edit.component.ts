import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, OnDestroy, ViewChild, } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  editingItemIdex: number;
  editingItem: Ingredient;
  editingMode = false;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editingItem.subscribe((index: number) => {
      this.editingItemIdex = index;
      this.editingMode = true;
      this.editingItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        'name': this.editingItem.name,
        'amount': this.editingItem.amount
      });
    });
  }

  onAddItem() {
    const name = this.slForm.value.name;
    const amount = this.slForm.value.amount;
    const ingredient = new Ingredient(name, amount);
    if (this.editingMode) {
      this.shoppingListService.updateIngredient(this.editingItemIdex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.reset();
  }

  onClear() {
    this.reset();
  }

  onDelete(index: number) {
    this.shoppingListService.deleteIngredient(index);
    this.reset();
  }

  reset() {
    this.slForm.reset();
    this.editingMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
