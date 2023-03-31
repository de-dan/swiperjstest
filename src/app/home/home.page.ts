import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SwiperComponent } from '../swiper/swiper.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SwiperComponent],
})
export class HomePage {
  constructor() {}
}
