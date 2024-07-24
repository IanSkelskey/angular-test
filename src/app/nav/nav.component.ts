import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  imports: [
    MaterialModule
  ],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
})
export class NavComponent {
  icons = {
    faFacebook,
    faLinkedin,
    faLocationDot,
    faTwitter
  };

  constructor() { }
}
