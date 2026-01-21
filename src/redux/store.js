import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/SearchSlice";
import WishlistSlice from "./slice/wishlistSlice";
import selectedMovieSlice from "./slice/selectdata";
export default configureStore({
  reducer: {
    search: SearchSlice,
    wishlist: WishlistSlice,
    selectedMovie: selectedMovieSlice,
  },
});
