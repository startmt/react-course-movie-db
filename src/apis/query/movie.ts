import { client } from "../client";
import {
  MovieDetailInterface,
  PopularMovieListInterface,
  UpcomingMovieListInterface,
} from "./interface";

export const getPopularMovieList = async () => {
  return (await client.get<PopularMovieListInterface>("/movie/popular")).data;
};

export const getUpcomingMovieList = async () => {
  return (await client.get<UpcomingMovieListInterface>("/movie/upcoming")).data;
};

export const getMovieDetailById = async (id: string) => {
  return (await client.get<MovieDetailInterface>(`/movie/${id}`)).data;
};
