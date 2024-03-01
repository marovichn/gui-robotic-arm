import { FC } from "react";

interface ActionButtonsProps {}

const ActionButtons: FC<ActionButtonsProps> = ({}) => {
  return (
    <div className='w-full h-[10%] bg-zinc-800 p-2 flex-shrink-0 '>
      <div className='bg-white w-full h-full rounded-lg flex items-center justify-between flex-shrink-0'>
        <div className='flex items-center justify-center w-[30%] font-bold'>
          RUN
        </div>
        <div className='w-[0.5%] bg-zinc-800 h-full'></div>
        <div className='flex items-center justify-center w-[30%] font-bold'>
          STOP
        </div>
        <div className='w-[0.5%] bg-zinc-800 h-full'></div>
        <div className='flex items-center justify-center w-[39%] font-bold'>
          SAVE ANGLE POSITIONS
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
