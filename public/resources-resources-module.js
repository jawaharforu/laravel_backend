(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./src/app/frontend/resources/resources.component.html":
/*!*************************************************************!*\
  !*** ./src/app/frontend/resources/resources.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-tabset [buttonClass]=\"'classic-tabs tabs-new '\" [contentClass]=\"'card'\" class=\"classic-tabs\">\n    <!--Panel 1-->\n    <mdb-tab heading=\"<i class='resources-icon blog-icon'></i></i>Blog\">\n        <div class=\"container tab_container\">\n            <div class=\"row\">\n                <section id=\"featr_pic1\">\n                    <div class=\"container\">\n                        <div class=\"feature_imgs product_resource_arrow\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-4 mb-4\" *ngFor=\"let blog of blogList\">\n                                    <a [routerLink]=\"['/blog/',blog.id]\">\n                                        <div class=\"image image_1\">\n                                            <img src=\"http://www.codeblocq.com/assets/projects/hexo-theme-phantom/assets/img1.png\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n                                        </div>\n                                        <div class=\"middle\">\n                                            <div class=\"blog_title\">{{blog.name}}</div>\n                                            <div class=\"post_date\">{{blog.created_at | date}}</div>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        </div>\n    </mdb-tab>\n    <!--Panel 2-->\n    <mdb-tab heading=\"<i class='resources-icon roadmap-icon'></i>Product Roadmap\">\n        <div class=\"container tab_container roadmap_container\">\n            <div class=\"row\">\n\n                <!--Accordion wrapper-->\n                <mdb-squeezebox [multiple]=\"false\" aria-multiselectable=\"true\">\n                    <mdb-item [collapsed]=\"true\" *ngFor=\"let item of productroadmapList\">\n                        <mdb-item-head> {{ item.name }} </mdb-item-head>\n                        <mdb-item-body> {{ item.description }} </mdb-item-body>\n                    </mdb-item>\n                </mdb-squeezebox>\n                <!--/.Accordion wrapper-->\n            </div>\n        </div>\n    </mdb-tab>\n    <!--Panel 3-->\n    <mdb-tab heading=\"<i class='resources-icon whitepaper-icon'></i> White Paper\">\n        <div class=\"container tab_container\">\n            <div class=\"row\">\n                <div class=\"col-6 col-md-6 col-sm-12\">\n\n                    <form class=\"whitepaper-form\" (ngSubmit)=\"whitepaperForm()\">\n                        <div class=\"form-group\">\n                            <label>Name</label>\n                            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" id=\"name\" placeholder=\"\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Official Email</label>\n                            <input type=\"email\" class=\"form-control\" name=\"field_email\" [(ngModel)]=\"field_email\" id=\"Email\" placeholder=\"\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label>Company Name</label>\n                            <input type=\"text\" class=\"form-control\" name=\"field_company\" [(ngModel)]=\"field_company\" id=\"company\" placeholder=\"\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Official Website</label>\n                            <input type=\"text\" class=\"form-control\" name=\"field_website\" [(ngModel)]=\"field_website\" id=\"website\" placeholder=\"\">\n                        </div>\n                        <input type=\"submit\" value=\"Download\" class=\"submit\" id=\"sendWhitepaper\">\n                    </form>\n\n                </div>\n                <div class=\" col-md-6 col-sm-12\">\n                    <h4 class=\"white-paper-title\">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h4>\n                    <div class=\"resources-text\">\n                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n                            3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum\n                            wes anderson cred nesciunt sapiente ea proident.\n                        </p>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 img-detl\">\n                                <p class=\" \">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson\n                                    ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck\n                                    quinoa nesciunt laborum wes anderson cred nesciunt\n                                </p>\n                            </div>\n                            <div class=\"col-sm-8 whteimg\">\n                                <img class=\"img-responsive white-paperimg\" src=\"../../assets/img/CM-2.jpg\">\n                            </div>\n                        </div>\n                        <ul class=\"resources_list\">\n                            <li> Food truck quinoa nesciunt labored nesciunt sapiente ea proident. </li>\n                            <li> Food truck quinoa nesciunt laborum wes anderson cred nesciunt sapiente ea proident. </li>\n                            <li>Lorem Ipsum is simply dummy text of the printing </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mdb-tab>\n    <!--Panel 4-->\n    <mdb-tab [disabled]=\"true\" heading=\"<i class='resources-icon pressrelease-icon'></i>Press Release\">\n        <div class=\"container tab_container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 single-new\" *ngFor=\"let pressrelease of pressreleaseList\">\n                    <div class=\"news-image\">\n                        <img class=\"img-responsive\" src=\"../../assets/img/new1.jpg\">\n                    </div>\n                    <div class=\"news-title\">{{pressrelease.name}}</div>\n                    <div class=\"news-date\">{{pressrelease.createdon}}</div>\n                </div>\n            </div>\n        </div>\n    </mdb-tab>\n</mdb-tabset>"

/***/ }),

