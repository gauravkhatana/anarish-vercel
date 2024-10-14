import { Component, HostListener, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  scroll: number = 0;
  isDropdownShow: boolean = false;
  isPortfolioActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isPortfolioActive = this.router.url.startsWith('/portfolio');
      }
    });
  }

  

  handletabs(tabValue: string) {
    this.router.navigate([], { fragment: tabValue });
  }
}
