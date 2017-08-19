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
var prayerhouse_service_1 = require("./prayerhouse.service");
var PrayerHouseComponent = (function () {
    function PrayerHouseComponent(_prayerhouseService) {
        this._prayerhouseService = _prayerhouseService;
        this.prayerHomes = Array();
    }
    PrayerHouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.prayerHomes = this._prayerhouseService.getPrayerHouse();
        this._prayerhouseService.getPrayerHouse().subscribe(function (respData) { return _this.prayerHomes = respData; });
    };
    return PrayerHouseComponent;
}());
PrayerHouseComponent = __decorate([
    core_1.Component({
        selector: 'prayerhouse-app',
        template: "<ul><li  *ngFor=\"let pHouse of prayerHomes\">{{pHouse}} </li></ul>",
        providers: [prayerhouse_service_1.PrayerHouseService]
    }),
    __metadata("design:paramtypes", [prayerhouse_service_1.PrayerHouseService])
], PrayerHouseComponent);
exports.PrayerHouseComponent = PrayerHouseComponent;
//export class PrayerHouseWithPropery
//{
//    constructor(public PrayerHouseId: number, public PrayerHouseName: string, public PrayerHouseCategory: string, public Address: string) { }   
//} 
//# sourceMappingURL=prayerhouse.component.js.map