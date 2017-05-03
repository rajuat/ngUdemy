import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef:  ElementRef ;
  @ViewChild('amountInput') amountRef:  ElementRef ; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { }

  addIngredient(){   
    console.log('adding ingreient');
    const name =  this.nameRef.nativeElement.value;
    const amount =  this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
    
  }

}
