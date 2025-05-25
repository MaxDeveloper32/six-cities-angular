import { Component } from '@angular/core';
import { OffersListComponent } from '../../components/offers-list/offers-list.component';
import { PlacesSortingComponent } from '../main-components/places-sorting/places-sorting';

@Component({
  selector: 'app-section-offers',
  imports: [OffersListComponent, PlacesSortingComponent],
  templateUrl: './section-offers.component.html',
  styleUrl: './section-offers.component.css'
})
export class SectionOffersComponent {

}
