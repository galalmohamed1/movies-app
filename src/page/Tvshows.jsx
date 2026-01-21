import React, { useEffect, useState } from "react";
import SearchInput from "./../components/SearchInput";
import apiTVshows from "../apis/configTvshow";
import MovieCard from "./../components/MovieCard";
import Footer from './../components/Footer';

export default function Tvshows() {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiTVshows().then((res) => {
      setData(res.results);
    });
  });
  return (
    <>
      <div className="w-588">
        <p className="p-color m-0">Movie App</p>
        <h1 className="color-h1 mb-3">TV Shows</h1>
      </div>
      <SearchInput />
      <p className="mt-3">{data.length} items</p>
      <div className="row g-4 mt-2 ">
        {data.map((e) => (
          <MovieCard key={e.id} data={e} />
        ))}
      </div>
      <Footer/>
    </>
  );
}
