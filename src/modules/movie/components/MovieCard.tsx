import { Card } from "antd";
import React from "react";

import styled from "styled-components";

const { Meta } = Card;

interface MovieCardProps {
  imageUrl: string;
  title: string;
  publishDate: string;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { imageUrl, title, publishDate } = props;
  return (
    <CardWrapper hoverable cover={<CardImage src={imageUrl} alt={title} />}>
      <Meta title={title} description={publishDate} />
    </CardWrapper>
  );
};

export default MovieCard;

const CardWrapper = styled(Card)`
  width: 200px;
`;

const CardImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;
