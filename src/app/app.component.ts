import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC2Myvtb-UcWe0SNPeKOAlw_vIVc0_E-yc",
      authDomain: "udemy-ng-http-10761.firebaseapp.com",
    });
  }
  // loadedFeature = 'recipe';

  // onFeatureSelected(feature: string){
  //   this.loadedFeature = feature;
  // }
  
}
