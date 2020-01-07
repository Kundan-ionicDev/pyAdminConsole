(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n<ngx-loading [show]=\"loading\" [config]=\"{animationType: ngxLoadingAnimationTypes.circleSwish, primaryColour: primaryColour, backdropBorderRadius: '3px'}\"\r\n      [template]=\"loadingTemplate\"></ngx-loading>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"copy_layout\">\r\n    <p>Copyright © 2019 Credence. All Rights Reserved | Design by <a href=\"http://credencetechnology.in/\" target=\"_blank\">Credence Technology</a> </p>\r\n  </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n  <nav class=\"top1 navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"\">PY Ticket</a>\r\n    </div>\r\n   \r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"dropdown\">\r\n        <a href=\"#\" class=\"dropdown-toggle avatar\" data-toggle=\"dropdown\">\r\n          Welcome, <b> {{ userName }}</b>\r\n          <span class=\"badge\"></span></a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\r\n      <div class=\"sidebar-nav navbar-collapse\">\r\n        <ul class=\"nav\" id=\"side-menu\">\r\n          <li>\r\n            <a [routerLink]=\"['dashboard']\"><i class=\"fa fa-dashboard fa-fw nav_icon\"></i>Dashboard</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><i class=\"fa fa-laptop nav_icon\"></i>Role Management<span class=\"fa arrow\"></span></a>\r\n            <ul class=\"nav nav-second-level\">\r\n              <li>\r\n                <a [routerLink]=\"['pagenotfound']\">Account Admin</a>\r\n                <a [routerLink]=\"['pagenotfound']\">Event Admin</a>\r\n                <a [routerLink]=\"['pagenotfound']\">Event User</a>\r\n                <a [routerLink]=\"['pagenotfound']\">Security Staff</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><i class=\"fa fa-indent nav_icon\"></i>Event Creation<span class=\"fa arrow\"></span></a>\r\n            <ul class=\"nav nav-second-level\">\r\n              <li>\r\n                <a [routerLink]=\"['createevent']\">Create Event</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['pagenotfound']\">Send Notification</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a><i class=\"fa fa-envelope nav_icon\"></i>Reports<span class=\"fa arrow\"></span></a>\r\n            <ul class=\"nav nav-second-level\">\r\n              <li>\r\n                <a [routerLink]=\"['couponcreate']\">Create Coupon</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['lotteryrule']\">Create Lottery</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['lotteryhistory']\">Lottery History</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['viewevents']\">View Events</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['viewusers']\">View Users</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['pagenotfound']\">Audit Trail</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"['/userAuth']\"><i class=\"fa fa-flask nav_icon\"></i>Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applicationadmin/applicationadmin.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applicationadmin/applicationadmin.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n    <div class=\"col-md-12 graphs\">\r\n      <div class=\"xs\">\r\n          <h3>Application Admin</h3>\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"main-box clearfix\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table user-list\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>User</span></th>\r\n                      <th><span>Created</span></th>\r\n                      <th class=\"text-center\"><span>Status</span></th>\r\n                      <th><span>Email</span></th>\r\n                      <th>&nbsp;</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <img src=\"https://bootdey.com/img/Content/avatar/avatar1.png\" alt=\"\">\r\n                        <a href=\"\" class=\"user-link\">Mila Kunis</a>\r\n                        <span class=\"user-subhead\">Admin</span>\r\n                      </td>\r\n                      <td>\r\n                        2013/08/08\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <span class=\"label label-default\">Inactive</span>\r\n                      </td>\r\n                      <td>\r\n                        <a href=\"\">mila@kunis.com</a>\r\n                      </td>\r\n                      <td style=\"width: 20%;\">\r\n                        <a href=\"#\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-search-plus fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"#\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-pencil fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"#\" class=\"table-link danger\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-trash-o fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <img src=\"https://bootdey.com/img/Content/avatar/avatar2.png\" alt=\"\">\r\n                        <a href=\"\" class=\"user-link\">George Clooney</a>\r\n                        <span class=\"user-subhead\">Admin</span>\r\n                      </td>\r\n                      <td>\r\n                        2013/08/12\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <span class=\"label label-success\">Active</span>\r\n                      </td>\r\n                      <td>\r\n                        <a href=\"\">marlon@brando.com</a>\r\n                      </td>\r\n                      <td style=\"width: 20%;\">\r\n                        <a href=\"\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-search-plus fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-pencil fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"\" class=\"table-link danger\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-trash-o fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" alt=\"\">\r\n                        <a href=\"\" class=\"user-link\">Ryan Gossling</a>\r\n                        <span class=\"user-subhead\">Admin</span>\r\n                      </td>\r\n                      <td>\r\n                        2013/03/03\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <span class=\"label label-danger\">Banned</span>\r\n                      </td>\r\n                      <td>\r\n                        <a href=\"\">jack@nicholson</a>\r\n                      </td>\r\n                      <td style=\"width: 20%;\">\r\n                        <a href=\"\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-search-plus fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-pencil fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"\" class=\"table-link danger\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-trash-o fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <ul class=\"pagination pull-right\">\r\n                <li><a href=\"\"><i class=\"fa fa-chevron-left\"></i></a></li>\r\n                <li><a href=\"\">1</a></li>\r\n                <li><a href=\"\">2</a></li>\r\n                <li><a href=\"\">3</a></li>\r\n                <li><a href=\"\">4</a></li>\r\n                <li><a href=\"\">5</a></li>\r\n                <li><a href=\"\"><i class=\"fa fa-chevron-right\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/couponcreate/couponcreate.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/couponcreate/couponcreate.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <div class=\"graphs\">\r\n    <div class=\"xs\">\r\n      <h3>Coupon Entry/ Manage</h3>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\" style=\"float: right;\">\r\n          <button (click)=\"add()\" *ngIf=\"showHide == false\" class=\"btn-success btn\">\r\n            Add\r\n          </button>\r\n\r\n          <button (click)=\"add()\" *ngIf=\"showHide == true\" class=\"btn-success btn\">\r\n            Show Coupon list\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <br />\r\n\r\n      <div id=\"content\" class=\"container\" *ngIf=\"showHide == false\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"main-box clearfix\">\r\n              <div class=\"table-responsive  scrolling_div\">\r\n                <table class=\"table user-list\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Coupon Code</span></th>\r\n                      <th><span>Description</span></th>\r\n                      <th><span>Event Name</span></th>\r\n                      <th><span>Expire</span></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let coupons of couponList\">\r\n                      <td class=\"text-center\">\r\n                        {{ coupons.code }}\r\n                      </td>\r\n                      <td>\r\n                        {{ coupons.description }}\r\n                      </td>\r\n                      <td>\r\n                        {{ coupons.fk_event.title }}\r\n                      </td>\r\n                      <td>\r\n                        {{ coupons.endDate | date : 'EEEE, MMMM d, y'}}\r\n                      </td>\r\n                      <!-- <td style=\"width: 20%;\">\r\n                        <a href=\"\" class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-pencil fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a href=\"\" class=\"table-link danger\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-trash-o fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                      </td> -->\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"tab-content\" *ngIf=\"showHide == true\">\r\n        <div class=\"tab-pane active\">\r\n          <form role=\"form\" [formGroup]=\"couponForm\" (ngSubmit)=\"createCoupon()\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n              <label for=\"focusedinput\" class=\"col-sm-2 control-label\">Coupon Code </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control1\" formControlName=\"couponcode\" id=\"focusedinput\"\r\n                  placeholder=\"Name\" [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" />\r\n                <div *ngIf=\"submitted && f.Name.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.Name.errors.required\">Name is required</div>\r\n                  <div *ngIf=\"f.Name.errors.email\">Name must be a valid</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledinput\" class=\"col-sm-2 control-label\">Description</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" formControlName=\"description\" class=\"form-control1\" id=\"disabledinput\"\r\n                  placeholder=\"Description\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\r\n                <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.description.errors.required\">Description is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"selector1\" class=\"col-sm-2 control-label\">Event For</label>\r\n              <div class=\"col-sm-8\">\r\n                <select name=\"selector1\" id=\"selector1\" formControlName=\"eventId\" class=\"form-control1\">\r\n                  <option value=\"0\">Select</option>\r\n                  <option *ngFor=\"let events of eventList\" [value]=\"events.eventId\">{{ events.title }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Expire Date</label>\r\n              <div class=\"col-sm-8\" data-toggle=\"tooltip\" title=\"Select Expiry Date!\" data-placement=\"bottom\">\r\n                <input [owlDateTime]=\"enddt1\" [owlDateTimeTrigger]=\"enddt1\" formControlName=\"expiredt\"\r\n                  class=\"form-control1\" />\r\n                <owl-date-time #enddt1></owl-date-time>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"panel-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-8 col-sm-offset-2\">\r\n                  <button class=\"btn-success btn\">Submit</button> &nbsp;\r\n                  <!-- <button class=\"btn-default btn\">Cancel</button>&nbsp; -->\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ngx-loading [show]=\"loading\" [config]=\"{animationType: ngxLoadingAnimationTypes.circleSwish, primaryColour: primaryColour, backdropBorderRadius: '3px'}\"\r\n  [template]=\"loadingTemplate\"></ngx-loading>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createvent/createvent.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createvent/createvent.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <div class=\"graphs\">\r\n    \r\n    <div class=\"xs\">\r\n      <h3>Create Event</h3>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\">\r\n          <form role=\"form\" [formGroup]=\"createeventForm\" (ngSubmit)=\"CreateEvent()\" class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n              <label for=\"focusedinput\" class=\"col-sm-2 control-label\">Event Name </label>\r\n              <div class=\"col-sm-8\">\r\n\r\n                <input type=\"text\" data-toggle=\"tooltip\" title=\"Enter Event Name!\" data-placement=\"bottom\"\r\n                  class=\"form-control1\" formControlName=\"Name\" id=\"focusedinput\" placeholder=\"Name\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.Name.errors }\" />\r\n                <div *ngIf=\"submitted && f.Name.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.Name.errors.required\">Name is required</div>\r\n                  <div *ngIf=\"f.Name.errors.email\">Name must be a valid</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledinput\" class=\"col-sm-2 control-label\">Description</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" data-toggle=\"tooltip\" title=\"Enter Event Description!\" data-placement=\"bottom\"\r\n                  formControlName=\"description\" class=\"form-control1\" id=\"disabledinput\" placeholder=\"Description\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\r\n                <div *ngIf=\"submitted && f.description.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.description.errors.required\">*Event Description is required.</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Address</label>\r\n              <div class=\"col-sm-8\">\r\n\r\n                <input type=\"text\" data-toggle=\"tooltip\" title=\"Enter Event Address!\" data-placement=\"bottom\"\r\n                  formControlName=\"address\"  placeholder=\"Address\" class=\"form-control1\" />\r\n                <div *ngIf=\"submitted && f.address.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"disabledinput\" class=\"col-sm-2 control-label\">Start Date</label>\r\n              <div class=\"col-sm-3\">\r\n                <input [owlDateTime]=\"startdt1\" [owlDateTimeTrigger]=\"startdt1\" data-toggle=\"tooltip\"\r\n                  title=\"Enter Event StartDate!\" data-placement=\"bottom\" formControlName=\"startdate\"\r\n                  class=\"form-control1\" id=\"disabledinput\" placeholder=\"2019-12-11\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.startdate.errors }\" />\r\n                <owl-date-time #startdt1></owl-date-time>\r\n                <div *ngIf=\"submitted && f.startdate.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.startdate.errors.required\">*Event Start date is required.</div>\r\n                </div>\r\n              </div>\r\n\r\n              <label for=\"disabledinput\" class=\"col-sm-2 control-label text-left\">End Date</label>\r\n              <div class=\"col-sm-3\">\r\n                <input [owlDateTime]=\"enddt1\" [owlDateTimeTrigger]=\"enddt1\" data-toggle=\"tooltip\" title=\"Enter EndDate!\"\r\n                  data-placement=\"bottom\" formControlName=\"endate\" class=\"form-control1\" id=\"disabledinput\"\r\n                  placeholder=\"2019-12-11\" [ngClass]=\"{ 'is-invalid': submitted && f.endate.errors }\" />\r\n                <owl-date-time #enddt1></owl-date-time>\r\n\r\n                <div *ngIf=\"submitted && f.endate.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.endate.errors.required\">*Event End Date is required.</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"focusedinput\" class=\"col-sm-2 control-label\">Contact Person </label>\r\n              <div class=\"col-sm-3\">\r\n                <input type=\"text\" data-toggle=\"tooltip\" title=\"Enter Contact Person Name!\" data-placement=\"bottom\"\r\n                  class=\"form-control1\" formControlName=\"contactpname\" id=\"focusedinput\"\r\n                  placeholder=\"Enter Contact Person Name!\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.contactpname.errors }\" />\r\n                <div *ngIf=\"submitted && f.contactpname.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.contactpname.errors.required\">*Person name is required</div>\r\n                </div>\r\n              </div>\r\n              <label for=\"focusedinput\" class=\"col-sm-2 control-label\">Contact Number </label>\r\n              <div class=\"col-sm-3\">\r\n                <input type=\"number\" minlength=\"1\" maxlength=\"10\" data-toggle=\"tooltip\"\r\n                  title=\"Enter Contact Person Number !\" data-placement=\"bottom\" class=\"form-control1\"\r\n                  formControlName=\"contactpnumber\" id=\"focusedinput\" placeholder=\"Enter Contact Person Number!\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.contactpnumber.errors }\" />\r\n                <div *ngIf=\"submitted && f.contactpnumber.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.contactpnumber.errors.required\">*Contact Number is required</div>\r\n                  <div *ngIf=\"f.contactpnumber.errors.number\">*Contact Number must be a valid</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Duration</label>\r\n              <div class=\"col-sm-3\">\r\n                <input type=\"number\" data-toggle=\"tooltip\" title=\"Enter Event Duration!\" data-placement=\"bottom\"\r\n                  formControlName=\"duration\" class=\"form-control1\" id=\"inputPassword\" placeholder=\"Duration\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" />\r\n                <div *ngIf=\"submitted && f.duration.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.duration.errors.required\">*Event Duration is required</div>\r\n                </div>\r\n              </div>\r\n\r\n              <label for=\"selector1\" class=\"col-sm-2 control-label\">Category</label>\r\n              <div class=\"col-sm-3\">\r\n                <select data-toggle=\"tooltip\" title=\"Select Event Category!\" data-placement=\"bottom\" name=\"selector1\"\r\n                  id=\"selector1\" formControlName=\"category\" class=\"form-control1\">\r\n                  <option value=\"0\">Select</option>\r\n                  <option *ngFor=\"let cat of categories\" [value]=\"cat.id\">{{cat.name}}</option>\r\n\r\n                </select>\r\n                <div *ngIf=\"submitted && f.category.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.category.errors.required\">*Event Category is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Max Admittance</label>\r\n              <div class=\"col-sm-3\">\r\n                <input type=\"number\" data-toggle=\"tooltip\" title=\"Enter Max Admittance!\" data-placement=\"bottom\"\r\n                  formControlName=\"admittance\" class=\"form-control1\" id=\"inputPassword\" placeholder=\"Max Admittance\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.admittance.errors }\">\r\n                <div *ngIf=\"submitted && f.admittance.errors\" class=\"alert-light\">\r\n                  <div *ngIf=\"f.admittance.errors.required\">Max Admittance is required</div>\r\n                </div>\r\n              </div>\r\n              <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Max User Limit</label>\r\n              <div class=\"col-sm-3\">\r\n                <input type=\"number\" data-toggle=\"tooltip\" title=\"Enter Max User Limit!\" data-placement=\"bottom\"\r\n                  formControlName=\"userlimit\" class=\"form-control1\" id=\"inputPassword\" placeholder=\"Max User Limit\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.userlimit.errors }\">\r\n                <div *ngIf=\"submitted && f.userlimit.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.userlimit.errors.required\">Max User Limit is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"radio\" class=\"col-sm-2 control-label\">Fee Options</label>\r\n              <div class=\"col-sm-3\">\r\n                <div data-toggle=\"tooltip\" title=\"select fees option - Free\" data-placement=\"left\" class=\"radio block\">\r\n                  <label><input type=\"radio\" checked=\"checked\" name=\"feesoption\" formControlName=\"feesoption\"\r\n                      value=\"free\">\r\n                    Free </label></div>\r\n                <div class=\"radio block\" data-toggle=\"tooltip\" title=\"select fees option - Paid\" data-placement=\"left\">\r\n                  <label><input type=\"radio\" disabled name=\"feesoption\" formControlName=\"feesoption\" value=\"paid\">\r\n                    Paid</label></div>\r\n              </div>\r\n              <label for=\"radio\" class=\"col-sm-2 control-label\">Admittance Type</label>\r\n              <div class=\"col-sm-3\">\r\n                <div class=\"radio block\"><label><input checked=\"checked\" type=\"radio\" data-toggle=\"tooltip\"\r\n                      title=\"Single admittance entry\" data-placement=\"bottom\" name=\"admittype\"\r\n                      formControlName=\"admittype\" value=\"single\"> Single Entry</label></div>\r\n                <div class=\"radio block\"><label><input disabled type=\"radio\" data-toggle=\"tooltip\"\r\n                      title=\"Multiple admittance entry\" data-placement=\"bottom\" name=\"admittype\"\r\n                      formControlName=\"admittype\" value=\"multiple\"> Multiple Entry</label></div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"panel-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-8 col-sm-offset-2\" style=\"text-align: center;\">\r\n                  <button class=\"btn-success btn\" >Submit</button> &nbsp;\r\n                  <button class=\"btn-default btn\" (click)=\"reset()\">Cancel</button>&nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ngx-loading [show]=\"loading\" [config]=\"{animationType: ngxLoadingAnimationTypes.circleSwish, primaryColour: primaryColour, backdropBorderRadius: '3px'}\"\r\n      [template]=\"loadingTemplate\"></ngx-loading>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createvent/eventdialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createvent/eventdialog.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \r\n<h2 mat-dialog-title>\r\n    <h3 class=\"panel-title\"><strong>Event Details</strong></h3>\r\n</h2> -->\r\n\r\n<div class=\"row p-t-20\">\r\n  <div class=\"col-md-6\">\r\n    <h3 class=\"panel-title\"><strong>Print Event Details</strong></h3>\r\n  </div>\r\n  <div class=\"col-md-6 text-right\">\r\n    <button (click)=\"makePdf()\" class=\"btn-success btn\">Print\r\n      <span class=\"glyphicon glyphicon-print\"></span>\r\n    </button> &nbsp;\r\n  </div>\r\n</div>\r\n<br />\r\n<!-- <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\"><strong>Event Details</strong></h3>\r\n  </div> -->\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <div class=\"container\" #content id=\"content\" style=\"background-color: #ffff;max-width: 100%;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <!-- <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\"><strong>Event Details</strong></h3>\r\n              </div> -->\r\n          <div class=\"panel-body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-condensed\">\r\n                <tr>\r\n                  <td style=\"width: 200px;\">\r\n                    <b>Event Name :</b>\r\n                  </td>\r\n                  <td>\r\n                    {{ data.title }}\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <b>Event Description :</b>\r\n                  </td>\r\n                  <td>\r\n                    {{ data.eventDescription }}\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>\r\n                    <b>Event Venue :</b>\r\n                  </td>\r\n                  <td style=\"word-wrap:break-word;\">\r\n                    {{ data.address }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <b>Start Date:</b>\r\n                  </td>\r\n                  <td>\r\n                    {{ data.startDate | date:'EEEE, MMMM d, y h:mm a ' }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>End Date: </b></td>\r\n                  <td>\r\n                    {{ data.endDate  | date:'EEEE, MMMM d, y h:mm a ' }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Contact Person Name:</b></td>\r\n                  <td>{{ data.contactPersonName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td><b>Contact Person Number:</b></td>\r\n                  <td> {{ data.contactPerson }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n\r\n                  </td>\r\n                  <td>\r\n                    <ngx-qrcode [qrc-element-type]=\"elementType\" [qrc-value]=\"data.QrValue\">\r\n                    </ngx-qrcode><br>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row-fluid\">\r\n\r\n                  <h2>Terms of Use</h2>\r\n                  These Terms and Conditions constitute an agreement (“Agreement”) between you (“you”, “your”, “user”,\r\n                  “Customer”) and the Company.Avocado gumbo artichoke ricebean groundnut tigernut. Daikon kakadu plum\r\n                  water spinach garbanzo eggplant fava bean chard rock melon carrot rutabaga water chestnut broccoli\r\n                  courgette onion.\r\n\r\n                  <h2>Eligibility and Identity.</h2>\r\n                  To be eligible to use our Services, you must be at least 13 years old. Sorrel jícama tomato silver\r\n                  beet wattle seed black-eyed pea garlic fennel tigernut okra beetroot shallot. Soko shallot melon\r\n                  dandelion bamboo shoot chickpea soybean pumpkin kakadu plum parsley ricebean grape courgette courgette\r\n                  jícama tatsoi. Black-eyed pea gourd tomatillo arugula cucumber celery mustard black-eyed pea\r\n                  cauliflower soybean rutabaga turnip groundnut.\r\n\r\n                 \r\n                  <h2>Privacy</h2>\r\n                  Please see our <a href=\"http://www.pyquantum.com/privacy-policy.html\">Privacy Policy</a> as set forth on the site.\r\n\r\n                  <h2>About These Terms</h2>\r\n                  <p>These Terms and Conditions are just a sample and are not legally binding. Real Terms of Services do\r\n                    not (usually) contain vegetables...</p>\r\n\r\n                  <footer>\r\n                    <hr>\r\n                    <p class=\"pull-right\">A <a href=\"http://www.portnine.com/bootstrap-themes\" target=\"_blank\">Free\r\n                        Event Ticket</a> by <a href=\"http://www.pyquantum.com\" target=\"_blank\">pyQuantum</a></p>\r\n\r\n                    <p>&copy; 2019 <a href=\"http://www.pyquantum.com\" target=\"_blank\">pyQuantum</a></p>\r\n                  </footer>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"panel-footer\">\r\n      <a *ngIf=\"display\" (click)=\"makePdf()\" download>Download and Print Event Details</a>\r\n    </div> -->\r\n  </div>\r\n</mat-dialog-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <!-- <div class=\"graphs\">\r\n    <div class=\"col_3\">\r\n      <div class=\"col-md-3 widget widget1\">\r\n        <div class=\"r3_counter_box\">\r\n          <i class=\"pull-left fa fa-thumbs-up icon-rounded\"></i>\r\n          <div class=\"stats\">\r\n            <h5><strong>45</strong></h5>\r\n            <span>New Events</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 widget widget1\">\r\n        <div class=\"r3_counter_box\">\r\n          <i class=\"pull-left fa fa-users user1 icon-rounded\"></i>\r\n          <div class=\"stats\">\r\n            <h5><strong>1019</strong></h5>\r\n            <span>New Visitors</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 widget widget1\">\r\n        <div class=\"r3_counter_box\">\r\n          <i class=\"pull-left fa fa-comment user2 icon-rounded\"></i>\r\n          <div class=\"stats\">\r\n            <h5><strong>1012</strong></h5>\r\n            <span>New Users</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 widget\">\r\n        <div class=\"r3_counter_box\">\r\n          <i class=\"pull-left fa fa-dollar dollar1 icon-rounded\"></i>\r\n          <div class=\"stats\">\r\n            <h5><strong>$450</strong></h5>\r\n            <span>Profit Today</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n    <div class=\"col_1\">\r\n      <div class=\"col-md-4 span_7\">\r\n        <div class=\"cal1 cal_2\">\r\n          <div class=\"clndr\">\r\n            <div class=\"clndr-controls\">\r\n              <div class=\"clndr-control-button\">\r\n                <p class=\"clndr-previous-button\">previous</p>\r\n              </div>\r\n              <div class=\"month\">July 2015</div>\r\n              <div class=\"clndr-control-button rightalign\">\r\n                <p class=\"clndr-next-button\">next</p>\r\n              </div>\r\n            </div>\r\n            <table class=\"clndr-table\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n              <thead>\r\n                <tr class=\"header-days\">\r\n                  <td class=\"header-day\">S</td>\r\n                  <td class=\"header-day\">M</td>\r\n                  <td class=\"header-day\">T</td>\r\n                  <td class=\"header-day\">W</td>\r\n                  <td class=\"header-day\">T</td>\r\n                  <td class=\"header-day\">F</td>\r\n                  <td class=\"header-day\">S</td>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td class=\"day adjacent-month last-month calendar-day-2015-06-28\">\r\n                    <div class=\"day-contents\">28</div>\r\n                  </td>\r\n                  <td class=\"day adjacent-month last-month calendar-day-2015-06-29\">\r\n                    <div class=\"day-contents\">29</div>\r\n                  </td>\r\n                  <td class=\"day adjacent-month last-month calendar-day-2015-06-30\">\r\n                    <div class=\"day-contents\">30</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-01\">\r\n                    <div class=\"day-contents\">1</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-02\">\r\n                    <div class=\"day-contents\">2</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-03\">\r\n                    <div class=\"day-contents\">3</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-04\">\r\n                    <div class=\"day-contents\">4</div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"day calendar-day-2015-07-05\">\r\n                    <div class=\"day-contents\">5</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-06\">\r\n                    <div class=\"day-contents\">6</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-07\">\r\n                    <div class=\"day-contents\">7</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-08\">\r\n                    <div class=\"day-contents\">8</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-09\">\r\n                    <div class=\"day-contents\">9</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-10\">\r\n                    <div class=\"day-contents\">10</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-11\">\r\n                    <div class=\"day-contents\">11</div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"day calendar-day-2015-07-12\">\r\n                    <div class=\"day-contents\">12</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-13\">\r\n                    <div class=\"day-contents\">13</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-14\">\r\n                    <div class=\"day-contents\">14</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-15\">\r\n                    <div class=\"day-contents\">15</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-16\">\r\n                    <div class=\"day-contents\">16</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-17\">\r\n                    <div class=\"day-contents\">17</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-18\">\r\n                    <div class=\"day-contents\">18</div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"day calendar-day-2015-07-19\">\r\n                    <div class=\"day-contents\">19</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-20\">\r\n                    <div class=\"day-contents\">20</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-21\">\r\n                    <div class=\"day-contents\">21</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-22\">\r\n                    <div class=\"day-contents\">22</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-23\">\r\n                    <div class=\"day-contents\">23</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-24\">\r\n                    <div class=\"day-contents\">24</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-25\">\r\n                    <div class=\"day-contents\">25</div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"day calendar-day-2015-07-26\">\r\n                    <div class=\"day-contents\">26</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-27\">\r\n                    <div class=\"day-contents\">27</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-28\">\r\n                    <div class=\"day-contents\">28</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-29\">\r\n                    <div class=\"day-contents\">29</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-30\">\r\n                    <div class=\"day-contents\">30</div>\r\n                  </td>\r\n                  <td class=\"day calendar-day-2015-07-31\">\r\n                    <div class=\"day-contents\">31</div>\r\n                  </td>\r\n                  <td class=\"day adjacent-month next-month calendar-day-2015-08-01\">\r\n                    <div class=\"day-contents\">1</div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 span_8\">\r\n        <div class=\"activity_box\">\r\n          <div class=\"scrollbar\" id=\"style-2\">\r\n            <div class=\"activity-row\">\r\n              <div class=\"col-xs-1\"><i class=\"fa fa-thumbs-up text-info icon_13\"> </i> </div>\r\n              <div class=\"col-xs-3 activity-img\"><img src='../../../assets/images/5.png' class=\"img-responsive\" alt=\"\" /></div>\r\n              <div class=\"col-xs-8 activity-desc\">\r\n                <h5>Supermoon ft. Prateek</h5>\r\n                <p> Kuhad Winter Tour 2019 - Mumbai</p>\r\n                <h6>December 3rd | 8:03 PM</h6>\r\n              </div>\r\n              <div class=\"clearfix\"> </div>\r\n            </div>\r\n            <div class=\"activity-row\">\r\n              <div class=\"col-xs-1\"><i class=\"fa fa-comment text-info\"></i> </div>\r\n              <div class=\"col-xs-3 activity-img\"><img src='../../../assets/images/3.png' class=\"img-responsive\" alt=\"\" /></div>\r\n              <div class=\"col-xs-8 activity-desc\">\r\n                <h5>Arijit Singh Live in Mumbai</h5>\r\n                <p>One Night Only 2020 | Sign up for Early Access</p>\r\n                <h6>January 25 | 7PM</h6>\r\n              </div>\r\n              <div class=\"clearfix\"> </div>\r\n            </div>\r\n            <div class=\"activity-row\">\r\n              <div class=\"col-xs-1\"><i class=\"fa fa-check text-info icon_11\"></i></div>\r\n              <div class=\"col-xs-3 activity-img\"><img src='../../../assets/images/1.png' class=\"img-responsive\" alt=\"\" /></div>\r\n              <div class=\"col-xs-8 activity-desc\">\r\n                <h5><a href=\"#\">standard chunk</a> liked <a href=\"#\">model</a></h5>\r\n                <p>Lorem Ipsum is simply dummy</p>\r\n                <h6>8:03</h6>\r\n              </div>\r\n              <div class=\"clearfix\"> </div>\r\n            </div>\r\n            <div class=\"activity-row1\">\r\n              <div class=\"col-xs-1\"><i class=\"fa fa-user text-info icon_12\"></i></div>\r\n              <div class=\"col-xs-3 activity-img\"><img src='images/4.png' class=\"img-responsive\" alt=\"\" /></div>\r\n              <div class=\"col-xs-8 activity-desc\">\r\n                <h5><a href=\"#\">perspiciatis</a> liked <a href=\"#\">donating</a></h5>\r\n                <p>Lorem Ipsum is simply dummy</p>\r\n                <h6>8:03</h6>\r\n              </div>\r\n              <div class=\"clearfix\"> </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 stats-info\">\r\n        <div class=\"panel-heading\">\r\n          <h4 class=\"panel-title\">Event Stats</h4>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <ul class=\"list-unstyled\">\r\n            <li>Arjit Singh<div class=\"text-success pull-right\">12%<i class=\"fa fa-level-up\"></i></div>\r\n            </li>\r\n            <li>Firefox<div class=\"text-success pull-right\">15%<i class=\"fa fa-level-up\"></i></div>\r\n            </li>\r\n            <li>Internet Explorer<div class=\"text-success pull-right\">18%<i class=\"fa fa-level-up\"></i></div>\r\n            </li>\r\n            <li>Safari<div class=\"text-danger pull-right\">17%<i class=\"fa fa-level-down\"></i></div>\r\n            </li>\r\n            <li>Opera<div class=\"text-danger pull-right\">10%<i class=\"fa fa-level-down\"></i></div>\r\n            </li>\r\n            <li>Mobile &amp; tablet<div class=\"text-success pull-right\">14%<i class=\"fa fa-level-up\"></i></div>\r\n            </li>\r\n            <li class=\"last\">Others<div class=\"text-success pull-right\">5%<i class=\"fa fa-level-up\"></i></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n    <div class=\"span_11\">\r\n      <div class=\"col-md-6 col_4\">\r\n        <div class=\"map_container\">\r\n          <div id=\"vmap\" style=\"width: 100%; height: 400px;\"></div>\r\n        </div>\r\n        \r\n        <link rel=\"stylesheet\" href=\"../../../assets/css/clndr.css\" type=\"text/css\" />\r\n        <script src=\"../../../assets/js/underscore-min.js\" type=\"text/javascript\"></script>\r\n        <script src=\"../../../assets/js/moment-2.2.1.js\" type=\"text/javascript\"></script>\r\n        <script src=\"../../../assets/js/clndr.js\" type=\"text/javascript\"></script>\r\n        <script src=\"../../../assets/js/site.js\" type=\"text/javascript\"></script>\r\n        \r\n      </div>\r\n      <div class=\"col-md-6 col_5\">\r\n        <div id=\"chart_container\">\r\n          <div id=\"chart\"></div>\r\n          <div id=\"slider\"></div>\r\n          <script>\r\n            var seriesData = [\r\n              [],\r\n              [],\r\n              [],\r\n              [],\r\n              []\r\n            ];\r\n            var random = new Rickshaw.Fixtures.RandomData(50);\r\n\r\n            for (var i = 0; i < 75; i++) {\r\n              random.addData(seriesData);\r\n            }\r\n\r\n            var graph = new Rickshaw.Graph({\r\n              element: document.getElementById(\"chart\"),\r\n              renderer: 'multi',\r\n\r\n              dotSize: 5,\r\n              series: [{\r\n                name: 'temperature',\r\n                data: seriesData.shift(),\r\n                color: '#AFE9FF',\r\n                renderer: 'stack'\r\n              }, {\r\n                name: 'heat index',\r\n                data: seriesData.shift(),\r\n                color: '#FFCAC0',\r\n                renderer: 'stack'\r\n              }, {\r\n                name: 'dewpoint',\r\n                data: seriesData.shift(),\r\n                color: '#555',\r\n                renderer: 'scatterplot'\r\n              }, {\r\n                name: 'pop',\r\n                data: seriesData.shift().map(function (d) {\r\n                  return {\r\n                    x: d.x,\r\n                    y: d.y / 4\r\n                  }\r\n                }),\r\n                color: '#555',\r\n                renderer: 'bar'\r\n              }, {\r\n                name: 'humidity',\r\n                data: seriesData.shift().map(function (d) {\r\n                  return {\r\n                    x: d.x,\r\n                    y: d.y * 1.5\r\n                  }\r\n                }),\r\n                renderer: 'line',\r\n                color: '#ef553a'\r\n              }]\r\n            });\r\n\r\n\r\n            graph.render();\r\n\r\n            var detail = new Rickshaw.Graph.HoverDetail({\r\n              graph: graph\r\n            });\r\n\r\n          </script>\r\n        </div>\r\n        \r\n        <link href=\"../../../assets/css/jqvmap.css\" rel='stylesheet' type='text/css' />\r\n        <script src=\"../../../assets/js/jquery.vmap.js\"></script>\r\n        <script src=\"../../../assets/js/jquery.vmap.sampledata.js\" type=\"text/javascript\"></script>\r\n        <script src=\"../../../assets/js/jquery.vmap.world.js\" type=\"text/javascript\"></script>\r\n        <script type=\"text/javascript\">\r\n          jQuery(document).ready(function () {\r\n            jQuery('#vmap').vectorMap({\r\n              map: 'world_en',\r\n              backgroundColor: '#333333',\r\n              color: '#ffffff',\r\n              hoverOpacity: 0.7,\r\n              selectedColor: '#666666',\r\n              enableZoom: true,\r\n              showTooltip: true,\r\n              values: sample_data,\r\n              scaleColors: ['#C8EEFF', '#006491'],\r\n              normalizeFunction: 'polynomial'\r\n            });\r\n          });\r\n\r\n        </script>\r\n       \r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n   \r\n  </div> -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lottery-one/lottery-one.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lottery-one/lottery-one.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryhistory/lotteryhistory.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryhistory/lotteryhistory.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\r\n\r\n    <div class=\"col-md-12 graphs\">\r\n      <div class=\"xs\">\r\n        <h3>Lottery History</h3>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3\">\r\n              <select data-toggle=\"tooltip\" title=\"Select Event Category!\" data-placement=\"bottom\"\r\n                    name=\"selector1\" class=\"form-control1\">\r\n                    <option value=\"0\">Select</option>\r\n                    <option *ngFor=\"let event of eventlist\" value=\"event.id\">{{ event.title }}</option>\r\n                  </select>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <button class=\"btn-success btn\">\r\n                Search\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <button class=\"btn-success btn\">\r\n                Export to excel\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n           <br />\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"main-box clearfix\">\r\n                <div class=\"table-responsive  scrolling_div\">\r\n                  <table class=\"table user-list\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th><span>Name</span></th>\r\n                        <th><span>CheckIn</span></th>\r\n                        <th class=\"text-center\"><span>Status</span></th>\r\n                        <th><span>EmailId</span></th>\r\n                        <th><span>EventTitle</span></th>\r\n                        <th><span>BookingId</span></th>\r\n                        <th><span>CouponCode</span></th>\r\n                        <th>Action</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let user of lotteryhistory\">\r\n                        <td>\r\n                          {{ user.name }}\r\n                        </td>\r\n                        <td>\r\n                          {{ user.checkInTime | date:'MMM dd yyyy hh:mm a'  }}\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <span class=\"label label-success\" *ngIf=\"user.isPresent == true\">Present</span>\r\n                          <span class=\"label label-default\" *ngIf=\"user.isPresent == false\">Absent</span>\r\n                        </td>\r\n                        <td>\r\n                          <a href=\"\">{{ user.email }}</a>\r\n                        </td>\r\n                        <td>\r\n                          {{ user.title }}\r\n                        </td>\r\n                        <td>\r\n                          {{ user.bookingId }}\r\n                        </td>\r\n                        <td>\r\n                          {{ user.code }}\r\n                        </td>\r\n                        <td style=\"width: 20%;\">\r\n                          <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultChecked1\" checked>\r\n                            <label class=\"custom-control-label\" for=\"defaultChecked2\">&nbsp;Disbursement</label>\r\n                          </div>\r\n                          &nbsp;\r\n                          <div class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultChecked2\" checked>\r\n                            <label class=\"custom-control-label\" for=\"defaultChecked2\">&nbsp;Reimbursement</label>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                     <hr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryrules/lotteryrules.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryrules/lotteryrules.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <div class=\"graphs\">\r\n    <div class=\"xs\">\r\n      <h3>Set Lottery Rules</h3>\r\n      <div class=\"row\">\r\n        <form role=\"form\" [formGroup]=\"lotteryrule\" (ngSubmit)=\"generateRule()\" class=\"form-horizontal\">\r\n          <div class=\"col-lg-2\">\r\n            <span>Select Events</span>\r\n            <select formControlName=\"eventId\" class=\"form-control1\">\r\n              <option selected value=\"0\">Select Event</option>\r\n              <option *ngFor=\"let cat of eventList\" [value]=\"cat.eventId\">{{cat.title}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <span>Select Coupon</span>\r\n            <select formControlName=\"couponId\" class=\"form-control1\">\r\n              <option selected value=\"0\">Select Coupon</option>\r\n              <option *ngFor=\"let coupn of couponList\" [value]=\"coupn.couponId\">{{ coupn.code }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <span>Rule 1</span>\r\n            <select formControlName=\"rule1\" class=\"form-control1\">\r\n              <option selected value=\"All\">All(Both)</option>\r\n              <option value=\"Present\">Present</option>\r\n              <option value=\"Absent\">Absent</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <span>Rule 2</span>\r\n            <select formControlName=\"rule2\" class=\"form-control1\">\r\n              <option selected value=\"0\">Select Rule2</option>\r\n              <option value=\"1\">Top 3</option>\r\n              <option value=\"2\">Bottom 3</option>\r\n              <option value=\"3\">Top 5</option>\r\n              <option value=\"4\">Bottom 5</option>\r\n              <option value=\"5\">Random 3</option>\r\n              <option value=\"6\">Random 5</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <span>Recurring</span>\r\n            <!-- <div>\r\n              {{ matslider.value }} : Hours\r\n            </div>\r\n            <mat-slider\r\n              #matslider\r\n              thumbLabel\r\n              formControlName=\"rule3\"\r\n              tickInterval=\"1\"\r\n              min=\"1\"\r\n              max=\"12\"></mat-slider> -->\r\n              <select formControlName=\"rule2\" class=\"form-control1\">\r\n                <option selected value=\"0\">Select Rule3</option>\r\n                <option value=\"0\">None</option>\r\n                <option value=\"2\">2 Hours</option>\r\n                <option value=\"4\">4 Hours</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"col-lg-2\">\r\n            <div>&nbsp;</div>\r\n            <button class=\"btn-success btn\">\r\n              Create Rule\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <br /><br />\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"main-box clearfix\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table user-list\">\r\n                <thead>\r\n                  <tr>\r\n                    <th><span>Events</span></th>\r\n                    <th><span>Coupon</span></th>\r\n                    <th><span>Rule 1</span></th>\r\n                    <th><span>Rule 2</span></th>\r\n                    <th><span>Recurring</span></th>\r\n                    <th><span>Action</span></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let rules of lotteryruleData\">\r\n                    <td>\r\n                      <span class=\"user-subhead\">{{ rules.fk_event.title }}</span>\r\n                    </td>\r\n                    <td>\r\n                      <span class=\"user-subhead\">{{ rules.fk_coupon.code }}</span>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                      <span class=\"user-subhead\">{{ rules.rule1 }}</span>\r\n                    </td>\r\n                    <td>\r\n                      <span class=\"user-subhead\">{{ rules.rule2.label }}</span>\r\n                    </td>\r\n                    <td>\r\n                      <span class=\"user-subhead\">{{ rules.rule3 }} : hour</span>\r\n                    </td>\r\n                    <td style=\"width: 20%;\">\r\n                      <button data-toggle=\"tooltip\" title=\"click to preview event\" data-placement=\"bottom\"\r\n                        (click)=\"generateLottery(rules.lotteryId)\" class=\"btn-success btn\">Generate Lottery\r\n                      </button> &nbsp;\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<ngx-loading [show]=\"loading\" [config]=\"{animationType: ngxLoadingAnimationTypes.circleSwish, primaryColour: primaryColour, backdropBorderRadius: '3px'}\"\r\n      [template]=\"loadingTemplate\"></ngx-loading>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryrules/lotterywinner.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryrules/lotterywinner.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>\r\n    Winner's are ...\r\n</h2>\r\n<mat-dialog-content>\r\n    <mat-list role=\"list\">\r\n        <mat-list-item role=\"listitem\" *ngFor=\"let winner of data\">\r\n            <div>\r\n                {{ winner.name }}\r\n            </div>\r\n        </mat-list-item>\r\n      </mat-list>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions text-center>\r\n    <button mat-raised-button (click)=\"close()\" color=\"primary\">Ok</button>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagenotfound/pagenotfound.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagenotfound/pagenotfound.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <div class=\"graphs\">\r\n    Page Under Construction\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth/user-auth.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth/user-auth.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-logo\" id=\"login\">\r\n   <img width=\"10%\" height=\"10%\" src=\"../../../assets/images/logo.png\" alt=\"\"/>\r\n    <p>PY-Ticket Admin</p>\r\n</div>\r\n<ngx-loading [show]=\"loading\" [config]=\"{animationType: ngxLoadingAnimationTypes.circleSwish, primaryColour: primaryColour, backdropBorderRadius: '3px'}\"\r\n      [template]=\"loadingTemplate\"></ngx-loading>\r\n<div *ngIf=\"passwordchnge == false\">\r\n  <h2 class=\"form-heading\">login</h2>\r\n  <div class=\"app-cam\">\r\n    <form [formGroup]=\"userAuth\" (ngSubmit)=\"login()\">\r\n      <input type=\"text\" class=\"text\" placeholder=\"E-mail address\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n      </div>\r\n  \r\n      <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" \r\n      [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"> \r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n    </div>\r\n  \r\n      <div class=\"submit\">\r\n        <input type=\"submit\"  value=\"Login\">\r\n        <!-- <button class=\"btn-success btn\" >Login</button> -->\r\n      </div>\r\n      <ul class=\"new\">\r\n        <li class=\"new_left\">\r\n          <p>\r\n            <!-- <a [routerLink]=\"['passwordreset']\">Reset Password</a> -->\r\n            <a (click)=\"showHide()\">Reset Password</a>\r\n          </p>\r\n        </li>\r\n        <!-- <li class=\"new_right\"><p class=\"sign\" >New here ?<a href=\"register.html\"> Sign Up</a></p></li> -->\r\n        <div class=\"clearfix\"></div>\r\n      </ul>\r\n    </form>\r\n</div>\r\n</div>\r\n<div *ngIf=\"passwordchnge == true\">\r\n  <h2 class=\"form-heading\">Reset Password</h2>\r\n  <div class=\"app-cam\">\r\n      <input type=\"text\" class=\"text\" placeholder=\"E-mail address\" />\r\n      <div class=\"submit\">\r\n        <input type=\"submit\"  value=\"Reset\">\r\n      </div>\r\n      <ul class=\"new\">\r\n        <li class=\"new_left\">\r\n          <p>\r\n            <a (click)=\"resetpassword()\">Login</a>\r\n          </p>\r\n        </li>\r\n        <div class=\"clearfix\"></div>\r\n      </ul>\r\n   \r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewevents/viewevents.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewevents/viewevents.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <div class=\"col-md-12 graphs\">\r\n    <div class=\"xs\">\r\n      <h3>View Event</h3>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"main-box clearfix\">\r\n              <div class=\"table-responsive scrolling_div\">\r\n                <table class=\"table user-list\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Event Tite</span></th>\r\n                      <th><span>Start Date</span></th>\r\n                      <th><span>End Date</span></th>\r\n                      <th><span>Address</span></th>\r\n                      <th><span>Contact Name</span></th>\r\n                      <th><span>Contact Number</span></th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let event  of eventList\">\r\n                      <td>\r\n                      <span class=\"user-subhead\">{{ event.title }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span class=\"user-subhead\">{{ event.startDate | date : 'MMM dd yyyy h:mm a'  }}</span>\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <span class=\"user-subhead\">{{ event.endDate | date : 'MMM dd yyyy h:mm a' }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span class=\"user-subhead\">{{ event.address }} </span>\r\n                      </td>\r\n                      <td>\r\n                        <span class=\"user-subhead\">{{ event.contactPersonName }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span class=\"user-subhead\">{{ event.contactPerson }}</span>\r\n                      </td>\r\n                      <td style=\"width: 20%;\" >\r\n                        <button (click)=\"previewEvent(event)\" data-toggle=\"tooltip\" title=\"click to preview event\" data-placement=\"bottom\"  class=\"btn-success btn\">Preview\r\n                         \r\n                        </button> &nbsp;\r\n                      </td>\r\n                 \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewusers/viewusers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewusers/viewusers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-wrapper\">\r\n  <div class=\"col-md-12 graphs\">\r\n    <div class=\"xs\">\r\n      <h3>View Users</h3>\r\n      <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            <!-- <label>Category</label> -->\r\n            <select data-toggle=\"tooltip\" title=\"Select Event Category!\" data-placement=\"bottom\"\r\n            name=\"selector1\" class=\"form-control1\">\r\n            <option value=\"0\">Select</option>\r\n            <option *ngFor=\"let cat of categories\" [value]=\"cat.id\">{{cat.name}}</option>\r\n\r\n          </select>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <!-- <label>Events</label> -->\r\n            <select data-toggle=\"tooltip\" title=\"Select Event Category!\" data-placement=\"bottom\"\r\n            name=\"selector1\" class=\"form-control1\">\r\n            <option value=\"0\">Select</option>\r\n            <option *ngFor=\"let cat of eventList\" [value]=\"cat.id\">{{cat.title}}</option>\r\n\r\n          </select>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <label>&nbsp;</label>\r\n            <button class=\"btn-success btn\">\r\n              Search\r\n            </button>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <label>&nbsp;</label>\r\n            <button class=\"btn-success btn\">\r\n              Export to excel\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n      \r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"main-box clearfix\">\r\n              <div class=\"table-responsive scrolling_div\">\r\n                <table class=\"table user-list\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Full Name</span></th>\r\n                      <th><span>checkInTime</span></th>\r\n                      <th class=\"text-center\"><span>Status</span></th>\r\n                      <th><span>Email Id</span></th>\r\n                      <th><span>Event Title</span></th>\r\n                      <th><span>Booking Id</span></th>\r\n                      <th><span>Tickets Booked</span></th>\r\n                      <!-- <th>Action</th> -->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let user of eventusers\">\r\n                      <td>\r\n                        {{ user.fk_eventbookings_user.name }}\r\n                      </td>\r\n                      <td>\r\n                        {{ user.created_at | date:'MMM dd yyyy hh:mm a'  }}\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <span class=\"label label-success\" *ngIf=\"user.isPresent == true\">Present</span>\r\n                        <span class=\"label label-default\" *ngIf=\"user.isPresent == false\">Absent</span>\r\n                      </td>\r\n                      <td>\r\n                        <a href=\"\">{{ user.fk_eventbookings_user.email }}</a>\r\n                      </td>\r\n                      <td>\r\n                        {{ user.fk_eventbookings_events.title }}\r\n                      </td>\r\n                      <td>\r\n                        {{ user.bookingId }}\r\n                      </td>\r\n                      <td>\r\n                        {{ user.totalTickets }}\r\n                      </td>\r\n                      <!-- <td style=\"width: 20%;\">\r\n                        <a class=\"table-link\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-pencil fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                        <a class=\"table-link danger\">\r\n                          <span class=\"fa-stack\">\r\n                            <i class=\"fa fa-square fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-trash-o fa-stack-1x fa-inverse\"></i>\r\n                          </span>\r\n                        </a>\r\n                      </td> -->\r\n                    </tr>\r\n                   \r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- <ul class=\"pagination pull-right\">\r\n                <li><a href=\"\"><i class=\"fa fa-chevron-left\"></i></a></li>\r\n                <li><a href=\"\">1</a></li>\r\n                <li><a href=\"\">2</a></li>\r\n                <li><a href=\"\">3</a></li>\r\n                <li><a href=\"\">4</a></li>\r\n                <li><a href=\"\">5</a></li>\r\n                <li><a href=\"\"><i class=\"fa fa-chevron-right\"></i></a></li>\r\n              </ul> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-auth/user-auth.component */ "./src/app/pages/user-auth/user-auth.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/createvent/createvent.component */ "./src/app/pages/createvent/createvent.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _pages_viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/viewevents/viewevents.component */ "./src/app/pages/viewevents/viewevents.component.ts");
/* harmony import */ var _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/viewusers/viewusers.component */ "./src/app/pages/viewusers/viewusers.component.ts");
/* harmony import */ var _pages_applicationadmin_applicationadmin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/applicationadmin/applicationadmin.component */ "./src/app/pages/applicationadmin/applicationadmin.component.ts");
/* harmony import */ var _pages_couponcreate_couponcreate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/couponcreate/couponcreate.component */ "./src/app/pages/couponcreate/couponcreate.component.ts");
/* harmony import */ var _pages_lottery_one_lottery_one_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/lottery-one/lottery-one.component */ "./src/app/pages/lottery-one/lottery-one.component.ts");
/* harmony import */ var _pages_lotteryrules_lotteryrules_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/lotteryrules/lotteryrules.component */ "./src/app/pages/lotteryrules/lotteryrules.component.ts");
/* harmony import */ var _pages_lotteryhistory_lotteryhistory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/lotteryhistory/lotteryhistory.component */ "./src/app/pages/lotteryhistory/lotteryhistory.component.ts");
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/resetpassword/resetpassword.component */ "./src/app/pages/resetpassword/resetpassword.component.ts");
















