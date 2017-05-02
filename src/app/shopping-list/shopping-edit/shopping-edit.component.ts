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

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    
    this.ingredient.emit(new Ingredient(
      this.nameRef.nativeElement.value,
      this.amountRef.nativeElement.value
    ));

  }

}
