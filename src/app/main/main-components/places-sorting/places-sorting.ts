import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

const options = [ 'Popular', 'Price: low to high', 'Price: high to low', 'Top rated first']


@Component({
  selector: 'app-places-sorting',
  imports: [CommonModule],
  templateUrl: './places-sorting.html',
})
export class PlacesSortingComponent {
   options = options;
   isOpen = false;
    selectedOption = signal('Popular');

   selectOption(option: string) {
    this.selectedOption.set(option);
    this.isOpen = false;
  }
}
