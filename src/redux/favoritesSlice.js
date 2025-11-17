import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const itemId = action.payload;
      const exists = state.items.includes(itemId);
      
      if (exists) {
        state.items = state.items.filter(id => id !== itemId);
      } else {
        state.items.push(itemId);
      }
      
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;