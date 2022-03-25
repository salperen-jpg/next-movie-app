import React from 'react';
import requests from '../utils/requests';
import { useRouter } from 'next/router';
import styles from '../styles/MovieButton.module.scss';

const MovieButtons = () => {
  const router = useRouter();
  return (
    <section className={styles.buttonsContainer}>
      {Object.entries(requests).map(([key, { title, url }]) => {
        return (
          <button
            className={styles.movieBtn}
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </button>
        );
      })}
    </section>
  );
};

export default MovieButtons;
