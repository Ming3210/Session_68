import { Book } from "../../models/Book";

const initialState = {
    id: Math.floor(Math.random() * 99999999999999999),
    name: "",
    status: false,
    rented_by: "",
    received_date: "",
    rented_date: "",
  };
  
  let bookList = JSON.parse(localStorage.getItem("bookList") || "[]");
  
  const editReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "OPEN_EDIT":
      return { isOpen: true, book: action.payload };
    case "CLOSE_EDIT":
      return { isOpen: false, book: null };
    case "EDIT_BOOK":
      let bookList = JSON.parse(localStorage.getItem("bookList") || "[]");
    
      localStorage.setItem("bookList", JSON.stringify(bookList));
      return { ...state, isOpen: false, book: null };
    default:
      return state;
    }
  };
  
  export default editReducer;