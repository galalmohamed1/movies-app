import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItem")
    ? JSON.parse(localStorage.getItem("wishlistItem"))
    : [],
  totalvalue: localStorage.getItem("wishlistTotal")  
    ? JSON.parse(localStorage.getItem("wishlistTotal"))
    : (localStorage.getItem("wishlistItem")
        ? JSON.parse(localStorage.getItem("wishlistItem")).length
        : 0),
};

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // ADD TO CART
    addtocart: (state, action) => {
      let existsItemIndex = state.wishlistItems?.findIndex(
        (item) => item.id === action.payload?.id,
      );
      if (existsItemIndex >= 0) {
        console.log("already save");
      } else {
        let buildwishlistItem = { ...action.payload };
        state.wishlistItems?.push(buildwishlistItem);
        localStorage.setItem(
          `wishlistItem`,
          JSON.stringify(state.wishlistItems),
        );
        state.totalvalue = state.wishlistItems.length;
        localStorage.setItem(`wishlistTotal`, JSON.stringify(state.totalvalue));
        console.log("succes add card");
        
      }
    },
    clearalldata: (state) => {
      state.wishlistItems = [];
      state.totalvalue = 0;
      console.log("succes add card");
    },
    removeitems: (state, action) => {
      console.log("succes remove card");
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.totalvalue = state.wishlistItems.length;
      localStorage.setItem(`wishlistItem`, JSON.stringify(state.wishlistItems));
      localStorage.setItem(`wishlistTotal`, JSON.stringify(state.totalvalue));
    },
  },
});
export const { addtocart, clearalldata, removeitems } = WishlistSlice.actions;

export default WishlistSlice.reducer;
