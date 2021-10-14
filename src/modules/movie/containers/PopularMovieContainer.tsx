import { Typography } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../components/Container";
import { movieQueryHook } from "../../../services/react-query/query";
import MovieCard from "../components/MovieCard";
import { getMovieByPopularResultSelector } from "../selector";

const { usePopularMovieQuery } = movieQueryHook;

const usePopularMovieContainer = () => {
  const { isFetching: isPopularMovieFetching } = usePopularMovieQuery();
  const popularMovies = useSelector(getMovieByPopularResultSelector);

  return {
    popularMovies,
    isPopularMovieFetching,
  };
};

export const PopularMovieContainer = () => {
  const { popularMovies, isPopularMovieFetching } = usePopularMovieContainer();
  return (
    <Container>
      <Typography.Title level={2}>Popular</Typography.Title>

      <MovieCardWrapper>
        {popularMovies.results.map((movie) => {
          return (
            <MovieCard
              title={movie.title}
              imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              publishDate={movie.release_date}
            />
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


