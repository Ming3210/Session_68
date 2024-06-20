import { Book } from "../../models/Book";

const initialState: Book[] = JSON.parse(localStorage.getItem('bookList') || '[]');

const deleteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "DELETE":
      const updatedList = state.filter((book: Book) => book.id !== action.payload);
      localStorage.setItem('bookList', JSON.stringify(updatedList));
      return updatedList;
    default:
      return state;
  }
};

export default deleteReducer;