import React from "react";
import "./com.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What does Sushirmala Foundation do?",
      answer: "We empower communities through various charitable activities!",
    },
    {
      question: "How can I volunteer?",
      answer: "Fill out the form on our volunteering page and join us!",
    },
    {
      question: "Where do donations go?",
      answer: "Your donations fund essential community projects!",
    },
    {
      question: "Can I donate items?",
      answer: "Absolutely! We accept clothes and medical supplies!",
    },
    {
      question: "How to contact the foundation?",
      answer: "Reach us via our contact page for inquiries!",
    },
  ];

  return (
    <div className="container-fluid py-5" style={{backgroundColor:'pink'}} >
      <h1 className="text-center mb-4">Got Questions?</h1>
      <p className="text-center mb-5">
        Here are some of the most frequently asked questions about our foundation.
      </p>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
