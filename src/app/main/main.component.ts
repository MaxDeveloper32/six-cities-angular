import { Component } from '@angular/core';
import { SectionLocationsComponent } from './section-locations/section-locations.component';
import { SectionOffersComponent } from './section-offers/section-offers.component';

@Component({
  selector: 'app-main',
  imports: [SectionLocationsComponent, SectionOffersComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

}
