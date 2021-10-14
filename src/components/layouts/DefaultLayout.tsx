import { Layout } from "antd";
import styled from "styled-components";
const { Header, Content, Footer } = Layout;

const ContentWrapper = styled.div`
  .content-fullwidth {
    min-height: 100vh;
    height: 100%;
  }
`;

const DefaultLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Header>Header</Header>
      <ContentWrapper>
        <Content className="content-fullwidth">{children}</Content>
      </ContentWrapper>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DefaultLayout;
