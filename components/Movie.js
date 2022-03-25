import Image from 'next/image';
import React from 'react';
import styles from '../styles/Movie.module.scss';
import { AiOutlineLike } from 'react-icons/ai';
import { FaLanguage } from 'react-icons/fa';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';
const Movie = ({
  media_type,
  original_language: lang,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
}) => {
  return (
    <aside className={styles.movie}>
      <div className={styles.imgContainer}>
        <Image src={`${BASE_URL}${poster_path}`} width={1500} height={1920} />
        <div className={styles.movieInfo}>
          <h4>{original_title}</h4>
          <div className={styles.icons}>
            <div className={styles.singleIcon}>
              <span className={styles.iconCon}>
                <AiOutlineLike className={styles.icon}></AiOutlineLike>
              </span>
              <span>{popularity.toFixed(0)}</span>
            </div>
            <div className={styles.singleIcon}>
              <span className={styles.iconCon}>
                <FaLanguage className={styles.icon}></FaLanguage>
              </span>
              <span>{lang}</span>
            </div>
          </div>
          <p>{overview.substring(0, 100)}...</p>
        </div>
      </div>
    </aside>
  );
};

export default Movie;
