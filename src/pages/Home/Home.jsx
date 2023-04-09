import { useState, useEffect } from "react";
import TrendingToday from "components/TrendingToday/TrendingToday";
import css from 'pages/Home/Home.module.css';


const API_KEY = "e6ff7d92338793893a42bd2f0fabea27";
const URL = "https://api.themoviedb.org/3/trending/movie/day";

const Home = () => {
        const [trendingToday, setTrendingToday] = useState([]);

        useEffect(() => {
                const getTrendingToday = async() => {
                        let responce = await fetch (`${URL}?api_key=${API_KEY}`);
                        responce = await responce.json();
                        setTrendingToday(responce.results);
                };

                getTrendingToday().catch(console.error);
        }, []);

        return (
                <div className="{css.container}">
                        <h2 className="{css.secondheader}">Trending Today</h2>
                        <TrendingToday movies = {trendingToday}/>
                </div>
        );
};

export default Home;