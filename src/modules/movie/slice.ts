import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PopularMovieListInterface,
  MovieResultInterface,
  UpcomingMovieListInterface,
  MovieDetailInterface,
} from "../../apis/query/interface";
import isEqual from "lodash/isEqual";

export interface SetPopularMoviePayloadAction {
  data: PopularMovieListInterface;
}

export interface SetUpcomingMoviePayloadAction {
  data: UpcomingMovieListInterface;
}

export interface SetMovieDetailPayloadAction {
  data: MovieDetailInterface;
}

export interface AddMovieBookmarkPayloadAction {
  id: string;
}

export interface RemoveMovieBookmarkPayloadAction {
  id: string;
}

export interface InitMovieBookmarkPayloadAction {
  bookmark: string[];
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
  bookmark: [] as string[],
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
    addMovieBookmark: (
      state,
      action: PayloadAction<AddMovieBookmarkPayloadAction>
    ) => {
      const payload = new Set([...state.bookmark, action.payload.id]) as any;
      state.bookmark = [...payload];
    },
    removeMovieBookmark: (
      state,
      action: PayloadAction<RemoveMovieBookmarkPayloadAction>
    ) => {
      state.bookmark = state.bookmark.filter(
        (b) => !isEqual(b, action.payload.id)
      );
    },
    initBookmark: (
      state,
      action: PayloadAction<InitMovieBookmarkPayloadAction>
    ) => {
      state.bookmark = action.payload.bookmark;
    },
  },
});

export const movieReducer = slice.reducer;

export const movieAction = slice.actions;
