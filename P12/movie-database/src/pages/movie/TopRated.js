import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";


function TopRatedMovie() {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, [params.id]);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOPRATED);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movie" movies={movies} />
    </>
  );
}

export default TopRatedMovie;
