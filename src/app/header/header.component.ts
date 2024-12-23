// import { Component, HostListener, OnDestroy } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent  {
//   scroll: number = 0;
//   isDropdownShow: boolean = false;
//   isPortfolioActive: boolean = false;

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.isPortfolioActive = this.router.url.startsWith('/portfolio');
//       }
//     });
//   }

  

//   handletabs(tabValue: string) {
//     this.router.navigate([], { fragment: tabValue });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropdownShow: boolean = false;
  isPortfolioActive: boolean = false;
  showVisitorCounter: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isPortfolioActive = this.router.url.startsWith('/portfolio');
      }
    });

    this.route.queryParams.subscribe(params => {
      this.showVisitorCounter = params['showVisitorCount'] === 'true';
      console.log('showVisitorCounter:', this.showVisitorCounter); 
    });
  }

  handletabs(tabValue: string) {
    this.router.navigate([], { fragment: tabValue });
  }
}

