export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "17b91188a0eff4c90437ec7191f712fb";
const tmdDomain = `https://api.themoviedb.org/3/movie`;
const tmbSearch = `https://api.themoviedb.org/3/search`;
export const tmbAPI = {
  //https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
  getMovieList: (type, page = 1) =>
    `${tmdDomain}/${type}?api_key=${apiKey}&${page}`,
  getMovieDetail: (movieId) =>
    `${tmdDomain}/${movieId}/similar?api_key=${apiKey}`,
  getMovieInfo: (movieId, type) =>
    `${tmdDomain}/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmbSearch}/movie?api_key=${apiKey}&query=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
