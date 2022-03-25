import React from 'react';
import Movie from './Movie';
import styles from '../styles/Movies.module.scss';

const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <section className={styles.movies}>
      <div className={styles.moviesCenter}>
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
