import { Typography } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../components/Container";
import { movieQueryHook } from "../../../services/react-query/query";
import MovieCard from "../components/MovieCard";
import { getMovieByPopularResultSelector } from "../selector";
import { useHistory } from "react-router";
import { useBookmark } from "../../../hooks/use-bookmark";

const { usePopularMovieQuery } = movieQueryHook;

const usePopularMovieContainer = () => {
  const { isFetching: isPopularMovieFetching } = usePopularMovieQuery();
  const popularMovies = useSelector(getMovieByPopularResultSelector);
  const h = useHistory();

  const handleClickMovieCard = (id: string) => {
    h.push(`/movie/${id}`);
  };

  const { isBookmark, handleToggleBookmark } = useBookmark();

  return {
    popularMovies,
    isPopularMovieFetching,
    handleClickMovieCard,
    isBookmark,
    handleToggleBookmark,
  };
};

export const PopularMovieContainer = () => {
  const {
    popularMovies,
    isPopularMovieFetching,
    handleClickMovieCard,
    isBookmark,
    handleToggleBookmark,
  } = usePopularMovieContainer();
  return (
    <Container>
      <Typography.Title level={2}>Popular</Typography.Title>

      <MovieCardWrapper>
        {popularMovies.results.map((movie) => {
          return (
            <div>
              <MovieCard
                isBookmark={isBookmark(movie.id.toString())}
                onClickBookmark={() =>
                  handleToggleBookmark(movie.id.toString())
                }
                onClick={() => {
                  handleClickMovieCard(movie.id.toString());
                }}
                title={movie.title}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                publishDate={movie.release_date}
              />
            </div>
          );
        })}
      </MovieCardWrapper>
    </Container>
  );
};

const MovieCardWrapper = styled.div`
  display: flex;
  overflow: scroll;
  gap: 8px;
`;
