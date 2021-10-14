import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_DB_ENDPOINT,
  params: {
    api_key: "1f9caa72a7dd5aaad9864d5067a73d5b",
  },
});
