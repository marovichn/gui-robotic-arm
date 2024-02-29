"use client"

import { FC, useRef, useState } from "react";

interface JointUIAngleProps {ankle:number}

const JointUIAngle: FC<JointUIAngleProps> = ({ankle}) => {
  const [rotDir, setRotDir] = useState<number | null>(null); // null for not selected, 1 for clockwise, 0 for counterclockwise
  const angleRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const angle = angleRef.current?.value;
      if (angle !== undefined && angle !== null && rotDir !== null) {
        const response = await fetch(
          `http://localhost:3000/angularcommand/${rotDir}-${angle}`
        );
        if (response.ok) {
          // Request successful, handle response if needed
          console.log("Data sent successfully");
        } else {
          // Request failed
          console.error("Failed to send data");
        }
      } else {
        console.error("Angle or rotation direction is not defined");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='flex flex-col border-[1px] border-black bg-zinc-800 w-full h-full  items-center justify-center'>
      <div className='text-white flex flex-col items-center justify-center'>
        <form onSubmit={onSubmit} className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <input
              type='number'
              ref={angleRef}
              min={0}
              className='rounded-full p-2 text-black pl-5 w-[100px] bg-white'
            />
            <div
              onClick={() => setRotDir(0)}
              className={`w-9 h-9 rounded-full text-black flex items-center justify-center font-bold cursor-pointer ${
                rotDir === 0 ? "bg-green-500" : "bg-white"
              }`}
            >
              R
            </div>
            <div
              onClick={() => setRotDir(1)}
              className={`w-9 h-9 rounded-full text-black flex items-center justify-center font-bold cursor-pointer ${
                rotDir === 1 ? "bg-green-500" : "bg-white"
              }`}
            >
              L
            </div>
          </div>
          <button className='w-full p-5 h-10 bg-white rounded-full mt-3 flex items-center justify-center text-black font-bold transition hover:shadow-md hover:shadow-white'>
            MOVE joint {ankle}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JointUIAngle;
