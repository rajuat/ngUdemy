import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ServerService {

    constructor(private http: HttpClient){
    }

    storeServers(servers: any[]) {
        const header = new Headers({'Content-Type': 'application/json'});
        // return this.http.post(
        //     'https://udemy-ng-http-10761.firebaseio.com/data.json', 
        //     servers,
        //     { headers: header }); 
            return this.http.put(
            'https://udemy-ng-http-10761.firebaseio.com/data.json', 
            servers,
            //{ headers: header }
            );
    }

    getServers() {
       return this.http.get('https://udemy-ng-http-10761.firebaseio.com/data.json').pipe(
            map((response: Response) => {
                return response.json();
            })
            ,catchError((error: Response ) => {
                return Observable.throw('Something went wrong');
            }));
    }

    getName(){        
        return this.http.get('https://udemy-ng-http-10761.firebaseio.com/data.json').pipe(
            map((response: Response) => {
                return response.json();
            }));
    }

}