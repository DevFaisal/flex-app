import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  FaAngleDown,
  FaAngleUp,
  FaSmile,
  FaLightbulb,
  FaMobileAlt,
  FaQuestion,
  FaExchangeAlt,
  FaLock,
} from "react-icons/fa";

import Button from "../../../../components/ui/Button";

const FlexFAQ = () => {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      icon: <FaSmile className="text-purple-600 text-xl" />,
      question: "Why the name Flex?",
      answer: (
        <div className="text-gray-700">
          <p>Because credit should bend, not break you.</p>
          <p>Picture two wallets, facing each other.</p>
          <p>Or two coins, having a chat across the front desk.</p>
          <p>It's about give and take — a fair way to borrow, repay, and move on.</p>
          <p>Flex means freedom. Flex means choice.</p>
          <p>Flex means you're in control — and you only pay for what you owe.</p>
          <p>That's it. No tricks, no stress. Just credit that fits you.</p>
        </div>
      ),
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-xl" />,
      question: "What does Pay For What You Owe actually mean?",
      answer: (
        <div className="text-gray-700">
          <p>
            Most credit cards make you jump through hoops — you pay some off, but still get charged interest on the
            whole amount. Not with Flex.
          </p>
          <p>With Flex, you only pay interest on what's left.</p>
          <p>Let's say you've spent £1,000 and you repay £300.</p>
          <p>You'll only pay interest on the remaining £700. That's it.</p>
          <p>
            You also get to choose how much to repay — 10%, 25%, 50%, 75%, or even a custom amount — and we'll show you
            exactly how much interest you'll pay and how much you'll save with each option.
          </p>
          <p>You stay in control, every step of the way.</p>
        </div>
      ),
    },
    {
      icon: <FaMobileAlt className="text-blue-500 text-xl" />,
      question: "Can I get Flex now?",
      answer: (
        <div className="text-gray-700">
          <p>Not just yet — but we're working on it!</p>
          <p>
            We're getting ready for Phase 1 of our launch, and we're doing things properly. That means going through the
            official FCA application process, so we can launch with the right protections in place.
          </p>
          <p>Wish us luck — and thanks for being part of the journey.</p>
          <p>
            If you join the waitlist now, you'll be one of the first to know when Flex goes live. No obligations, no
            pressure.
          </p>
        </div>
      ),
    },
    {
      icon: <FaQuestion className="text-green-500 text-xl" />,
      question: "Will joining the waitlist affect my credit score?",
      answer: (
        <div className="text-gray-700">
          <p>Nope.</p>
          <p>Joining the waitlist is totally safe — there's no credit check and no impact on your credit score.</p>
          <p>
            We'll only run a check if (and when) you apply later — and even then, we'll make everything crystal clear
            before you go ahead.
          </p>
        </div>
      ),
    },
    {
      icon: <FaExchangeAlt className="text-red-500 text-xl" />,
      question: "How is Flex different from other credit cards?",
      answer: (
        <div className="text-gray-700">
          <p>
            We built Flex because we've made partial repayments, thought we were doing the right thing — only to be hit
            with interest we didn't expect.
          </p>
          <p>
            So, we listened. We spoke to people like us, and built Flex for all of us — because real life isn't
            one-size-fits-all. And credit shouldn't be either.
          </p>
          <p>Let's break it down:</p>
          <p className="font-medium mt-2">With traditional credit cards:</p>
          <p>You spend £1,000 on 8 March. Your statement closes on 10 March. You repay £500 on 20 March.</p>
          <p>Sounds fair enough, right?</p>
          <p>But here's the catch:</p>
          <p>You'll still be charged interest on the full £1,000 — not just the £500 you didn't repay.</p>
          <p>And not just from your statement date — but from the day you made the purchase.</p>
          <p>That interest keeps compounding daily until you clear the full balance.</p>
          <p>So even when you're trying to do the right thing, you can end up paying more than you expected.</p>
          <p className="font-medium mt-2">Flex works differently — because we think differently:</p>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            <li>You choose how much to repay — 10%, 25%, 50%, 75%, or a custom amount</li>
            <li>We only charge interest on what's left, not your full statement</li>
            <li>
              You'll see exactly how much interest you're being charged — and how much you're saving — before you commit
            </li>
            <li>Late fees are capped at £5, not £12 or more</li>
            <li>And yes, we're app-only, built for your phone and your lifestyle</li>
          </ul>
          <p className="mt-2">We built Flex to make credit work for real people — not just the system.</p>
          <p>No tricks. No compounding traps. Just credit that makes sense.</p>
        </div>
      ),
    },
    {
      icon: <FaLock className="text-gray-700 text-xl" />,
      question: "How do you keep my account safe?",
      answer: (
        <div className="text-gray-700">
          <p>Flex is a digital-only credit card, and your security is baked into everything we do.</p>
          <p>Here's how we look after you:</p>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            <li>We use bank-grade encryption to protect your data</li>
            <li>3D Secure (3DS) adds an extra layer of safety to your online payments</li>
            <li>You'll get real-time transaction alerts, so you're always in the know</li>
            <li>Lost your card? Just freeze it instantly in the app</li>
            <li>Something suspicious? Our UK-based team is here to help</li>
          </ul>
          <p className="mt-2">You're always in control — and we've got your back.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="py-8 sm:py-12 md:py-20 relative px-4 sm:px-6 overflow-hidden">
      <HeaderNote note="FAQs" desc="Got Questions? We've Got Answers." />

      {/* FAQ List */}
      <div className="flex flex-col justify-center items-center gap-7  relative z-10 max-w-3xl mx-auto">
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
                  <span className="font-medium text-lg">{faq.question}</span>
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

// import {
//   FaAngleDown,
//   FaAngleUp,
//   FaSmile,
//   FaLightbulb,
//   FaMobileAlt,
//   FaQuestion,
//   FaExchangeAlt,
//   FaLock,
// } from "react-icons/fa";

// const FlexFAQ = () => {
//   // State to track which FAQ is open
//   const [openFaq, setOpenFaq] = useState(null);

//   // Toggle FAQ open/close
//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   // FAQ data array with icons, preserving original text formatting
//   const faqData = [
//     {
//       icon: <FaSmile className="text-purple-600 text-xl" />,
//       question: "Why the name Flex?",
//       answer: (
//         <div className="text-gray-700">
//           <p>Because credit should bend, not break you.</p>
//           <p>Picture two wallets, facing each other.</p>
//           <p>Or two coins, having a chat across the front desk.</p>
//           <p>It's about give and take — a fair way to borrow, repay, and move on.</p>
//           <p>Flex means freedom. Flex means choice.</p>
//           <p>Flex means you're in control — and you only pay for what you owe.</p>
//           <p>That's it. No tricks, no stress. Just credit that fits you.</p>
//         </div>
//       ),
//     },
//     {
//       icon: <FaLightbulb className="text-yellow-500 text-xl" />,
//       question: "What does Pay For What You Owe actually mean?",
//       answer: (
//         <div className="text-gray-700">
//           <p>
//             Most credit cards make you jump through hoops — you pay some off, but still get charged interest on the
//             whole amount. Not with Flex.
//           </p>
//           <p>With Flex, you only pay interest on what's left.</p>
//           <p>Let's say you've spent £1,000 and you repay £300.</p>
//           <p>You'll only pay interest on the remaining £700. That's it.</p>
//           <p>
//             You also get to choose how much to repay — 10%, 25%, 50%, 75%, or even a custom amount — and we'll show you
//             exactly how much interest you'll pay and how much you'll save with each option.
//           </p>
//           <p>You stay in control, every step of the way.</p>
//         </div>
//       ),
//     },
//     {
//       icon: <FaMobileAlt className="text-blue-500 text-xl" />,
//       question: "Can I get Flex now?",
//       answer: (
//         <div className="text-gray-700">
//           <p>Not just yet — but we're working on it!</p>
//           <p>
//             We're getting ready for Phase 1 of our launch, and we're doing things properly. That means going through the
//             official FCA application process, so we can launch with the right protections in place.
//           </p>
//           <p>Wish us luck — and thanks for being part of the journey.</p>
//           <p>
//             If you join the waitlist now, you'll be one of the first to know when Flex goes live. No obligations, no
//             pressure.
//           </p>
//         </div>
//       ),
//     },
//     {
//       icon: <FaQuestion className="text-green-500 text-xl" />,
//       question: "Will joining the waitlist affect my credit score?",
//       answer: (
//         <div className="text-gray-700">
//           <p>Nope.</p>
//           <p>Joining the waitlist is totally safe — there's no credit check and no impact on your credit score.</p>
//           <p>
//             We'll only run a check if (and when) you apply later — and even then, we'll make everything crystal clear
//             before you go ahead.
//           </p>
//         </div>
//       ),
//     },
//     {
//       icon: <FaExchangeAlt className="text-red-500 text-xl" />,
//       question: "How is Flex different from other credit cards?",
//       answer: (
//         <div className="text-gray-700">
//           <p>
//             We built Flex because we've made partial repayments, thought we were doing the right thing — only to be hit
//             with interest we didn't expect.
//           </p>
//           <p>
//             So, we listened. We spoke to people like us, and built Flex for all of us — because real life isn't
//             one-size-fits-all. And credit shouldn't be either.
//           </p>
//           <p>Let's break it down:</p>
//           <p className="font-medium mt-2">With traditional credit cards:</p>
//           <p>You spend £1,000 on 8 March. Your statement closes on 10 March. You repay £500 on 20 March.</p>
//           <p>Sounds fair enough, right?</p>
//           <p>But here's the catch:</p>
//           <p>You'll still be charged interest on the full £1,000 — not just the £500 you didn't repay.</p>
//           <p>And not just from your statement date — but from the day you made the purchase.</p>
//           <p>That interest keeps compounding daily until you clear the full balance.</p>
//           <p>So even when you're trying to do the right thing, you can end up paying more than you expected.</p>
//           <p className="font-medium mt-2">Flex works differently — because we think differently:</p>
//           <ul className="list-disc pl-5 space-y-1 mt-1">
//             <li>You choose how much to repay — 10%, 25%, 50%, 75%, or a custom amount</li>
//             <li>We only charge interest on what's left, not your full statement</li>
//             <li>
//               You'll see exactly how much interest you're being charged — and how much you're saving — before you commit
//             </li>
//             <li>Late fees are capped at £5, not £12 or more</li>
//             <li>And yes, we're app-only, built for your phone and your lifestyle</li>
//           </ul>
//           <p className="mt-2">We built Flex to make credit work for real people — not just the system.</p>
//           <p>No tricks. No compounding traps. Just credit that makes sense.</p>
//         </div>
//       ),
//     },
//     {
//       icon: <FaLock className="text-gray-700 text-xl" />,
//       question: "How do you keep my account safe?",
//       answer: (
//         <div className="text-gray-700">
//           <p>Flex is a digital-only credit card, and your security is baked into everything we do.</p>
//           <p>Here's how we look after you:</p>
//           <ul className="list-disc pl-5 space-y-1 mt-1">
//             <li>We use bank-grade encryption to protect your data</li>
//             <li>3D Secure (3DS) adds an extra layer of safety to your online payments</li>
//             <li>You'll get real-time transaction alerts, so you're always in the know</li>
//             <li>Lost your card? Just freeze it instantly in the app</li>
//             <li>Something suspicious? Our UK-based team is here to help</li>
//           </ul>
//           <p className="mt-2">You're always in control — and we've got your back.</p>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//       <div className="space-y-4">
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className={`border rounded-lg overflow-hidden transition-all duration-300 ${
//               openFaq === index ? "border-purple-500 bg-purple-50" : "border-gray-200"
//             }`}
//           >
//             <button
//               className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
//               onClick={() => toggleFaq(index)}
//             >
//               <div className="flex items-center gap-4">
//                 <span>{faq.icon}</span>
//                 <span className="font-medium text-lg">{faq.question}</span>
//               </div>
//               <span className="text-xl text-purple-600">{openFaq === index ? <FaAngleUp /> : <FaAngleDown />}</span>
//             </button>

//             <div
//               className={`px-4 pb-4 pt-0 transition-all duration-300 space-y-2 ${
//                 openFaq === index ? "block opacity-100" : "hidden opacity-0"
//               }`}
//             >
//               <div className="ml-12">{faq.answer}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="absolute max-w-3xl mx-auto w-full h-2/3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl left-1/2 -translate-x-1/2 opacity-25"></div>
//     </div>
//   );
// };

// export default FlexFAQ;
