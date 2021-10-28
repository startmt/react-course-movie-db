import {
  MovieDetailInterface,
  MovieResultInterface,
} from "../../../apis/query/interface";
import {
  getMovieByPopularResultSelector,
  getMovieByUpcomingResultSelector,
  movieBookmark,
  movieDetailSelector,
} from "../selector";

describe("Movie selector", () => {
  let storeData = {
    movie: {
      moviesByCat: {
        popular: {
          page: 1,
          results: [
            {
              adult: false,
              backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
              genre_ids: [28, 12, 14],
              id: 436969,
              original_language: "en",
              original_title: "The Suicide Squad",
              overview:
                "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
              popularity: 931.275,
              poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
              release_date: "2021-07-28",
              title: "The Suicide Squad",
              video: false,
              vote_average: 7.8,
              vote_count: 4532,
            },
          ],
          total_pages: 500,
          total_results: 10000,
        },
        upcoming: {
          page: 1,
          dates: {
            maximum: "max date",
            minimum: "min date",
          },
          results: [
            {
              adult: false,
              backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
              genre_ids: [28, 12, 14],
              id: 436969,
              original_language: "en",
              original_title: "The Suicide Squad",
              overview:
                "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
              popularity: 931.275,
              poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
              release_date: "2021-07-28",
              title: "The Suicide Squad",
              video: false,
              vote_average: 7.8,
              vote_count: 4532,
            },
          ],
          total_pages: 500,
          total_results: 10000,
        },
      },
      movieDetail: {
        adult: false,
        backdrop_path: "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
        belongs_to_collection: {
          id: 861415,
          name: "Free Guy Collection",
          poster_path: "/o9iYeSBx7lwWRDEt8QPWbKZZlJm.jpg",
          backdrop_path: "/9aDeWSxwfpOFjpw1XwRjLGnlcJm.jpg",
        },
        budget: 110000000,
        genres: [
          {
            id: 35,
            name: "Comedy",
          },
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
          {
            id: 878,
            name: "Science Fiction",
          },
        ],
        homepage: "https://www.20thcenturystudios.com/movies/free-guy",
        id: 550988,
        imdb_id: "tt6264654",
        original_language: "en",
        original_title: "Free Guy",
        overview:
          "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
        popularity: 2465.953,
        poster_path: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        production_companies: [
          {
            id: 27711,
            logo_path: "/3e294jszfE6cE8TOogmj0zNd6pL.png",
            name: "Berlanti Productions",
            origin_country: "US",
          },
          {
            id: 2575,
            logo_path: "/9YJrHYlcfHtwtulkFMAies3aFEl.png",
            name: "21 Laps Entertainment",
            origin_country: "US",
          },
          {
            id: 104228,
            logo_path: null,
            name: "Maximum Effort",
            origin_country: "US",
          },
          {
            id: 125000,
            logo_path: null,
            name: "Lit Entertainment Group",
            origin_country: "US",
          },
        ],
        production_countries: [
          {
            iso_3166_1: "US",
            name: "United States of America",
          },
        ],
        release_date: "2021-08-11",
        revenue: 324000000,
        runtime: 115,
        spoken_languages: [
          {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
          },
          {
            english_name: "Japanese",
            iso_639_1: "ja",
            name: "日本語",
          },
        ],
        status: "Released",
        tagline: "Life's too short to be a background character.",
        title: "Free Guy",
        video: false,
        vote_average: 7.8,
        vote_count: 3169,
      } as MovieDetailInterface,
      bookmark: ["1", "2", "3"] as string[],
    },
  };

  let initialEmptyState = {
    movie: {
      moviesByCat: {
        popular: {
          page: 0,
          results: [] as MovieResultInterface[],
          total_pages: 0,
          total_results: 0,
        },
        upcoming: {
          page: 0,
          results: [] as MovieResultInterface[],
          total_pages: 0,
          total_results: 0,
          dates: {
            maximum: "",
            minimum: "",
          },
        },
      },
      movieDetail: {} as MovieDetailInterface,
      bookmark: [] as string[],
    },
  };

  it("Should return popular movie", () => {
    expect(getMovieByPopularResultSelector(storeData)).toEqual({
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
          genre_ids: [28, 12, 14],
          id: 436969,
          original_language: "en",
          original_title: "The Suicide Squad",
          overview:
            "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
          popularity: 931.275,
          poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
          release_date: "2021-07-28",
          title: "The Suicide Squad",
          video: false,
          vote_average: 7.8,
          vote_count: 4532,
        },
      ],
      total_pages: 500,
      total_results: 10000,
    });
  });

  it("Should return empty popular movie", () => {
    expect(getMovieByPopularResultSelector(initialEmptyState)).toEqual({
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    });
  });

  it("Should return upcoming movie", () => {
    expect(getMovieByUpcomingResultSelector(storeData)).toEqual({
      page: 1,
      dates: {
        maximum: "max date",
        minimum: "min date",
      },
      results: [
        {
          adult: false,
          backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
          genre_ids: [28, 12, 14],
          id: 436969,
          original_language: "en",
          original_title: "The Suicide Squad",
          overview:
            "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
          popularity: 931.275,
          poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
          release_date: "2021-07-28",
          title: "The Suicide Squad",
          video: false,
          vote_average: 7.8,
          vote_count: 4532,
        },
      ],
      total_pages: 500,
      total_results: 10000,
    });
  });

  it("Should return empty upcoming movie", () => {
    expect(getMovieByUpcomingResultSelector(initialEmptyState)).toEqual({
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      dates: {
        maximum: "",
        minimum: "",
      },
    });
  });

  it("Should return movie bookmark", () => {
    expect(movieBookmark(storeData)).toEqual(["1", "2", "3"]);
  });

  it("Should return empty movie bookmark", () => {
    expect(movieBookmark(initialEmptyState)).toEqual([]);
  });

  it("Should return movie detail", () => {
    expect(movieDetailSelector(storeData)).toEqual({
      adult: false,
      backdrop_path: "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      belongs_to_collection: {
        id: 861415,
        name: "Free Guy Collection",
        poster_path: "/o9iYeSBx7lwWRDEt8QPWbKZZlJm.jpg",
        backdrop_path: "/9aDeWSxwfpOFjpw1XwRjLGnlcJm.jpg",
      },
      budget: 110000000,
      genres: [
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
      homepage: "https://www.20thcenturystudios.com/movies/free-guy",
      id: 550988,
      imdb_id: "tt6264654",
      original_language: "en",
      original_title: "Free Guy",
      overview:
        "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
      popularity: 2465.953,
      poster_path: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
      production_companies: [
        {
          id: 27711,
          logo_path: "/3e294jszfE6cE8TOogmj0zNd6pL.png",
          name: "Berlanti Productions",
          origin_country: "US",
        },
        {
          id: 2575,
          logo_path: "/9YJrHYlcfHtwtulkFMAies3aFEl.png",
          name: "21 Laps Entertainment",
          origin_country: "US",
        },
        {
          id: 104228,
          logo_path: null,
          name: "Maximum Effort",
          origin_country: "US",
        },
        {
          id: 125000,
          logo_path: null,
          name: "Lit Entertainment Group",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "2021-08-11",
      revenue: 324000000,
      runtime: 115,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
        {
          english_name: "Japanese",
          iso_639_1: "ja",
          name: "日本語",
        },
      ],
      status: "Released",
      tagline: "Life's too short to be a background character.",
      title: "Free Guy",
      video: false,
      vote_average: 7.8,
      vote_count: 3169,
    });
  });

  it("Should return empty movie detail", () => {
    expect(movieDetailSelector(initialEmptyState)).toEqual({});
  });
});
