import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
  ]
})
export class NavComponent {}
