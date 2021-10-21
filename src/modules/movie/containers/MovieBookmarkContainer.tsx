import { Col, Row, Skeleton } from "antd";
import React from "react";
import styled from "styled-components";
import { useBookmark } from "../../../hooks/use-bookmark";
import { movieQueryHook } from "../../../services/react-query/query";
import MovieCard from "../components/MovieCard";
const { useMovieDetailQuery } = movieQueryHook;
const useMovieBookmarkContainer = () => {
  const { bookmark } = useBookmark();

  return {
    bookmark,
  };
};

const MovieBookmarkContainer: React.FC = () => {
  const { bookmark } = useMovieBookmarkContainer();
  return (
    <Row gutter={[8, 8]}>
      {bookmark.map((id) => {
        return (
          <Col xs={12} md={4}>
            <MovieDetailContainer id={id} />
          </Col>
        );
      })}
    </Row>
  );
};

interface UseMovieDetailContainerProps {
  id: string;
}
const useMovieDetailContainer = (props: UseMovieDetailContainerProps) => {
  const { id } = props;
  const { isBookmark, handleToggleBookmark } = useBookmark();

  const { isFetching, isError, isSuccess, error, data } = useMovieDetailQuery({
    id,
  });
  return {
    isFetching,
    isError,
    isSuccess,
    error,
    data,
    isBookmark,
    handleToggleBookmark,
  };
};

interface MovieDetailContainerProps {
  id: string;
}

const MovieCardStyled = styled(MovieCard)`
  width: 100%;
  img {
    width: 100%;
  }
`;

const MovieDetailContainer: React.FC<MovieDetailContainerProps> = (props) => {
  const { id } = props;

  const { data, isFetching, isBookmark, handleToggleBookmark } =
    useMovieDetailContainer({
      id,
    });
  if (isFetching) {
    return <Skeleton active />;
  }
  return (
    <MovieCardStyled
      isBookmark={isBookmark(id)}
      onClickBookmark={() => handleToggleBookmark(id)}
      onClick={() => {}}
      imageUrl={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
      title={data?.title ?? ""}
      publishDate={data?.release_date ?? ""}
    />
  );
};

export default React.memo(MovieBookmarkContainer);
