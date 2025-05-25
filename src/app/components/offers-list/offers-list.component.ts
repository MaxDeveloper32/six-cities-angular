import { Component, Input } from '@angular/core';
import { TypePlace } from '../../types/offers';
import { CommonModule } from '@angular/common';
import { mockOffers } from '../../mock-offers';



@Component({
  selector: 'app-offers-list',
  imports: [CommonModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})

export class OffersListComponent {
  offers:TypePlace[] = mockOffers;
}


/* ng generate component components/offers-list */
