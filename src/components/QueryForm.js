import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../QueryForm.css";

function QueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    queryType: "",
    query: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbx2eaxXxQvaAW7-0aEcZvudjrQyq3x-Zq8XcegNJEeJqmUF6P2R-hChOFYJkDNHyAO1/exec";

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('queryType', formData.queryType);
      formDataToSend.append('query', formData.query);

      const response = await fetch(url, {
        method: "POST",
        body: formDataToSend
      });

      // Even with FormData, you might need to handle the response carefully
      const result = await response.text();
      console.log("Server response:", result);

      try {
        const jsonResult = JSON.parse(result);
        if (jsonResult.result === "success") {
          setResponseMessage("Query submitted successfully!");
          setMessageType("success");
          setFormData({ name: "", email: "", queryType: "", query: "" });
        } else {
          setResponseMessage(jsonResult.error || "Something went wrong");
          setMessageType("danger");
        }
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        setResponseMessage("Unexpected server response");
        setMessageType("danger");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Network error. Please try again.");
      setMessageType("danger");
    }
  };





  return (
    <div className="query-form-container">
      <form
        onSubmit={handleSubmit}
        className="query-form p-4 bg-white rounded shadow-sm"
      >
        <h2 className="form-title text-center mb-4">Submit Your Query</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="queryType">Query Type</label>
          <select
            className="form-control"
            id="queryType"
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}
            required
          >
            <option value="">Select Query Type</option>
            <option value="General">General Inquiry</option>
            <option value="Technical">Technical Support</option>
            <option value="Academic">Academic Guidance</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="query">Describe Your Query</label>
          <textarea
            className="form-control"
            id="query"
            name="query"
            rows="4"
            value={formData.query}
            onChange={handleChange}
            placeholder="Provide details about your query..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit Query
        </button>

        {responseMessage && (
          <div className={`alert alert-${messageType} mt-3`} role="alert">
            {responseMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default QueryForm;
