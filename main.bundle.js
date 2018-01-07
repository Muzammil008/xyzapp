webpackJsonp([0,5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpServices = (function () {
    function HttpServices(localstorages, http) {
        this.localstorages = localstorages;
        this.http = http;
        this.url = 'http://192.168.15.32:8081/';
    }
    //No Parameter route,For Open Route.
    HttpServices.prototype.GetSinglehttp = function (service) {
        return this.http.get(this.url + service)
            .map(function (respose) { return respose.json(); });
    };
    //Taking Parameter route,For Open Route.
    HttpServices.prototype.Gethttpwithparam = function (service, data) {
        return this.http.get(this.url + service, data)
            .map(function (respose) { return respose.json(); });
    };
    //No Parameter route,For close Route.
    HttpServices.prototype.GetSinglehttpwithtoken = function (service) {
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        // head.append('token', localStorage.getItem("TOKEN"));
        head.append('token', JSON.parse(this.localstorages.getsingleitems("TOKEN")));
        return this.http.get(this.url + service, { "headers": head })
            .map(function (respose) { return respose.json(); });
    };
    //Taking Parameter route,For close Route.
    HttpServices.prototype.GetSinglehttpwithparamtoken = function (service, data) {
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        // head.append('token', localStorage.getItem("TOKEN"));
        head.append('token', JSON.parse(this.localstorages.getsingleitems("TOKEN")));
        return this.http.get(this.url + service, data)
            .map(function (respose) { return respose.json(); });
    };
    HttpServices.prototype.postSinglehttpwithtonken = function (service, data) {
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        // head.append('token', localStorage.getItem("TOKEN"));
        head.append('token', JSON.parse(this.localstorages.getsingleitems("TOKEN")));
        return this.http.post(this.url + service, data, {
            headers: head
        })
            .map(function (respose) { return respose.json(); });
    };
    HttpServices.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    HttpServices.prototype.Posthttp = function (method, data) {
        return this.http.post(this.url + method, data)
            .map(function (respose) { return respose.json(); })
            .catch(this.handleError);
    };
    return HttpServices;
}());
HttpServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], HttpServices);

var _a, _b;
//# sourceMappingURL=http.services.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Localstorage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Localstorage = (function () {
    function Localstorage() {
    }
    Localstorage.prototype.setsingleitems = function (data, storageName) {
        //encrypt
        var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), "Exatex P@ssword");
        localStorage.setItem(storageName, encrypted);
    };
    Localstorage.prototype.getsingleitems = function (storageName) {
        //decrypt
        var encryptdata = localStorage.getItem(storageName);
        if (encryptdata != null || encryptdata != undefined) {
            var bytes = CryptoJS.AES.decrypt(encryptdata.toString(), "Exatex P@ssword");
            var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            return decryptedData;
        }
    };
    Localstorage.prototype.setarrayitems = function (data, storageName) {
        //encrypt
        var encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), "Exatex P@ssword");
        localStorage.setItem(storageName, encrypted);
    };
    Localstorage.prototype.getarrayitems = function (storageName) {
        //decrypt
        var encryptdata = localStorage.getItem(storageName);
        if (encryptdata != null || encryptdata != undefined) {
            var bytes = CryptoJS.AES.decrypt(encryptdata.toString(), "Exatex P@ssword");
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
        }
    };
    return Localstorage;
}());
Localstorage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Localstorage);

//# sourceMappingURL=StorageService.service.js.map

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGlobals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppGlobals = (function () {
    function AppGlobals() {
    }
    return AppGlobals;
}());
AppGlobals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppGlobals);

//# sourceMappingURL=app.global.js.map

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.pagesJSON = {
            "main_header": true,
            "main_search_bar": true,
            "main_slider_bar": true,
            "main_nav_bar": true,
            "app_home": true,
            "main_footer": true
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(325),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobilecontrolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobilecontrolComponent = (function () {
    function MobilecontrolComponent() {
    }
    MobilecontrolComponent.prototype.ngOnInit = function () {
    };
    return MobilecontrolComponent;
}());
MobilecontrolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mobilecontrol',
        template: __webpack_require__(334),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [])
], MobilecontrolComponent);

//# sourceMappingURL=mobilecontrol.component.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorcontrolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MotorcontrolComponent = (function () {
    function MotorcontrolComponent() {
    }
    MotorcontrolComponent.prototype.ngOnInit = function () {
    };
    return MotorcontrolComponent;
}());
MotorcontrolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'motorcontrol',
        template: __webpack_require__(335),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [])
], MotorcontrolComponent);

//# sourceMappingURL=motorcontrol.component.js.map

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkguard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Checkguard = (function () {
    function Checkguard(localstorages, router) {
        this.localstorages = localstorages;
        this.router = router;
    }
    Checkguard.prototype.canActivate = function () {
        var isactive = this.localstorages.getarrayitems("Userdata");
        if (isactive != undefined) {
            if (isactive.length > 0) {
                this.router.navigate(['/main']);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    };
    return Checkguard;
}());
Checkguard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], Checkguard);

var _a, _b;
//# sourceMappingURL=checkguard.js.map

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(198);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_http_services__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountsettingComponent = (function () {
    function AccountsettingComponent(router, element, httpservice, localstorages) {
        this.router = router;
        this.element = element;
        this.httpservice = httpservice;
        this.localstorages = localstorages;
        this.filesToUpload = [];
    }
    AccountsettingComponent.prototype.ngOnInit = function () {
        var userdata = this.localstorages.getarrayitems('Userdata');
        this.UserId = userdata[0].UserId;
        console.log(userdata);
        this.UserName = userdata[0].Name;
        var that = this;
        if (userdata != null || userdata != undefined) {
            that.Images = "http://localhost:8081/api/GetUserProfileimage/UserProfilePic-" + userdata[0].UserId + ".png";
        }
        this.UserMobile = userdata[0].Phone_no;
        this.UserEmail = userdata[0].email;
    };
    AccountsettingComponent.prototype.UpdateUserAccount = function (data) {
        var _this = this;
        console.log(data);
        var Userinfo = { Name: data.UserName, Phone_no: data.UserMobile, NewPassword: data.newpassword, CurrentPassword: data.currentpassword };
        this.httpservice.Posthttp("api/UpdateUserInfo/" + this.UserId, Userinfo).subscribe(function (res) {
            _this.localstorages.setarrayitems(res.userData, "Userdata");
            swal({
                type: 'success',
                title: 'Success!',
                html: 'User Profile Update Successfully!'
            });
            _this.router.navigate(["main"]);
        });
    };
    AccountsettingComponent.prototype.changeListner = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
        };
        console.log(event);
        reader.readAsDataURL(event.target.files[0]);
    };
    AccountsettingComponent.prototype.setDefaultPic = function () {
        this.Images = "/assets/more_assets/images/ad3.jpg";
    };
    return AccountsettingComponent;
}());
AccountsettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-accountsetting',
        template: __webpack_require__(321),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], AccountsettingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=accountsetting.component.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdcartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdcartComponent = (function () {
    function AdcartComponent(_global, element, router, localstorages, httpservice) {
        this._global = _global;
        this.element = element;
        this.router = router;
        this.localstorages = localstorages;
        this.httpservice = httpservice;
        this.showeditable = false;
        this.sum = 0;
    }
    AdcartComponent.prototype.ngOnInit = function () {
        var userdata = this.localstorages.getarrayitems("Userdata");
        this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        if (userdata == undefined) {
            this.router.navigate(["/login"]);
        }
        // if (userdata != undefined) {
        //   this.httpservice.GetSinglehttp("api/getAdCartdata" + "/" + userdata[0].UserId)
        //     .subscribe(
        //     res => {
        //       this.cartdata = res.AdCartdata;
        //       console.log(this.cartdata)
        //     });
        // }
        this.gettotal();
    };
    AdcartComponent.prototype.edit = function (val) {
        this.rowid = val;
    };
    AdcartComponent.prototype.gettotal = function () {
        this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        for (var i = 0; i < this.cartdata.length; i++) {
            this.sum = this.sum + parseInt(this.cartdata[i].Price);
        }
        return this.sum;
    };
    AdcartComponent.prototype.getSum = function () {
        var _this = this;
        this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        var sum = 0;
        this.cartdata.forEach(function (model) {
            sum += parseInt(_this.cartdata.price);
        });
        return sum;
    };
    AdcartComponent.prototype.popcartitem = function (index) {
        // alert(index)
        this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        this.cartdata.splice(index, 1);
        this.localstorages.setarrayitems(this.cartdata, 'AdCartdata');
    };
    AdcartComponent.prototype.checkout = function () {
        var _this = this;
        this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        this.httpservice.Posthttp("api/AdCart", this.cartdata)
            .subscribe(function (res) {
            console.log(res);
            swal({
                type: 'success',
                title: 'Shopping!',
                html: 'Thanks For Ordering items,ShopOmania will contact You Soon'
            });
            localStorage.removeItem("AdCartdata");
            _this.router.navigate(["/main"]);
        });
    };
    AdcartComponent.prototype.itemdetail = function (categegoryid, adid, ShopId) {
        var _this = this;
        //   alert(categegoryid + " " + adid + ShopId)
        if (ShopId != null && ShopId != undefined) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    AdcartComponent.prototype.getSums = function (index, items) {
        var sum = 0;
        console.log(items);
        // for (let i = 0; i < items.length; i++) {
        //   sum += items[i][index].Price;
        // }
        // return sum;
    };
    return AdcartComponent;
}());
AdcartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-adcart',
        template: __webpack_require__(322),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _e || Object])
], AdcartComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=adcart.component.js.map

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllitemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllitemsComponent = (function () {
    function AllitemsComponent(router, _global, httpservice, localstorages) {
        this.router = router;
        this._global = _global;
        this.httpservice = httpservice;
        this.localstorages = localstorages;
        this.allitems = this._global.items;
    }
    AllitemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allitems = this.localstorages.getarrayitems("allitems");
        this._global.items = this.allitems;
        if (this.allitems != null || this.allitems != undefined) {
            this.httpservice.GetSinglehttp('api/getbrands/' + this.allitems[0].CategoryID)
                .subscribe(function (ress) {
                console.log(ress);
                _this._global.brand = ress;
            });
        }
    };
    AllitemsComponent.prototype.filterrecordbybrand = function (CategoryId, keyword) {
        var _this = this;
        // alert(keyword)
        if (keyword != undefined || keyword != null) {
            this.httpservice.GetSinglehttp('api/recordfilter/' + CategoryId + '/' + keyword)
                .subscribe(function (ress) {
                if (ress != undefined || ress != null) {
                    if (ress.length > 0) {
                        _this._global.items = ress;
                        _this.localstorages.setarrayitems(ress, 'allitems');
                    }
                    else {
                        swal('Oops...', "No result Found", 'error');
                        _this._global.items = _this.localstorages.getarrayitems("allitems");
                    }
                }
                else {
                    swal('Oops...', "No result Found", 'error');
                    _this._global.items = _this.localstorages.getarrayitems("allitems");
                }
            });
            window.scrollTo(10, 200);
        }
    };
    AllitemsComponent.prototype.filterrecordbysearch = function (CategoryId, keyword, e) {
        var _this = this;
        if (e.target.checked == true) {
            this.httpservice.GetSinglehttp('api/recordfilterbyprice/' + CategoryId + '/' + keyword)
                .subscribe(function (ress) {
                console.log(ress);
                if (ress != undefined || ress != null) {
                    if (ress.length > 0) {
                        _this._global.items = ress;
                        _this.localstorages.setarrayitems(ress, 'allitems');
                    }
                    else {
                        swal('Oops...', "No result Found", 'error');
                        _this._global.items = _this.localstorages.getarrayitems("allitems");
                    }
                }
                else {
                    swal('Oops...', "No result Found", 'error');
                    _this._global.items = _this.localstorages.getarrayitems("allitems");
                }
            });
            window.scrollTo(10, 200);
        }
        else {
            e.target.checked = false;
            window.scrollTo(10, 200);
        }
    };
    AllitemsComponent.prototype.itemdetail = function (categegoryid, adid, email) {
        var _this = this;
        if (email == null) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    return AllitemsComponent;
}());
AllitemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-allitems',
        template: __webpack_require__(323),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], AllitemsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=allitems.component.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllresultComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllresultComponent = (function (_super) {
    __extends(AllresultComponent, _super);
    function AllresultComponent() {
        return _super.call(this) || this;
    }
    AllresultComponent.prototype.ngOnInit = function () {
    };
    return AllresultComponent;
}(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]));
AllresultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-allresult',
        template: __webpack_require__(324),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [])
], AllresultComponent);

//# sourceMappingURL=allresult.component.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_guard_checkguard__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_social_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_account_my_account_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_bar_search_bar_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__nav_bar_nav_bar_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__main_page_main_page_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__posting_posting_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__slider_slider_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sidebar_sidebar_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__create_shop_create_shop_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__myshops_myshops_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pagenotfound_pagenotfound_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_completer__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__mobilecontrol_mobilecontrol_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shopitems_shopitems_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__motorcontrol_motorcontrol_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__noaccount_noaccount_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__test_test_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__autocomp_autocomp_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__searchproduct_searchproduct_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__allresult_allresult_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__itemdetail_itemdetail_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__accountsetting_accountsetting_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__allitems_allitems_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_pagination__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shop_ads_shop_ads_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__testing_testing_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__adcart_adcart_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__receiveorder_receiveorder_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__wishlist_wishlist_component__ = __webpack_require__(197);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Import all Libraries here










//Import all Components here 


































function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var providers = {
    "google": {
        "clientId": "176580230944-g36qn1qv61l24t1ke1ogs0kgh576gdch.apps.googleusercontent.com"
    }
    // "linkedin": {
    //   "clientId": "LINKEDIN_CLIENT_ID"
    // },
    // "facebook": {
    //   "clientId": "FACEBOOK_CLIENT_ID",
    //   "apiVersion": "<version>" //like v2.4 
    // }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__my_account_my_account_component__["a" /* MyAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__posting_posting_component__["a" /* PostingComponent */],
            __WEBPACK_IMPORTED_MODULE_25__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_26__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_27__create_shop_create_shop_component__["a" /* CreateShopComponent */],
            __WEBPACK_IMPORTED_MODULE_28__myshops_myshops_component__["a" /* MyshopsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_31__mobilecontrol_mobilecontrol_component__["a" /* MobilecontrolComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shopitems_shopitems_component__["a" /* ShopitemsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__motorcontrol_motorcontrol_component__["a" /* MotorcontrolComponent */],
            __WEBPACK_IMPORTED_MODULE_34__noaccount_noaccount_component__["a" /* NoaccountComponent */],
            __WEBPACK_IMPORTED_MODULE_35__test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_36__autocomp_autocomp_component__["a" /* AutocompComponent */],
            __WEBPACK_IMPORTED_MODULE_37__searchproduct_searchproduct_component__["a" /* SearchproductComponent */],
            __WEBPACK_IMPORTED_MODULE_38__allresult_allresult_component__["a" /* AllresultComponent */],
            __WEBPACK_IMPORTED_MODULE_39__itemdetail_itemdetail_component__["a" /* ItemdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_40__accountsetting_accountsetting_component__["a" /* AccountsettingComponent */],
            __WEBPACK_IMPORTED_MODULE_41__allitems_allitems_component__["a" /* AllitemsComponent */],
            __WEBPACK_IMPORTED_MODULE_43__shop_ads_shop_ads_component__["a" /* ShopAdsComponent */],
            __WEBPACK_IMPORTED_MODULE_44__testing_testing_component__["a" /* TestingComponent */],
            __WEBPACK_IMPORTED_MODULE_45__adcart_adcart_component__["a" /* AdcartComponent */],
            __WEBPACK_IMPORTED_MODULE_46__receiveorder_receiveorder_component__["a" /* ReceiveorderComponent */],
            __WEBPACK_IMPORTED_MODULE_47__wishlist_wishlist_component__["a" /* WishlistComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_42_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_30_ng2_completer__["a" /* Ng2CompleterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_social_login__["a" /* Angular2SocialLoginModule */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'my-app',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '', component: __WEBPACK_IMPORTED_MODULE_23__main_page_main_page_component__["a" /* MainPageComponent */], pathMatch: 'full'
                },
                {
                    path: 'allresult', component: __WEBPACK_IMPORTED_MODULE_38__allresult_allresult_component__["a" /* AllresultComponent */],
                    children: [
                        { path: 'allitems', component: __WEBPACK_IMPORTED_MODULE_41__allitems_allitems_component__["a" /* AllitemsComponent */] },
                        { path: 'shopads', component: __WEBPACK_IMPORTED_MODULE_43__shop_ads_shop_ads_component__["a" /* ShopAdsComponent */] },
                        { path: 'wishlist', component: __WEBPACK_IMPORTED_MODULE_47__wishlist_wishlist_component__["a" /* WishlistComponent */] },
                        { path: 'adcart', component: __WEBPACK_IMPORTED_MODULE_45__adcart_adcart_component__["a" /* AdcartComponent */] },
                        { path: 'testing', component: __WEBPACK_IMPORTED_MODULE_44__testing_testing_component__["a" /* TestingComponent */] },
                        {
                            path: 'search', component: __WEBPACK_IMPORTED_MODULE_37__searchproduct_searchproduct_component__["a" /* SearchproductComponent */]
                        },
                    ]
                },
                { path: "allresult/Product/:AdId", component: __WEBPACK_IMPORTED_MODULE_39__itemdetail_itemdetail_component__["a" /* ItemdetailComponent */] },
                {
                    path: 'main', component: __WEBPACK_IMPORTED_MODULE_23__main_page_main_page_component__["a" /* MainPageComponent */]
                },
                // { path: 'itemdetail', component: ItemdetailComponent },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__router_guard_checkguard__["a" /* Checkguard */]] },
                { path: 'posting', component: __WEBPACK_IMPORTED_MODULE_24__posting_posting_component__["a" /* PostingComponent */] },
                { path: 'registraion', component: __WEBPACK_IMPORTED_MODULE_15__registration_registration_component__["a" /* RegistrationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__router_guard_checkguard__["a" /* Checkguard */]] },
                {
                    path: 'myAccount', component: __WEBPACK_IMPORTED_MODULE_17__my_account_my_account_component__["a" /* MyAccountComponent */],
                    children: [
                        { path: 'myshops', component: __WEBPACK_IMPORTED_MODULE_28__myshops_myshops_component__["a" /* MyshopsComponent */] },
                        { path: 'accountsetting', component: __WEBPACK_IMPORTED_MODULE_40__accountsetting_accountsetting_component__["a" /* AccountsettingComponent */] },
                        { path: 'shopitems', component: __WEBPACK_IMPORTED_MODULE_32__shopitems_shopitems_component__["a" /* ShopitemsComponent */] },
                        { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_46__receiveorder_receiveorder_component__["a" /* ReceiveorderComponent */] }
                    ]
                },
                { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */] },
                { path: 'createshop', component: __WEBPACK_IMPORTED_MODULE_27__create_shop_create_shop_component__["a" /* CreateShopComponent */] },
                { path: 'noaccount', component: __WEBPACK_IMPORTED_MODULE_34__noaccount_noaccount_component__["a" /* NoaccountComponent */] },
                { path: '**', component: __WEBPACK_IMPORTED_MODULE_29__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] },
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */], __WEBPACK_IMPORTED_MODULE_2__router_guard_checkguard__["a" /* Checkguard */], __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__["a" /* Localstorage */], __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

__WEBPACK_IMPORTED_MODULE_9_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);
//# sourceMappingURL=app.module.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompComponent = (function () {
    function AutocompComponent(myElement, httpservice) {
        this.httpservice = httpservice;
        this.query = '';
        // public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
        //                     "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
        //                     "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
        //                     "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
        //                     "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
        //                     "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
        //                     "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
        //                     "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
        this.countries = [
            { name: "mzu", age: "23" },
            { name: "mzu", age: "23" },
        ];
        this.filteredList = [];
        this.elementRef = myElement;
    }
    AutocompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allmobilesitems/New")
            .subscribe(function (ress) {
            _this.Trendmobileitems = ress;
            console.log(ress);
        });
    };
    return AutocompComponent;
}());
AutocompComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-autocomp',
        template: __webpack_require__(326),
        styles: [__webpack_require__(275)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_http_services__["a" /* HttpServices */]) === "function" && _b || Object])
], AutocompComponent);

var _a, _b;
//# sourceMappingURL=autocomp.component.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShopComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateShopComponent = (function (_super) {
    __extends(CreateShopComponent, _super);
    function CreateShopComponent(localstorages, router, httpservice) {
        var _this = _super.call(this) || this;
        _this.localstorages = localstorages;
        _this.router = router;
        _this.httpservice = httpservice;
        _this.Categories = [];
        _this.selectedcat = [];
        return _this;
    }
    CreateShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userdata = this.localstorages.getarrayitems("Userdata");
        if (userdata == null || userdata == undefined) {
            this.router.navigate(['/login']);
        }
        this.httpservice.GetSinglehttp("api/itemcategories")
            .subscribe(function (res) {
            _this.Categories = res;
            // console.log(res)
        });
    };
    CreateShopComponent.prototype.createshop = function (data) {
        var _this = this;
        this.selectedcat = data.itemcategories;
        console.log(data);
        var userdata = this.localstorages.getarrayitems("Userdata");
        console.log(userdata);
        var member = { nic: data.nic, shop_name: data.shopname, userid: userdata[0].UserId };
        this.httpservice.postSinglehttpwithtonken("api/Vendoraccount", member).subscribe(function (res) {
            console.log(res);
            if (res.Isvendor == 1) {
                console.log(res.Isvendor);
                _this.localstorages.setsingleitems(res.Isvendor, "IsVendor");
                _this.localstorages.setsingleitems(res.vendorId, "VendorId");
                _this.localstorages.setsingleitems(res.shopId, "ShopId");
            }
            var members = { ShopId: res.shopId, CategoryId: data.itemcategories };
            console.log(members);
            _this.httpservice.postSinglehttpwithtonken("api/Shopcategories", members).subscribe(function (res) {
                swal('Good job!', 'You have now your own Shop!', 'success');
                _this.router.navigate(['/main']);
            });
        });
        // var members = { ShopId: 2, CategoryId: data.itemcategories }
        //     console.log(members)
        //     this.httpservice.postSinglehttpwithtonken("api/Shopcategories", members).subscribe(
        //       res => {
        //         console.log("success!");
        //         this.router.navigate(['/main']);
        //       })
    };
    return CreateShopComponent;
}(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]));
CreateShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-create-shop',
        template: __webpack_require__(327),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object])
], CreateShopComponent);

var _a, _b, _c;
//# sourceMappingURL=create-shop.component.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-footer',
        template: __webpack_require__(328),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(_global, element, router, localstorages, httpservice) {
        this._global = _global;
        this.element = element;
        this.router = router;
        this.localstorages = localstorages;
        this.httpservice = httpservice;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        //this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        var _this = this;
        this.httpservice.GetSinglehttp("api/getjsondata")
            .subscribe(function (res) {
            // console.log(res)
            _this.jdata = res.jsonData.Data;
            console.log(_this.jdata);
        });
        var userdata = this.localstorages.getarrayitems("Userdata");
        var that = this;
        if (userdata != null || userdata != undefined) {
            that.Images = "http://localhost:8081/api/GetUserProfileimage/UserProfilePic-" + userdata[0].UserId + ".png";
            that.userid = userdata[0].UserId;
        }
        //var userdata = this.localstorages.getarrayitems("Userdata")
        var uservendor = this.localstorages.getsingleitems("IsVendor");
        if (userdata != null) {
            // this.imageurl = userdata[0].Image
            this.user = userdata[0].Name;
            // console.log(this.imageurl)
        }
        if (uservendor != null) {
            this.isvendor = uservendor;
        }
        if (this.isvendor == 0) {
            that.httpservice.GetSinglehttpwithtoken("api/isvendor/" + userdata[0].email)
                .subscribe(function (res) {
                console.log(res);
                that.localstorages.setsingleitems(res.Isvendor, "IsVendor");
                if (res.VendorId != undefined) {
                    that.localstorages.setsingleitems(res.VendorId, "VendorId");
                }
            });
        }
        // console.log(userdata[0].Image)
        //  this.httpservice.GetSinglehttpwithtoken("api/getimage/" +userdata[0].Image)
        //     .subscribe(
        //     res => {
        //    console.log(res.image)
        //   this. imageurl=res.image;
        //     });
    };
    // getjson(){
    //   this.httpservice.GetSinglehttp("api/getjsondata")
    //   .subscribe(
    //   res => {
    //    // console.log(res)
    //     this.jdata=res.jsonData.Data
    //     console.log(this.jdata)
    //   });
    // }
    HeaderComponent.prototype.setDefaultPic = function () {
        this.Images = "/assets/more_assets/images/ad3.jpg";
    };
    HeaderComponent.prototype.searchitems = function (keyword) {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allresults/" + keyword)
            .subscribe(function (res) {
            console.log(res);
            _this._global.items = res;
            _this.localstorages.setarrayitems(res, 'searchitems');
            if (_this.searchitems != null || _this.searchitems != undefined) {
                _this.httpservice.GetSinglehttp('api/getbrands/' + res[0].CategoryID)
                    .subscribe(function (ress) {
                    console.log(ress);
                    _this._global.brand = ress;
                });
            }
            _this.router.navigate(["/allresult/search"]);
        });
    };
    HeaderComponent.prototype.changeListner = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
        };
        console.log(event);
        reader.readAsDataURL(event.target.files[0]);
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
    };
    HeaderComponent.prototype.gotocart = function () {
        this.cartdata = this.localstorages.getarrayitems("AdCartdata");
        if (this.cartdata != undefined) {
            this.router.navigate(['allresult/adcart']);
        }
        else {
            swal('Oops...', 'Your Cart is Empty!', 'error');
        }
    };
    HeaderComponent.prototype.gotowishlist = function () {
        // alert("CXcx")
        this.router.navigate(['allresult/wishlist']);
        // if(this._global.wishitem != undefined || this._global.wishitem != null){
        //   this.router.navigate(['allresult/wishlist']);
        // }else{
        //   swal(
        //     'Oops...',
        //     'Your Wish list is Empty!',
        //     'error'
        //   )
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'main-header',
        template: __webpack_require__(329),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _e || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=header.component.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_TimerObservable__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(_global, router, httpservice, localstorages) {
        var _this = _super.call(this) || this;
        _this._global = _global;
        _this.router = router;
        _this.httpservice = httpservice;
        _this.localstorages = localstorages;
        _this.subscriptioncat = [];
        _this.mobileitems = [];
        _this.motorsitems = [];
        _this.Trendmotorsitems = [];
        _this.Trendmobileitems = [];
        _this.shops = [];
        _this.subscriptionlist = [];
        _this.userdata = [];
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allmobilesitems/New")
            .subscribe(function (ress) {
            // alert(ress)
            _this.Trendmobileitems = ress;
        });
        var timer = __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_TimerObservable__["TimerObservable"].create(2000, 1000);
        this.subscription = timer.subscribe(function (t) {
            t = t + 1;
            if (t == 1) {
                if (_this.userdata == undefined) {
                    UserId = 0;
                }
                else {
                    UserId = _this.userdata[0].UserId;
                }
                _this.httpservice.GetSinglehttp("api/Homepagedata/" + UserId)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.mobileitems = res.Mobile;
                    _this.motorsitems = res.Motor;
                    _this.localstorages.setarrayitems(res.Shop, 'subcribershoped');
                    //  console.log(res)
                    // if (that.userdata != undefined) {
                    //   that.httpservice.GetSinglehttpwithtoken("api/usersubscriptions/" + that.userdata[0].UserId)
                    //     .subscribe(
                    //     ressss => {
                    //       //  console.log(ressss)
                    //       this.subscriptionlist = ressss.subscription;
                    //     });
                    // }
                    _this.httpservice.GetSinglehttp("api/allmotorsitems/New")
                        .subscribe(function (res) {
                        _this.Trendmotorsitems = res;
                    });
                });
                _this.subscription.unsubscribe();
                document.getElementById("loading12").style.display = "none";
            }
        });
        var that = this;
        var UserId;
        this.userdata = this.localstorages.getarrayitems("Userdata");
    };
    HomeComponent.prototype.itemdetail = function (categegoryid, adid, email) {
        var _this = this;
        // alert(categegoryid + " " + adid + email)
        if (email == null) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    HomeComponent.prototype.getshopcatitems = function (ShopId, CategoryId) {
        console.log(ShopId + "  " + CategoryId);
        this.httpservice.GetSinglehttpwithtoken("api/activeallShopcatitems/" + ShopId + "/" + CategoryId)
            .subscribe(function (ress) {
            //   console.log(ress)
        });
    };
    HomeComponent.prototype.unsubscribe = function (SubscriptionId) {
        var _this = this;
        var that = this;
        console.log(SubscriptionId);
        var data = { SubscriptionId: SubscriptionId };
        this.httpservice.postSinglehttpwithtonken("api/UnsubscribeShop", data).subscribe(function (res) {
            // console.log(res);
            _this.userdata = _this.localstorages.getarrayitems("Userdata");
            if (_this.userdata != undefined) {
                that.httpservice.GetSinglehttpwithtoken("api/usersubscriptions/" + that.userdata[0].UserId)
                    .subscribe(function (ressss) {
                    that.subscriptionlist = ressss.subscription;
                    // this.subscriptionlist = ressss.subscription;
                    that.httpservice.GetSinglehttp("api/GetShops/" + that.userdata[0].UserId)
                        .subscribe(function (resss) {
                        _this.shops = resss;
                        //  console.log(resss)
                    });
                });
            }
        });
    };
    HomeComponent.prototype.subscribe = function (ShopId) {
        var _this = this;
        var that = this;
        var userdata = this.localstorages.getarrayitems("Userdata");
        if (userdata != undefined) {
            var postdata = { ShopID: ShopId, UserID: userdata[0].UserId };
            this.httpservice.postSinglehttpwithtonken("api/SubscribeShop", postdata).subscribe(function (res) {
                that.userdata = that.localstorages.getarrayitems("Userdata");
                if (_this.userdata != undefined) {
                    //   console.log(this.userdata[0].UserId)
                    that.httpservice.GetSinglehttpwithtoken("api/usersubscriptions/" + that.userdata[0].UserId)
                        .subscribe(function (ressss) {
                        that.subscriptionlist = ressss.subscription;
                        // console.log(this.subscriptionlist.length)
                        that.httpservice.GetSinglehttp("api/GetShops/" + that.userdata[0].UserId)
                            .subscribe(function (resss) {
                            that.shops = resss;
                            //console.log(resss)
                        });
                    });
                }
            });
        }
        else {
            //alert("Please Login for Subscribtion");
        }
    };
    HomeComponent.prototype.toprecordmotors = function () {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allmotorsitems")
            .subscribe(function (res) {
            _this.motorsitems = res;
        });
    };
    HomeComponent.prototype.getmotors = function (Condition) {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allmotorsitems/" + Condition)
            .subscribe(function (res) {
            _this.motorsitems = res;
        });
    };
    HomeComponent.prototype.toprecordmobiles = function () {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allmobilesitems")
            .subscribe(function (res) {
            _this.mobileitems = res;
        });
    };
    HomeComponent.prototype.getmobiles = function (Condition) {
        var _this = this;
        this.httpservice.GetSinglehttp("api/allmobilesitems/" + Condition)
            .subscribe(function (res) {
            _this.mobileitems = res;
        });
    };
    HomeComponent.prototype.quickviewitem = function (Condition, AdId) {
        // alert(AdId)
        // this.quickitem = null;
        var that = this;
        that.httpservice.GetSinglehttp("api/allitems/" + Condition + "/" + AdId)
            .subscribe(function (res) {
            that.quickitem = res;
        });
    };
    HomeComponent.prototype.adtocart = function (ShopID, AdId, Email, Image, Title, Price, CategoryId) {
        if (this.userdata != undefined || this.userdata != null) {
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            var data = {
                ShopID: ShopID,
                Email: Email,
                Title: Title,
                Price: Price,
                Image: Image,
                Order_Quantity: 1,
                CardName: 'BUY',
                Confirmitem: true,
                AdIdforcart: AdId,
                UserID: this.userdata[0].UserId,
                CategoryId: CategoryId
            };
            console.log(data);
            if (AdCart == undefined) {
                var datas = [];
                datas.push(data);
                this.localstorages.setarrayitems(datas, 'AdCartdata');
            }
            else {
                AdCart.push(data);
                this.localstorages.setarrayitems(AdCart, 'AdCartdata');
            }
            swal({
                type: 'success',
                title: 'Added!',
                html: 'Item Added in your Cart!'
            });
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            console.log(AdCart);
        }
        else {
            swal('Oops...', 'Please Login For Shopping!', 'error');
        }
    };
    HomeComponent.prototype.Adtowish = function (ShopID, AdId, Email, Image, Title, Price, CategoryId, description) {
        if (this.userdata != undefined || this.userdata != null) {
            // var Adwish = this.localstorages.getarrayitems("AdWishdata");
            var data = [];
            data = [{
                    ShopID: ShopID,
                    Email: Email,
                    Title: Title,
                    Price: Price,
                    Image: Image,
                    description: description,
                    AdIdforcart: AdId,
                    UserID: this.userdata[0].UserId,
                    CategoryId: CategoryId
                }];
            console.log(data);
            this.httpservice.Posthttp("api/Adwishitem", data)
                .subscribe(function (res) {
                console.log(res);
                swal({
                    type: 'success',
                    title: 'Added!',
                    html: 'Your selected item in your Wish List'
                });
            });
            // if (Adwish == undefined) {
            //   var datas = [];
            //   datas.push(data);
            //   this.localstorages.setarrayitems(datas, 'AdWishdata');
            // } else {
            //   Adwish.push(data);
            //   this.localstorages.setarrayitems(Adwish, 'AdWishdata');
            // }
            // swal({
            //   type: 'success',
            //   title: 'Added!',
            //   html: 'Item Added in your WishList!'
            // })
            // var Adwish = this.localstorages.getarrayitems("AdWishdata");
            // console.log(Adwish)
        }
        else {
            swal('Oops...', 'Please Login For Wishlist!', 'error');
        }
    };
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], HomeComponent.prototype, "recievemsg", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(330),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jspdf__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemdetailComponent = (function (_super) {
    __extends(ItemdetailComponent, _super);
    function ItemdetailComponent(router, _global, httpservice, localstorages) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this._global = _global;
        _this.httpservice = httpservice;
        _this.localstorages = localstorages;
        _this.userdata = [];
        _this.itemresult = _this._global.item_detail;
        return _this;
    }
    ItemdetailComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.itemresult = this._global.item_detail;
        this.checksubscription(this.itemresult[0].ShopID);
        this.userdata = this.localstorages.getarrayitems("Userdata");
    };
    ItemdetailComponent.prototype.checksubscription = function (ShopId) {
        var userdata = this.localstorages.getarrayitems("Userdata");
        var shops = this.localstorages.getarrayitems("subcribershoped");
        if (shops != null && userdata != null) {
            for (var i = 0; i < shops.length; i++) {
                if (shops[i].ShopID == ShopId) {
                    if (shops[i].UserID == userdata[0].UserId) {
                        //    alert("true")
                        this.subscribes = true;
                    }
                    else {
                        //  alert("false")
                        this.subscribes = false;
                    }
                    break;
                }
            }
        }
        else {
            this.subscribes = false;
        }
    };
    ItemdetailComponent.prototype.viewotherads = function (categoryid, vendorid) {
        var _this = this;
        // alert(categoryid + " " + vendorid)
        this.httpservice.GetSinglehttp('api/ShopAdsitem/' + categoryid + "/" + vendorid)
            .subscribe(function (ress) {
            _this._global.items = ress;
            console.log(_this._global.items);
            _this.localstorages.setarrayitems(ress, 'allitemsofshop');
            _this.router.navigate(["/allresult/shopads"]);
        });
    };
    ItemdetailComponent.prototype.subscribe = function (ShopId) {
        var _this = this;
        //alert(ShopId)
        var userdata = this.localstorages.getarrayitems("Userdata");
        if (userdata != null) {
            var postdata = { ShopID: ShopId, UserID: userdata[0].UserId };
            this.httpservice.postSinglehttpwithtonken("api/SubscribeShop", postdata)
                .subscribe(function (ressss) {
                _this.subscribes = true;
                _this.httpservice.GetSinglehttp("api/GetShops/" + userdata[0].UserId)
                    .subscribe(function (resss) {
                    _this.localstorages.setarrayitems(resss, 'subcribershoped');
                });
            });
        }
        else {
            swal('Oops...', 'You have to login for Subscription!', 'error');
            this.router.navigate(['/login']);
            // swal(
            //   'Oops...',
            //   this.errormsg,
            //   'error'
            // )
        }
        // if (userdata != undefined) {
        //   var postdata = { ShopID: ShopId, UserID: userdata[0].UserId };
        //   this.httpservice.postSinglehttpwithtonken("api/SubscribeShop", postdata).subscribe(
        //     res => {
        //     })
        // } else {
        //   this.router.navigate(["/login"]);
        // }
    };
    ItemdetailComponent.prototype.adtocart = function (ShopID, AdId, Email, Image, Title, Price, CategoryId) {
        if (this.userdata != undefined || this.userdata != null) {
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            var data = {
                ShopID: ShopID,
                Email: Email,
                Title: Title,
                Price: Price,
                Image: Image,
                Order_Quantity: 1,
                CardName: 'BUY',
                Confirmitem: true,
                AdIdforcart: AdId,
                UserID: this.userdata[0].UserId,
                CategoryId: CategoryId
            };
            console.log(data);
            if (AdCart == undefined) {
                var datas = [];
                datas.push(data);
                this.localstorages.setarrayitems(datas, 'AdCartdata');
            }
            else {
                AdCart.push(data);
                this.localstorages.setarrayitems(AdCart, 'AdCartdata');
            }
            swal({
                type: 'success',
                title: 'Added!',
                html: 'Item Added in your Cart!'
            });
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            console.log(AdCart);
        }
        else {
            swal('Oops...', 'Please Login For Shopping!', 'error');
        }
    };
    ItemdetailComponent.prototype.Adtowish = function (ShopID, AdId, Email, Image, Title, Price, CategoryId, description) {
        if (this.userdata != undefined || this.userdata != null) {
            // var Adwish = this.localstorages.getarrayitems("AdWishdata");
            var data = [];
            data = [{
                    ShopID: ShopID,
                    Email: Email,
                    Title: Title,
                    Price: Price,
                    Image: Image,
                    description: description,
                    AdIdforcart: AdId,
                    UserID: this.userdata[0].UserId,
                    CategoryId: CategoryId
                }];
            console.log(data);
            this.httpservice.Posthttp("api/Adwishitem", data)
                .subscribe(function (res) {
                console.log(res);
                swal({
                    type: 'success',
                    title: 'Added!',
                    html: 'Your selected item in your Wish List'
                });
            });
            // if (Adwish == undefined) {
            //   var datas = [];
            //   datas.push(data);
            //   this.localstorages.setarrayitems(datas, 'AdWishdata');
            // } else {
            //   Adwish.push(data);
            //   this.localstorages.setarrayitems(Adwish, 'AdWishdata');
            // }
            // swal({
            //   type: 'success',
            //   title: 'Added!',
            //   html: 'Item Added in your WishList!'
            // })
            // var Adwish = this.localstorages.getarrayitems("AdWishdata");
            // console.log(Adwish)
        }
        else {
            swal('Oops...', 'Please Login For Wishlist!', 'error');
        }
    };
    ItemdetailComponent.prototype.downloadpdf = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_6_jspdf__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 0, 0, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        }, function (bla) {
            doc.save('saveInCallback.pdf');
        }, 0);
        // doc.save("test.pdf");
    };
    return ItemdetailComponent;
}(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"]) === "function" && _a || Object)
], ItemdetailComponent.prototype, "content", void 0);
ItemdetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-itemdetail',
        template: __webpack_require__(331),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* AppGlobals */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _e || Object])
], ItemdetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=itemdetail.component.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import the do function to be used with the http library.

//import the map function to be used with the http library

var URL = 'http://localhost:8081/api/uploads';
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(localstorages, http, el, translate, router, localStorageService, _auth, httpservice) {
        var _this = _super.call(this) || this;
        _this.localstorages = localstorages;
        _this.http = http;
        _this.el = el;
        _this.translate = translate;
        _this.router = router;
        _this.localStorageService = localStorageService;
        _this._auth = _auth;
        _this.httpservice = httpservice;
        _this.user = [];
        _this.flag = 0;
        translate.addLangs(['en', 'ur']);
        translate.setDefaultLang('en');
        var browserlang = translate.getBrowserLang();
        translate.use('en');
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // public navJson: any = {
    //   "Login": false,
    //   "Registration": true,
    //   "SubmitAd":true,
    //   "CreateShop": false
    // }
    LoginComponent.prototype.SignUp = function (userdata) {
        var member = {
            email: userdata[0].email,
            gender: "None",
            name: userdata[0].name,
            password: "None",
            phone_no: "None",
            cityID: "1"
        };
        this.httpservice.Posthttp("api/SignUp", member)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    LoginComponent.prototype.SignUpbygoogle = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.email);
            var that = _this;
            var member = { Email: _this.user.email };
            _this.httpservice.Posthttp("api/UserIdentification", member)
                .subscribe(function (res) {
                //   alert(res);
                if (res == 1) {
                    console.log("Go to Home");
                    var member = { email: _this.user.email };
                    _this.httpservice.Posthttp("api/SignInbygoogle", member).subscribe(function (res) {
                        console.log(res);
                        console.log(res.userData[0].email);
                        // localStorage.setItem("Userdata", JSON.stringify(res.userData));
                        that.localstorages.setarrayitems(res.userData, "Userdata");
                        if (res.VendorId != undefined) {
                            // localStorage.setItem("VendorId", res.VendorId);
                            that.localstorages.setsingleitems(res.VendorId, "VendorId");
                        }
                        // localStorage.setItem("IsVendor", res.Isvendor);
                        // localStorage.setItem("TOKEN", res.token);
                        that.localstorages.setsingleitems(res.Isvendor, "IsVendor");
                        that.localstorages.setsingleitems(res.token, "TOKEN");
                    });
                    that.router.navigate(['/myAccount']);
                }
                else {
                    _this.localstorages.setarrayitems([_this.user], "Userdata");
                    var userdata = that.localstorages.getarrayitems("Userdata");
                    _this.SignUp(userdata);
                    console.log("Not Exists");
                    _this.router.navigate(['/myAccount']);
                }
            });
            // localStorage.setItem("Userdatafromgoogle", JSON.stringify([this.user]));
            //user data 
            //name, image, uid, provider, uid, email, token (returns tokenId for google, accessToken for Facebook, no token for linkedIn) 
        });
    };
    LoginComponent.prototype.Signin = function (user) {
        var _this = this;
        var that = this;
        this.users = user.email;
        var member = { email: user.email, password: user.password };
        this.httpservice.Posthttp("api/login", member)
            .subscribe(function (res) {
            console.log(res);
            _this.flag = 1;
            //store data on client side
            if (res.VendorId != undefined && res.ShopId != undefined) {
                _this.localstorages.setsingleitems(res.VendorId, "VendorId");
                _this.localstorages.setsingleitems(res.ShopId, "ShopId");
            }
            _this.localstorages.setsingleitems(res.Isvendor, "IsVendor");
            _this.localstorages.setsingleitems(res.token, "TOKEN");
            _this.localstorages.setarrayitems(res.userData, "Userdata");
            sessionStorage.useremail = user.email;
            that.router.navigate(['/main']);
        }, function (reserror) {
            var error = JSON.parse(reserror._body);
            _this.errormsg = error.message;
            swal('Oops...', _this.errormsg, 'error');
        });
    };
    LoginComponent.prototype.opensweetalert = function () {
        var that = this;
        swal({
            title: "You don't have account but placed an Ad?",
            input: 'email',
            html: "Please provide the e-mail address  used in the Ad. We will send you a link in e-mail/sms that will allow you to access your account and manage your Ads.",
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        var a = 1;
                        if (email == undefined) {
                            reject('Email not defined');
                        }
                        else {
                            resolve();
                            //this.sendmail(email)
                        }
                    }, 2000);
                });
            },
            allowOutsideClick: false
        }).then(function (email) {
            var v_code = Math.floor((Math.random() * 10000) + 1);
            var data = { Email: email, verificationcode: v_code };
            that.httpservice.Posthttp("api/SendEmail", data).subscribe(function (res) {
                swal({
                    type: 'success',
                    title: 'Verification Code!',
                    html: 'Verification Code send to your mail: ' + email
                });
            });
        });
    };
    LoginComponent.prototype.sendmail = function (email) {
        var v_code = Math.floor((Math.random() * 10000) + 1);
        var data = { Email: email, verificationcode: v_code };
        this.httpservice.Posthttp("api/SendEmail", data).subscribe(function (res) {
            swal({
                type: 'success',
                title: 'Verification Code!',
                html: 'Verification Code send to your mail: ' + email
            });
        });
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]));
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(332),
        styles: [__webpack_require__(281)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["b" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _h || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_checkguard__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//declare var jQuery: any;
var MainPageComponent = (function (_super) {
    __extends(MainPageComponent, _super);
    function MainPageComponent(route, checkguard) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.checkguard = checkguard;
        _this.sendmessage = "Hello i am coming from Main Component(Parent)";
        return _this;
        //debugger;
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    return MainPageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainPageComponent.prototype, "account", void 0);
MainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-main-page',
        template: __webpack_require__(333),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_checkguard__["a" /* Checkguard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_checkguard__["a" /* Checkguard */]) === "function" && _b || Object])
], MainPageComponent);

var _a, _b;
//# sourceMappingURL=main-page.component.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyAccountComponent = (function () {
    function MyAccountComponent(localstorages, router, httpservice, http) {
        this.localstorages = localstorages;
        this.router = router;
        this.httpservice = httpservice;
        this.http = http;
        this.IsVendor = false;
        this.show = false;
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        // this.isvendor = localStorage.getItem("IsVendor");
        this.isvendor = this.localstorages.getsingleitems("IsVendor");
        if (this.isvendor == null) {
            this.isvendor = false;
        }
        //   var userdata = JSON.parse(localStorage.getItem("Userdata"));
        var userdata = this.localstorages.getarrayitems("Userdata");
        var that = this;
        if (userdata != null || userdata != undefined) {
            this.Images = "http://localhost:8081/api/GetUserProfileimage/UserProfilePic-" + userdata[0].UserId + ".png";
            this.user = userdata[0].Name;
            this.sincemember = userdata[0].UserSince;
        }
    };
    MyAccountComponent.prototype.setDefaultPic = function () {
        this.Images = "/assets/more_assets/images/ad3.jpg";
    };
    MyAccountComponent.prototype.becomevendor = function () {
        //var user = JSON.parse(localStorage.getItem("Userdata"));
        var user = this.localstorages.getarrayitems("Userdata");
        //console.log(user[0].UserId)
        var member = { nic: "42101-56565665-3", userid: user[0].UserId };
        console.log(member.nic + " " + member.userid);
        this.httpservice.postSinglehttpwithtonken("api/Vendoraccount", member).subscribe(function (res) {
            // console.log(res);
        });
        this.IsVendor = true;
        this.localstorages.setsingleitems(this.IsVendor, "IsVendor");
        //localStorage.setItem("IsVendor", JSON.stringify(this.IsVendor));
    };
    MyAccountComponent.prototype.logout = function () {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(["/login"]);
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-my-account',
        template: __webpack_require__(336),
        styles: [__webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], MyAccountComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=my-account.component.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshopsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyshopsComponent = (function () {
    function MyshopsComponent(_global, router, localstorages, httpservice) {
        this._global = _global;
        this.router = router;
        this.localstorages = localstorages;
        this.httpservice = httpservice;
        this.shopinfo = [];
    }
    MyshopsComponent.prototype.ngOnInit = function () {
        //   var VendorId = localStorage.getItem("VendorId");
        var that = this;
        this.VendorId = this.localstorages.getsingleitems("VendorId");
        if (this.VendorId != undefined) {
            console.log(this.VendorId);
            that.httpservice.GetSinglehttpwithtoken("api/shopinfo/" + this.VendorId)
                .subscribe(function (res) {
                console.log(res);
                that.shopinfo = res;
            });
        }
        else {
            this.message = "You have no Vendor Account";
            swal('Oops...', this.message, 'error');
        }
    };
    MyshopsComponent.prototype.getallProduct = function (shopid, categoryid) {
        var _this = this;
        this.userdata = this.localstorages.getarrayitems("Userdata");
        this.httpservice.GetSinglehttpwithtoken("api/allShopcatitems/" + shopid + "/" + categoryid + "/" + this.userdata[0].UserId)
            .subscribe(function (res) {
            console.log(res);
            if (res.lenth > 0) {
                _this._global.shopitems = res;
                _this.localstorages.setarrayitems(res, "shopitems");
            }
            else {
                _this.message = "You have no Items ";
                swal('Oops...', _this.message, 'error');
            }
            // this.router.navigate(['/myAccount/shopitems']);
        });
    };
    MyshopsComponent.prototype.activeallProduct = function (shopid, categoryid) {
        var _this = this;
        console.log(categoryid + " " + shopid);
        var userdata = this.localstorages.getarrayitems("Userdata");
        this.httpservice.GetSinglehttpwithtoken("api/activeallShopcatitems/" + shopid + "/" + categoryid + "/" + userdata[0].UserId)
            .subscribe(function (res) {
            console.log(res);
            console.log(res);
            if (res.lenth > 0) {
                _this._global.shopitems = res;
                _this.localstorages.setarrayitems(res, "shopitems");
            }
            else {
                _this.message = "You have no Deactivate Item";
                swal('Oops...', _this.message, 'error');
            }
        });
    };
    MyshopsComponent.prototype.deactiveallProduct = function (shopid, categoryid) {
        var _this = this;
        var userdata = this.localstorages.getarrayitems("Userdata");
        this.httpservice.GetSinglehttpwithtoken("api/deactiveallShopcatitems/" + shopid + "/" + categoryid + "/" + userdata[0].UserId)
            .subscribe(function (res) {
            console.log(res);
            if (res.lenth > 0) {
                _this._global.shopitems = res;
                _this.localstorages.setarrayitems(res, "shopitems");
            }
            else {
                _this.message = "You have no Activate Item";
                swal('Oops...', _this.message, 'error');
            }
            //  this.router.navigate(['/myAccount/shopitems']);
        });
    };
    return MyshopsComponent;
}());
MyshopsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-myshops',
        template: __webpack_require__(337),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */]) === "function" && _d || Object])
], MyshopsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=myshops.component.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-nav-bar',
        template: __webpack_require__(338),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoaccountComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoaccountComponent = (function (_super) {
    __extends(NoaccountComponent, _super);
    function NoaccountComponent(httpservice, localstorages) {
        var _this = _super.call(this) || this;
        _this.httpservice = httpservice;
        _this.localstorages = localstorages;
        _this.fileimg = [];
        return _this;
    }
    NoaccountComponent.prototype.ngOnInit = function () {
        this.userdata = this.localstorages.getarrayitems("Userdata");
        this.userid = this.userdata[0].UserId;
    };
    NoaccountComponent.prototype.upload = function () {
        var a = $("#userPhoto1").val();
        console.log(a);
        if (a != "") {
            alert("File is upload");
            $(document.getElementById("form1")).submit();
            $(document.getElementById("form1"));
        }
        else {
            alert("Please Select");
        }
    };
    NoaccountComponent.prototype.fileEvent = function (fileInput) {
        var file = fileInput.target.files[0];
        var fileName = file.name;
        console.log(file);
        this.fileimg = file;
    };
    NoaccountComponent.prototype.submit = function () {
        console.log('submit');
    };
    NoaccountComponent.prototype.reset = function () {
        console.log('reset');
    };
    NoaccountComponent.prototype.preview = function () {
        console.log('preview');
    };
    return NoaccountComponent;
}(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]));
NoaccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-noaccount',
        template: __webpack_require__(339),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _b || Object])
], NoaccountComponent);

var _a, _b;
//# sourceMappingURL=noaccount.component.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__(340),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__motorcontrol_motorcontrol_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobilecontrol_mobilecontrol_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostingComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostingComponent = (function (_super) {
    __extends(PostingComponent, _super);
    function PostingComponent(element, localstorages, router, httpservice) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.localstorages = localstorages;
        _this.router = router;
        _this.httpservice = httpservice;
        _this.Categories = [];
        _this.Categoriestypes = [];
        _this.showcatetype = false;
        _this.userdata = [];
        _this.Images = [];
        _this.showhide_fileinput = [];
        return _this;
    }
    PostingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userdata = this.localstorages.getarrayitems("Userdata");
        this.IsVendor = this.localstorages.getsingleitems("IsVendor");
        // console.log(this.IsVendor)
        this.httpservice.GetSinglehttp("api/itemcategories")
            .subscribe(function (res) {
            _this.Categories = res;
        });
    };
    PostingComponent.prototype.test = function (shopad) {
        var _this = this;
        if (shopad == "SHOP Ad") {
            this.shopid = this.localstorages.getsingleitems("ShopId");
            // alert(this.shopid)
            this.httpservice.GetSinglehttpwithtoken("api/getcatofshop/" + this.shopid).subscribe(function (res) {
                _this.Categories = res;
            });
        }
        else {
            this.httpservice.GetSinglehttp("api/itemcategories")
                .subscribe(function (res) {
                _this.Categories = res;
            });
        }
    };
    PostingComponent.prototype.getcategoriestype = function (typeId) {
        var _this = this;
        this.httpservice.GetSinglehttp("api/getcategoriestype/" + typeId)
            .subscribe(function (res) {
            _this.showcatetype = true;
            _this.Categoriestypes = res;
            _this.cateId = typeId;
        });
    };
    PostingComponent.prototype.PostopenAds = function (data) {
        var _this = this;
        var postdata;
        if (data.categories == 1) {
            postdata = { filename: this.Images, Name: data.Name, Email: data.Email, Phoneno: data.Phoneno, Brand: this.mobilecontrol.brand, CategorytypeID: data.categoriestype, camera: this.mobilecontrol.frontcamera + this.mobilecontrol.frontcammemorys + " " + this.mobilecontrol.backcamera + this.mobilecontrol.backfrontcammemorys, CategoryID: data.categories, color: this.mobilecontrol.color, description: data.description, operatingsystem: this.mobilecontrol.operatingSystem, price: this.mobilecontrol.price, Processory: this.mobilecontrol.Processor, quantity: this.mobilecontrol.Quantity, Ram_memory: this.mobilecontrol.ram + this.mobilecontrol.rammemory, sim_memmory: this.mobilecontrol.SIM, Storage_Capacity: this.mobilecontrol.storagecapacity, Title: data.adtitle };
        }
        else if (data.categories == 2) {
        }
        else if (data.categories == 3) {
            postdata = { filename: this.Images, Name: data.Name, Email: data.Email, Phoneno: data.Phoneno, Title: data.adtitle, Model: this.motorcontrol.Models, Condition: this.motorcontrol.Condition, Mileage: this.motorcontrol.Mileage, Color: this.motorcontrol.color, FuelType: this.motorcontrol.Feultype, Doors: this.motorcontrol.Door, price: this.motorcontrol.price, description: data.description, quantity: this.motorcontrol.Quantity, Brand: this.motorcontrol.brand, CategorytypeID: data.categoriestype, CategoryID: data.categories };
        }
        console.log(postdata);
        this.httpservice.Posthttp("api/PostopenAds", postdata).subscribe(function (res) {
            // console.log(res);
            swal('Good job!', 'Your Ad has been post sucessfully!', 'success');
            _this.router.navigate(['/main']);
        });
    };
    PostingComponent.prototype.postads = function (data) {
        var userdata = this.localstorages.getarrayitems("Userdata");
        var postdata;
        var subscriber;
        this.cat = data.categories;
        var that = this;
        //IF MOBILE CATEGORIES 
        if (data.categories == 1) {
            if (this.posttype == "SHOP Ad") {
                var ShopId = this.localstorages.getsingleitems("ShopId");
                postdata = { filename: this.Images, UserId: userdata[0].UserId, Brand: this.mobilecontrol.brand, CategorytypeID: data.categoriestype, camera: this.mobilecontrol.frontcamera + this.mobilecontrol.frontcammemorys + " " + this.mobilecontrol.backcamera + this.mobilecontrol.backfrontcammemorys, CategoryID: data.categories, color: this.mobilecontrol.color, description: data.description, operatingsystem: this.mobilecontrol.operatingSystem, price: this.mobilecontrol.price, Processory: this.mobilecontrol.Processor, quantity: this.mobilecontrol.Quantity, Ram_memory: this.mobilecontrol.ram + this.mobilecontrol.rammemory, ShopID: ShopId, sim_memmory: this.mobilecontrol.SIM, Storage_Capacity: this.mobilecontrol.storagecapacity, Title: data.adtitle };
                // console.log(postdata)
                subscriber = 1;
            }
            else {
                postdata = { filename: this.Images, UserId: userdata[0].UserId, Brand: this.mobilecontrol.brand, CategorytypeID: data.categoriestype, camera: this.mobilecontrol.frontcamera + this.mobilecontrol.frontcammemorys + " " + this.mobilecontrol.backcamera + this.mobilecontrol.backfrontcammemorys, CategoryID: data.categories, color: this.mobilecontrol.color, description: data.description, operatingsystem: this.mobilecontrol.operatingSystem, price: this.mobilecontrol.price, Processory: this.mobilecontrol.Processor, quantity: this.mobilecontrol.Quantity, Ram_memory: this.mobilecontrol.ram + this.mobilecontrol.rammemory, sim_memmory: this.mobilecontrol.SIM, Storage_Capacity: this.mobilecontrol.storagecapacity, Title: data.adtitle };
                //console.log(postdata)
            }
        }
        else if (data.categories == 2) {
        }
        else if (data.categories == 3) {
            if (this.posttype == "SHOP Ad") {
                var ShopId = this.localstorages.getsingleitems("ShopId");
                postdata = { filename: this.Images, UserId: userdata[0].UserId, Title: data.adtitle, Model: this.motorcontrol.Models, Condition: this.motorcontrol.Condition, Mileage: this.motorcontrol.Mileage, Color: this.motorcontrol.color, FuelType: this.motorcontrol.Feultype, Doors: this.motorcontrol.Door, price: this.motorcontrol.price, description: data.description, quantity: this.motorcontrol.Quantity, Brand: this.motorcontrol.brand, ShopID: ShopId, CategorytypeID: data.categoriestype, CategoryID: data.categories };
                console.log(postdata);
                subscriber = 1;
            }
            else {
                postdata = { filename: this.Images, UserId: userdata[0].UserId, Title: data.adtitle, Model: this.motorcontrol.Models, Condition: this.motorcontrol.Condition, Mileage: this.motorcontrol.Mileage, Color: this.motorcontrol.color, FuelType: this.motorcontrol.Feultype, Doors: this.motorcontrol.Door, price: this.motorcontrol.price, description: data.description, quantity: this.motorcontrol.Quantity, Brand: this.motorcontrol.brand, CategorytypeID: data.categoriestype, CategoryID: data.categories };
                console.log(postdata);
            }
        }
        if (this.fileimg2 != undefined || this.titleimg != undefined) {
            that.httpservice.postSinglehttpwithtonken("api/postAds", postdata).subscribe(function (res) {
                //console.log(res);
                swal('Good job!', 'Your Ad has been post sucessfully!', 'success');
                // if (subscriber == 1) {
                //   var datas = { ShopId: this.localstorages.getsingleitems("ShopId") };
                //   that.httpservice.postSinglehttpwithtonken("api/CheckShopsubscribers", datas).subscribe(
                //     res => {
                //       // console.log("SUCCESS" + res)
                //   //    this.call();
                //     })
                // }
                // this.imguploadurl = "http://localhost:8081/api/PostAdImages/" + this.Images;
            });
            //this.call();
            //  this.router.navigate(['/main']);
        }
        else {
            alert("Please Upload atleast one Photo");
        }
        console.log(this.Images);
    };
    PostingComponent.prototype.call = function () {
        $(document.getElementById("form1")).submit();
    };
    PostingComponent.prototype.getImage = function () {
        if (this.Images.length == 0) {
            this.Images[0] = this.titleimg;
            this.showhide_fileinput[0] = true;
            console.log(this.Images);
        }
        else {
            var i = this.Images.length;
            this.showhide_fileinput[i] = true;
            this.Images[i] = this.titleimg;
            console.log(this.Images);
        }
    };
    PostingComponent.prototype.fileEvent1 = function (fileInput) {
        var file = fileInput.target.files[0];
        var today = new Date();
        var formattedtoday = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.titleimg = formattedtoday + file.name;
        //console.log(file)
        this.getImage();
        this.changeListner(fileInput, '.image1');
    };
    PostingComponent.prototype.fileEvent2 = function (fileInput) {
        var file = fileInput.target.files[0];
        var today = new Date();
        var formattedtoday = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.titleimg = formattedtoday + file.name;
        this.getImage();
    };
    PostingComponent.prototype.fileEvent3 = function (fileInput) {
        var file = fileInput.target.files[0];
        var today = new Date();
        var formattedtoday = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.titleimg = formattedtoday + file.name;
        this.getImage();
    };
    PostingComponent.prototype.changeListner = function (event, selector) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector(selector);
        console.log(event.target.files[0]);
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    return PostingComponent;
}(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__mobilecontrol_mobilecontrol_component__["a" /* MobilecontrolComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mobilecontrol_mobilecontrol_component__["a" /* MobilecontrolComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mobilecontrol_mobilecontrol_component__["a" /* MobilecontrolComponent */]) === "function" && _a || Object)
], PostingComponent.prototype, "mobilecontrol", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__motorcontrol_motorcontrol_component__["a" /* MotorcontrolComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__motorcontrol_motorcontrol_component__["a" /* MotorcontrolComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__motorcontrol_motorcontrol_component__["a" /* MotorcontrolComponent */]) === "function" && _b || Object)
], PostingComponent.prototype, "motorcontrol", void 0);
PostingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-posting',
        template: __webpack_require__(341),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_http_services__["a" /* HttpServices */]) === "function" && _f || Object])
], PostingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=posting.component.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiveorderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceiveorderComponent = (function () {
    function ReceiveorderComponent(_global, element, router, localstorages, httpservice) {
        this._global = _global;
        this.element = element;
        this.router = router;
        this.localstorages = localstorages;
        this.httpservice = httpservice;
        this.orderdata = [];
    }
    ReceiveorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userdata = this.localstorages.getarrayitems("Userdata");
        this.httpservice.GetSinglehttp("api/UserOrderdata" + "/" + this.userdata[0].UserId)
            .subscribe(function (res) {
            _this.orderdata = res.Orderdata;
            console.log(_this.orderdata);
        });
    };
    ReceiveorderComponent.prototype.itemdetail = function (categegoryid, adid, ShopId) {
        var _this = this;
        //alert(categegoryid + " " + adid + ShopId)
        if (ShopId != null && ShopId != undefined) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    return ReceiveorderComponent;
}());
ReceiveorderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-receiveorder',
        template: __webpack_require__(342),
        styles: [__webpack_require__(291)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _e || Object])
], ReceiveorderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=receiveorder.component.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_social_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function (_super) {
    __extends(RegistrationComponent, _super);
    function RegistrationComponent(router, _auth, httpservice) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this._auth = _auth;
        _this.httpservice = httpservice;
        _this.genderss = [
            { value: 'Female', display: 'Female' },
            { value: 'Male', display: 'Male' }
        ];
        _this.showcityddl = false;
        _this.Country = [];
        _this.City = [];
        return _this;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phone_no = "+92";
        this.httpservice.GetSinglehttp("api/Country")
            .subscribe(function (res) {
            _this.Country = res;
            console.log(res);
        });
    };
    RegistrationComponent.prototype.getcountryId = function (countryId) {
        var _this = this;
        this.showcityddl = true;
        this.httpservice.GetSinglehttp("api/City/" + countryId)
            .subscribe(function (res) {
            _this.City = res;
        });
    };
    RegistrationComponent.prototype.activeuser = function (u_email) {
        var member = { email: u_email };
        this.httpservice.Posthttp("api/activeuser", member).subscribe(function (res) {
            console.log("Account Activated!");
        });
    };
    RegistrationComponent.prototype.SignUp = function (Users) {
        var _this = this;
        var member = {
            email: Users.email,
            gender: Users.gender,
            name: Users.name,
            password: Users.password,
            phone_no: Users.phone_no,
            cityID: Users.cityID
        };
        if (member.cityID == undefined) {
            swal('Missing City...', "Please Select Country or City", 'error');
        }
        if (member.gender == undefined) {
            swal('Missing Gender...', "Please Select Gender", 'error');
        }
        if (member.gender != undefined && member.cityID != undefined) {
            var that = this;
            this.httpservice.Posthttp("api/SignUp", member)
                .subscribe(function (res) {
                // console.log(res);
                // console.log(res.message);
                swal({
                    title: 'Verification!',
                    text: 'Go to mail and verify your email!',
                    timer: 2000
                }).then(function () { }, 
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer');
                    }
                });
                _this.router.navigate(["/login"]);
            }, function (reserror) {
                var error = JSON.parse(reserror._body);
                _this.errormsg = error.message;
                swal('Oops...', _this.errormsg, 'error');
                //console.log(reserror)
            });
        }
    };
    return RegistrationComponent;
}(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]));
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(343),
        styles: [__webpack_require__(292)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_social_login__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-search-bar',
        template: __webpack_require__(344),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [])
], SearchBarComponent);

//# sourceMappingURL=search-bar.component.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchproductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import the do function to be used with the http library.

//import the map function to be used with the http library

var SearchproductComponent = (function () {
    function SearchproductComponent(router, _global, httpservice, localstorages) {
        this.router = router;
        this._global = _global;
        this.httpservice = httpservice;
        this.localstorages = localstorages;
        this.searchitems = this._global.items;
    }
    SearchproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchitems = this.localstorages.getarrayitems("searchitems");
        this._global.items = this.searchitems;
        if (this.searchitems != null || this.searchitems != undefined) {
            this.httpservice.GetSinglehttp('api/getbrands/' + this.searchitems[0].CategoryID)
                .subscribe(function (ress) {
                console.log(ress);
                _this._global.brand = ress;
            });
        }
    };
    SearchproductComponent.prototype.test = function (a) {
        console.log(a);
    };
    SearchproductComponent.prototype.filterrecordbybrand = function (CategoryId, keyword) {
        var _this = this;
        //alert(keyword)
        if (keyword != undefined || keyword != null) {
            this.httpservice.GetSinglehttp('api/recordfilter/' + CategoryId + '/' + keyword)
                .subscribe(function (ress) {
                if (ress != undefined || ress != null) {
                    if (ress.length > 0) {
                        _this._global.items = ress;
                        _this.localstorages.setarrayitems(ress, 'searchitems');
                    }
                    else {
                        swal('Oops...', "No result Found", 'error');
                        _this._global.items = _this.localstorages.getarrayitems("searchitems");
                    }
                }
                else {
                    swal('Oops...', "No result Found", 'error');
                    _this._global.items = _this.localstorages.getarrayitems("searchitems");
                }
            });
            window.scrollTo(10, 200);
        }
    };
    SearchproductComponent.prototype.filterrecord = function (CategoryId, keyword, e) {
        var _this = this;
        if (e.target.checked == true) {
            this.httpservice.GetSinglehttp('api/recordfilter/' + CategoryId + '/' + keyword)
                .subscribe(function (ress) {
                if (ress != undefined || ress != null) {
                    if (ress.length > 0) {
                        _this._global.items = ress;
                        _this.localstorages.setarrayitems(ress, 'searchitems');
                    }
                    else {
                        swal('Oops...', "No result Found", 'error');
                        _this._global.items = _this.localstorages.getarrayitems("searchitems");
                    }
                }
                else {
                    swal('Oops...', "No result Found", 'error');
                    _this._global.items = _this.localstorages.getarrayitems("searchitems");
                }
            });
            window.scrollTo(10, 200);
        }
        else {
            e.target.checked = false;
            window.scrollTo(10, 200);
        }
    };
    SearchproductComponent.prototype.filterrecordbysearch = function (CategoryId, keyword, e) {
        var _this = this;
        if (e.target.checked == true) {
            this.httpservice.GetSinglehttp('api/recordfilterbyprice/' + CategoryId + '/' + keyword)
                .subscribe(function (ress) {
                console.log(ress);
                if (ress != undefined || ress != null) {
                    if (ress.length > 0) {
                        _this._global.items = ress;
                        _this.localstorages.setarrayitems(ress, 'searchitems');
                    }
                    else {
                        swal('Oops...', "No result Found", 'error');
                        _this._global.items = _this.localstorages.getarrayitems("searchitems");
                    }
                }
                else {
                    swal('Oops...', "No result Found", 'error');
                    _this._global.items = _this.localstorages.getarrayitems("searchitems");
                }
            });
            window.scrollTo(10, 200);
        }
        else {
            e.target.checked = false;
            window.scrollTo(10, 200);
        }
    };
    SearchproductComponent.prototype.itemdetail = function (categegoryid, adid, email) {
        var _this = this;
        alert(categegoryid + " " + adid + email);
        if (email == null) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                console.log(ress);
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    return SearchproductComponent;
}());
SearchproductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-searchproduct',
        template: __webpack_require__(345),
        styles: [__webpack_require__(294)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], SearchproductComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searchproduct.component.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopAdsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopAdsComponent = (function () {
    function ShopAdsComponent(router, _global, httpservice, localstorages) {
        //this.allitems = this._global.items;
        this.router = router;
        this._global = _global;
        this.httpservice = httpservice;
        this.localstorages = localstorages;
        this.allitems = [];
    }
    ShopAdsComponent.prototype.ngOnInit = function () {
        this.allitems = this._global.items;
        this.ShopId = this.allitems[0].ShopID;
        this.shopname = this.allitems[0].ShopName;
        this.ShopOwnerName = this.allitems[0].Name;
        this.ShopOwnerNumber = this.allitems[0].Phone_no;
        this.ShopOwnerEmail = this.allitems[0].Email;
        this.ShopOwnerImage = "UserProfilePic-" + this.allitems[0].UserId + ".png";
        this.checksubscription(this.allitems[0].ShopID);
    };
    ShopAdsComponent.prototype.checksubscription = function (ShopId) {
        var userdata = this.localstorages.getarrayitems("Userdata");
        var shops = this.localstorages.getarrayitems("subcribershoped");
        if (userdata != null && shops != null) {
            for (var i = 0; i < shops.length; i++) {
                if (shops[i].ShopID == ShopId) {
                    if (shops[i].UserID == userdata[0].UserId) {
                        // alert("true")
                        this.subscribes = true;
                    }
                    else {
                        //alert("false")
                        this.subscribes = false;
                    }
                    break;
                }
            }
        }
        else {
            this.subscribes = false;
        }
    };
    ShopAdsComponent.prototype.itemdetail = function (categegoryid, adid, email) {
        var _this = this;
        //alert(email)
        if (email != null) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    ShopAdsComponent.prototype.subscribe = function (ShopId) {
        var _this = this;
        //alert(ShopId)
        var userdata = this.localstorages.getarrayitems("Userdata");
        if (userdata != null) {
            var postdata = { ShopID: ShopId, UserID: userdata[0].UserId };
            this.httpservice.postSinglehttpwithtonken("api/SubscribeShop", postdata)
                .subscribe(function (ressss) {
                _this.subscribes = true;
                _this.httpservice.GetSinglehttp("api/GetShops/" + userdata[0].UserId)
                    .subscribe(function (resss) {
                    _this.localstorages.setarrayitems(resss, 'subcribershoped');
                });
            });
        }
        else {
            swal('Oops...', 'You have to login for Subscription!', 'error');
            this.router.navigate(['/login']);
        }
    };
    ShopAdsComponent.prototype.adtocart = function (ShopID, AdId, Email, Image, Title, Price, CategoryId) {
        var userdata = this.localstorages.getarrayitems("Userdata");
        if (userdata != undefined || userdata != null) {
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            var data = {
                ShopID: ShopID,
                Email: Email,
                Title: Title,
                Price: Price,
                Image: Image,
                Order_Quantity: 1,
                CardName: 'BUY',
                Confirmitem: true,
                AdIdforcart: AdId,
                UserID: userdata[0].UserId,
                CategoryId: CategoryId
            };
            console.log(data);
            if (AdCart == undefined) {
                var datas = [];
                datas.push(data);
                this.localstorages.setarrayitems(datas, 'AdCartdata');
            }
            else {
                AdCart.push(data);
                this.localstorages.setarrayitems(AdCart, 'AdCartdata');
            }
            swal({
                type: 'success',
                title: 'Added!',
                html: 'Item Added in your Cart!'
            });
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            console.log(AdCart);
        }
        else {
            swal('Oops...', 'Please Login For Shopping!', 'error');
        }
    };
    return ShopAdsComponent;
}());
ShopAdsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-shop-ads',
        template: __webpack_require__(346),
        styles: [__webpack_require__(295)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], ShopAdsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shop-ads.component.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopitemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopitemsComponent = (function () {
    function ShopitemsComponent(_global, router, httpservice, localstorages) {
        this._global = _global;
        this.router = router;
        this.httpservice = httpservice;
        this.localstorages = localstorages;
        this.shopitems = [];
        this.categorieslist = [];
    }
    ShopitemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopitems = this.localstorages.getarrayitems("shopitems");
        if (this.shopitems.length > 0) {
            var data = { CategoryID: this.shopitems[0].CategoryID };
            this.httpservice.GetSinglehttpwithtoken("api/getcategories/" + this.shopitems[0].CategoryID)
                .subscribe(function (res) {
                _this.categorieslist = res;
            });
        }
        else {
            swal('Oops...', this.message, 'error');
            this.message = "You have no items";
        }
    };
    ShopitemsComponent.prototype.activateitem = function (shopid, categoryid, AdId) {
        var _this = this;
        var data;
        var userdata = this.localstorages.getarrayitems("Userdata");
        if (categoryid == 1) {
            data = { IsActive: 1, MobileAdsId: AdId };
        }
        else if (categoryid == 2) {
        }
        else if (categoryid == 3) {
            data = { IsActive: 1, MotorAdsId: AdId };
        }
        console.log(shopid + "  " + categoryid + "  " + AdId);
        this.httpservice.postSinglehttpwithtonken("api/actdeactshopitems/" + categoryid, data).subscribe(function (res) {
            console.log("success!");
            if (shopid == undefined) {
                shopid = _this.localstorages.getsingleitems("ShopId");
            }
            _this.httpservice.GetSinglehttpwithtoken("api/deactiveallShopcatitems/" + shopid + "/" + categoryid + "/" + userdata[0].UserId)
                .subscribe(function (ress) {
                //  console.log(ress.length)
                if (ress.length > 0) {
                    _this._global.shopitems = ress;
                    _this.localstorages.setarrayitems(ress, "shopitems");
                    _this.shopitems = _this.localstorages.getarrayitems("shopitems");
                }
                else {
                    _this.message = "You have no deactivate items ";
                    //localStorage.removeItem("shopitems");
                    _this._global.shopitems = undefined;
                    swal('Oops...', _this.message, 'error');
                }
            });
        });
    };
    ShopitemsComponent.prototype.deactivateitem = function (shopid, categoryid, AdId) {
        var _this = this;
        var userdata = this.localstorages.getarrayitems("Userdata");
        console.log(categoryid);
        var data;
        var that = this;
        if (categoryid == 1) {
            data = { IsActive: 0, MobileAdsId: AdId };
        }
        else if (categoryid == 2) {
        }
        else if (categoryid == 3) {
            data = { IsActive: 0, MotorAdsId: AdId };
        }
        console.log(shopid);
        this.httpservice.postSinglehttpwithtonken("api/actdeactshopitems/" + categoryid, data).subscribe(function (res) {
            console.log("success!");
            if (shopid == undefined) {
                shopid = _this.localstorages.getsingleitems("ShopId");
            }
            _this.httpservice.GetSinglehttpwithtoken("api/activeallShopcatitems/" + shopid + "/" + categoryid + "/" + userdata[0].UserId)
                .subscribe(function (ress) {
                if (ress.length > 0) {
                    _this._global.shopitems = ress;
                    _this.localstorages.setarrayitems(ress, "shopitems");
                    _this.shopitems = that.localstorages.getarrayitems("shopitems");
                    console.log(that.shopitems);
                }
                else {
                    _this.message = "You have no deactivate items ";
                    //localStorage.removeItem("shopitems");
                    _this._global.shopitems = undefined;
                    swal('Oops...', _this.message, 'error');
                }
            });
        });
    };
    ShopitemsComponent.prototype.itemdetail = function (categegoryid, adid) {
        var _this = this;
        this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
            .subscribe(function (ress) {
            _this._global.item_detail = ress;
            _this.router.navigate(["allresult/Product", adid]);
        });
    };
    return ShopitemsComponent;
}());
ShopitemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-shopitems',
        template: __webpack_require__(347),
        styles: [__webpack_require__(296)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], ShopitemsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shopitems.component.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(348),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SliderComponent = (function () {
    function SliderComponent(_global, router, httpservice, localstorages) {
        this._global = _global;
        this.router = router;
        this.httpservice = httpservice;
        this.localstorages = localstorages;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.allproductitems = function (categoryId) {
        var _this = this;
        alert(categoryId);
        this.httpservice.GetSinglehttp("api/allitems/" + categoryId)
            .subscribe(function (ress) {
            _this._global.items = ress;
            _this.localstorages.setarrayitems(ress, 'allitems');
        });
        this.router.navigate(["/allresult/allitems"]);
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'main-slider-bar',
        template: __webpack_require__(349),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object])
], SliderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=slider.component.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(350),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [])
], TestComponent);

//# sourceMappingURL=test.component.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestingComponent = (function () {
    function TestingComponent() {
    }
    TestingComponent.prototype.ngOnInit = function () {
    };
    return TestingComponent;
}());
TestingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-testing',
        template: __webpack_require__(351),
        styles: [__webpack_require__(300)]
    }),
    __metadata("design:paramtypes", [])
], TestingComponent);

//# sourceMappingURL=testing.component.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_http_services__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WishlistComponent = (function () {
    function WishlistComponent(_global, element, router, localstorages, httpservice) {
        this._global = _global;
        this.element = element;
        this.router = router;
        this.localstorages = localstorages;
        this.httpservice = httpservice;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userdata = this.localstorages.getarrayitems('Userdata');
        var that = this;
        this.httpservice.GetSinglehttp('api/UserWishlist' + '/' + that.userdata[0].UserId)
            .subscribe(function (res) {
            _this._global.wishitem = res.Wishlist;
            // console.log(this.wishitem)
        });
    };
    WishlistComponent.prototype.itemdetail = function (categegoryid, adid, ShopId) {
        var _this = this;
        alert(categegoryid + " " + adid + ShopId);
        if (ShopId != null && ShopId != undefined) {
            this.httpservice.GetSinglehttp('api/getitemdetail/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
        else {
            this.httpservice.GetSinglehttp('api/getitemdetailforopenpost/' + categegoryid + '/' + adid)
                .subscribe(function (ress) {
                _this._global.item_detail = ress;
                _this.router.navigate(["allresult/Product", adid]);
            });
        }
    };
    WishlistComponent.prototype.adtocart = function (ShopID, AdId, Image, Title, Price, CategoryId) {
        if (this.userdata != undefined || this.userdata != null) {
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            var data = {
                ShopID: ShopID,
                Title: Title,
                Price: Price,
                Image: Image,
                Order_Quantity: 1,
                CardName: 'BUY',
                Confirmitem: true,
                AdIdforcart: AdId,
                UserID: this.userdata[0].UserId,
                CategoryId: CategoryId
            };
            console.log(data);
            if (AdCart == undefined) {
                var datas = [];
                datas.push(data);
                this.localstorages.setarrayitems(datas, 'AdCartdata');
            }
            else {
                AdCart.push(data);
                this.localstorages.setarrayitems(AdCart, 'AdCartdata');
            }
            swal({
                type: 'success',
                title: 'Added!',
                html: 'Item Added in your Cart!'
            });
            var AdCart = this.localstorages.getarrayitems("AdCartdata");
            console.log(AdCart);
        }
        else {
            swal('Oops...', 'Please Login For Shopping!', 'error');
        }
    };
    return WishlistComponent;
}());
WishlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(352),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__app_global__["a" /* AppGlobals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__router_guard_StorageService_service__["a" /* Localstorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_http_services__["a" /* HttpServices */]) === "function" && _e || Object])
], WishlistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=wishlist.component.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.container {\r\n\twidth: 1000px;\r\n\tbackground-color: #fff;\r\n}\r\n.img-circle {\r\n    border-radius: 50%;\r\n    width: 50%;\r\n    height: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.table>tbody>tr>td, .table>tfoot>tr>td{\r\n    vertical-align: middle;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    table#cart tbody td .form-control{\r\n\t\twidth:20%;\r\n\t\tdisplay: inline !important;\r\n\t}\r\n\t.actions .btn{\r\n\t\twidth:36%;\r\n\t\tmargin:1.5em 0;\r\n\t}\r\n\t\r\n\t.actions .btn-info{\r\n\t\tfloat:left;\r\n\t}\r\n\t.actions .btn-danger{\r\n\t\tfloat:right;\r\n\t}\r\n\t\r\n\ttable#cart thead { display: none; }\r\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\r\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\r\n\ttable#cart tbody td:before {\r\n\t\tcontent: attr(data-th); font-weight: bold;\r\n\t\tdisplay: inline-block; width: 8rem;\r\n\t}\r\n\t\r\n\t\r\n\t\r\n\ttable#cart tfoot td{display:block; }\r\n\ttable#cart tfoot td .btn{display:block;}\r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".rsidebar h4, .related-row h4 {\r\n    font-size: 1.1em;\r\n    color: #59b210;\r\n    text-transform: uppercase;\r\n    margin-bottom: 1em;\r\n    font-family: 'Offside', cursive;\r\n}\r\n.rsidebar-top {\r\n    border: 1px solid #cccccc;\r\n    padding: 2em;\r\n    margin-top: 53px;\r\n}\r\n.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: 200px;\r\n}\r\n\r\n.agile-products {\r\n    padding: 1.5em;\r\n    border: 1px solid #e4e4e4;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: .5s all;\r\n    height: 350px;\r\n}\r\n.product-top {\r\n    background: #59b210;\r\n    padding: 1em 2em;\r\n}\r\n.agile-products:hover .new-tag:before {\r\n    border-top-color: #1e9e1a;\r\n}\r\n.new-tag:before {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 60px solid #104c84;\r\n    border-right: 60px solid transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: .5s all;\r\n}\r\n\r\n.pagination>li>a, .pagination>li>span {\r\n    position: relative;\r\n    float: left;\r\n    padding: 6px 12px;\r\n    margin-left: -1px;\r\n    line-height: 1.42857143;\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, " /* Remove the navbar's default margin-bottom and rounded borders */ \r\n    /*.navbar {\r\n      margin-bottom: 0;\r\n      border-radius: 0;\r\n    }*/\r\n    \r\n    /* Add a gray background color and some padding to the footer */\r\n    /*footer {\r\n      background-color: #f2f2f2;\r\n      padding: 25px;\r\n    }*/\r\n/*\r\n\tAuthor: Umair Chaudary @ Pixel Art Inc.\r\n\tAuthor URI: http://www.pixelartinc.com/\r\n*/\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: 200px;\r\n}\r\n.agile-products {\r\n    padding: 1.5em;\r\n    border: 1px solid #e4e4e4;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: .5s all;\r\n    height: 350px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "img {\r\n    border-radius: 50%;\r\n    transition: -webkit-transform .8s ease-in-out;\r\n    transition: transform .8s ease-in-out;\r\n    transition:         transform .8s ease-in-out, -webkit-transform .8s ease-in-out;\r\n  }\r\n  img:hover {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".footer1 {\r\n  background-color: #D3D3D3;\r\n\tpadding-top: 40px;\r\n\tpadding-right: 0;\r\n\tpadding-bottom: 20px;\r\n\tpadding-left: 0;/*\tborder-top-width: 4px;\r\n\tborder-top-style: solid;\r\n\tborder-top-color: #003;*/\r\n}\r\n\r\n\r\ntitle-widget {\r\n\tcolor: #898989;\r\n\tfont-size: 20px;\r\n\tfont-weight: 300;\r\n\tline-height: 1;\r\n\tposition: relative;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Fjalla One', sans-serif;\r\n\tmargin-top: 0;\r\n\tmargin-right: 0;\r\n\tmargin-bottom: 25px;\r\n\tmargin-left: 0;\r\n\tpadding-left: 28px;\r\n}\r\n\r\n.title-widget::before {\r\n    background-color: #ea5644;\r\n    content: \"\";\r\n    height: 22px;\r\n    left: 0px;\r\n    position: absolute;\r\n    top: -2px;\r\n    width: 5px;\r\n}\r\n\r\n\r\n\r\n.widget_nav_menu ul {\r\n    list-style: outside none none;\r\n    padding-left: 0;\r\n}\r\n\r\n.widget_archive ul li {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    content: \"\";\r\n    height: 3px;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 7px;\r\n    width: 3px;\r\n}\r\n\r\n\r\n.widget_nav_menu ul li {\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    line-height: 20px;\r\n\tposition: relative;\r\n    text-transform: uppercase;\r\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n    margin-bottom: 7px;\r\n    padding-bottom: 7px;\r\n\twidth:95%;\r\n}\r\n\r\n\r\n\r\n.title-median {\r\n    color: #636363;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    margin: 0 0 15px;\r\n    text-transform: uppercase;\r\n\tfont-family: 'Fjalla One', sans-serif;\r\n}\r\n\r\n.footerp p {font-family: 'Gudea', sans-serif; }\r\n\r\n\r\n#social:hover {\r\n    \t\t\t-webkit-transform:scale(1.1); \r\n-moz-transform:scale(1.1); \r\n-o-transform:scale(1.1); \r\n\t\t\t}\r\n\t\t\t#social {\r\n\t\t\t\t-webkit-transform:scale(0.8);\r\n                /* Browser Variations: */\r\n-moz-transform:scale(0.8);\r\n-o-transform:scale(0.8); \r\n-webkit-transition-duration: 0.5s; \r\n-moz-transition-duration: 0.5s;\r\n-o-transition-duration: 0.5s;\r\n\t\t\t}           \r\n/* \r\n    Only Needed in Multi-Coloured Variation \r\n                                               */\r\n\t\t\t.social-fb:hover {\r\n\t\t\t\tcolor: #3B5998;\r\n\t\t\t}\r\n\t\t\t.social-tw:hover {\r\n\t\t\t\tcolor: #4099FF;\r\n\t\t\t}\r\n\t\t\t.social-gp:hover {\r\n\t\t\t\tcolor: #d34836;\r\n\t\t\t}\r\n\t\t\t.social-em:hover {\r\n\t\t\t\tcolor: #f39c12;\r\n\t\t\t}\r\n\t\t\t.nomargin { margin:0px; padding:0px;}\r\n\r\n\r\n\r\n\r\n\r\n.footer-bottom {\r\n    background-color: #15224f;\r\n    min-height: 30px;\r\n    width: 100%;\r\n}\r\n.copyright {\r\n    color: #fff;\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n    padding: 7px 0;\r\n}\r\n.design {\r\n    color: #fff;\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n    padding: 7px 0;\r\n    text-align: right;\r\n}\r\n.design a {\r\n    color: #fff;\r\n}\r\n\r\n\r\n/************************************************************\r\n*************************Footer******************************\r\n*************************************************************/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n.navbar-brand{\r\n    padding: 0px !important;\r\n   \r\n}\r\n\r\n.brandImage{\r\n    width: 30rem;\r\n}\r\n\r\n\r\n\r\n#login-dp{\r\n    min-width: 250px;\r\n    padding: 14px 14px 0;\r\n    overflow:hidden;\r\n    background-color:rgba(255,255,255,.8);\r\n}\r\n#login-dp .help-block{\r\n    font-size:12px    \r\n}\r\n#login-dp .bottom{\r\n    background-color:rgba(255,255,255,.8);\r\n    border-top:1px solid #ddd;\r\n    clear:both;\r\n    padding:14px;\r\n}\r\n#login-dp .social-buttons{\r\n    margin:12px 0    \r\n}\r\n#login-dp .social-buttons a{\r\n    width: 49%;\r\n}\r\n#login-dp .form-group {\r\n    margin-bottom: 10px;\r\n}\r\n.btn-fb{\r\n    color: #fff;\r\n    background-color:#3b5998;\r\n}\r\n.btn-fb:hover{\r\n    color: #fff;\r\n    background-color:#496ebc \r\n}\r\n.btn-tw{\r\n    color: #fff;\r\n    background-color:#55acee;\r\n}\r\n.btn-tw:hover{\r\n    color: #fff;\r\n    background-color:#59b5fa;\r\n}\r\n@media(max-width:768px){\r\n    #login-dp{\r\n        background-color: inherit;\r\n        color: #fff;\r\n    }\r\n    #login-dp .bottom{\r\n        background-color: inherit;\r\n        border-top:0 none;\r\n    }\r\n} \r\nsvg {\r\n    display: block;\r\n    font: 10.5em 'Montserrat';\r\n    width: 960px;\r\n    height: 300px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text-copy {\r\n    fill: none;\r\n    stroke: white;\r\n    stroke-dasharray: 6% 29%;\r\n    stroke-width: 5px;\r\n    stroke-dashoffset: 0%;\r\n    -webkit-animation: stroke-offset 5.5s infinite linear;\r\n            animation: stroke-offset 5.5s infinite linear;\r\n}\r\n\r\n.text-copy:nth-child(1){\r\n    stroke: #4D163D;\r\n\t-webkit-animation-delay: -1;\r\n\t        animation-delay: -1;\r\n}\r\n\r\n.text-copy:nth-child(2){\r\n\tstroke: #840037;\r\n\t-webkit-animation-delay: -2s;\r\n\t        animation-delay: -2s;\r\n}\r\n\r\n.text-copy:nth-child(3){\r\n\tstroke: #BD0034;\r\n\t-webkit-animation-delay: -3s;\r\n\t        animation-delay: -3s;\r\n}\r\n\r\n.text-copy:nth-child(4){\r\n\tstroke: #BD0034;\r\n\t-webkit-animation-delay: -4s;\r\n\t        animation-delay: -4s;\r\n}\r\n\r\n.text-copy:nth-child(5){\r\n\tstroke: #FDB731;\r\n\t-webkit-animation-delay: -5s;\r\n\t        animation-delay: -5s;\r\n}\r\n\r\n@-webkit-keyframes stroke-offset{\r\n\t100% {stroke-dashoffset: -35%;}\r\n}\r\n\r\n@keyframes stroke-offset{\r\n\t100% {stroke-dashoffset: -35%;}\r\n}\r\nul.dropdown-menu {\r\n    -webkit-animation: fadeInUp .2s ease-in;\r\n    animation: fadeInUp .2s ease-in;\r\n    min-width: 120px;\r\n    font-size: 1em;\r\n    top: 125%;\r\n    z-index: 99999;\r\n    width: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css);", ""]);

// module
exports.push([module.i, "\r\n/*Loader*/\r\n#loading12 {\r\n    right: 0px;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    left: 0px;\r\n    position: fixed;\r\n    background-color: #59b210;\r\n    /* background-color: #0c713d; */\r\n   /* background-color:#FFFFFF;*/\r\n    z-index: 99999;\r\n    text-align: center;\r\n}\r\n.loading-txt {\r\n    position: fixed;\r\n    top: 55%;\r\n    width: 100%;\r\n    margin-top: -140px;\r\n    color: #fff;\r\n    font-size: 20px;\r\n}\r\n.loading-txt:after {\r\n    content: 'ShopOmania is loading...';\r\n    display: block;\r\n    margin-top: 140px;\r\n    font-size: 18px;\r\n}\r\n.loading-txt img {\r\n -webkit-filter: brightness(0) invert(1);\r\n         filter: brightness(0) invert(1);\r\n width: 200px; \r\n}\r\n.spinner {\r\n  width: 40px;\r\n    height: 40px;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -20px;\r\n    margin-left: -20px;\r\n  }\r\n\r\n.double-bounce1, .double-bounce2 {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  \r\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n  animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n  -webkit-animation-delay: -1.0s;\r\n  animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n  0%, 100% { -webkit-transform: scale(0.0) }\r\n  50% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n  0%, 100% { \r\n    transform: scale(0.0);\r\n    -webkit-transform: scale(0.0);\r\n  } 50% { \r\n    transform: scale(1.0);\r\n    -webkit-transform: scale(1.0);\r\n  }\r\n}\r\n\r\n\r\n#owl-demo .item{\r\n    margin: 3px;\r\n  }\r\n  #owl-demo .item img{\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\th5 {\r\n    font-size: 1.28571429em;\r\n    font-weight: 700;\r\n    line-height: 1.2857em;\r\n    margin: 0;\r\n}\r\n.img-responsive{\r\n    height: 200px;\r\n}\t\r\n\t\t.card {\r\n    font-size: 1em;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    border: none;\r\n    border-radius: .28571429rem;\r\n    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\r\n}\r\n\r\n.card-block {\r\n    font-size: 1em;\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 1em;\r\n    border: none;\r\n    border-top: 1px solid rgba(34, 36, 38, .1);\r\n    box-shadow: none;\r\n}\r\n\r\n.card-img-top {\r\n    display: block;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.card-title {\r\n    font-size: 1.28571429em;\r\n    font-weight: 700;\r\n    line-height: 1.2857em;\r\n}\r\n\r\n.card-text {\r\n    clear: both;\r\n    margin-top: .5em;\r\n    color: rgba(0, 0, 0, .68);\r\n}\r\n.product-head .product-image .featured-img a img {\r\n    max-width: 100%;\r\n    margin: 0px auto;\r\n    height: 200px;\r\n}\r\n.card-footer {\r\n    font-size: 1em;\r\n    position: static;\r\n    top: 0;\r\n    left: 0;\r\n    max-width: 100%;\r\n    padding: .75em 1em;\r\n    color: rgba(0, 0, 0, .4);\r\n    border-top: 1px solid rgba(0, 0, 0, .05) !important;\r\n    background: #fff;\r\n}\r\n\r\n.card-inverse .btn {\r\n    border: 1px solid rgba(0, 0, 0, .05);\r\n}\r\n\t\t.product_view .modal-dialog{max-width: 800px; width: 100%;}\r\n        .pre-cost{text-decoration: line-through; color: #a5a5a5;}\r\n        .space-ten{padding: 10px 0;}\r\n.panel.with-nav-tabs .panel-heading{\r\n    padding: 5px 5px 0 5px;\r\n}\r\n.panel.with-nav-tabs .nav-tabs{\r\n\tborder-bottom: none;\r\n}\r\n.panel.with-nav-tabs .nav-justified{\r\n\tmargin-bottom: -1px;\r\n}\r\n/********************************************************************/\r\n/*** PANEL DEFAULT ***/\r\n.with-nav-tabs.panel-default .nav-tabs > li > a,\r\n.with-nav-tabs.panel-default .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-default .nav-tabs > li > a:focus {\r\n    color: #777;\r\n}\r\n.with-nav-tabs.panel-default .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-default .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-default .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-default .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-default .nav-tabs > li > a:focus {\r\n    color: #777;\r\n\tbackground-color: #ddd;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-default .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-default .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-default .nav-tabs > li.active > a:focus {\r\n\tcolor: #555;\r\n\tbackground-color: #fff;\r\n\tborder-color: #ddd;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #f5f5f5;\r\n    border-color: #ddd;\r\n}\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #777;   \r\n}\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #ddd;\r\n}\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-default .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-color: #555;\r\n}\r\n/********************************************************************/\r\n/*** PANEL PRIMARY ***/\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:focus {\r\n    color: #fff;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li > a:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #3071a9;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a:focus {\r\n\tcolor: #428bca;\r\n\tbackground-color: #fff;\r\n\tborder-color: #428bca;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #428bca;\r\n    border-color: #3071a9;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #fff;   \r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #3071a9;\r\n}\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    background-color: #4a9fe9;\r\n}\r\n/********************************************************************/\r\n/*** PANEL SUCCESS ***/\r\n.with-nav-tabs.panel-success .nav-tabs > li > a,\r\n.with-nav-tabs.panel-success .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-success .nav-tabs > li > a:focus {\r\n\tcolor: #3c763d;\r\n}\r\n.with-nav-tabs.panel-success .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-success .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-success .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-success .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-success .nav-tabs > li > a:focus {\r\n\tcolor: #3c763d;\r\n\tbackground-color: #d6e9c6;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-success .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-success .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-success .nav-tabs > li.active > a:focus {\r\n\tcolor: #3c763d;\r\n\tbackground-color: #fff;\r\n\tborder-color: #d6e9c6;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #dff0d8;\r\n    border-color: #d6e9c6;\r\n}\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #3c763d;   \r\n}\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #d6e9c6;\r\n}\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-success .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-color: #3c763d;\r\n}\r\n/********************************************************************/\r\n/*** PANEL INFO ***/\r\n.with-nav-tabs.panel-info .nav-tabs > li > a,\r\n.with-nav-tabs.panel-info .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-info .nav-tabs > li > a:focus {\r\n\tcolor: #31708f;\r\n}\r\n.with-nav-tabs.panel-info .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-info .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-info .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-info .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-info .nav-tabs > li > a:focus {\r\n\tcolor: #31708f;\r\n\tbackground-color: #bce8f1;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-info .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-info .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-info .nav-tabs > li.active > a:focus {\r\n\tcolor: #31708f;\r\n\tbackground-color: #fff;\r\n\tborder-color: #bce8f1;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n}\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #31708f;   \r\n}\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #bce8f1;\r\n}\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-info .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-color: #31708f;\r\n}\r\n/********************************************************************/\r\n/*** PANEL WARNING ***/\r\n.with-nav-tabs.panel-warning .nav-tabs > li > a,\r\n.with-nav-tabs.panel-warning .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-warning .nav-tabs > li > a:focus {\r\n\tcolor: #8a6d3b;\r\n}\r\n.with-nav-tabs.panel-warning .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-warning .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-warning .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-warning .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-warning .nav-tabs > li > a:focus {\r\n\tcolor: #8a6d3b;\r\n\tbackground-color: #faebcc;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-warning .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-warning .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-warning .nav-tabs > li.active > a:focus {\r\n\tcolor: #8a6d3b;\r\n\tbackground-color: #fff;\r\n\tborder-color: #faebcc;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #fcf8e3;\r\n    border-color: #faebcc;\r\n}\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #8a6d3b; \r\n}\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #faebcc;\r\n}\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-warning .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    color: #fff;\r\n    background-color: #8a6d3b;\r\n}\r\n/********************************************************************/\r\n/*** PANEL DANGER ***/\r\n.with-nav-tabs.panel-danger .nav-tabs > li > a,\r\n.with-nav-tabs.panel-danger .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-danger .nav-tabs > li > a:focus {\r\n\tcolor: #a94442;\r\n}\r\n.with-nav-tabs.panel-danger .nav-tabs > .open > a,\r\n.with-nav-tabs.panel-danger .nav-tabs > .open > a:hover,\r\n.with-nav-tabs.panel-danger .nav-tabs > .open > a:focus,\r\n.with-nav-tabs.panel-danger .nav-tabs > li > a:hover,\r\n.with-nav-tabs.panel-danger .nav-tabs > li > a:focus {\r\n\tcolor: #a94442;\r\n\tbackground-color: #ebccd1;\r\n\tborder-color: transparent;\r\n}\r\n.with-nav-tabs.panel-danger .nav-tabs > li.active > a,\r\n.with-nav-tabs.panel-danger .nav-tabs > li.active > a:hover,\r\n.with-nav-tabs.panel-danger .nav-tabs > li.active > a:focus {\r\n\tcolor: #a94442;\r\n\tbackground-color: #fff;\r\n\tborder-color: #ebccd1;\r\n\tborder-bottom-color: transparent;\r\n}\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu {\r\n    background-color: #f2dede; /* bg color */\r\n    border-color: #ebccd1; /* border color */\r\n}\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > li > a {\r\n    color: #a94442; /* normal text color */  \r\n}\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\r\n    background-color: #ebccd1; /* hover bg color */\r\n}\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > .active > a,\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\r\n.with-nav-tabs.panel-danger .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\r\n    color: #fff; /* active text color */\r\n    background-color: #a94442; /* active bg color */\r\n}\r\n\r\n.home-carousel .owl-item .product-wrapper, #new-product .owl-item .product-wrapper, .home-partner .owl-item .product-wrapper {\r\n    width: 83%;\r\n    margin-left: 3px;\r\n}\r\n/* font Awesome http://fontawesome.io*/\r\n/* Animation.css*/\r\n\r\n.col-item {\r\n  border: 1px solid #E1E1E1;\r\n  background: #FFF;\r\n  margin-bottom:12px;\r\n}\r\n.col-item .options {\r\n  position:absolute;\r\n  top:6px;\r\n  right:22px;\r\n}\r\n.col-item .photo {\r\n  overflow: hidden;\r\n}\r\n.col-item .photo .options {\r\n  display:none;\r\n}\r\n.col-item .photo img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.col-item .options-cart {\r\n  position:absolute;\r\n  left:22px;\r\n  top:6px;\r\n  display:none;\r\n}\r\n.col-item .photo:hover .options,\r\n.col-item .photo:hover .options-cart {\r\n  display:block;\r\n  -webkit-animation: fadeIn .5s ease;\r\n  animation: fadeIn .5s ease;\r\n}\r\n.col-item .options-cart-round {\r\n  position:absolute;\r\n  left:42%;\r\n  top:22%;\r\n  display:none;\r\n}\r\n.col-item .options-cart-round button {\r\n  border-radius: 50%;\r\n  padding:14px 16px;\r\n  \r\n}\r\n.col-item .options-cart-round button .fa {\r\n  font-size:22px;\r\n}\r\n.col-item .photo:hover .options-cart-round {\r\n  display:block;\r\n  -webkit-animation: fadeInDown .5s ease;\r\n  animation: fadeInDown .5s ease;\r\n}\r\n.col-item .info {\r\n  padding: 10px;\r\n  margin-top: 1px;\r\n}\r\n.col-item .price-details {\r\n  width: 100%;\r\n  margin-top: 5px;\r\n}\r\n.col-item .price-details h1 {\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  float:left;\r\n}\r\n.col-item .price-details .details {\r\n  margin-bottom: 0px;\r\n  font-size:12px;\r\n}\r\n.col-item .price-details span {\r\n  float:right;\r\n}\r\n.col-item .price-details .price-new {\r\n  font-size:16px;\r\n}\r\n.col-item .price-details .price-old {\r\n  font-size:18px;\r\n  text-decoration:line-through;\r\n}\r\n.col-item .separator {\r\n  border-top: 1px solid #E1E1E1;\r\n}\r\n\r\n.col-item .clear-left {\r\n  clear: left;\r\n}\r\n.col-item .separator a {\r\n  text-decoration:none;\r\n}\r\n.col-item .separator p {\r\n  margin-bottom: 0;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n}\r\n\r\n.col-item .separator p i {\r\n  margin-right: 5px;\r\n}\r\n.col-item .btn-add {\r\n  width: 60%;\r\n  float: left;\r\n}\r\n.col-item .btn-add a {\r\n  display:inline-block !important;\r\n}\r\n.col-item .btn-add {\r\n  border-right: 1px solid #E1E1E1;\r\n}\r\n.col-item .btn-details {\r\n  width: 40%;\r\n  float: left;\r\n  padding-left: 10px;\r\n}\r\n.col-item .btn-details a {\r\n  display:inline-block !important;\r\n}\r\n.col-item .btn-details a:first-child {\r\n  margin-right:12px;\r\n}\r\n.col-item[_ngcontent-c4] {\r\n    border: 1px solid #E1E1E1;\r\n    background: #FFF;\r\n    margin-bottom: 12px;\r\n    min-height: 320px;\r\n    max-height: 320px;\r\n    margin-top: 20px;\r\n}\r\n.col-item[_ngcontent-c4] .btn-details[_ngcontent-c4] a[_ngcontent-c4]:first-child {\r\n    margin-right: 12px;\r\n    color: red;\r\n}\r\n.product-label>span.label-sale {\r\n    color: #fff;\r\n    background-color: #59b210;\r\n    margin-top: 10px;\r\n    margin-left: 15px;\r\n}\r\n.product-label>span.label-sale:after {\r\n    border-color: #59b210 transparent transparent #59b210;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".single-top-right h3 {\r\n    text-transform: capitalize;\r\n    font-size: 2em;\r\n    color: #59b210;\r\n    font-family: 'Offside', cursive;\r\n    margin-bottom: .3em;\r\n}\r\nimg{width:100%;}\r\n.bg-grey {\r\n    background-color: #f2f2f2;\r\n}\r\na {\r\n    color : red;\r\n}\r\na:hover {\r\n    color : brown;\r\n}\r\n.listing-number{\r\n   width: 100%;\r\n}\r\n.listing-number li {\r\n   display: inline-block;\r\n   list-style-type: none;\r\n   overflow: hidden;\r\n   position: relative;\r\n   width: 50%;\r\n   float: left;\r\n   color: #636363;\r\n  }\r\n.listing-enquiry-sec {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.listing-enquiry-sec ul {\r\n   padding:0pt;\r\n   \r\n    \r\n}\r\n.listing-enquiry-sec ul li {\r\n    margin: 0in;\r\n    float: left;\r\n    display: inline-block;\r\n    line-height: 18pt;\r\n    color: #343c42;\r\n    font-weight: 400;\r\n    list-style-type: none;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n.listing-enquiry-sec ul li a {\r\n        margin-right: .052083333in;\r\n        color: #3e4c56;\r\n        padding: 3.75pt;\r\n        text-align: center;\r\n        font-weight: 600;\r\n        border-radius: .020833333in;\r\n        margin-left: 3pt;\r\n        margin-right: 3pt;\r\n        margin-top: 3pt;\r\n        margin-bottom: 5pt;\r\n        box-sizing: border-box;\r\n        display: block;\r\n        text-align: center;\r\n        -o-border-image: none;\r\n           border-image: none;\r\n        border-color: #d6d1d1;\r\n        border-style: solid;\r\n        border-top-width: .75pt;\r\n        border-bottom-width: .75pt;\r\n        border-left-width: 1pt;\r\n        border-right-width: .75pt;\r\n        outline: none;\r\n        transition: all .5s ease;\r\n}\r\n.listing-enquiry-sec ul li a:hover {\r\n        color: red;\r\n        list-style-type: none;\r\n}\r\n\r\n.listing-title h3 {\r\n    font-size: 1.5pc;\r\n    padding-top: .3125pc;\r\n    padding-bottom: 6pt;\r\n    color: #000;\r\n    font-weight: 700;\r\n    \r\n}\r\n.item-listing {\r\n    margin-top:15px;\r\n}\r\n.item-listing:hover {\r\n    background-color : #fff;\r\n    border-radius: 2px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); \r\n    transition: box-shadow .25s;\r\n}\r\n@media screen and ( min-width: 600px ) {\r\n  \r\n  .listing-enquiry-sec ul li {\r\n    width: 25%;\r\n}\r\n}\r\n.col-md-12 {\r\n    width: 100%;\r\n    margin-left: -16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "img {\r\n\tborder-radius: 50%;\r\n\ttransition: -webkit-transform .8s ease-in-out;\r\n\ttransition: transform .8s ease-in-out;\r\n\ttransition:         transform .8s ease-in-out, -webkit-transform .8s ease-in-out;\r\n  }\r\n  img:hover {\r\n\t-webkit-transform: rotate(360deg);\r\n\t\t\ttransform: rotate(360deg);\r\n\t}\r\n\t\r\n\tbtn-googleplus {\r\n\t  background: #E93F2E;\r\n\t  border-radius: 0;\r\n\t  color: #fff;\r\n\t  border-width: 1px;\r\n\t  border-style: solid;\r\n\t  border-color: #b72213;\r\n\t}\r\n\r\n\t.btn-googleplus:active, .btn-googleplus:hover {\r\n\t  background: #b72213;\r\n\t  color: #fff;\r\n\t} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".post-ad-form {\r\n    /* border: 1px solid #eee; */\r\n    padding: 40px;\r\n    margin-bottom: 60px;\r\n}\r\n.post-ad-form form label {\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 8px;\r\n    margin-left: 10px;\r\n    color: #000;\r\n    margin-top: 10px;\r\n    display: BLOCK;\r\n    font-weight: 400;\r\n    float: left;\r\n    width: 16%;\r\n    text-align: right;\r\n    margin-right: 4%;\r\n}\r\n.post-ad-form form label span {\r\n\tcolor:red;\r\n}\r\n.post-ad-form input[type=\"text\"] {\r\n    padding: 10px 10px 10px 10px;\r\n    \r\n    padding: 8px;\r\n    width: 30%;\r\n    margin-bottom: 25px;\r\n    border: 1px solid #36CF04;\r\n    outline: none;\r\n    color: #555;\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n    -o-transition: 0.5s all;\r\n    -ms-transition: 0.5s all;\r\n\tfloat: left;\r\n}\r\n.post-ad-form textarea {\r\n    height: 180px;\r\n    outline: none;\r\n    resize: none;\r\n\tpadding: 10px 10px 10px 10px;\r\n    width: 70%;\r\n    margin-bottom: 25px;\r\n    border: 1px solid #36CF04;\r\n    outline: none;\r\n    color: #555;\r\n}\r\n.post-ad-form form select {\r\n    border: 1px solid #36CF04;\r\n    background-color: #fff;\r\n    padding: 8px;\r\n    width: 30%;\r\n    margin-bottom: 25px;\r\n}\r\n.post-ad-form input[type=\"submit\"] {\r\n    background: #0099e5;\r\n    color: white;\r\n    -webkit-appearance: none;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    padding: 10px 50px;\r\n    font-size: 20px;\r\n    letter-spacing: 0.1em;\r\n    font-weight: 300;\r\n    transition: all 333ms ease-in-out;\r\n    margin-top: 20px;\r\n\tfloat: right;\r\n}\r\nlegend\r\n{\r\n\tfont-weight: bold;\r\n\tcolor: #333;\r\n}\r\n#filedrag\r\n{\r\n\t    display: none;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    padding: 25px 0;\r\n    margin: 25px 0;\r\n    color: #0099e5;\r\n    border: 2px dashed #0099e5;\r\n    border-radius: 0px;\r\n    -webkit-border-radius: 0px;\r\n    -moz-border-radius: 0px;\r\n    -ms-border-radius: 0px;\r\n    -o-border-radius: 0px;\r\n    cursor: default;\r\n    font-size: 20px;\r\n}\r\n\r\n#filedrag.hover\r\n{\r\n\tcolor: #f00;\r\n\tborder-color: #f00;\r\n\tborder-style: solid;\r\n\tbox-shadow: inset 0 3px 4px #888;\r\n}\r\nimg\r\n{\r\n\tmax-width: 100%;\r\n}\r\n.photos-upload-view{\r\n\tfloat:left;\r\n\twidth: 70%;\r\n\tmargin-top: 10px;\r\n}\r\n.upload-ad-photos {\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n    padding: 20px 0;\r\n    margin: 20px 0;\r\n}.personal-details label {\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 8px;\r\n    color: #000;\r\n    margin-top: 10px;\r\n    display: BLOCK;\r\n    font-weight: 400;\r\n    float: left;\r\n    width: 16%;\r\n    text-align: right;\r\n    margin-right: 4%;\r\n}\r\np.post-terms {\r\n    margin-left: 20%;\r\n    color: #000;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\np.post-terms a {\r\n    color: #ff4c4c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".post-ad-form {\r\n    /* border: 1px solid #eee; */\r\n    padding: 40px;\r\n    margin-bottom: 60px;\r\n}\r\n.post-ad-form form label {\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 8px;\r\n    margin-left: 10px;\r\n    color: #000;\r\n    margin-top: 10px;\r\n    display: BLOCK;\r\n    font-weight: 400;\r\n    float: left;\r\n    width: 16%;\r\n    text-align: right;\r\n    margin-right: 4%;\r\n}\r\n.post-ad-form form label span {\r\n\tcolor:red;\r\n}\r\n.post-ad-form input[type=\"text\"] {\r\n    padding: 10px 10px 10px 10px;\r\n    \r\n    padding: 8px;\r\n    width: 30%;\r\n    margin-bottom: 25px;\r\n    border: 1px solid #36CF04;\r\n    outline: none;\r\n    color: #555;\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n    -o-transition: 0.5s all;\r\n    -ms-transition: 0.5s all;\r\n\tfloat: left;\r\n}\r\n.post-ad-form textarea {\r\n    height: 180px;\r\n    outline: none;\r\n    resize: none;\r\n\tpadding: 10px 10px 10px 10px;\r\n    width: 70%;\r\n    margin-bottom: 25px;\r\n    border: 1px solid #36CF04;\r\n    outline: none;\r\n    color: #555;\r\n}\r\n.post-ad-form form select {\r\n    border: 1px solid #36CF04;\r\n    background-color: #fff;\r\n    padding: 8px;\r\n    width: 30%;\r\n    margin-bottom: 25px;\r\n}\r\n.post-ad-form input[type=\"submit\"] {\r\n    background: #0099e5;\r\n    color: white;\r\n    -webkit-appearance: none;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    padding: 10px 50px;\r\n    font-size: 20px;\r\n    letter-spacing: 0.1em;\r\n    font-weight: 300;\r\n    transition: all 333ms ease-in-out;\r\n    margin-top: 20px;\r\n\tfloat: right;\r\n}\r\nlegend\r\n{\r\n\tfont-weight: bold;\r\n\tcolor: #333;\r\n}\r\n#filedrag\r\n{\r\n\t    display: none;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    padding: 25px 0;\r\n    margin: 25px 0;\r\n    color: #0099e5;\r\n    border: 2px dashed #0099e5;\r\n    border-radius: 0px;\r\n    -webkit-border-radius: 0px;\r\n    -moz-border-radius: 0px;\r\n    -ms-border-radius: 0px;\r\n    -o-border-radius: 0px;\r\n    cursor: default;\r\n    font-size: 20px;\r\n}\r\n\r\n#filedrag.hover\r\n{\r\n\tcolor: #f00;\r\n\tborder-color: #f00;\r\n\tborder-style: solid;\r\n\tbox-shadow: inset 0 3px 4px #888;\r\n}\r\nimg\r\n{\r\n\tmax-width: 100%;\r\n}\r\n.photos-upload-view{\r\n\tfloat:left;\r\n\twidth: 70%;\r\n\tmargin-top: 10px;\r\n}\r\n.upload-ad-photos {\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n    padding: 20px 0;\r\n    margin: 20px 0;\r\n}.personal-details label {\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 8px;\r\n    color: #000;\r\n    margin-top: 10px;\r\n    display: BLOCK;\r\n    font-weight: 400;\r\n    float: left;\r\n    width: 16%;\r\n    text-align: right;\r\n    margin-right: 4%;\r\n}\r\np.post-terms {\r\n    margin-left: 20%;\r\n    color: #000;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\np.post-terms a {\r\n    color: #ff4c4c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n/*=============================================================\r\n    Authour URI: www.binarycart.com\r\n    License: Commons Attribution 3.0\r\n\r\n    http://creativecommons.org/licenses/by/3.0/\r\n\r\n    100% To use For Personal And Commercial Use.\r\n    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US\r\n   \r\n    ========================================================  */\r\n/*==============================================\r\n    GENERAL  STYLES    \r\n    =============================================*/\r\nbody {\r\n    font-family: 'Open Sans', sans-serif;\r\n    line-height:30px;\r\n}\r\n\r\n #wrapper {\r\n    width: 100%;\r\n    margin-top:50px;\r\n}\r\n.content {\r\n    min-height: 1000px;\r\n    max-height: auto;\r\n    padding: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n#page-wrapper {\r\n    padding: 15px 15px;\r\n    min-height: 600px;\r\n    background:#F3F3F3;\r\n   \r\n}\r\n#page-inner {\r\n    width:100%;\r\n    margin:10px 20px 10px 0px;\r\n    background-color:#fff!important;\r\n    padding:10px;\r\n    min-height:1050px;\r\n}\r\n.pad-top {\r\n    padding-top:15px;\r\n}\r\n/*==============================================\r\n    MENU STYLES    \r\n    =============================================*/\r\n\r\n.sidebar-collapse .nav {\r\n\tpadding:0;\r\n    padding-top:50px;\r\n}\r\n\r\n.sidebar-collapse > .nav > li > a {\r\n\tpadding:15px 10px;\r\n    color: #214761;\r\nfont-weight: 900;\r\nfont-size: 16px;\r\n}\r\n.sidebar-collapse > .nav > li {\r\n\tborder-bottom:1px solid #e1e1e1;\r\n}\r\n.sidebar-collapse .nav > li > a:hover,\r\n.sidebar-collapse .nav > li > a:focus {\r\n\t\r\n\tbackground:#F3F3F3;\r\n\toutline:0;\r\n}\r\n\r\n.navbar-side {\r\n\tborder:none;\r\n\tbackground-color: #fff;\r\n\t\r\n}\r\n.navbar-inverse {\r\n\r\nbackground-color: #191919;\r\nborder-color: #F0F0F0;\r\nmin-height: 80px;\r\n}\r\n\r\n\r\n.nav > li > a > i {\r\n    margin-right:10px;\r\n}\r\n.logout-spn {\r\n    float:right;\r\n    color:#fff;\r\n    font-size:25px;\r\n    font-weight:800;\r\n    margin:20px;\r\n    margin: 10px 25px 10px 50px;\r\n}\r\n    .logout-spn a {\r\n        text-decoration:none;\r\n    }\r\n.active-link {\r\n    background-color:#f3f3f3;\r\n}\r\n    \r\n/*==============================================\r\n    DASHBOARD STYLES    \r\n    =============================================*/\r\n.div-square {\r\n    padding:5px;\r\n    border:3px double #e1e1e1;\r\n   border-radius:8px;\r\n    margin:5px;\r\n\r\n}\r\n\r\n.div-square> a,.div-square> a:hover {\r\n    color:#808080;\r\n     text-decoration:none;\r\n}\r\n/*==============================================\r\n    FOOTER STYLES     \r\n    =============================================*/\r\n\r\n\r\n\r\n    .footer > a, .footer>a:hover {\r\n       \r\n        color:#fff;\r\n    }\r\n\r\n/*==============================================\r\n    MEDIA QUERIES     \r\n    =============================================*/\r\n \r\n @media(min-width:768px) {\r\n     #page-wrapper{\r\n               margin: 0 0 0 260px;\r\n        padding: 15px 30px;\r\n        min-height: 1050px;\r\n\t\t\r\n    }\r\n\t\r\n\t\r\n    .navbar-side {\r\n        z-index: 1;\r\n        position: absolute;\r\n        width: 260px;\r\n       \r\n    }\r\n\r\n \r\n}\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default {\r\n    color: #fff;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".panel-body .btn:not(.btn-block) { width:auto;margin-bottom:10px; }\r\n.col-md-3 {\r\n    width: 40%;\r\n}\r\n.col-md-4 {\r\n    width: 110.333333%;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    background-color: #D3D3D3;\r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);", ""]);

// module
exports.push([module.i, "fieldset, label { margin: 0; padding: 0; }\r\nbody{ margin: 20px; }\r\nh1 { font-size: 1.5em; margin: 10px; }\r\n\r\n/****** Style Star Rating Widget *****/\r\n\r\n.rating { \r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.rating > input { display: none; } \r\n.rating > label:before { \r\n  margin: 5px;\r\n  font-size: 1.25em;\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  content: \"\\F005\";\r\n}\r\n\r\n.rating > .half:before { \r\n  content: \"\\F089\";\r\n  position: absolute;\r\n}\r\n\r\n.rating > label { \r\n  color: #ddd; \r\n float: right; \r\n}\r\n\r\n/***** CSS Magic to Highlight Stars on Hover *****/\r\n\r\n.rating > input:checked ~ label, /* show gold star when clicked */\r\n.rating:not(:checked) > label:hover, /* hover current star */\r\n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */\r\n\r\n.rating > input:checked + label:hover, /* hover current star when changing rating */\r\n.rating > input:checked ~ label:hover,\r\n.rating > label:hover ~ input:checked ~ label, /* lighten current selection */\r\n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* .thumbnail {\r\n    position: relative;\r\n    width:300px;\r\n    height:300px;\r\n}\r\n\r\n.thumbnail img {\r\n    width:50%;\r\n    height:50%;\r\n}\r\n\r\n#close {\r\n    display: block;\r\n    position: absolute;\r\n    width:30px;\r\n    height:30px;\r\n    top: 60px;\r\n    right: 140px;\r\n    background: url(http://icons.iconarchive.com/icons/kyo-tux/delikate/512/Close-icon.png);\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    } */\r\n\r\n.post-ad-form {\r\n    border: 1px solid #eee;\r\n    padding: 40px;\r\n    margin-bottom: 60px;\r\n}\r\n.post-ad-form form label {\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 8px;\r\n    color: #000;\r\n    margin-top: 10px;\r\n    display: BLOCK;\r\n    font-weight: 400;\r\n    float: left;\r\n    width: 16%;\r\n    text-align: right;\r\n    margin-right: 4%;\r\n}\r\n.post-ad-form form label span {\r\n\tcolor:red;\r\n}\r\n.post-ad-form input[type=\"text\"] {\r\n    padding: 10px 10px 10px 10px;\r\n    width: 70%;\r\n    margin-bottom: 25px;\r\n    border: 1px solid #36CF04;\r\n    outline: none;\r\n    color: #555;\r\n    transition: 0.5s all;\r\n    -webkit-transition: 0.5s all;\r\n    -moz-transition: 0.5s all;\r\n    -o-transition: 0.5s all;\r\n    -ms-transition: 0.5s all;\r\n\tfloat: left;\r\n}\r\n.post-ad-form textarea {\r\n    height: 180px;\r\n    outline: none;\r\n    resize: none;\r\n\tpadding: 10px 10px 10px 10px;\r\n    width: 70%;\r\n    margin-bottom: 25px;\r\n    border: 1px solid #36CF04;\r\n    outline: none;\r\n    color: #555;\r\n}\r\n.post-ad-form form select {\r\n    border: 1px solid #36CF04;\r\n    background-color: #fff;\r\n    padding: 8px;\r\n    width: 30%;\r\n    margin-bottom: 25px;\r\n}\r\n.post-ad-form input[type=\"submit\"] {\r\n    background: #0099e5;\r\n    color: white;\r\n    -webkit-appearance: none;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    position: relative;\r\n    padding: 10px 50px;\r\n    font-size: 20px;\r\n    letter-spacing: 0.1em;\r\n    font-weight: 300;\r\n    transition: all 333ms ease-in-out;\r\n    margin-top: 20px;\r\n\tfloat: right;\r\n}\r\nlegend\r\n{\r\n\tfont-weight: bold;\r\n\tcolor: #333;\r\n}\r\n#filedrag\r\n{\r\n\t    display: none;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    padding: 25px 0;\r\n    margin: 25px 0;\r\n    color: #0099e5;\r\n    border: 2px dashed #0099e5;\r\n    border-radius: 0px;\r\n    -webkit-border-radius: 0px;\r\n    -moz-border-radius: 0px;\r\n    -ms-border-radius: 0px;\r\n    -o-border-radius: 0px;\r\n    cursor: default;\r\n    font-size: 20px;\r\n}\r\n\r\n#filedrag.hover\r\n{\r\n\tcolor: #f00;\r\n\tborder-color: #f00;\r\n\tborder-style: solid;\r\n\tbox-shadow: inset 0 3px 4px #888;\r\n}\r\nimg\r\n{\r\n\tmax-width: 100%;\r\n}\r\n.photos-upload-view{\r\n\tfloat:left;\r\n\twidth: 70%;\r\n\tmargin-top: 10px;\r\n}\r\n.upload-ad-photos {\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n    padding: 20px 0;\r\n    margin: 20px 0;\r\n}.personal-details label {\r\n    font-size: 15px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 8px;\r\n    color: #000;\r\n    margin-top: 10px;\r\n    display: BLOCK;\r\n    font-weight: 400;\r\n    float: left;\r\n    width: 16%;\r\n    text-align: right;\r\n    margin-right: 4%;\r\n}\r\np.post-terms {\r\n    margin-left: 20%;\r\n    color: #000;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n}\r\np.post-terms a {\r\n    color: #ff4c4c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.table>tbody>tr>td, .table>tfoot>tr>td{\r\n    vertical-align: middle;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    table#cart tbody td .form-control{\r\n\t\twidth:20%;\r\n\t\tdisplay: inline !important;\r\n\t}\r\n\t.actions .btn{\r\n\t\twidth:36%;\r\n\t\tmargin:1.5em 0;\r\n\t}\r\n\t\r\n\t.actions .btn-info{\r\n\t\tfloat:left;\r\n\t}\r\n\t.actions .btn-danger{\r\n\t\tfloat:right;\r\n\t}\r\n\t\r\n\ttable#cart thead { display: none; }\r\n\ttable#cart tbody td { display: block; padding: .6rem; min-width:320px;}\r\n\ttable#cart tbody tr td:first-child { background: #333; color: #fff; }\r\n\ttable#cart tbody td:before {\r\n\t\tcontent: attr(data-th); font-weight: bold;\r\n\t\tdisplay: inline-block; width: 8rem;\r\n\t}\r\n\t\r\n\t\r\n\t\r\n\ttable#cart tfoot td{display:block; }\r\n\ttable#cart tfoot td .btn{display:block;}\r\n\t\r\n}\r\n.container {\r\n\twidth: 100%;\r\n\tbackground-color: #fff;\r\n}\r\n.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {\r\n    display: block;\r\n    max-width: 100%;\r\n\theight: auto;\r\n\tmin-width: 100px;\r\n}\r\n\r\n\r\n\r\nhtml { -webkit-text-size-adjust:none; -ms-text-size-adjust: none;}\r\n@media only screen and (max-device-width: 680px), only screen and (max-width: 680px) { \r\n    *[class=\"table_width_100\"] {\r\n\t\twidth: 96% !important;\r\n\t}\r\n\t*[class=\"border-right_mob\"] {\r\n\t\tborder-right: 1px solid #dddddd;\r\n\t}\r\n\t*[class=\"mob_100\"] {\r\n\t\twidth: 100% !important;\r\n\t}\r\n\t*[class=\"mob_center\"] {\r\n\t\ttext-align: center !important;\r\n\t}\r\n\t*[class=\"mob_center_bl\"] {\r\n\t\tfloat: none !important;\r\n\t\tdisplay: block !important;\r\n\t\tmargin: 0px auto;\r\n\t}\t\r\n\t.iage_footer a {\r\n\t\ttext-decoration: none;\r\n\t\tcolor: #929ca8;\r\n\t}\r\n\timg.mob_display_none {\r\n\t\twidth: 0px !important;\r\n\t\theight: 0px !important;\r\n\t\tdisplay: none !important;\r\n\t}\r\n\timg.mob_width_50 {\r\n\t\twidth: 40% !important;\r\n\t\theight: auto !important;\r\n\t}\r\n}\r\n.table_width_100 {\r\n\twidth: 680px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "  /* input.ng-touched.ng-invalid {\r\n            \r\n           border-left :5px solid red\r\n        }\r\n\r\n        input.ng-touched.ng-valid {\r\n           \r\n            border-left :5px solid green;\r\n        } */\r\n\r\n        img {\r\n            border-radius: 50%;\r\n            transition: -webkit-transform .8s ease-in-out;\r\n            transition: transform .8s ease-in-out;\r\n            transition:         transform .8s ease-in-out, -webkit-transform .8s ease-in-out;\r\n          }\r\n          img:hover {\r\n            -webkit-transform: rotate(360deg);\r\n                    transform: rotate(360deg);\r\n          }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".rsidebar h4, .related-row h4 {\r\n    font-size: 1.1em;\r\n    color: #59b210;\r\n    text-transform: uppercase;\r\n    margin-bottom: 1em;\r\n    font-family: 'Offside', cursive;\r\n}\r\n.rsidebar-top {\r\n    border: 1px solid #cccccc;\r\n    padding: 2em;\r\n    margin-top: 53px;\r\n}\r\n.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: 200px;\r\n}\r\n\r\n.agile-products {\r\n    padding: 1.5em;\r\n    border: 1px solid #e4e4e4;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: .5s all;\r\n    height: 350px;\r\n}\r\n.product-top {\r\n    background: #59b210;\r\n    padding: 1em 2em;\r\n}\r\n.agile-products:hover .new-tag:before {\r\n    border-top-color: #1e9e1a;\r\n}\r\n.new-tag:before {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 60px solid #104c84;\r\n    border-right: 60px solid transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: .5s all;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".rsidebar h4, .related-row h4 {\r\n    font-size: 1.1em;\r\n    color: #59b210;\r\n    text-transform: uppercase;\r\n    margin-bottom: 1em;\r\n    font-family: 'Offside', cursive;\r\n}\r\n.rsidebar-top {\r\n    border: 1px solid #cccccc;\r\n    padding: 2em;\r\n    margin-top: 53px;\r\n}\r\n.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img {\r\n    display: block;\r\n    max-width: 100%;\r\n    height: 200px;\r\n}\r\n\r\n.agile-products {\r\n    padding: 1.5em;\r\n    border: 1px solid #e4e4e4;\r\n    position: relative;\r\n    overflow: hidden;\r\n    transition: .5s all;\r\n    height: 350px;\r\n}\r\n.product-top {\r\n    background: #59b210;\r\n    padding: 1em 2em;\r\n}\r\n.agile-products:hover .new-tag:before {\r\n    border-top-color: #1e9e1a;\r\n}\r\n.new-tag:before {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 60px solid #104c84;\r\n    border-right: 60px solid transparent;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: .5s all;\r\n}\r\n\r\n.pagination>li>a, .pagination>li>span {\r\n    position: relative;\r\n    float: left;\r\n    padding: 6px 12px;\r\n    margin-left: -1px;\r\n    line-height: 1.42857143;\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n\r\n.card {\r\n    padding-top: 20px;\r\n    margin: 10px 0 20px 0;\r\n    background-color: rgba(214, 224, 226, 0.2);\r\n    border-top-width: 0;\r\n    border-bottom-width: 2px;\r\n    border-radius: 3px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card .card-heading {\r\n    padding: 0 20px;\r\n    margin: 0;\r\n}\r\n\r\n.card .card-heading.simple {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    color: #777;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.card .card-heading.image img {\r\n    display: inline-block;\r\n    width: 46px;\r\n    height: 46px;\r\n    margin-right: 15px;\r\n    vertical-align: top;\r\n    border: 0;\r\n    border-radius: 50%;\r\n}\r\n\r\n.card .card-heading.image .card-heading-header {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.card .card-heading.image .card-heading-header h3 {\r\n    margin: 0;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #262626;\r\n}\r\n\r\n.card .card-heading.image .card-heading-header span {\r\n    font-size: 12px;\r\n    color: #999999;\r\n}\r\n\r\n.card .card-body {\r\n    padding: 0 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.card .card-media {\r\n    padding: 0 20px;\r\n    margin: 0 -14px;\r\n}\r\n\r\n.card .card-media img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.card .card-actions {\r\n    min-height: 30px;\r\n    padding: 0 20px 20px 20px;\r\n    margin: 20px 0 0 0;\r\n}\r\n\r\n.card .card-comments {\r\n    padding: 20px;\r\n    margin: 0;\r\n    background-color: #f8f8f8;\r\n}\r\n\r\n.card .card-comments .comments-collapse-toggle {\r\n    padding: 0;\r\n    margin: 0 20px 12px 20px;\r\n}\r\n\r\n.card .card-comments .comments-collapse-toggle a,\r\n.card .card-comments .comments-collapse-toggle span {\r\n    padding-right: 5px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    color: #999;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.card-comments .media-heading {\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.card.people {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 170px;\r\n    height: 300px;\r\n    padding-top: 0;\r\n    margin-left: 20px;\r\n    overflow: hidden;\r\n    vertical-align: top;\r\n}\r\n\r\n.card.people:first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.card.people .card-top {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: inline-block;\r\n    width: 170px;\r\n    height: 150px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.card.people .card-top.green {\r\n    background-color: #53a93f;\r\n}\r\n\r\n.card.people .card-top.blue {\r\n    background-color: #427fed;\r\n}\r\n\r\n.card.people .card-info {\r\n    position: absolute;\r\n    top: 150px;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 101px;\r\n    overflow: hidden;\r\n    background: #ffffff;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card.people .card-info .title {\r\n    display: block;\r\n    margin: 8px 14px 0 14px;\r\n    overflow: hidden;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    line-height: 18px;\r\n    color: #404040;\r\n}\r\n\r\n.card.people .card-info .desc {\r\n    display: block;\r\n    margin: 8px 14px 0 14px;\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    color: #737373;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.card.people .card-bottom {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n    line-height: 29px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.card.hovercard {\r\n    position: relative;\r\n    padding-top: 0;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    background-color: rgba(214, 224, 226, 0.2);\r\n}\r\n\r\n.card.hovercard .cardheader {\r\n    background: url(\"http://lorempixel.com/850/280/nature/4/\");\r\n    background-size: cover;\r\n    height: 135px;\r\n}\r\n\r\n.card.hovercard .avatar {\r\n    position: relative;\r\n    top: -50px;\r\n    margin-bottom: -50px;\r\n}\r\n\r\n.card.hovercard .avatar img {\r\n    width: 100px;\r\n    height: 100px;\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n    border-radius: 50%;\r\n    border: 5px solid rgba(255,255,255,0.5);\r\n}\r\n\r\n.card.hovercard .info {\r\n    padding: 4px 8px 10px;\r\n}\r\n\r\n.card.hovercard .info .title {\r\n    margin-bottom: 4px;\r\n    font-size: 24px;\r\n    line-height: 1;\r\n    color: #262626;\r\n    vertical-align: middle;\r\n}\r\n\r\n.card.hovercard .info .desc {\r\n    overflow: hidden;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: #737373;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.card.hovercard .bottom {\r\n    padding: 0 20px;\r\n    margin-bottom: 17px;\r\n}\r\n\r\n.btn{ border-radius: 1%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".glyphicon { margin-right:5px; }\r\n.thumbnail\r\n{\r\n    margin-bottom: 20px;\r\n    padding: 0px;\r\n    border-radius: 0px;\r\n}\r\n\r\n.item.list-group-item\r\n{\r\n    float: none;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    margin-bottom: 10px;\r\n}\r\n.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover\r\n{\r\n    background: #428bca;\r\n}\r\n\r\n.item.list-group-item .list-group-image\r\n{\r\n    margin-right: 10px;\r\n}\r\n.item.list-group-item .thumbnail\r\n{\r\n    margin-bottom: 0px;\r\n}\r\n.item.list-group-item .caption\r\n{\r\n    padding: 9px 9px 0px 9px;\r\n}\r\n.item.list-group-item:nth-of-type(odd)\r\n{\r\n    background: #eeeeee;\r\n}\r\n\r\n.item.list-group-item:before, .item.list-group-item:after\r\n{\r\n    display: table;\r\n    content: \" \";\r\n}\r\n\r\n.item.list-group-item img\r\n{\r\n    float: left;\r\n}\r\n.item.list-group-item:after\r\n{\r\n    clear: both;\r\n}\r\n.list-group-item-text\r\n{\r\n    margin: 0 0 11px;\r\n}\r\n.well-sm {\r\n    padding: 9px;\r\n    /* border-radius: 3px; */\r\n    margin-left: -32px;\r\n    width: 90%;\r\n}\r\n.col-lg-4 {\r\n    width: 21.333333%;\r\n}\r\n.col-md-6 {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css);", ""]);

// module
exports.push([module.i, "/* font Awesome http://fontawesome.io*/\r\n/* Animation.css*/\r\n.col-sm-3 {\r\n  width: 33%;\r\n}\r\n.col-item {\r\n  border: 1px solid #E1E1E1;\r\n  background: #FFF;\r\n  margin-bottom:12px;\r\n}\r\n.col-item .options {\r\n  position:absolute;\r\n  top:6px;\r\n  right:22px;\r\n}\r\n.col-item .photo {\r\n  overflow: hidden;\r\n}\r\n.col-item .photo .options {\r\n  display:none;\r\n}\r\n.col-item .photo img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.col-item .options-cart {\r\n  position:absolute;\r\n  left:22px;\r\n  top:6px;\r\n  display:none;\r\n}\r\n.col-item .photo:hover .options,\r\n.col-item .photo:hover .options-cart {\r\n  display:block;\r\n  -webkit-animation: fadeIn .5s ease;\r\n  animation: fadeIn .5s ease;\r\n}\r\n.col-item .options-cart-round {\r\n  position:absolute;\r\n  left:42%;\r\n  top:22%;\r\n  display:none;\r\n}\r\n.col-item .options-cart-round button {\r\n  border-radius: 50%;\r\n  padding:14px 16px;\r\n  \r\n}\r\n.col-item .options-cart-round button .fa {\r\n  font-size:22px;\r\n}\r\n.col-item .photo:hover .options-cart-round {\r\n  display:block;\r\n  -webkit-animation: fadeInDown .5s ease;\r\n  animation: fadeInDown .5s ease;\r\n}\r\n.col-item .info {\r\n  padding: 10px;\r\n  margin-top: 1px;\r\n}\r\n.col-item .price-details {\r\n  width: 100%;\r\n  margin-top: 5px;\r\n}\r\n.col-item .price-details h1 {\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  float:left;\r\n}\r\n.col-item .price-details .details {\r\n  margin-bottom: 0px;\r\n  font-size:12px;\r\n}\r\n.col-item .price-details span {\r\n  float:right;\r\n}\r\n.col-item .price-details .price-new {\r\n  font-size:16px;\r\n}\r\n.col-item .price-details .price-old {\r\n  font-size:18px;\r\n  text-decoration:line-through;\r\n}\r\n.col-item .separator {\r\n  border-top: 1px solid #E1E1E1;\r\n}\r\n\r\n.col-item .clear-left {\r\n  clear: left;\r\n}\r\n.col-item .separator a {\r\n  text-decoration:none;\r\n}\r\n.col-item .separator p {\r\n  margin-bottom: 0;\r\n  margin-top: 6px;\r\n  text-align: center;\r\n}\r\n\r\n.col-item .separator p i {\r\n  margin-right: 5px;\r\n}\r\n.col-item .btn-add {\r\n  width: 60%;\r\n  float: left;\r\n}\r\n.col-item .btn-add a {\r\n  display:inline-block !important;\r\n}\r\n.col-item .btn-add {\r\n  border-right: 1px solid #E1E1E1;\r\n}\r\n.col-item .btn-details {\r\n  width: 40%;\r\n  float: left;\r\n  padding-left: 10px;\r\n}\r\n.col-item .btn-details a {\r\n  display:inline-block !important;\r\n}\r\n.col-item .btn-details a:first-child {\r\n  margin-right:12px;\r\n}\r\n.col-item[_ngcontent-c4] .photo[_ngcontent-c4] img[_ngcontent-c4] {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-height: 180px;\r\n  min-height: 180px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"formBox\">\n\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<h1>User Info</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"inputBox \">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"UserName\" class=\"input\" placeholder=\"Name\" [(ngModel)]=\"UserName\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"inputBox\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"UserEmail\" class=\"input\" placeholder=\"Email\" [(ngModel)]=\"UserEmail\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"inputBox\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"UserMobile\" class=\"input\" placeholder=\"Mobile Number\" [(ngModel)]=\"UserMobile\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<input type=\"submit\" name=\"\" class=\"button\" value=\"Send Message\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\n\t<div class=\"container\" style=\"padding-top: 60px;\">\n\t\t\t<h1 class=\"page-header\">Edit Profile</h1>\n\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- left column -->\n\t\t\t\t\n\t\t\t  <div class=\"col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<form ngNoForm target=\"_http://localhost:4200/myAccount/accountsetting\" action=\"http://localhost:8081/api/UploadUserProfilePhoto/{{UserId}}\" method=\"post\"\n\tenctype=\"multipart/form-data\">\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t  <img [src]=\"Images\" (error)=\"setDefaultPic()\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar\">\n\t\t\t\t  <h6>Upload a different photo...</h6>\n\t\t\t\t\t<!-- <input type=\"file\" class=\"text-center center-block well well-sm\"> -->\n\t\t\t\t\t<!-- <input type=\"file\" id=\"userPhoto\"  required #userPhotos required class=\"text-center center-block well well-sm\"\n\t\t\t\t\t\t name=\"userPhoto\" [(ngModel)]=\"userPhoto\" /> -->\n\t\t\t\t\t\t <input type=\"file\"  \tname=\"userPhoto\" id=\"userPhoto\" (change)=\"changeListner($event)\" placeholder=\"Upload file...\" />\n\t\t\t\t\t\t <!-- <button type=\"button\" (click)=\"upload()\">Upload</button> -->\n\t\t\t\t\t\t <input type=\"submit\" name=\"submit\" value=\"Submit\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t  <!-- edit form column -->\n\t\t\t  <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\n\t\t\t\t<div class=\"alert alert-info alert-dismissable\">\n\t\t\t\t  <a class=\"panel-close close\" data-dismiss=\"alert\">×</a> \n\t\t\t\t  <i class=\"fa fa-coffee\"></i>\n\t\t\t\t  This is an <strong>.alert</strong>. Use this to show important messages to the user.\n\t\t\t\t</div>\n\t\t\t\t<h3>Personal info</h3>\n\t\t\t\t<form class=\"form-horizontal\" role=\"form\" #form=\"ngForm\" (ngSubmit)=\"UpdateUserAccount(form.value)\" novalidate>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-lg-3 control-label\">Your name:</label>\n\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t\t\t<input class=\"form-control\"  type=\"text\" placeholder=\"Name\" name=\"UserName\" [(ngModel)]=\"UserName\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-lg-3 control-label\">Your Email:</label>\n\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t  <input class=\"form-control\" value=\"janesemail@gmail.com\" name=\"UserEmail\" type=\"text\" [(ngModel)]=\"UserEmail\" readonly>\n\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Your Mobile:</label>\n\t\t\t\t\t\t<div class=\"col-lg-8\">\n\t\n\t\t\t\t\t\t  <input class=\"form-control\"  type=\"text\"  placeholder=\"Mobile Number\" name=\"UserMobile\" [(ngModel)]=\"UserMobile\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t  <!-- <div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-lg-3 control-label\">Time Zone:</label>\n\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t  <div class=\"ui-select\">\n\t\t\t\t\t\t<select id=\"user_time_zone\" class=\"form-control\">\n\t\t\t\t\t\t  <option value=\"Hawaii\">(GMT-10:00) Hawaii</option>\n\t\t\t\t\t\t  <option value=\"Alaska\">(GMT-09:00) Alaska</option>\n\t\t\t\t\t\t  <option value=\"Pacific Time (US & Canada)\">(GMT-08:00) Pacific Time (US & Canada)</option>\n\t\t\t\t\t\t  <option value=\"Arizona\">(GMT-07:00) Arizona</option>\n\t\t\t\t\t\t  <option value=\"Mountain Time (US & Canada)\">(GMT-07:00) Mountain Time (US & Canada)</option>\n\t\t\t\t\t\t  <option value=\"Central Time (US & Canada)\" selected=\"selected\">(GMT-06:00) Central Time (US & Canada)</option>\n\t\t\t\t\t\t  <option value=\"Eastern Time (US & Canada)\">(GMT-05:00) Eastern Time (US & Canada)</option>\n\t\t\t\t\t\t  <option value=\"Indiana (East)\">(GMT-05:00) Indiana (East)</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div> -->\n\t\t\t\t\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-md-3 control-label\">Current Password:</label>\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t  <input class=\"form-control\"  type=\"password\" name=\"currentpassword\" placeholder=\"*********\" [(ngModel)]=\"currentpassword\">\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-md-3 control-label\">New password:</label>\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t  <input class=\"form-control\"  type=\"password\" name=\"newpassword\" placeholder=\"*********\" [(ngModel)]=\"newpassword\">\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-md-3 control-label\"></label>\n\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t<!-- <button class=\"btn btn-default\" type=\"submit\"  [disabled]=\"!form.valid\">Register</button> -->\n\t\t\t\t\t  <input class=\"btn btn-primary\" value=\"Save Changes\" type=\"submit\">\n\t\t\t\t\t  <span></span>\n\t\t\t\t\t  <input class=\"btn btn-default\" value=\"Cancel\" type=\"reset\">\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t</form>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </div>"

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"container\">\n\t<table id=\"cart\" class=\"table table-hover table-condensed\" *ngIf=\"cartdata != undefined\">\n    \t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\">Price</th>\n\t\t\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\n\t\t\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n\t\t\t\t\t\t\t<th style=\"width:10%\"></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody *ngFor=\"let items of cartdata ; let i = index\" >\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td data-th=\"Product\" >\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Image}} \" alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\" (click)=\"itemdetail(items.CategoryId,items.AdIdforcart,items.ShopID)\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">{{items.Title}} </h4>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n              </td>\n\n\t\t\t\t\t\t\t<td data-th=\"Price\">{{items.Price }}</td>\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" name=\"quantity\"  [(ngModel)]=\"items.Order_Quantity\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">{{items.Order_Quantity * items.Price}}</td>\n\t\t\t\t\t\t\t<td class=\"actions\" data-th=\"\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-sm\" ><i class=\"fa fa-edit\"></i></button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" (click)=\"popcartitem(i)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t</tbody>\n\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total </strong></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><a href=\"http://localhost:4200\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $1.99 \t{{cartdata}}  \t </strong></td>\n\t\t\t\t\t\t\t<td><a  class=\"btn btn-success btn-block\"  (click)=\"checkout()\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t\t\n\t\t\t\t</table>\n\t\t\t\n\n</div> \n"

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "\n<!-- products -->\n<div class=\"products\">\t \n  <div class=\"container\">\n      <!-- <div style=\"width: 220px; height: 200px\">\n          <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\n        </div> -->\n    <div class=\"col-md-9 product-w3ls-right\">\n      <!-- breadcrumbs --> \n      <ol class=\"breadcrumb breadcrumb1\">\n        <li><a href=\"index.html\">Home</a></li>\n        <li class=\"active\">Products</li>\n      </ol> \n      <div class=\"clearfix\"> </div>\n      <!-- //breadcrumbs -->\n      <div class=\"product-top\">\n        <h4>Fashion Store</h4>\n        <ul> \n          <!-- <li class=\"dropdown head-dpdn\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Filter By<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Low price</a></li> \n              <li><a href=\"#\">High price</a></li>\n              <li><a href=\"#\">Latest</a></li> \n              <li><a href=\"#\">Popular</a></li> \n            </ul> \n          </li> -->\n          <li class=\"dropdown head-dpdn\" >\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Brands<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\"  >\n                <li *ngFor=\"let item of _global.brand  \" (click)=\"filterrecordbybrand(_global.items[0].CategoryID,item.Brand)\"><a >{{item.Brand}}</a></li> \n              <!-- <li><a >Honda</a></li> \n              <li><a href=\"#\">Brand2</a></li>\n              <li><a href=\"#\">Brand3</a></li> \n              <li><a href=\"#\">Brand4</a></li>  -->\n            </ul> \n          </li>\n        </ul>  \n        <div class=\"clearfix\"> </div>\n      </div>\n      <div class=\"products-row\">\n        <div class=\"col-md-3 product-grids\" (click)=\"itemdetail(item.CategoryID,item.AdId,item.Email)\" *ngFor=\"let item of _global.items | paginate: {itemsPerPage: 8, currentPage:page, id: '1'};\"> \n          <div class=\"agile-products\">\n            <div class=\"new-tag\"><h6>{{item.Condition}}<br></h6></div>\n            <a ><img src=\"http://localhost:8081/api/GetMainAdImage/{{item.Images.split(',')[0]}}\" class=\"img-responsive\" alt=\"img\"></a>\n            <div class=\"agile-product-text\">              \n              <h5><a >{{item.Title}}</a></h5> \n              <h6><del></del> {{item.price | currency :'PKR'}}</h6> \n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Leather Jacket\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart pw3ls-cart\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form> \n            </div>\n          </div> \n        </div>\n      \n        <div class=\"clearfix\"> </div>\n      </div>\n      <pagination-controls class=\"pagination\"(pageChange)=\"page = $event\" id=\"1\"\n      maxSize=\"8\"\n      directionLinks=\"true\"\n      autoHide=\"true\">\n</pagination-controls>`\n      <!-- add-products --> \n      <div class=\"w3ls-add-grids w3agile-add-products\">\n        <a href=\"#\"> \n          <h4>TOP 10 TRENDS FOR YOU FLAT <span>20%</span> OFF</h4>\n          <h6>Shop now <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></h6>\n        </a>\n      </div> \n      <!-- //add-products -->\n    </div>\n    <div class=\"col-md-3 rsidebar\" *ngIf=\"_global.items[0].operatingsystem != undefined\">\n  \n      <div class=\"rsidebar-top\">\n        <div class=\"slider-left\">\n          <h4>Filter By Price</h4>            \n          <div class=\"row row1 scroll-pane\" >\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'1000 - 5000',$event)\">1000 - 5000<i></i> </label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'6000-10000',$event)\"><i></i>6000 - 10000 </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'11000-15000',$event)\"><i></i>11000-15000  </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'16000-20000',$event)\"><i></i>16000-20000 </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'21000-25000',$event)\"><i></i>21000-25000 </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'30000-35000',$event)\"><i></i>45000 - 50000  </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'36000-100000',$event)\"><i></i>More</label> \n          </div> \n        </div>\n        \n        <div class=\"sidebar-row\">\n          <h4>Condition</h4>\n          <ul class=\"faq\">\n            <li class=\"item1\"><a ><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n              <ul>\n                <!-- <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'New',$event)\">New</a></li>\t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'Used',$event)\">Used</a></li>\t\t\t\t\t\t\t\t\t\t -->\n                <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'New',$event)\"><i></i>New</label> \n                <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'Used',$event)\"><i></i>Used</label> \t\t\t\t\t\t\n              </ul>\n            </li>\n            <li class=\"item2\"><a >Sim Memory<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n              <ul>\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'SINGLE',$event)\"><i></i>SINGLE</label> \n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'DUAL',$event)\"><i></i>DUAL</label> \t\t\t\t\t\t\n                <!-- <li class=\"subitem1\"><a href=\"#\">Watches</a></li>\t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a href=\"#\">Eyewear</a></li>\t\t\t \t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a href=\"#\">Jewellery</a></li>\t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a href=\"#\">Footwear</a></li>\t\t\t\t\t\t\t\t\t\t -->\n              </ul>\n            </li>\n            <li class=\"item2\"><a >OperatingSystem<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n              <ul>\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(_global.items[0].CategoryID,'Android',$event)\"><i></i>Android</label>\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(_global.items[0].CategoryID,'IOS',$event)\"><i></i>IOS</label>\n        \t\t\t\t\t\t\t\t -\n              </ul>\n            </li>\n         \n          </ul>\n \n        </div>\n   \n        <div class=\"sidebar-row\">\n          <h4>Color</h4>\n          <div class=\"row row1 scroll-pane\">\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(_global.items[0].CategoryID,'White',$event)\"><i></i>White</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(_global.items[0].CategoryID,'Black',$event)\"><i></i>Black</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Gold',$event)\"><i></i>Gold</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Blue',$event)\"><i></i>Blue</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Orange',$event)\"><i></i>Orange</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Brown',$event)\"><i></i> Brown</label> \n          </div>\n        </div>\t\t\t \n      </div>\n      \n  \n   \n   \n \n      <div class=\"related-row\">\n        <h4>YOU MAY ALSO LIKE</h4>\n        <div class=\"galry-like\">  \n          <a href=\"single.html\"><img src=\"/assets/more_assets/images/e1.png\" class=\"img-responsive\" alt=\"img\"></a>             \n          <h4><a href=\"products.html\">Audio speaker</a></h4> \n          <h5>$100</h5>       \n        </div>\n      </div>\n  \n    </div>\n    <!-- _global.items[0].FuelType -->\n    <div class=\"col-md-3 rsidebar\" *ngIf=\"_global.items[0].FuelType != undefined\">\n  \n        <div class=\"rsidebar-top\">\n          <div class=\"slider-left\">\n            <h4>Filter By Price</h4>            \n            <div class=\"row row1 scroll-pane\" >\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'10000-50000',$event)\">10000-50000<i></i> </label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'50000-100000',$event)\"><i></i>50000-100000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'100000-200000',$event)\"><i></i>100000-200000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'200000-300000',$event)\"><i></i>200000-300000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'300000-400000',$event)\"><i></i>300000-400000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'400000 - 500000',$event)\"><i></i>400000 - 500000  </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'500000-1000000',$event)\"><i></i>More</label> \n            </div> \n          </div>\n          \n          <div class=\"sidebar-row\">\n            <h4>Condition</h4>\n            <ul class=\"faq\">\n              <li class=\"item1\"><a ><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n                <ul>\n                  <!-- <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'New',$event)\">New</a></li>\t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'Used',$event)\">Used</a></li>\t\t\t\t\t\t\t\t\t\t -->\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'New',$event)\"><i></i>New</label> \n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'Used',$event)\"><i></i>Used</label> \t\t\t\t\t\t\n                </ul>\n              </li>\n              <li class=\"item2\"><a >FuelType<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n                <ul>\n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'Petrol',$event)\"><i></i>Petrol</label> \n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'Diesel',$event)\"><i></i>Diesel</label> \n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'CNG',$event)\"><i></i>CNG</label> \t\t\t\t\t\t\t\t\t\t\t\t\n                  <!-- <li class=\"subitem1\"><a href=\"#\">Watches</a></li>\t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a href=\"#\">Eyewear</a></li>\t\t\t \t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a href=\"#\">Jewellery</a></li>\t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a href=\"#\">Footwear</a></li>\t\t\t\t\t\t\t\t\t\t -->\n                </ul>\n              </li>\n              <!-- <li class=\"item2\"><a >OperatingSystem<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n                <ul>\n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(searchitems[0].CategoryID,'Android',$event)\"><i></i>Android</label>\n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(searchitems[0].CategoryID,'IOS',$event)\"><i></i>IOS</label>\n                           -\n                </ul>\n              </li> -->\n           \n            </ul>\n   \n          </div>\n     \n          <div class=\"sidebar-row\">\n            <h4>Color</h4>\n            <div class=\"row row1 scroll-pane\">\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(searchitems[0].CategoryID,'White',$event)\"><i></i>White</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(searchitems[0].CategoryID,'Black',$event)\"><i></i>Black</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Gold',$event)\"><i></i>Gold</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Blue',$event)\"><i></i>Blue</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Orange',$event)\"><i></i>Orange</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Brown',$event)\"><i></i> Brown</label> \n            </div>\n          </div>\t\t\t \n        </div>\n        \n    \n     \n     \n   \n        <div class=\"related-row\">\n          <h4>YOU MAY ALSO LIKE</h4>\n          <div class=\"galry-like\">  \n            <a href=\"single.html\"><img src=\"/assets/more_assets/images/e1.png\" class=\"img-responsive\" alt=\"img\"></a>             \n            <h4><a href=\"products.html\">Audio speaker</a></h4> \n            <h5>$100</h5>       \n          </div>\n        </div>\n    \n      </div>\n    <div class=\"clearfix\"> </div>\n    <!-- recommendations -->\n  \n    <div class=\"recommend\">\n      <h3 class=\"w3ls-title\">Our Recommendations </h3> \n       <!-- <script>\n         \n        $(document).ready(function() { \n       \n          $(\"#owl-demo5\").owlCarousel({\n       \n            autoPlay: 3000, //Set AutoPlay to 3 seconds\n         \n            items :4,\n            itemsDesktop : [640,5],\n            itemsDesktopSmall : [414,4],\n            navigation : true\n         \n          });\n          \n        }); \n      </script>  -->\n      <div id=\"owl-demo5\" class=\"owl-carousel\">\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\">\n            <div class=\"new-tag\"><h6>20% <br> Off</h6></div>\n            <a href=\"products1.html\"><img src=\"/assets/more_assets/images/f2.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products1.html\">Women Sandal</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$20</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Women Sandal\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div> \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <a href=\"products.html\"><img src=\"/assets/more_assets/images/e4.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products.html\">Digital Camera</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$80</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Digital Camera\"/> \n                <input type=\"hidden\" name=\"amount\" value=\"100.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div>  \n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>New</h6></div>\n            <a href=\"products4.html\"><img src=\"/assets/more_assets/images/s1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products4.html\">Roller Skates</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$180</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Roller Skates\"/> \n                <input type=\"hidden\" name=\"amount\" value=\"180.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <a href=\"products1.html\"><img src=\"/assets/more_assets/images/f1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products1.html\">T Shirt</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$10</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"T Shirt\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"10.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div>    \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>New</h6></div>\n            <a href=\"products6.html\"><img src=\"/assets/more_assets/images/p1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products6.html\">Coffee Mug</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$14</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Coffee Mug\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"14.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>20% <br> Off</h6></div>\n            <a href=\"products6.html\"><img src=\"/assets/more_assets/images/p2.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products6.html\">Teddy bear</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$20</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Teddy bear\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div> \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <a href=\"products4.html\"><img src=\"/assets/more_assets/images/s2.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products4.html\">Football</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$70</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Football\"/> \n                <input type=\"hidden\" name=\"amount\" value=\"70.00\"/>\n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div> \n        </div> \n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>Sale</h6></div>\n            <a href=\"products3.html\"><img src=\"/assets/more_assets/images/h1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products3.html\">Wall Clock</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$80</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Wall Clock\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"80.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div> \n      </div>    \n    </div>\n    <!-- //recommendations -->\n  </div>\n</div>\n<!--//products--> \n    <!-- footer-top -->\n    <div class=\"w3agile-ftr-top\">\n        <div class=\"container\">\n            <div class=\"ftr-toprow\">\n                <div class=\"col-md-4 ftr-top-grids\">\n                    <div class=\"ftr-top-left\">\n                        <i class=\"fa fa-truck\" aria-hidden=\"true\"></i>\n                    </div> \n                    <div class=\"ftr-top-right\">\n                        <h4>FREE DELIVERY</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>\n                    </div> \n                    <div class=\"clearfix\"> </div>\n                </div> \n                <div class=\"col-md-4 ftr-top-grids\">\n                    <div class=\"ftr-top-left\">\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    </div> \n                    <div class=\"ftr-top-right\">\n                        <h4>CUSTOMER CARE</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>\n                    </div> \n                    <div class=\"clearfix\"> </div>\n                </div>\n                <div class=\"col-md-4 ftr-top-grids\">\n                    <div class=\"ftr-top-left\">\n                        <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n                    </div> \n                    <div class=\"ftr-top-right\">\n                        <h4>GOOD QUALITY</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>\n                    </div>\n                    <div class=\"clearfix\"> </div>\n                </div> \n                <div class=\"clearfix\"> </div>\n            </div>\n        </div>\n    </div>\n  <!-- //footer-top --> \n\n\n   \n\n\n\n\n"

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "<main-header  *ngIf=\"pagesJSON.main_header\"></main-header>\n<!-- <a routerLink=\"/allresult/search\">Search items</a>\n<a routerLink=\"/allresult/autocomplete\">Autocomp</a> -->\n\n<router-outlet ></router-outlet>\n\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer> \n"

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\r\n\r\n  <img src=\"assets/Images/18015857_1334912633268806_1762115301_o.png\" class=\"img-responsive \" alt=\"logo\">\r\n</div>-->\r\n<!--<a routerLink=\"/registraion\">Sign Up</a>\r\n<a routerLink=\"/login\">Sign In</a>-->\r\n\r\n<!--<div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>-->\r\n\r\n\r\n<router-outlet ></router-outlet>"

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = "<p><dsfdf</p>"

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = "<main-header  *ngIf=\"pagesJSON.main_header\"></main-header>\n<!-- <div class=\"container\">\n  <h1>Online Shop Now</h1>\n  <form #form=\"ngForm\" (ngSubmit)=\"createshop(form.value)\" novalidate>\n\n    <div class=\"form-group\">\n      <label><h3>Shop Name</h3></label>\n      <input type=\"text\" #shopnameRef=\"ngModel\" required  class=\"form-control\"\n        name=\"shopname\" [(ngModel)]=\"shopname\">\n      <div *ngIf=\"shopnameRef.errors && (shopnameRef.dirty ||shopnameRef.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"shopnameRef.errors.required\">\n          Please Enter a Shop Name\n        </div>\n       \n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label><h3>NIC</h3></label>\n      <input type=\"text\" #nicRef=\"ngModel\" required  class=\"form-control\" name=\"nic\" [(ngModel)]=\"nic\">\n          <div *ngIf=\"nicRef.errors && (nicRef.dirty ||nicRef.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"nicRef.errors.required\">\n          Please Enter a Password\n        </div>\n      \n       \n      </div>\n\n      \n      <select  name=\"itemcategories\" class=\"form-control\"  #itemcategoriesRef=\"ngModel\" [(ngModel)]=\"itemcategories\">\n       <option value=\"\" selected disabled>Select Category</option>\n        <option  *ngFor=\"let itemCategories of Categories\"    [value]=\"itemCategories.CategoryID\">{{itemCategories.CategoriesName}}</option>\n      </select>\n    </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-warning  btn-block\"><h5>Create Shop</h5></button>\n  </form>\n  \n</div> -->\n<div class=\"clearfix\"></div>\n<div class=\"container\">\n<div id=\"main-content\">\n    \n      <div class=\"main-content\">\n        <div id=\"col-main\" class=\"page-login\">\n    \n          <div class=\"row\">\n    \n            <div class=\"col-sm-6 col-xs-12\">\n              <div class=\"form-wrapper\">\n    \n                <div id=\"customer-login\" class=\"content\">\n                  <h2 class=\"heading\">Online Shop Now</h2>\n                  <p>Create Online Shop</p>\n                \n                  <form #form=\"ngForm\" (ngSubmit)=\"createshop(form.value)\" novalidate>\n                    <input type=\"hidden\" value=\"customer_login\" name=\"form_type\" />\n                    <input type=\"hidden\" name=\"utf8\" value=\"✓\" />\n    \n    \n    \n                    <div class=\"control-wrapper\">\n                      <label for=\"customer_email\">Shop Name\n                        <span class=\"req\">*</span>\n                      </label>\n                      <input  type=\"text\" #shopnameRef=\"ngModel\" required  \n                      name=\"shopname\" [(ngModel)]=\"shopname\" class=\"col-sm-10 col-xs-12\" />\n                      \n                    </div>\n    \n                   \n                    <div class=\"control-wrapper\">\n                      <label for=\"customer_email\">NIC\n                        <span class=\"req\">*</span>\n                      </label>\n                      <input  type=\"text\" #nicRef=\"ngModel\" required  class=\"form-control\" name=\"nic\" [(ngModel)]=\"nic\" class=\"col-sm-10 col-xs-12\" />\n                    </div>\n                 \n\n\n                     <div class=\"control-wrapper\">\n                      <label>Shop Category\n                        <span class=\"req\">*</span>\n                      </label>\n                      <select multiple  name=\"itemcategories\" class=\"form-control\"  #itemcategoriesRef=\"ngModel\" [(ngModel)]=\"itemcategories\">\n                        <option value=\"\" selected disabled>Select Category</option>\n                         <option  *ngFor=\"let itemCategories of Categories\"    [value]=\"itemCategories.CategoryID\">{{itemCategories.CategoriesName}}</option>\n                       </select>\n                    </div>\n                    <div class=\"control-wrapper last\">\n                      <div class=\"action\">\n                        <!-- <a class=\"forgot-pass\" href=\"javascript:;\" onclick=\"showRecoverPasswordForm()\">Forgotten Password?</a> -->\n                        <!-- <a class=\"return-store\" >Return to Home</a> -->\n                      </div>\n                      <button class=\"btn btn-default\" type=\"submit\">Create Shop</button>\n                    </div>\n    \n                  </form>\n    \n                </div>\n    \n                <div id=\"recover-password\" style=\"display: none;\">\n    \n                  <h2 class=\"heading\">Reset Your Password</h2>\n    \n                  <p class=\"note\">We will send you an email to reset your password.</p>\n    \n                  <form method=\"post\" action=\"https://mediacenter-theme.myshopify.com/account/recover\" accept-charset=\"UTF-8\">\n                    <input type=\"hidden\" value=\"recover_customer_password\" name=\"form_type\" />\n                    <input type=\"hidden\" name=\"utf8\" value=\"✓\" />\n    \n    \n    \n    \n    \n                    <div class=\"control-wrapper\">\n                      <label for=\"email\">Email\n                        <span class=\"req\">*</span>\n                      </label>\n                      <input type=\"email\" value=\"\" name=\"email\" id=\"recover-email\" class=\"col-sm-10 col-xs-12\" />\n                    </div>\n    \n                    <div class=\"control-wrapper\">\n                      <button class=\"btn btn-default\" type=\"submit\">Submit</button>\n                      <a class=\"cancel btn btn-default\" href=\"javascript:;\" onclick=\"hideRecoverPasswordForm();\">Cancel</a>\n                    </div>\n    \n                  </form>\n                </div>\n              </div>\n    \n            </div>\n    \n            <div class=\"col-sm-6 col-xs-12\">\n              <div class=\"form-wrapper\">\n                  <div class=\"imagetest\">\n                  <img src=\"assets/Images/logo/12.png\"  class=\"img-responsive\"   alt=\"logo\"> \n               \n                </div>\n              </div>\n            </div> \n    \n          </div>\n    \n        </div>\n      </div>\n    </div>\n    </div>\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer>\n"

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = "        <!-- Begin  Footer Top -->\r\n\r\n        <div class=\"footer-top\">\r\n                        <div class=\"container\">\r\n                      \r\n                          <div class=\"row\">\r\n                      \r\n                            \r\n                            <div id=\"footer-contact\" class=\"col-md-4 col-sm-12 col-xs-12\">\r\n                      \r\n                              <div class=\"footer-logo\">\r\n                                <a href=\"index.html\" title=\"MediaCenter Shopify Theme\" class=\"logo-site\">\r\n                                  \r\n                                  <!-- <svg width=\"233px\" height=\"54px\" viewBox=\"0 0 233 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path fill=\"#ffffff\" d=\" M 0.00 0.00 L 233.00 0.00 L 233.00 54.00 L 0.00 54.00 L 0.00 0.00 Z\"></path>\r\n                      <path class=\"logo-svg\" d=\" M 104.82 6.46 C 107.74 5.13 110.66 3.80 113.58 2.46 C 113.59 18.71 113.59 34.95 113.59 51.20 C 110.65 51.20 107.71 51.20 104.78 51.20 C 104.84 50.67 104.96 49.62 105.02 49.09 C 100.02 53.56 91.66 52.69 87.37 47.67 C 84.80 44.83 83.96 40.97 83.20 37.33 C 75.63 37.37 68.05 37.26 60.47 37.40 C 61.41 39.88 62.49 42.75 65.24 43.71 C 69.03 45.31 73.10 43.58 75.89 40.91 C 77.67 42.73 79.47 44.54 81.22 46.40 C 75.60 52.47 65.66 53.95 58.77 49.23 C 53.06 45.18 51.58 37.52 52.30 30.95 C 52.75 25.29 55.84 19.51 61.29 17.27 C 66.83 15.00 73.85 15.40 78.54 19.37 C 81.58 21.92 82.87 25.85 83.50 29.64 C 84.32 24.24 87.32 18.69 92.71 16.75 C 96.83 15.07 101.64 15.89 104.93 18.89 C 104.77 14.75 104.83 10.60 104.82 6.46 Z\"></path>\r\n                      <path class=\"logo-svg\" d=\" M 118.44 3.44 C 121.37 1.09 126.26 3.21 126.52 6.97 C 127.17 10.89 122.39 14.12 119.00 12.03 C 115.74 10.46 115.39 5.41 118.44 3.44 Z\"></path>\r\n                      <path class=\"logo-svg\" d=\" M 10.22 19.63 C 14.71 14.58 23.51 14.56 27.42 20.34 C 33.58 13.24 48.54 14.42 50.33 24.80 C 51.41 33.54 50.55 42.41 50.82 51.20 C 47.88 51.20 44.94 51.20 42.00 51.20 C 41.92 44.09 42.14 36.97 41.93 29.87 C 41.95 27.41 40.48 24.57 37.76 24.43 C 34.66 23.72 30.88 25.51 30.74 29.01 C 30.35 36.39 30.71 43.80 30.59 51.20 C 27.67 51.20 24.75 51.20 21.82 51.20 C 21.74 44.12 21.98 37.04 21.73 29.96 C 21.79 27.24 19.97 24.22 16.95 24.37 C 13.91 23.84 10.58 25.90 10.49 29.15 C 10.13 36.49 10.47 43.85 10.35 51.20 C 7.43 51.20 4.51 51.20 1.59 51.20 C 1.59 39.69 1.59 28.18 1.59 16.67 C 4.53 16.67 7.47 16.67 10.41 16.67 C 10.36 17.41 10.27 18.89 10.22 19.63 Z\"></path>\r\n                      <path class=\"logo-svg\" d=\" M 129.25 19.84 C 135.49 16.15 143.23 14.75 150.23 16.89 C 154.92 18.35 157.47 23.34 157.42 28.02 C 157.56 35.75 157.42 43.47 157.47 51.20 C 154.57 51.20 151.68 51.20 148.79 51.20 C 148.84 50.65 148.93 49.56 148.98 49.01 C 144.10 52.49 137.26 53.09 132.09 49.91 C 126.05 46.27 125.51 36.43 131.16 32.19 C 136.26 28.22 143.30 28.77 149.13 30.64 C 148.62 28.53 148.91 25.65 146.65 24.49 C 141.77 22.26 136.27 24.40 131.93 26.90 C 131.04 24.55 130.14 22.19 129.25 19.84 Z\"></path>\r\n                      <path class=\"logo-svg\" d=\" M 117.06 16.67 C 119.98 16.67 122.90 16.67 125.82 16.67 C 125.82 28.18 125.82 39.69 125.82 51.20 C 122.90 51.20 119.98 51.20 117.06 51.20 C 117.06 39.69 117.06 28.18 117.06 16.67 Z\"></path>\r\n                      <path fill=\"#3a3a3a\" d=\" M 201.86 17.62 C 202.52 17.30 203.82 16.67 204.48 16.35 C 204.48 18.10 204.48 19.84 204.48 21.59 C 205.23 21.59 206.73 21.60 207.48 21.60 C 207.48 22.17 207.48 23.30 207.48 23.86 C 206.73 23.87 205.22 23.89 204.47 23.91 C 204.49 26.42 204.34 28.95 204.62 31.45 C 205.86 32.02 207.13 32.53 208.42 32.99 C 206.71 34.03 204.25 35.64 202.51 33.72 C 201.29 30.65 202.08 27.15 201.88 23.91 C 201.39 23.89 200.42 23.87 199.94 23.86 C 199.94 23.30 199.94 22.18 199.94 21.62 C 200.43 21.60 201.41 21.57 201.90 21.56 C 201.88 20.24 201.87 18.93 201.86 17.62 Z\"></path>\r\n                      <path fill=\"#3a3a3a\" d=\" M 169.01 34.60 C 161.80 34.48 161.85 21.38 169.03 21.30 C 171.56 20.91 173.24 22.99 174.55 24.80 C 172.38 25.03 170.35 23.99 168.21 24.05 C 165.19 25.78 165.69 32.04 169.72 32.24 C 171.04 30.86 172.68 30.26 174.58 30.81 C 173.29 32.73 171.68 35.03 169.01 34.60 Z\"></path>\r\n                      <path fill=\"#3a3a3a\" d=\" M 176.14 24.15 C 177.71 20.91 182.63 20.34 185.06 22.88 C 186.61 24.47 186.37 26.86 186.72 28.88 C 183.63 28.96 180.54 28.94 177.46 29.07 C 178.33 30.06 178.74 31.71 180.15 32.08 C 182.15 31.99 184.30 31.15 185.94 32.84 C 183.84 33.87 181.50 35.30 179.09 34.28 C 175.09 32.89 174.46 27.52 176.14 24.15 Z\"></path>\r\n                      <path fill=\"#3a3a3a\" d=\" M 188.27 21.67 C 191.44 22.12 195.65 20.04 197.89 23.12 C 199.40 26.61 198.50 30.58 198.71 34.28 C 197.84 34.27 196.97 34.27 196.10 34.26 C 196.04 31.26 196.36 28.21 195.84 25.24 C 195.30 22.95 190.93 23.34 191.03 25.84 C 190.71 28.63 190.93 31.46 190.90 34.27 C 190.25 34.27 188.94 34.27 188.28 34.27 C 188.28 30.07 188.28 25.87 188.27 21.67 Z\"></path>\r\n                      <path fill=\"#3a3a3a\" d=\" M 209.34 24.33 C 210.88 20.80 216.32 20.24 218.67 23.23 C 219.85 24.84 219.70 26.96 220.06 28.84 C 216.93 28.95 213.79 28.96 210.67 29.17 C 211.42 30.17 212.14 31.20 213.03 32.08 C 214.53 32.45 215.99 31.66 217.44 31.37 C 217.81 31.81 218.56 32.68 218.93 33.11 C 216.82 34.02 214.49 35.28 212.18 34.20 C 208.39 32.73 207.86 27.62 209.34 24.33 Z\"></path>\r\n                      <path fill=\"#3a3a3a\" d=\" M 221.57 21.68 C 224.18 22.17 229.35 19.73 229.26 23.99 C 227.69 24.37 225.10 23.31 224.48 25.41 C 223.89 28.32 224.25 31.33 224.17 34.27 C 223.52 34.27 222.23 34.27 221.58 34.27 C 221.58 30.07 221.58 25.88 221.57 21.68 Z\"></path>\r\n                      <path fill=\"#ffffff\" d=\" M 177.47 26.72 C 178.35 25.45 179.09 23.45 180.99 23.60 C 182.85 23.48 183.54 25.46 184.45 26.68 C 182.12 26.79 179.79 26.80 177.47 26.72 Z\"></path>\r\n                      <path fill=\"#ffffff\" d=\" M 210.63 26.63 C 211.70 25.38 212.59 23.21 214.62 23.63 C 216.40 23.58 216.80 25.59 217.66 26.73 C 215.32 26.80 212.97 26.77 210.63 26.63 Z\"></path>\r\n                      <path fill=\"#ffffff\" d=\" M 60.57 29.87 C 61.45 26.41 64.15 23.26 68.04 23.58 C 71.91 23.17 74.23 26.62 75.30 29.84 C 70.39 29.99 65.48 29.97 60.57 29.87 Z\"></path>\r\n                      <path fill=\"#ffffff\" d=\" M 96.52 24.70 C 99.50 23.55 102.54 25.02 104.87 26.85 C 104.80 31.61 104.80 36.38 104.86 41.14 C 102.46 43.09 99.18 44.42 96.17 43.02 C 92.82 41.46 91.99 37.36 91.96 34.01 C 91.89 30.51 92.82 26.06 96.52 24.70 Z\"></path>\r\n                      <path fill=\"#ffffff\" d=\" M 137.58 37.63 C 141.09 35.82 145.16 36.85 148.82 37.59 C 148.82 38.98 148.80 40.38 148.79 41.78 C 145.51 43.89 141.25 45.34 137.54 43.42 C 135.23 42.33 135.28 38.72 137.58 37.63 Z\"></path>\r\n                      <path class=\"logo-svg\" d=\" M 163.30 39.16 C 165.64 38.00 168.47 38.66 171.01 38.49 C 172.96 38.53 176.17 38.23 176.35 40.94 C 176.51 46.79 170.77 51.96 165.05 51.93 C 161.43 51.79 162.41 47.39 162.23 44.97 C 162.49 43.09 161.71 40.56 163.30 39.16 Z\"></path>\r\n                      </svg> -->\r\n                      <img src=\"assets/Images/logo/3logo.png\"  class=\"img-responsive\" alt=\"logo\"> \r\n                                  \r\n                                </a>\r\n                              </div>\r\n                              <p class=\"regular-bold\">Feel free to contact us via phone,email or just send us mail.</p>\r\n                              <p class=\"address\">17 Princess Road, London, Greater London NW1 8JR, UK\r\n                      1-888-8MEDIA (1-888-892-9953)</p>\r\n                      \r\n                              \r\n                              <div id=\"widget-social\">\r\n                        \r\n                        <h3>Get In Touch</h3>\r\n                      \r\n                        <ul class=\"widget-social list-inline\">\r\n                      \r\n                          \r\n                          <li>\r\n                            <a target=\"_blank\" href=\"#\" class=\"social-icon-inner facebook\" title=\"Facebook\">\r\n                              <span class=\"social-icon\">\r\n                                <i class=\"fa fa-facebook\"></i>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          \r\n                      \r\n                          \r\n                          <li>\r\n                            <a target=\"_blank\" href=\"#\" class=\"social-icon-inner twitter\" title=\"Twitter\">\r\n                              <span class=\"social-icon\">\r\n                                <i class=\"fa fa-twitter\"></i>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          \r\n                          \r\n                          \r\n                          <li>\r\n                            <a target=\"_blank\" href=\"#\" class=\"social-icon-inner pinterest\" title=\"Pinterest\">\r\n                              <span class=\"social-icon\">\r\n                                <i class=\"fa fa-pinterest\"></i>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          \r\n                          \r\n                          \r\n                          <li>\r\n                            <a target=\"_blank\" href=\"#\" class=\"social-icon-inner google\" title=\"Google\">\r\n                              <span class=\"social-icon\">\r\n                                <i class=\"fa fa-google-plus\"></i>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          \r\n                      \r\n                          \r\n                          <li>\r\n                            <a target=\"_blank\" href=\"#\" class=\"social-icon-inner instagram\" title=\"Instagram\">\r\n                              <span class=\"social-icon\">\r\n                                <i class=\"fa fa-instagram\"></i>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          \r\n                      \r\n                          \r\n                          <li>\r\n                            <a target=\"_blank\" href=\"#\" class=\"social-icon-inner youtube\" title=\"Youtube\">\r\n                              <span class=\"social-icon\">\r\n                                <i class=\"fa fa-youtube-play\"></i>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                            \r\n                      \r\n                        </ul>\r\n                      \r\n                      </div>\r\n                              \r\n                      \r\n                            </div>\r\n                      \r\n                            \r\n                            <div class=\"col-xs-12 col-md-8\">\r\n                              <div class=\"row\">\r\n                      \r\n                                \r\n                                \r\n                                <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n                      \r\n                                  <div class=\"footer-block\">\r\n                                    \r\n                      \r\n                                    \r\n                                    <h3>Find it fast<span class=\"visible-xs\"></span></h3>\r\n                                    \r\n                      \r\n                                    \r\n                      \r\n                                    <ul class=\"list-links list-unstyled\">\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections/accessories.html\">Accessories</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections/cameras-photography.html\">Cameras &amp; Photography</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections/electronic.html\">Electronic</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections/laptops-computers.html\">Laptops &amp; Computers</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections/smart-phones-tablets.html\">Smart Phones &amp; Tablets</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections/tv-audio.html\">TV &amp; Audio</a>\r\n                                      </li>\r\n                                      \r\n                                    </ul>\r\n                      \r\n                                    \r\n                                  </div>\r\n                      \r\n                                </div>\r\n                                \r\n                      \r\n                                \r\n                                \r\n                                <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n                      \r\n                                  <div class=\"footer-block\">\r\n                                    \r\n                      \r\n                                    \r\n                                    <h3>Information<span class=\"visible-xs\"></span></h3>\r\n                                    \r\n                      \r\n                                    \r\n                      \r\n                                    <ul class=\"list-links list-unstyled\">\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"pages/contact-us.html\">Find a Store</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"index.html\">Home</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"blogs/news.html\">Blog</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"pages/contact-us.html\">Contact Us</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"pages/faqs.html\">FAQs</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections.html\">Collections</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"pages/about-us.html\">About Us</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"pages/about-us.html\">Service</a>\r\n                                      </li>\r\n                                      \r\n                                    </ul>\r\n                      \r\n                                    \r\n                                  </div>\r\n                      \r\n                                </div>\r\n                                \r\n                      \r\n                                \r\n                                \r\n                                <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n                      \r\n                                  <div class=\"footer-block\">\r\n                                    \r\n                      \r\n                                    \r\n                                    <h3>Account<span class=\"visible-xs\"></span></h3>\r\n                                    \r\n                      \r\n                                    \r\n                      \r\n                                    <ul class=\"list-links list-unstyled\">\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"collections.html\">Shop</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"cart.html\">Cart</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"checkout.html\">Checkout</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"account/login.html\">My Account</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"pages/wishlist.html\">My Wishlist</a>\r\n                                      </li>\r\n                                      \r\n                                      <li>\r\n                                        <a href=\"account/login.html\">Order Tracking</a>\r\n                                      </li>\r\n                                      \r\n                                    </ul>\r\n                      \r\n                                    \r\n                                  </div>\r\n                      \r\n                                </div>\r\n                                \r\n                      \r\n                              </div>\r\n                            </div>\r\n                      \r\n                          </div>\r\n                      \r\n                        </div>\r\n                      </div>\r\n                      \r\n                      <!-- End  Footer Top -->"

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n\r\n\t\t\t<a class=\"navbar-brand\" href=\"#\"><img src=\"assets/Images/logo_small.png\" class=\"img-responsive brandImage\" alt=\"logo\"></a>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-earphone\"></span>(+92)-4-437 0900</a></li>\r\n\t\t\t\t<li><a href=\"#\"><span class=\"\tglyphicon glyphicon-send\"></span>Free Shipping</a></li>\r\n\r\n\t\t\t\t<li><a href=\"#\"><span class=\" glyphicon glyphicon-refresh\"></span>Free Returns</a></li>\r\n\r\n\r\n\t\t\t</ul>\r\n\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\r\n\t\t\t\t<li *ngIf=\"user != undefined\"><a routerLink=\"/myAccount\"><img src=\"{{Images}}\" class=\"img-circle\" alt=\"Cinque Terre\" width=\"20\" height=\"20\"> {{user}}</a></li>\r\n\t\t\t\t<li><a routerLink=\"/posting\"><span class=\"glyphicon glyphicon-upload\"></span> Submit an Ad</a></li>\r\n\t\t\t\t<li *ngIf=\"user == undefined\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-user\"></span> Your Account</a></li>\r\n\t\t\t\t<li *ngIf=\"isvendor == undefined || isvendor == 0   \"><a routerLink=\"/createshop\"><span class=\"glyphicon glyphicon-shopping-cart\"></span>Shop Now</a></li>\r\n\t\t\t\r\n\t\t\t\t<ul id=\"login-dp\" class=\"dropdown-menu\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tLogin via\r\n\t\t\t\t\t\t\t\t<div class=\"social-buttons\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"SignUpbygoogle('google')\" class=\"btn btn-block  btn-danger\">Google</button>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\tor\r\n\t\t\t\t\t\t\t\t<form class=\"form\" role=\"form\" method=\"post\" action=\"login\" accept-charset=\"UTF-8\" id=\"login-nav\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Email address\" required>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\" required>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"help-block text-right\"><a href=\"\">Forget the password ?</a></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t <input type=\"checkbox\"> keep me logged-in\r\n\t\t\t\t\t\t\t\t\t\t\t </label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"bottom text-center\">\r\n\t\t\t\t\t\t\t\tNew here ? <a href=\"#\"><b>Join Us</b></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav> \r\n\r\n\t\t\t\t -->\r\n\r\n<div id=\"style-panel\" class=\"visible-lg\">\r\n\r\n\t<div class=\"config-option\">\r\n\t\t<div class=\"style-toggle\">\r\n\t\t\t<i class=\"fa fa-cog\"></i>\r\n\t\t</div>\r\n\t\t<div class=\"style-content\">\r\n\r\n\t\t\t<div class=\"sc-content\">\r\n\t\t\t\t<a href=\"http://themeforest.net/item/electronics-store-responsive-shopify-theme-mediacenter/14445203?ref=arenatheme\" class=\"btn\">Download Now!</a>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"sc-content\">\r\n\t\t\t\t<div class=\"sc-title\">Layout Mode</div>\r\n\t\t\t\t<div class=\"layout-control\">\r\n\t\t\t\t\t<a class=\"layout-input-item update-layout wide-layout selected\" data-rel=\"wide\" title=\"Wide\" href=\"index.html\">Wide</a>\r\n\t\t\t\t\t<a class=\"layout-input-item update-layout boxed-layout\" data-rel=\"boxed\" title=\"Boxed\" href=\"index.html\">Boxed</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"sc-content\">\r\n\t\t\t\t<div class=\"sc-title\">Header Styles</div>\r\n\t\t\t\t<div class=\"layout-control\">\r\n\t\t\t\t\t<span class=\"selected\">Header 1</span>\r\n\t\t\t\t\t<a href=\"http://mediacenter-theme-2.myshopify.com/\">Header 2</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"sc-content\">\r\n\t\t\t\t<div class=\"sc-title\">Colors</div>\r\n\t\t\t\t<ul class=\"list-inline\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class=\"changecolor green-text\" href=\"#\" title=\"Green color\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class=\"changecolor blue-text\" href=\"#\" title=\"Blue color\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class=\"changecolor red-text\" href=\"#\" title=\"Red color\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class=\"changecolor orange-text\" href=\"#\" title=\"Orange color\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class=\"changecolor navy-text\" href=\"#\" title=\"Navy color\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a class=\"changecolor dark-green-text\" href=\"#\" title=\"Darkgreen color\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n<header class=\"header-content\" >\r\n\t<!-- Begin Top Bar Mobile -->\r\n\r\n\t<div class=\"top-bar-mobile visible-xs\">\r\n\t\t<ul class=\"list-inline\">\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"index.html\" title=\"MediaCenter Shopify Theme\">\r\n\t\t\t\t\t<i class=\"fa fa-home\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\r\n\r\n\t\t\t<li class=\"wishlist-holder\">\r\n\t\t\t\t<a href=\"pages/wishlist.html\" data-pwl=\"/pages/wishlist\" title=\"Wishlist\">\r\n\t\t\t\t\t<i class=\"fa fa-heart\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"account/login.html\" title=\"Login\">\r\n\t\t\t\t\t<i class=\"fa fa-user\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<!-- End Top Bar Mobile -->\r\n\r\n\r\n\t<!-- Begin Top Bar -->\r\n\r\n\t<div class=\"top-bar hidden-xs\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\r\n\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 top-bar-left\">\r\n\r\n\t\t\t\t\t<ul class=\"top-bar-menu\">\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t\t<a href=\"index.html\">\r\n\t\t\t\t\t\t\t\t<span>Home</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li class=\"\">\r\n\t\t\t\t\t\t\t<a href=\"collections/all.html\">\r\n\t\t\t\t\t\t\t\t<span>Shop</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li class=\"\">\r\n\t\t\t\t\t\t\t<a href=\"blogs/news.html\">\r\n\t\t\t\t\t\t\t\t<span>Blog</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li class=\"\">\r\n\t\t\t\t\t\t\t<a href=\"pages/contact-us.html\">\r\n\t\t\t\t\t\t\t\t<span>Contact</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<li class=\"\">\r\n\t\t\t\t\t\t\t<a href=\"pages/about-us.html\">\r\n\t\t\t\t\t\t\t\t<span>Page</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 top-bar-right\">\r\n\t\t\t\t\t<ul class=\"list-inline\">\r\n\r\n\r\n\t\t\t\t\t\t<li *ngIf=\"user == undefined\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/login\" id=\"customer_login_link\" title=\"Login\">\r\n\t\t\t\t\t\t\t\t<span>Login</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li *ngIf=\"user == undefined\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/registraion\" id=\"customer_register_link\">\r\n\t\t\t\t\t\t\t\t<span>Register</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<!-- <li class=\"currency dropdown-parent uppercase currency-block\">\r\n\t\t\t\t\t\t\t<a class=\"currency_wrapper dropdown-toggle\" href=\"javascript:;\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<span class=\"currency_code\"><i class=\"flag-usd\"></i>USD</span>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\r\n\t\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t<li *ngIf=\"user != undefined\" class=\"currency dropdown-parent uppercase currency-block\">\r\n\t\t\t\t\t\t\t<a class=\"currency_wrapper dropdown-toggle\" href=\"javascript:;\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{Images}}\" class=\"img-circle\" alt=\" \" width=\"30px\" height=\"30px\">\r\n\t\t\t\t\t\t\t\t<span class=\"currency_code\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"flag-usd\"></i> {{user}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class=\"currencies dropdown-menu text-left\">\r\n\r\n\r\n\t\t\t\t\t\t\t\t<li class=\"currency-USD \">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" routerLink=\"/myAccount\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-cog\"></i>My Account</a>\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" value=\"USD\" />\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t<li class=\"currency-EUR\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-picture\"></i>Profile Picture</a>\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" value=\"EUR\" />\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t<li class=\"currency-GBP\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"logout()\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-log-out\"></i>Sign Out</a>\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" value=\"GBP\" />\r\n\t\t\t\t\t\t\t\t\t<!-- <span class=\"glyphicon glyphicon-log-out\"></span> -->\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\t\t\t\t\t\t\t</ul>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a routerLink=\"/posting\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-upload\">\r\n\t\t\t\t\t\t\t\t</span> Submit an Ad\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li *ngIf=\"isvendor == undefined || isvendor == 0   \">\r\n\t\t\t\t\t\t\t<a routerLink=\"/createshop\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n\t\t\t\t\t\t\t\tCreate Shop</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- End Top Bar -->\r\n\r\n\r\n\t<!-- Begin Main Header -->\r\n\r\n\t<div class=\"header-middle\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<!-- Begin Logo -->\r\n\r\n\t\t\t\t<div class=\"visible-xs\">\r\n\t\t\t\t\t<div class=\"mobile-version col-xs-12\">\r\n\t\t\t\t\t\t<a href=\"index.html\" title=\"MediaCenter Shopify Theme\">\r\n\r\n\t\t\t\t\t\t\t<svg width=\"233px\" height=\"54px\" viewBox=\"0 0 233 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path fill=\"#ffffff\" d=\" M 0.00 0.00 L 233.00 0.00 L 233.00 54.00 L 0.00 54.00 L 0.00 0.00 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path class=\"logo-svg\" d=\" M 104.82 6.46 C 107.74 5.13 110.66 3.80 113.58 2.46 C 113.59 18.71 113.59 34.95 113.59 51.20 C 110.65 51.20 107.71 51.20 104.78 51.20 C 104.84 50.67 104.96 49.62 105.02 49.09 C 100.02 53.56 91.66 52.69 87.37 47.67 C 84.80 44.83 83.96 40.97 83.20 37.33 C 75.63 37.37 68.05 37.26 60.47 37.40 C 61.41 39.88 62.49 42.75 65.24 43.71 C 69.03 45.31 73.10 43.58 75.89 40.91 C 77.67 42.73 79.47 44.54 81.22 46.40 C 75.60 52.47 65.66 53.95 58.77 49.23 C 53.06 45.18 51.58 37.52 52.30 30.95 C 52.75 25.29 55.84 19.51 61.29 17.27 C 66.83 15.00 73.85 15.40 78.54 19.37 C 81.58 21.92 82.87 25.85 83.50 29.64 C 84.32 24.24 87.32 18.69 92.71 16.75 C 96.83 15.07 101.64 15.89 104.93 18.89 C 104.77 14.75 104.83 10.60 104.82 6.46 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path class=\"logo-svg\" d=\" M 118.44 3.44 C 121.37 1.09 126.26 3.21 126.52 6.97 C 127.17 10.89 122.39 14.12 119.00 12.03 C 115.74 10.46 115.39 5.41 118.44 3.44 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path class=\"logo-svg\" d=\" M 10.22 19.63 C 14.71 14.58 23.51 14.56 27.42 20.34 C 33.58 13.24 48.54 14.42 50.33 24.80 C 51.41 33.54 50.55 42.41 50.82 51.20 C 47.88 51.20 44.94 51.20 42.00 51.20 C 41.92 44.09 42.14 36.97 41.93 29.87 C 41.95 27.41 40.48 24.57 37.76 24.43 C 34.66 23.72 30.88 25.51 30.74 29.01 C 30.35 36.39 30.71 43.80 30.59 51.20 C 27.67 51.20 24.75 51.20 21.82 51.20 C 21.74 44.12 21.98 37.04 21.73 29.96 C 21.79 27.24 19.97 24.22 16.95 24.37 C 13.91 23.84 10.58 25.90 10.49 29.15 C 10.13 36.49 10.47 43.85 10.35 51.20 C 7.43 51.20 4.51 51.20 1.59 51.20 C 1.59 39.69 1.59 28.18 1.59 16.67 C 4.53 16.67 7.47 16.67 10.41 16.67 C 10.36 17.41 10.27 18.89 10.22 19.63 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path class=\"logo-svg\" d=\" M 129.25 19.84 C 135.49 16.15 143.23 14.75 150.23 16.89 C 154.92 18.35 157.47 23.34 157.42 28.02 C 157.56 35.75 157.42 43.47 157.47 51.20 C 154.57 51.20 151.68 51.20 148.79 51.20 C 148.84 50.65 148.93 49.56 148.98 49.01 C 144.10 52.49 137.26 53.09 132.09 49.91 C 126.05 46.27 125.51 36.43 131.16 32.19 C 136.26 28.22 143.30 28.77 149.13 30.64 C 148.62 28.53 148.91 25.65 146.65 24.49 C 141.77 22.26 136.27 24.40 131.93 26.90 C 131.04 24.55 130.14 22.19 129.25 19.84 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path class=\"logo-svg\" d=\" M 117.06 16.67 C 119.98 16.67 122.90 16.67 125.82 16.67 C 125.82 28.18 125.82 39.69 125.82 51.20 C 122.90 51.20 119.98 51.20 117.06 51.20 C 117.06 39.69 117.06 28.18 117.06 16.67 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#3a3a3a\" d=\" M 201.86 17.62 C 202.52 17.30 203.82 16.67 204.48 16.35 C 204.48 18.10 204.48 19.84 204.48 21.59 C 205.23 21.59 206.73 21.60 207.48 21.60 C 207.48 22.17 207.48 23.30 207.48 23.86 C 206.73 23.87 205.22 23.89 204.47 23.91 C 204.49 26.42 204.34 28.95 204.62 31.45 C 205.86 32.02 207.13 32.53 208.42 32.99 C 206.71 34.03 204.25 35.64 202.51 33.72 C 201.29 30.65 202.08 27.15 201.88 23.91 C 201.39 23.89 200.42 23.87 199.94 23.86 C 199.94 23.30 199.94 22.18 199.94 21.62 C 200.43 21.60 201.41 21.57 201.90 21.56 C 201.88 20.24 201.87 18.93 201.86 17.62 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#3a3a3a\" d=\" M 169.01 34.60 C 161.80 34.48 161.85 21.38 169.03 21.30 C 171.56 20.91 173.24 22.99 174.55 24.80 C 172.38 25.03 170.35 23.99 168.21 24.05 C 165.19 25.78 165.69 32.04 169.72 32.24 C 171.04 30.86 172.68 30.26 174.58 30.81 C 173.29 32.73 171.68 35.03 169.01 34.60 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#3a3a3a\" d=\" M 176.14 24.15 C 177.71 20.91 182.63 20.34 185.06 22.88 C 186.61 24.47 186.37 26.86 186.72 28.88 C 183.63 28.96 180.54 28.94 177.46 29.07 C 178.33 30.06 178.74 31.71 180.15 32.08 C 182.15 31.99 184.30 31.15 185.94 32.84 C 183.84 33.87 181.50 35.30 179.09 34.28 C 175.09 32.89 174.46 27.52 176.14 24.15 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#3a3a3a\" d=\" M 188.27 21.67 C 191.44 22.12 195.65 20.04 197.89 23.12 C 199.40 26.61 198.50 30.58 198.71 34.28 C 197.84 34.27 196.97 34.27 196.10 34.26 C 196.04 31.26 196.36 28.21 195.84 25.24 C 195.30 22.95 190.93 23.34 191.03 25.84 C 190.71 28.63 190.93 31.46 190.90 34.27 C 190.25 34.27 188.94 34.27 188.28 34.27 C 188.28 30.07 188.28 25.87 188.27 21.67 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#3a3a3a\" d=\" M 209.34 24.33 C 210.88 20.80 216.32 20.24 218.67 23.23 C 219.85 24.84 219.70 26.96 220.06 28.84 C 216.93 28.95 213.79 28.96 210.67 29.17 C 211.42 30.17 212.14 31.20 213.03 32.08 C 214.53 32.45 215.99 31.66 217.44 31.37 C 217.81 31.81 218.56 32.68 218.93 33.11 C 216.82 34.02 214.49 35.28 212.18 34.20 C 208.39 32.73 207.86 27.62 209.34 24.33 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#3a3a3a\" d=\" M 221.57 21.68 C 224.18 22.17 229.35 19.73 229.26 23.99 C 227.69 24.37 225.10 23.31 224.48 25.41 C 223.89 28.32 224.25 31.33 224.17 34.27 C 223.52 34.27 222.23 34.27 221.58 34.27 C 221.58 30.07 221.58 25.88 221.57 21.68 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#ffffff\" d=\" M 177.47 26.72 C 178.35 25.45 179.09 23.45 180.99 23.60 C 182.85 23.48 183.54 25.46 184.45 26.68 C 182.12 26.79 179.79 26.80 177.47 26.72 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#ffffff\" d=\" M 210.63 26.63 C 211.70 25.38 212.59 23.21 214.62 23.63 C 216.40 23.58 216.80 25.59 217.66 26.73 C 215.32 26.80 212.97 26.77 210.63 26.63 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#ffffff\" d=\" M 60.57 29.87 C 61.45 26.41 64.15 23.26 68.04 23.58 C 71.91 23.17 74.23 26.62 75.30 29.84 C 70.39 29.99 65.48 29.97 60.57 29.87 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#ffffff\" d=\" M 96.52 24.70 C 99.50 23.55 102.54 25.02 104.87 26.85 C 104.80 31.61 104.80 36.38 104.86 41.14 C 102.46 43.09 99.18 44.42 96.17 43.02 C 92.82 41.46 91.99 37.36 91.96 34.01 C 91.89 30.51 92.82 26.06 96.52 24.70 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path fill=\"#ffffff\" d=\" M 137.58 37.63 C 141.09 35.82 145.16 36.85 148.82 37.59 C 148.82 38.98 148.80 40.38 148.79 41.78 C 145.51 43.89 141.25 45.34 137.54 43.42 C 135.23 42.33 135.28 38.72 137.58 37.63 Z\"></path>\r\n\t\t\t\t\t\t\t\t<path class=\"logo-svg\" d=\" M 163.30 39.16 C 165.64 38.00 168.47 38.66 171.01 38.49 C 172.96 38.53 176.17 38.23 176.35 40.94 C 176.51 46.79 170.77 51.96 165.05 51.93 C 161.43 51.79 162.41 47.39 162.23 44.97 C 162.49 43.09 161.71 40.56 163.30 39.16 Z\"></path>\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"hidden-xs\">\r\n\t\t\t\t\t<div class=\"header-logo col-md-3\">\r\n\t\t\t\t\t\t<a href=\"index.html\" title=\"Shop O Mania\" class=\"logo-site\">\r\n\r\n\t\t\t\t\t\t\t<img src=\"assets/Images/logo/3logo.png\" class=\"img-responsive\" alt=\"logo\">\r\n\r\n\t\t\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t\t\t\t\t\t<svg viewBox=\"0 0 1200 800\">\r\n\t\t\t\t\t\t\t\t\t<symbol id=\"s-text\">\r\n\t\t\t\t\t\t\t\t\t\t<text text-anchor=\"middle\" x=\"50%\" y=\"80%\">SHOP O MANIA </text>\r\n\t\t\t\t\t\t\t\t\t</symbol>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<g class = \"g-ants\">\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\r\n\t\t\t\t\t\t\t\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\r\n\t\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<!-- \t\t\t\t\t\t\r\n\t\t\t\t\t\t<svg width=\"233px\" height=\"54px\" viewBox=\"0 0 233 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t<path fill=\"#ffffff\" d=\" M 0.00 0.00 L 233.00 0.00 L 233.00 54.00 L 0.00 54.00 L 0.00 0.00 Z\"></path>\r\n\t\t\t<path class=\"logo-svg\" d=\" M 104.82 6.46 C 107.74 5.13 110.66 3.80 113.58 2.46 C 113.59 18.71 113.59 34.95 113.59 51.20 C 110.65 51.20 107.71 51.20 104.78 51.20 C 104.84 50.67 104.96 49.62 105.02 49.09 C 100.02 53.56 91.66 52.69 87.37 47.67 C 84.80 44.83 83.96 40.97 83.20 37.33 C 75.63 37.37 68.05 37.26 60.47 37.40 C 61.41 39.88 62.49 42.75 65.24 43.71 C 69.03 45.31 73.10 43.58 75.89 40.91 C 77.67 42.73 79.47 44.54 81.22 46.40 C 75.60 52.47 65.66 53.95 58.77 49.23 C 53.06 45.18 51.58 37.52 52.30 30.95 C 52.75 25.29 55.84 19.51 61.29 17.27 C 66.83 15.00 73.85 15.40 78.54 19.37 C 81.58 21.92 82.87 25.85 83.50 29.64 C 84.32 24.24 87.32 18.69 92.71 16.75 C 96.83 15.07 101.64 15.89 104.93 18.89 C 104.77 14.75 104.83 10.60 104.82 6.46 Z\"></path>\r\n\t\t\t<path class=\"logo-svg\" d=\" M 118.44 3.44 C 121.37 1.09 126.26 3.21 126.52 6.97 C 127.17 10.89 122.39 14.12 119.00 12.03 C 115.74 10.46 115.39 5.41 118.44 3.44 Z\"></path>\r\n\t\t\t<path class=\"logo-svg\" d=\" M 10.22 19.63 C 14.71 14.58 23.51 14.56 27.42 20.34 C 33.58 13.24 48.54 14.42 50.33 24.80 C 51.41 33.54 50.55 42.41 50.82 51.20 C 47.88 51.20 44.94 51.20 42.00 51.20 C 41.92 44.09 42.14 36.97 41.93 29.87 C 41.95 27.41 40.48 24.57 37.76 24.43 C 34.66 23.72 30.88 25.51 30.74 29.01 C 30.35 36.39 30.71 43.80 30.59 51.20 C 27.67 51.20 24.75 51.20 21.82 51.20 C 21.74 44.12 21.98 37.04 21.73 29.96 C 21.79 27.24 19.97 24.22 16.95 24.37 C 13.91 23.84 10.58 25.90 10.49 29.15 C 10.13 36.49 10.47 43.85 10.35 51.20 C 7.43 51.20 4.51 51.20 1.59 51.20 C 1.59 39.69 1.59 28.18 1.59 16.67 C 4.53 16.67 7.47 16.67 10.41 16.67 C 10.36 17.41 10.27 18.89 10.22 19.63 Z\"></path>\r\n\t\t\t<path class=\"logo-svg\" d=\" M 129.25 19.84 C 135.49 16.15 143.23 14.75 150.23 16.89 C 154.92 18.35 157.47 23.34 157.42 28.02 C 157.56 35.75 157.42 43.47 157.47 51.20 C 154.57 51.20 151.68 51.20 148.79 51.20 C 148.84 50.65 148.93 49.56 148.98 49.01 C 144.10 52.49 137.26 53.09 132.09 49.91 C 126.05 46.27 125.51 36.43 131.16 32.19 C 136.26 28.22 143.30 28.77 149.13 30.64 C 148.62 28.53 148.91 25.65 146.65 24.49 C 141.77 22.26 136.27 24.40 131.93 26.90 C 131.04 24.55 130.14 22.19 129.25 19.84 Z\"></path>\r\n\t\t\t<path class=\"logo-svg\" d=\" M 117.06 16.67 C 119.98 16.67 122.90 16.67 125.82 16.67 C 125.82 28.18 125.82 39.69 125.82 51.20 C 122.90 51.20 119.98 51.20 117.06 51.20 C 117.06 39.69 117.06 28.18 117.06 16.67 Z\"></path>\r\n\t\t\t<path fill=\"#3a3a3a\" d=\" M 201.86 17.62 C 202.52 17.30 203.82 16.67 204.48 16.35 C 204.48 18.10 204.48 19.84 204.48 21.59 C 205.23 21.59 206.73 21.60 207.48 21.60 C 207.48 22.17 207.48 23.30 207.48 23.86 C 206.73 23.87 205.22 23.89 204.47 23.91 C 204.49 26.42 204.34 28.95 204.62 31.45 C 205.86 32.02 207.13 32.53 208.42 32.99 C 206.71 34.03 204.25 35.64 202.51 33.72 C 201.29 30.65 202.08 27.15 201.88 23.91 C 201.39 23.89 200.42 23.87 199.94 23.86 C 199.94 23.30 199.94 22.18 199.94 21.62 C 200.43 21.60 201.41 21.57 201.90 21.56 C 201.88 20.24 201.87 18.93 201.86 17.62 Z\"></path>\r\n\t\t\t<path fill=\"#3a3a3a\" d=\" M 169.01 34.60 C 161.80 34.48 161.85 21.38 169.03 21.30 C 171.56 20.91 173.24 22.99 174.55 24.80 C 172.38 25.03 170.35 23.99 168.21 24.05 C 165.19 25.78 165.69 32.04 169.72 32.24 C 171.04 30.86 172.68 30.26 174.58 30.81 C 173.29 32.73 171.68 35.03 169.01 34.60 Z\"></path>\r\n\t\t\t<path fill=\"#3a3a3a\" d=\" M 176.14 24.15 C 177.71 20.91 182.63 20.34 185.06 22.88 C 186.61 24.47 186.37 26.86 186.72 28.88 C 183.63 28.96 180.54 28.94 177.46 29.07 C 178.33 30.06 178.74 31.71 180.15 32.08 C 182.15 31.99 184.30 31.15 185.94 32.84 C 183.84 33.87 181.50 35.30 179.09 34.28 C 175.09 32.89 174.46 27.52 176.14 24.15 Z\"></path>\r\n\t\t\t<path fill=\"#3a3a3a\" d=\" M 188.27 21.67 C 191.44 22.12 195.65 20.04 197.89 23.12 C 199.40 26.61 198.50 30.58 198.71 34.28 C 197.84 34.27 196.97 34.27 196.10 34.26 C 196.04 31.26 196.36 28.21 195.84 25.24 C 195.30 22.95 190.93 23.34 191.03 25.84 C 190.71 28.63 190.93 31.46 190.90 34.27 C 190.25 34.27 188.94 34.27 188.28 34.27 C 188.28 30.07 188.28 25.87 188.27 21.67 Z\"></path>\r\n\t\t\t<path fill=\"#3a3a3a\" d=\" M 209.34 24.33 C 210.88 20.80 216.32 20.24 218.67 23.23 C 219.85 24.84 219.70 26.96 220.06 28.84 C 216.93 28.95 213.79 28.96 210.67 29.17 C 211.42 30.17 212.14 31.20 213.03 32.08 C 214.53 32.45 215.99 31.66 217.44 31.37 C 217.81 31.81 218.56 32.68 218.93 33.11 C 216.82 34.02 214.49 35.28 212.18 34.20 C 208.39 32.73 207.86 27.62 209.34 24.33 Z\"></path>\r\n\t\t\t<path fill=\"#3a3a3a\" d=\" M 221.57 21.68 C 224.18 22.17 229.35 19.73 229.26 23.99 C 227.69 24.37 225.10 23.31 224.48 25.41 C 223.89 28.32 224.25 31.33 224.17 34.27 C 223.52 34.27 222.23 34.27 221.58 34.27 C 221.58 30.07 221.58 25.88 221.57 21.68 Z\"></path>\r\n\t\t\t<path fill=\"#ffffff\" d=\" M 177.47 26.72 C 178.35 25.45 179.09 23.45 180.99 23.60 C 182.85 23.48 183.54 25.46 184.45 26.68 C 182.12 26.79 179.79 26.80 177.47 26.72 Z\"></path>\r\n\t\t\t<path fill=\"#ffffff\" d=\" M 210.63 26.63 C 211.70 25.38 212.59 23.21 214.62 23.63 C 216.40 23.58 216.80 25.59 217.66 26.73 C 215.32 26.80 212.97 26.77 210.63 26.63 Z\"></path>\r\n\t\t\t<path fill=\"#ffffff\" d=\" M 60.57 29.87 C 61.45 26.41 64.15 23.26 68.04 23.58 C 71.91 23.17 74.23 26.62 75.30 29.84 C 70.39 29.99 65.48 29.97 60.57 29.87 Z\"></path>\r\n\t\t\t<path fill=\"#ffffff\" d=\" M 96.52 24.70 C 99.50 23.55 102.54 25.02 104.87 26.85 C 104.80 31.61 104.80 36.38 104.86 41.14 C 102.46 43.09 99.18 44.42 96.17 43.02 C 92.82 41.46 91.99 37.36 91.96 34.01 C 91.89 30.51 92.82 26.06 96.52 24.70 Z\"></path>\r\n\t\t\t<path fill=\"#ffffff\" d=\" M 137.58 37.63 C 141.09 35.82 145.16 36.85 148.82 37.59 C 148.82 38.98 148.80 40.38 148.79 41.78 C 145.51 43.89 141.25 45.34 137.54 43.42 C 135.23 42.33 135.28 38.72 137.58 37.63 Z\"></path>\r\n\t\t\t<path class=\"logo-svg\" d=\" M 163.30 39.16 C 165.64 38.00 168.47 38.66 171.01 38.49 C 172.96 38.53 176.17 38.23 176.35 40.94 C 176.51 46.79 170.77 51.96 165.05 51.93 C 161.43 51.79 162.41 47.39 162.23 44.97 C 162.49 43.09 161.71 40.56 163.30 39.16 Z\"></path>\r\n\t\t\t</svg> -->\r\n\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- End Logo -->\r\n\r\n\r\n\t\t\t\t<!-- Begin Block Cart -->\r\n\r\n\t\t\t\t<div class=\"col-xs-12 col-md-3 top-cart-row col-md-push-6\">\r\n\t\t\t\t\t<div class=\"top-cart-row-container\">\r\n\r\n\t\t\t\t\t\t<div class=\"navbar navbar-responsive-menu visible-xs visible-sm\">\r\n\t\t\t\t\t\t\t<div class=\"btn-navbar responsive-menu\" data-toggle=\"offcanvas\">\r\n\t\t\t\t\t\t\t\t<span class=\"bar\"></span>\r\n\t\t\t\t\t\t\t\t<span class=\"bar\"></span>\r\n\t\t\t\t\t\t\t\t<span class=\"bar\"></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"contact-row-mobile visible-xs\">\r\n\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\r\n\t\t\t\t\t\t\t\t<li class=\"phone\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone main-color\"></i> (+800) 123 456 7890\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<li class=\"email\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope main-color\"></i> shopomania@email.com\r\n\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"wishlist-checkout-holder hidden-xs\">\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"wishlist-holder\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"gotowishlist()\" title=\"Wishlist\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\r\n\t\t\t\t\t\t\t\t\t<span>Wishlist</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"checkout-holder\">\r\n\t\t\t\t\t\t\t\t<a href=\"checkout.html\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\"></i>\r\n\t\t\t\t\t\t\t\t\t<span>Checkout</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"top-cart-holder\">\r\n\t\t\t\t\t\t\t<div class=\"cart-target\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"basket dropdown-toggle dropdown-link\" title=\"cart\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"basket-item-count\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"cart-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"number\">0</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../cdn.shopify.com/s/files/1/1067/5616/t/5/assets/icon-cart586b.png?12559977971113800581\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"total-price-basket\" (click)=\"gotocart()\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"lbl\">Your Cart</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"ajax-total main-color\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"cart-dd dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t<div id=\"cart-info\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"cart-content\" class=\"cart-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"loading\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- End Block Cart -->\r\n\r\n\r\n\t\t\t\t<!-- Begin Block Search -->\r\n\r\n\r\n\t\t\t\t<div class=\"col-xs-12 col-md-6 top-search-holder col-md-pull-3\">\r\n\r\n\r\n\t\t\t\t\t<div class=\"contact-row hidden-xs\">\r\n\t\t\t\t\t\t<ul class=\"list-inline\">\r\n\r\n\t\t\t\t\t\t\t<li class=\"phone\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-phone main-color\"></i> (+800) 123 456 7890\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\r\n\t\t\t\t\t\t\t<li class=\"email\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope main-color\"></i> shopomania@email.com\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"searchbox ajax-search-box\">\r\n\t\t\t\t\t\t<form id=\"search\" class=\"navbar-form search\" action=\"https://mediacenter-theme.myshopify.com/search\" method=\"get\">\r\n\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"type\" value=\"product\" />\r\n\t\t\t\t\t\t\t<input id=\"input-ajax-search\" type=\"text\" name=\"q\"  list=\"jdata\"   [(ngModel)]=\"query\" (keyup.enter)=\"searchitems(item.value);\" #item class=\"form-control\" placeholder=\"Search for item\"\r\n\t\t\t\t\t\t\t autocomplete=\"on\" />\r\n\t\t\t\t\t\t\t<!-- <datalist>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of jdata\" value={{item}}>\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</datalist> -->\r\n\t\t\t\t\t\t\t<datalist id=\"jdata\" >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of jdata\"    >\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t  {{item.words.keyword | uppercase}}  </option>\r\n\t\t\t\t\t\t\t  </datalist>\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t  <!-- <input type=\"text\"  list=\"jdata\"   [(ngModel)]=\"query\" > -->\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default main-color\" (click)=\"searchitems(item.value)\"></button>\r\n\r\n\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t<div id=\"result-ajax-search\" class=\"hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t<ul class=\"list-unstyled search-results\"></ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<!-- End Block Search -->\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- End Main Header -->\r\n\r\n\r\n\t<!-- Begin Navigation -->\r\n\r\n\r\n\r\n\t<!-- End Navigation -->\r\n\r\n</header>\r\n\r\n<!-- End Header -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n\t<div class=\"modal-dialog modal-sm\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Chane Profile Picture</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form ngNoForm target=\"_http://localhost:4200\" action=\"http://localhost:8081/api/UploadUserProfilePhoto/{{userid}}\" method=\"post\"\r\n\t\t\t\t enctype=\"multipart/form-data\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<input type=\"file\" id=\"userPhoto\" (change)=\"changeListner($event)\" required #userPhotos=\"ngModel\" required class=\"form-control\"\r\n\t\t\t\t\t\t name=\"userPhoto\" [(ngModel)]=\"userPhoto\" />\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<input type=\"submit\" name=\"submit\" value=\"Submit\" />\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t</form>\r\n\r\n\r\n\t\t\t\t<!-- <p>This is a small modal.</p> -->\r\n\t\t\t\t<!-- <input type=\"file\" (change)=\"changeListner($event)\" /> -->\r\n\t\t\t\t<img class=\"image\" />\r\n\r\n\t\t\t\t<p>Current Profile Picture</p>\r\n\t\t\t\t<!-- <img  src=\"{{Images}}\" onError=\"assets/more_assets/images/ad3.jpg\" class=\"img-responsive\" /> -->\r\n\t\t\t\t<img [src]=\"Images\" (error)=\"setDefaultPic()\" class=\"img-responsive\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Upload</button> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Begin Banner on Top -->\r\n\r\n  <div id=\"loading12\" style=\"display: block;\">\r\n    <div class=\"spinner\">\r\n        <div class=\"double-bounce1\">\r\n        </div>\r\n        <div class=\"double-bounce2\">\r\n        </div>\r\n    </div>\r\n    <div id=\"groupName\" class=\"loading-txt\">\r\n        \r\n    </div>\r\n</div>\r\n  \r\n  <div class=\"banner-top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n          <div class=\"banner-top-item banner-top-left\">\r\n            <a href=\"collections.html\">\r\n              <span class=\"banner-top-text\">\r\n                <span class=\"banner-title\">New Life</span>\r\n                <span class=\"banner-caption\">Introducing New Category</span>\r\n              </span>\r\n              <img src=\"assets/Images/banners/banner_on_top_img_1586b.png\" alt=\"\" />\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n          <div class=\"banner-top-item banner-top-right\">\r\n            <a href=\"collections.html\">\r\n              <span class=\"banner-top-text\">\r\n                <span class=\"banner-title\">Time & Style</span>\r\n                <span class=\"banner-caption\">Checkout new arrivals</span>\r\n              </span>\r\n              <img src=\"assets/Images/banners/banner_on_top_img_2586b.png\" alt=\"\" />\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div role=\"tabpanel\" id=\"home-tabs\">\r\n    <div class=\"container\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- Nav tabs -->\r\n\r\n      <ul class=\"nav nav-tabs tab-heading\" role=\"tablist\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <li role=\"presentation\" class=\"active tab-title\">\r\n          <a (click)=\"toprecordmotors()\" aria-controls=\"home-tab-1\" role=\"tab\" data-toggle=\"tab\">\r\n\r\n            <!-- <i class=\"fa fa-automobile\"></i> -->\r\n            Cars & Bikes\r\n            <!-- <i class=\"fa fa-motorcycle\"></i> -->\r\n\r\n          </a>\r\n        </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <li role=\"presentation\" class=\"tab-title\">\r\n          <a (click)=\"getmotors('New')\" aria-controls=\"home-tab-2\" role=\"tab\" data-toggle=\"tab\">\r\n\r\n\r\n            New Arrivals\r\n\r\n\r\n          </a>\r\n        </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <li role=\"presentation\" class=\"tab-title\">\r\n          <a (click)=\"getmotors('Used')\" aria-controls=\"home-tab-3\" role=\"tab\" data-toggle=\"tab\">\r\n\r\n\r\n            Used\r\n\r\n\r\n          </a>\r\n        </li>\r\n\r\n\r\n\r\n\r\n      </ul>\r\n      <!-- Tab panel -->\r\n      <div class=\"tab-content\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n       \r\n\r\n\r\n\r\n        <div role=\"tabpanel\" class=\"active tab-pane\" id=\"home-tab-1\">\r\n          <div class=\"home-tab\">\r\n            <div class=\"col-sm-3\" *ngFor=\"let items of motorsitems | slice:0:4\">\r\n              <article class=\"col-item\">\r\n                <div class=\"photo\" (click)=\"itemdetail(items.CategoryID,items.AdId,items.Email)\">\r\n                  <a > <img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[0]}}\" class=\"img-responsive\" alt=\"Product Image\" /> </a>\r\n                  <span class=\"product-label\">\r\n\r\n                    <span class=\"label-sale\">\r\n                      <span class=\"sale-text\">\r\n                          {{items.Condition}}\r\n                      </span>\r\n                    </span>\r\n\r\n                  </span>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <div class=\"row\">\r\n                    <div class=\"price-details col-md-6\">\r\n                      <p class=\"details\">\r\n                        {{items.Brand}}\r\n                      </p>\r\n                      <h1>{{items.Title}}</h1>\r\n                      <span class=\"price-new\">{{items.price | currency :'PKR'}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"separator clear-left\">\r\n                    <p class=\"btn-add\">\r\n                      <i class=\"fa fa-shopping-cart\"></i><a class=\"hidden-sm\" (click)=\"adtocart(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID)\">Add to cart</a>\r\n                    </p>\r\n                    <p class=\"btn-details\">\r\n                      <a class=\"hidden-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add to wish list\"  (click)=\"Adtowish(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID,items.description)\"><i class=\"fa fa-heart\"></i></a>\r\n                      <a  class=\"hidden-sm\"  title=\"quickview\"  data-toggle=\"modal\" (click)=\"quickviewitem(items.CategoryID,items.AdId)\" data-target=\"#product_view\"><i class=\"fa fa-expand\"></i></a>\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n              </article>\r\n            </div>\r\n           \r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div role=\"tabpanel\" id=\"home-tabs\">\r\n    <div class=\"container\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- Nav tabs -->\r\n\r\n      <ul class=\"nav nav-tabs tab-heading\" role=\"tablist\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <li role=\"presentation\" class=\"active tab-title\">\r\n          <a (click)=\"toprecordmobiles()\" aria-controls=\"home-tab-1\" role=\"tab\" data-toggle=\"tab\">\r\n\r\n            <!-- <i class=\"fa fa-mobile-phone\" style=\"font-size:34px\"></i> -->\r\n            Mobiles & Tablets\r\n\r\n\r\n          </a>\r\n        </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <li role=\"presentation\" class=\"tab-title\">\r\n          <a (click)=\"getmobiles('New')\" aria-controls=\"home-tab-2\" role=\"tab\" data-toggle=\"tab\">\r\n\r\n\r\n            New\r\n\r\n\r\n          </a>\r\n        </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <li role=\"presentation\" class=\"tab-title\">\r\n          <a (click)=\"getmobiles('Used')\" aria-controls=\"home-tab-3\" role=\"tab\" data-toggle=\"tab\">\r\n\r\n\r\n            Used\r\n\r\n\r\n          </a>\r\n        </li>\r\n\r\n\r\n\r\n\r\n      </ul>\r\n      <!-- Tab panel -->\r\n      <div class=\"tab-content\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div role=\"tabpanel\" class=\"active tab-pane\" id=\"home-tab-1\">\r\n          <div class=\"home-tab\">\r\n\r\n            <div class=\"col-sm-3\" *ngFor=\"let items of mobileitems | slice:0:4\">\r\n              <article class=\"col-item\">\r\n                <div class=\"photo\" (click)=\"itemdetail(items.CategoryID,items.AdId,items.Email)\">\r\n                  <a > <img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[0]}}\" class=\"img-responsive\" alt=\"Product Image\" /> </a>\r\n                \r\n                  <span class=\"product-label\">\r\n\r\n                    <span class=\"label-sale\">\r\n                      <span class=\"sale-text\">\r\n                          {{items.Condition}}\r\n                      </span>\r\n                    </span>\r\n\r\n                  </span>\r\n                </div>\r\n                <div class=\"info\">\r\n                  <div class=\"row\">\r\n                    <div class=\"price-details col-md-6\">\r\n                      <p class=\"details\">\r\n                        {{items.Brand}}\r\n                      </p>\r\n                      \r\n                      <h1>{{items.Title}}</h1>\r\n                      <span class=\"price-new\">{{items.price | currency :'PKR'}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"separator clear-left\">\r\n                    <p class=\"btn-add\">\r\n                      <i class=\"fa fa-shopping-cart\"></i><a class=\"hidden-sm\" (click)=\"adtocart(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID)\">Add to cart</a>\r\n                    </p>\r\n                    <p class=\"btn-details\">\r\n                      <a class=\"hidden-sm\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add to wish list\"  (click)=\"Adtowish(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID,items.description)\"><i class=\"fa fa-heart\"></i></a>\r\n                      <a  class=\"hidden-sm\"  title=\"quickview\"  data-toggle=\"modal\" (click)=\"quickviewitem(items.CategoryID,items.AdId)\" data-target=\"#product_view\"><i class=\"fa fa-expand\"></i></a>\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n              </article>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- End Partner Logo -->\r\n  <div id=\"trending-now\" class=\"home-carousel\">\r\n    <div class=\"container\">\r\n\r\n\r\n      <h4>Trending Now</h4>\r\n\r\n\r\n      <div class=\"trending-now owl-carousel owl-theme owl-loaded\">\r\n        <div class=\"owl-stage-outer\">\r\n          <div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 1950px;\">\r\n            <div class=\"owl-item active\" style=\"width: 195px; margin-right: 0px;\" *ngFor=\"let items of Trendmotorsitems | slice:0:6\">\r\n              <div class=\"product-wrapper pageLeft-animate\">\r\n\r\n                <div class=\"product-head\">\r\n\r\n                  <div class=\"product-image\">\r\n\r\n\r\n\r\n\r\n                    <div class=\"featured-img switch\">\r\n                      <a href=\"/products/coneco-product-sample\">\r\n                        <img class=\"featured-image front\" src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[0]}}\" alt=\"Conecotam Product Sample\"\r\n                        />\r\n                        <span class=\"hidden-sm hidden-xs\">\r\n                          <img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[1]}}\" class=\"back rotate-product-image\" alt=\"Conecotam Product Sample\"\r\n                          />\r\n                        </span>\r\n\r\n\r\n                      </a>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n               \r\n                <div class=\"product-content\">\r\n                  <div class=\"pc-inner\">\r\n                    <h5 class=\"product-name\">\r\n                      <a  (click)=\"itemdetail(items.CategoryID,items.AdId,items.Email)\">{{items.Title}}</a>\r\n                    </h5>\r\n\r\n                    <p class=\"product-type\">{{items.Brand}}</p>\r\n\r\n                    <div class=\"product-price\">\r\n\r\n\r\n                      <span class=\"price\">\r\n\r\n                        <span class=\"money\" data-currency-usd=\"$310.00\" data-currency=\"USD\">{{items.price| currency :'PKR'}}</span>\r\n\r\n                      </span>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"product-button\">\r\n\r\n                      <div class=\"add-cart-button\">\r\n\r\n                        <a  (click)=\"adtocart(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID)\" class=\"btn btn-default select-options\" title=\"Add Cart\">Add Cart</a>\r\n\r\n                      </div>\r\n\r\n\r\n                      <div class=\"product-wishlist\">\r\n\r\n                        <button type=\"button\" class=\"add-to-wishlist\" (click)=\"Adtowish(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID,items.description)\" title=\"Add to wishlist\">\r\n                          <i class=\"fa fa-heart\"></i>Add to wishlist</button>\r\n\r\n                      </div>\r\n\r\n\r\n\r\n\r\n                      <div data-handle=\"coneco-product-sample\" data-target=\"#product_view\" class=\"quick_shop quick-shop-button hidden-sm hidden-xs\"\r\n                        data-toggle=\"modal\" title=\"Quick View\" (click)=\"quickviewitem(items.CategoryID,items.AdId)\">\r\n                        <i class=\"fa fa-expand\"></i>Quick View\r\n                        <!-- <span class=\"json hide\">{\"id\":3950842307,\"title\":\"Conecotam Product Sample\",\"handle\":\"coneco-product-sample\",\"description\":\"\\u003ch5\\u003e\\u003cspan\\u003eDescription\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003cspan\\u003eOur new \\u003c\\/span\\u003e\\u003cb\\u003eHPB12 \\/ A12\\u003c\\/b\\u003e\\u003cb\\u003e battery\\u003c\\/b\\u003e\\u003cspan\\u003e is rated at 2000mAh and designed to power up Black and Decker \\/ FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Drills and Drivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eBD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Impact Wrenches:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eSX5000, XTC12IK, XTC12IKH&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Multi-Tools:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eKC2000FK&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Nailers:\\u003c\\/b\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBDBN1202 &nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003eBlack \\u0026amp; Decker Screwdrivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eHP9019K&nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eand other 12V tools.\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBest replacement for the following Black and Decker OEM battery part numbers: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cspan\\u003eHPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.\\u003c\\/span\\u003e\\u003c\\/p\\u003e\\n\\u003ch5\\u003e\\u003cspan\\u003eSpecifications\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cul\\u003e\\n\\u003cli\\u003eChemistry: Ni-CD\\u003c\\/li\\u003e\\n\\u003cli\\u003eVoltage: 12V\\u003c\\/li\\u003e\\n\\u003cli\\u003eAmpHours: 2000mAh\\u003c\\/li\\u003e\\n\\u003cli\\u003eDimensions: 109.75x79.55x62.20mm\\u003c\\/li\\u003e\\n\\u003c\\/ul\\u003e\\n\\u003ch5\\u003eVideo\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003ciframe src=\\\"\\/\\/www.youtube.com\\/embed\\/QZd7015XaTQ\\\" height=\\\"315\\\" width=\\\"560\\\"\\u003e \\u003c\\/iframe\\u003e\\u003c\\/p\\u003e\",\"published_at\":\"2015-11-22T22:02:00-05:00\",\"created_at\":\"2015-11-22T22:02:20-05:00\",\"vendor\":\"Arena\",\"type\":\"Electronic\",\"tags\":[\"Brand_Bikis\",\"Color_Brown\",\"Price_Above $300\",\"Size_L\",\"Size_M\",\"Size_X\",\"Size_XL\"],\"price\":31000,\"price_min\":31000,\"price_max\":38000,\"available\":true,\"price_varies\":true,\"compare_at_price\":null,\"compare_at_price_min\":0,\"compare_at_price_max\":0,\"compare_at_price_varies\":false,\"variants\":[{\"id\":11323537219,\"title\":\"M\",\"option1\":\"M\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - M\",\"public_title\":\"M\",\"options\":[\"M\"],\"price\":31000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-9,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"},{\"id\":11323537283,\"title\":\"L\",\"option1\":\"L\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - L\",\"public_title\":\"L\",\"options\":[\"L\"],\"price\":32000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-5,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"},{\"id\":11323537411,\"title\":\"X\",\"option1\":\"X\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - X\",\"public_title\":\"X\",\"options\":[\"X\"],\"price\":35000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-8,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"},{\"id\":11323537475,\"title\":\"Xl\",\"option1\":\"Xl\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - Xl\",\"public_title\":\"Xl\",\"options\":[\"Xl\"],\"price\":38000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-4,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"}],\"images\":[\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_2_large_5efe90ef-14b1-4594-93df-22ba0dbbff32.png?v=1449560075\",\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_1_large_f8983c80-1659-4b06-9ce4-b50fb8e2c8cf.png?v=1449560087\",\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_2_large_94db0b77-b8f0-4704-a867-0406b13a2e80.png?v=1449560098\"],\"featured_image\":\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_2_large_5efe90ef-14b1-4594-93df-22ba0dbbff32.png?v=1449560075\",\"options\":[\"Size\"],\"content\":\"\\u003ch5\\u003e\\u003cspan\\u003eDescription\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003cspan\\u003eOur new \\u003c\\/span\\u003e\\u003cb\\u003eHPB12 \\/ A12\\u003c\\/b\\u003e\\u003cb\\u003e battery\\u003c\\/b\\u003e\\u003cspan\\u003e is rated at 2000mAh and designed to power up Black and Decker \\/ FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Drills and Drivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eBD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Impact Wrenches:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eSX5000, XTC12IK, XTC12IKH&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Multi-Tools:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eKC2000FK&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Nailers:\\u003c\\/b\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBDBN1202 &nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003eBlack \\u0026amp; Decker Screwdrivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eHP9019K&nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eand other 12V tools.\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBest replacement for the following Black and Decker OEM battery part numbers: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cspan\\u003eHPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.\\u003c\\/span\\u003e\\u003c\\/p\\u003e\\n\\u003ch5\\u003e\\u003cspan\\u003eSpecifications\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cul\\u003e\\n\\u003cli\\u003eChemistry: Ni-CD\\u003c\\/li\\u003e\\n\\u003cli\\u003eVoltage: 12V\\u003c\\/li\\u003e\\n\\u003cli\\u003eAmpHours: 2000mAh\\u003c\\/li\\u003e\\n\\u003cli\\u003eDimensions: 109.75x79.55x62.20mm\\u003c\\/li\\u003e\\n\\u003c\\/ul\\u003e\\n\\u003ch5\\u003eVideo\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003ciframe src=\\\"\\/\\/www.youtube.com\\/embed\\/QZd7015XaTQ\\\" height=\\\"315\\\" width=\\\"560\\\"\\u003e \\u003c\\/iframe\\u003e\\u003c\\/p\\u003e\"}</span> -->\r\n                      </div>\r\n                    \r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"trending-now owl-carousel owl-theme owl-loaded\">\r\n        <div class=\"owl-stage-outer\">\r\n          <div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 1950px;\">\r\n            <div class=\"owl-item active\" style=\"width: 195px; margin-right: 0px;\" *ngFor=\"let items of Trendmobileitems | slice:0:6\">\r\n              <div class=\"product-wrapper pageLeft-animate\">\r\n\r\n                <div class=\"product-head\">\r\n\r\n                  <div class=\"product-image\">\r\n\r\n\r\n\r\n\r\n                    <div class=\"featured-img switch\">\r\n                      <a href=\"/products/coneco-product-sample\">\r\n                        <img class=\"featured-image front\" src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[0]}}\" alt=\"Conecotam Product Sample\"\r\n                        />\r\n                        <span class=\"hidden-sm hidden-xs\">\r\n                          <img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[1]}}\" class=\"back rotate-product-image\" alt=\"Conecotam Product Sample\"\r\n                          />\r\n                        </span>\r\n\r\n\r\n                      </a>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"product-content\" >\r\n                  <div class=\"pc-inner\">\r\n                    <h5 class=\"product-name\">\r\n                      <a (click)=\"itemdetail(items.CategoryID,items.AdId,items.Email)\" >{{items.Title}}</a>\r\n                    </h5>\r\n\r\n                    <p class=\"product-type\">{{items.Brand}}</p>\r\n\r\n                    <div class=\"product-price\">\r\n\r\n\r\n                      <span class=\"price\">\r\n\r\n                        <span class=\"money\" data-currency-usd=\"$310.00\" data-currency=\"USD\">{{items.price| currency :'PKR'}}</span>\r\n\r\n                      </span>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"product-button\">\r\n\r\n                      <div class=\"add-cart-button\">\r\n\r\n                        <a  (click)=\"adtocart(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID)\" class=\"btn btn-default select-options\" title=\"Add Cart\">Add Cart</a>\r\n\r\n                      </div>\r\n\r\n\r\n                      <div class=\"product-wishlist\">\r\n\r\n                        <button type=\"button\" class=\"add-to-wishlist\" (click)=\"Adtowish(items.ShopID,items.AdId,items.Email,items.Images.split(',')[0],items.Title,items.price,items.CategoryID,items.description)\" title=\"Add to wishlist\">\r\n                          <i class=\"fa fa-heart\"></i>Add to wishlist</button>\r\n\r\n                      </div>\r\n\r\n\r\n\r\n\r\n                      <div data-handle=\"coneco-product-sample\" (click)=\"quickviewitem(items.CategoryID,items.AdId)\" data-target=\"#product_view\" class=\"quick_shop quick-shop-button hidden-sm hidden-xs\"\r\n                        data-toggle=\"modal\" title=\"Quick View\">\r\n                        <i class=\"fa fa-expand\"></i>Quick View\r\n                        <!-- <span class=\"json hide\">{\"id\":3950842307,\"title\":\"Conecotam Product Sample\",\"handle\":\"coneco-product-sample\",\"description\":\"\\u003ch5\\u003e\\u003cspan\\u003eDescription\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003cspan\\u003eOur new \\u003c\\/span\\u003e\\u003cb\\u003eHPB12 \\/ A12\\u003c\\/b\\u003e\\u003cb\\u003e battery\\u003c\\/b\\u003e\\u003cspan\\u003e is rated at 2000mAh and designed to power up Black and Decker \\/ FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Drills and Drivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eBD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Impact Wrenches:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eSX5000, XTC12IK, XTC12IKH&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Multi-Tools:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eKC2000FK&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Nailers:\\u003c\\/b\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBDBN1202 &nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003eBlack \\u0026amp; Decker Screwdrivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eHP9019K&nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eand other 12V tools.\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBest replacement for the following Black and Decker OEM battery part numbers: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cspan\\u003eHPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.\\u003c\\/span\\u003e\\u003c\\/p\\u003e\\n\\u003ch5\\u003e\\u003cspan\\u003eSpecifications\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cul\\u003e\\n\\u003cli\\u003eChemistry: Ni-CD\\u003c\\/li\\u003e\\n\\u003cli\\u003eVoltage: 12V\\u003c\\/li\\u003e\\n\\u003cli\\u003eAmpHours: 2000mAh\\u003c\\/li\\u003e\\n\\u003cli\\u003eDimensions: 109.75x79.55x62.20mm\\u003c\\/li\\u003e\\n\\u003c\\/ul\\u003e\\n\\u003ch5\\u003eVideo\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003ciframe src=\\\"\\/\\/www.youtube.com\\/embed\\/QZd7015XaTQ\\\" height=\\\"315\\\" width=\\\"560\\\"\\u003e \\u003c\\/iframe\\u003e\\u003c\\/p\\u003e\",\"published_at\":\"2015-11-22T22:02:00-05:00\",\"created_at\":\"2015-11-22T22:02:20-05:00\",\"vendor\":\"Arena\",\"type\":\"Electronic\",\"tags\":[\"Brand_Bikis\",\"Color_Brown\",\"Price_Above $300\",\"Size_L\",\"Size_M\",\"Size_X\",\"Size_XL\"],\"price\":31000,\"price_min\":31000,\"price_max\":38000,\"available\":true,\"price_varies\":true,\"compare_at_price\":null,\"compare_at_price_min\":0,\"compare_at_price_max\":0,\"compare_at_price_varies\":false,\"variants\":[{\"id\":11323537219,\"title\":\"M\",\"option1\":\"M\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - M\",\"public_title\":\"M\",\"options\":[\"M\"],\"price\":31000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-9,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"},{\"id\":11323537283,\"title\":\"L\",\"option1\":\"L\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - L\",\"public_title\":\"L\",\"options\":[\"L\"],\"price\":32000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-5,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"},{\"id\":11323537411,\"title\":\"X\",\"option1\":\"X\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - X\",\"public_title\":\"X\",\"options\":[\"X\"],\"price\":35000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-8,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"},{\"id\":11323537475,\"title\":\"Xl\",\"option1\":\"Xl\",\"option2\":null,\"option3\":null,\"sku\":\"\",\"requires_shipping\":true,\"taxable\":true,\"featured_image\":null,\"available\":true,\"name\":\"Conecotam Product Sample - Xl\",\"public_title\":\"Xl\",\"options\":[\"Xl\"],\"price\":38000,\"weight\":0,\"compare_at_price\":null,\"inventory_quantity\":-4,\"inventory_management\":null,\"inventory_policy\":\"deny\",\"barcode\":\"\"}],\"images\":[\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_2_large_5efe90ef-14b1-4594-93df-22ba0dbbff32.png?v=1449560075\",\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_1_large_f8983c80-1659-4b06-9ce4-b50fb8e2c8cf.png?v=1449560087\",\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_2_large_94db0b77-b8f0-4704-a867-0406b13a2e80.png?v=1449560098\"],\"featured_image\":\"\\/\\/cdn.shopify.com\\/s\\/files\\/1\\/1067\\/5616\\/products\\/853_2_large_5efe90ef-14b1-4594-93df-22ba0dbbff32.png?v=1449560075\",\"options\":[\"Size\"],\"content\":\"\\u003ch5\\u003e\\u003cspan\\u003eDescription\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003cspan\\u003eOur new \\u003c\\/span\\u003e\\u003cb\\u003eHPB12 \\/ A12\\u003c\\/b\\u003e\\u003cb\\u003e battery\\u003c\\/b\\u003e\\u003cspan\\u003e is rated at 2000mAh and designed to power up Black and Decker \\/ FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack. The HPB12 is compatible with the following Black and Decker power tool models: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Drills and Drivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eBD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK, CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB, EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD, HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC, HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202, HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000, SX3500, XD1200, XD1200K, XTC121&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Impact Wrenches:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eSX5000, XTC12IK, XTC12IKH&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Multi-Tools:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eKC2000FK&nbsp;\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003eBlack \\u0026amp; Decker Nailers:\\u003c\\/b\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBDBN1202 &nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003eBlack \\u0026amp; Decker Screwdrivers:\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eHP9019K&nbsp;\\u003c\\/span\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cb\\u003e\\u003cbr\\u003e\\u003c\\/b\\u003e\\u003cspan\\u003eand other 12V tools.\\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cspan\\u003eBest replacement for the following Black and Decker OEM battery part numbers: \\u003c\\/span\\u003e\\u003cbr\\u003e\\u003cspan\\u003eHPB12, A12, A12EX, A12-XJ, A1712, B-8315, BD1204L, BD-1204L, BPT1047, FS120B, FS120BX, FSB12.\\u003c\\/span\\u003e\\u003c\\/p\\u003e\\n\\u003ch5\\u003e\\u003cspan\\u003eSpecifications\\u003c\\/span\\u003e\\u003c\\/h5\\u003e\\n\\u003cul\\u003e\\n\\u003cli\\u003eChemistry: Ni-CD\\u003c\\/li\\u003e\\n\\u003cli\\u003eVoltage: 12V\\u003c\\/li\\u003e\\n\\u003cli\\u003eAmpHours: 2000mAh\\u003c\\/li\\u003e\\n\\u003cli\\u003eDimensions: 109.75x79.55x62.20mm\\u003c\\/li\\u003e\\n\\u003c\\/ul\\u003e\\n\\u003ch5\\u003eVideo\\u003c\\/h5\\u003e\\n\\u003cp\\u003e\\u003ciframe src=\\\"\\/\\/www.youtube.com\\/embed\\/QZd7015XaTQ\\\" height=\\\"315\\\" width=\\\"560\\\"\\u003e \\u003c\\/iframe\\u003e\\u003c\\/p\\u003e\"}</span> -->\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"modal fade product_view\" id=\"product_view\" >\r\n  <div class=\"modal-dialog\" *ngIf=\"quickitem != undefined\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n          \r\n              <a href=\"#\" data-dismiss=\"modal\" class=\"class pull-right\"><span class=\"glyphicon glyphicon-remove\"></span></a>\r\n              <h3 class=\"modal-title\">{{quickitem[0].Title}}</h3>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6 product_img\">\r\n                      <img src=\"http://localhost:8081/api/GetMainAdImage/{{quickitem[0].Images.split(',')[0]}}\" class=\"img-responsive\">\r\n                  </div>\r\n                  <div class=\"col-md-6 product_content\">\r\n                      <h4>Product Id: <span>{{quickitem[0].AdId}}</span></h4>\r\n                      <div class=\"rating\">\r\n                          <span class=\"glyphicon glyphicon-star\"></span>\r\n                          <span class=\"glyphicon glyphicon-star\"></span>\r\n                          <span class=\"glyphicon glyphicon-star\"></span>\r\n                          <span class=\"glyphicon glyphicon-star\"></span>\r\n                          <span class=\"glyphicon glyphicon-star\"></span>\r\n                          (10 reviews)\r\n                      </div>\r\n                      <p>{{quickitem[0].description}}.</p>\r\n                      <h3 class=\"cost\"> {{quickitem[0].price | currency :'PKR'}} </h3>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                              <select class=\"form-control\" name=\"select\">\r\n                                  <option value=\"\" selected>Color</option>\r\n                                  <option value=\"\" >{{quickitem[0].Color}}</option>\r\n                                  \r\n                              </select>\r\n                          </div>\r\n                          <!-- end col -->\r\n                          <!-- <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                              <select class=\"form-control\" name=\"select\">\r\n                                  <option value=\"\">Capacity</option>\r\n                                  <option value=\"\">16GB</option>\r\n                                  <option value=\"\">32GB</option>\r\n                                  <option value=\"\">64GB</option>\r\n                                  <option value=\"\">128GB</option>\r\n                              </select>\r\n                          </div> -->\r\n                          <!-- end col -->\r\n                          <div class=\"col-md-4 col-sm-12\">\r\n                              <select class=\"form-control\" name=\"select\">\r\n                                  <option value=\"\" selected>Quantity</option>\r\n                                  <option value=\"\" >{{quickitem[0].quantity}}</option>\r\n                                  <!-- <option value=\"\">{{quickitem[0].quantity}}</option> -->\r\n                               \r\n                              </select>\r\n                          </div>\r\n                          <!-- end col -->\r\n                      </div>\r\n                      <div class=\"space-ten\"></div>\r\n                      <div class=\"btn-ground\">\r\n                       \r\n                          <button type=\"button\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-heart\"></span> Add To Wishlist</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = "<main-header  *ngIf=\"pagesJSON.main_header\"></main-header>\n<div  class=\"container\" >\n\n<div class=\"container\"    *ngFor=\"let item of itemresult \" >\n\t<div class=\"row\">\n\t\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"item-listing bg-grey\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t  <div class=\"col-md-2\"> <img *ngIf=\"item.ShopName != undefined\" src=\"http://rn53themes.net/themes/demo/directory/images/services/s1.jpeg\" alt=\"\">\n\t\t\t\t\t\t\t<img *ngIf=\"item.ShopName == undefined\" src=\"/assets/Images/person.png\" alt=\"\">  \n\t\t</div>\n\t\t\t\t\t\t  <div class=\"col-md-8 listing-title\"> <a href=\"listing-details.html\"><h3>{{item.ShopName}}</h3></a>\n\t\t\t\t\t\t\t\t\t\t<h4>{{item.Name}}</h4>\n\t\t\t\t\t\t\t\t\t\t<p><b>Address:</b> 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>\n\t\t\t\t<div class=\"listing-number \">\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><img src=\"images/icon/phone.png\" alt=\"\">  {{item.Phone_no}} {{item.Phoneno}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><img src=\"images/icon/mail.png\" alt=\"\"> {{item.Email}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t</div>\n\t\t\t\t<div class=\"listing-enquiry-sec\">\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a *ngIf=\"item.ShopName != undefined\" (click)=\"viewotherads(item.CategoryID,item.V_UsersID)\"><i class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></i> View Other Ads</a> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a *ngIf=\"item.ShopName != undefined && subscribes != true\" (click)=\"subscribe(item.ShopID)\"><i class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></i> Subscribe Shop</a> </li>\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t</div>\n\t</div>\n</div>\n<!-- products -->\n<div class=\"products\">\t \n\t\t<div class=\"container\">  \n\t\t\t<div class=\"single-page\">\n\t\t\t\t<div class=\"single-page-row\" id=\"detail-21\">\n\t\t\t\t\t<!-- <div class=\"col-md-6 single-top-left\">\t\n\t\t\t\t\t\t<div class=\"flexslider\">\n\t\t\t\t\t\t\t<ul class=\"slides\">\n\t\t\t\t\t\t\t\t<li data-thumb=\"/assets/more_assets/images/s1.jpg\">\n\t\t\t\t\t\t\t\t\t<div class=\"thumb-image detail_images\"> <img src=\"/assets/more_assets/images/s1.jpg\" data-imagezoom=\"true\" class=\"img-responsive\" alt=\"\"> </div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li data-thumb=\"/assets/more_assets/images/s2.jpg\">\n\t\t\t\t\t\t\t\t\t <div class=\"thumb-image\"> <img src=\"/assets/more_assets/images/s2.jpg\" data-imagezoom=\"true\" class=\"img-responsive\" alt=\"\"> </div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li data-thumb=\"/assets/more_assets/images/s3.jpg\">\n\t\t\t\t\t\t\t\t   <div class=\"thumb-image\"> <img src=\"/assets/more_assets/images/s3.jpg\" data-imagezoom=\"true\" class=\"img-responsive\" alt=\"\"> </div>\n\t\t\t\t\t\t\t\t</li> \n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t\n\t\t\t\t\t <div class=\"col-md-6 single-top-right home-slideshow-wrapper swiper-container\"  *ngFor=\"let item of itemresult \" data-animation=\"fade\">\n     \n\t\t\t\t\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t   <ol class=\"carousel-indicators\">\n\t\t\t\t\t\t\t\t <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t\t\t\t\t\t <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n\t\t\t\t\t\t\t\t <!-- <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n\t\t\t\t\t\t\t\t <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n\t\t\t\t\t\t\t\t <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li> -->\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t   </ol>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t   <div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t <div class=\"item active\">\n\t\t\t\t\t\t\t\t   <img src=\"http://localhost:8081/api/GetMainAdImage/{{item.Images.split(',')[0]}}\" alt=\"slider\" >\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t <div class=\"item\">\n\t\t\t\t\t\t\t\t   <img src=\"http://localhost:8081/api/GetMainAdImage/{{item.Images.split(',')[1]}}\" alt=\"slider\">\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t <!-- <div class=\"item\">\n\t\t\t\t\t\t\t\t   <img src=\"http://localhost:8081/api/GetSliderImage/3.jpg\" alt=\"slider\" >\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t <div class=\"item\">\n\t\t\t\t\t\t\t\t   <img src=\"http://localhost:8081/api/GetSliderImage/4.png\" alt=\"slider\">\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t <div class=\"item\">\n\t\t\t\t\t\t\t\t   <img src=\"http://localhost:8081/api/GetSliderImage/5.jpg\" alt=\"slider\" >\n\t\t\t\t\t\t\t\t </div> -->\n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t   \n\t\t\t\t\t\t   \n\t\t\t\t\t\t   \n\t\t\t\t\t\t\t   <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t <span class=\"glyphicon glyphicon-chevron-left\"></span>\n\t\t\t\t\t\t\t\t <span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t   <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t <span class=\"glyphicon glyphicon-chevron-right\"></span>\n\t\t\t\t\t\t\t\t <span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t   </div> \n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t  \n\t\t\t\t\t<div class=\"col-md-6 single-top-right\" *ngFor=\"let item of itemresult \" id=\"content\" #content>\n\t\t\t\t\t\t<h3 class=\"item_name\">{{item.Title}}</h3>\n\t\t\t\t\t\t<h3 class=\"item_name\">Model: {{item.Model}}</h3>\n\t\t\t\t\t\t<p>Processing Time: Item will be shipped out within 2-3 working days. </p>\n\t\t\t\t\t\t<div class=\"single-rating\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li class=\"rating\">Quantity : {{item.quantity}}</li>\n\t\t\t\t\t\t\t\t<li><a >{{item.FuelType}}</a></li>\n\t\t\t\t\t\t\t</ul> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"single-price\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Price :{{item.price | currency :'PKR'}}</li>  \n\t\t\t\t\t\t\t\t<!-- <li><del>$600</del></li>  -->\n\t\t\t\t\t\t\t\t<li><span class=\"w3off\">Condition : {{item.Condition}}</span></li> \n\t\t\t\t\t\t\t\t<li>Ends on: jan,9th</li>\n\t\t\t\t\t\t\t\t<!-- <li><a href=\"#\"><i class=\"fa fa-gift\" aria-hidden=\"true\"></i> Coupon</a></li> -->\n\t\t\t\t\t\t\t</ul>\t\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<p class=\"single-price-text\">Description :{{item.description}} </p>\n\t\t\t\t\t\t<form action=\"#\" method=\"post\">\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"add\" value=\"1\" /> \n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"w3ls_item\" value=\"Snow Blower\" /> \n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"amount\" value=\"540.00\" /> \n\t\t\t\t\t\t\t<button type=\"submit\" class=\"w3ls-cart\" (click)=\"adtocart(item.ShopID,item.AdId,item.Email,item.Images.split(',')[0],item.Title,item.price,item.CategoryID)\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<button class=\"w3ls-cart w3ls-cart-like\" (click)=\"Adtowish(item.ShopID,item.AdId,item.Email,item.Images.split(',')[0],item.Title,item.price,item.CategoryID,item.description)\"><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> Add to Wishlist</button>\n\t\t\t\t\t\t<button class=\"w3ls-cart w3ls-cart-like\" (click)=\"downloadpdf()\"><i class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></i> Download Pdf</button>\n\t\t\t\t\t</div>\n\t\t\t\t   <div class=\"clearfix\"> </div>  \n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"single-page-icons social-icons\"> \n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><h4>Share on</h4></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"fa fa-facebook icon facebook\"> </a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"fa fa-twitter icon twitter\"> </a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"fa fa-google-plus icon googleplus\"> </a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"fa fa-dribbble icon dribbble\"> </a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"fa fa-rss icon rss\"> </a></li> \n\t\t\t\t\t</ul>\n\t\t\t\t</div> -->\n\t\t\t</div> \n\t\t\t<!-- recommendations -->\n\t\t\t<!-- <div class=\"recommend\">\n\t\t\t\t<h3 class=\"w3ls-title\">Our Recommendations </h3> \n\t\t\t\t<script>\n\t\t\t\t\t$(document).ready(function() { \n\t\t\t\t\t\t$(\"#owl-demo5\").owlCarousel({\n\t\t\t\t\t \n\t\t\t\t\t\t  autoPlay: 3000, //Set AutoPlay to 3 seconds\n\t\t\t\t\t \n\t\t\t\t\t\t  items :4,\n\t\t\t\t\t\t  itemsDesktop : [640,5],\n\t\t\t\t\t\t  itemsDesktopSmall : [414,4],\n\t\t\t\t\t\t  navigation : true\n\t\t\t\t\t \n\t\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\t}); \n\t\t\t\t</script>\n\t\t\t   \n\t\t\t</div> -->\n\t\t\t<!-- //recommendations --> \n\t\t\t<!-- collapse-tabs -->\n\n\t\t\t\n\t\t\n\t\t\t<!-- //collapse --> \n\t\t\t<!-- offers-cards --> \n\t\t\t<div class=\"w3single-offers offer-bottom\"> \n\t\t\t\t<div class=\"col-md-6 offer-bottom-grids\">\n\t\t\t\t\t<div class=\"offer-bottom-grids-info2\">\n\t\t\t\t\t\t<h4>Special Gift Cards</h4> \n\t\t\t\t\t\t<h6>More brands, more ways to shop. <br> Check out these ideal gifts!</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 offer-bottom-grids\">\n\t\t\t\t\t<div class=\"offer-bottom-grids-info\">\n\t\t\t\t\t\t<h4>Flat $10 Discount</h4> \n\t\t\t\t\t\t<h6>The best Shopping Offer <br> On Fashion Store</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t</div>\n\t\t\t<!-- //offers-cards -->\n\t\t</div>\n\t</div>\n\t<!--//products-->  \n</div>\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer> \n"

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = "<main-header *ngIf=\"pagesJSON.main_header\"></main-header>\r\n<!-- <div class=\"container\">\r\n  <h1>Log in</h1>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"Signin(form.value)\" novalidate>\r\n\r\n    <div class=\"form-group\">\r\n      <label><h3>{{'Email' | translate}}</h3></label>\r\n      <input type=\"text\" #emailRef=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" minlength=\"4\" class=\"form-control\"\r\n        name=\"email\" [(ngModel)]=\"email\">\r\n      <div *ngIf=\"emailRef.errors && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"emailRef.errors.required\">\r\n          Please Enter a Email\r\n        </div>\r\n        <div *ngIf=\"emailRef.errors && emailRef.errors.pattern\">\r\n          Please Enter valid Email\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label><h3>{{'Password' | translate}} </h3></label>\r\n      <input type=\"password\" #passwordRef=\"ngModel\" required minlength=\"8\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\r\n          <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"passwordRef.errors.required\">\r\n          Please Enter a Password\r\n        </div>\r\n        <div *ngIf=\"passwordRef.errors.minlength\">\r\n          Please Enter atleast 8 characters\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-warning  btn-block\"><h5>{{'Log-in' | translate}}</h5></button>\r\n  </form>\r\n  <p>Log in using your Google account</p>\r\n  <button type=\"submit\" (click)=\"SignUpbygoogle('google')\" class=\"btn btn-block  btn-danger\">Google</button>\r\n</div>\r\n\r\n<p>\r\n<a [routerLink]=\"['/registraion']\">New user? Register here</a>\r\n</p>\r\n<p>Already posted an Ad before? <button type=\"button\" class=\"btn btn-link\" (click)=\"opensweetalert()\">Manage your Ad through email or phone</button></p>\r\n   -->\r\n   <div class=\"clearfix\"></div>\r\n   <div class=\"container\">\r\n<div id=\"main-content\">\r\n\r\n  <div class=\"main-content\">\r\n    <div id=\"col-main\" class=\"page-login\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n          <div class=\"form-wrapper\">\r\n\r\n            <div id=\"customer-login\" class=\"content\">\r\n              <h2 class=\"heading\">Sign In</h2>\r\n              <p>Hello, Welcome to your account</p>\r\n\r\n              <form #form=\"ngForm\" (ngSubmit)=\"Signin(form.value)\" novalidate>\r\n                <input type=\"hidden\" value=\"customer_login\" name=\"form_type\" />\r\n                <input type=\"hidden\" name=\"utf8\" value=\"✓\" />\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"customer_email\">Email\r\n                        <span class=\"req\">*</span>\r\n                      </label>\r\n                    <input type=\"text\" #emailRef=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" minlength=\"4\" class=\"form-control\"\r\n                      name=\"email\" [(ngModel)]=\"email\">\r\n                    <div *ngIf=\"emailRef.errors && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"emailRef.errors.required\">\r\n                        Please Enter a Email\r\n                      </div>\r\n                      <div *ngIf=\"emailRef.errors && emailRef.errors.pattern\">\r\n                        Please Enter valid Email\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                <!-- <div class=\"form-control-wrapper\">\r\n                  <label for=\"customer_email\">Email\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"text\" #emailRef=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" minlength=\"4\" class=\"form-control\"\r\n                  name=\"email\" [(ngModel)]=\"email\" class=\"col-sm-10 col-xs-12\" />\r\n                  <div *ngIf=\"emailRef.errors && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"emailRef.errors.required\">\r\n                        Please Enter a Email\r\n                      </div>\r\n                      <div *ngIf=\"emailRef.errors && emailRef.errors.pattern\">\r\n                        Please Enter valid Email\r\n                      </div>\r\n                    </div>\r\n                \r\n                </div>\r\n                 -->\r\n <div class=\"form-group\">\r\n    <label for=\"customer_password\">Password\r\n        <span class=\"req\">*</span>\r\n      </label>\r\n      <input type=\"password\" #passwordRef=\"ngModel\" (keyup.enter)=\"Signin(form.value)\" required minlength=\"8\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\r\n          <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"passwordRef.errors.required\">\r\n          Please Enter a Password\r\n        </div>\r\n        <div *ngIf=\"passwordRef.errors.minlength\">\r\n          Please Enter atleast 8 characters\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n                <!-- <div class=\"control-wrapper\">\r\n                  <label for=\"customer_password\">Password\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"password\" required #passwordRef=\"ngModel\" required minlength=\"8\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" class=\"col-sm-10 col-xs-12 password\" />\r\n                </div> --> \r\n\r\n\r\n                <div class=\"control-wrapper last\">\r\n                  <div class=\"action\">\r\n                    <a class=\"forgot-pass\" href=\"javascript:;\" onclick=\"showRecoverPasswordForm()\">Forgotten Password?</a>\r\n                    <a class=\"return-store\" href=\"../index.html\">Return to Store</a>\r\n                  </div>\r\n                  <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!form.valid\">Secure Sign In</button>\r\n                  <p>Log in using your Google account</p>\r\n                  <a  title=\"Google+\" (click)=\"SignUpbygoogle('google')\" class=\"btn btn-googleplus btn-lg \"><i class=\"fa fa-google-plus fa-fw\"></i> Google+</a>\r\n                </div>\r\n\r\n              </form>\r\n             \r\n              <!-- <button type=\"submit\" (click)=\"SignUpbygoogle('google')\" class=\"btn btn-block  btn-danger\">Google</button>\r\n              <a class=\"btn btn-social-icon btn-google\">\r\n                <span class=\"fa fa-twitter\"></span> Sign in with Google+\r\n              </a> -->\r\n             \r\n\r\n\r\n            </div>\r\n\r\n            <div id=\"recover-password\" style=\"display: none;\">\r\n\r\n              <h2 class=\"heading\">Reset Your Password</h2>\r\n\r\n              <p class=\"note\">We will send you an email to reset your password.</p>\r\n\r\n              <form method=\"post\" action=\"https://mediacenter-theme.myshopify.com/account/recover\" accept-charset=\"UTF-8\">\r\n                <input type=\"hidden\" value=\"recover_customer_password\" name=\"form_type\" />\r\n                <input type=\"hidden\" name=\"utf8\" value=\"✓\" />\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"control-wrapper\">\r\n                  <label for=\"email\">Email\r\n                    <span class=\"req\">*</span>\r\n                  </label>\r\n                  <input type=\"email\" value=\"\" name=\"email\" id=\"recover-email\" class=\"col-sm-10 col-xs-12\" />\r\n                </div>\r\n\r\n                <div class=\"control-wrapper\">\r\n                  <button class=\"btn btn-default\" type=\"submit\">Submit</button>\r\n                  <a class=\"cancel btn btn-default\" href=\"javascript:;\" onclick=\"hideRecoverPasswordForm();\">Cancel</a>\r\n                </div>\r\n                \r\n              </form>\r\n             \r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n          <div class=\"form-wrapper\">\r\n              <div class=\"imagetest\">\r\n              <img src=\"assets/Images/logo/11.png\"  class=\"img-responsive\"   alt=\"logo\"> \r\n           \r\n            </div>\r\n          </div>\r\n        </div> \r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer>"

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = "\r\n <main-header  *ngIf=\"pagesJSON.main_header\"></main-header>\r\n<!-- <main-search-bar   *ngIf=\"pagesJSON.main_search_bar\"></main-search-bar> -->\r\n <!-- <main-nav-bar *ngIf=\"pagesJSON.main_nav_bar\"></main-nav-bar>  -->\r\n <br>\r\n<main-slider-bar *ngIf=\"pagesJSON.main_search_bar\"></main-slider-bar>  \r\n  <app-home [recievemsg]=\"sendmessage\" *ngIf=\"pagesJSON.app_home\"></app-home> \r\n\r\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer> \r\n\r\n"

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  \n    \n\n  \n\n  <div class=\"form-group\">\n    <label><h3>Storage Capacity</h3></label>\n    <input type=\"number\" #storagecapacityRef=\"ngModel\" required name=\"storagecapacity\" [(ngModel)]=\"storagecapacity\">\n    <div *ngIf=\"storagecapacityRef.errors && (storagecapacityRef.dirty || storagecapacityRef.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"storagecapacityRef.errors.required\">\n        Please Enter a Storage Capacity\n      </div>\n    </div>\n    <select name=\"storagememorys\" #storagememorysRef=\"ngModel\" [(ngModel)]=\"storagememorys\">\n\t\t\t\t\t  <option disabled>Select Memory</option>\n     <option >TB</option>\n\t\t\t\t\t   <option >GB</option>\n\t\t  <option >MB</option>\n\t\t\t\t\t</select>\n  </div>\n  \n  \n  </div>\n\n\n\n\n  \n\n \n  -->\n\n\n<div class=\"post-ad-form\">\n  <form #form=\"ngForm\" novalidate>\n\n    <!-- <label>Price\n      <span>*</span>\n    </label>\n    <input type=\"text\" class=\"phone\" placeholder=\"\" #priceRef=\"ngModel\" required name=\"price\" [(ngModel)]=\"price\">\n  <br> -->\n    <label>Brand\n      <span>*</span>\n    </label>\n    <select name=\"brand\" #brandRef=\"ngModel\" [(ngModel)]=\"brand\">\n      <option disabled>Select Brand</option>\n      <option>Samsung</option>\n      <option>Apple</option>\n      <option>Oppo</option>\n      <option>Q-mobile</option>\n      <option>HTC</option>\n      <option>Motorolla</option>\n      <option>Lenovo</option>\n      <option>Black Berry</option>\n      <option>HUAWEI</option>\n    </select>\n    <div class=\"clearfix\"></div>\n\n    <label>Price\n      <span>*</span>\n    </label>\n    <input type=\"text\" class=\"phone\" placeholder=\"\" #priceRef=\"ngModel\" required name=\"price\" [(ngModel)]=\"price\">\n    <div class=\"clearfix\"></div>\n    <label>Quantity\n      <span>*</span>\n    </label>\n    <input type=\"text\" #QuantityRef=\"ngModel\" required name=\"Quantity\" [(ngModel)]=\"Quantity\">\n    <div class=\"clearfix\"></div>\n    <label>Processor\n      <span>*</span>\n    </label>\n    <input type=\"text\" #ProcessorRef=\"ngModel\" required name=\"Processor\" [(ngModel)]=\"Processor\">\n    <div class=\"clearfix\"></div>\n\n    <label>Operating System\n      <span>*</span>\n    </label>\n    <select name=\"operatingSystem\" #operatingSystemRef=\"ngModel\" [(ngModel)]=\"operatingSystem\">\n      <option disabled>Select OS</option>\n      <option>Android</option>\n      <option>IOS</option>\n    </select>\n    <div class=\"clearfix\"></div>\n    <label>SIM\n      <span>*</span>\n    </label>\n    <select name=\"SIM\" #memorysRef=\"ngModel\" [(ngModel)]=\"SIM\">\n      <option disabled>SIM</option>\n      <option>NONE</option>\n      <option>SINGLE</option>\n      <option>DUAL</option>\n    </select>\n    <div class=\"clearfix\"></div>\n    <label>Select Condition\n        <span>*</span>\n      </label>\n      <select name=\"Condition\" #ConditionRef=\"ngModel\" [(ngModel)]=\"Condition\">\n        <option disabled>Select Condition</option>\n        <option>New</option>\n        <option>Used</option>\n\n      </select>\n      <div class=\"clearfix\"></div>\n    <label>Select Color\n      <span>*</span>\n    </label>\n    <select name=\"color\" #colorRef=\"ngModel\" [(ngModel)]=\"color\">\n      <option disabled>Select Category</option>\n      <option>Black</option>\n      <option>Blue</option>\n      <option>White</option>\n      <option>Red</option>\n      <option>Silver</option>\n      <option>Grey</option>\n    </select>\n    <div class=\"clearfix\"></div>\n    <label>RAM\n      <span>*</span>\n    </label>\n    <input type=\"text\" #ramRef=\"ngModel\" required name=\"ram\" [(ngModel)]=\"ram\">\n    <select style=\"margin-left: 10px; width:60px\" name=\"rammemory\" #memoryRef=\"ngModel\" [(ngModel)]=\"rammemory\">\n      <option disabled>Select Memory</option>\n\n      <option>GB</option>\n      <option>MB</option>\n    </select>\n\n    <div class=\"clearfix\"></div>\n    <label>Storage Capacity\n        <span>*</span>\n      </label>\n      <input type=\"text\" #storagecapacityRef=\"ngModel\" required name=\"storagecapacity\" [(ngModel)]=\"storagecapacity\">\n      <select style=\"margin-left: 10px; width:60px\" name=\"storagememorys\" #storagememorysRef=\"ngModel\" [(ngModel)]=\"storagememorys\">\n        <option disabled>Select Memory</option>\n        <option>TB</option>\n        <option>GB</option>\n        <option>MB</option>\n      </select>\n      <div class=\"clearfix\"></div>\n  \n    <label>Front Camera\n      <span>*</span>\n    </label>\n    <input type=\"text\" #frontcameraRef=\"ngModel\" required name=\"frontcamera\" [(ngModel)]=\"frontcamera\">\n    <select style=\"margin-left: 10px; width:60px\" name=\"frontcammemorys\" #frontcammemoryRef=\"ngModel\" [(ngModel)]=\"frontcammemorys\">\n\n      <option selected>Mega Pixel</option>\n      <option>VGA</option>\n    </select>\n    <div class=\"clearfix\"></div>\n\n\n    <label>Back Camera\n      <span>*</span>\n    </label>\n    <input type=\"text\" #backcameraRef=\"ngModel\" required name=\"backcamera\" [(ngModel)]=\"backcamera\">\n    <select style=\"margin-left: 10px; width:60px\" name=\"backfrontcammemorys\" #backfrontcammemorysRef=\"ngModel\" [(ngModel)]=\"backfrontcammemorys\">\n\n      <option selected>Mega Pixel</option>\n      <option>VGA</option>\n    </select>\n    <div class=\"clearfix\"></div>\n\n\n  \n  </form>\n\n</div>\n<!-- <div class=\"form-group\">\n        <label><h3>Price</h3></label>\n        <input type=\"number\" #priceRef=\"ngModel\" required name=\"price\" [(ngModel)]=\"price\">\n        <div *ngIf=\"priceRef.errors && (priceRef.dirty || priceRef.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"priceRef.errors.required\">\n            Please Enter a Price\n          </div>\n        </div>\n      </div> -->"

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n \n\n \n\n\n\n\n    \n \n\n            <div class=\"form-group\">\n    <label><h3>Mileage</h3></label>\n    <input type=\"number\" #MileageRef=\"ngModel\" required name=\"Mileage\" [(ngModel)]=\"Mileage\">\n    <div *ngIf=\"MileageRef.errors && (MileageRef.dirty || MileageRef.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"MileageRef.errors.required\">\n        Please Enter Mileage\n      </div>\n    </div>\n  </div>\n\n\n      \n</div> -->\n\n<div class=\"post-ad-form\">\n  <form #form=\"ngForm\" novalidate>\n    <label>Brand\n      <span>*</span>\n    </label>\n    <select name=\"brand\" #brandRef=\"ngModel\" [(ngModel)]=\"brand\">\n     \n        <option disabled>Select Brand</option>\n        <option>HONDA</option>\n        <option>TOYOTA</option>\n        <option>Suzuki</option>\n        <option>Mercedes</option>\n        <option>Audi</option>\n        <option>Yamaha</option>\n      </select>\n      <div class=\"clearfix\"></div>\n      <label>Price\n        <span>*</span>\n      </label>\n      <input type=\"text\" class=\"phone\" placeholder=\"\" #priceRef=\"ngModel\" required name=\"price\" [(ngModel)]=\"price\">\n      <div class=\"clearfix\"></div>\n      <label>Select Color\n        <span>*</span>\n      </label>\n      <select name=\"color\" #colorRef=\"ngModel\" [(ngModel)]=\"color\">\n        <option disabled>Select Color</option>\n        <option>Black</option>\n        <option>Blue</option>\n        <option>White</option>\n        <option>Red</option>\n      </select>\n\n      <div class=\"clearfix\"></div>\n      <label>Select Condition\n        <span>*</span>\n      </label>\n      <select name=\"Condition\" #ConditionRef=\"ngModel\" [(ngModel)]=\"Condition\">\n        <option disabled>Select Condition</option>\n        <option>New</option>\n        <option>Used</option>\n\n      </select>\n      <div class=\"clearfix\"></div>\n      <label>Model\n        <span>*</span>\n      </label>\n      <input type=\"text\" #ModelRef=\"ngModel\" required name=\"Models\" [(ngModel)]=\"Models\">\n      <div class=\"clearfix\"></div>\n\n      <label>Select Feul Type\n        <span>*</span>\n      </label>\n      <select name=\"Feultype\" #FeultypeRef=\"ngModel\" [(ngModel)]=\"Feultype\">\n        <option disabled>Select Feul Type</option>\n        <option>Petrol</option>\n        <option>CNG</option>\n        <option>Diesel</option>\n      </select>\n\n      <div class=\"clearfix\"></div>\n      <label>Mileage\n        <span></span>\n      </label>\n      <input type=\"text\" #MileageRef=\"ngModel\" required name=\"Mileage\" [(ngModel)]=\"Mileage\">\n      <div class=\"clearfix\"></div>\n      <label>Door\n        <span></span>\n      </label>\n      <input type=\"text\" #DoorRef=\"ngModel\" required name=\"Door\" [(ngModel)]=\"Door\">\n      <div class=\"clearfix\"></div>\n      <label>Quantity\n        <span>*</span>\n      </label>\n      <input type=\"text\" #QuantityRef=\"ngModel\" required name=\"Quantity\" [(ngModel)]=\"Quantity\">\n      <div class=\"clearfix\"></div>\n  </form>\n</div>"

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  my-account works!\n</p>\n<button type=\"submit\" (click)=\"becomevendor()\" *ngIf=\"!isvendor\"  class=\"btn  btn-primary\">Become Vendor</button>\n\n<button type=\"submit\" (click)=\"logout()\"  class=\"btn  btn-danger\">logout</button>\n\n\n<ng-template #else_temp>No its False</ng-template>-->\n<!--           \n    <div id=\"wrapper\">\n         <div class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"adjust-nav\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar-collapse\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">\n                    \n\n                    </a>\n                    \n                </div>\n              \n                <span class=\"logout-spn\" >\n               \n<button type=\"submit\" (click)=\"logout()\"  class=\"btn  btn-default\">logout</button>\n                </span>\n            </div>\n        </div>\n        \n        \n        <nav class=\"navbar-default navbar-side\" role=\"navigation\">\n            <div class=\"sidebar-collapse\">\n                <ul class=\"nav\" id=\"main-menu\">\n                 \n\n\n                    <li class=\"active-link\">\n                        <a [routerLink]=\"['myshops']\" ><i class=\"fa fa-desktop \"></i>My Shops <span class=\"badge\">Included</span></a>\n                    </li>\n                   \n\n                    <li>\n                        <a href=\"ui.html\"><i class=\"fa fa-table \"></i>Messages  <span class=\"badge\">Included</span></a>\n                    </li>\n                    <li>\n                        <a href=\"blank.html\"><i class=\"fa fa-edit \"></i>Payment <span class=\"badge\">Included</span></a>\n                    </li>\n\n\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-qrcode \"></i>Settings</a>\n                    </li>\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-bar-chart-o\"></i>My Link Two</a>\n                    </li>\n\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-edit \"></i>My Link Three </a>\n                    </li>\n                    <li>\n                        <a href=\"#\"><i class=\"fa fa-table \"></i>My Link Four</a>\n                    </li>\n                     <li>\n                        <a href=\"#\"><i class=\"fa fa-edit \"></i>My Link Five </a>\n                    </li>\n                    \n                </ul>\n                            </div>\n\n        </nav>\n         \n       \n        <div id=\"page-wrapper\" >\n            <div id=\"page-inner\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                     <h2>User Account</h2>   \n                    </div>\n                </div>              \n               \n                  <hr />\n                <div class=\"row\">\n                    <div class=\"col-lg-12 \">\n                        <div class=\"alert alert-info\">\n                             <strong>Welcome {{user}} ! </strong> \n                        </div>\n                       \n                    </div>\n                    </div>\n                \n                            <div class=\"row text-center pad-top\">\n               <router-outlet></router-outlet>\n              </div>\n              \n\t\t\t\t  <div class=\"row\">\n                    <div class=\"col-lg-12 \">\n\t\t\t\t\t<br/>\n                        <div class=\"alert alert-danger\">\n                             <strong>Want More Icons Free ? </strong> Checkout fontawesome website and use any icon <a target=\"_blank\" href=\"http://fortawesome.github.io/Font-Awesome/icons/\">Click Here</a>.\n                        </div>\n                       \n                    </div>\n                    </div>\n                 \n    </div>\n          \n            </div>\n       \n        </div>\n\n          -->\n\n            <div class=\"hold-transition skin-blue sidebar-mini\">\n            <div class=\"wrapper\">\n            \n              <!-- Main Header -->\n              <header class=\"main-header\">\n            \n                <!-- Logo -->\n                <a href=\"http://localhost:4200\" class=\"logo\">\n                  <!-- mini logo for sidebar mini 50x50 pixels -->\n                  <span class=\"logo-mini\"><b>A</b>LT</span>\n                  <!-- logo for regular state and mobile devices -->\n                  <span class=\"logo-lg\"><b>ShopO</b>Mania</span>\n                </a>\n            \n                <!-- Header Navbar -->\n                <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n                  <!-- Sidebar toggle button-->\n                  <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                  </a>\n                  <!-- Navbar Right Menu -->\n                  <div class=\"navbar-custom-menu\">\n                    <ul class=\"nav navbar-nav\">\n                      <!-- Messages: style can be found in dropdown.less-->\n                      <li class=\"dropdown messages-menu\">\n                        <!-- Menu toggle button -->\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-envelope-o\"></i>\n                          <span class=\"label label-success\">4</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                          <li class=\"header\">You have 4 messages</li>\n                          <li>\n                            <!-- inner menu: contains the messages -->\n                            <ul class=\"menu\">\n                              <li><!-- start message -->\n                                <a href=\"#\">\n                                  <div class=\"pull-left\">\n                                    <!-- User Image -->\n                                    <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                                  </div>\n                                  <!-- Message title and timestamp -->\n                                  <h4>\n                                    Support Team\n                                    <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                                  </h4>\n                                  <!-- The message -->\n                                  <p>Why not buy a new awesome theme?</p>\n                                </a>\n                              </li>\n                              <!-- end message -->\n                            </ul>\n                            <!-- /.menu -->\n                          </li>\n                          <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n                        </ul>\n                      </li>\n                      <!-- /.messages-menu -->\n            \n                      <!-- Notifications Menu -->\n                      <li class=\"dropdown notifications-menu\">\n                        <!-- Menu toggle button -->\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-bell-o\"></i>\n                          <span class=\"label label-warning\">10</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                          <li class=\"header\">You have 10 notifications</li>\n                          <li>\n                            <!-- Inner Menu: contains the notifications -->\n                            <ul class=\"menu\">\n                              <li><!-- start notification -->\n                                <a href=\"#\">\n                                  <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                                </a>\n                              </li>\n                              <!-- end notification -->\n                            </ul>\n                          </li>\n                          <li class=\"footer\"><a href=\"#\">View all</a></li>\n                        </ul>\n                      </li>\n                      <!-- Tasks Menu -->\n                      <li class=\"dropdown tasks-menu\">\n                        <!-- Menu Toggle Button -->\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-flag-o\"></i>\n                          <span class=\"label label-danger\">9</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                          <li class=\"header\">You have 9 tasks</li>\n                          <li>\n                            <!-- Inner menu: contains the tasks -->\n                            <ul class=\"menu\">\n                              <li><!-- Task item -->\n                                <a href=\"#\">\n                                  <!-- Task title and progress text -->\n                                  <h3>\n                                    Design some buttons\n                                    <small class=\"pull-right\">20%</small>\n                                  </h3>\n                                  <!-- The progress bar -->\n                                  <div class=\"progress xs\">\n                                    <!-- Change the css width attribute to simulate progress -->\n                                    <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                                         aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                                      <span class=\"sr-only\">20% Complete</span>\n                                    </div>\n                                  </div>\n                                </a>\n                              </li>\n                              <!-- end task item -->\n                            </ul>\n                          </li>\n                          <li class=\"footer\">\n                            <a href=\"#\">View all tasks</a>\n                          </li>\n                        </ul>\n                      </li>\n                      <!-- User Account Menu -->\n                      <li class=\"dropdown user user-menu\">\n                        <!-- Menu Toggle Button -->\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <!-- The user image in the navbar-->\n                          <img [src]=\"Images\" (error)=\"setDefaultPic()\" class=\"user-image\" alt=\"User Image\">\n                          <!-- hidden-xs hides the username on small devices so only the image appears. -->\n                          <span class=\"hidden-xs\">{{user}}</span>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                          <!-- The user image in the menu -->\n                          <li class=\"user-header\">\n                            <img [src]=\"Images\" (error)=\"setDefaultPic()\" class=\"img-circle\" alt=\"User Image\">\n            \n                            <p>\n                             {{user}}\n                             <!-- Nov. 2012 -->\n                              <small>Member since {{sincemember | date}} </small>\n                            </p>\n                          </li>\n                          <!-- Menu Body -->\n                          <li class=\"user-body\">\n                            <div class=\"row\">\n                              <div class=\"col-xs-4 text-center\">\n                                <a href=\"#\">Followers</a>\n                              </div>\n                              <div class=\"col-xs-4 text-center\">\n                                <a href=\"#\">Sales</a>\n                              </div>\n                              <div class=\"col-xs-4 text-center\">\n                                <a href=\"#\">Friends</a>\n                              </div>\n                            </div>\n                            <!-- /.row -->\n                          </li>\n                          <!-- Menu Footer-->\n                          <li class=\"user-footer\">\n                            <!-- <div class=\"pull-left\">\n                              <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                            </div> -->\n                            <div class=\"\">\n                              <a  class=\"btn btn-default btn-block btn-flat\"(click)=\"logout()\" >Sign out</a>\n                            </div>\n                          </li>\n                        </ul>\n                      </li>\n                      <!-- Control Sidebar Toggle Button -->\n                      <li>\n                        <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n                      </li>\n                    </ul>\n                  </div>\n                </nav>\n              </header>\n              <!-- Left side column. contains the logo and sidebar -->\n              <aside class=\"main-sidebar\">\n            \n                <!-- sidebar: style can be found in sidebar.less -->\n                <section class=\"sidebar\">\n            \n                  <!-- Sidebar user panel (optional) -->\n                  <div class=\"user-panel\">\n                    <div class=\"pull-left image\">\n                      \n                      <img [src]=\"Images\" (error)=\"setDefaultPic()\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <div class=\"pull-left info\">\n                      <p>{{user}}</p>\n                      <!-- Status -->\n                      <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n                    </div>\n                  </div>\n            \n                  <!-- search form (Optional) -->\n                  <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n                      <span class=\"input-group-btn\">\n                          <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                          </button>\n                        </span>\n                    </div>\n                  </form>\n                  <!-- /.search form -->\n            \n                  <!-- Sidebar Menu -->\n                  <ul class=\"sidebar-menu\" data-widget=\"tree\">\n                    <li class=\"header\">HEADER</li>\n                    <!-- Optionally, you can add icons to the links -->\n                    <li class=\"active\"><a [routerLink]=\"['accountsetting']\"><i class=\"glyphicon glyphicon-cog\"></i> <span>Account Setting</span></a></li>\n                    <li><a [routerLink]=\"['orders']\"><i class=\"fa fa-link\"></i> <span>Orders</span></a></li>\n                    <li class=\"treeview\">\n                      <a [routerLink]=\"['myshops']\"><i class=\"fa fa-link\"></i> <span>Your Shop</span>\n                        <span class=\"pull-right-container\">\n                            <i class=\"fa fa-angle-left pull-right\"></i>\n                          </span>\n                      </a>\n                      <ul class=\"treeview-menu\">\n                        <li><a href=\"#\">Link in level 2</a></li>\n                        <li><a href=\"#\">Link in level 2</a></li>\n                      </ul>\n                    </li>\n                  </ul>\n                  <!-- /.sidebar-menu -->\n                </section>\n                <!-- /.sidebar -->\n              </aside>\n            \n              <!-- Content Wrapper. Contains page content -->\n              <div class=\"content-wrapper\">\n                <!-- Content Header (Page header) -->\n          \n            \n                <!-- Main content -->\n                <section class=\"content container-fluid\">\n            \n                  <!--------------------------\n                    | Your Page Content Here |\n                    -------------------------->\n                    <router-outlet ></router-outlet>\n                </section>\n                <!-- /.content -->\n              \n              </div>\n              <!-- /.content-wrapper -->\n            \n              <!-- Main Footer -->\n              <footer class=\"main-footer\">\n                <!-- To the right -->\n                <div class=\"pull-right hidden-xs\">\n                  Anything you want\n                </div>\n                <!-- Default to the left -->\n                <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\n              </footer>\n            \n              <!-- Control Sidebar -->\n              <aside class=\"control-sidebar control-sidebar-dark\">\n                <!-- Create the tabs -->\n                <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n                  <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n                  <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n                </ul>\n                <!-- Tab panes -->\n                <div class=\"tab-content\">\n                  <!-- Home tab content -->\n                  <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\n                    <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n                    <ul class=\"control-sidebar-menu\">\n                      <li>\n                        <a href=\"javascript:;\">\n                          <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n            \n                          <div class=\"menu-info\">\n                            <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n            \n                            <p>Will be 23 on April 24th</p>\n                          </div>\n                        </a>\n                      </li>\n                    </ul>\n                    <!-- /.control-sidebar-menu -->\n            \n                    <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n                    <ul class=\"control-sidebar-menu\">\n                      <li>\n                        <a href=\"javascript:;\">\n                          <h4 class=\"control-sidebar-subheading\">\n                            Custom Template Design\n                            <span class=\"pull-right-container\">\n                                <span class=\"label label-danger pull-right\">70%</span>\n                              </span>\n                          </h4>\n            \n                          <div class=\"progress progress-xxs\">\n                            <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n                          </div>\n                        </a>\n                      </li>\n                    </ul>\n                    <!-- /.control-sidebar-menu -->\n            \n                  </div>\n                  <!-- /.tab-pane -->\n                  <!-- Stats tab content -->\n                  <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n                  <!-- /.tab-pane -->\n                  <!-- Settings tab content -->\n                  <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n                    <form method=\"post\">\n                      <h3 class=\"control-sidebar-heading\">General Settings</h3>\n            \n                      <div class=\"form-group\">\n                        <label class=\"control-sidebar-subheading\">\n                          Report panel usage\n                          <input type=\"checkbox\" class=\"pull-right\" checked>\n                        </label>\n            \n                        <p>\n                          Some information about this general settings option\n                        </p>\n                      </div>\n                      <!-- /.form-group -->\n                    </form>\n                  </div>\n                  <!-- /.tab-pane -->\n                </div>\n              </aside>\n              <!-- /.control-sidebar -->\n              <!-- Add the sidebar's background. This div must be placed\n              immediately after the control sidebar -->\n              <div class=\"control-sidebar-bg\"></div>\n            </div>\n           \n        \n        </div>\n        \n        "

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n        <div class=\"row\"   >\n            <div class=\"col-md-3\" *ngFor=\"let shpinfo of shopinfo \">\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">\n                            <span class=\"glyphicon glyphicon-bookmark\"></span> {{shpinfo.ShopName}} {{shpinfo.CategoriesName}} {{shpinfo.ShopID}} </h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-4 col-md-4\">\n\n                                    <button class=\"btn btn-primary btn-lg\" (click)=\"getallProduct(shpinfo.ShopID,shpinfo.CategoryID)\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> Product</button>\n                                    <button class=\"btn btn-success btn-lg\"  (click)=\"activeallProduct(shpinfo.ShopID,shpinfo.CategoryID)\"><i class=\"fa fa-refresh fa-spin\"></i> Active Products</button>\n                                    <button class=\"btn btn-info btn-lg\" (click)=\"deactiveallProduct(shpinfo.ShopID,shpinfo.CategoryID,shpinfo.AdId)\"><i class=\"fa fa-spinner fa-spin\"></i> Deactivate Product</button>\n                              <!-- <a  class=\"btn btn-danger btn-lg\" role=\"button\" (click)=\"getallProduct(shpinfo.ShopID,shpinfo.CategoryID)\"><span class=\"glyphicon glyphicon-list-alt\"></span> <br/>Product Items</a>\n                              <a class=\"btn btn-warning btn-lg\" role=\"button\"  (click)=\"activeallProduct(shpinfo.ShopID,shpinfo.CategoryID)\"><span class=\"glyphicon glyphicon-bookmark\"></span> <br/>Active Items</a>\n                              <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"deactiveallProduct(shpinfo.ShopID,shpinfo.CategoryID,shpinfo.AdId)\"><span class=\"glyphicon glyphicon-signal\"  ></span> <br/>DeActive Items</a>\n                              <a  class=\"btn btn-primary btn-lg\" role=\"button\"><span class=\"glyphicon glyphicon-comment\"></span> <br/>Comments</a> -->\n                            </div>\n                            <!-- <div class=\"col-xs-6 col-md-6\">\n                              <a href=\"#\" class=\"btn btn-success btn-lg\" role=\"button\"><span class=\"glyphicon glyphicon-user\"></span> <br/>Users</a>\n                              <a href=\"#\" class=\"btn btn-info btn-lg\" role=\"button\"><span class=\"glyphicon glyphicon-file\"></span> <br/>Notes</a>\n                              <a href=\"#\" class=\"btn btn-primary btn-lg\" role=\"button\"><span class=\"glyphicon glyphicon-picture\"></span> <br/>Photos</a>\n                              <a href=\"#\" class=\"btn btn-primary btn-lg\" role=\"button\"><span class=\"glyphicon glyphicon-tag\"></span> <br/>Tags</a>\n                            </div> -->\n                        </div>\n                        <a href=\"http://www.jquery2dotnet.com/\" class=\"btn btn-success btn-lg btn-block\" role=\"button\"><span class=\"glyphicon glyphicon-globe\"></span> Website</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n      \n    </div>\n\n\n\n    <div class=\"container\" *ngIf=\"_global.shopitems != undefined || _global.shopitems != null\">  \n\n            <app-shopitems></app-shopitems>\n    </div>"

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar\">\r\n  <div class=\"container-fluid\" >\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">All Categories</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\" >\r\n      <li class=\"active\" ><a href=\"#\">Home</a></li>\r\n      <li><a href=\"#\">Electronics</a></li>\r\n      <li><a href=\"#\">Mobiles & Tablets</a></li>\r\n      <li><a href=\"#\">Baby & Toys</a></li>\r\n       <li><a href=\"#\">Perfumes & Beauty</a></li>\r\n      <li><a href=\"#\">Sports & Fitness</a></li>\r\n      <li><a href=\"#\">Books</a></li>\r\n       <li><a href=\"#\">Home</a></li>\r\n      <li><a href=\"#\">Automative</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = "<main-header *ngIf=\"pagesJSON.main_header\"></main-header>\n \n\n<form  ngNoForm target=\"_http://localhost:4200\"  action=  \"http://localhost:8081/api/UploadUserProfilePhoto/{{userid}}\"  method=\"post\" enctype=\"multipart/form-data\">\n         <div class=\"form-group\">\n        <input type=\"file\" id=\"userPhoto\"   required #userPhotos=\"ngModel\" required  class=\"form-control\" name=\"userPhoto\" [(ngModel)]=\"userPhoto\"/><br/>\n         </div>\n     \n        <input type=\"submit\" name=\"submit\" value=\"Submit\" /><br/>\n    </form>  \n\n\n    <form   #form=\"ngForm\"  id=\"form1\" target=\"_http://localhost:4200\" action=  \"http://localhost:8081/api/UserProfilePhoto \"  method=\"post\" enctype=\"multipart/form-data\">\n         <div class=\"form-group\">\n        <input type=\"file\"    (change)=\"fileEvent($event)\"  required #user1PhotosRef=\"ngModel\" required  class=\"form-control\" name=\"userPhoto1\" [(ngModel)]=\"userPhoto1\"/><br/>\n          <input type=\"file\"   required #user2PhotosRef=\"ngModel\" required  class=\"form-control\" name=\"userPhoto2\" [(ngModel)]=\"userPhoto2\"/><br/>\n    </div>\n    \n     \n    </form>  \n   <input type=\"submit\" name=\"submit\"(click)=\"upload()\"  /><br/>\n<div (click)=\"upload()\" style=\"color:blue;\">Submit the form by clicking this</div>\n<div><input type=\"submit\" name=\"submit\" (click)=\"upload()\"  /></div>\n\n\n\n <form (ngSubmit)=\"submit()\" #crisisForm=\"ngForm\">\n   <input type=\"text\" name=\"name\" >\n   <button type=\"submit\">Submit</button>\n   <button type=\"button\" (click)=\"preview()\">Preview</button>\n   <button type=\"reset\" (click)=\"reset()\">Reset</button>\n</form>\n\n\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer>"

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = "<main-header *ngIf=\"pagesJSON.main_header\"></main-header>\n<main-search-bar *ngIf=\"pagesJSON.main_search_bar\"></main-search-bar>\n\n<div class=\"submit-ad main-grid-border\">\n\t<div class=\"container\">\n\t\t<h2 class=\"head\" style=\"color:darkslateblue\">Post an Ad</h2>\n\t\t<div class=\"post-ad-form\">\n\t\t\t<form #form=\"ngForm\" novalidate>\n\t\t\t\t<label>Select Post Type\n\t\t\t\t\t<span>*</span>\n\t\t\t\t</label>\n\t\t\t\t<select name=\"posttype\" #posttypeRef=\"ngModel\" [(ngModel)]=\"posttype\"  (ngModelChange)=\"test($event)\" class=\"form-control\">\n\t\t\t\t\t<option disabled>Select Post Type</option>\n\t\t\t\t\t<option *ngIf=\"userdata != undefined && IsVendor != 0\">SHOP Ad </option>\n\t\t\t\t\t<option>LOCAL Ad</option>\n\t\t\t\t</select>\n\n\n\t\t\t\t<label>Select Category\n\t\t\t\t\t<span>*</span>\n\t\t\t\t</label>\n\t\t\t\t<select name=\"categories\" #categoriesRef=\"ngModel\" [(ngModel)]=\"categories\" class=\"form-control\" (ngModelChange)=\"getcategoriestype($event)\">\n\t\t\t\t\t<option disabled>Select Category</option>\n\t\t\t\t\t<option *ngFor=\"let itemCategories of Categories\" [value]=\"itemCategories.CategoryID\">{{itemCategories.CategoriesName}}</option>\n\n\t\t\t\t</select>\n\n\t\t\t\t<label *ngIf=\"showcatetype ==  true\">Select Category Type\n\t\t\t\t\t<span>*</span>\n\t\t\t\t</label>\n\t\t\t\t<select *ngIf=\"showcatetype ==  true\" name=\"categoriestype\" #categoriestypeRef=\"ngModel\" [(ngModel)]=\"categoriestype\" class=\"form-control\">\n\t\t\t\t\t<option disabled>Select Category Type</option>\n\t\t\t\t\t<option *ngFor=\"let itemCategories of Categoriestypes\" [value]=\"itemCategories.CategorytypeID\">{{itemCategories.CategoriestypeName}}</option>\n\n\t\t\t\t</select>\n\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t<mobilecontrol *ngIf=\"cateId ==  1\"></mobilecontrol>\n\t\t\t\t<motorcontrol *ngIf=\"cateId ==  3\"></motorcontrol>\n\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t<label>Ad Title\n\t\t\t\t\t<span>*</span>\n\t\t\t\t</label>\n\t\t\t\t<input type=\"text\" class=\"phone\" placeholder=\"\" name=\"adtitle\" #adtitleRef=\"ngModel\" [(ngModel)]=\"adtitle\">\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t<label>Ad Description\n\t\t\t\t\t<span>*</span>\n\t\t\t\t</label>\n\t\t\t\t<textarea class=\"mess\" placeholder=\"Write few lines about your product\" name=\"description\" #descriptionRef=\"ngModel\" [(ngModel)]=\"description\"></textarea>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t<div class=\"upload-ad-photos\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"userdata == undefined\" class=\"personal-details\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Your Name <span>*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"name\" placeholder=\"\" name=\"Name\" #NameRef=\"ngModel\" [(ngModel)]=\"Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Your Mobile No <span>*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"phone\" placeholder=\"\" name=\"Phoneno\" #PhonenoRef=\"ngModel\" [(ngModel)]=\"Phoneno\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Your Email Address<span>*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"email\" placeholder=\"\" name=\"Email\" #EmailRef=\"ngModel\" [(ngModel)]=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <script src=\"js/filedrag.js\"></script> -->\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t <form ngNoForm id=\"form1\" target=\"_blank\" action=\"http://localhost:8081/api/PostAdImages \"\n\t\t\t\t\t\t\t\t\t method=\"post\" enctype=\"multipart/form-data\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"userPhoto1\" (change)=\"fileEvent1($event)\" required #user1Photos=\"ngModel\" required class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t name=\"userPhoto1\" [(ngModel)]=\"userPhoto1\" /><br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" id=\"userPhoto2\"   (change)=\"fileEvent2($event)\" required #user2Photos=\"ngModel\" required class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t name=\"userPhoto2\" [(ngModel)]=\"userPhoto2\"  /><br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"userdata != undefined\" type=\"submit\" value=\"POST\" (click)=\"postads(form.value)\">\n\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"userdata == undefined\" type=\"submit\" value=\"POST\" (click)=\"PostopenAds(form.value)\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</form> \n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\n\t\t\t</form>\n\n\n\n\t\t</div>\n\t</div>\n</div>\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer>"

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"container\">\n\t\t<table id=\"cart\" class=\"table table-hover table-condensed\" *ngIf=\"orderdata.length > 0\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t  <!-- <th style=\"width:50%\">Product</th>\n\t\t\t\t\t\t\t\t<th style=\"width:10%\">Price</th>\n\t\t\t\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\n\t\t\t\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\n\t\t\t\t  <th style=\"width:10%\"></th> -->\n\t\t\t\t  \n\t\t\t\t\t\t\t\t<th style=\"width:50%\">Product</th>\n\t\t\t\t\t\t\t\t<th style=\"width:20%\">Price</th>\n\t\t\t\t\t\t\t\t<th style=\"width:10%\">Quantity</th>\n\t\t\t\t\t\t\t\t<th style=\"width:5%\" class=\"text-center\">Receieve</th>\n\t\t\t\t\t\t\t\t<th style=\"width:15%\">Order Date</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody  >\n\t\t\t\t\t\t\t<tr *ngFor=\"let items of orderdata ; let i = index\" (click)=\"itemdetail(items.CategoryID,items.AdId,items.ShopID)\">\n\t\t\t\t\t\t\t\t<td data-th=\"Product\" >\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images}} \" alt=\"...\" class=\"img-responsive\"/></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\" >\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">{{items.ProductName}} </h4>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t  </td>\n\t\n\t\t\t\t\t\t\t\t<td data-th=\"Price\">{{items.price }}</td>\n\t\t\t\t\t\t\t\t<td data-th=\"Quantity\">\n\t\t\t\t\t{{items.Quantity}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t  <td data-th=\"Subtotal\" class=\"text-center\"><span *ngIf=\"items.Order_received != false\" >Yes</span> <span *ngIf=\"items.Order_received != true\" >No</span></td>\n\t\t\t\t  <td data-th=\"Subtotal\" class=\"text-center\">{{items.Date | date :'longDate'}}</td>\n\t\t\t\t\t\t\t\t<!-- <td class=\"actions\" data-th=\"\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-sm\" ><i class=\"fa fa-edit\"></i></button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\" (click)=\"popcartitem(i)\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</td> -->\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tbody>\n\t\n\t\t\t\t\t\t<!-- <tfoot>\n\t\t\t\t\t\t\t<tr class=\"visible-xs\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total </strong></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><a href=\"http://localhost:4200\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\n\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\n\t\t\t\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $1.99  \t </strong></td>\n\t\t\t\t\t\t\t\t<td><a  class=\"btn btn-success btn-block\"  (click)=\"checkout()\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot> -->\n\t\t\t\t\t\t\n\t\t\t\t\t</table>\n\n\t\t\t\t\t\n</div> \n\n\n<div style=\"font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif;\" *ngIf=\"orderdata.length == 0\">\n\t\t<table style=\"width: 100%;\">\n\t\t  <tr>\n\t\t\t<td></td>\n\t\t\t<td bgcolor=\"#FFFFFF \">\n\t\t\t  <div style=\"padding: 15px; max-width: 600px;margin: 0 auto;display: block; border-radius: 0px;padding: 0px; border: 1px solid lightseagreen;\">\n\t\t\t\t<table style=\"width: 100%;background: #00b6e2 ;\">\n\t\t\t\t  <tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>\n\t\t\t\t\t  <div>\n\t\t\t\t\t\t<table width=\"100%\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t<td rowspan=\"2\" style=\"text-align:center;padding:10px;\">\n\t\t\t\t\t\t\t\t<img style=\"float:left;width:264px; \"  src=\"http://localhost:8081/api/GetSliderImage/3logo.png\" /> \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span style=\"color:white;float:right;font-size: 13px;font-style: italic;margin-top: 20px; padding:10px; font-size: 14px; font-weight:normal;\">\n\t\t\t\t\t\t\t\t\"When you want, where you want.\"<span></span></span></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t  </tr>\n\t\t\t\t</table>\n\t\t\t\t<table style=\"padding: 10px;font-size:14px; width:100%;\">\n\t\t\t\t  <tr>\n\t\t\t\t\t<td style=\"padding:10px;font-size:14px; width:100%;\">\n\t\t\t\t\t\t<p>Hi,{{userdata[0].Name}}</p>\n\t\t\t\t\t\t<p><br /> You have no Order</p>\n\t\t\t\t\t\n\t\t\t\t\t  <!-- /Callout Panel -->\n\t\t\t\t\t  <!-- FOOTER -->\n\t\t\t\t\t </td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t  <td>\n\t\t\t\t\t <div align=\"center\" style=\"font-size:12px; margin-top:20px; padding:5px; width:100%; background:#eee;\">\n\t\t\t\t\t\t© 2018<a href=\"http://seedoconline.com\" target=\"_blank\" style=\"color:#333; text-decoration: none;\">shopomania.com</a>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</td>\n\t\t\t\t  </tr>\n\t\t\t\t</table>\n\t\t\t \n\t\t\t</div>"

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = "<main-header *ngIf=\"pagesJSON.main_header\"></main-header>\n<!-- <div class=\"container\">\n\n  <h1>Sign Up</h1>\n  \n  <form #form=\"ngForm\" (ngSubmit)=\"SignUp(form.value)\" novalidate>\n    \n \n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" #emailRef=\"ngModel\" required  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n       <div *ngIf=\"emailRef.errors && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"emailRef.errors.required\">\n          Please Enter a Email\n        </div>\n        <div *ngIf=\"emailRef.errors && emailRef.errors.pattern\">\n          Please Enter valid Email\n        </div>\n      </div>\n   \n   \n   \n    </div>\n      <div class=\"form-group\">\n      <label>Password </label>\n      <input type=\"password\" #passwordRef=\"ngModel\" required minlength=\"8\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\n     <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"passwordRef.errors.required\">\n          Please Enter a Password\n        </div>\n        <div *ngIf=\"passwordRef.errors.minlength\">\n          Please Enter atleast 8 characters\n        </div>\n       \n      </div>\n    \n    </div>\n    <div class=\"form-group\">\n      <label>Phone number </label>\n      <input type=\"text\" #phonenoRef=\"ngModel\" required minlength=\"3\" pattern=\"(^\\+[0-9]{2}|^\\+[0-9]{2}\\(0\\)|^\\(\\+[0-9]{2}\\)\\(0\\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\\-\\s]{10}$)\" class=\"form-control\" name=\"phone_no\" [(ngModel)]=\"phone_no\">\n        \n         <div *ngIf=\"phonenoRef.errors && (phonenoRef.dirty || phonenoRef.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"phonenoRef.errors.required\">\n          Please Enter a Phone number\n        </div>\n        <div *ngIf=\"phonenoRef.errors && phonenoRef.errors.pattern\">\n          Please Enter valid  Phone number\n        </div>\n       \n      </div>\n    \n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <div class=\"radio\" *ngFor=\"let genders of genderss\">\n        <label>\n          <input type=\"radio\" #genderRef=\"ngModel\"  name=\"gender\"   [(ngModel)]=\"gender\" [value]=\"genders.value\"  >\n          {{genders.display}}\n        </label>\n      </div>\n    </div>\n     \n    <div class=\"form-group\">\n      <label>Country</label>\n      <select  name=\"country\" class=\"form-control\" (ngModelChange)=\"getcountryId($event)\" #countryRef=\"ngModel\" [(ngModel)]=\"country\">\n       <option value=\"\" selected disabled>Select Country</option>\n        <option  *ngFor=\"let Countrys of Country\"    [value]=\"Countrys.CountryID\">{{Countrys.CountryName}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\" *ngIf=\"showcityddl\">\n      <label>City</label>\n      <select name=\"cityID\" class=\"form-control\" #cityRef=\"ngModel\" [(ngModel)]=\"cityID\">\n         <option value=\"\" selected disabled>Select City</option>\n        <option *ngFor=\"let Citys of City\" [ngValue]=\"Citys.CityID\">{{Citys.CityName}}</option>\n      </select>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-warning  btn-block\">Sign Up</button>\n  </form>\n  \n \n</div> -->\n\n<div class=\"clearfix\"></div>\n<div class=\"container\">\n  <div id=\"main-content\">\n\n    <div class=\"main-content\">\n\n\n\n      <div id=\"col-main\" class=\"page-login\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"form-wrapper\">\n\n              <h2 class=\"heading\">Create New Account</h2>\n              <p>Create your own Shopomania account</p>\n\n              <form #form=\"ngForm\" (ngSubmit)=\"SignUp(form.value)\" novalidate>\n                <input type=\"hidden\" value=\"create_customer\" name=\"form_type\" />\n                <input type=\"hidden\" name=\"utf8\" value=\"✓\" />\n\n     \n                <div id=\"register-form\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">User Name\n                            <span class=\"req\">*</span>\n                          </label>\n                        <input type=\"text\" #nameRef=\"ngModel\" required minlength=\"4\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\">\n               \n                        <div *ngIf=\"nameRef.errors && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger\">\n                          <div *ngIf=\"nameRef.errors.required\">\n                            Please Enter a User Name\n                          </div>\n                          <div *ngIf=\"nameRef.errors.minlength\">\n                            Please Enter atleast 4 characters\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"email\">Email\n                              <span class=\"req\">*</span>\n                            </label>\n                          <input type=\"text\" #emailRef=\"ngModel\" required  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\">\n                           <div *ngIf=\"emailRef.errors && (emailRef.dirty || emailRef.touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"emailRef.errors.required\">\n                              Please Enter a Email\n                            </div>\n                            <div *ngIf=\"emailRef.errors && emailRef.errors.pattern\">\n                              Please Enter valid Email\n                            </div>\n                          </div>\n                       \n                       \n                       \n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"email\">Password\n                                <span class=\"req\">*</span>\n                              </label>\n                            <input type=\"password\" #passwordRef=\"ngModel\" required minlength=\"8\"  class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\n                           <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"passwordRef.errors.required\">\n                                Please Enter a Password\n                              </div>\n                              <div *ngIf=\"passwordRef.errors.minlength\">\n                                Please Enter atleast 8 characters\n                              </div>\n                             \n                            </div>\n                          \n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"email\">Phone Number\n                                  <span class=\"req\">*</span>\n                                </label>\n                              <input type=\"text\" #phonenoRef=\"ngModel\" required minlength=\"3\" pattern=\"(^\\+[0-9]{2}|^\\+[0-9]{2}\\(0\\)|^\\(\\+[0-9]{2}\\)\\(0\\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\\-\\s]{10}$)\" class=\"form-control\" name=\"phone_no\" [(ngModel)]=\"phone_no\">\n                                \n                                 <div *ngIf=\"phonenoRef.errors && (phonenoRef.dirty || phonenoRef.touched)\" class=\"alert alert-danger\">\n                                <div *ngIf=\"phonenoRef.errors.required\">\n                                  Please Enter a Phone number\n                                </div>\n                                <div *ngIf=\"phonenoRef.errors && phonenoRef.errors.pattern\">\n                                  Please Enter valid  Phone number\n                                </div>\n                               \n                              </div>\n                            \n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Gender\n                                    <span class=\"req\">*</span>\n                                  </label>\n                                 \n                  \n                                 \n                                <div  *ngFor=\"let genders of genderss\">\n                                  <label>\n                                    <input type=\"radio\" #genderRef=\"ngModel\"  name=\"gender\"   [(ngModel)]=\"gender\" [value]=\"genders.value\"  >\n                                    {{genders.display}}\n                                  </label>\n                                </div> \n                              </div>\n                             \n\n                              <div class=\"form-group\">\n                                  <label>Country</label>\n                                  <select  name=\"country\" class=\"form-control\" (ngModelChange)=\"getcountryId($event)\" #countryRef=\"ngModel\" [(ngModel)]=\"country\">\n                                   <option value=\"\" selected disabled>Select Country</option>\n                                    <option  *ngFor=\"let Countrys of Country\"    [value]=\"Countrys.CountryID\">{{Countrys.CountryName}}</option>\n                                  </select>\n                                </div>\n                                <div class=\"form-group\" *ngIf=\"showcityddl\">\n                                  <label>City</label>\n                                  <select name=\"cityID\" class=\"form-control\" #cityRef=\"ngModel\" [(ngModel)]=\"cityID\">\n                                     <option value=\"\" selected disabled>Select City</option>\n                                    <option *ngFor=\"let Citys of City\" [ngValue]=\"Citys.CityID\">{{Citys.CityName}}</option>\n                                  </select>\n                                </div>\n                  <div class=\"control-wrapper last\">\n                    <button class=\"btn btn-default\" type=\"submit\"  [disabled]=\"!form.valid\">Register</button>\n                  </div>\n                </div>\n              </form>\n\n              <h2 class=\"semi-bold\">Sign up today and you'll be able to :</h2>\n              <ul class=\"list-unstyled list-benefits\">\n                <li>\n                  <i class=\"fa fa-check main-color\"></i> Speed your way through the checkout</li>\n                <li>\n                  <i class=\"fa fa-check main-color\"></i> Track your orders easily</li>\n                <li>\n                  <i class=\"fa fa-check main-color\"></i> Keep a record of all your purchases</li>\n              </ul>\n\n            </div>\n          </div>\n\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"form-wrapper\">\n              <div class=\"imagetest\">\n                <img src=\"assets/Images/logo/11.png\" class=\"img-responsive\" alt=\"logo\">\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<main-footer *ngIf=\"pagesJSON.main_footer\"></main-footer>\n\n<!--<div style=\"margin-top: 20px\" *ngIf=\"f\">\n    <div>Form details:-</div>\n    <pre>Is form valid?: <br>{{f.valid | json}}</pre>\n    <pre>Is form submitted?: <br>{{f.submitted | json}}</pre>\n    <pre>submitted value: <br>{{f.value | json}}</pre>\n  </div>-->"

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"jumbotron\">\r\n    <div class=\"container text-center\">\r\n      <p> search bar</p>\r\n      \r\n    </div>\r\n  </div>-->\r\n\r\n  <!-- <img src=\"assets/Images/anything-lg.png\" class=\"img-responsive brandImage\" alt=\"logo\"> -->\r\n"

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports = "\n<!-- products -->\n<div class=\"products\">\t \n  <div class=\"container\">\n      <!-- <div style=\"width: 220px; height: 200px\">\n          <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\n        </div> -->\n    <div class=\"col-md-9 product-w3ls-right\">\n      <!-- breadcrumbs --> \n      <ol class=\"breadcrumb breadcrumb1\">\n        <li><a href=\"index.html\">Home</a></li>\n        <li class=\"active\">Products</li>\n      </ol> \n      <div class=\"clearfix\"> </div>\n      <!-- //breadcrumbs -->\n      <div class=\"product-top\">\n        <h4>Products</h4>\n        <ul> \n          <!-- <li class=\"dropdown head-dpdn\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Filter By<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Low price</a></li> \n              <li><a href=\"#\">High price</a></li>\n              <li><a href=\"#\">Latest</a></li> \n              <li><a href=\"#\">Popular</a></li> \n            </ul> \n          </li> -->\n          <li class=\"dropdown head-dpdn\" >\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Brands<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\"  >\n                <li *ngFor=\"let item of _global.brand \" (click)=\"filterrecordbybrand(_global.items[0].CategoryID,item.Brand)\"><a >{{item.Brand}}</a></li> \n              <!-- <li><a >Honda</a></li> \n              <li><a href=\"#\">Brand2</a></li>\n              <li><a href=\"#\">Brand3</a></li> \n              <li><a href=\"#\">Brand4</a></li>  -->\n            </ul> \n          </li>\n        </ul>  \n        <div class=\"clearfix\"> </div>\n      </div>\n      <div class=\"products-row\">\n        <div class=\"col-md-3 product-grids\" (click)=\"itemdetail(item.CategoryID,item.AdId,item.Email)\" *ngFor=\"let item of _global.items | paginate: {itemsPerPage: 8, currentPage:page, id: '1'};\"> \n          <div class=\"agile-products\">\n            <div class=\"new-tag\"><h6>{{item.Condition}}<br></h6></div>\n            <a ><img src=\"http://localhost:8081/api/GetMainAdImage/{{item.Images.split(',')[0]}}\" class=\"img-responsive\" alt=\"img\"></a>\n            <div class=\"agile-product-text\">              \n              <h5><a >{{item.Title}}</a></h5> \n              <h6><del></del> {{item.price | currency :'PKR'}}</h6> \n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Leather Jacket\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart pw3ls-cart\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form> \n            </div>\n          </div> \n        </div>\n      \n        <div class=\"clearfix\"> </div>\n      </div>\n      <pagination-controls class=\"pagination\"(pageChange)=\"page = $event\" id=\"1\"\n      maxSize=\"8\"\n      directionLinks=\"true\"\n      autoHide=\"true\">\n</pagination-controls>`\n      <!-- add-products --> \n      <div class=\"w3ls-add-grids w3agile-add-products\">\n        <a href=\"#\"> \n          <h4>TOP 10 TRENDS FOR YOU FLAT <span>20%</span> OFF</h4>\n          <h6>Shop now <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></h6>\n        </a>\n      </div> \n      <!-- //add-products -->\n    </div>\n    <div class=\"col-md-3 rsidebar\" *ngIf=\"_global.items[0].operatingsystem != undefined\">\n  \n      <div class=\"rsidebar-top\">\n        <div class=\"slider-left\">\n          <h4>Filter By Price</h4>            \n          <div class=\"row row1 scroll-pane\" >\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'1000 - 5000',$event)\">1000 - 5000<i></i> </label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'6000-10000',$event)\"><i></i>6000 - 10000 </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'11000-15000',$event)\"><i></i>11000-15000  </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'16000-20000',$event)\"><i></i>16000-20000 </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'21000-25000',$event)\"><i></i>21000-25000 </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'30000-35000',$event)\"><i></i>45000 - 50000  </label> \n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'36000-100000',$event)\"><i></i>More</label> \n          </div> \n        </div>\n        \n        <div class=\"sidebar-row\">\n          <h4>Condition</h4>\n          <ul class=\"faq\">\n            <li class=\"item1\"><a ><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n              <ul>\n                <!-- <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'New',$event)\">New</a></li>\t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'Used',$event)\">Used</a></li>\t\t\t\t\t\t\t\t\t\t -->\n                <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'New',$event)\"><i></i>New</label> \n                <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'Used',$event)\"><i></i>Used</label> \t\t\t\t\t\t\n              </ul>\n            </li>\n            <li class=\"item2\"><a >Sim Memory<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n              <ul>\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'SINGLE',$event)\"><i></i>SINGLE</label> \n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(_global.items[0].CategoryID,'DUAL',$event)\"><i></i>DUAL</label> \t\t\t\t\t\t\n                <!-- <li class=\"subitem1\"><a href=\"#\">Watches</a></li>\t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a href=\"#\">Eyewear</a></li>\t\t\t \t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a href=\"#\">Jewellery</a></li>\t\t\t\t\t\t\t\t\t\t\n                <li class=\"subitem1\"><a href=\"#\">Footwear</a></li>\t\t\t\t\t\t\t\t\t\t -->\n              </ul>\n            </li>\n            <li class=\"item2\"><a >OperatingSystem<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n              <ul>\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(_global.items[0].CategoryID,'Android',$event)\"><i></i>Android</label>\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(_global.items[0].CategoryID,'IOS',$event)\"><i></i>IOS</label>\n        \t\t\t\t\t\t\t\t -\n              </ul>\n            </li>\n         \n          </ul>\n \n        </div>\n   \n        <div class=\"sidebar-row\">\n          <h4>Color</h4>\n          <div class=\"row row1 scroll-pane\">\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(_global.items[0].CategoryID,'White',$event)\"><i></i>White</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(_global.items[0].CategoryID,'Black',$event)\"><i></i>Black</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Gold',$event)\"><i></i>Gold</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Blue',$event)\"><i></i>Blue</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Orange',$event)\"><i></i>Orange</label>\n            <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(_global.items[0].CategoryID,'Brown',$event)\"><i></i> Brown</label> \n          </div>\n        </div>\t\t\t \n      </div>\n      \n  \n   \n   \n \n      <div class=\"related-row\">\n        <h4>YOU MAY ALSO LIKE</h4>\n        <div class=\"galry-like\">  \n          <a href=\"single.html\"><img src=\"/assets/more_assets/images/e1.png\" class=\"img-responsive\" alt=\"img\"></a>             \n          <h4><a href=\"products.html\">Audio speaker</a></h4> \n          <h5>$100</h5>       \n        </div>\n      </div>\n  \n    </div>\n    <!-- _global.items[0].FuelType -->\n    <div class=\"col-md-3 rsidebar\" *ngIf=\"_global.items[0].FuelType != undefined\">\n  \n        <div class=\"rsidebar-top\">\n          <div class=\"slider-left\">\n            <h4>Filter By Price</h4>            \n            <div class=\"row row1 scroll-pane\" >\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'10000-50000',$event)\">10000-50000<i></i> </label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'50000-100000',$event)\"><i></i>50000-100000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'100000-200000',$event)\"><i></i>100000-200000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'200000-300000',$event)\"><i></i>200000-300000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'300000-400000',$event)\"><i></i>300000-400000 </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'400000 - 500000',$event)\"><i></i>400000 - 500000  </label> \n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecordbysearch(_global.items[0].CategoryID,'500000-1000000',$event)\"><i></i>More</label> \n            </div> \n          </div>\n          \n          <div class=\"sidebar-row\">\n            <h4>Condition</h4>\n            <ul class=\"faq\">\n              <li class=\"item1\"><a ><span class=\"glyphicon glyphicon-menu-down\"></span></a>\n                <ul>\n                  <!-- <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'New',$event)\">New</a></li>\t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a (click)=\"filterrecord(searchitems[0].CategoryID,'Used',$event)\">Used</a></li>\t\t\t\t\t\t\t\t\t\t -->\n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'New',$event)\"><i></i>New</label> \n                  <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'Used',$event)\"><i></i>Used</label> \t\t\t\t\t\t\n                </ul>\n              </li>\n              <li class=\"item2\"><a >FuelType<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n                <ul>\n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'Petrol',$event)\"><i></i>Petrol</label> \n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'Diesel',$event)\"><i></i>Diesel</label> \n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  data-md-icheck (change)=\"filterrecord(searchitems[0].CategoryID,'CNG',$event)\"><i></i>CNG</label> \t\t\t\t\t\t\t\t\t\t\t\t\n                  <!-- <li class=\"subitem1\"><a href=\"#\">Watches</a></li>\t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a href=\"#\">Eyewear</a></li>\t\t\t \t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a href=\"#\">Jewellery</a></li>\t\t\t\t\t\t\t\t\t\t\n                  <li class=\"subitem1\"><a href=\"#\">Footwear</a></li>\t\t\t\t\t\t\t\t\t\t -->\n                </ul>\n              </li>\n              <!-- <li class=\"item2\"><a >OperatingSystem<span class=\"glyphicon glyphicon-menu-down\"></span></a>\n                <ul>\n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(searchitems[0].CategoryID,'Android',$event)\"><i></i>Android</label>\n                    <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"  (change)=\"filterrecord(searchitems[0].CategoryID,'IOS',$event)\"><i></i>IOS</label>\n                           -\n                </ul>\n              </li> -->\n           \n            </ul>\n   \n          </div>\n     \n          <div class=\"sidebar-row\">\n            <h4>Color</h4>\n            <div class=\"row row1 scroll-pane\">\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(searchitems[0].CategoryID,'White',$event)\"><i></i>White</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"   (change)=\"filterrecord(searchitems[0].CategoryID,'Black',$event)\"><i></i>Black</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Gold',$event)\"><i></i>Gold</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Blue',$event)\"><i></i>Blue</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Orange',$event)\"><i></i>Orange</label>\n              <label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\" (change)=\"filterrecord(searchitems[0].CategoryID,'Brown',$event)\"><i></i> Brown</label> \n            </div>\n          </div>\t\t\t \n        </div>\n        \n    \n     \n     \n   \n        <div class=\"related-row\">\n          <h4>YOU MAY ALSO LIKE</h4>\n          <div class=\"galry-like\">  \n            <a href=\"single.html\"><img src=\"/assets/more_assets/images/e1.png\" class=\"img-responsive\" alt=\"img\"></a>             \n            <h4><a href=\"products.html\">Audio speaker</a></h4> \n            <h5>$100</h5>       \n          </div>\n        </div>\n    \n      </div>\n    <div class=\"clearfix\"> </div>\n    <!-- recommendations -->\n  \n    <div class=\"recommend\">\n      <h3 class=\"w3ls-title\">Our Recommendations </h3> \n       <!-- <script>\n         \n        $(document).ready(function() { \n       \n          $(\"#owl-demo5\").owlCarousel({\n       \n            autoPlay: 3000, //Set AutoPlay to 3 seconds\n         \n            items :4,\n            itemsDesktop : [640,5],\n            itemsDesktopSmall : [414,4],\n            navigation : true\n         \n          });\n          \n        }); \n      </script>  -->\n      <div id=\"owl-demo5\" class=\"owl-carousel\">\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\">\n            <div class=\"new-tag\"><h6>20% <br> Off</h6></div>\n            <a href=\"products1.html\"><img src=\"/assets/more_assets/images/f2.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products1.html\">Women Sandal</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$20</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Women Sandal\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div> \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <a href=\"products.html\"><img src=\"/assets/more_assets/images/e4.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products.html\">Digital Camera</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$80</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Digital Camera\"/> \n                <input type=\"hidden\" name=\"amount\" value=\"100.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div>  \n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>New</h6></div>\n            <a href=\"products4.html\"><img src=\"/assets/more_assets/images/s1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products4.html\">Roller Skates</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$180</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Roller Skates\"/> \n                <input type=\"hidden\" name=\"amount\" value=\"180.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <a href=\"products1.html\"><img src=\"/assets/more_assets/images/f1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products1.html\">T Shirt</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$10</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"T Shirt\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"10.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div>    \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>New</h6></div>\n            <a href=\"products6.html\"><img src=\"/assets/more_assets/images/p1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products6.html\">Coffee Mug</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$14</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Coffee Mug\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"14.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>20% <br> Off</h6></div>\n            <a href=\"products6.html\"><img src=\"/assets/more_assets/images/p2.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products6.html\">Teddy bear</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$20</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Teddy bear\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div> \n        </div>\n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <a href=\"products4.html\"><img src=\"/assets/more_assets/images/s2.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products4.html\">Football</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$70</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Football\"/> \n                <input type=\"hidden\" name=\"amount\" value=\"70.00\"/>\n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>        \n          </div> \n        </div> \n        <div class=\"item\">\n          <div class=\"glry-w3agile-grids agileits\"> \n            <div class=\"new-tag\"><h6>Sale</h6></div>\n            <a href=\"products3.html\"><img src=\"/assets/more_assets/images/h1.png\" alt=\"img\"></a>\n            <div class=\"view-caption agileits-w3layouts\">           \n              <h4><a href=\"products3.html\">Wall Clock</a></h4>\n              <p>Lorem ipsum dolor sit amet consectetur</p>\n              <h5>$80</h5>\n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Wall Clock\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"80.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart\" ><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</button>\n              </form>\n            </div>         \n          </div>  \n        </div> \n      </div>    \n    </div>\n    <!-- //recommendations -->\n  </div>\n</div>\n<!--//products--> \n    <!-- footer-top -->\n    <div class=\"w3agile-ftr-top\">\n        <div class=\"container\">\n            <div class=\"ftr-toprow\">\n                <div class=\"col-md-4 ftr-top-grids\">\n                    <div class=\"ftr-top-left\">\n                        <i class=\"fa fa-truck\" aria-hidden=\"true\"></i>\n                    </div> \n                    <div class=\"ftr-top-right\">\n                        <h4>FREE DELIVERY</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>\n                    </div> \n                    <div class=\"clearfix\"> </div>\n                </div> \n                <div class=\"col-md-4 ftr-top-grids\">\n                    <div class=\"ftr-top-left\">\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    </div> \n                    <div class=\"ftr-top-right\">\n                        <h4>CUSTOMER CARE</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>\n                    </div> \n                    <div class=\"clearfix\"> </div>\n                </div>\n                <div class=\"col-md-4 ftr-top-grids\">\n                    <div class=\"ftr-top-left\">\n                        <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n                    </div> \n                    <div class=\"ftr-top-right\">\n                        <h4>GOOD QUALITY</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus justo ac </p>\n                    </div>\n                    <div class=\"clearfix\"> </div>\n                </div> \n                <div class=\"clearfix\"> </div>\n            </div>\n        </div>\n    </div>\n  <!-- //footer-top --> \n\n\n   \n\n\n\n\n"

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = "\n<!-- products -->\n<div class=\"products\">\t \n  <div class=\"container\">\n      <!-- <div style=\"width: 220px; height: 200px\">\n          <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\n        </div> -->\n    <div class=\"col-md-9 product-w3ls-right\">\n      <!-- breadcrumbs --> \n      <!-- <ol class=\"breadcrumb breadcrumb1\">\n        <li><a href=\"index.html\">Home</a></li>\n        <li class=\"active\">Products</li>\n      </ol>  -->\n      <div class=\"clearfix\"> </div>\n      <!-- //breadcrumbs -->\n      <div class=\"product-top\">\n        <h4>{{shopname}}</h4>\n        <ul> \n          <!-- <li class=\"dropdown head-dpdn\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Filter By<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Low price</a></li> \n              <li><a href=\"#\">High price</a></li>\n              <li><a href=\"#\">Latest</a></li> \n              <li><a href=\"#\">Popular</a></li> \n            </ul> \n          </li> -->\n          <!-- <li class=\"dropdown head-dpdn\" >\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Brands<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\"  >\n                <li *ngFor=\"let item of _global.brand  \" (click)=\"filterrecordbybrand(_global.items[0].CategoryID,item.Brand)\"><a >{{item.Brand}}</a></li> \n              <!-- <li><a >Honda</a></li> \n              <li><a href=\"#\">Brand2</a></li>\n              <li><a href=\"#\">Brand3</a></li> \n              <li><a href=\"#\">Brand4</a></li>  -->\n            <!-- </ul> \n          </li> --> \n        </ul>  \n        <div class=\"clearfix\"> </div>\n      </div>\n      <div class=\"products-row\">\n        <div class=\"col-md-3 product-grids\"  *ngFor=\"let item of _global.items | paginate: {itemsPerPage: 8, currentPage:page, id: '1'};\"> \n          <div class=\"agile-products\">\n            <div class=\"new-tag\" ><h6>{{item.Condition}}<br></h6></div>\n            <a ><img src=\"http://localhost:8081/api/GetMainAdImage/{{item.Images.split(',')[0]}}\" class=\"img-responsive\" alt=\"img\"></a>\n            <div class=\"agile-product-text\">              \n              <h5 (click)=\"itemdetail(item.CategoryID,item.AdId,item.Email)\"><a >{{item.Title}}</a></h5> \n              <h6><del></del> {{item.price | currency :'PKR'}}</h6> \n              <form action=\"#\" method=\"post\">\n                <input type=\"hidden\" name=\"cmd\" value=\"_cart\" />\n                <input type=\"hidden\" name=\"add\" value=\"1\" /> \n                <input type=\"hidden\" name=\"w3ls_item\" value=\"Leather Jacket\" /> \n                <input type=\"hidden\" name=\"amount\" value=\"20.00\" /> \n                <button type=\"submit\" class=\"w3ls-cart pw3ls-cart\" (click)=\"adtocart(item.ShopID,item.AdId,item.Email,item.Images.split(',')[0],item.Title,item.price,item.CategoryID)\"><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"  ></i> Add to cart</button>\n              </form> \n            </div>\n          </div> \n        </div>\n      \n        <div class=\"clearfix\"> </div>\n      </div>\n      <pagination-controls class=\"pagination\"(pageChange)=\"page = $event\" id=\"1\"\n      maxSize=\"8\"\n      directionLinks=\"true\"\n      autoHide=\"true\">\n</pagination-controls>`\n      <!-- add-products --> \n      <div class=\"w3ls-add-grids w3agile-add-products\">\n        <a href=\"#\"> \n          <h4>TOP 10 TRENDS FOR YOU FLAT <span>20%</span> OFF</h4>\n          <h6>Shop now <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></h6>\n        </a>\n      </div> \n      <!-- //add-products -->\n    </div>\n   \n    <div class=\"col-lg-3 \">\n\n      <div class=\"card hovercard\">\n          <div class=\"cardheader\">\n\n          </div>\n          <div class=\"avatar\">\n              <img alt=\"\" src=\"http://localhost:8081/api/GetUserProfileimage/{{ShopOwnerImage}}\">\n          </div>\n          <div class=\"info\">\n              <div class=\"title\">\n                  <a target=\"_blank\" href=\"http://scripteden.com/\">{{ShopOwnerName}}</a>\n              </div>\n              <div class=\"desc\">{{ShopOwnerEmail}}</div>\n              <div class=\"desc\">{{ShopOwnerNumber}}</div>\n          </div>\n          <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"subscribe(ShopID)\"*ngIf=\"subscribes != true\"><i class=\"glyphicon glyphicon-bell\"></i>Subscribe Shop</button>\n          <button type=\"submit\" class=\"btn btn-success btn-block\"  *ngIf=\"subscribes != false\" >\n              <i class=\"glyphicon glyphicon-ok\"></i>Subscribed</button> \n          <div class=\"bottom\">\n             \n              <!-- <a class=\"btn btn-primary btn-block\" href=\"https://twitter.com/webmaniac\">\n                  <i class=\"fa fa-twitter\"></i>\n              </a> -->\n              <!-- <a class=\"btn btn-danger btn-sm\" rel=\"publisher\"\n                 href=\"https://plus.google.com/+ahmshahnuralam\">\n                  <i class=\"fa fa-google-plus\"></i>\n              </a>\n              <a class=\"btn btn-primary btn-sm\" rel=\"publisher\"\n                 href=\"https://plus.google.com/shahnuralam\">\n                  <i class=\"fa fa-facebook\"></i>\n              </a>\n              <a class=\"btn btn-warning btn-sm\" rel=\"publisher\" href=\"https://plus.google.com/shahnuralam\">\n                  <i class=\"fa fa-behance\"></i>\n              </a> -->\n          </div>\n  \n\n  </div>\n</div>\n<!--//products--> \n    <!-- footer-top -->\n  \n  <!-- //footer-top --> \n\n\n   \n\n\n\n\n"

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = "\n              <div class=\"container\">\n\n                    <div id=\"products\" class=\"row list-group\">\n                      <div class=\"item  col-xs-4 col-lg-4\" *ngFor=\"let items of _global.shopitems\">\n                        <div class=\"thumbnail\">\n                          <img class=\"group list-group-image\" src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[0]}}\" alt=\"\" />\n                          <div class=\"caption\">\n                            <h4 class=\"group inner list-group-item-heading\" (click)=\"itemdetail(items.CategoryID, items.AdId)\">\n                              {{items.Title}}</h4>\n                            <p class=\"group inner list-group-item-text\">\n                              {{items.description}}\n                           </p>\n                            <div class=\"row\">\n                              <div class=\"col-xs-12 col-md-6\">\n                                <p class=\"lead\">\n                                    {{items.price | currency :'PKR'}}</p>\n                              </div>\n                              <div class=\"col-xs-12 col-md-6\">\n                                  <a  class=\"btn btn-default\" (click)=\"itemdetail(items.CategoryID, items.AdId)\">Detail  </a>\n                                  <a *ngIf=\"items.IsActive == false\" class=\"btn btn-success\" (click)=\"activateitem(items.ShopID,items.CategoryID,items.AdId)\">Activate </a>\n                                  <a *ngIf=\"items.IsActive == true\" class=\"btn btn-danger\" (click)=\"deactivateitem(items.ShopID,items.CategoryID,items.AdId)\">Deactivate  </a>\n                                <!-- <a class=\"btn btn-success\" href=\"http://www.jquery2dotnet.com\">Add to cart</a> -->\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                  \n                      \n                    </div>\n                  </div>\n    "

/***/ }),
/* 348 */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#\">\n                        Start Bootstrap\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">Dashboard</a>\n                </li>\n                <li>\n                    <a href=\"#\">Shortcuts</a>\n                </li>\n                <li>\n                    <a href=\"#\">Overview</a>\n                </li>\n                <li>\n                    <a href=\"#\">Events</a>\n                </li>\n                <li>\n                    <a href=\"#\">About</a>\n                </li>\n                <li>\n                    <a href=\"#\">Services</a>\n                </li>\n                <li>\n                    <a href=\"#\">Contact</a>\n                </li>\n            </ul>\n        </div>\n"

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n   \n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n\n  \n    </ol>\n\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"http://localhost:8081/api/GetSliderImage/1.jpg\" alt=\"slider\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://localhost:8081/api/GetSliderImage/2.jpg\" alt=\"slider\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://localhost:8081/api/GetSliderImage/3.jpg\" alt=\"slider\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://localhost:8081/api/GetSliderImage/4.jpg\" alt=\"slider\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"http://localhost:8081/api/GetSliderImage/5.jpg\" alt=\"slider\" style=\"width:100%;\">\n      </div>\n\n    \n\n\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>  -->\n\n\n          \n          \n<div class=\"container\">\n  <div class=\"row\">\n\n    <!-- Begin Navigation -->\n\n    <div class=\"verticle-menu col-sm-4 col-md-3\">\n      <div class=\"sidemenu-holder\">\n\n        \n        <div class=\"navigation hidden-xs hidden-sm\">\n          <div class=\"head\"><i class=\"fa fa-list\"></i> all departments</div>\n          <nav class=\"navbar\">\n            <div class=\"collapse navbar-collapse\">\n              <ul class=\"main-nav\" style=\"list-style: none\">\n                \n                \n\n  <li class=\"active\">\n    <a href=\"index.html\">\n      <span>Home</span>\n    </a>\n  </li>\n\n\n\n                \n                \n\n\n  \n\n\t\n\n    \n\t  \n      \n\n      \n\n    \n\t  \n      \n\n      \n\n    \n\n\t\n      <li class=\"dropdown\">\n  <a href=\"collections/all.html\" class=\"dropdown-link\">\n    <span>Catalog</span>\n  </a>\n  \n  <span class=\"expand\">\n    <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n    <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n  </span>\n  \n\n  <ul class=\"dropdown-menu\">\n    \n    \n\n<li class=\"dropdown dropdown-submenu\">\n  <a  class=\"dropdown-link\">\n    <span (click)=\"allproductitems(1)\">Smart Phones & Tablets</span>\n    \n    <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n    \n  </a>\n  \n  <span class=\"expand\"><i class=\"fa fa-plus visible-xs visible-sm\"></i></span>\n  \n  <ul class=\"dropdown-menu\">\n    \n    \n\n<li><a tabindex=\"-1\" href=\"products/magna-elementum-odio.html\"><span>Kaydex Product Sample</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"products/golddax-product-example.html\"><span>Golddax Product Example</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"products/quisque-placerat-libero.html\"><span>Dentotam Product Sample</span></a></li>\n\n\n    \n  </ul>\n</li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" (click)=\"allproductitems(3)\" ><span>Motors</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"collections/laptops-computers.html\"><span>Laptops & Computers</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"collections/cameras-photography.html\"><span>Cameras & Photography</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"collections/accessories.html\"><span>Accessories</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"collections/electronic.html\"><span>Electronic</span></a></li>\n\n\n    \n  </ul>\n</li>\n\n\t\n\n  \n\n\n\n                \n                \n\n\n  \n\n\t\n\n    \n\t  \n      \n\n      \n        \n\n        \n        \n        \n\n\t\n      <li class=\"dropdown mega-menu\">\n        <a href=\"collections/laptops-computers.html\" class=\"dropdown-link\">\n          <span>Laptops & Notebooks</span>\n        </a>\n\n        \n        <span class=\"expand\">\n          <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n          <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n        </span>\n        \n\n        \n\n\n\n\n\n\n\n\n\n\n\n<div class=\"dropdown-menu dropdown-menu-1 column-4\" style=\"min-height: 300px; background:url(../cdn.shopify.com/s/files/1/1067/5616/t/5/assets/mega_menu_bg_img_1586b.jpg?12559977971113800581) no-repeat top right #fff;;\">\n  <div class=\"row\">\n    \n    \n    \n      \n\n      \n\n      \t\n    \t\n    \n    \t<div class=\"mega-col mega-col-1 col-sm-3\">\n          \n          \n          \t\n          \n          \t\n          \n              \n              \n              <div class=\"dropdown mega-sub-link\">\n                <a href=\"collections/laptops-computers.html\" class=\"dropdown-link\">\n                  <span>Laptops</span>\n                </a>\n                \n                <span class=\"expand\">\n                  <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n                  <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n                </span>\n                \n                <ul class=\"dropdown-menu dropdown-menu-sub\">\n                  \n                  <li><a href=\"products/coneco-product-sample.html\">Apple</a></li>\n                  \n                  <li><a href=\"products/daltex-product-example.html\">Lenovo</a></li>\n                  \n                  <li><a href=\"products/consectetur-nibh-eget.html\">Acer</a></li>\n                  \n                  <li><a href=\"products/donkix-product-sample.html\">Dell</a></li>\n                  \n                  <li><a href=\"products/faxtex-product-sample.html\">Toshiba</a></li>\n                  \n                  <li><a href=\"products/fixair-product-sample.html\">Asus</a></li>\n                  \n                  <li><a href=\"products/georgeous-white-bag.html\">Samsung</a></li>\n                  \n                  <li><a href=\"products/flexlam-product-sample.html\">MSI</a></li>\n                  \n                </ul>\n              </div>\n              \n          \n          \t\n          \n          \n          \n    \t</div>\n\n      \n    \n    \n    \n      \n\n      \n\n      \t\n    \t\n    \n    \t<div class=\"mega-col mega-col-2 col-sm-4\">\n          \n          \n          \t\n          \n          \t\n          \n              \n              \n              <div class=\"dropdown mega-sub-link\">\n                <a href=\"collections/smart-phones-tablets.html\" class=\"dropdown-link\">\n                  <span>Notebooks</span>\n                </a>\n                \n                <span class=\"expand\">\n                  <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n                  <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n                </span>\n                \n                <ul class=\"dropdown-menu dropdown-menu-sub\">\n                  \n                  <li><a href=\"collections/accessories.html\">HP Stream Notebook</a></li>\n                  \n                  <li><a href=\"collections/cameras-photography.html\">Acer eMachine</a></li>\n                  \n                  <li><a href=\"collections/electronic.html\">Dell Inspiron</a></li>\n                  \n                  <li><a href=\"collections/laptops-computers.html\">Toshiba Satellite</a></li>\n                  \n                  <li><a href=\"collections/smart-phones-tablets.html\">HP EliteBook</a></li>\n                  \n                </ul>\n              </div>\n              \n          \n          \t\n          \n          \n          \n    \t</div>\n\n      \n    \n    \n    \n      \n\n      \n    \n    \n    \n      \n\n      \n    \n    \n\n  </div>\n</div>\n      </li>\n\n\t\n\n  \n\n\n\n                \n                \n\n  <li class=\"\">\n    <a href=\"collections/smart-phones-tablets.html\">\n      <span>Smart Phones</span>\n    </a>\n  </li>\n\n\n\n                \n                \n\n\n  \n\n\t\n\n    \n\t  \n      \n\n      \n\n    \n\t  \n      \n\n      \n        \n\n        \n        \n        \n\n\t\n      <li class=\"dropdown mega-menu\">\n        <a href=\"collections/cameras-photography.html\" class=\"dropdown-link\">\n          <span>Cameras</span>\n        </a>\n\n        \n        <span class=\"expand\">\n          <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n          <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n        </span>\n        \n\n        \n\n\n\n\n\n\n\n\n\n\n\n<div class=\"dropdown-menu dropdown-menu-2 column-4\" style=\"min-height: 300px; background: #ffffff;\">\n  <div class=\"row\">\n    \n    \n    \n      \n\n      \n\n      \t\n    \t\n    \n    \t<div class=\"mega-col mega-col-1 col-sm-3\">\n          \n          \n            <div class=\"dropdown mega-sub-link\">\n              <a href=\"#\">\n                <span>This Month</span>\n              </a>\n              \n              <span class=\"expand\">\n                <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n                <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n              </span>\n              \n              <ul class=\"dropdown-menu dropdown-menu-sub fix\">\n\n                  \n                  \n\n                  \n                  \n                  <li class=\"bp-item\"><div class=\"bp-head\">\n  <a href=\"products/flexlam-product-sample.html\">\n    <img src=\"../cdn.shopify.com/s/files/1/1067/5616/products/15_large_e2b502cb-a45a-4a25-87a3-4c6cab820a89_largeb749.png?v=1449558299\" alt=\"Flexlam Product Sample\" />\n  </a>\n</div>\n<div class=\"bp-content\">\n  <div class=\"bp-content-inner\">\n    <div class=\"bp-title\"><a href=\"products/flexlam-product-sample.html\">Flexlam Product Sample</a></div>\n    <div class=\"bp-price\">\n      \n      \n      <span class=\"price\">\n         \n        <span class='money'>$150.00</span>\n        \n      </span>\n      \n      \n    </div>\n  </div>\n</div>\n</li>\n                  \n\n              </ul>\n            </div>\n          \n          \n          \n    \t</div>\n\n      \n    \n    \n    \n      \n\n      \n\n      \t\n    \t\n    \n    \t<div class=\"mega-col mega-col-2 col-sm-3\">\n          \n          \n            <div class=\"dropdown mega-sub-link\">\n              <a href=\"#\">\n                <span>New Arrival</span>\n              </a>\n              \n              <span class=\"expand\">\n                <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n                <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n              </span>\n              \n              <ul class=\"dropdown-menu dropdown-menu-sub fix\">\n\n                  \n                  \n\n                  \n                  \n                  <li class=\"bp-item\"><div class=\"bp-head\">\n  <a href=\"products/golddax-product-example.html\">\n    <img src=\"../cdn.shopify.com/s/files/1/1067/5616/products/337_1_large_8210c02d-4416-4fff-a055-3dff11c5fabb_large32fd.png?v=1449560735\" alt=\"Golddax Product Example\" />\n  </a>\n</div>\n<div class=\"bp-content\">\n  <div class=\"bp-content-inner\">\n    <div class=\"bp-title\"><a href=\"products/golddax-product-example.html\">Golddax Product Example</a></div>\n    <div class=\"bp-price\">\n      \n      \n      <span class=\"price\">\n         \n        <span class='money'>$120.00</span>\n        \n      </span>\n      \n      \n    </div>\n  </div>\n</div>\n</li>\n                  \n\n              </ul>\n            </div>\n          \n          \n          \n    \t</div>\n\n      \n    \n    \n    \n      \n\n      \n\n      \t\n    \t\n    \n    \t<div class=\"mega-col mega-col-3 col-sm-3\">\n          \n          \n            <div class=\"dropdown mega-sub-link\">\n              <a href=\"#\">\n                <span>So Hot</span>\n              </a>\n              \n              <span class=\"expand\">\n                <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n                <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n              </span>\n              \n              <ul class=\"dropdown-menu dropdown-menu-sub fix\">\n\n                  \n                  \n\n                  \n                  \n                  <li class=\"bp-item\"><div class=\"bp-head\">\n  <a href=\"products/consectetur-nibh-eget.html\">\n    <img src=\"../cdn.shopify.com/s/files/1/1067/5616/products/p2_large_ae77dff4-c017-4404-b499-731bb70bb71a_large0160.png?v=1449557543\" alt=\"Dentoex Product Sample\" />\n  </a>\n</div>\n<div class=\"bp-content\">\n  <div class=\"bp-content-inner\">\n    <div class=\"bp-title\"><a href=\"products/consectetur-nibh-eget.html\">Dentoex Product Sample</a></div>\n    <div class=\"bp-price\">\n      \n      <span class=\"sold-out\">Sold Out</span>\n      \n    </div>\n  </div>\n</div>\n</li>\n                  \n\n              </ul>\n            </div>\n          \n          \n          \n    \t</div>\n\n      \n    \n    \n    \n      \n\n      \n\n      \t\n    \t\n    \n    \t<div class=\"mega-col mega-col-4 col-sm-3\">\n          \n          \n            <div class=\"dropdown mega-sub-link\">\n              <a href=\"#\">\n                <span>Popular</span>\n              </a>\n              \n              <span class=\"expand\">\n                <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n                <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n              </span>\n              \n              <ul class=\"dropdown-menu dropdown-menu-sub fix\">\n\n                  \n                  \n\n                  \n                  \n                  <li class=\"bp-item\"><div class=\"bp-head\">\n  <a href=\"products/magna-elementum-odio.html\">\n    <img src=\"../cdn.shopify.com/s/files/1/1067/5616/products/339_2_large_687ce320-4e09-4250-a9a9-1a322ae84d06_large0764.png?v=1449560797\" alt=\"Kaydex Product Sample\" />\n  </a>\n</div>\n<div class=\"bp-content\">\n  <div class=\"bp-content-inner\">\n    <div class=\"bp-title\"><a href=\"products/magna-elementum-odio.html\">Kaydex Product Sample</a></div>\n    <div class=\"bp-price\">\n      \n      \n      <span class=\"price\">\n        \n        <span class='money'>$450.00</span>\n        \n      </span>\n      \n      \n    </div>\n  </div>\n</div>\n</li>\n                  \n\n              </ul>\n            </div>\n          \n          \n          \n    \t</div>\n\n      \n    \n    \n\n  </div>\n</div>\n      </li>\n\n\t\n\n  \n\n\n\n                \n                \n\n  <li class=\"\">\n    <a href=\"blogs/news.html\">\n      <span>Blog</span>\n    </a>\n  </li>\n\n\n\n                \n                \n\n\n  \n\n\t\n\n    \n\t  \n      \n\n      \n\n    \n\t  \n      \n\n      \n\n    \n\n\t\n      <li class=\"dropdown\">\n  <a href=\"pages/contact-us.html\" class=\"dropdown-link\">\n    <span>Pages</span>\n  </a>\n  \n  <span class=\"expand\">\n    <i class=\"fa fa-angle-right hidden-xs hidden-sm\"></i>\n    <i class=\"fa fa-plus visible-xs visible-sm\"></i>\n  </span>\n  \n\n  <ul class=\"dropdown-menu\">\n    \n    \n\n<li><a tabindex=\"-1\" href=\"blogs/news-full-width.html\"><span>Blog Full Width</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"blogs/news.html\"><span>Blog</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"pages/contact-us.html\"><span>Contact Us</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"pages/about-us.html\"><span>About Us</span></a></li>\n\n\n    \n    \n\n<li><a tabindex=\"-1\" href=\"pages/faqs.html\"><span>FAQs</span></a></li>\n\n\n    \n  </ul>\n</li>\n\n\t\n\n  \n\n\n\n                \n              </ul>\n            </div>\n          </nav>\n        </div>\n        \n\n      </div>\n    </div>\n\n    <!-- End Navigation -->\n   <!-- Begin Slideshow -->\n\n    <div class=\"col-xs-12 col-sm-12 col-md-9 home-slideshow-wrapper swiper-container\" data-animation=\"fade\">\n     \n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      \n       <ol class=\"carousel-indicators\">\n         <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n         <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n         <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n         <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n         <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\n   \n     \n       </ol>\n   \n       <div class=\"carousel-inner\">\n         <div class=\"item active\">\n           <img src=\"http://localhost:8081/api/GetSliderImage/1.jpg\" alt=\"slider\" style=\"width:100%;\">\n         </div>\n   \n         <div class=\"item\">\n           <img src=\"http://localhost:8081/api/GetSliderImage/2.jpg\" alt=\"slider\" style=\"width:100%;\">\n         </div>\n   \n         <div class=\"item\">\n           <img src=\"http://localhost:8081/api/GetSliderImage/3.jpg\" alt=\"slider\" style=\"width:100%;\">\n         </div>\n   \n         <div class=\"item\">\n           <img src=\"http://localhost:8081/api/GetSliderImage/4.png\" alt=\"slider\" style=\"width:100%;\">\n         </div>\n   \n         <div class=\"item\">\n           <img src=\"http://localhost:8081/api/GetSliderImage/5.jpg\" alt=\"slider\" style=\"width:100%;\">\n         </div>\n   \n       \n   \n   \n       <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n         <span class=\"glyphicon glyphicon-chevron-left\"></span>\n         <span class=\"sr-only\">Previous</span>\n       </a>\n       <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n         <span class=\"glyphicon glyphicon-chevron-right\"></span>\n         <span class=\"sr-only\">Next</span>\n       </a>\n     </div>\n   </div> \n     \n        </div>\n      \n        <!-- End Slideshow -->\n  </div>\n</div> "

/***/ }),
/* 350 */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports = "<p>\n  testing works!\n</p>\n"

/***/ }),
/* 352 */
/***/ (function(module, exports) {

module.exports = "\n<script>\n  $(function () {\n  $('[data-toggle=\"tooltip\"]').tooltip();\n});\n</script>\n<div class=\"container\">\n\t<div class=\"row\">\n        <h2>{{userdata[0].Name}} Wish List</h2>\n      \n        <div class=\"col-sm-3\"  *ngFor=\"let items of _global.wishitem\">\n            <article class=\"col-item\">\n            \t<div class=\"photo\">\n        \t\t\t<div class=\"options-cart-round\">\n        \t\t\t\t<button class=\"btn btn-default\" title=\"Add to cart\" (click)=\"adtocart(items.ShopID,items.AdId,items.Images.split(',')[0],items.ProductName,items.price,items.CategoryID)\">\n        \t\t\t\t\t<span class=\"fa fa-shopping-cart\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"btn btn-default\" title=\"Detail\" (click)=\"itemdetail(items.CategoryID,items.AdId,items.ShopID)\">\n        \t\t\t\t\t<span class=\"fa fa-info-circle\"></span>\n        \t\t\t\t</button>\n        \t\t\t</div>\n        \t\t\t<a > <img src=\"http://localhost:8081/api/GetMainAdImage/{{items.Images.split(',')[0]}}\" class=\"img-responsive\" alt=\"Product Image\" /> </a>\n        \t\t</div>\n        \t\t<div class=\"info\">\n        \t\t\t<div class=\"row\">\n        \t\t\t\t<div class=\"price-details col-md-6\">\n        \t\t\t\t\t<!-- <p class=\"details\">\n        \t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur..\n        \t\t\t\t\t</p> -->\n        \t\t\t\t\t<h1>{{items.ProductName}}</h1>\n        \t\t\t\t\t<span class=\"price-new\">{{items.price | currency :'PKR'}}</span>\n        \t\t\t\t</div>\n        \t\t\t</div>\n        \t\t</div>\n        \t</article>\n            <!-- <p class=\"text-center\">Hover over image</p> -->\n        </div>\n       \n     \n\t</div>\n</div>"

/***/ }),
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ })
],[420]);
//# sourceMappingURL=main.bundle.js.map