import { createSelector } from "reselect";
import { RootState } from "../../app/redux/store";

const moviePopularSelector = (state: RootState) =>
  state.movie.moviesByCat.popular;
const movieUpcomingSelector = (state: RootState) =>
  state.movie.moviesByCat.upcoming;

export const movieDetailSelector = (state: RootState) =>
  state.movie.movieDetail;

export const getMovieByPopularResultSelector = createSelector(
  moviePopularSelector,
  (state) => state
);

export const getMovieByUpcomingResultSelector = createSelector(
  movieUpcomingSelector,
  (state) => state
);
