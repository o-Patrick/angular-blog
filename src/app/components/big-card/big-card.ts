import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  imports: [CommonModule],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard implements OnInit {
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

  ngOnInit(): void {
  }
}
