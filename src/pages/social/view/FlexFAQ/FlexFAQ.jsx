// import React, { useState } from 'react';
// import HeaderNote from '../../../../components/ui/HeaderNote';
// import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
// import Button from '../../../../components/ui/Button';
// import Model from '../../../../components/ui/Model';
// export const faqData = [
//   {
//     icon: <FaSmile className="text-purple-600 text-xl" />,
//     question: 'Why the name Flex?',
//     answer: (
//       <div className="text-gray-700">
//         Because credit should bend, not break you. Picture two wallets, facing each other. Or two
//         coins, having a chat across the front desk. It's about give and take — a fair way to borrow,
//         repay, and move on. Flex means freedom. Flex means choice. Flex means you're in control —
//         and you only pay for what you owe. That's it. No tricks, no stress. Just credit that fits
//         you.
//       </div>
//     ),
//   },
//   {
//     icon: <FaLightbulb className="text-yellow-500 text-xl" />,
//     question: 'What does Pay For What You Owe actually mean?',
//     answer: (
//       <div className="text-gray-700">
//         Most credit cards make you jump through hoops — you pay some off, but still get charged
//         interest on the whole amount. Not with Flex. With Flex, you only pay interest on what's
//         left. Let's say you've spent £1,000 and you repay £300. You'll only pay interest on the
//         remaining £700. That's it. You also get to choose how much to repay — 10%, 25%, 50%, 75%, or
//         even a custom amount — and we'll show you exactly how much interest you'll pay and how much
//         you'll save with each option. You stay in control, every step of the way.
//       </div>
//     ),
//   },
//   {
//     icon: <FaMobileAlt className="text-blue-500 text-xl" />,
//     question: 'Can I get Flex now?',
//     answer: (
//       <div className="text-gray-700">
//         Not just yet — but we're working on it! We're getting ready for Phase 1 of our launch, and
//         we're doing things properly. That means going through the official FCA application process,
//         so we can launch with the right protections in place. Wish us luck — and thanks for being
//         part of the journey. If you join the waitlist now, you'll be one of the first to know when
//         Flex goes live. No obligations, no pressure.
//       </div>
//     ),
//   },
//   {
//     icon: <FaQuestion className="text-green-500 text-xl" />,
//     question: 'Will joining the waitlist affect my credit score?',
//     answer: (
//       <div className="text-gray-700">
//         Nope. Joining the waitlist is totally safe — there's no credit check and no impact on your
//         credit score. We'll only run a check if (and when) you apply later — and even then, we'll
//         make everything crystal clear before you go ahead.
//       </div>
//     ),
//   },
//   {
//     icon: <FaExchangeAlt className="text-red-500 text-xl" />,
//     question: 'How is Flex different from other credit cards?',
//     answer: (
//       <div className="text-gray-700">
//         We built Flex because we've made partial repayments, thought we were doing the right thing —
//         only to be hit with interest we didn't expect.
//         <span className="block mt-2">
//           So, we listened. We spoke to people like us, and built Flex for all of us — because real
//           life isn't one-size-fits-all. And credit shouldn't be either.
//         </span>
//         <span className="block">Let's break it down:</span>
//         <span className="block font-bold mt-2">With traditional credit cards:</span>
//         <span className="block">
//           You spend £1,000 on 8 March. Your statement closes on 10 March. You repay £500 on 20
//           March.
//         </span>
//         <span className="block">Sounds fair enough, right?</span>
//         <span className="block">But here's the catch:</span>
//         <span className="block">
//           You'll still be charged interest on the full £1,000 — not just the £500 you didn't repay.
//         </span>
//         <span className="block">
//           And not just from your statement date — but from the day you made the purchase.
//         </span>
//         <span className="block">
//           That interest keeps compounding daily until you clear the full balance.
//         </span>
//         <span className="block">
//           So even when you're trying to do the right thing, you can end up paying more than you
//           expected.
//         </span>
//         <span className="block font-bold mt-2">
//           Flex works differently — because we think differently:
//         </span>
//         <ul className="list-disc pl-5 space-y-1 mt-1">
//           <li>You choose how much to repay — 10%, 25%, 50%, 75%, or a custom amount</li>
//           <li>We only charge interest on what's left, not your full statement</li>
//           <li>
//             You'll see exactly how much interest you're being charged — and how much you're saving —
//             before you commit
//           </li>
//           <li>Late fees are capped at £5, not £12 or more</li>
//           <li>And yes, we're app-only, built for your phone and your lifestyle</li>
//         </ul>
//         <span className="block mt-2">
//           We built Flex to make credit work for real people — not just the system.
//         </span>
//         <span className="block">
//           No tricks. No compounding traps. Just credit that makes sense.
//         </span>
//       </div>
//     ),
//   },
//   {
//     icon: <FaLock className="text-gray-700 text-xl" />,
//     question: 'How do you keep my account safe?',
//     answer: (
//       <div className="text-gray-700">
//         <span className="block">
//           Flex is a digital-only credit card, and your security is baked into everything we do.
//         </span>
//         <span className="block font-semibold mt-2">Here's how we look after you:</span>
//         <ul className="list-disc pl-5 space-y-1 mt-1">
//           <li>We use bank-grade encryption to protect your data</li>
//           <li>3D Secure (3DS) adds an extra layer of safety to your online payments</li>
//           <li>You'll get real-time transaction alerts, so you're always in the know</li>
//           <li>Lost your card? Just freeze it instantly in the app</li>
//           <li>Something suspicious? Our UK-based team is here to help</li>
//         </ul>
//         <span className="block mt-2">You're always in control — and we've got your back.</span>
//       </div>
//     ),
//   },
// ];
// const FlexFAQ = () => {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle FAQ open/close
//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <section id="faq" className="py-8 sm:py-10 md:py-15 relative px-4 sm:px-6 overflow-hidden">
//       <HeaderNote note="FAQs" desc="Got Questions? We've Got Answers." />

