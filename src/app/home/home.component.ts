import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any = [];
  upcoming: any = [];
  popular: any = [];
  nowplaying: any = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getmovies('top_rated').subscribe((movies) => {
      this.movies = movies;
    });
    this.moviesService.getmovies('upcoming').subscribe((movies) => {
      this.upcoming = movies;
    });
    this.moviesService.getmovies('popular').subscribe((movies) => {
      this.popular = movies;
    });
    this.moviesService.getmovies('now_playing').subscribe((movies) => {
      this.nowplaying = movies;
    });
  }
}
