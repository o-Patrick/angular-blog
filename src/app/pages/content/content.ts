import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DUMMY_DATA } from '../../data/dummyData';

@Component({
  selector: 'app-content',
  imports: [
    RouterLink
  ],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {
  @Input()
  photoCover: string = '';
  @Input()
  photoAlternativeText: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const RESULT = DUMMY_DATA.filter(article => article.id === this.id)[0];
    this.contentTitle = RESULT.title;
    this.contentDescription = RESULT.description;
    this.photoCover = RESULT.photo;
  }
}
