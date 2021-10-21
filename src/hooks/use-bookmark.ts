import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieBookmark } from "../modules/movie/selector";
import { movieAction } from "../modules/movie/slice";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";

export const useBookmark = () => {
  const dispatch = useDispatch();

  const b: any = localStorage.getItem("bookmark") ?? JSON.stringify([]);

  useEffect(() => {
    try {
      const bookmarkJson = JSON.parse(b);
      dispatch(movieAction.initBookmark({ bookmark: bookmarkJson }));
    } catch (e) {}
  }, []);

  const bookmark = useSelector(movieBookmark);

  const isBookmark = useCallback(
    (id: string) => !isEmpty(bookmark.find((b) => b === id)),
    [JSON.stringify(bookmark)]
  );

  const handleToggleBookmark = (id: string) => {
    if (isBookmark(id)) {
      handleRemoveBookmark(id);
    } else {
      handleAddBookmark(id);
    }
  };

  const handleAddBookmark = (id: string) => {
    try {
      dispatch(movieAction.addMovieBookmark({ id }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [JSON.stringify(bookmark)]);

  const handleRemoveBookmark = (id: string) => {
    try {
      dispatch(movieAction.removeMovieBookmark({ id }));
    } catch (e) {}
  };

  return {
    bookmark,
    isBookmark,
    handleAddBookmark,
    handleRemoveBookmark,
    handleToggleBookmark,
  };
};
