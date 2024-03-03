"use client";

import { FC } from "react";
import { useAppState } from "@/context/AngleContext";

interface PositionsUIProps {}

const PositionsUI: FC<PositionsUIProps> = ({}) => {
  const { positions } = useAppState();
  return (
    <div className='flex flex-col w-full h-full items-center justify-center relative pb-12'>
      {positions &&
        positions.map((position, i) => (
          <div
            key={i}
            className='w-full py-3 flex items-center bg-white px-1 border-zinc-800'
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              borderLeft: "1px solid black",
              borderBottom:
                i !== positions.length - 1 ? "none" : "1px solid black",
            }}
          >
            position {i + 1}
          </div>
        ))}
      {!positions ||
        (positions.length === 0 && (
          <div className='mt-3'>No saved positions</div>
        ))}
      <div className='fixed w-[20%] h-14  bg-white border-t-[1px] border-black bottom-0 z-50 flex items-center justify-around p-2 gap-2'>
        <div className='w-full h-full flex items-center justify-center rounded-md bg-zinc-800 text-white hover:bg-zinc-700 cursor-pointer'>
          Run once
        </div>
        <div className='w-full h-full flex items-center justify-center rounded-md bg-zinc-800 text-white hover:bg-zinc-700 cursor-pointer'>
          Loop
        </div>
      </div>
    </div>
  );
};

export default PositionsUI;
