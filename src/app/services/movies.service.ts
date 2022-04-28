import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../movies/movie';
import { switchMap } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'c44c3739634bad4e3cdfd395dc9fbbef';
  constructor(private http: HttpClient) {}
  getmovies(type: string = 'toprated', count: number = 15) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
  searchmovies(page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
