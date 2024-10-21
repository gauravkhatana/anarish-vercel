import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any; // Declaring Bootstrap for use in TypeScript

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Anarish Innovations';
  isEmpty: boolean = false;

  tabs = ['services', 'portfolio', 'beliefs', 'recommendations', 'contact us'];
  private toast: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const toastElement = document.getElementById('liveToast') as HTMLElement;

    // Get the button and toast elements
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    // Check if both button and toast are found
    if (toastTrigger && toastLiveExample) {
      // Set toast options, including delay for display time
      this.toast = new bootstrap.Toast(toastLiveExample, {
        delay: 60000, // 60 seconds
      });

      // Attach click event listener to show toast
      toastTrigger.addEventListener('click', () => {
        this.toast.show();
      });
    }
  }

  dismissToast() {
    if (this.toast) {
      this.toast.hide();
    }
  }

  ngOnDestroy() {}

  handletabs(tabValue: String) {
    this.router.navigateByUrl('home/#portfolio');
  }
}
