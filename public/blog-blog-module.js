(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./src/app/admin/frontend/blog/blog-list/blog-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog-list/blog-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\" col-sm-12 product-list\">\n        <!-- Card -->\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <p class=\"h4 text-center py-4 admin-title\">Blog List</p>\n                <!-- <p class=\"h4 text-center py-4 admin-title\">\n                    <a [routerLink]=\"['/admin/frontend/blog']\" class=\"btn btn-outline-secondary btn-rounded waves-effect btn-add-new\">Add New</a>\n                </p> -->\n                <!--Table-->\n                <table *ngIf=\"blogList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n                    <!--Table head-->\n                    <thead>\n                        <tr>\n                            <th class=\"label-no\">#</th>\n                            <th class=\"label-name\">Title</th>\n                            <th class=\"label-status\">Status</th>\n                            <th class=\"label-action\">Action</th>\n                        </tr>\n                    </thead>\n                    <!--Table head-->\n                    <!--Table body-->\n                    <tbody>\n                        <tr *ngFor=\"let c of blogList; let i = index\">\n                            <th class=\"col-no\" scope=\"row\">{{i+1}}</th>\n                            <td class=\"col-name\">{{c.name}}</td>\n                            <td class=\"col-status\">\n                                <div class=\"form-group\">\n                                    <input type=\"checkbox\" class=\"filled-in\" id=\"checkbox{{c._id}}\" [checked]=\"c.status\" (change)=\"updateStatus($event.target.checked,c)\">\n                                    <label for=\"checkbox{{c._id}}\"></label>\n                                </div>\n                            </td>\n                            <td class=\"col-action\">\n                                <span (click)=\"editBlog(c)\" class=\"btn-edit\" mdbRippleRadius>Edit </span>/\n                                <span (click)=\"deleteBlog(c._id)\" class=\"btn-delete\" mdbRippleRadius>Delete</span>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <!--Table body-->\n                </table>\n                <!--Table-->\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/admin/frontend/blog/blog-list/blog-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog-list/blog-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #f3eeee; }\n\n.btn-add-new {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 0px !important;\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important;\n  margin-top: -5px;\n  margin-bottom: 15px;\n  box-shadow: none; }\n\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled):active,\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled).active,\n.show > .btn-outline-secondary.btn-add-new.dropdown-toggle {\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.col-name {\n  width: 30%;\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300; }\n\n.col-status .form-group {\n  margin: 0px; }\n\n.col-status .form-group label {\n  margin-top: 5px;\n  margin-left: 15px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:not(:checked) + label:after {\n  background-color: transparent;\n  border-color: #5a5a5a;\n  top: 0;\n  z-index: 0;\n  border: 1px solid #ccc; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 5px;\n  height: 9px;\n  border-color: transparent #666 #666 transparent;\n  margin-top: 3px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:after {\n  top: 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  z-index: 0; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; } }\n\ntable.dataTable[_ngcontent-c4] thead[_ngcontent-c4] th[_ngcontent-c4],\ntable.dataTable tbody th, table.dataTable tbody td {\n  border-right: 1px solid #f3eeee;\n  text-transform: capitalize; }\n\n[type=\"radio\"] + label, [type=\"checkbox\"] + label {\n  height: 13px; }\n\ntable.dataTable[_ngcontent-c4][_ngcontent-c4] thead[_ngcontent-c4][_ngcontent-c4] th[_ngcontent-c4][_ngcontent-c4] {\n  border-bottom: none; }\n\n[type=\"checkbox\"][class*=\"filled-in\"] + label:after {\n  border-radius: 2px;\n  height: 15px;\n  width: 15px; }\n\nthead {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc;\n  padding: 44px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/blog/blog-list/blog-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog-list/blog-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/admin/frontend/blog/services/blog.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(_commonService, blogService) {
        this._commonService = _commonService;
        this.blogService = blogService;
        this.blogList = '';
    }
    BlogListComponent.prototype.ngOnInit = function () {
        this.getBlogList();
    };
    BlogListComponent.prototype.updateStatus = function (event, c) {
        var _this = this;
        var fieldBlog = {
            name: c.name,
            description: c.description,
            status: event,
            blogid: c._id
        };
        this.blogService.addBlog(fieldBlog)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    BlogListComponent.prototype.getBlogList = function () {
        var _this = this;
        this.blogService.getBlog()
            .subscribe(function (res) {
            _this.blogList = res.data;
        });
    };
    BlogListComponent.prototype.editBlog = function (Blog) {
        this._commonService.redirectTo("/admin/blog/edit/" + Blog._id);
    };
    BlogListComponent.prototype.deleteBlog = function (Blogid) {
        var _this = this;
        this.blogService.deleteBlog(Blogid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getBlogList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    BlogListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blog-list.component.html */ "./src/app/admin/frontend/blog/blog-list/blog-list.component.html"),
            styles: [__webpack_require__(/*! ./blog-list.component.scss */ "./src/app/admin/frontend/blog/blog-list/blog-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/blog/blog.module.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog.module.ts ***!
  \****************************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-list/blog-list.component */ "./src/app/admin/frontend/blog/blog-list/blog-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/admin/frontend/blog/blog/blog.component.ts");
/* harmony import */ var _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _node_modules_ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../node_modules/ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var _node_modules_ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submenu/submenu.component */ "./src/app/admin/frontend/blog/submenu/submenu.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/admin/frontend/blog/parent/parent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var router = [
    {
        path: '',
        component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_10__["ParentComponent"],
        children: [
            { path: '', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] },
            { path: 'list', component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"] },
            { path: 'edit/:blogid', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] }
        ]
    }
];
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(router),
                _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                _node_modules_ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
            ],
            declarations: [
                _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
                _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_9__["SubmenuComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_10__["ParentComponent"]
            ]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ }),

