import { Component, OnInit } from '@angular/core';
import { PrayerHouseService } from "./prayerhouse/prayerhouse.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrayerHouse } from "./prayerhouse/prayerhouse.interface";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [PrayerHouseService],
    styles: [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`]
})

export class AppComponent implements OnInit {

    _objPrayerHouse: PrayerHouse;
    userForm: FormGroup;


    constructor(private _formBuilder: FormBuilder, private _service: PrayerHouseService) { }
    ngOnInit() {
        this.userForm = this._formBuilder.group({
            prayerHouseName: ["test", [Validators.required, Validators.minLength(1)]],
                prayerHouseCategory: [],
                prayerHousePlace: [],
                prayerHouseCity: [],
                prayerHouseState: [],
            prayerHouseZipCode: [null, [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]]
        });


    }

    onSubmit(model: PrayerHouse, isValid: boolean) {
        console.log(model, isValid);
        this._objPrayerHouse = model;
        this._service.addPrayerHouse(this._objPrayerHouse).subscribe(z => console.log('saved ${JSON.stringify(this._objPrayerHouse)}'));
         

    }
}