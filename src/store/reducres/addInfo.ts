const initialState = {
  id: Math.floor(Math.random() * 99999999999999999),
  name: "",
  status: false,
  rented_by: "",
  received_date: "",
  rented_date: "",
};

let bookList = JSON.parse(localStorage.getItem("bookList") || "[]");

const addInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      const newBook = { ...state, ...action.payload };
      bookList = [...bookList, newBook];
      localStorage.setItem("bookList", JSON.stringify(bookList));
      return initialState;
   
    case "CLOSE":
      return initialState;
    default:
      return state;
  }
};

export default addInfoReducer;