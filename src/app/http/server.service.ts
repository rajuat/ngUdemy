import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class ServerService {

    constructor(private http: Http){
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
            { headers: header });
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-10761.firebaseio.com/data.json')
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response ) => {
                return Observable.throw('Something went wrong');
            });
    }

    getName(){
        return this.http.get('https://udemy-ng-http-10761.firebaseio.com/appName.json')
            .map((response: Response) => {
                return response.json();
            });
    }

}