import Head from 'next/head';
import MovieButtons from '../components/MovieButtons';
import Movies from '../components/Movies';
import requests from '../utils/requests';

export default function Home({ movies }) {
  return (
    <div>
      <MovieButtons />
      <Movies movies={movies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await response.json();
  return {
    props: {
      movies: data.results,
    },
  };
}

// 888bcdc63e7c2f12291cbf83061960a4
//  await fetch(
//     `https://api.themoviedb.org/3/trending/all/week?api_key=888bcdc63e7c2f12291cbf83061960a4&language=en-US`
//   );
