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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
