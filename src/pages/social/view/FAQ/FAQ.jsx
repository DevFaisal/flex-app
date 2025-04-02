import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "../../constants/constants";
import Button from "../../../../components/ui/Button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen py-8 sm:py-12 md:py-20 relative px-4 sm:px-6 overflow-hidden">
      <HeaderNote note="FAQs" desc="Got Questions? We've Got Answers." />

      {/* FAQ List */}
      <div className="flex flex-col justify-center items-center gap-7  relative z-10 max-w-3xl mx-auto">
        <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 w-full">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-[0.3px] border-gray-400 rounded-lg p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-base sm:text-lg font-semibold break-words flex-1">{faq.question}</h3>
                <button
                  className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label={openIndex === index ? "Close answer" : "Show answer"}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <FaPlus className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <Button type="secondary" label={"Read All FAQs ->"} />
        </div>
      </div>

      {/* Background Blur Effect */}
      <div className="absolute max-w-3xl mx-auto w-full h-2/3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl left-1/2 -translate-x-1/2 opacity-25"></div>
    </section>
  );
};

export default FAQ;
