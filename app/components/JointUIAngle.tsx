"use client";

import { FC, useRef, useState } from "react";
import { useAppState } from "../../context/AngleContext";

interface JointUIAngleProps {
  ankle: number;
}

const JointUIAngle: FC<JointUIAngleProps> = ({ ankle }) => {
  const { updateAnkleData } = useAppState();
  const [rotDir, setRotDir] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);
  const angleRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const angle = angleRef.current?.value;
      if (angle !== undefined && angle !== null && rotDir !== null) {
        console.log(ankle, rotDir, angle);
        const response = await fetch(
          `http://localhost:3000/angularcommand/${ankle}-${rotDir}-${angle}`
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
    <div className='flex flex-col border-[1px] border-black bg-zinc-800 w-full h-full  items-center justify-center py-2'>
      <div className='text-white flex flex-col items-center justify-center'>
        <form onSubmit={onSubmit} className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const angle = angleRef.current?.value;
                const angleNumber = Number(angle);
                updateAnkleData(ankle, rotDir, angleNumber);
                setAngle(angleNumber);
              }}
              type='number'
              ref={angleRef}
              min={0}
              placeholder='0°'
              className='rounded-full p-2 text-black pl-5 w-[100px] bg-white'
            />
            <div
              onClick={() => {
                updateAnkleData(ankle, 0, angle);
                setRotDir(0);
              }}
              className={`w-9 h-9 rounded-full text-black flex items-center justify-center font-bold cursor-pointer ${
                rotDir === 0 ? "bg-green-500" : "bg-white"
              }`}
            >
              R
            </div>
            <div
              onClick={() => {
                updateAnkleData(ankle, 1, angle);
                setRotDir(1);
              }}
              className={`w-9 h-9 rounded-full text-black flex items-center justify-center font-bold cursor-pointer ${
                rotDir === 1 ? "bg-green-500" : "bg-white"
              }`}
            >
              L
            </div>
          </div>
          <div className='w-full flex'>
            <button
              type='submit'
              className='w-full p-5 h-10 bg-white rounded-full mt-3 flex items-center justify-center text-black font-bold transition hover:shadow-md hover:shadow-white'
            >
              MOVE joint {ankle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JointUIAngle;
