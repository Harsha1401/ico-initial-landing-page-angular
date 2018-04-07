import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  contentTitle1:string = 'We combine design thinking, strategy, technology and marketing to lead our clients to the future.';
  contentText1:string = 'We bring business, customers, and technology together to innovate and thrive.';
  contentTitle2:string = 'Our culture, built around people.';
  contentText2:string = 'We bring business, customers, and technology together to innovate and thrive.';
  constructor() { }

  ngOnInit() {
  }

}
