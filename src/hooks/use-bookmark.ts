export const useBookmark = () => {
  const handleAddBookmark = (id: string) => {
    const currentBookmark: any =
      localStorage.getItem("bookmark") ?? JSON.stringify([]);
    try {
      const bookmarkJson = JSON.parse(currentBookmark);

      const payload = new Set([...bookmarkJson, id]) as any;

      window.localStorage.setItem("bookmark", JSON.stringify([...payload]));
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveBookmark = (id: string) => {
    const currentBookmark: any =
      localStorage.getItem("bookmark") ?? JSON.stringify(new Set([]));

    try {
      const bookmarkJson = JSON.parse(currentBookmark);

      const payload = new Set([...bookmarkJson]).delete(id) as any;

      window.localStorage.setItem("bookmark", JSON.stringify([...payload]));
    } catch (e) {}
  };

  return {
    handleAddBookmark,
    handleRemoveBookmark,
  };
};
