import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {

  constructor(private Route: Router){
    
  }

 handletabs(tabValue: string){

   console.log(tabValue)

   this.Route.navigate([], { fragment: tabValue });
 }
 

}
