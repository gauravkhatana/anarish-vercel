import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-portfolio',
  templateUrl: './root-portfolio.component.html',
  styleUrls: ['./root-portfolio.component.scss']
})
export class RootPortfolioPageComponent implements OnInit {
  id: string | null = null;
  dataDetails: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  loadData(id: string) {
   
  }
}
