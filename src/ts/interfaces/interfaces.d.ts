export interface IMovie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IRowMovies {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IRowAxiosData {
  page: number,
  results: IRowMovies[],
  total_pages: number,
  total_results: number
}

export interface IResults {
  total_results: number;
  total_pages: number;
  results: IMovie[];
  page: number;
}

export interface Irequest {
  fetchNetflixOriginals: string
  fetchTrending: string,
	fetchTopRated: string,
	fetchActionMovies: string,
	fetchComedyMovies: string,
	fetchHorrorMovies: string,
	fetchRomanceMovies: string,
	fetchDocumentaries: string,
  [key: string]: string
}

export interface ITrailerProps {
  videoId: string;
  changeVideo: (obj: IVideo) => void
}

export interface IRowProps {
  fetchUrl: string;
  title: string;
}

export interface IVideo {
  id: string;
  playStatus: boolean;
}
