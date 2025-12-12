import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [
      { id: 1, title: "Avengers" },
      { id: 2, title: "Interstellar" },
    ],
    favorites: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    }
  }
});

export const { addToFavorite } = movieSlice.actions;
export default movieSlice.reducer;
