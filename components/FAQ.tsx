import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 px-4">
      <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase tracking-wide">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="bg-ug-card border border-slate-800 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-slate-900/50 hover:bg-slate-800 transition-colors"
            >
              <span className="font-semibold text-slate-200">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-yellow-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 py-4 text-slate-400 text-sm border-t border-slate-800">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;