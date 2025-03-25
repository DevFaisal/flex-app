import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  { question: "Why the name Flex?", answer: "Flex represents flexibility in payments and financial freedom." },
  {
    question: "What does Pay For What You Owe actually mean?",
    answer: "It means you only pay for what you've spent, ensuring transparency.",
  },
  { question: "Can I get Flex now?", answer: "Yes, you can sign up and check your eligibility on our platform." },
  {
    question: "Will joining the waitlist affect my credit score?",
    answer: "No, joining the waitlist does not impact your credit score.",
  },
  {
    question: "How is Flex different from other credit cards?",
    answer: "Flex offers a more flexible repayment system without hidden fees.",
  },
  {
    question: "How do you keep my account safe?",
    answer: "We use advanced encryption and fraud detection to protect your account.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative px-6 overflow-hidden h-full">
      <HeaderNote note="FAQs" desc="Got Questions? We’ve Got Answers." />

      {/* FAQ List */}
      <div className="space-y-4 mt-6 relative z-10 max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-[0.3px] border-gray-400 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold break-words">{faq.question}</h3>
              {openIndex === index ? <FaMinus className="text-gray-500" /> : <FaPlus className="text-gray-500" />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Background Blur Effect */}
      <div className="absolute max-w-3xl mx-auto w-full h-2/3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl left-100 opacity-25"></div>
    </section>
  );
};

export default FAQ;
