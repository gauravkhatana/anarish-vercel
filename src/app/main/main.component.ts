// import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrl: './main.component.scss',
// })

// export class MainComponent implements AfterViewInit {
//   @ViewChild('accordionExample', { static: false }) accordion:
//     | ElementRef
//     | undefined;

//   private delay: number = 5000; // 5 seconds delay between opening items
//   private openInterval: any;
//   private currentIndex: number = 0;
//   showAccordionBar: boolean = true;

//   private userStopped: boolean = false;
//   swiper: Swiper | undefined;

//   constructor(private router: Router, private el: ElementRef) {}

//   startTypeWriter(
//     txtElement: HTMLElement,
//     words: string[],
//     wait: number = 3000
//   ) {
//     let txt = '';
//     let wordIndex = 0;
//     let isDeleting = false;

//     function type() {
//       const current = wordIndex % words.length;
//       const fullTxt = words[current];

//       if (isDeleting) {
//         txt = fullTxt.substring(0, txt.length - 1);
//       } else {
//         txt = fullTxt.substring(0, txt.length + 1);
//       }

//       txtElement.innerHTML = `<span class="txt">${txt}</span>`;

//       let typeSpeed = 300;
//       if (isDeleting) {
//         typeSpeed /= 2;
//       }

//       if (!isDeleting && txt === fullTxt) {
//         typeSpeed = wait;
//         isDeleting = true;
//       } else if (isDeleting && txt === '') {
//         isDeleting = false;
//         wordIndex++;
//         typeSpeed = 500;
//       }

//       setTimeout(type, typeSpeed);
//     }

//     type();
//   }

//   words: string[] = ['Design', 'Code', 'Strategy'];
//   wait: number = 3000;

//   ngOnInit() {
//     const txtElement = this.el.nativeElement.querySelector('.txt-type');
//     this.startTypeWriter(txtElement, this.words, this.wait);
//   }

//   // startAccordionLoop(accordionElement: HTMLElement) {
//   //   const items = accordionElement.querySelectorAll('.accordion-item');

//   //   this.openInterval = setInterval(() => {
//   //     if (this.currentIndex >= items.length) {
//   //       this.currentIndex = 0; // Reset index to loop
//   //     }

//   //     const currentItem = items[this.currentIndex];
//   //     const button = currentItem.querySelector(
//   //       '.accordion-button'
//   //     ) as HTMLElement;
//   //     const collapse = currentItem.querySelector(
//   //       '.accordion-collapse'
//   //     ) as HTMLElement;

//   //     if (button && collapse) {
//   //       if (!collapse.classList.contains('show')) {
//   //         button.click(); 
//   //       }
//   //     }
//   //     if (this.currentIndex > 0) {
//   //       const previousIndex = this.currentIndex - 1;
//   //       const previousItem = items[previousIndex];
//   //       const previousButton = previousItem.querySelector(
//   //         '.accordion-button'
//   //       ) as HTMLElement;
//   //       const previousCollapse = previousItem.querySelector(
//   //         '.accordion-collapse'
//   //       ) as HTMLElement;

//   //       if (previousCollapse && previousCollapse.classList.contains('show')) {
//   //         previousButton.click();
//   //       }
//   //     }

//   //     this.currentIndex++;
//   //   }, this.delay);
//   // }

//   startAccordionLoop(accordionElement: HTMLElement) {
//     this.showAccordionBar=true;
//     const items = accordionElement.querySelectorAll('.accordion-item');
  
//     this.openInterval = setInterval(() => {
//       if (this.currentIndex >= items.length) {
//         const previousIndex = items.length - 1;
//         const previousItem = items[previousIndex];
//         const previousCollapse = previousItem.querySelector('.accordion-collapse') as HTMLElement;
  
//         if (previousCollapse && previousCollapse.classList.contains('show')) {
//           previousCollapse.classList.remove('show');
//           previousItem.classList.remove('active'); // Assuming this removes styling from the closed item
//         }
//         this.currentIndex = 0; // Reset index to loop
//       }
  
//       const currentItem = items[this.currentIndex];
//       const collapse = currentItem.querySelector('.accordion-collapse') as HTMLElement;
  
//       if (collapse) {
//         // Add 'show' class to current item to open it
//         if (!collapse.classList.contains('show')) {
//           collapse.classList.add('show');
//           currentItem.classList.add('active'); // Assuming this adds styling to the opened item
//         }
//       }
  