const routes = [
    { path: '', redirectTo: 'userAuth', pathMatch: 'full' },
    { path: 'userAuth', component: _pages_user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_3__["UserAuthComponent"] },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'createevent', component: _pages_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_5__["CreateventComponent"] },
            { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'pagenotfound', component: _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"] },
            { path: 'viewevents', component: _pages_viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_8__["VieweventsComponent"] },
            { path: 'viewusers', component: _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_9__["ViewusersComponent"] },
            { path: 'appliadmin', component: _pages_applicationadmin_applicationadmin_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationadminComponent"] },
            { path: 'couponcreate', component: _pages_couponcreate_couponcreate_component__WEBPACK_IMPORTED_MODULE_11__["CouponcreateComponent"] },
            { path: 'generatelottery', component: _pages_lottery_one_lottery_one_component__WEBPACK_IMPORTED_MODULE_12__["LotteryOneComponent"] },
            { path: 'lotteryrule', component: _pages_lotteryrules_lotteryrules_component__WEBPACK_IMPORTED_MODULE_13__["LotteryrulesComponent"] },
            { path: 'lotteryhistory', component: _pages_lotteryhistory_lotteryhistory_component__WEBPACK_IMPORTED_MODULE_14__["LotteryhistoryComponent"] },
            { path: 'passwordreset', component: _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_15__["ResetpasswordComponent"] }
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");



const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PyTicketAdminConsole';
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_2__["ngxLoadingAnimationTypes"];
        this.loading = false;
        this.primaryColour = PrimaryWhite;
        this.secondaryColour = SecondaryGrey;
        this.coloursEnabled = false;
        this.config = { animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_2__["ngxLoadingAnimationTypes"].none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngxLoading', { static: false })
], AppComponent.prototype, "ngxLoadingComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customLoadingTemplate', { static: false })
], AppComponent.prototype, "customLoadingTemplate", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-auth/user-auth.component */ "./src/app/pages/user-auth/user-auth.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/createvent/createvent.component */ "./src/app/pages/createvent/createvent.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound.component */ "./src/app/pages/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/viewevents/viewevents.component */ "./src/app/pages/viewevents/viewevents.component.ts");
/* harmony import */ var _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/viewusers/viewusers.component */ "./src/app/pages/viewusers/viewusers.component.ts");
/* harmony import */ var _pages_applicationadmin_applicationadmin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/applicationadmin/applicationadmin.component */ "./src/app/pages/applicationadmin/applicationadmin.component.ts");
/* harmony import */ var _pages_couponcreate_couponcreate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/couponcreate/couponcreate.component */ "./src/app/pages/couponcreate/couponcreate.component.ts");
/* harmony import */ var _pages_lottery_one_lottery_one_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/lottery-one/lottery-one.component */ "./src/app/pages/lottery-one/lottery-one.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _pages_lotteryrules_lotteryrules_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/lotteryrules/lotteryrules.component */ "./src/app/pages/lotteryrules/lotteryrules.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _pages_lotteryhistory_lotteryhistory_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/lotteryhistory/lotteryhistory.component */ "./src/app/pages/lotteryhistory/lotteryhistory.component.ts");
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/resetpassword/resetpassword.component */ "./src/app/pages/resetpassword/resetpassword.component.ts");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-odometer */ "./node_modules/ng2-odometer/dist/index.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2_odometer__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






