/***/ "./src/app/frontend/resources/resources.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/frontend/resources/resources.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar.navbar-light .breadcrumb .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link:hover {\n  color: #000 !important;\n  font-size: 14px;\n  font-weight: 400; }\n\nsection#blog-disc {\n  margin: 20px 0px 60px 0px;\n  font-family: \"Roboto\", sans-serif; }\n\nh3.catrg-title {\n  font-weight: 500;\n  color: #666; }\n\n.image:before {\n  -moz-pointer-events: none;\n  -webkit-pointer-events: none;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  transition: background-color 0.5s ease, opacity 0.5s ease;\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  width: 91%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.8;\n  transition: opacity 1s ease-out; }\n\n.image:before {\n  background: #666; }\n\n.image:hover:before {\n  opacity: 0;\n  left: 0px;\n  width: 100%;\n  transition: left 1s ease-out;\n  transition: width 1s ease-out; }\n\n.middle {\n  opacity: 1;\n  color: #ffffff;\n  z-index: 1;\n  width: auto; }\n\n.image:hover + .middle {\n  color: #000;\n  transition: background 1s ease-in; }\n\n.blog_title {\n  font-weight: 600;\n  font-size: 15px;\n  text-transform: uppercase; }\n\n.post_date {\n  font-size: 12px; }\n\n.blog-dic {\n  width: 80%;\n  margin: 0px auto;\n  font-size: 13px;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  overflow: hidden;\n  max-height: 3.6em;\n  line-height: 1.8em;\n  display: none; }\n\n.image:hover ~ .middle .blog-dic {\n  display: block; }\n\n.image_1:before {\n  background-color: #f2849e; }\n\n.image_2:before {\n  background-color: #7ecaf6; }\n\n.image_3:before {\n  background-color: #7bd0c1; }\n\n.image_4:before {\n  background-color: #c75b9b; }\n\n.image_5:before {\n  background-color: #ae85ca; }\n\n.image_6:before {\n  background-color: #8499e7; }\n\nul.product_roadmap li {\n  list-style: none;\n  margin: 0px !important;\n  line-height: 55px;\n  border-bottom: 1px solid #ccc;\n  color: #2196f3;\n  font-weight: 300;\n  width: 100%;\n  font-size: 15px; }\n\nul.product_roadmap li span {\n  color: #666; }\n\nul.product_roadmap {\n  width: 100%; }\n\n.white-paper-title {\n  color: #000;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 600; }\n\n.resources-text {\n  font-size: 14px;\n  color: #666;\n  line-height: 24px;\n  font-weight: 300; }\n\nul.resources_list {\n  padding: 15px; }\n\n.resources_list li {\n  margin: 0px !important;\n  line-height: 25px;\n  font-size: 13px;\n  list-style: circle;\n  line-height: 30px; }\n\n.whitepaper-form label, .whitepaper-form input::-webkit-input-placeholder {\n  font-size: 12px;\n  color: #999;\n  font-weight: #666; }\n\n.whitepaper-form label, .whitepaper-form input:-ms-input-placeholder {\n  font-size: 12px;\n  color: #999;\n  font-weight: #666; }\n\n.whitepaper-form label, .whitepaper-form input::-ms-input-placeholder {\n  font-size: 12px;\n  color: #999;\n  font-weight: #666; }\n\n.whitepaper-form label, .whitepaper-form input::placeholder {\n  font-size: 12px;\n  color: #999;\n  font-weight: #666; }\n\ninput.form-control {\n  height: 35px;\n  font-size: 13px;\n  max-width: 380px; }\n\n.news-image {\n  margin-bottom: 25px; }\n\n.news-title {\n  color: #000;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 600; }\n\n.news-date {\n  font-size: 13px;\n  color: #242424;\n  text-align: justify; }\n\n.news-content {\n  font-size: 13px;\n  color: #777;\n  text-align: justify; }\n\n.news-image img {\n  max-width: 100%; }\n\n.single-new:hover ~ .news-title {\n  color: #03c5ff; }\n\n@media only screen and (max-width: 1023px) {\n  .image:before {\n    width: 87%; } }\n\n@media only screen and (max-width: 1023px) {\n  .image:before {\n    width: 91%; } }\n\n.white-paperimg {\n  margin-top: -6px; }\n\n.img-detl {\n  text-align: left; }\n\n.product_resource_arrow .fa-arrow-circle-right:before {\n  -webkit-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n      transform: rotate(0deg); }\n\n.submit {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/frontend/resources/resources.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/frontend/resources/resources.component.ts ***!
  \***********************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_cms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cms.service */ "./src/app/frontend/services/cms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ActivatedRoute } from '../../../../node_modules/@angular/router';

