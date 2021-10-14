import { useParams } from "react-router";
import { useMovieDetailQuery } from "../../../services/react-query/query/movie";
import isEmpty from "lodash/isEmpty";
import { useSelector } from "react-redux";
import { movieDetailSelector } from "../selector";
import { Skeleton } from "antd";
import MovieDetailPrimary from "../components/MovieDetailPrimary";

interface MovieParamInteface {
  movieId: string;
}

const useMovieDetailContainer = () => {
  const { movieId } = useParams<MovieParamInteface>();
  const { isFetching, isSuccess } = useMovieDetailQuery({ id: movieId });

  const movieDetail = useSelector(movieDetailSelector);

  return { movieDetail, isSuccess, isFetching };
};

const MovieDetailContainer = () => {
  const { movieDetail, isSuccess, isFetching } = useMovieDetailContainer();

  if (isFetching) {
    return <Skeleton.Button active size="large" shape="square" />;
  } else if (!isSuccess && isEmpty(movieDetail))
    return <div>Not Found You Movie</div>;

  return (
    <MovieDetailPrimary
      backgroundImageUrl={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
      posterImageUrl={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
      categories={movieDetail.genres}
      title={movieDetail.title}
      description={movieDetail.overview}
    />
  );
};

export default MovieDetailContainer;
