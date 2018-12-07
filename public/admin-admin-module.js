(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-nav-bar></app-admin-nav-bar>\n<main>\n  <div class=\"container-fluid mt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.routing */ "./src/app/admin/admin.routing.ts");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/admin/nav-bar/nav-bar.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/validations.service */ "./src/app/services/validations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"]
            ],
            providers: [
                _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
                _services_validations_service__WEBPACK_IMPORTED_MODULE_8__["ValidationsService"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.routing.ts ***!
  \****************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");


var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        children: [
            {
                path: 'jd',
                loadChildren: './master/JD/jd.module#JdModule',
            },
            {
                path: 'assessmenttype',
                loadChildren: './master/assessmenttype/assessmenttype.module#AssessmenttypeModule',
            },
            {
                path: 'header',
                loadChildren: './master/header/header.module#HeaderModule',
            },
            {
                path: 'scale',
                loadChildren: './master/scale/scale.module#ScaleModule',
            },
            {
                path: 'question',
                loadChildren: './master/question/question.module#QuestionModule',
            },
            {
                path: 'department',
                loadChildren: './master/department/department.module#DepartmentModule',
            },
            {
                path: 'organogram',
                loadChildren: './master/organogram/organogram.module#OrganogramModule',
            },
            {
                path: 'employee',
                loadChildren: './master/employee/employee.module#EmployeeModule',
            },
            {
                path: 'assignjd',
                loadChildren: './master/assign-jd/assign-jd.module#AssignJDModule',
            },
            {
                path: 'weightage',
                loadChildren: './master/weightage/weightage.module#WeightageModule',
            },
            {
                path: 'assessment',
                loadChildren: './assessment/assessment.module#AssessmentModule',
            },
            {
                path: 'training',
                loadChildren: './training/training.module#TrainingModule',
            },
            {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule',
            },
            {
                path: 'hrindex',
                loadChildren: './hrindex/hrindex.module#HrindexModule',
            },
            {
                path: 'frontend',
                loadChildren: './frontend/front.module#FrontModule',
            },
            {
                path: 'assessmenttype',
                loadChildren: './master/assessmenttype/assessmenttype.module#AssessmenttypeModule',
            },
        ]
    }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/admin/nav-bar/nav-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/nav-bar/nav-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Double navigation-->\n<header class=\"admin_gray_header \">\n\n    <!-- Sidebar navigation -->\n    <mdb-sidenav #sidenav class=\" fixed admin-sidebar-nav admin-leftnav\" [fixed]=\"true\">\n\n        <logo>\n            <!-- Logo -->\n            <li>\n                <div class=\"logo-wrapper waves-light\">\n                    <a href=\"#\"><img src=\"../../../assets/img/epes-logo-admin.png\" class=\"img-fluid flex-center\"></a>\n                </div>\n            </li>\n            <!--/. Logo -->\n        </logo>\n\n        <links>\n            <!-- Side navigation links -->\n            <li>\n                <ul class=\"collapsible collapsible-accordion \">\n                    <mdb-squeezebox [multiple]=\"false\" aria-multiselectable=\"false\">\n                        <mdb-item>\n                            <mdb-item-head> Master</mdb-item-head>\n                            <mdb-item-body>\n                                <ul>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/jd']\" class=\"waves-effect\">JD</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/header']\" class=\"waves-effect\">Header</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/scale']\" class=\"waves-effect\">Scale</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/question']\" class=\"waves-effect\">Question</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/department']\" class=\"waves-effect\">Department</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/organogram']\" class=\"waves-effect\">Organogram</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/employee']\" class=\"waves-effect\">Employee</a>\n                                    </li>\n                                    <li><a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/assignjd']\" class=\"waves-effect\" >Assign JD to Employee</a></li>\n                                    <li><a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/weightage']\" class=\"waves-effect\" >Weightage</a></li>\n                                </ul>\n                            </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                </ul>\n            </li>\n            <li class=\"nav-item\">\n                <a (click)=\"sidenav.toggle()\" class=\"nav-link waves-light\" [routerLink]=\"['/admin/assessment']\" mdbWavesEffect>Assessment</a>\n            </li>\n            <li class=\"nav-item\">\n                <a (click)=\"sidenav.toggle()\" class=\"nav-link waves-light\" [routerLink]=\"['/admin/training']\" mdbWavesEffect>Training</a>\n            </li>\n            <li class=\"nav-item\">\n                <a (click)=\"sidenav.toggle()\" class=\"nav-link waves-light\" [routerLink]=\"['/admin/settings']\" mdbWavesEffect>Settings</a>\n            </li>\n            <li class=\"nav-item\">\n                <a (click)=\"sidenav.toggle()\" class=\"nav-link waves-light\" [routerLink]=\"['/admin/hrindex']\" mdbWavesEffect>HR\n                    Index</a>\n            </li>\n            <li>\n                <ul class=\"collapsible collapsible-accordion \">\n                    <mdb-squeezebox [multiple]=\"false\" aria-multiselectable=\"false\">\n                        <mdb-item>\n                            <mdb-item-head> CMS</mdb-item-head>\n                            <mdb-item-body>\n                                <ul>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/testimonial']\" class=\"waves-effect\">Testimonial</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/feature']\" class=\"waves-effect\">Features</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/faq']\" class=\"waves-effect\">FAQ</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/blog']\" class=\"waves-effect\">Blog</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/roadmap']\" class=\"waves-effect\">Product\n                                            Roadmap</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/press-release']\" class=\"waves-effect\">Press\n                                            Release</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/whitepaper']\" class=\"waves-effect\">White\n                                            Paper</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/career']\" class=\"waves-effect\">Careers</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/contactus']\" class=\"waves-effect\">Contact\n                                            Us</a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sidenav.toggle()\" [routerLink]=\"['/admin/frontend/product']\" class=\"waves-effect\">Product</a>\n                                    </li>\n                                </ul>\n                            </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                </ul>\n            </li>\n            <!--/. Side navigation links -->\n        </links>\n        <div class=\"sidenav-bg mask-strong\"></div>\n    </mdb-sidenav>\n    <!--/. Sidebar navigation -->\n    <div class=\"container\">\n        <!-- Navbar -->\n        <mdb-navbar SideClass=\" navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav admin-top-navbar\"\n            [containerInside]=\"false\">\n\n\n\n            <navlinks>\n                <logo>\n                    <!-- Breadcrumb-->\n                    <div class=\"logo-wrapper waves-light admin-header-img\">\n                        <a href=\"#\"><img src=\"../../../assets/img/epes-logo-admin.png\"></a>\n                    </div>\n                    <!--<div class=\"breadcrumbs breadcrumb-dn mr-auto\">\n                    <p>Material Design for Bootstrap</p>\n                </div>-->\n                    <!--/. Breadcrumb-->\n                </logo>\n\n\n\n                <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav admin-leftnav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link waves-light\" mdbWavesEffect> Dashboard</a>\n                        <!-- SideNav slide-out button -->\n                        <div class=\"float-right\">\n                            <a (click)=\"sidenav.show()\" class=\"button-collapse epes-admin-collapse\"><i class=\"fa fa-bars\"></i></a>\n                        </div>\n                        <!--/. SideNav slide-out button -->\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link waves-light\" mdbWavesEffect>Reports</a>\n                    </li>\n                    <li class=\"nav-item dropdown btn-group\" dropdown>\n                        <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbRippleRadius>Quick\n                            Links</a>\n                        <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\n                            <a class=\"dropdown-item\">Quick Links1</a>\n                        </div>\n                    </li>\n                </ul>\n            </navlinks>\n\n            <navlinks>\n                <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav \">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link waves-light btn-wizard\" mdbWavesEffect>Configuration Wizard </a>\n                    </li>\n\n                    <li class=\"nav-item cercle-icon\">\n                        <a class=\"nav-link waves-light\" mdbWavesEffect><i class=\"fa fa-bell\" aria-hidden=\"true\"></i> </a>\n                    </li>\n\n                    <li class=\"nav-item cercle-icon\">\n                        <a class=\"nav-link waves-light\" mdbWavesEffect><i class=\"fa fa-envelope\"></i> </a>\n                    </li>\n\n                    <li class=\"nav-item dropdown btn-group\" dropdown>\n                        <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbRippleRadius><div\n                                class=\"user-icon\"><img src=\"../../../assets/img/user-icon.jpg\"></div>\n                            <!-- <i class=\"fa fa-user\" aria-hidden=\"true\"></i>--><span class=\"clearfix d-none d-sm-inline-block\">Company</span></a>\n                        <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\n                            <a class=\"dropdown-item\">Sign Out</a>\n                        </div>\n                    </li>\n                </ul>\n            </navlinks>\n        </mdb-navbar>\n        <!--/. Navbar -->\n    </div>\n</header>\n<!--/.Double navigation-->\n"

/***/ }),

