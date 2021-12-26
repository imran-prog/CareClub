import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from './service/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FundpostComponent } from './fundpost/fundpost.component';
import { SummaryComponent } from './fundpost/summary/summary.component';
import { FundDonationComponent } from './fundpost/fund-donation/fund-donation.component';
import { PopProductsComponent } from './pop-products/pop-products.component';
import { FundDonateComponent } from './donate/fund-donate/fund-donate.component';
import { GenDonateComponent } from './donate/gen-donate/gen-donate.component';
import { DonateComponent } from './donate/donate.component';
import { FundmeComponent } from './fundme/fundme.component';
import { BioComponent } from './fundme/bio/bio.component';
import { ExtraDetailComponent } from './fundme/extra-detail/extra-detail.component';
import { PopupComponent } from './popup/popup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileMenuComponent } from './profile/profile-menu/profile-menu.component';
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import { DirectoryComponent } from './directory/directory.component';
import { DirListComponent } from './directory/dir-list/dir-list.component';
import { ProfileDonationsComponent } from './profile/profile-donations/profile-donations.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './account/signup/signup.component';
import { SigninComponent } from './account/signin/signin.component';
import { AlertComponent } from './account/alert/alert.component';
import { ForgetPassComponent } from './account/forget-pass/forget-pass.component';
import { ResetPassComponent } from './account/reset-pass/reset-pass.component';
import { VerifyMailComponent } from './account/verify-mail/verify-mail.component';
import { AdminComponent } from './account/admin/admin.component';
import { EditAccountComponent } from './account/admin/edit-account/edit-account.component';
import { ListComponent } from './account/admin/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    FundpostComponent,
    SummaryComponent,
    FundDonationComponent,
    PopProductsComponent,
    FundDonateComponent,
    GenDonateComponent,
    DonateComponent,
    FundmeComponent,
    BioComponent,
    ExtraDetailComponent,
    PopupComponent,
    ProfileComponent,
    ProfileMenuComponent,
    ProfileDataComponent,
    DirectoryComponent,
    DirListComponent,
    ProfileDonationsComponent,
    LoaderComponent,
    AccountComponent,
    SignupComponent,
    SigninComponent,
    AlertComponent,
    ForgetPassComponent,
    ResetPassComponent,
    VerifyMailComponent,
    AdminComponent,
    EditAccountComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatProgressBarModule],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
