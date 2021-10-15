import { Typography } from "antd";
import styled from "styled-components";

interface MovieSearchProps {
  posterImageUrl: string;
  title: string;
}

const MovieItemSearch: React.FC<MovieSearchProps> = (props) => {
  const { posterImageUrl, title } = props;
  return (
    <Wrapper>
      <img src={posterImageUrl} width={45} />

      <Typography.Title level={3}>{title}</Typography.Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 8;
  gap: 4px;
`;

export default MovieItemSearch;
