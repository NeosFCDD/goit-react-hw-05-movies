import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from 'components/Cast/Cast.module.css';
import defaultImage from 'components/DefaultImg/defaultImage.jpg';

const API_KEY = "e6ff7d92338793893a42bd2f0fabea27";
const URL = "https://api.themoviedb.org/3/movie/";
const IMG_URL = "https://image.tmdb.org/t/p/w200";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      let response = await fetch(
        `${URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      response = await response.json();
      setCast(response.cast);
    };

    getCast();
  }, [movieId]);

  return (
    cast && cast.length > 0 ? (<ul className={css.list}>
        {cast.map((actor) => {
          return (
            <li key={actor.id} className={css.item}>
              <img src={actor.profile_path ? `${IMG_URL}${actor.profile_path}` : defaultImage} alt={actor.name}></img>
              <div className={css.actor}>
                <h3>{actor.name}</h3>
                <p>Role: {actor.character}</p>
              </div>
            </li>
          );
        })}
      </ul>) : <p>No Information found</p>
  );
};

export default Cast;