// import { MatDialogModule } from '@angular/material/dialog';








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _pages_user_auth_user_auth_component__WEBPACK_IMPORTED_MODULE_7__["UserAuthComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            _pages_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_9__["CreateventComponent"],
            _pages_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
            _pages_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_14__["PagenotfoundComponent"],
            _pages_viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_16__["VieweventsComponent"],
            _pages_viewusers_viewusers_component__WEBPACK_IMPORTED_MODULE_17__["ViewusersComponent"],
            _pages_applicationadmin_applicationadmin_component__WEBPACK_IMPORTED_MODULE_18__["ApplicationadminComponent"],
            _pages_couponcreate_couponcreate_component__WEBPACK_IMPORTED_MODULE_19__["CouponcreateComponent"],
            _pages_lottery_one_lottery_one_component__WEBPACK_IMPORTED_MODULE_20__["LotteryOneComponent"],
            _pages_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_9__["EventDialog"],
            _pages_lotteryrules_lotteryrules_component__WEBPACK_IMPORTED_MODULE_23__["LotteryWinnerDialog"],
            _pages_lotteryrules_lotteryrules_component__WEBPACK_IMPORTED_MODULE_23__["LotteryrulesComponent"],
            _pages_lotteryhistory_lotteryhistory_component__WEBPACK_IMPORTED_MODULE_25__["LotteryhistoryComponent"],
            _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_26__["ResetpasswordComponent"],
        ],
        entryComponents: [
            _pages_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_9__["EventDialog"], _pages_lotteryrules_lotteryrules_component__WEBPACK_IMPORTED_MODULE_23__["LotteryWinnerDialog"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_11__["NgxQRCodeModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            // FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_22__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_22__["OwlNativeDateTimeModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_24__["GooglePlaceModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
            ng2_odometer__WEBPACK_IMPORTED_MODULE_27__["Ng2OdometerModule"].forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_28__["NgxLoadingModule"].forRoot({
                animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_28__["ngxLoadingAnimationTypes"].wanderingCubes,
                backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                backdropBorderRadius: '4px',
                primaryColour: 'blue',
                secondaryColour: 'yellow',
                tertiaryColour: 'red'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(route, api) {
        this.route = route;
        this.api = api;
    }
    ngOnInit() {
        $('#side-menu').metisMenu();
        // localStorage.removeItem('token');
        this.userName = localStorage.getItem("UserName");
        var token = localStorage.getItem("token");
        if (token == null || token == undefined) {
            alert('Token Expired. Please login again');
            this.route.navigateByUrl('userAuth');
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_3__["EventsapiService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/applicationadmin/applicationadmin.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/applicationadmin/applicationadmin.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-box.no-header {\r\n    padding-top: 20px;\r\n}\r\n.main-box {\r\n    background: #FFFFFF;\r\n    -o-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    margin-bottom: 16px;\r\n    -webikt-border-radius: 3px;\r\n    border-radius: 3px;\r\n}\r\n.table a.table-link.danger {\r\n    color: #e74c3c;\r\n}\r\n.label {\r\n    border-radius: 3px;\r\n    font-size: 0.875em;\r\n    font-weight: 600;\r\n}\r\n.user-list tbody td .user-subhead {\r\n    font-size: 0.875em;\r\n    font-style: italic;\r\n}\r\n.user-list tbody td .user-link {\r\n    display: block;\r\n    font-size: 1.25em;\r\n    padding-top: 3px;\r\n    margin-left: 60px;\r\n}\r\na {\r\n    color: #3498db;\r\n    outline: none!important;\r\n}\r\n.user-list tbody td>img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.table thead tr th {\r\n    text-transform: uppercase;\r\n    font-size: 0.875em;\r\n}\r\n.table thead tr th {\r\n    border-bottom: 2px solid #e7ebee;\r\n}\r\n.table tbody tr td:first-child {\r\n    font-size: 1.125em;\r\n    font-weight: 300;\r\n}\r\n.table tbody tr td {\r\n    font-size: 0.875em;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #e7ebee;\r\n    padding: 12px 8px;\r\n}\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwbGljYXRpb25hZG1pbi9hcHBsaWNhdGlvbmFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUduQixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBRTFCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcGxpY2F0aW9uYWRtaW4vYXBwbGljYXRpb25hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm94Lm5vLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubWFpbi1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICAtby1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIC13ZWJpa3QtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnRhYmxlIGEudGFibGUtbGluay5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuLmxhYmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZCAudXNlci1zdWJoZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4udXNlci1saXN0IHRib2R5IHRkIC51c2VyLWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZD5pbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi50YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U3ZWJlZTtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlYmVlO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbn1cclxuICAgICJdfQ== */");

/***/ }),

/***/ "./src/app/pages/applicationadmin/applicationadmin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/applicationadmin/applicationadmin.component.ts ***!
  \**********************************************************************/
/*! exports provided: ApplicationadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationadminComponent", function() { return ApplicationadminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApplicationadminComponent = class ApplicationadminComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApplicationadminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applicationadmin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applicationadmin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/applicationadmin/applicationadmin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applicationadmin.component.css */ "./src/app/pages/applicationadmin/applicationadmin.component.css")).default]
    })
], ApplicationadminComponent);



