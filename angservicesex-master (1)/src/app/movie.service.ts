import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:3000/movies', movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`http://localhost:3000/movies/${movie.id}/`, movie);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`http://localhost:3000/movies/${movie.id}/`);
  }

}
