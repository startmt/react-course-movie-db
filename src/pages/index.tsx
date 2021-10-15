import { Card } from "antd";
import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { PopularMovieContainer } from "../modules/movie/containers/PopularMovieContainer";
import SearchMovieContainer from "../modules/movie/containers/SearchMovieContainer";
import { UpcomingMovieContainer } from "../modules/movie/containers/UpcomingMovieContainer";

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <SearchWrapper>
          <SearchMovieContainer />
        </SearchWrapper>
      </Container>
      <CategoryWrapper>
        <PopularMovieContainer />
      </CategoryWrapper>
      <CategoryWrapper>
        <UpcomingMovieContainer />
      </CategoryWrapper>
    </DefaultLayout>
  );
};

export default IndexPage;

const SearchWrapper = styled.div`
  margin-top: 12px;
`;

const CategoryWrapper = styled.div`
  margin-top: 24px;
`;
