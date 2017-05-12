import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  myNumberObsSubscription: Subscription;
  myCustomObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const myObservable = Observable.create((observer: Observer<string>) => {
        setTimeout(()=>{
          observer.next('first package');
        }, 2000);
        setTimeout(()=>{
          observer.next('second package');
        }, 4000);
        setTimeout(()=>{
          observer.error('this does not work');
        }, 5000);

        setTimeout(()=>{
          observer.next('first package');
        }, 2000);
        setTimeout(()=>{
          observer.complete();
        }, 4000);
        setTimeout(()=>{
          observer.next('this does not work');
        }, 5000);
    });

    this.myCustomObsSubscription = myObservable.subscribe(
      (pack: string) => {
        console.log(pack);
      },
      (error: Error)=>{ // error: string
        console.log(error);
      },
      ()=>{
        console.log("completed");
      }
    );

    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
            return data*2;
        }
      );
    this.myNumberObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);        
      }
    );
    
  }


  ngOnDestroy(){
    this.myCustomObsSubscription.unsubscribe();
    this.myNumberObsSubscription.unsubscribe();
  }
  

}
