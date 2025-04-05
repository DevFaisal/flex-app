import refunds from '../../../assets/icons/cards/refund.svg';
import rewards from '../../../assets/icons/cards/rewards.svg';
import partial from '../../../assets/icons/cards/partialpayment.svg';
import creditcard from '../../../assets/icons/cards/creditcard.svg';

export const feedbackData = [
  {
    text: 'When I went on maternity leave, my income dropped overnight, but my expenses didn’t. In our focus group, I realised how unfair it is that traditional credit cards charge interest on the full balance—even when you make repayments. If FlexCard existed, I would have had a fairer way to manage my payments. I can’t wait for it to launch!',
    author: 'Beulah',
    role: 'Management Consultant, New Mum',
    profile: './people/Beualah.jpg',
  },
  {
    text: "I took a short career break to travel before starting a new job. Money was tight, and I had to be careful with spending. In the focus group, I learned how traditional credit cards punish you with full interest, even if you pay off most of your balance. If FlexCard were available, it would have been a game-changer for me. I'm excited to be part of the early adopters!",
    author: 'Eduardo',
    role: 'Architect, Career Break',
    profile: './people/Eduardo.jpg',
  },
  {
    text: 'Going back to university for an MBA meant no salary for a while. I knew I had to plan my finances carefully, but in our focus group, I realised just how unfair standard credit cards are. If FlexCard existed, I’d have had a way to make partial repayments without getting hit with interest on my full balance. It’s exactly what students and career changers need—I can’t wait for it to go live!',
    author: 'Chris',
    role: 'MBA Student, Career Change',
    profile: './people/Chris.jpg',
  },
  {
    text: 'Working for yourself is amazing, but the unpredictable income makes managing cash flow tricky. In our discussions, it became clear that if FlexCard was around, it would have been the perfect solution—allowing me to adjust my repayments without worrying about crazy interest charges. I love that it actually rewards responsible borrowers. I’ll be one of the first in line when it launches!',
    author: 'Lorena',
    role: 'Gig Worker, Self-Employed',
    profile: './people/Lorena.jpg',
  },
  {
    text: 'Before our focus group, I never really thought about how credit cards work—I just assumed they were all the same. Now I know that most of them are designed to trap you with unfair interest charges. If FlexCard existed when I got my first job, I would have had a much better way to manage my money. I’m proud to be an early supporter!',
    author: 'Pavika',
    role: 'Fresh Graduate, First Job',
    profile: './people/Pavika.jpg',
  },
  {
    text: 'I love the flexibility of working for six months and then taking six months off, but managing cash flow can be tricky. In our focus group, I learned how traditional credit cards charge interest on the full balance—even when you’re making repayments. If FlexCard existed, it would be perfect for people like me who need financial flexibility without being punished with interest. I can’t wait for it to launch!',
    author: 'Henry',
    role: '6-Months Work/6-Months Off Lifestyle',
    profile: './people/Henry.jpg',
  },
  {
    text: 'Working part-time means my income isn’t always the same each month, so I assumed making partial payments on my credit card was enough. In our focus group, I found out the shocking truth—most cards still charge you full interest even when you’re paying off a big chunk. If FlexCard existed, it would finally give people like me a fairer way to manage credit. It’s about time!',
    author: 'Michael',
    role: 'Part-Time Worker, Variable Income',
    profile: './people/Michael.jpg',
  },
  {
    text: 'Running a startup means cash flow can be unpredictable. Some months are great, others are tight. I never realised that most credit cards lock you into a rigid repayment system—making you pay interest on money you’ve already cleared. If FlexCard existed, it would be a game-changer for founders like me. Can’t wait to get my hands on it!',
    author: 'Jovi',
    role: 'Startup Founder, Cash Flow Challenges',
    profile: './people/Jovi.jpg',
  },
  {
    text: 'I love shopping, and I return a lot of stuff. But I never thought twice about how refunds actually work—until our focus group. Turns out, if a refund happens after your statement cycle, it doesn’t count as a payment—meaning you still get charged interest on something you don’t even own anymore! WTF?! If FlexCard existed, I wouldn’t have wasted so much money on interest for things I returned. Now I’m just waiting for it to launch!',
    author: 'Liz',
    role: 'Impulse Buyer, Heavy Month-End Shopping & Refunds',
    profile: './people/Liz.jpg',
  },
  {
    text: "I always buy a few sizes when I shop online—who doesn't? But I never realised that if my refund doesn’t hit before the statement cycle closes, I still get charged interest on it. In our focus group, I found out that even though I returned the items, my credit card acted like I still owed the money. That’s insane! If FlexCard existed, it would finally fix this unfair system. Seriously, I need this card in my life!",
    author: 'Maya',
    role: 'Gen Z, Online Shopper – Size Tester & Frequent Returns',
    profile: './people/Maya.jpg',
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
  {
    question: 'Why the name Flex?',
    answer: (
      <div className="text-gray-700">
        Because credit should bend, not break you. Picture two wallets, facing each other. Or two
        coins, having a chat across the front desk. It's about give and take — a fair way to borrow,
        repay, and move on. Flex means freedom. Flex means choice. Flex means you're in control —
        and you only pay for what you owe. That's it. No tricks, no stress. Just credit that fits
        you.
      </div>
    ),
  },
  {
    question: 'What does Pay For What You Owe actually mean?',
    answer: (
      <div className="text-gray-700">
        Most credit cards make you jump through hoops — you pay some off, but still get charged
        interest on the whole amount. Not with Flex. With Flex, you only pay interest on what's
        left. Let's say you've spent £1,000 and you repay £300. You'll only pay interest on the
        remaining £700. That's it. You also get to choose how much to repay — 10%, 25%, 50%, 75%, or
        even a custom amount — and we'll show you exactly how much interest you'll pay and how much
        you'll save with each option. You stay in control, every step of the way.
      </div>
    ),
  },
  {
    question: 'Can I get Flex now?',
    answer: (
      <div className="text-gray-700">
        Not just yet — but we're working on it! We're getting ready for Phase 1 of our launch, and
        we're doing things properly. That means going through the official FCA application process,
        so we can launch with the right protections in place. Wish us luck — and thanks for being
        part of the journey. If you join the waitlist now, you'll be one of the first to know when
        Flex goes live. No obligations, no pressure.
      </div>
    ),
  },
  {
    question: 'Will joining the waitlist affect my credit score?',
    answer: (
      <div className="text-gray-700">
        Nope. Joining the waitlist is totally safe — there's no credit check and no impact on your
        credit score. We'll only run a check if (and when) you apply later — and even then, we'll
        make everything crystal clear before you go ahead.
      </div>
    ),
  },
  {
    question: 'How is Flex different from other credit cards?',
    answer: (
      <div className="text-gray-700">
        We built Flex because we've made partial repayments, thought we were doing the right thing —
        only to be hit with interest we didn't expect.
        <p className="mt-2">
          So, we listened. We spoke to people like us, and built Flex for all of us — because real
          life isn't one-size-fits-all. And credit shouldn't be either.
        </p>
        <p>Let's break it down:</p>
        <p className="font-bold mt-2">With traditional credit cards:</p>
        <p>
          You spend £1,000 on 8 March. Your statement closes on 10 March. You repay £500 on 20
          March.
        </p>
        <p>Sounds fair enough, right?</p>
        <p>But here's the catch:</p>
        <p>
          You'll still be charged interest on the full £1,000 — not just the £500 you didn't repay.
        </p>
        <p>And not just from your statement date — but from the day you made the purchase.</p>
        <p>That interest keeps compounding daily until you clear the full balance.</p>
        <p>
          So even when you're trying to do the right thing, you can end up paying more than you
          expected.
        </p>
        <p className="font-bold mt-2">Flex works differently — because we think differently:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>You choose how much to repay — 10%, 25%, 50%, 75%, or a custom amount</li>
          <li>We only charge interest on what's left, not your full statement</li>
          <li>
            You'll see exactly how much interest you're being charged — and how much you're saving —
            before you commit
          </li>
          <li>Late fees are capped at £5, not £12 or more</li>
          <li>And yes, we're app-only, built for your phone and your lifestyle</li>
        </ul>
        <p className="mt-2">
          We built Flex to make credit work for real people — not just the system.
        </p>
        <p>No tricks. No compounding traps. Just credit that makes sense.</p>
      </div>
    ),
  },
  {
    question: 'How do you keep my account safe?',
    answer: (
      <div className="text-gray-700">
        <p>Flex is a digital-only credit card, and your security is baked into everything we do.</p>
        <p className="font-semibold mt-2">Here's how we look after you:</p>
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
export const questions = [
  {
    question: 'If you pay off half your credit card bill, how is interest typically charged?',
    answers: ['A) Only on the remaining balance', 'B) On the full statement balance'],
    correctAnswer: 'B) On the full statement balance',
    explaination:
      'Most credit cards charge interest on the <strong>full statement balance</strong> unless it’s repaid in full — even if you’ve made a partial payment.',
  },
  {
    question: 'You return an item after your statement is issued. Does that stop the interest?',
    answers: ['A) Yes – refunds reduce what I owe immediately', `B) No – interest may still apply`],
    correctAnswer: `B) No – interest may still apply`,
    explaination:
      'If a refund is processed outside your statement cycle, interest may still apply — unless the full balance was already paid.',
  },
  {
    question: 'How long could it take to repay £1,000 by only making minimum payments?',
    answers: ['A) 2–3 years', 'B) Over 10 years'],
    correctAnswer: 'B) Over 10 years',
    explaination:
      'Minimum payments barely reduce your balance. You could be paying for a decade — with significant interest added over time.',
  },
  {
    question: 'Do your credit card rewards reflect how you actually spend?',
    answers: ['A) No – I have to change my spending to benefit', 'B) Yes – they’re tailored to me'],
    correctAnswer: 'A) No – I have to change my spending to benefit',
    explaination: `Most rewards are generic and not designed around your real spend. At Flex, our <strong>first 1,500 customers</strong> receive 1% cashback on all purchases for 12 months.*`,
  },
  {
    question:
      'How much could a £1,000 purchase cost in total if you only make minimum payments at 30% APR?',
    answers: ['A) Around £1,400', 'B) Over £3,000'],
    correctAnswer: 'B) Over £3,000',
    explaination:
      'Minimum payments can triple the cost over time — turning a £1,000 purchase into a long-term burden. Minimum payments = maximum trap.',
  },
];
export const features = [
  {
    icon: '/cash.svg',
    title: 'Pay For What You Owe',
    description: `Save interest when you make partial repayments. <br /> Only pay for what you actually owe – not your full statement.`,
  },
  {
    icon: '/percent.svg',
    title: 'Representative 25% APR (Variable)',
    description:
      'We cap your interest rate at 25%. No sneaky jumps. <br /> Subject to credit status.',
  },
  {
    icon: '/cashback.svg',
    title: '1% Cashback on All Purchases (12 Months)',
    description:
      'Earn 1% cashback on every purchase – up to £15/month, <br /> for your first year.*',
  },
  {
    icon: '/credit-limit.svg',
    title: 'Up to £1,200 Credit Limit*',
    description: 'Credit subject to status',
  },
  {
    icon: '/metal-card.svg',
    title: 'Free Metal Card',
    description: 'The first 1,500 customers get our premium metal card – on us.*',
  },
];
