"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_client_1 = require("@ngx-loading-bar/http-client");
var core_2 = require("@ngx-loading-bar/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var hero_component_1 = require("./home/hero/hero.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var fundpost_component_1 = require("./fundpost/fundpost.component");
var summary_component_1 = require("./fundpost/summary/summary.component");
var fund_donation_component_1 = require("./fundpost/fund-donation/fund-donation.component");
var pop_products_component_1 = require("./pop-products/pop-products.component");
var fund_donate_component_1 = require("./donate/fund-donate/fund-donate.component");
var gen_donate_component_1 = require("./donate/gen-donate/gen-donate.component");
var donate_component_1 = require("./donate/donate.component");
var fundme_component_1 = require("./fundme/fundme.component");
var bio_component_1 = require("./fundme/bio/bio.component");
var extra_detail_component_1 = require("./fundme/extra-detail/extra-detail.component");
var popup_component_1 = require("./popup/popup.component");
var profile_component_1 = require("./profile/profile.component");
var profile_menu_component_1 = require("./profile/profile-menu/profile-menu.component");
var profile_data_component_1 = require("./profile/profile-data/profile-data.component");
var directory_component_1 = require("./directory/directory.component");
var dir_list_component_1 = require("./directory/dir-list/dir-list.component");
var profile_donations_component_1 = require("./profile/profile-donations/profile-donations.component");
var loader_component_1 = require("./loader/loader.component");
var account_component_1 = require("./account/account.component");
var signup_component_1 = require("./account/signup/signup.component");
var signin_component_1 = require("./account/signin/signin.component");
var alert_component_1 = require("./account/alert/alert.component");
var forget_pass_component_1 = require("./account/forget-pass/forget-pass.component");
var reset_pass_component_1 = require("./account/reset-pass/reset-pass.component");
var verify_mail_component_1 = require("./account/verify-mail/verify-mail.component");
var admin_component_1 = require("./account/admin/admin.component");
var edit_account_component_1 = require("./account/admin/edit-account/edit-account.component");
var list_component_1 = require("./account/admin/list/list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                hero_component_1.HeroComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                fundpost_component_1.FundpostComponent,
                summary_component_1.SummaryComponent,
                fund_donation_component_1.FundDonationComponent,
                pop_products_component_1.PopProductsComponent,
                fund_donate_component_1.FundDonateComponent,
                gen_donate_component_1.GenDonateComponent,
                donate_component_1.DonateComponent,
                fundme_component_1.FundmeComponent,
                bio_component_1.BioComponent,
                extra_detail_component_1.ExtraDetailComponent,
                popup_component_1.PopupComponent,
                profile_component_1.ProfileComponent,
                profile_menu_component_1.ProfileMenuComponent,
                profile_data_component_1.ProfileDataComponent,
                directory_component_1.DirectoryComponent,
                dir_list_component_1.DirListComponent,
                profile_donations_component_1.ProfileDonationsComponent,
                loader_component_1.LoaderComponent,
                account_component_1.AccountComponent,
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                alert_component_1.AlertComponent,
                forget_pass_component_1.ForgetPassComponent,
                reset_pass_component_1.ResetPassComponent,
                verify_mail_component_1.VerifyMailComponent,
                admin_component_1.AdminComponent,
                edit_account_component_1.EditAccountComponent,
                list_component_1.ListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_client_1.LoadingBarHttpClientModule,
                core_2.LoadingBarModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
