import { Button, Layout } from "antd";
import styled from "styled-components";
import { BookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const ContentWrapper = styled.div`
  .content-fullwidth {
    min-height: 100vh;
    height: 100%;
  }
`;

const HeaderWrapper = styled(Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DefaultLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <Layout>
      <HeaderWrapper>
        <Link to="/bookmark">
          <Button>
            <BookOutlined />
          </Button>
        </Link>
      </HeaderWrapper>
      <ContentWrapper>
        <Content className="content-fullwidth">{children}</Content>
      </ContentWrapper>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DefaultLayout;
