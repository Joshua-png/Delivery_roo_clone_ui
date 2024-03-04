import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    _id: null,
    image: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    longitude: null,
    latitude: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = { ...state.restaurant, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