/***/ }),

/***/ "./src/app/pages/couponcreate/couponcreate.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/couponcreate/couponcreate.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-box.no-header {\r\n  padding-top: 20px;\r\n}\r\n.main-box {\r\n  background: #FFFFFF;\r\n  -o-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n  -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n  box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n  margin-bottom: 16px;\r\n  -webikt-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.table a.table-link.danger {\r\n  color: #e74c3c;\r\n}\r\n.label {\r\n  border-radius: 3px;\r\n  font-size: 0.875em;\r\n  font-weight: 600;\r\n}\r\n.user-list tbody td .user-subhead {\r\n  font-size: 15px;\r\n  /* font-family: 'Courier New', Courier, monospace; */\r\n}\r\n.user-list tbody td .user-link {\r\n  display: block;\r\n  font-size: 1.25em;\r\n  padding-top: 3px;\r\n  margin-left: 60px;\r\n}\r\na {\r\n  color: #3498db;\r\n  outline: none!important;\r\n}\r\n.user-list tbody td>img {\r\n  position: relative;\r\n  max-width: 50px;\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\n.table {\r\n  font-size: 14px;\r\n  border: none;\r\n}\r\n.table tr th {\r\n  border-top: 0px solid #ccc;\r\n  border-bottom: 0px solid #ccc;\r\n  border-right: none;\r\n  border-left: 0px solid #ccc;\r\n  text-align: left;\r\n  background-color: #f1f1f1;\r\n}\r\n.table tr th:last-child {\r\n  border-right: 0px solid #ccc;\r\n}\r\n.table tr td {\r\n  border-top: none;\r\n  border-bottom: 1px solid #ccc;\r\n  border-right: none;\r\n  border-left: 0px solid #ccc;\r\n}\r\n.table tr td:last-child {\r\n  border-right: 0px solid #ccc;\r\n}\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #f9f9f9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cG9uY3JlYXRlL2NvdXBvbmNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFHbkIsb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQyxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUUxQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXBvbmNyZWF0ZS9jb3Vwb25jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJveC5uby1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5tYWluLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICAtby1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgLW1zLWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAtd2ViaWt0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnRhYmxlIGEudGFibGUtbGluay5kYW5nZXIge1xyXG4gIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi51c2VyLWxpc3QgdGJvZHkgdGQgLnVzZXItc3ViaGVhZCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7ICovXHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZCAudXNlci1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi51c2VyLWxpc3QgdGJvZHkgdGQ+aW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4udGFibGUgdHIgdGgge1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItbGVmdDogMHB4IHNvbGlkICNjY2M7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4udGFibGUgdHIgdGg6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnRhYmxlIHRyIHRkIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBib3JkZXItbGVmdDogMHB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/couponcreate/couponcreate.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/couponcreate/couponcreate.component.ts ***!
  \**************************************************************/
