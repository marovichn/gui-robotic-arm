"use client";

import { FC, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

interface CommandButtonProps {
  direction: string;
  size: number;
}

const CommandButton: FC<CommandButtonProps> = ({ direction, size }) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowLeft") {
        arrowStepMove("clockwise");
      } else if (event.key === "ArrowRight") {
        arrowStepMove("counterclockwise");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const arrowStepMove = async (direction: string) => {
    try {
      const res = await fetch(`http://localhost:3000/movekey/${direction}`);
      console.log(res);
      /* await fetch(`http://192.168.0.19:3000/movekey/${direction}`); */
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const stepMove = async () => {
    try {
      if (direction === "counterclockwise") {
        await fetch(`http://localhost:3000/move/clockwise`);
        /* await fetch(`http://192.168.0.19:3000/move/clockwise`); */
      } else {
        await fetch(`http://localhost:3000/move/counterclockwise`);
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
          onClick={stepMove}
          className='vbg-[#303841] bg-black p-10 rounded-l-full hover:bg-[#F5F5F5]  hover:cursor-pointer group transition'
        >
          <CiCircleChevLeft
            className='text-white group-hover:text-black'
            size={size}
          ></CiCircleChevLeft>
        </div>
      ) : (
        <div
          onClick={stepMove}
          className='vbg-[#303841] bg-black p-10 rounded-r-full hover:bg-[#F5F5F5]  hover:cursor-pointer group transition'
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

export default CommandButton;
