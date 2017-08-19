import { Component, OnInit } from '@angular/core';
import { PrayerHouseService } from "./prayerhouse/prayerhouse.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrayerHouse } from "./prayerhouse/prayerhouse.interface";


//Template driven forms
//@Component({
//    selector: 'my-app',
//    templateUrl: 'app/app.component.html',
//    //providers: [PrayerHouseService],
//    styles: [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}` ]

//})
//export class AppComponent  {
//    MyName = "Angular";    

//    onSubmit(value: any) {
//        console.log(value);
//    }
//}



/*Model Driven forms*/
//import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [PrayerHouseService],
    styles: [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`]
})

export class AppComponent implements OnInit {




    /* userForm = new FormGroup({
         prayerHouseName: new FormControl("Manoj", [Validators.required, Validators.minLength(4)]),
         phCategory: new FormControl(),
         //phaddress: new FormGroup({
             phPlace: new FormControl(),
             phCity: new FormControl(),
             phState: new FormControl(),
             phZipCode: new FormControl(null, [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')])
         //})
     });*/


    //Using formbuilder

    //FomBuilder
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

    onSubmit() {
        console.log(this.userForm.value);
        //if (isValid) {
        //this._service.addPrayerHouse(this._objPrayerHouse).subscribe(z => console.log('saved ${JSON.stringify(this._objPrayerHouse)}'));
        // }
        //else

    }
}