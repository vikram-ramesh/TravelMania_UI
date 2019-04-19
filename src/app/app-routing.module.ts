import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EventsComponent } from './events/events.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { CurrencyPartnerComponent } from './currency-partner/currency-partner.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { ExecutePaymentComponent } from './execute-payment/execute-payment.component';


const routes: Routes = [
  {path: '', component: LandingPageComponentComponent},
  {path: 'home' , component: LandingPageComponentComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'searchResults', component: SearchResultsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'travelGuide', component: TravelGuideComponent},
  {path: 'currencyPartner', component: CurrencyPartnerComponent},
  {path: 'passengerDetails', component: PassengerDetailsComponent},
  {path: 'executePayment', component: ExecutePaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
