import { lazy, Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const IndexPage = lazy(() => import("./pages/index"));
const MovieDetail = lazy(() => import("./pages/movie-detail"));
const SearchPage = lazy(() => import("./pages/search"));

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <Suspense fallback={null}>
          <Router>
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/movie/:movieId" component={MovieDetail} />
              <Route path="/search" component={SearchPage} />
            </Switch>
          </Router>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
