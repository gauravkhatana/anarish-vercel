import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private router: Router){
    console.log('yashu');
    
  }

  handleClick(id: string){
    console.log(';deepu',id);
    
    this.router.navigate([`portfolio/${id}`]); 
  }

}
