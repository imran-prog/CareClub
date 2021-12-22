import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
