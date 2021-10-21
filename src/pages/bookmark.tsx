import { Typography } from "antd";
import React from "react";
import Container from "../components/Container";
import DefaultLayout from "../components/layouts/DefaultLayout";
import MovieBookmarkContainer from "../modules/movie/containers/MovieBookmarkContainer";

const BookmarkPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <Typography.Title>Bookmark</Typography.Title>
        <MovieBookmarkContainer />
      </Container>
    </DefaultLayout>
  );
};

export default BookmarkPage;
