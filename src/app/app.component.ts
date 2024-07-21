import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NavComponent } from "./nav/nav.component";
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
  faBook = faBook;
  faHandsHelping = faHandsHelping;
  faCogs = faCogs;
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(breakpointObserver: BreakpointObserver) { }
}
