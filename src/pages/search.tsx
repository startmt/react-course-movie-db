import { PageHeader, Typography } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Container from "../components/Container";
import SearchResultContainer from "../modules/movie/containers/SearchResultContainer";

const SearchPage = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default SearchPage;
