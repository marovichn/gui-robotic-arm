"use client";

import { FC } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

interface StepCommandProps {
  direction: string;
  size: number;
  ankle: number;
  steps?: number | null;
}

const StepCommand: FC<StepCommandProps> = ({
  direction,
  size,
  ankle,
  steps = 20,
}) => {

  const stepMove = async () => {
    try {
      if (direction === "counterclockwise") {
        const dir = 1;
        const formattedData = `${ankle}-${dir}-${steps}`;
        await fetch(`http://localhost:3000/move/${formattedData}`);
        /* await fetch(`http://192.168.0.19:3000/move/clockwise`); */
      } else {
        const dir = 0;
        const formattedData = `${ankle}-${dir}-${steps}`;
        await fetch(`http://localhost:3000/move/${formattedData}`);
        /* await fetch(`http://192.168.0.19:3000/move/counterclockwise`); */
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {direction == "counterclockwise" ? (
        <div
          onClick={() => {}}
          className='vbg-[#303841] bg-black p-2 rounded-full hover:bg-[#F5F5F5]  hover:cursor-pointer group transition ml-4'
        >
          <CiCircleChevLeft
            className='text-white group-hover:text-black'
            size={size}
          ></CiCircleChevLeft>
        </div>
      ) : (
        <div
          onClick={() => {}}
          className='vbg-[#303841] bg-black p-2 rounded-full hover:bg-[#F5F5F5]  hover:cursor-pointer group transition'
        >
          <CiCircleChevRight
            className='text-white group-hover:text-black'
            size={size}
          ></CiCircleChevRight>
        </div>
      )}
    </div>
  );
};

export default StepCommand;
