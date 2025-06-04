import { Pipe, PipeTransform } from '@angular/core';

const MAX_RATING = 5;

@Pipe({
  name: 'ratingWidth',
})
export class RatingWidthPipe implements PipeTransform {
  transform(rating: number) {
    console.log(rating);

    return `${(Math.round(rating) / MAX_RATING) * 100}%`;
  }
}
