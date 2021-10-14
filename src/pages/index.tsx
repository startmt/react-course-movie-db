import { Card } from "antd";
import React from "react";
import styled from "styled-components";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { PopularMovieContainer } from "../modules/movie/containers/PopularMovieContainer";
import { UpcomingMovieContainer } from "../modules/movie/containers/UpcomingMovieContainer";

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout>
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

const CategoryWrapper = styled.div`
  margin-top: 24px;
`;
