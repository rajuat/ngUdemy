import { ObservablesUserService } from './observables-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers: [ObservablesUserService]
})
export class ObservablesComponent implements OnInit {
  u1a: boolean = false;
  u2a: boolean = false;
  constructor(private obsUserService: ObservablesUserService) { }

  ngOnInit() {
    this.obsUserService.subject.subscribe(
      (i: number) => {
        if(i === 1){
          this.u1a = true;
        } else if( i ===2){
          this.u2a =  true;
        }
      }
    );
  }

}
