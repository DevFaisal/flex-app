import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "../../../../components/ui/Button";
import { faqData } from "../../constants/constants";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FlexFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-6 md:py-10 relative px-4 sm:px-6 overflow-hidden">
      <HeaderNote note="FAQs" desc="Got Questions? We've Got Answers." />

      {/* FAQ List */}
      <div className="flex flex-col justify-center items-center gap-7 relative z-10 max-w-3xl mx-auto">
        <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 w-full">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-[0.3px] border-gray-400 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center gap-4">
                  <span>{faq.icon}</span>
                  <h5 className="font-medium">{faq.question}</h5>
                </div>
                <span className="text-xl text-gray-600">{openFaq === index ? <FaMinus /> : <FaPlus />}</span>
              </button>

              <div
                className={`px-4 pb-4 pt-0 transition-all duration-300 space-y-2 ${
                  openFaq === index ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="ml-12">{faq.answer}</div>
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

export default FlexFAQ;
