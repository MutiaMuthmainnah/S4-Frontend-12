// Membuat variable API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

// Membuat variable URL API: BASE_URL
const BASE_URL = "https://api.themoviedb.org/3";

// Membuat Variable Endpoints (object)
const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  // Tambahkan Endpoints lain
  NOWPLAYING : `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  TOPRATED : `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  DETAIL : ((id) => {return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`}),
  DETAILMOVIE : ((id) => {return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`}),
};

export default ENDPOINTS;