//       {/* FAQ List */}
//       <div className="flex flex-col justify-center items-center gap-7 relative z-10 max-w-3xl mx-auto">
//         <RenderFAQ faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} />
//         <div className="">
//           <Button
//             type="secondary"
//             label={'Read All FAQs'}
//             icon={<FaArrowRight />}
//             onClick={() => {
//               setIsOpen(true);
//             }}
//           />
//         </div>
//       </div>

//       <Model onClose={() => setIsOpen(!isOpen)} isOpen={isOpen} title={'FAQ'}>
//         <RenderFAQ faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} />
//       </Model>

//       {/* Background Blur Effect */}
//       <div className="absolute max-w-3xl mx-auto w-full h-2/3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl left-1/2 -translate-x-1/2 opacity-25"></div>
//     </section>
//   );
// };

// export default FlexFAQ;

// function RenderFAQ({ faqData, openFaq, toggleFaq }) {
//   return (
//     <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 w-full">
//       {faqData.map((faq, index) => (
//         <div
//           key={index}
//           className={`${openFaq == index ? 'bg-green-50' : 'bg-white'} border-[0.3px] border-gray-400 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
//         >
//           <button
//             className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
//             onClick={() => toggleFaq(index)}
//           >
//             <div className="flex items-center gap-4">
//               <h5 className="font-bold">{faq.question}</h5>
//             </div>
//             <span className="text-xl text-gray-600">
//               {openFaq === index ? <FaMinus /> : <FaPlus />}
//             </span>
//           </button>

//           <div
//             className={`overflow-hidden transition-all duration-500 ease-in-out ${
//               openFaq === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//             }`}
//           >
//             <div className="px-4 pb-4 pt-0 space-y-2 ml-12">{faq.answer}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState } from 'react';
import HeaderNote from '../../../../components/ui/HeaderNote';
import {
  FaPlus,
  FaMinus,
  FaArrowRight,

} from 'react-icons/fa';
import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Model'; // Renamed for clarity
import { faqData } from '../../constants/constants';



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

        <Button
          type="secondary"
          label="Read All FAQs"
          icon={<FaArrowRight />}
          onClick={() => setIsModalOpen(true)}
          aria-label="Open complete FAQ modal"
          className="mt-4"
        />
      </div>

      <Modal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Frequently Asked Questions"
      >
        <FAQAccordion faqData={faqData} openFaq={openFaq} toggleFaq={toggleFaq} isModal={true} />
      </Modal>

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
