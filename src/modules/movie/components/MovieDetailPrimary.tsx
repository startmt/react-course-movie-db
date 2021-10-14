import { Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { MovieDetailInterface } from "../../../apis/query/interface";
import { CategoryTag } from "../../../components/CategoryTag";
import Container from "../../../components/Container";

interface MovieDetailPrimaryProps {
  backgroundImageUrl: string;
  posterImageUrl: string;
  title: string;
  categories: MovieDetailInterface["genres"];
  description: string;
}
const MovieDetailPrimary: React.FC<MovieDetailPrimaryProps> = (props) => {
  const { backgroundImageUrl, posterImageUrl, title, categories, description } =
    props;
  return (
    <Wrapper background={backgroundImageUrl}>
      <Container>
        <ContentWrapper>
          <img className="poster-image" src={posterImageUrl} />
          <RightContent>
            <Typography.Title level={3}>{title}</Typography.Title>
            <div className="category-wrapper">
              {categories.map((cate) => (
                <CategoryTag type={cate.id}>{cate.name}</CategoryTag>
              ))}
            </div>
          </RightContent>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  /* background-image: url(${(props) => props.background}); */
  background-color: #f2f2f2;
  background-size: cover;
  min-height: 300px;
  width: 100%;
  background-position: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 24px;

  .poster-image {
    max-width: 250px;
    width: 100%;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  .category-wrapper {
    display: flex;
  }
`;

export default MovieDetailPrimary;
