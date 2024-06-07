import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const handleGetBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/books");
      if (response.status === 200) {
        setData(response.data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/books/${id}`);
      if (response.status === 200) {
        alert("Book deleted successfully");

        // After success delete the book, get the updated list of books
        handleGetBooks();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <section
      className={
        "mx-auto max-w-2xl w-full min-h-screen py-10 flex flex-col items-center gap-5"
      }
    >
      <button
        onClick={() => navigate("/add-book")}
        className="px-5 py-3 rounded-md font-medium bg-blue-300"
      >
        Add Book
      </button>

      {data ? (
        <table className="w-full table-fixed text-white">
          <thead>
            <tr>
              <th className="text-left">Number</th>
              <th className="text-left">Title</th>
              <th className="text-left">Author</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-y">
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td className="my-2 flex items-center gap-2 text-black">
                  <button
                    className="px-5 py-2 rounded-md bg-red-300"
                    onClick={() => handleDeleteBook(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-5 py-2 rounded-md bg-green-300"
                    onClick={() => navigate(`/edit-book/${item.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-white">Data not found</p>
      )}
    </section>
  );
};

export default HomePage;
