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
var signin_component_1 = require("./account/signin/signin.component");
var signup_component_1 = require("./account/signup/signup.component");
var verify_mail_component_1 = require("./account/verify-mail/verify-mail.component");
var forget_pass_component_1 = require("./account/forget-pass/forget-pass.component");
var reset_pass_component_1 = require("./account/reset-pass/reset-pass.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'fund', component: fundpost_component_1.FundpostComponent },
    { path: 'donate', component: donate_component_1.DonateComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'dir', component: directory_component_1.DirectoryComponent },
    { path: 'fundme', component: fundme_component_1.FundmeComponent },
    { path: 'login', component: signin_component_1.SigninComponent },
    { path: 'register', component: signup_component_1.SignupComponent },
    { path: 'verify-email', component: verify_mail_component_1.VerifyMailComponent },
    { path: 'forget-password', component: forget_pass_component_1.ForgetPassComponent },
    { path: 'reset-password', component: reset_pass_component_1.ResetPassComponent },
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
