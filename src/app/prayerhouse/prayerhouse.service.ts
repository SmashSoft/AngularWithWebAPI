import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PrayerHouse } from "./prayerhouse.interface";



@Injectable()
export class PrayerHouseService
{
    private _url: string = "http://localhost/WebAPI/API/PrayerHouse";
    constructor(private _http: Http) {

    }
    getPrayerHouse() {
        return this._http.get(this._url).map((response: Response) => response.json());
    }

    addPrayerHouse(prayerHouse:PrayerHouse) {

        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       
       
        return this._http.post(`${this._url}/Post`, JSON.stringify( prayerHouse ), options)
            //.map(res => res.json().data)
            .catch(this.handleError);
           

    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw( 'Server Error');
    }
}