/*! exports provided: DateTimeValidator, CouponcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeValidator", function() { return DateTimeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponcreateComponent", function() { return CouponcreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");







const DateTimeValidator = (fc) => {
    const date = new Date(fc.value);
    const isValid = !isNaN(date.valueOf());
    return isValid ? null : {
        isValid: {
            valid: false
        }
    };
};
const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
let CouponcreateComponent = class CouponcreateComponent {
    constructor(api, formBuilder) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.showHide = false;
        this.buttontext = "Add";
        this.display = false;
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_6__["ngxLoadingAnimationTypes"];
        this.loading = false;
        this.primaryColour = PrimaryWhite;
        this.secondaryColour = SecondaryGrey;
        this.coloursEnabled = false;
        this.config = { animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_6__["ngxLoadingAnimationTypes"].none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
        this.initialize();
        this.couponForm = this.formBuilder.group({
            couponcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            expiredt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, DateTimeValidator] }),
        });
    }
    ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    // convenience getter for easy access to form fields
    get f() { return this.couponForm.controls; }
    add() {
        this.initialize();
        if (this.showHide == false) {
            this.buttontext = "Show Coupon list";
            this.showHide = true;
        }
        else {
            this.showHide = false;
            this.buttontext = "Add";
        }
    }
    createCoupon() {
        this.loading = true;
        let params = {
            "title": this.couponForm.value.couponcode,
            "code": this.couponForm.value.couponcode,
            "eventId": this.couponForm.value.eventId,
            "description": this.couponForm.value.description,
            "startDate": new Date(),
            "endDate": this.couponForm.value.expiredt,
            "type": "type1",
            "amount": 1
        };
        console.log('params', params);
        this.api._postAPI('coupon', params).subscribe(res => {
            this.loading = false;
            // alert('HTTP response'+ JSON.stringify(res));
            if (res.status == 200) {
                // alert(res.message);
                this.api._commonalertmsg(res.message);
            }
            else {
                // alert(res.message);
                this.api._commonalertmsg(res.message);
            }
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
                this.api._commonErrormsg('Error Encounter', err);
            }
        });
    }
    initialize() {
        this.loading = true;
        this.api._getAPI('event/list').subscribe(res => {
            this.eventList = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
        this.api._getAPI('coupon').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }))
            .subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.couponList = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
        // alert('initialize');
        this.api._getAPI('master/category/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }))
            .subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.categories = res.data;
        }, err => {
            if (err.length > 0) {
                // alert('HTTP Error'+ err)
            }
        });
        this.loading = false;
    }
    makePdf() {
        this.loading = true;
        var DocumentContainer = document.getElementById('content');
        var html = '<html><head>' +
            '<link href="css/template.css" rel="stylesheet" type="text/css" />' +
            '</head><body style="background:#ffffff;">' +
            DocumentContainer.innerHTML +
            '</body></html>';
        var WindowObject = window.open("", "PrintWindow", "width=auto,height=auto,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes, _blank");
        WindowObject.document.writeln(DocumentContainer.innerHTML);
        WindowObject.document.close();
        WindowObject.focus();
        WindowObject.print();
        WindowObject.close();
        document.getElementById('print_link').style.display = 'block';
        this.loading = false;
    }
};
CouponcreateComponent.ctorParameters = () => [
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_3__["EventsapiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngxLoading', { static: false })
], CouponcreateComponent.prototype, "ngxLoadingComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customLoadingTemplate', { static: false })
], CouponcreateComponent.prototype, "customLoadingTemplate", void 0);
CouponcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-couponcreate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./couponcreate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/couponcreate/couponcreate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./couponcreate.component.css */ "./src/app/pages/couponcreate/couponcreate.component.css")).default]
    })
], CouponcreateComponent);



