// src/pages/MainPage.js
import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import Navbar from "../components/Navbar";

const MainPage = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "", issue: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "queries"), { ...form, status: "Unresolved" });
    alert("Query submitted!");
  };

  return (
    <div>
      <Navbar />
      <h2>Submit a Query</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="type" placeholder="Type of Issue" onChange={handleChange} required />
        <textarea name="issue" placeholder="Describe the issue" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MainPage;
