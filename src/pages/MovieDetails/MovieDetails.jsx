import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import leftarrow from "components/DefaultImg/left-arrow.svg";
import css from "pages/MovieDetails/MovieDetails.module.css";
import defaultImage from "components/DefaultImg/defaultImage.jpg"

const API_KEY = "e6ff7d92338793893a42bd2f0fabea27";
const URL = "https://api.themoviedb.org/3/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w300/";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const returnLinkRef = useRef (location.state?.from ?? "/");

  useEffect(() => {
    const getMovieDetails = async () => {
      let response = await fetch(
        `${URL}/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      response = await response.json();
      setMovie(response);
    };

    getMovieDetails();
  }, [movieId]);

  const getReleaseYear = (releaseDate) => {
    if (!releaseDate) {
      return "Not found";
    }
    let releaseYear = new Date(releaseDate);
    return releaseYear.getFullYear();
  };

  const getGenres = (genres) => {
    let array = [];
    genres.map((genre) => {
      return array.push(genre.name);
    });
    return array.join(", ");
  };

  return (
    <div className={css.container}>
      <Link to={returnLinkRef.current} className={css.return}>
        <img src={leftarrow} alt="arrow-left" className={css.svg} />
        Go back
      </Link>
        <div className={css.info}>
          <div className={css.description}>
            <img
              className={css.poster}
              src={
                movie.poster_path ? `${IMG_URL}${movie.poster_path}` : defaultImage
              }
              alt={movie.title}
            ></img>
            <div>
              <h2 className={css.name}>
                {movie.title} ({getReleaseYear(movie.release_date)})
              </h2>
              <p className={css.text}>
                User Score: {(movie.vote_average * 10).toFixed(0)}%
              </p>
              <h3>Overview</h3>
              <p className={css.text}>{movie.overview}</p>
              <h3>Genres</h3>
              <p className={css.text}>{getGenres(movie.genres)}</p>
            </div>
          </div>
          <div className={css.addinfo}>
            <h3>Additional Information</h3>
            <ul className={css.infolist}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
            <Outlet />
        </div>
    </div>
  );
};

export default MovieDetails;