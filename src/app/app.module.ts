import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EventsComponent } from './events/events.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { HotelsComponent } from './hotels/hotels.component';
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { CurrencyPartnerComponent } from './currency-partner/currency-partner.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { ExecutePaymentComponent } from './execute-payment/execute-payment.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponentComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    LoginComponent,
    SearchResultsComponent,
    EventsComponent,
    SearchFilterPipe,
    HotelsComponent,
    TravelGuideComponent,
    CurrencyPartnerComponent,
    PassengerDetailsComponent,
    ExecutePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}