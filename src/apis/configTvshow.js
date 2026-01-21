import { VITE_TMDB_TOKEN } from "./configAll";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: VITE_TMDB_TOKEN,
  }
};

const apiTVshows = async ()=>{
    try {
        const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        
    }
}

export default apiTVshows;