import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import css from "components/SearchForm/SearchForm.module.css";
import QueryList from "components/QueryList/QueryList";

const API_KEY = "e6ff7d92338793893a42bd2f0fabea27";
const URL = "https://api.themoviedb.org/3/search/movie";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);
  const queryValue = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(queryValue);

  useEffect(() => {
    if (!search) {
      return;
    }
    const getQueryResults = async () => {
      let response = await fetch(
        `${URL}?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      );
      response = await response.json();
      setSearchResult(response.results);
    };
    getQueryResults().catch(console.error);
  }, [search]);

  const updateQuery= (e) => {
    e.target.value === ""
      ? setSearchParams({})
      : setSearchParams({ q: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(queryValue);
  };

  return (
    <div>
      <div className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchbutton}>
            <span className={css.buttonlabel}>Search</span>
          </button>

          <input
            className={css.input}
            onChange={updateQuery}
            value={queryValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </div>

      {searchResult && searchResult.length > 0 ? (
        <QueryList movies={searchResult} />
      ) : null}
    </div>
  );
};

export default SearchForm;