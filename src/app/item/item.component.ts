import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies/movie';
import { IMAGES_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  imageSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
