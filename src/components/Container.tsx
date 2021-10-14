import styled from "styled-components";

const ContainerStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

const Container: React.FC = (props) => {
  const { children } = props;
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
