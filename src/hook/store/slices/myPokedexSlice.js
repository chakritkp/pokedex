import { createSlice } from "@reduxjs/toolkit";

const myPokedexSlice = createSlice({
  name: "mypokedex",
  initialState: {
    items: [],
  },
  reducers: {
    addCard: (state, action) => {
        state.items.push(action.payload);
    },
    removeCard: (state, action) => {
        const cardIdToRemove = action.payload;
        state.items = state.items.filter((card) => card.id !== cardIdToRemove);
      },
  },
  extraReducers: (builder) => {},
});

export const { addCard , removeCard } = myPokedexSlice.actions;
export const myPokedexSelector = (store) => store.myPokedex.items;
export default myPokedexSlice.reducer;
