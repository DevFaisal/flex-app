import { ImCog } from "react-icons/im";
import refunds from "../../../assets/icons/cards/refund.svg";
import rewards from "../../../assets/icons/cards/rewards.svg";
import partial from "../../../assets/icons/cards/partialpayment.svg";
import creditcard from "../../../assets/icons/cards/creditcard.svg";
export const feedbackData = [
  {
    text: "Going back to university for an MBA meant no salary for a while. I knew I had to plan my finances carefully, but in our focus group, I realised just how unfair standard credit cards are. If FlexCard existed, I’d have had a way to make partial repayments without getting hit with interest on my full balance. It’s exactly what students and career changers need—I can’t wait for it to go live!",
    author: "Chris",
    role: "MBA Student, Career Change",
  },
  {
    text: "Running a startup means cash flow can be unpredictable. Some months are great, others are tight. I never realised that most credit cards lock you into a rigid repayment system—making you pay interest on money you’ve already cleared. If FlexCard existed, it would be a game-changer for founders like me. Can’t wait to get my hands on it!",
    author: "Jovi",
    role: "Startup Founder, Cash Flow Challenges",
  },
  {
    text: "I love shopping, and I return a lot of stuff. But I never thought twice about how refunds actually work—until our focus group. Turns out, if a refund happens after your statement cycle, it doesn't count as a payment—meaning you still get charged interest on something you don’t even own anymore! WTF?! If FlexCard existed, I wouldn’t have wasted so much money on interest for things I returned. Now I’m just waiting for it to launch!",
    author: "Liz",
    role: "Impulse Buyer, Heavy Month-End Shopping & Refunds",
  },
  {
    text: "I love the flexibility of working for six months and then taking six months off, but managing cash flow can be tricky. In our focus group, I learned how traditional credit cards charge interest on the full balance—even when you’re making repayments. If FlexCard existed, it would be perfect for people like me who need financial flexibility without being punished with interest. I can’t wait for it to launch!",
    author: "Henry",
    role: "6-Months Work/6-Months Off Lifestyle",
  },
  {
    text: "I always buy a few sizes when I shop online—who doesn’t? But I never realised that if my refund doesn’t hit before the statement cycle closes, I still get charged interest on it. In our focus group, I found out that even though I returned the items, my credit card acted like I still owed the money. That’s insane! If FlexCard existed, it would finally fix this unfair system. Seriously, I need this card in my life!",
    author: "Maya",
    role: "Gen Z, Online Shopper – Size Tester & Frequent Returns",
  },
  {
    text: "When I went on maternity leave, my income dropped overnight, but my expenses didn’t. In our focus group, I realised how unfair it is that traditional credit cards charge interest on the full balance—even when you make repayments. If FlexCard existed, I would have had a fairer way to manage my payments. I can’t wait for it to launch!",
    author: "Beulah",
    role: "Management Consultant, New Mum",
  },
  {
    text: "Working for yourself is amazing, but the unpredictable income makes managing cash flow tricky. In our discussions, it became clear that if FlexCard was around, it would have been the perfect solution—allowing me to adjust my repayments without worrying about crazy interest charges. I love that it actually rewards responsible borrowers. I’ll be one of the first in line when it launches!",
    author: "Lorena",
    role: "Gig Worker, Self-Employed",
  },
  {
    text: "Before our focus group, I never really thought about how credit cards work—I just assumed they were all the same. Now I know that most of them are designed to trap you with unfair interest charges. If FlexCard existed when I got my first job, I would have had a much better way to manage my money. I'm proud to be an early supporter!",
    author: "Pavika",
    role: "Fresh Graduate, First Job",
  },
  {
    text: "Working part-time means my income isn’t always the same each month, so I assumed making partial payments on my credit card was enough. In our focus group, I found out the shocking truth—most cards still charge you full interest even when you’re paying off a big chunk. If FlexCard existed, it would finally give people like me a fairer way to manage credit. It’s about time!",
    author: "Michael",
    role: "Part-Time Worker, Variable Income",
  },
  {
    text: "I took a short career break to travel before starting a new job. Money was tight, and I had to be careful with spending. In the focus group, I learned how traditional credit cards punish you with full interest, even if you pay off most of your balance. If FlexCard were available, it would have been a game-changer for me. I’m excited to be part of the early adopters!",
    author: "Eduardo",
    role: "Architect, Career Break",
  },
];

export const promoCards = [
  {
    title: `Partial Payments?
Still Paying Full
Interest`,
    description: `Paying more than the minimum but less than the full balance? Traditional credit cards still charge you interest on the full statement amount.`,
    icon: partial,
  },
  {
    title: `Refunds Aren’t Payments`,
    description: `Returned an item? You might think it reduces what you owe… but if it’s after your statement cycle, you’ll still pay interest.`,
    icon: refunds,
  },
  {
    title: `Rewards Are 
Designed for 
Banks, Not You`,
    description: `That cashback and rewards program? It’s built to make you spend more—not to help you save.`,
    icon: rewards,
  },
  {
    title: `70% of People 
Want a Credit 
Card That’s Fair`,
    description: `We asked 2,500+ people what they wanted—70% said they wanted to “Pay for What You Owe.” So, we built Flex.`,
    icon: creditcard,
  },
];

export const faqData = [
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

export const questions = [
  {
    question: "If you make a partial payment on your credit card, do you still pay interest on the full amount?",
    answers: ["No, only on the remaining balance", "Yes, on the full statement amount"],
  },
  {
    question: "Do refunds count as payments for your minimum monthly payment?",
    answers: ["Yes, they reduce what you need to pay", "No, they don't count towards your minimum payment"],
  },
  {
    question: "What percentage of your credit card balance is typically required as a minimum payment?",
    answers: ["1-3%", "5-10%", "15-20%"],
  },
  {
    question:
      "When you pay only the minimum on a £1,000 balance at 20% APR, approximately how long will it take to pay off?",
    answers: ["2-3 years", "5-7 years", "Over 10 years"],
  },
  {
    question: "Which of these is NOT a common credit card fee?",
    answers: ["Late payment fee", "Over-limit fee", "Early repayment fee"],
  },
];
