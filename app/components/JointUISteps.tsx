"use client";

import React, { FC, useRef, useState } from "react";
import StepCommand from "./StepCommand";

interface JointUIProps {
  ankle: number;
}

const JointUISteps: FC<JointUIProps> = ({ ankle }) => {
  const [steps, setSteps] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSteps = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      setSteps(Number(inputValue));
    }
  };

  return (
    <div className='border-[1px] border-black w-full h-full flex flex-col items-center justify-center'>
      <div className='flex w-full justify-between my-1 items-center gap-3 p-2'>
        <StepCommand
          direction='counterclockwise'
          size={30}
          ankle={ankle}
          steps={steps}
        />
        <StepCommand
          direction='clockwise'
          size={30}
          ankle={ankle}
          steps={steps}
        />
        <form className='flex items-center justify-center w-full gap-x-2 '>
          <div className='flex flex-col items-center max-sm:gap-x-2 sm:gap-x-5 gap-y-2 p-3 bg-zinc-800 rounded-lg'>
            <label className="text-white">Steps:</label>
            <input
              ref={inputRef}
              onInput={updateSteps}
              type='number'
              placeholder="0"
              min={0}
              className='rounded-full p-2 text-black pl-5 w-[100px]'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JointUISteps;
