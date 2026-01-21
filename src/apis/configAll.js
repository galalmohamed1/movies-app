export const VITE_TMDB_TOKEN='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGM3YzNjMTEwZjY3MmVjODhmZmRlOTYwNTcyZTI4MCIsIm5iZiI6MTc2ODM4MTg4NS44NjMwMDAyLCJzdWIiOiI2OTY3NWRiZDQzMWViMGRjNTY2ODZkOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FhTHsRErNgSBlheAf3mGxqQeTjp0VqUoNbXQXxVLRyU'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: VITE_TMDB_TOKEN,
  }
};

const apiall = async () => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default apiall;