/***/ }),

/***/ "./src/app/pages/createvent/createvent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/createvent/createvent.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\r\n    background-color:'#FAA';\r\n    overflow-y: hidden;\r\n  }\r\n\r\n  invalid-feedback{\r\n    color: red;\r\n  }\r\n\r\n  .alert-light{\r\n    color: red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRldmVudC9jcmVhdGV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRldmVudC9jcmVhdGV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOicjRkFBJztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIGludmFsaWQtZmVlZGJhY2t7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LWxpZ2h0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/createvent/createvent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/createvent/createvent.component.ts ***!
  \**********************************************************/
/*! exports provided: DateTimeValidator, NgxQrCode, CreateventComponent, EventDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeValidator", function() { return DateTimeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQrCode", function() { return NgxQrCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateventComponent", function() { return CreateventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDialog", function() { return EventDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");







const DateTimeValidator = (fc) => {
    const date = new Date(fc.value);
    const isValid = !isNaN(date.valueOf());
    return isValid ? null : {
        isValid: {
            valid: false
        }
    };
};
class NgxQrCode {
}
const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
let CreateventComponent = class CreateventComponent {
    constructor(matDialog, formBuilder, api) {
        this.matDialog = matDialog;
        this.formBuilder = formBuilder;
        this.api = api;
        this.qrcodename = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].website;
        this.title = 'generate-qrcode';
        this.display = false;
        this.myAngularxQrCode = this.qrcodename;
        this.qrdata = null;
        this.submitted = false;
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_6__["ngxLoadingAnimationTypes"];
        this.loading = false;
        this.primaryColour = PrimaryWhite;
        this.secondaryColour = SecondaryGrey;
        this.coloursEnabled = false;
        this.config = { animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_6__["ngxLoadingAnimationTypes"].none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
        this.myAngularxQrCode = this.qrcodename;
    }
    ngOnInit() {
        this.initiallize();
        $("#content").hide();
        $('[data-toggle="tooltip"]').tooltip();
    }
    handleAddressChange(address) {
        this.location = {
            "lat": address.geometry.location.lat, "lon": address.geometry.location.lng
        };
    }
    initiallize() {
        this.loading = true;
        this.createeventForm = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            startdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, DateTimeValidator] }),
            endate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, DateTimeValidator] }),
            contactpname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            contactpnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[6-9]\\d{9}'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]),
            duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            admittance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            userlimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            feesoption: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            admittype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.api._getAPI('master/category/list').subscribe(res => {
            this.categories = res.data;
        }, err => {
            if (err.length > 0) {
                this.api._commonalertmsg(err);
            }
        });
        this.loading = false;
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.createeventForm.controls;
    }
    CreateEvent() {
        this.loading = true;
        this.submitted = true;
        if (this.createeventForm.valid) {
            let params = {
                "title": this.createeventForm.value.Name,
                "eventDescription": this.createeventForm.value.description,
                "startDate": this.createeventForm.value.startdate,
                "endDate": this.createeventForm.value.endate,
                "contactPersonName": this.createeventForm.value.contactpname,
                "contactPerson": "" + this.createeventForm.value.contactpnumber + "",
                "duration": this.createeventForm.value.duration,
                "eventCategoryId": this.createeventForm.value.category,
                "address": this.createeventForm.value.address,
                "latitude": "0",
                "longitude": "0",
                "maxSeat": this.createeventForm.value.admittance,
                "minSeat": this.createeventForm.value.userlimit,
                "isPaid": false,
                "isSeatsVisible": false,
                "perSeatCharge": 0
            };
            this.api._postAPI('event/add', params).subscribe(res => {
                this.loading = false;
                if (res.status == 200) {
                    if (this.qrcodename == '') {
                        this.display = false;
                    }
                    else {
                        this.value = this.qrcodename + res.data.objectId + '/' + res.data.title;
                        this.display = true;
                        const dialogRef = this.matDialog.open(EventDialog, {
                            data: {
                                "title": res.data.title,
                                "eventDescription": res.data.eventDescription,
                                "startDate": res.data.startDate,
                                "endDate": res.data.endDate,
                                "contactPersonName": res.data.contactPersonName,
                                "contactPerson": res.data.contactPerson,
                                "duration": res.data.duration,
                                "eventCategoryId": res.data.category,
                                "address": res.data.address,
                                "maxSeat": res.data.maxSeat,
                                "minSeat": res.data.minSeat,
                                "isPaid": 'Free',
                                "isSeatsVisible": false,
                                "perSeatCharge": 0,
                                "QrValue": this.value
                            },
                            width: '800px',
                            hasBackdrop: true,
                            autoFocus: false
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            this.value = result;
                        });
                        this.createeventForm.reset();
                    }
                }
                else {
                    this.api._commonalertmsg(res.message);
                }
            }, err => {
                if (err.length > 0) {
                    this.api._commonalertmsg(err);
                }
            });
        }
        else {
            this.api._commonalertmsg('All Fields are mandatory');
            this.loading = false;
        }
    }
    reset() {
        this.initiallize();
    }
};
CreateventComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__["EventsapiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("placesRef", { static: true })
], CreateventComponent.prototype, "placesRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngxLoading', { static: false })
], CreateventComponent.prototype, "ngxLoadingComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customLoadingTemplate', { static: false })
], CreateventComponent.prototype, "customLoadingTemplate", void 0);
CreateventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createvent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createvent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createvent/createvent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createvent.component.css */ "./src/app/pages/createvent/createvent.component.css")).default]
    })
], CreateventComponent);

// Mat Dialog Componet
let EventDialog = class EventDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.display = true;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    makePdf() {
        var DocumentContainer = document.getElementById('content');
        var html = '<html><head>' +
            '<link href="css/template.css" rel="stylesheet" type="text/css" />' +
            '</head><body style="background:#ffffff;">' +
            DocumentContainer.innerHTML +
            '</body></html>';
        var WindowObject = window.open("", "PrintWindow", "width=auto,height=auto,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes, _blank");
        WindowObject.document.writeln(DocumentContainer.innerHTML);
        WindowObject.document.close();
        WindowObject.focus();
        WindowObject.print();
        WindowObject.close();
        document.getElementById('print_link').style.display = 'block';
    }
};
EventDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
EventDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-content-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eventdialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/createvent/eventdialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], EventDialog);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(api) {
        this.api = api;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = false;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__["EventsapiService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/lottery-one/lottery-one.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/lottery-one/lottery-one.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvdHRlcnktb25lL2xvdHRlcnktb25lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/lottery-one/lottery-one.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/lottery-one/lottery-one.component.ts ***!
  \************************************************************/
/*! exports provided: LotteryOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryOneComponent", function() { return LotteryOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LotteryOneComponent = class LotteryOneComponent {
    constructor() { }
    ngOnInit() {
    }
};
LotteryOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lottery-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lottery-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lottery-one/lottery-one.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lottery-one.component.css */ "./src/app/pages/lottery-one/lottery-one.component.css")).default]
    })
], LotteryOneComponent);



