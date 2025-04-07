import React from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { questions } from '../../../constants/constants';
import Button from '../../../../../../components/ui/Button';

function FinalScore({ score }) {
  function generateFinalDecision(score) {
    if (score === 5) {
      return 'You’re financially switched on. You understand the small print most miss. You’d feel right at home with Flex.';
    }
    if (score >= 3) {
      return 'You’re almost there. With a few tweaks, you can take full control. Flex is built for users like us.';
    }
    if (score <= 2) {
      return 'You’re not alone. Most people aren’t told how credit cards really work. Flex is changing that.';
    }
  }

  function handleJoinFlex() {
    window.scrollTo({
      top: document.getElementById('join').offsetTop,
      behavior: 'smooth',
    });
  }
  return (
    <div className="text-center py-10 px-6 flex flex-col justify-center items-center gap-6 bg-white rounded-2xl border border-gray-200 mx-8">
      <div className="flex justify-center items-center bg-[#76D232]/50 p-6 rounded-full mb-2">
        <MdOutlineDone className="text-white text-4xl lg:text-7xl" />
      </div>

      <h2 className="text-3xl font-bold">Quiz Completed!</h2>

      <div className="flex items-center justify-center gap-2 py-3 px-8 bg-blue-50 rounded-full">
        <p className="text-xl font-bold text-blue-600">
          Your Score: {score}/{questions.length}
        </p>
      </div>

      <p className="text-lg max-w-lg">{generateFinalDecision(score)}</p>

      <div className="flex flex-col items-center justify-center gap-6 max-w-md w-full mt-4">
        <Button
          type="secondary"
          label="Join the Waitlist"
          className="w-full sm:w-64 py-3 text-base font-medium"
          onClick={() => handleJoinFlex()}
        />

        <div className="space-y-3 text-gray-600">
          <p className="font-medium">
            Be among the first to access a credit card built around you, not the banks.
          </p>
          <p className="font-bold text-blue-600">Flex: Pay For What You Owe™</p>
          <p className="text-sm italic">A new way to borrow, built for transparency.</p>
        </div>
      </div>
    </div>
  );
}

export default FinalScore;
