import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrl: './ms.component.scss'
})
export class MsComponent {

  constructor(private router: Router) { }
}
