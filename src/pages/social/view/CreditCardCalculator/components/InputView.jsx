import React from 'react';
import Tooltip from '../../../../../components/ui/Tooltip';
import { MdQuestionMark } from 'react-icons/md';

const InputView = ({ title, symbol, amount, tooltipText }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <p className="py-2 minute text-[#21272A] text-nowrap">{title}</p>
          {tooltipText && <Tooltip Icon={<MdQuestionMark size={12} />} text={tooltipText} />}
        </div>
        <h5 className="bg-[#E4EFFC] px-4 py-2 md:py-2.5 rounded-xl font-bold truncate">
          <span className="text-secondary">{symbol}</span>
          {amount}
        </h5>
      </div>
    </div>
  );
};

export default InputView;