/***/ }),

/***/ "./src/app/pages/lotteryhistory/lotteryhistory.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/lotteryhistory/lotteryhistory.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-box.no-header {\r\n  padding-top: 20px;\r\n}\r\n.main-box {\r\n  background: #FFFFFF;\r\n  -o-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n  -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n  box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n  margin-bottom: 16px;\r\n  -webikt-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.table a.table-link.danger {\r\n  color: #e74c3c;\r\n}\r\n.label {\r\n  border-radius: 3px;\r\n  font-size: 0.875em;\r\n  font-weight: 600;\r\n}\r\n.user-list tbody td .user-subhead {\r\n  font-size: 15px;\r\n  /* font-family: 'Courier New', Courier, monospace; */\r\n}\r\n.user-list tbody td .user-link {\r\n  display: block;\r\n  font-size: 1.25em;\r\n  padding-top: 3px;\r\n  margin-left: 60px;\r\n}\r\na {\r\n  color: #3498db;\r\n  outline: none!important;\r\n}\r\n.user-list tbody td>img {\r\n  position: relative;\r\n  max-width: 50px;\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\n.table {\r\n  font-size: 14px;\r\n  border: none;\r\n}\r\n.table tr th {\r\n  border-top: 0px solid #ccc;\r\n  border-bottom: 0px solid #ccc;\r\n  border-right: none;\r\n  border-left: 0px solid #ccc;\r\n  text-align: left;\r\n  background-color: #f1f1f1;\r\n}\r\n.table tr th:last-child {\r\n  border-right: 0px solid #ccc;\r\n}\r\n.table tr td {\r\n  border-top: none;\r\n  border-bottom: 1px solid #ccc;\r\n  border-right: none;\r\n  border-left: 0px solid #ccc;\r\n}\r\n.table tr td:last-child {\r\n  border-right: 0px solid #ccc;\r\n}\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #f9f9f9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG90dGVyeWhpc3RvcnkvbG90dGVyeWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBR25CLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFFMUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb3R0ZXJ5aGlzdG9yeS9sb3R0ZXJ5aGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm94Lm5vLWhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLm1haW4tYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gIC1vLWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICAtbXMtYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIC13ZWJpa3QtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4udGFibGUgYS50YWJsZS1saW5rLmRhbmdlciB7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuLmxhYmVsIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZCAudXNlci1zdWJoZWFkIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTsgKi9cclxufVxyXG4udXNlci1saXN0IHRib2R5IHRkIC51c2VyLWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZD5pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB0ciB0aCB7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgI2NjYztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi50YWJsZSB0ciB0aDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4udGFibGUgdHIgdGQge1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnRhYmxlIHRyIHRkOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/lotteryhistory/lotteryhistory.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/lotteryhistory/lotteryhistory.component.ts ***!
  \******************************************************************/
/*! exports provided: LotteryhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryhistoryComponent", function() { return LotteryhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");



let LotteryhistoryComponent = class LotteryhistoryComponent {
    constructor(api) {
        this.api = api;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.initialize();
        this.loading = false;
    }
    initialize() {
        this.loading = true;
        this.api._getAPI('event/list').subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            console.log('res :', JSON.stringify(res));
            this.eventlist = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
        this.api._getAPI('lottery/history').subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            console.log('lottery/history :', JSON.stringify(res.data));
            this.lotteryhistory = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
        this.loading = false;
    }
};
LotteryhistoryComponent.ctorParameters = () => [
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__["EventsapiService"] }
];
LotteryhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lotteryhistory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lotteryhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryhistory/lotteryhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lotteryhistory.component.css */ "./src/app/pages/lotteryhistory/lotteryhistory.component.css")).default]
    })
], LotteryhistoryComponent);



/***/ }),

/***/ "./src/app/pages/lotteryrules/lotteryrules.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/lotteryrules/lotteryrules.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ng2-odometer {\r\n    font-size: 20px;\r\n  }\r\n\r\n  span{\r\n    color: rgb(196, 162, 162);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG90dGVyeXJ1bGVzL2xvdHRlcnlydWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvdHRlcnlydWxlcy9sb3R0ZXJ5cnVsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nMi1vZG9tZXRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBzcGFue1xyXG4gICAgY29sb3I6IHJnYigxOTYsIDE2MiwgMTYyKTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/lotteryrules/lotteryrules.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/lotteryrules/lotteryrules.component.ts ***!
  \**************************************************************/
/*! exports provided: LotteryrulesComponent, LotteryWinnerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryrulesComponent", function() { return LotteryrulesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryWinnerDialog", function() { return LotteryWinnerDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");






const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
let LotteryrulesComponent = class LotteryrulesComponent {
    constructor(formBuilder, matDialog, api) {
        this.formBuilder = formBuilder;
        this.matDialog = matDialog;
        this.api = api;
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ngxLoadingAnimationTypes"];
        this.loading = false;
        this.primaryColour = PrimaryWhite;
        this.secondaryColour = SecondaryGrey;
        this.coloursEnabled = false;
        this.config = { animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ngxLoadingAnimationTypes"].none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
        this.lotteryrule = this.formBuilder.group({
            eventId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            couponId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            rule1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('All', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            rule2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            rule3: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    ngOnInit() {
        this.loading = true;
        this.api._getAPI('event/list').subscribe(res => {
            this.eventList = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
                this.api._commonalertmsg(err);
            }
        });
        this.api._getAPI('coupon').subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.couponList = res.data;
        }, err => {
            if (err.length > 0) {
                this.api._commonalertmsg(err);
            }
        });
        this.api._getAPI('lottery').subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.lotteryruleData = res.data;
            // console.log('Lottery Rule :', JSON.stringify(this.lotteryruleData));
        }, err => {
            if (err.length > 0) {
                this.api._commonalertmsg(err);
            }
        });
        this.loading = false;
    }
    generateRule() {
        this.loading = true;
        if (this.lotteryrule.valid) {
            // console.log('lotteryrule :', this.lotteryrule.value);
            let params = {
                "eventId": this.lotteryrule.value.eventId,
                "couponId": this.lotteryrule.value.couponId,
                "rule1": this.lotteryrule.value.rule1,
                "rule2": this.lotteryrule.value.rule2,
                "rule3": this.lotteryrule.value.rule3
            };
            // console.log('params :', JSON.stringify(params));
            this.api._postAPI('lottery', params).subscribe(res => {
                // alert('Lottery Rule Response :'+ JSON.stringify(res));
                this.api._commonalertmsg(res.message);
            }, err => {
                if (err.length > 0) {
                    this.api._commonalertmsg(err);
                }
            });
        }
        else {
            // alert('All options are mandatory');
            this.api._commonalertmsg('All options are mandatory');
        }
        this.loading = false;
    }
    generateLottery(LotteryId) {
        this.loading = true;
        let params = {
            "lotteryId": LotteryId
        };
        console.log('params :', JSON.stringify(params));
        this.api._postAPI('lottery/generate', params).subscribe(res => {
            // alert('Alert'+ JSON.stringify(res));
            this.api._commonalertmsg(res.data.uuid);
            this.api._getAPI('lottery/history?uuid=' + res.data.uuid).subscribe(res => {
                // alert('Lottery Winners :'+ JSON.stringify(res));
                const dialogRef = this.matDialog.open(LotteryWinnerDialog, {
                    data: res.data,
                    width: '400px',
                    hasBackdrop: true,
                    autoFocus: false
                });
                dialogRef.afterClosed().subscribe(result => {
                    this.value = result;
                });
            }, err => {
                if (err.length > 0) {
                    this.api._commonalertmsg(err);
                }
            });
        }, err => {
            if (err.length > 0) {
                // alert('HTTP Error'+ err)
            }
        });
        this.loading = false;
    }
};
LotteryrulesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__["EventsapiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngxLoading', { static: false })
], LotteryrulesComponent.prototype, "ngxLoadingComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customLoadingTemplate', { static: false })
], LotteryrulesComponent.prototype, "customLoadingTemplate", void 0);
LotteryrulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lotteryrules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lotteryrules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryrules/lotteryrules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lotteryrules.component.css */ "./src/app/pages/lotteryrules/lotteryrules.component.css")).default]
    })
], LotteryrulesComponent);

let LotteryWinnerDialog = class LotteryWinnerDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.number = 3000;
        console.log('data', JSON.stringify(data));
    }
    trigger() {
        this.observer.next(true);
    }
    close() {
        this.dialogRef.close();
    }
};
LotteryWinnerDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
LotteryWinnerDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-content-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lotterywinner.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lotteryrules/lotterywinner.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LotteryWinnerDialog);



/***/ }),

/***/ "./src/app/pages/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/main/main.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/pages/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagenotfoundComponent = class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagenotfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagenotfound/pagenotfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pages/pagenotfound/pagenotfound.component.css")).default]
    })
], PagenotfoundComponent);



/***/ }),

/***/ "./src/app/pages/resetpassword/resetpassword.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/resetpassword/resetpassword.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.component.ts ***!
  \****************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResetpasswordComponent = class ResetpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resetpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/pages/resetpassword/resetpassword.component.css")).default]
    })
], ResetpasswordComponent);



/***/ }),

/***/ "./src/app/pages/user-auth/user-auth.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-auth/user-auth.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItYXV0aC91c2VyLWF1dGguY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user-auth/user-auth.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-auth/user-auth.component.ts ***!
  \********************************************************/
/*! exports provided: UserAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthComponent", function() { return UserAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");






const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';
let UserAuthComponent = class UserAuthComponent {
    constructor(api, formBuilder, route) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.route = route;
        this.passwordchnge = false;
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ngxLoadingAnimationTypes"];
        this.loading = false;
        this.primaryColour = PrimaryWhite;
        this.secondaryColour = SecondaryGrey;
        this.coloursEnabled = false;
        this.config = { animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ngxLoadingAnimationTypes"].none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };
    }
    ngOnInit() {
        localStorage.removeItem('token');
        this.userAuth = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('admin1@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('password', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.userAuth.controls; }
    login() {
        this.submitted = true;
        this.loading = true;
        // this.route.navigateByUrl('main');
        if (this.userAuth.valid) {
            // this.route.navigateByUrl('main');
            let params = {
                "email": this.userAuth.value.email,
                "password": this.userAuth.value.password
            };
            this.api._postAPI('auth/login', params).subscribe(res => {
                if (res.status == 200) {
                    this.route.navigateByUrl('main');
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("UserName", res.data.name);
                }
                else {
                    this.api._commonErrormsg('Encountered an error!', 'Something went wrong, please try again');
                }
            }, err => {
                if (err.length > 0) {
                    //alert('HTTP Error'+ err)
                    this.api._commonalertmsg(err);
                }
            });
        }
        else {
            // alert('Please provide valid credentials...');
            this.api._commonalertmsg('Please provide valid credentials.');
        }
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 5000);
    }
    showHide() {
        if (this.passwordchnge == false) {
            this.passwordchnge = true;
        }
        else {
            this.passwordchnge = false;
        }
    }
    resetpassword() {
        this.passwordchnge = false;
    }
};
UserAuthComponent.ctorParameters = () => [
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_4__["EventsapiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngxLoading', { static: false })
], UserAuthComponent.prototype, "ngxLoadingComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customLoadingTemplate', { static: false })
], UserAuthComponent.prototype, "customLoadingTemplate", void 0);
UserAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-auth/user-auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-auth.component.css */ "./src/app/pages/user-auth/user-auth.component.css")).default]
    })
], UserAuthComponent);



/***/ }),

