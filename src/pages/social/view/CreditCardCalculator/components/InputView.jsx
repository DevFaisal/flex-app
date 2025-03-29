import React from "react";
import Tooltip from "../../../../../components/ui/Tooltip";
import { MdQuestionMark } from "react-icons/md";

const InputView = ({ title, symbol, amount, tooltipText }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-sm py-2 text-[#21272A] text-nowrap">{title}</h2>
          {tooltipText && <Tooltip Icon={<MdQuestionMark size={12} />} text={tooltipText} />}
        </div>
        <h2 className="bg-[#E4EFFC] px-4 py-3 rounded-xl text-xl font-bold">
          <span className="text-secondary">{symbol}</span>
          {amount}
        </h2>
      </div>
    </div>
  );
};

export default InputView;
