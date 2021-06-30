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
  title = 'Movies';
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
      this.errorMessage = 'This field cannot be left empty. Please enter something.';
    } else {
      this.movieService.addMovie(this.movie).subscribe((addedMovie) => {
        this.movies.push(addedMovie);
        this.movie = new Movie();
        this.errorMessage = '';
      });
    }
  }
  updateMovie() {
    if (
      this.movie.name == '' ||
      this.movie.id == 0 ||
      this.movie.language == '' ||
      this.movie.rating == 0
    ) {
      this.errorMessage = ' This field cannot be left empty. Please enter something.';
    } else {
      this.movieService.updateMovie(this.movie).subscribe((updatedMovie) => {
        this.movie = new Movie();
        this.errorMessage = '';
      });
    }
  }
  deleteMovie() {
    if (this.movie.id == 0) {
      this.errorMessage = 'This field cannot be left empty. Please enter something.';
    } else {
      this.movieService.deleteMovie(this.movie).subscribe((deletedMovie) => {
        this.movie = new Movie();
        this.errorMessage = '';
      });
    }
  }
}
