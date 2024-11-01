// src/pages/StudentDashboard.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const querySnapshot = await getDocs(collection(db, "queries"));
      setQueries(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchQueries();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Your Queries</h2>
      <ul>
        {queries.map((query, index) => (
          <li key={index}>
            <p><strong>Type:</strong> {query.type}</p>
            <p><strong>Issue:</strong> {query.issue}</p>
            <p><strong>Status:</strong> {query.status}</p>
            <p><strong>Solution:</strong> {query.solution || "Pending"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
