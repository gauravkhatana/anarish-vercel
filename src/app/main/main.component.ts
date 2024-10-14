import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit {
  @ViewChild('accordionExample', { static: false }) accordion:
    | ElementRef
    | undefined;

  private delay: number = 5000; // 5 seconds delay between opening items
  private openInterval: any;
  private currentIndex: number = 0;
  showAccordionBar: boolean = true;

  private userStopped: boolean = false;
  swiper: Swiper | undefined;

  constructor(private router: Router, private el: ElementRef) {}

  startTypeWriter(
    txtElement: HTMLElement,
    words: string[],
    wait: number = 3000
  ) {
    let txt = '';
    let wordIndex = 0;
    let isDeleting = false;

    function type() {
      const current = wordIndex % words.length;
      const fullTxt = words[current];

      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }

      txtElement.innerHTML = `<span class="txt">${txt}</span>`;

      let typeSpeed = 300;
      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && txt === fullTxt) {
        typeSpeed = wait;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  words: string[] = ['Design', 'Code', 'Strategy'];
  wait: number = 3000;

  ngOnInit() {
    const txtElement = this.el.nativeElement.querySelector('.txt-type');
    this.startTypeWriter(txtElement, this.words, this.wait);
  }

  // startAccordionLoop(accordionElement: HTMLElement) {
  //   const items = accordionElement.querySelectorAll('.accordion-item');

  //   this.openInterval = setInterval(() => {
  //     if (this.currentIndex >= items.length) {
  //       this.currentIndex = 0; // Reset index to loop
  //     }

  //     const currentItem = items[this.currentIndex];
  //     const button = currentItem.querySelector(
  //       '.accordion-button'
  //     ) as HTMLElement;
  //     const collapse = currentItem.querySelector(
  //       '.accordion-collapse'
  //     ) as HTMLElement;

  //     if (button && collapse) {
  //       if (!collapse.classList.contains('show')) {
  //         button.click(); 
  //       }
  //     }
  //     if (this.currentIndex > 0) {
  //       const previousIndex = this.currentIndex - 1;
  //       const previousItem = items[previousIndex];
  //       const previousButton = previousItem.querySelector(
  //         '.accordion-button'
  //       ) as HTMLElement;
  //       const previousCollapse = previousItem.querySelector(
  //         '.accordion-collapse'
  //       ) as HTMLElement;

  //       if (previousCollapse && previousCollapse.classList.contains('show')) {
  //         previousButton.click();
  //       }
  //     }

  //     this.currentIndex++;
  //   }, this.delay);
  // }

  startAccordionLoop(accordionElement: HTMLElement) {
    this.showAccordionBar=true;
    const items = accordionElement.querySelectorAll('.accordion-item');
  
    this.openInterval = setInterval(() => {
      if (this.currentIndex >= items.length) {
        const previousIndex = items.length - 1;
        const previousItem = items[previousIndex];
        const previousCollapse = previousItem.querySelector('.accordion-collapse') as HTMLElement;
  
        if (previousCollapse && previousCollapse.classList.contains('show')) {
          previousCollapse.classList.remove('show');
          previousItem.classList.remove('active'); // Assuming this removes styling from the closed item
        }
        this.currentIndex = 0; // Reset index to loop
      }
  
      const currentItem = items[this.currentIndex];
      const collapse = currentItem.querySelector('.accordion-collapse') as HTMLElement;
  
      if (collapse) {
        // Add 'show' class to current item to open it
        if (!collapse.classList.contains('show')) {
          collapse.classList.add('show');
          currentItem.classList.add('active'); // Assuming this adds styling to the opened item
        }
      }
  
      // Close the previous accordion item
      if (this.currentIndex > 0) {
        const previousIndex = this.currentIndex - 1;
        const previousItem = items[previousIndex];
        const previousCollapse = previousItem.querySelector('.accordion-collapse') as HTMLElement;
  
        if (previousCollapse && previousCollapse.classList.contains('show')) {
          previousCollapse.classList.remove('show');
          previousItem.classList.remove('active'); // Assuming this removes styling from the closed item
        }
      }
  
      this.currentIndex++;
    }, this.delay);
  }
  

  stopAccordionLoop() {
    this.showAccordionBar=false
    this.userStopped = true;
    if (this.openInterval) {
      clearInterval(this.openInterval);
      this.openInterval = null; 
    }
  }


  ngAfterViewInit(): void {
    if (this.accordion) {
      const accordionElement = this.accordion.nativeElement;
      this.startAccordionLoop(accordionElement);
    }

    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      // loop: true,
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

  ngOnDestroy(): void {
    if (this.openInterval) {
      clearInterval(this.openInterval);
    }
  }
}
