import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBookPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  const handleChangeForm = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setBook({ ...book, [key]: value });
  };

  const handleGetDetailBook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/books/${params.id}`
      );
      if (response.status === 200) {
        setBook(response.data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    if (book.title !== "" && book.author !== "") {
      try {
        const response = await axios.put(
          `http://localhost:4000/books/${params.id}`,
          book
        );

        if (response.status === 200) {
          alert("Update book successfully");

          //   after success update the book, redirect it to home page
          navigate("/home");
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  useEffect(() => {
    handleGetDetailBook();
  }, []);

  return (
    <section className="w-full min-h-screen py-10 flex flex-col items-center gap-5">
      <header className="text-xl font-medium text-white">Form Edit Book</header>
      <form className="max-w-sm w-full flex flex-col items-center gap-3 text-white">
        <div className="w-full flex flex-col gap-1">
          <label className="text-lg">Title Book</label>
          <input
            type="text"
            name="title"
            placeholder="add task"
            value={book?.title}
            className="px-3 py-2 bg-transparent rounded-md border border-slate-600"
            onChange={handleChangeForm}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-lg">Author</label>
          <input
            type="text"
            name="author"
            placeholder="add author"
            value={book?.author}
            className="px-3 py-2 bg-transparent rounded-md border border-slate-600"
            onChange={handleChangeForm}
          />
        </div>
        <button
          onClick={(e) => handleUpdateBook(e)}
          className="w-fit px-5 py-3 rounded-md bg-gray-600 leading-none font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default EditBookPage;
