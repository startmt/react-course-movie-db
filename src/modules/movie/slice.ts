import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PopularMovieListInterface,
  MovieResultInterface,
  UpcomingMovieListInterface,
  MovieDetailInterface,
} from "../../apis/query/interface";

export interface SetPopularMoviePayloadAction {
  data: PopularMovieListInterface;
}

export interface SetUpcomingMoviePayloadAction {
  data: UpcomingMovieListInterface;
}

export interface SetMovieDetailPayloadAction {
  data: MovieDetailInterface;
}

const initialState = {
  moviesByCat: {
    popular: {
      page: 0,
      results: [] as MovieResultInterface[],
      total_pages: 0,
      total_results: 0,
    },
    upcoming: {
      page: 0,
      results: [] as MovieResultInterface[],
      total_pages: 0,
      total_results: 0,
      dates: {
        maximum: "",
        minimum: "",
      },
    },
  },
  movieDetail: {} as MovieDetailInterface,
};

export const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopularMovie: (
      state,
      action: PayloadAction<SetPopularMoviePayloadAction>
    ) => {
      state.moviesByCat.popular = action.payload.data;
    },
    setUpcomingMovie: (
      state,
      action: PayloadAction<SetUpcomingMoviePayloadAction>
    ) => {
      state.moviesByCat.upcoming = action.payload.data;
    },

    setMovieDetail: (
      state,
      action: PayloadAction<SetMovieDetailPayloadAction>
    ) => {
      state.movieDetail = action.payload.data;
    },
  },
});

export const movieReducer = slice.reducer;

export const movieAction = slice.actions;
