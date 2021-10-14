import { Typography } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../../components/Container";
import { movieQueryHook } from "../../../services/react-query/query";
import MovieCard from "../components/MovieCard";
import {
  getMovieByPopularResultSelector,
  getMovieByUpcomingResultSelector,
} from "../selector";

const { useUpcomingMovieQuery } = movieQueryHook;

const useUpcomingMovieContainer = () => {
  const { isFetching: isUpcomingMovieFetching } = useUpcomingMovieQuery();
  const upcomingMovies = useSelector(getMovieByUpcomingResultSelector);

  return {
    upcomingMovies,
    isUpcomingMovieFetching,
  };
};

export const UpcomingMovieContainer = () => {
  const { upcomingMovies, isUpcomingMovieFetching } =
    useUpcomingMovieContainer();
  return (
    <Container>
      <Typography.Title level={2}>Upcoming</Typography.Title>
      <MovieCardWrapper>
        {upcomingMovies.results.map((movie) => {
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
