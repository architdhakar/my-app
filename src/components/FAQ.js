// src/components/FAQ.js
import React from "react";

const FAQ = () => (
  <div>
    <h2>Frequently Asked Questions</h2>
    <ul>
      <li>
        <strong>Question 1:</strong> How can I submit a query?
        <p>Answer: You can submit a query on the main page by filling out the form with your details and the issue.</p>
      </li>
      <li>
        <strong>Question 2:</strong> How can I check the status of my query?
        <p>Answer: After logging in, you can view all your queries and their status on the dashboard.</p>
      </li>
      {/* Add more FAQs as needed */}
    </ul>
  </div>
);

export default FAQ;
