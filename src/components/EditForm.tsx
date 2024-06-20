import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "../models/Book";

export default function AddForm() {
  const dispatch = useDispatch();
  const book = useSelector((state: any) => state.editReducer.book);

  const [formState, setFormState] = useState(book);

  useEffect(() => {
    if (book) {
      setFormState(book);
    }
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "EDIT_BOOK", payload: formState });
    dispatch({ type: "CLOSE_EDIT" });
    dispatch({ type: "RENDER" });
  };

  if (!formState) return null;

  return (
    <div className="bg-black bg-opacity-50 w-[100%] h-[100%] fixed flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Sửa thông tin mượn sách</h2>
          <p
            onClick={() => dispatch({ type: "CLOSE_EDIT" })}
            className="text-gray-700 font-bold hover:cursor-pointer"
          >
            X
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="book-name"
            className="block text-gray-700 font-bold mb-2"
          >
            Tên sách
          </label>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            type="text"
            id="book-name"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrower-name"
            className="block text-gray-700 font-bold mb-2"
          >
            Tên người mượn
          </label>
          <input
            name="rented_by"
            value={formState.rented_by}
            onChange={handleChange}
            type="text"
            id="borrower-name"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="borrow-date"
            className="block text-gray-700 font-bold mb-2"
          >
            Ngày mượn
          </label>
          <input
            name="rented_date"
            value={formState.rented_date}
            onChange={handleChange}
            type="date"
            id="borrow-date"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="return-date"
            className="block text-gray-700 font-bold mb-2"
          >
            Ngày trả
          </label>
          <input
            name="received_date"
            value={formState.received_date}
            onChange={handleChange}
            type="date"
            id="return-date"
            className="w-[80%] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => dispatch({ type: "CLOSE_EDIT" })}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Sửa
          </button>
        </div>
      </form>
    </div>
  );
}
