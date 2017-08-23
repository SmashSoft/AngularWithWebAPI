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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var PrayerHouseService = (function () {
    function PrayerHouseService(_http) {
        this._http = _http;
        this._url = "http://localhost/WebAPI/API/PrayerHouse";
    }
    PrayerHouseService.prototype.getPrayerHouse = function () {
        return this._http.get(this._url).map(function (response) { return response.json(); });
    };
    PrayerHouseService.prototype.addPrayerHouse = function (prayerHouse) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log('calling service');
        console.log(JSON.stringify(prayerHouse));
        return this._http.post(this._url + "/Post", JSON.stringify(prayerHouse), options)
            .catch(this.handleError);
    };
    PrayerHouseService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw('Server Error');
    };
    return PrayerHouseService;
}());
PrayerHouseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PrayerHouseService);
exports.PrayerHouseService = PrayerHouseService;
//# sourceMappingURL=prayerhouse.service.js.map