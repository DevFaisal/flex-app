import React, { useState } from 'react';
import HeaderNote from '../../../../components/ui/HeaderNote';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import Button from '../../../../components/ui/Button';
import { faqData } from '../../constants/constants';
import Model from '../../../../components/ui/Model';

const FlexFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-10 md:py-15 relative px-4 sm:px-6 overflow-hidden">
      <HeaderNote note="FAQs" desc="Got Questions? We've Got Answers." />

      {/* FAQ List */}
      <div className="flex flex-col justify-center items-center gap-7 relative z-10 max-w-3xl mx-auto">
        <RenderFAQ faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} />
        <div className="">
          <Button
            type="secondary"
            label={'Read All FAQs'}
            icon={<FaArrowRight />}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>

      <Model onClose={() => setIsOpen(!isOpen)} isOpen={isOpen} title={'FAQ'}>
        <RenderFAQ faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} />
      </Model>

      {/* Background Blur Effect */}
      <div className="absolute max-w-3xl mx-auto w-full h-2/3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl left-1/2 -translate-x-1/2 opacity-25"></div>
    </section>
  );
};

export default FlexFAQ;

function RenderFAQ({ faqData, openFaq, toggleFaq }) {
  return (
    <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 w-full">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`${openFaq == index ? 'bg-green-50' : 'bg-white'} border-[0.3px] border-gray-400 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
        >
          <button
            className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center gap-4">
              {/* <span>{faq.icon}</span> */}
              <h5 className="font-bold">{faq.question}</h5>
            </div>
            <span className="text-xl text-gray-600">
              {openFaq === index ? <FaMinus /> : <FaPlus />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openFaq === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pb-4 pt-0 space-y-2 ml-12">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
