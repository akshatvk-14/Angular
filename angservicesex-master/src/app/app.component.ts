import { Component } from '@angular/core';
import { Movie } from 'src/model/movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: Movie[] = [];
  movie: Movie = new Movie();
  errorMessage: String = '';

  constructor(private movieService: MovieService) {}
  title = 'Movies List';
  ngOnInit() {
    this.getMoviesFromServer();
  }

  getMoviesFromServer() {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  newMovie() {
    if (
      this.movie.name == '' ||
      this.movie.id == 0 ||
      this.movie.language == '' ||
      this.movie.rating == 0
    ) {
      this.errorMessage = 'This field cannot be left empty.';
    } else {
      this.movieService.addMovie(this.movie).subscribe((addedMovie) => {
        this.movies.push(addedMovie);
        this.movie = new Movie();
        this.errorMessage = '';
      });
    }
  }
}