/***/ "./src/app/admin/nav-bar/nav-bar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/nav-bar/nav-bar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slide-out {\n  z-index: 99999; }\n\n.sidenav-bg.mask-strong {\n  background: #fff; }\n\n.admin-header-img {\n  width: 150px;\n  -ms-flex-order: -1;\n      order: -1;\n  margin-left: 15px; }\n\n.admin-header-img img {\n  max-width: 100%; }\n\n.epes-admin-navbar-container {\n  -ms-flex-order: 0;\n      order: 0; }\n\n.btn-wizard {\n  background: #54afc6;\n  padding: 10px 25px !important;\n  color: #fff !important;\n  cursor: pointer; }\n\n.cercle-icon {\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px; }\n\n.cercle-icon i.fa {\n  margin-left: 0px; }\n\n.user-icon {\n  width: 40px;\n  float: left;\n  margin-right: 5px; }\n\n.user-icon img {\n  max-width: 100%; }\n"

/***/ }),

/***/ "./src/app/admin/nav-bar/nav-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/nav-bar/nav-bar.component.ts ***!
  \****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/admin/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/admin/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/validations.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/validations.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsService", function() { return ValidationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationsService = /** @class */ (function () {
    function ValidationsService() {
    }
    ValidationsService.prototype.isEmpty = function (input) {
        if (input === undefined ||
            input === null ||
            (typeof input === 'object' && Object.keys(input).length === 0) ||
            (typeof input === 'string' && input.trim().length === 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidationsService.prototype.isMobile = function (mobile) {
        var mob = /[0-9]+/;
        /[^0-9]/g;
        if (!mob.test(mobile)) {
            return 'Mobile field shoud have only number';
        }
        else if (mobile.length !== 10) {
            return 'Mobile field should contain only 10 numbers';
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isDigit = function (digit) {
        var dig = /[^0-9]/g;
        if (!dig.test(digit)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isPassword = function (digit) {
        // const dig = /[^0-9]/g;
        var regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
        if (!regpassword.test(digit)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isMinimum = function (mobile) {
        if (mobile.length >= 10) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isMaximum = function (mobile) {
        if (mobile.length <= 13) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isNumber = function (input) {
        if (typeof Number(input) === 'number') {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isPercentage = function (input) {
        if (typeof Number(input) === 'number') {
            if (input <= 100) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    ValidationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationsService);
    return ValidationsService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map