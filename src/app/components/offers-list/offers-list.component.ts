import { Component, Input, } from '@angular/core';
import { TypePlace } from '../../types/offers';
import { CommonModule } from '@angular/common';
import { RatingWidthPipe } from '../../pipes/rating-width.pipe';

@Component({
  selector: 'app-offers-list',
  imports: [CommonModule, RatingWidthPipe],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})

export class OffersListComponent {
  @Input() offers:TypePlace[] = [];
}

