import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card mb-3">
      <div 
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <h5 className="mb-0">{question}</h5>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>
      {isOpen && (
        <div className="card-body">
          <p className="card-text">{answer}</p>
        </div>
      )}
    </div>
  );
};

function FAQ() {
  const faqs = [
    {
      question: "How can I track my query?",
      answer: "Once you submit a query through our form, you'll receive a unique tracking ID or email. You can use this ID to check the status of your query at any time."
    },
    {
      question: "What types of queries can I submit?",
      answer: "We support three types of queries: General Inquiries, Technical Support, and Academic Guidance. Choose the most relevant category when submitting your query."
    },
    {
      question: "How long does it take to get a response?",
      answer: "Our team strives to respond to queries within 1-2 business days. Complex queries might take slightly longer, but we'll keep you updated on the progress."
    }
  ];

  return (
    <div className="container faq-container">
      <h1 className="text-center mb-5">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;