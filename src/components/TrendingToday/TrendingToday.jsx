import { Link } from "react-router-dom";
import css from "components/TrendingToday/TrendingToday.module.css";
import defaultImage from "components/DefaultImg/defaultImage.jpg"


const IMG_URL = "https://image.tmdb.org/t/p/w300/";

const TrendingToday = ({movies}) => {
        return (
                <ul className={css.trendlist}>
                        {movies.map( (movie) => {
                                return (
                                        <li key={movie.id} className={css.movie}>
                                                <Link to={`/movies/${movie.id}`} className={css.link}>
                                                        <img src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : defaultImage} 
                                                        alt={movie.title} width="250px" height="100%"></img>
                                                        {movie.title}
                                                </Link>
                                        </li>
                                );
                        })}
                </ul>
        );
};

export default TrendingToday;