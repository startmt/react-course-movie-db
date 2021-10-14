import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { movieQuery } from "../../../apis/query";
import { movieAction } from "../../../modules/movie/slice";
import { QueryName } from "./query-name";

export const usePopularMovieQuery = () => {
  const dispatch = useDispatch();

  const { isFetching, isError, error } = useQuery(
    QueryName.QUERY_POPULAR_MOVIE_LIST,
    movieQuery.getPopularMovieList,
    {
      onSuccess: (movies) => {
        const payload = {
          data: movies,
        };
        dispatch(movieAction.setPopularMovie(payload));
      },
    }
  );

  return {
    isFetching,
    isError,
    error,
  };
};

export const useUpcomingMovieQuery = () => {
  const dispatch = useDispatch();

  const { isFetching, isError, error } = useQuery(
    QueryName.QUERY_UPCOMING_MOVIE_LIST,
    movieQuery.getUpcomingMovieList,
    {
      onSuccess: (movies) => {
        const payload = {
          data: movies,
        };
        dispatch(movieAction.setUpcomingMovie(payload));
      },
    }
  );

  return {
    isFetching,
    isError,
    error,
  };
};

interface UseMovieDetailQueryProps {
  id: string;
}

export const useMovieDetailQuery = (props: UseMovieDetailQueryProps) => {
  const { id } = props;

  const dispatch = useDispatch();

  const { isFetching, isError, error, isSuccess } = useQuery(
    [QueryName.QUERY_MOVIE_DETAIL, id],
    async () => movieQuery.getMovieDetailById(id),
    {
      onSuccess: (movie) => {
        const payload = {
          data: movie,
        };
        dispatch(movieAction.setMovieDetail(payload));
      },
    }
  );

  return {
    isFetching,
    isError,
    isSuccess,
    error,
  };
};
