import React, { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import apiall from "../apis/configAll";
import apimovie from "../apis/configMovies";
import apiTVshows from "../apis/configTvshow";
import Imag from './img';
import { useSelector } from "react-redux";


export default function SelectItem() {
  const [select, setSelect] = useState(`All`);
  const [data, setData] = useState([]);
  const searchQuery = useSelector((state) => state.search.query);

  const handelchange = (e) => {
    setSelect(e);
  };

  useEffect(() => {
    if (select === `All`) {
      apiall().then((d) => {
        setData(d.results);
      });
    } else if (select === `Movies`) {
      apimovie().then((d) => {
        setData(d.results);
      });
    } else if (select === `TV Shows`) {
      apiTVshows().then((d) => {
        setData(d.results);
      });
    }
  }, [select]);
  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="mt-80 p-2 rounded--3 bg-segmsnt d-flex w-368 gap-2 pointer">
        <div
          className={`px-8 py-2 left-0.5 rounded-3 ${select === `All` ? `bg-prim text-prime-50` : `text-gray-300`} `}
          onClick={() => handelchange(`All`)}
        >
          All
        </div>
        <div
          className={`px-8 py-2 rounded-3 ${select === `Movies` ? `bg-prim text-prime-50` : `text-gray-300`} `}
          onClick={() => handelchange(`Movies`)}
        >
          Movies
        </div>
        <div
          className={`px-4 py-2 rounded-3 ${select === `TV Shows` ? `bg-prim text-prime-50` : `text-gray-300`} `}
          onClick={() => handelchange(`TV Shows`)}
        >
          TV Shows
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h3 className="text-gray-400 fs-2 fw-bold">
          {select}{" "}
          <span className="fs-6">({data.length})</span>
        </h3>
      </div>
      <div className="row g-4">
        {filteredData.map((e) => (
          <MovieCard key={e.id} data={e} />
        ))}
      </div>
    </>
  );
}
