import React, { useState } from 'react';
import HeaderNote from '../../../../../components/ui/HeaderNote';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import Button from '../../../../../components/ui/Button';
import Modal from '../../../../../components/ui/Model';
import { faqData } from '../../constants/constants';
import { Link, Route, useNavigate } from 'react-router';

const FlexFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 md:py-16 relative px-4 sm:px-8 overflow-hidden"
      aria-labelledby="faq-title"
    >
      <HeaderNote note="FAQs" desc="Got Questions? We've Got Answers." id="faq-title" />

      {/* FAQ List */}
      <div className="flex flex-col justify-center items-center gap-7 relative z-10 max-w-3xl mx-auto">
        <FAQAccordion faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} />

        <Link to={'/faqs'}>
          <Button
            type="secondary"
            label="Read All FAQs"
            icon={<FaArrowRight />}
            aria-label="Open complete FAQ modal"
            className="mt-4"
          />
        </Link>
      </div>
      {/* 
      <Modal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Frequently Asked Questions"
      >
        <FAQAccordion faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} isModal={true} />
      </Modal> */}

      {/* Background Gradient Effect with smoother appearance */}
      <div
        className="absolute max-w-4xl mx-auto w-full h-3/4 top-1/2 transform -translate-y-1/2 
        bg-gradient-to-r from-blue-500 to-green-500 blur-[70px] left-1/2 -translate-x-1/2 
        opacity-20 rounded-full"
        aria-hidden="true"
      ></div>
    </section>
  );
};

// Extracted FAQ Accordion component for better organization
const FAQAccordion = ({ faqData, openFaq, toggleFaq, isModal = false }) => {
  return (
    <div
      className={`space-y-3 md:space-y-4 mt-6 w-full ${isModal ? 'max-h-[70vh] overflow-y-auto pr-2' : ''}`}
      role="region"
      aria-label="Frequently Asked Questions"
    >
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`${
            openFaq === index ? 'bg-green-50 border-green-100' : 'bg-white border-gray-200'
          } border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md`}
        >
          <button
            className="flex items-center justify-between w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={() => toggleFaq(index)}
            aria-expanded={openFaq === index}
            aria-controls={`faq-answer-${index}`}
          >
            <div className="flex items-center gap-4">
              {/* <span className="text-xl flex-shrink-0" aria-hidden="true">
                {faq.icon}
              </span> */}
              <h3 className="font-bold text-base">{faq.question}</h3>
            </div>
            <span className="text-xl text-gray-600 flex-shrink-0 ml-4" aria-hidden="true">
              {openFaq === index ? <FaMinus /> : <FaPlus />}
            </span>
          </button>

          <div
            id={`faq-answer-${index}`}
            className={`transition-all duration-300 ease-in-out ${
              openFaq === index ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
            }`}
            role="region"
            aria-hidden={openFaq !== index}
          >
            <div className="px-5 pb-2 space-y-2 ml-10">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlexFAQ;
