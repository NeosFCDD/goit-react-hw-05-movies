import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("pages/Home/Home.jsx"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const SearchForm = lazy(() => import("./SearchForm/SearchForm"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Loader = lazy(() => import("components/Loader/Loader.jsx"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<SearchForm />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
