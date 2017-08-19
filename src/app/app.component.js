"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prayerhouse_service_1 = require("./prayerhouse/prayerhouse.service");
var forms_1 = require("@angular/forms");
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
var AppComponent = (function () {
    function AppComponent(_formBuilder, _service) {
        this._formBuilder = _formBuilder;
        this._service = _service;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            prayerHouseName: ["test", [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            prayerHouseCategory: [],
            prayerHousePlace: [],
            prayerHouseCity: [],
            prayerHouseState: [],
            prayerHouseZipCode: [null, [forms_1.Validators.required, forms_1.Validators.pattern('^[1-9][0-9]{5}$')]]
        });
    };
    AppComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
        //if (isValid) {
        //this._service.addPrayerHouse(this._objPrayerHouse).subscribe(z => console.log('saved ${JSON.stringify(this._objPrayerHouse)}'));
        // }
        //else
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [prayerhouse_service_1.PrayerHouseService],
        styles: ["input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}"]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, prayerhouse_service_1.PrayerHouseService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map