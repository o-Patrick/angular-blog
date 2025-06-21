import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  photoCover: string;
  @Input()
  photoAlternativeText: string;
  @Input()
  contentTitle: string;
  @Input()
  contentDescription: string;

  constructor(private route: ActivatedRoute) {
    this.photoCover = 'https://plein8.com/wp-content/uploads/2024/09/placeholder-2-1.png';
    this.photoAlternativeText = '';
    this.contentTitle = 'Integer eget';
    this.contentDescription = 'Aliquam malesuada mauris sed dolor tincidunt, id iaculis nulla gravida. Nam iaculis dolor quis lorem tempus pharetra tristique ac orci. Phasellus arcu est, eleifend aliquet efficitur nec, tincidunt ut neque. Praesent eget arcu suscipit, sodales enim id, rutrum sapien. Sed eleifend dignissim leo, at malesuada velit. In hac habitasse platea dictumst. Sed et egestas ex. Aliquam erat volutpat. Nulla porta est in orci venenatis, ac ultricies ex semper. Integer quis elit sed risus accumsan placerat. Proin justo ligula, fermentum vitae lobortis in, consequat at tellus. Vestibulum ut rhoncus ipsum. Nullam scelerisque, magna vel pellentesque ullamcorper, nibh massa mollis mauris, sit amet feugiat leo erat a quam. Etiam ut felis quis tellus vestibulum luctus. Suspendisse lacinia viverra ipsum ac consequat.';
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get('Id'))
    );
  }
}
