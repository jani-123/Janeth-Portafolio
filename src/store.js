import createStore from "redux-zero";

// let img = ["./src/img/uno.jpg", "./img/dos.jpg",
//   "./img/tres.jpg", "./img/cuatro.jpg",
//   "./img/cinco.jpg", "./img/seis.jpg",];
let dataText = ["Hola! Soy Janeth.", "Fronted-End jr.", "Me gusta la musica", "Hola! Soy Janeth."];
const initialState = {
  images: false,
  text: dataText,
  selectedIndex: 0
};

const store = createStore(initialState);

export default store;
