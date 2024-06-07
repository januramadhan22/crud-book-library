import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const navigate = useNavigate();
  const [bookForm, setBookForm] = useState({ title: "", author: "" });

  const handleChangeForm = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setBookForm({ ...bookForm, [key]: value });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    if (bookForm.title !== "" && bookForm.author !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4000/books",
          bookForm
        );

        if (response.status === 201) {
          alert("Book added successfully");

          //   after success add new book, redirect it to home page
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

  return (
    <section className="w-full min-h-screen py-10 flex flex-col items-center gap-5">
      <header className="text-xl font-medium text-white">Form Add Book</header>
      <form className="max-w-sm w-full flex flex-col items-center gap-3 text-white">
        <div className="w-full flex flex-col gap-1">
          <label className="text-lg">Title Book</label>
          <input
            type="text"
            name="title"
            placeholder="add task"
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
            className="px-3 py-2 bg-transparent rounded-md border border-slate-600"
            onChange={handleChangeForm}
          />
        </div>
        <button
          onClick={(e) => handleAddBook(e)}
          className="w-fit px-5 py-3 rounded-md bg-gray-600 leading-none font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddBookPage;
