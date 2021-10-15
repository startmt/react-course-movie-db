import { AutoComplete, Input, Form } from "antd";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { movieQueryHook } from "../../../services/react-query/query";
import MovieItemSearch from "../components/MovieItemSearch";

const { useSearchMoviesQuery } = movieQueryHook;

const useSearchMovieContainer = () => {
  const [search, setSearch] = useState("");
  const { data } = useSearchMoviesQuery({
    search: search,
  });

  const h = useHistory();

  const handleClickMovieItem = (id: string) => {
    h.push(`/movie/${id}`);
  };

  const options = data?.data?.results?.map((movie) => {
    return {
      label: (
        <div
          onClick={() => {
            handleClickMovieItem(movie.id.toString());
          }}
        >
          <MovieItemSearch
            posterImageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
          />
        </div>
      ),
      value: movie.original_title,
    };
  });

  const handleOnChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleClickSearch = () => {
    h.push(`/search?query=${search}`);
  };

  return { options, search, handleClickSearch, handleOnChange };
};

const SearchMovieContainer = () => {
  const { options, search, handleClickSearch, handleOnChange } =
    useSearchMovieContainer();
  return (
    <Wrapper>
      <AutoCompleteStyled
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        options={options}
      >
        <Input.Search
          onChange={handleOnChange}
          value={search}
          onSearch={handleClickSearch}
          size="large"
          placeholder="input here"
        />
      </AutoCompleteStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;
`;

export default SearchMovieContainer;
