// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     myPokedex: JSON.parse(localStorage.getItem("pokemonList")) || [],
// }

// export const myPokedexSlice = createSlice({
//     name: "mypokedex",
//     initialState,
//     reducers: {
//         addCard: (state, action) => {
//             const newCard = action.payload;
      
//             const savedPokemonList =
//               JSON.parse(localStorage.getItem("pokemonList")) || [];
//             savedPokemonList.push(newCard);

//             localStorage.setItem("pokemonList", JSON.stringify(savedPokemonList));
      
//             state.myPokedex = [...savedPokemonList];
//           },
//     }
// })

// export const { addCard } = myPokedexSlice.actions
// export const myPokedexSelector = (state) => state.myPokedex.myPokedex
// export default myPokedexSlice.reducer;