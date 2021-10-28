// import {
//   PopularMovieListInterface,
//   UpcomingMovieListInterface,
// } from "../../../apis/query/interface";
// import { movieAction, movieReducer } from "../slice";

import {
  MovieDetailInterface,
  MovieResultInterface,
  PopularMovieListInterface,
  UpcomingMovieListInterface,
} from "../../../apis/query/interface";
import {
  movieAction,
  movieReducer,
  SetMovieDetailPayloadAction,
} from "../slice";

test("Should return Initial store", () => {
  const mockData = movieReducer(undefined, { type: "@@INIT" });

  const expectData = {
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
  };

  expect(mockData).toEqual(expectData);
});

test("Should set Popular movie", () => {
  const expectData: PopularMovieListInterface = {
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
  };

  const mockData = movieReducer(
    undefined,
    movieAction.setPopularMovie({
      data: {
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
    })
  );

  expect(mockData.moviesByCat.popular).toEqual(expectData);
});

test("Should set Upcoming movie", () => {
  const expectData: UpcomingMovieListInterface = {
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
  };

  const mockData = movieReducer(
    undefined,
    movieAction.setUpcomingMovie({
      data: {
        dates: {
          maximum: "max date",
          minimum: "min date",
        },
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
    })
  );

  expect(mockData.moviesByCat.upcoming).toEqual(expectData);
});

test("Should set Movie detail", () => {
  const expectData: SetMovieDetailPayloadAction = {
    adult: false,
    backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
    belongs_to_collection: {
      id: 558216,
      name: "Venom Collection",
      poster_path: "/670x9sf0Ru8y6ezBggmYudx61yB.jpg",
      backdrop_path: "/rhLspFB1B8ZCkWEHFYmc3NKagzq.jpg",
    },
    budget: 110000000,
    genres: [
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 28,
        name: "Action",
      },
    ],
    homepage: "https://www.venom.movie",
    id: 580489,
    imdb_id: "tt7097896",
    original_language: "en",
    original_title: "Venom: Let There Be Carnage",
    overview:
      "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    popularity: 6508.46,
    poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    production_companies: [
      {
        id: 7505,
        logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
        name: "Marvel Entertainment",
        origin_country: "US",
      },
      {
        id: 84041,
        logo_path: "/XmHMPGzdI5c4WGX1YlxU4s2v7T.png",
        name: "Pascal Pictures",
        origin_country: "US",
      },
      {
        id: 5,
        logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
        name: "Columbia Pictures",
        origin_country: "US",
      },
      {
        id: 34,
        logo_path: "/GagSvqWlyPdkFHMfQ3pNq6ix9P.png",
        name: "Sony Pictures",
        origin_country: "US",
      },
      {
        id: 81620,
        logo_path: "/gNp4dfuBOXmVWdGKb63NfbFNbFi.png",
        name: "Tencent Pictures",
        origin_country: "CN",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "CN",
        name: "China",
      },
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2021-09-30",
    revenue: 352000000,
    runtime: 97,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "",
    title: "Venom: Let There Be Carnage",
    video: false,
    vote_average: 6.9,
    vote_count: 1212,
  };

  const mockData = movieReducer(
    undefined,
    movieAction.setMovieDetail({
      data: {
        adult: false,
        backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
        belongs_to_collection: {
          id: 558216,
          name: "Venom Collection",
          poster_path: "/670x9sf0Ru8y6ezBggmYudx61yB.jpg",
          backdrop_path: "/rhLspFB1B8ZCkWEHFYmc3NKagzq.jpg",
        },
        budget: 110000000,
        genres: [
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 28,
            name: "Action",
          },
        ],
        homepage: "https://www.venom.movie",
        id: 580489,
        imdb_id: "tt7097896",
        original_language: "en",
        original_title: "Venom: Let There Be Carnage",
        overview:
          "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        popularity: 6508.46,
        poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        production_companies: [
          {
            id: 7505,
            logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
            name: "Marvel Entertainment",
            origin_country: "US",
          },
          {
            id: 84041,
            logo_path: "/XmHMPGzdI5c4WGX1YlxU4s2v7T.png",
            name: "Pascal Pictures",
            origin_country: "US",
          },
          {
            id: 5,
            logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            name: "Columbia Pictures",
            origin_country: "US",
          },
          {
            id: 34,
            logo_path: "/GagSvqWlyPdkFHMfQ3pNq6ix9P.png",
            name: "Sony Pictures",
            origin_country: "US",
          },
          {
            id: 81620,
            logo_path: "/gNp4dfuBOXmVWdGKb63NfbFNbFi.png",
            name: "Tencent Pictures",
            origin_country: "CN",
          },
        ],
        production_countries: [
          {
            iso_3166_1: "CN",
            name: "China",
          },
          {
            iso_3166_1: "US",
            name: "United States of America",
          },
        ],
        release_date: "2021-09-30",
        revenue: 352000000,
        runtime: 97,
        spoken_languages: [
          {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
          },
        ],
        status: "Released",
        tagline: "",
        title: "Venom: Let There Be Carnage",
        video: false,
        vote_average: 6.9,
        vote_count: 1212,
      },
    })
  );

  expect(mockData.movieDetail).toEqual(expectData);
});

test("Should add movie bookmark in bookmark list", () => {
  const mockData = movieReducer(
    undefined,
    movieAction.addMovieBookmark({ id: "1" })
  );
  const expectData = ["1"];

  expect(mockData.bookmark).toEqual(expectData);
});

test("Should connot add Repeat movie bookmark in bookmark list", () => {
  const mockData1 = movieReducer(
    undefined,
    movieAction.addMovieBookmark({ id: "1" })
  );
  const mockData2 = movieReducer(
    mockData1,
    movieAction.addMovieBookmark({ id: "1" })
  );
  const expectData = ["1"];

  expect(mockData2.bookmark).toEqual(expectData);
});

test("Should add more time movie bookmark in bookmark list", () => {
  const mockData1 = movieReducer(
    undefined,
    movieAction.addMovieBookmark({ id: "1" })
  );
  const mockData2 = movieReducer(
    mockData1,
    movieAction.addMovieBookmark({ id: "2" })
  );
  const expectData = ["1", "2"];

  expect(mockData2.bookmark).toEqual(expectData);
});

test("Should remove movie bookmark in bookmark list", () => {
  const initialStore = {
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
    bookmark: ["1", "2", "3"] as string[],
  };

  const mockData = movieReducer(
    initialStore,
    movieAction.removeMovieBookmark({ id: "1" })
  );
  const expectData = ["2", "3"];

  expect(mockData.bookmark).toEqual(expectData);
});

test("Should remove movie bookmark not in bookmark list", () => {
  const initialStore = {
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
    bookmark: ["1", "2", "3"] as string[],
  };

  const mockData = movieReducer(
    initialStore,
    movieAction.removeMovieBookmark({ id: "5" })
  );
  const expectData = ["1", "2", "3"];

  expect(mockData.bookmark).toEqual(expectData);
});

test("Should init Bookmark", () => {
  const mockData = movieReducer(
    undefined,
    movieAction.initBookmark({ bookmark: ["2"] })
  );

  const expectData = ["2"];

  expect(mockData.bookmark).toEqual(expectData);
});
