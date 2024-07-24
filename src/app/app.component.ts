import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { faBook, faHandsHelping, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bibliomation, Inc.';
  icons = {
    faBook,
    faHandsHelping,
    faCogs
  };
  isHandset$: Observable<boolean>;
  services = [
    {
      icon: 'faBook',
      title: 'Cataloging',
      image: 'assets/catalog.png',
      alt: 'An old card catalog',
      description: 'Our cataloging services are designed to help libraries of all sizes.'
    },
    {
      icon: 'faHandsHelping',
      title: 'Support',
      image: 'assets/support.png',
      alt: 'Laptop with code on screen',
      description: 'Our support team is here to help you with any questions or issues you may have.'
    },
    {
      icon: 'faCogs',
      title: 'Resources',
      image: 'assets/ebook.png',
      alt: 'A kindle on a table with coffee and a phone',
      description: 'Our resources are designed to help you find the information you need.'
    }
  ];

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);
    this.isHandset$ = breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
