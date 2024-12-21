import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import FormsModule
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RootComponent } from './root/root.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RootPortfolioPageComponent } from './root-portfolio/root-portfolio.component';
import { HrmsComponent } from './hrms/hrms.component';
import { LmsComponent } from './lms/lms.component';
import { CrmsComponent } from './crms/crms.component';
import { MsComponent } from './ms/ms.component';
import { WebsiteDesignComponent } from './website-design/website-design.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DatePipe, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { QueriesComponent } from './queries/queries.component';
import { FilterPipe } from './pipes/filter.pipe'; // Import FilterPipe

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PortfolioComponent,
    HomeComponent,
    HeaderComponent,
    RootComponent,
    MainComponent,
    QueriesComponent,
    RootPortfolioPageComponent,
    HrmsComponent,
    LmsComponent,
    CrmsComponent,
    MsComponent,
    WebsiteDesignComponent,
    DigitalMarketingComponent,
    AboutUsComponent,
    FilterPipe // Declare FilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, // Add FormsModule
    SlickCarouselModule
  ],
  providers: [
    DatePipe,
    Location, 
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