/***/ "./src/app/pages/viewevents/viewevents.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/viewevents/viewevents.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-box.no-header {\r\n    padding-top: 20px;\r\n}\r\n.main-box {\r\n    background: #FFFFFF;\r\n    -o-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    margin-bottom: 16px;\r\n    -webikt-border-radius: 3px;\r\n    border-radius: 3px;\r\n}\r\n/* .table a.table-link.danger {\r\n    color: #e74c3c;\r\n}\r\n.label {\r\n    border-radius: 3px;\r\n    font-size: 0.875em;\r\n    font-weight: 600;\r\n}\r\n.user-list tbody td .user-subhead {\r\n    font-size: 15px;\r\n}\r\n.user-list tbody td .user-link {\r\n    display: block;\r\n    font-size: 1.25em;\r\n    padding-top: 3px;\r\n    margin-left: 60px;\r\n}\r\na {\r\n    color: #3498db;\r\n    outline: none!important;\r\n}\r\n.user-list tbody td>img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n\r\n.table {\r\n    font-size: 14px;\r\n    border: none;\r\n  }\r\n  \r\n  .table tr th {\r\n    border-top: 0px solid #ccc;\r\n    border-bottom: 0px solid #ccc;\r\n    border-right: none;\r\n    border-left: 0px solid #ccc;\r\n    text-align: left;\r\n    background-color: #f1f1f1;\r\n  }\r\n  \r\n  .table tr th:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\n  \r\n  .table tr td {\r\n    border-top: none;\r\n    border-bottom: 1px solid #ccc;\r\n    border-right: none;\r\n    border-left: 0px solid #ccc;\r\n  }\r\n  \r\n  .table tr td:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\n  \r\n  .table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #f9f9f9;\r\n  } */\r\n/* \r\n.table thead tr th {\r\n    text-transform: uppercase;\r\n    font-size: 0.875em;\r\n}\r\n.table thead tr th {\r\n    border-bottom: 2px solid #e7ebee;\r\n}\r\n.table tbody tr td:first-child {\r\n    font-size: 1.125em;\r\n    font-weight: 300;\r\n}\r\n.table tbody tr td {\r\n    font-size: 0.875em;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #e7ebee;\r\n    padding: 12px 8px;\r\n}\r\n     */\r\n.scrolling_div {\r\n    height: 615px;\r\n    overflow-y: scroll;\r\n}\r\n.user-list tbody td>img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.table {\r\n    font-size: 14px;\r\n    border: none;\r\n  }\r\n.table tr th {\r\n    border-top: 0px solid #ccc;\r\n    border-bottom: 0px solid #ccc;\r\n    border-right: none;\r\n    border-left: 0px solid #ccc;\r\n    text-align: left;\r\n    background-color: #f1f1f1;\r\n  }\r\n.table tr th:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\ntable tr th:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\n.table tr td {\r\n    border-top: none;\r\n    border-bottom: 1px solid #ccc;\r\n    border-right: none;\r\n    border-left: 0px solid #ccc;\r\n  }\r\n.table tr td:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #f9f9f9;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlld2V2ZW50cy92aWV3ZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUduQixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBRTFCLGtCQUFrQjtBQUN0QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJESztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFrQk07QUFDTjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUVGO0lBQ0ksNEJBQTRCO0VBQzlCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlld2V2ZW50cy92aWV3ZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib3gubm8taGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5tYWluLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICAgIC1vLWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgI0NDQ0NDQztcclxuICAgIC1tcy1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgLXdlYmlrdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4vKiAudGFibGUgYS50YWJsZS1saW5rLmRhbmdlciB7XHJcbiAgICBjb2xvcjogI2U3NGMzYztcclxufVxyXG4ubGFiZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udXNlci1saXN0IHRib2R5IHRkIC51c2VyLXN1YmhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi51c2VyLWxpc3QgdGJvZHkgdGQgLnVzZXItbGluayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG4udXNlci1saXN0IHRib2R5IHRkPmltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHRyIHRoIHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMHB4IHNvbGlkICNjY2M7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHRyIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHRyIHRkIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHRyIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIH0gKi9cclxuICBcclxuLyogXHJcbi50YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG59XHJcbi50YWJsZSB0aGVhZCB0ciB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U3ZWJlZTtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4udGFibGUgdGJvZHkgdHIgdGQge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlYmVlO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbn1cclxuICAgICAqL1xyXG4uc2Nyb2xsaW5nX2RpdiB7XHJcbiAgICBoZWlnaHQ6IDYxNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udXNlci1saXN0IHRib2R5IHRkPmltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuXHJcbi50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0ciB0aCB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCAjY2NjO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0ciB0aDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIFxyXG50YWJsZSB0ciB0aDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0ciB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMHB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/viewevents/viewevents.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/viewevents/viewevents.component.ts ***!
  \**********************************************************/
/*! exports provided: VieweventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieweventsComponent", function() { return VieweventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _createvent_createvent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createvent/createvent.component */ "./src/app/pages/createvent/createvent.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let VieweventsComponent = class VieweventsComponent {
    constructor(matDialog, api) {
        this.matDialog = matDialog;
        this.api = api;
        this.qrcodename = "http://pyticketingsystem.com/events/";
        this.title = 'generate-qrcode';
        this.display = false;
    }
    ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
        this.initialize();
    }
    initialize() {
        this.api._getAPI('event/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }))
            .subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.eventList = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
    }
    previewEvent(event) {
        // console.log('event', JSON.stringify(event));
        this.value = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].website + event.eventId + '/' + event.title;
        //alert('res.data.objectId' + res.data.objectId);
        this.display = true;
        const dialogRef = this.matDialog.open(_createvent_createvent_component__WEBPACK_IMPORTED_MODULE_5__["EventDialog"], {
            data: {
                "title": event.title,
                "eventDescription": event.eventDescription,
                "startDate": event.startDate,
                "endDate": event.endDate,
                "contactPersonName": event.contactPersonName,
                "contactPerson": event.contactPerson,
                "duration": event.duration,
                "eventCategoryId": event.category,
                "address": event.address,
                "maxSeat": event.maxSeat,
                "minSeat": event.minSeat,
                "isPaid": 'Free',
                "isSeatsVisible": false,
                "perSeatCharge": 0,
                "QrValue": this.value
            },
            width: '800px',
            hasBackdrop: true,
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            this.value = result;
        });
    }
};
VieweventsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__["EventsapiService"] }
];
VieweventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewevents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewevents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewevents/viewevents.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewevents.component.css */ "./src/app/pages/viewevents/viewevents.component.css")).default]
    })
], VieweventsComponent);



/***/ }),

/***/ "./src/app/pages/viewusers/viewusers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/viewusers/viewusers.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-box.no-header {\r\n    padding-top: 20px;\r\n}\r\n.main-box {\r\n    background: #FFFFFF;\r\n    -o-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    box-shadow: 1px 1px 2px 0 #CCCCCC;\r\n    margin-bottom: 16px;\r\n    -webikt-border-radius: 3px;\r\n    border-radius: 3px;\r\n}\r\n.table a.table-link.danger {\r\n    color: #e74c3c;\r\n}\r\n.label {\r\n    border-radius: 3px;\r\n    font-size: 0.875em;\r\n    font-weight: 600;\r\n}\r\n.user-list tbody td .user-subhead {\r\n    font-size: 0.875em;\r\n    font-style: italic;\r\n}\r\n.user-list tbody td .user-link {\r\n    display: block;\r\n    font-size: 1.25em;\r\n    padding-top: 3px;\r\n    margin-left: 60px;\r\n}\r\na {\r\n    color: #3498db;\r\n    outline: none!important;\r\n}\r\n.user-list tbody td>img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.table {\r\n    font-size: 14px;\r\n    border: none;\r\n  }\r\n.table tr th {\r\n    border-top: 0px solid #ccc;\r\n    border-bottom: 0px solid #ccc;\r\n    border-right: none;\r\n    border-left: 0px solid #ccc;\r\n    text-align: left;\r\n    background-color: #f1f1f1;\r\n  }\r\n.table tr th:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\ntable tr th:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\n.table tr td {\r\n    border-top: none;\r\n    border-bottom: 1px solid #ccc;\r\n    border-right: none;\r\n    border-left: 0px solid #ccc;\r\n  }\r\n.table tr td:last-child {\r\n    border-right: 0px solid #ccc;\r\n  }\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: #f9f9f9;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlld3VzZXJzL3ZpZXd1c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFHbkIsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUUxQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUVGO0lBQ0ksNEJBQTRCO0VBQzlCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlld3VzZXJzL3ZpZXd1c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm94Lm5vLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubWFpbi1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICAtby1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICNDQ0NDQ0M7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAjQ0NDQ0NDO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIC13ZWJpa3QtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnRhYmxlIGEudGFibGUtbGluay5kYW5nZXIge1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuLmxhYmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZCAudXNlci1zdWJoZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4udXNlci1saXN0IHRib2R5IHRkIC51c2VyLWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXItbGlzdCB0Ym9keSB0ZD5pbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGFibGUgdHIgdGgge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgI2NjYztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAudGFibGUgdHIgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICBcclxudGFibGUgdHIgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICBcclxuICAudGFibGUgdHIgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICBcclxuICAudGFibGUgdHIgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICBcclxuICAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/viewusers/viewusers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/viewusers/viewusers.component.ts ***!
  \********************************************************/
/*! exports provided: ViewusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewusersComponent", function() { return ViewusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/eventsapi.service */ "./src/app/services/eventsapi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ViewusersComponent = class ViewusersComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.api._getAPI('event/booking').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }))
            .subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            console.log('res :', JSON.stringify(res));
            this.eventusers = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
        // alert('initialize');
        this.api._getAPI('master/category/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }))
            .subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.categories = res.data;
        }, err => {
            if (err.length > 0) {
                // alert('HTTP Error'+ err)
            }
        });
        this.api._getAPI('event/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // alert('Handling error locally and rethrowing it...'+ JSON.stringify(err));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }))
            .subscribe(res => {
            // alert('HTTP response'+ JSON.stringify(res));
            this.eventList = res.data;
        }, err => {
            if (err.length > 0) {
                //alert('HTTP Error'+ err)
            }
        });
    }
};
ViewusersComponent.ctorParameters = () => [
    { type: src_app_services_eventsapi_service__WEBPACK_IMPORTED_MODULE_2__["EventsapiService"] }
];
ViewusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewusers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewusers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/viewusers/viewusers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewusers.component.css */ "./src/app/pages/viewusers/viewusers.component.css")).default]
    })
], ViewusersComponent);



/***/ }),

/***/ "./src/app/services/eventsapi.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/eventsapi.service.ts ***!
  \***********************************************/
/*! exports provided: EventsapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsapiService", function() { return EventsapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let EventsapiService = class EventsapiService {
    constructor(http) {
        this.http = http;
        // apiURL:string ="http://localhost:8000/api/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    // Calling POST Method's 
    _postAPI(methodname, params) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + methodname, params, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(methodname)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(methodname, [])));
    }
    // Calling GET Method's
    _getAPI(methodname) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + methodname, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(methodname)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
    }
    _commonErrormsg(title, content) {
        $.confirm({
            title: title,
            content: content,
            type: 'red',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Try again',
                    btnClass: 'btn-red',
                    action: function () { }
                },
                close: function () { }
            }
        });
    }
    _commonConfirmsg() {
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function () {
                    $.alert('Confirmed!');
                },
                cancel: function () {
                    $.alert('Canceled!');
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function () {
                        $.alert('Something else?');
                    }
                }
            }
        });
    }
    _commonalertmsg(content) {
        // $.alert({
        //   title: 'Alert!',
        //     content: content,
        // });
        $.confirm({
            title: 'Alert',
            content: content,
            type: 'orange',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Try again',
                    btnClass: 'btn-red',
                    action: function () { }
                },
                close: function () { }
            }
        });
    }
    // Error Handling
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    /** Log a Service message with the MessageService */
    log(message) {
        console.log(message);
    }
};
EventsapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EventsapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventsapiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: "http://ramdeshdev.com/api/",
    website: "http://ramdeshdev.com/events/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\pyquantum\pyAdminConsole\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);