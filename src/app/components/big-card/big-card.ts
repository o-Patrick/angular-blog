import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard {
  @Input()
  Id: string = "0";
  @Input()
  photoCover: string;
  @Input()
  photoAlternativeText: string;
  @Input()
  cardAuthor: string;
  @Input()
  cardTitle: string;
  @Input()
  cardDescription: string;
  
  constructor() {
    this.photoCover = '';
    this.photoAlternativeText = '';
    this.cardAuthor = '';
    this.cardTitle = '';
    this.cardDescription = '';
  }
}
