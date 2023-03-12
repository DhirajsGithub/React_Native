import { configureStore } from "@reduxjs/toolkit";

// import favoritesReducer from "./favorites";
// since it's default export we can import it with any name but I go with nae
import favoritesSlice from "./favorites";

export const store = configureStore({
  reducer: {
    // favorites slice
    favoriteMealsIds: favoritesSlice,
  },
});