// import swal from 'sweetalert';
var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent(cmsService, 
    // private productroadmapService: ProductroadmapService,
    // private pressreleaseService: PressreleaseService,
    _validationsService, _commonService) {
        this.cmsService = cmsService;
        this._validationsService = _validationsService;
        this._commonService = _commonService;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        this.getBlog();
        this.getProductroadmap();
        // this.getPressrelease();
        // this.activatedRoute.params.subscribe((params) => {
        //     this.whitepaperid = params['whitepaperid'];
        //     if (!this._validationsService.isEmpty(this.whitepaperid)) {
        //       this.getWhitepaperById(this.whitepaperid);
        //     }
        //   });
    };
    ResourcesComponent.prototype.getBlog = function () {
        var _this = this;
        this.cmsService.getBlog()
            .subscribe(function (res) {
            _this.blogList = res;
            // console.log(res.data);
            /*let j = 0;
            for (const prop of res.data) {
            if ( j === 0 ) {
                this.getFaqByCategory(prop._id);
            }
            j++;
            }*/
        });
    };
    // getPressrelease(){
    //     this.cmsService.getPressRelease()
    //     .subscribe(res => {
    //     this.pressreleaseList = res;
    //     });
    // }
    ResourcesComponent.prototype.getProductroadmap = function () {
        var _this = this;
        this.cmsService.getProductRoadMap()
            .subscribe(function (res) {
            _this.productroadmapList = res;
        });
    };
    /*                                  WHITEPAPER                   */
    ResourcesComponent.prototype.whitepaperForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_email)) {
            this._commonService.showMessage('error', 'Email address should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_email)) {
            this._commonService.showMessage('error', 'Enter a valid email address!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_company)) {
            this._commonService.showMessage('error', 'Company field should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_website)) {
            this._commonService.showMessage('error', 'Website field should not be empty!');
            return false;
        }
        var fieldwhitepaperid;
        if (!this._validationsService.isEmpty(this.whitepaperid)) {
            fieldwhitepaperid = {
                name: this.name,
                company: this.field_company,
                email: this.field_email,
                website: this.field_website,
                whitepaperid: this.whitepaperid
            };
        }
        else {
            fieldwhitepaperid = {
                name: this.name,
                company: this.field_company,
                email: this.field_email,
                website: this.field_website
            };
        }
        this.cmsService.addWhitepaper(fieldwhitepaperid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                // swal('Whitepaper saved successfully');
                _this.name = '';
                _this.field_company = '';
                _this.field_email = '';
                _this.field_website = '';
                _this._commonService.redirectTo('/resources');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/frontend/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.scss */ "./src/app/frontend/resources/resources.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cms_service__WEBPACK_IMPORTED_MODULE_3__["CmsService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_1__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/frontend/resources/resources.module.ts":
/*!********************************************************!*\
  !*** ./src/app/frontend/resources/resources.module.ts ***!
  \********************************************************/
/*! exports provided: ResourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return ResourcesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources.component */ "./src/app/frontend/resources/resources.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    { path: '', component: _resources_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesComponent"] },
];
var ResourcesModule = /** @class */ (function () {
    function ResourcesModule() {
    }
    ResourcesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [
                _resources_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesComponent"]
            ]
        })
    ], ResourcesModule);
    return ResourcesModule;
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
//# sourceMappingURL=resources-resources-module.js.map