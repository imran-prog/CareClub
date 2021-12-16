import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FundpostComponent } from './fundpost/fundpost.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ProfileComponent } from './profile/profile.component';
import { DirectoryComponent } from './directory/directory.component';
import { FundmeComponent } from './fundme/fundme.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fund', component: FundpostComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dir', component: DirectoryComponent },
  { path: 'fundme', component: FundmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
