import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RootPortfolioPageComponent } from './root-portfolio/root-portfolio.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QueriesComponent } from './queries/queries.component';

const routes: Routes = [{
  path: "",
  component: RootComponent,
  children: [
    {
      path: '',
      component: MainComponent
    },
    {
      path: 'contact-us',
      component: ContactUsComponent
    },
    {
      path: 'about-us',
      component: AboutUsComponent
    },
    {
      path: 'portfolio/:id',
      component: RootPortfolioPageComponent
    },
    { 
      path: 'queries',
      component: QueriesComponent 
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 50],
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}