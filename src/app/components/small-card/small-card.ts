import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard {
  @Input()
  Id: string;
  @Input()
  photoCover: string;
  @Input()
  photoAlternativeText: string;
  @Input()
  cardAuthor: string;
  @Input()
  cardTitle: string;

  constructor() {
    this.Id = "";
    this.photoCover = '';
    this.photoAlternativeText = '';
    this.cardAuthor = '';
    this.cardTitle = '';
  }
}
