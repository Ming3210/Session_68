import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "../models/Book";

export default function List() {
  const bookList = useSelector((state: any) => state.renderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "RENDER" });
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
    dispatch({ type: "RENDER" });
  };

  const handleEdit = (id: number) => {
    dispatch({ type: "OPEN", payload: id });
    dispatch({ type: "RENDER" });
  };
  return (
    <div className="flex justify-center shadow-md sm:rounded-lg">
      <table className="w-[95%] text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              STT
            </th>
            <th scope="col" className="px-6 py-3">
              Tên sách
            </th>
            <th scope="col" className="px-6 py-3">
              Sinh viên mượn
            </th>
            <th scope="col" className="px-6 py-3">
              Ngày mượn
            </th>
            <th scope="col" className="px-6 py-3">
              Ngày trả
            </th>
            <th scope="col" className="px-6 py-3">
              Trạng thái
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book: Book, index: number) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{book.name}</td>
              <td className="px-6 py-4">{book.rented_by}</td>
              <td className="px-6 py-4">{book.rented_date}</td>
              <td className="px-6 py-4">{book.received_date}</td>
              <td className="px-6 py-4">
                {book.status ? "Chưa trả" : "Đã trả"}
              </td>
              <td className="px-6 py-4 flex gap-3">
                <button onClick={() => handleEdit(book.id)}>Sửa</button>
                <button onClick={() => handleDelete(book.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
