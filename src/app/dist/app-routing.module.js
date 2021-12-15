"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var fundpost_component_1 = require("./fundpost/fundpost.component");
var home_component_1 = require("./home/home.component");
var donate_component_1 = require("./donate/donate.component");
var profile_component_1 = require("./profile/profile.component");
var directory_component_1 = require("./directory/directory.component");
var fundme_component_1 = require("./fundme/fundme.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'fund', component: fundpost_component_1.FundpostComponent },
    { path: 'donate', component: donate_component_1.DonateComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'dir', component: directory_component_1.DirectoryComponent },
    { path: 'fundme', component: fundme_component_1.FundmeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
