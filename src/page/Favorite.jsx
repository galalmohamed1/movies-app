import React from 'react'
import { useSelector } from 'react-redux'
import SearchInput from './../components/SearchInput';
import MovieCard from './../components/MovieCard';
import Footer from './../components/Footer';

export default function Favorite() {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  return (
    <>
      <div className='mx-auto'>
        <div className="w-588 ">
          <p className="p-color m-0">Movie App</p>
          <h1 className="color-h1 mb-3">Favorite</h1>
        </div>
        <SearchInput />
        <p className="mt-3">{wishlistItems.length}  items</p>
        <div className="row g-4 mt-2 ">
          {wishlistItems.map((item) => (
            <MovieCard key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}
