// src/components/AdminPortal.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const AdminPortal = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const querySnapshot = await getDocs(collection(db, "queries"));
      setQueries(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchQueries();
  }, []);

  const markResolved = async (id, solution) => {
    await updateDoc(doc(db, "queries", id), { status: "Resolved", solution });
    setQueries(queries.map(q => q.id === id ? { ...q, status: "Resolved", solution } : q));
  };

  return (
    <div>
      <h2>Admin Portal</h2>
      {queries.map(q => (
        <div key={q.id}>
          <h3>{q.type}</h3>
          <p>{q.issue}</p>
          {q.status === "Unresolved" ? (
            <div>
              <input
                type="text"
                placeholder="Solution"
                onChange={(e) => q.solution = e.target.value}
              />
              <button onClick={() => markResolved(q.id, q.solution || "Solution provided")}>
                Resolve
              </button>
            </div>
          ) : (
            <p>Status: {q.status} - Solution: {q.solution || "No solution provided"}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminPortal;
