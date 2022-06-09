import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Shazam ',
        description: 'Shazam description',
        imageUrl: 'https://movieposters2.com/images/1631718-b.jpg',
      },
      {
        id: 2,
        title: 'Shazam ',
        description: 'Shazam description',
        imageUrl: 'https://movieposters2.com/images/1631718-b.jpg',
      },
      {
        id: 3,
        title: 'Shazam ',
        description: 'Shazam description',
        imageUrl: 'https://movieposters2.com/images/1631718-b.jpg',
      },
      {
        id: 4,
        title: 'Shazam ',
        description: 'Shazam description',
        imageUrl: 'https://movieposters2.com/images/1631718-b.jpg',
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find((m) => m.id == id);
  }
}
