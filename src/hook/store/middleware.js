// export const localStorageMiddleware = (store) => (next) => (action) => {
//     const result = next(action);
  
//     localStorage.setItem("myPokedex", JSON.stringify(store.getState().myPokedex));
  
//     return result;
//   };