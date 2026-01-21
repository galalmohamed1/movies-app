import React from 'react'
import { useState } from "react";
import searchIcon from "../assets/Left Icon.svg";
import { useDispatch, useSelector } from 'react-redux';
import {setSearchQuery} from '../redux/slice/SearchSlice';
export default function SearchInput() {
    const [isFocused, setIsFocused] = useState(false);
    const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);  

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value)); 
  };
  return (
    <>
      <div className="search-wrapper">
        <div className="input-group position-relative">
          <div className="start-16 d-inline-block position-absolute top-18">
            <img
              className="mh-icon icon-search"
              src={searchIcon}
              alt="searchIcon"
              width={24}
              height={24}
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="inputt"
            placeholder={isFocused ? "eg. Galal": undefined}
            // defaultValue=""
            defaultValue={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <label htmlFor="search">Search movies or tv shows</label>
        </div>
      </div>
    </>
  )
}
