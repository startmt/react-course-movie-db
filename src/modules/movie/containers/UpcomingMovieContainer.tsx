import { Typography } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Container from "../../../components/Container";
import { useBookmark } from "../../../hooks/use-bookmark";
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
  const h = useHistory();

  const { isBookmark, handleToggleBookmark } = useBookmark();

  const handleClickMovieCard = (id: string) => {
    h.push(`/movie/${id}`);
  };
  return {
    upcomingMovies,
    isUpcomingMovieFetching,
    handleClickMovieCard,
    isBookmark,
    handleToggleBookmark,
  };
};

export const UpcomingMovieContainer = () => {
  const {
    upcomingMovies,
    isUpcomingMovieFetching,
    handleClickMovieCard,
    isBookmark,
    handleToggleBookmark,
  } = useUpcomingMovieContainer();
  return (
    <Container>
      <Typography.Title level={2}>Upcoming</Typography.Title>
      <MovieCardWrapper>
        {upcomingMovies.results.map((movie) => {
          return (
            <div>
              <MovieCard
                isBookmark={isBookmark(movie.id.toString())}
                onClickBookmark={() =>
                  handleToggleBookmark(movie.id.toString())
                }
                onClick={() => handleClickMovieCard(movie.id.toString())}
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
