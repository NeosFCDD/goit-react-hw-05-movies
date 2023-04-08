import { Route, Routes } from "react-router-dom";

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Searchbar />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}/>
                <Route path="cast" element = {<Cast />}/>
                <Route path="reviews" element = {<Reviews />}/>
          <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
};
