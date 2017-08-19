import { Component, OnInit } from '@angular/core';
import { PrayerHouseService } from "./prayerhouse.service";
import { PrayerHouse } from "./prayerhouse.interface";


    @Component({
        selector: 'prayerhouse-app',
        template: `<ul><li  *ngFor="let pHouse of prayerHomes">{{pHouse}} </li></ul>`,
        providers: [PrayerHouseService]
    })

    export class PrayerHouseComponent implements OnInit {
        prayerHomes = Array <PrayerHouse>();

        constructor(private _prayerhouseService: PrayerHouseService) { }
        ngOnInit() {
            //this.prayerHomes = this._prayerhouseService.getPrayerHouse();
            this._prayerhouseService.getPrayerHouse().subscribe(respData => this.prayerHomes = respData);
        }
}



//export class PrayerHouseWithPropery
//{
//    constructor(public PrayerHouseId: number, public PrayerHouseName: string, public PrayerHouseCategory: string, public Address: string) { }   
//}