/***/ "./src/app/admin/frontend/blog/blog/blog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog/blog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <!-- Card -->\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <!-- Default form subscription -->\n                <form (ngSubmit)=\"blogForm()\" class=\"addBlog\">\n                    <p class=\"h4 text-center py-4 admin-title\">Blog</p>\n                    <input type=\"hidden\" [(ngModel)]=\"blogid\" name=\"blogid\" />\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-12 col-sm-12\">\n                            <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3\">Name</label>\n                            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"name\" name=\"name\">\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-12 \">\n                        <label for=\"defaultFormCarddesc\" class=\"grey-text font-weight-light\">Description</label>\n                        <ckeditor [(ngModel)]=\"description\" name=\"description\" id=\"defaultFormCarddesc\"></ckeditor>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"switch\">\n                                <label>\n                                    Status OFF\n                                    <input [(ngModel)]=\"status\" name=\"status\" type=\"checkbox\">\n                                    <span class=\"lever\"></span>\n                                    Status ON\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 \">\n                            <button type=\"submit\" class=\"btn btn-primary waves-light btn-submit\" mdbWavesEffect>Submit</button>\n                        </div>\n                    </div>\n                </form>\n                <!-- Default form subscription -->\n            </div>\n            <!-- Card body -->\n        </div>\n        <!-- Card -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/frontend/blog/blog/blog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog/blog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px; }\n\n.addBlog label {\n  font-size: 13px;\n  color: #000 !important;\n  font-weight: 400 !important; }\n\n.form-group {\n  margin-bottom: .5rem; }\n\n.form-check {\n  padding: 0px; }\n\n.addBlog .form-check label {\n  margin-right: 20px; }\n\n.addBlog .form-control {\n  font-size: 15px; }\n\n.addBlog .switch {\n  margin-top: 30px;\n  margin-left: 15px; }\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #54afc6;\n  border-radius: 0.25rem; }\n\n[type=\"radio\"]:checked + label:after, .switch label input[type=checkbox]:checked + .lever:after {\n  border-color: #54afc6;\n  background-color: #54afc6; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #a6dbe8; }\n\n.btn-add-feild {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important;\n  width: 20px;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 5px; }\n\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled):active,\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-add-feild.dropdown-toggle {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important; }\n\n.btn-add-feild .fa {\n  font-size: 25px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none;\n  margin-top: 20px; }\n\n.btn-primary.btn-submit:not([disabled]):not(.disabled):active,\n.btn-primary.btn-submit:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-submit.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  margin-top: 20px;\n  box-shadow: none; }\n\n[type=\"radio\"]:checked + label:before {\n  display: inline-block;\n  content: \"\";\n  z-index: 999;\n  width: 12px;\n  height: 12px;\n  border: 2px solid #fff;\n  margin-top: 6px;\n  margin-left: 6px; }\n\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after {\n  border-color: #54afc6; }\n\n.form-control {\n  display: inline-block; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.feild-features {\n  max-width: 300px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.feild-button {\n  max-width: 250px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/blog/blog/blog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/frontend/blog/blog/blog.component.ts ***!
  \************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/admin/frontend/blog/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(activatedRoute, _commonService, _validationsService, blogService) {
        this.activatedRoute = activatedRoute;
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.blogService = blogService;
        this.blogid = '';
        this.name = '';
        this.description = '';
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.blogid = params['blogid'];
            if (!_this._validationsService.isEmpty(_this.blogid)) {
                _this.getBlogById(_this.blogid);
            }
        });
    };
    BlogComponent.prototype.getBlogById = function (blogid) {
        var _this = this;
        this.blogService.getBlogById(blogid)
            .subscribe(function (res) {
            _this.name = res.data.name;
            _this.description = res.data.description;
            _this.blogid = res.data._id;
        });
    };
    BlogComponent.prototype.blogForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Blog Name field should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.description)) {
            this._commonService.showMessage('error', 'Description should not be empty!');
            return false;
        }
        var fieldblogid;
        if (!this._validationsService.isEmpty(this.blogid)) {
            fieldblogid = {
                name: this.name,
                description: this.description,
                blogid: this.blogid
            };
        }
        else {
            fieldblogid = {
                name: this.name,
                description: this.description
            };
        }
        this.blogService.addBlog(fieldblogid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.name = '';
                _this.description = '';
                _this._commonService.redirectTo('/admin/blog/list');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/admin/frontend/blog/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/admin/frontend/blog/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/blog/parent/parent.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/frontend/blog/parent/parent.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-3 col-lg-11 col-md-12 col-sm-12\">\n    <app-submenu></app-submenu>\n  </div>\n  <div class=\"col-xl-9 col-lg-11 col-md-12 col-sm-12\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/frontend/blog/parent/parent.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/frontend/blog/parent/parent.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/frontend/blog/parent/parent.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/frontend/blog/parent/parent.component.ts ***!
  \****************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
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

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/admin/frontend/blog/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.scss */ "./src/app/admin/frontend/blog/parent/parent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/blog/services/blog.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/frontend/blog/services/blog.service.ts ***!
  \**************************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogService = /** @class */ (function () {
    function BlogService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    BlogService.prototype.addBlog = function (newBlog) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/blogs/", newBlog, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getBlog = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/blogs/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.deleteBlog = function (blogId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/blogs/" + blogId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getBlogById = function (featureid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/blogs/" + featureid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getBlogByStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/blogs/get/list", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/admin/frontend/blog/submenu/submenu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/frontend/blog/submenu/submenu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card submenu-wrapper\">\n  <div class=\"menu-tile\">Blog</div>\n  <ul class=\"submenu-ul\">\n    <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n      <a [routerLink]=\"['/admin/frontend/blog']\" class=\"waves-effect\">Create Blog</a>\n    </li>\n    <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n      <a [routerLink]=\"['/admin/frontend/blog/list']\" class=\"waves-effect\">Blog List</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/admin/frontend/blog/submenu/submenu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/frontend/blog/submenu/submenu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submenu-wrapper {\n  height: 70vh;\n  overflow: hidden; }\n\n.menu-tile {\n  padding: 15px;\n  font-size: 18px;\n  color: #54afc6;\n  border-bottom: 1px solid #eae8e8; }\n\n.submenu-ul {\n  list-style: none;\n  padding: 0px; }\n\nli.submenu-item a {\n  display: block;\n  display: block;\n  line-height: 50px;\n  padding: 0px 15px;\n  font-size: 14px;\n  color: #666;\n  border-bottom: 1px solid #eae8e8; }\n\nli.submenu-item.active a, li.submenu-item a:hover {\n  background: #54afc6;\n  color: #fff; }\n\nli.submenu-item.active a::after, li.submenu-item a:hover::after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\f0d9\";\n  color: #fff;\n  right: 0px;\n  position: absolute;\n  font-size: 50px;\n  margin-right: -1px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/blog/submenu/submenu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/frontend/blog/submenu/submenu.component.ts ***!
  \******************************************************************/
/*! exports provided: SubmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuComponent", function() { return SubmenuComponent; });
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

var SubmenuComponent = /** @class */ (function () {
    function SubmenuComponent() {
    }
    SubmenuComponent.prototype.ngOnInit = function () {
    };
    SubmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submenu',
            template: __webpack_require__(/*! ./submenu.component.html */ "./src/app/admin/frontend/blog/submenu/submenu.component.html"),
            styles: [__webpack_require__(/*! ./submenu.component.scss */ "./src/app/admin/frontend/blog/submenu/submenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmenuComponent);
    return SubmenuComponent;
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
//# sourceMappingURL=blog-blog-module.js.map