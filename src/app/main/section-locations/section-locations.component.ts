import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

@Component({
  selector: 'app-section-locations',
  imports: [CommonModule],
  templateUrl: './section-locations.component.html',
  styleUrl: './section-locations.component.css'
})

export class SectionLocationsComponent {
  cities = cities;

  logCity(city: string) {
    console.log('Выбран город:', city);
  }
}