//       // Close the previous accordion item
//       if (this.currentIndex > 0) {
//         const previousIndex = this.currentIndex - 1;
//         const previousItem = items[previousIndex];
//         const previousCollapse = previousItem.querySelector('.accordion-collapse') as HTMLElement;
  
//         if (previousCollapse && previousCollapse.classList.contains('show')) {
//           previousCollapse.classList.remove('show');
//           previousItem.classList.remove('active'); // Assuming this removes styling from the closed item
//         }
//       }
  
//       this.currentIndex++;
//     }, this.delay);
//   }
  

//   stopAccordionLoop() {
//     this.showAccordionBar=false
//     this.userStopped = true;
//     if (this.openInterval) {
//       clearInterval(this.openInterval);
//       this.openInterval = null; 
//     }
//   }


//   ngAfterViewInit(): void {
//     if (this.accordion) {
//       const accordionElement = this.accordion.nativeElement;
//       this.startAccordionLoop(accordionElement);
//     }

//     this.swiper = new Swiper('.swiper', {
//       modules: [Navigation, Pagination],
//       direction: 'horizontal',
//       slidesPerView: 1,
//       spaceBetween: 20,
//       // loop: true,
//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         992: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//         },
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
 
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.openInterval) {
//       clearInterval(this.openInterval);
//     }
//   }
// }


import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  OnInit,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('accordionExample', { static: false }) accordion: ElementRef | undefined;

  private delay: number = 5000; // Accordion delay
  private openInterval: any;
  private currentIndex: number = 0;
  showAccordionBar: boolean = true;

  swiper: Swiper | undefined;

  // Countdown variables
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private countdownInterval: any;

  // Typewriter effect variables
  words: string[] = ['Design', 'Code', 'Strategy'];
  wait: number = 3000;

  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    const txtElement = this.el.nativeElement.querySelector('.txt-type');
    this.startTypeWriter(txtElement, this.words, this.wait);
    this.startCountdown('January 16, 2025 00:00:00');
  }

  ngAfterViewInit(): void {
    if (this.accordion) {
      const accordionElement = this.accordion.nativeElement;
      this.startAccordionLoop(accordionElement);
    }
    this.initializeSwiper();
  }

  ngOnDestroy(): void {
    if (this.openInterval) {
      clearInterval(this.openInterval);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  // Accordion functionality
  startAccordionLoop(accordionElement: HTMLElement): void {
    this.showAccordionBar = true;
    const items = accordionElement.querySelectorAll('.accordion-item');

    this.openInterval = setInterval(() => {
      if (this.currentIndex >= items.length) {
        this.currentIndex = 0;
      }

      items.forEach((item, index) => {
        const collapse = item.querySelector('.accordion-collapse') as HTMLElement;

        if (collapse) {
          const isActive = index === this.currentIndex;
          collapse.classList.toggle('show', isActive);
          item.classList.toggle('active', isActive);
        }
      });

      this.currentIndex++;
    }, this.delay);
  }

  stopAccordionLoop(): void {
    this.showAccordionBar = false;
    if (this.openInterval) {
      clearInterval(this.openInterval);
    }
  }

  // Countdown functionality
  startCountdown(targetDateString: string): void {
    const targetDate = new Date(targetDateString).getTime();

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.days = this.hours = this.minutes = this.seconds = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.days = days.toString().padStart(2, '0');
      this.hours = hours.toString().padStart(2, '0');
      this.minutes = minutes.toString().padStart(2, '0');
      this.seconds = seconds.toString().padStart(2, '0');
    }, 1000);
  }

  // Typewriter functionality
  startTypeWriter(txtElement: HTMLElement | null, words: string[], wait: number = 3000): void {
    if (!txtElement) {
      console.error('Typewriter element not found!');
      return;
    }

    let txt = '';
    let wordIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = wordIndex % words.length;
      const fullTxt = words[current];

      txt = isDeleting
        ? fullTxt.substring(0, txt.length - 1)
        : fullTxt.substring(0, txt.length + 1);

      txtElement.innerHTML = `<span class="txt">${txt}</span>`;

      let typeSpeed = 300;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && txt === fullTxt) {
        typeSpeed = wait;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }

  // Swiper initialization
  initializeSwiper(): void {
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
