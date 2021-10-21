import { BookOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";

import styled from "styled-components";

const { Meta } = Card;

interface MovieCardProps {
  imageUrl: string;
  title: string;
  publishDate: string;
  className?: string;
  onClick: () => void;
  onClickBookmark: () => void;
  isBookmark: boolean;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const {
    imageUrl,
    title,
    publishDate,
    className,
    isBookmark,
    onClick,
    onClickBookmark,
  } = props;

  return (
    <CardWrapper
      className={className ?? ""}
      hoverable
      cover={
        <>
          <ButtonBookmark
            onClick={onClickBookmark}
            type={isBookmark ? "primary" : "default"}
            shape="round"
          >
            <BookOutlined />
          </ButtonBookmark>
          <CardImage src={imageUrl} alt={title} />
        </>
      }
    >
      <Meta
        title={<div onClick={onClick}>{title}</div>}
        description={publishDate}
      />
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

const ButtonBookmark = styled(Button)`
  position: absolute;
  width: 24px;
  right: 8px;
  top: 8px;
  svg {
    margin-left: -6px;
  }
`;
