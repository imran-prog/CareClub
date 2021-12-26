import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FundpostComponent } from './fundpost/fundpost.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ProfileComponent } from './profile/profile.component';
import { DirectoryComponent } from './directory/directory.component';
import { FundmeComponent } from './fundme/fundme.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { VerifyMailComponent } from './account/verify-mail/verify-mail.component';
import { ForgetPassComponent } from './account/forget-pass/forget-pass.component';
import { ResetPassComponent } from './account/reset-pass/reset-pass.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fund', component: FundpostComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dir', component: DirectoryComponent },
  { path: 'fundme', component: FundmeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'verify-email', component: VerifyMailComponent },
  { path: 'forget-password', component: ForgetPassComponent },
  { path: 'reset-password', component: ResetPassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
