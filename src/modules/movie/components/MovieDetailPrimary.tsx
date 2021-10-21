import { Button, Progress, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { MovieDetailInterface } from "../../../apis/query/interface";
import { CategoryTag } from "../../../components/CategoryTag";
import Container from "../../../components/Container";
import { BookOutlined } from "@ant-design/icons";
interface MovieDetailPrimaryProps {
  backgroundImageUrl: string;
  posterImageUrl: string;
  title: string;
  categories: MovieDetailInterface["genres"];
  description: string;
  handleBookmark: () => void;
  percent: number;
  isBookmark: boolean;
}
const MovieDetailPrimary: React.FC<MovieDetailPrimaryProps> = (props) => {
  const {
    backgroundImageUrl,
    posterImageUrl,
    title,
    categories,
    description,
    percent,
    handleBookmark,
    isBookmark,
  } = props;
  return (
    <Wrapper background={backgroundImageUrl}>
      <BackgroundOpacity>
        <Container>
          <ContentWrapper>
            <img className="poster-image" src={posterImageUrl} />
            <RightContent>
              <Typography.Title level={2}>{title}</Typography.Title>
              <div className="submenu-wrapper">
                <Progress width={40} type="circle" percent={percent} />
                <Button
                  className="button-icon-bookmark"
                  onClick={handleBookmark}
                  type={isBookmark ? "primary" : "default"}
                  shape="circle"
                  icon={<BookOutlined />}
                />
              </div>

              <div className="category-wrapper">
                {categories.map((cate) => (
                  <CategoryTag type={cate.id}>{cate.name}</CategoryTag>
                ))}
              </div>
              <div className="overview-wrapper">
                <Typography.Title level={3}>Overview</Typography.Title>
                <Typography.Text className="description-text">
                  {description}
                </Typography.Text>
              </div>
            </RightContent>
          </ContentWrapper>
        </Container>
      </BackgroundOpacity>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
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

const BackgroundOpacity = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  .submenu-wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
    span {
      color: #fff;
    }
    .button-icon-bookmark {
      span {
        color: unset;
      }
    }
  }

  .category-wrapper {
    display: flex;
    margin-top: 12px;
  }
  h2,
  h3 {
    color: #fff;
  }
  .description-text {
    color: #fff;
  }
  .overview-wrapper {
    margin-top: 16px;
  }
`;

export default MovieDetailPrimary;
