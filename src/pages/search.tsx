import { PageHeader, Typography } from "antd";
import { useHistory } from "react-router";
import Container from "../components/Container";
import SearchResultContainer from "../modules/movie/containers/SearchResultContainer";

const SearchPage = () => {
  const h = useHistory();
  return (
    <Container>
      <PageHeader onBack={() => h.goBack()} title="Back" />
      <Typography.Title>Search Result</Typography.Title>
      <SearchResultContainer />
    </Container>
  );
};

export default SearchPage;
