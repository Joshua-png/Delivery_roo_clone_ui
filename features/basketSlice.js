import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const indexToRemove = state.items.findIndex(
        (item) => item._id === action.payload.id
      );

      const modifiedBasket = [...state.items];

      if (indexToRemove >= 0) {
        modifiedBasket.splice(indexToRemove, 1);
      } else {
        console.warn("Cannot remove the item selected");
      }

      state.items = modifiedBasket;
    },
    // removeFromBasket2: (state, action) => {
    //   const indexToRemove = state.items.findIndex(
    //     (item) => item._id === action.payload.id
    //   );

    //   if (indexToRemove >= 0) {
    //     state.items.splice(indexToRemove, 1);
    //   } else {
    //     console.warn("Cannot remove the item selected");
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors
// export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
