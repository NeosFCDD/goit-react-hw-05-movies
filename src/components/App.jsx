import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("pages/Home/Home.jsx"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Searchbar = lazy(() => import("./SearchForm/SearchForm"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<SearchForm />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}/>
                <Route path="cast" element = {<Cast />}/>
                <Route path="reviews" element = {<Reviews />}/>
          <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
};
