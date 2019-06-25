import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../recipes/recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from "src/app/shared/data-storage.service";
import { HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() featureSelector = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipe().subscribe(
      (response: Response) => {
        console.log(response);        
      }
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipe();
  }

  onSignout(){
    this.authService.signoutUser();
  }

  // onSelect(feature: string){
  //   this.featureSelector.emit(feature);
  // }

}
