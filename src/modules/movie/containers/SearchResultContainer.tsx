import { Col, Row } from "antd";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import Container from "../../../components/Container";
import { useBookmark } from "../../../hooks/use-bookmark";
import { movieQueryHook } from "../../../services/react-query/query";
import MovieCard from "../components/MovieCard";

const { useSearchMoviesQuery } = movieQueryHook;

const useSearchResultContainer = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { data } = useSearchMoviesQuery({ search: query ?? "" });
  const h = useHistory();

  const { isBookmark, handleToggleBookmark } = useBookmark();

  const handleClickMovieCard = (id: string) => {
    h.push(`/movie/${id}`);
  };

  return { data, handleClickMovieCard, isBookmark, handleToggleBookmark };
};
const SearchResultContainer: React.FC = () => {
  const { data, handleClickMovieCard, isBookmark, handleToggleBookmark } =
    useSearchResultContainer();
  return (
    <Row gutter={[8, 8]}>
      {data?.data?.results.map((movie) => {
        return (
          <Col>
            <MovieCard
              isBookmark={isBookmark(movie.id.toString())}
              onClickBookmark={() => handleToggleBookmark(movie.id.toString())}
              title={movie.title}
              onClick={() => {
                handleClickMovieCard(movie.id.toString());
              }}
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              publishDate={movie.release_date}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default SearchResultContainer;
