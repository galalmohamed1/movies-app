import React, { useEffect } from "react";
import StarIcon from "../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaeCounter } from "../redux/slice/FavoriteSlice";
import { addtocart, removeitems } from "../redux/slice/wishlistSlice";
import { useNavigate } from "react-router";
import { setSelectedMovie } from "../redux/slice/selectdata";
import imgloading from "../img/Frame17.png";

export default function MovieCard({ data }) {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const fav = wishlistItems.some((item) => item.id === data.id);
  const dispatch = useDispatch();
  const addfavcard = (pordect) => {
    dispatch(addtocart(pordect))
  }
  const removefavcard = (pordect) => {
    dispatch(removeitems(pordect))
  }
  useEffect(() => {
    localStorage.setItem(`fav_${data.id}`, JSON.stringify(fav));
  }, [fav, data.id]);
  const navigate = useNavigate();
  const handelshowdetails = (id) => {
    dispatch(setSelectedMovie(data));
    navigate(`/movie-details/${id}`);
  }
  return (
    <>
      <div className="col-lg-3 col-md-4 col-6">
        {!data && <img
                
                src={data?.poster_path
                  ? `https://image.tmdb.org/t/p/w780${data.poster_path}`
                  : imgloading
                }
                alt="Poster"
                className="card-img-top"
              />}
        {data && (
          <div className="rounded-4 cardd border-0 shadow-lg h-100 movie-card">
            <div className="position-relative card-img-container rounded--3 overflow-hidden"
              onClick={() => handelshowdetails(data.id)}>
              <img
                
                src={`https://image.tmdb.org/t/p/w780${data.poster_path}`
                }
                alt="Poster"
                className="card-img-top"
              />
              <div className="position-absolute top-0 start-0 m-3">
                <div
                  className="d-flex align-items-center gap-1 fw-semibold px-3 py-1 rounded-pill"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#ffc107",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <img src={StarIcon} alt="StarIcon" />
                  <span>{data.vote_average.toString().substring(0, 3)}</span>
                </div>
              </div>
              <div
                className="position-absolute top-0 end-10 m-3 fav"
                onClick={(event) => {
                  event.stopPropagation();
                  if (!fav) {
                    addfavcard(data);
                  } else {
                    removefavcard(data);
                  }
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill={fav ? "#FF0000" : "transparent"}
                    stroke="red"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
            <div className="p-4 d-flex justify-content-between">
              <h2 className="text-white h5 fw-bold text-truncate">
                {data.title ? data.title : data.name}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
