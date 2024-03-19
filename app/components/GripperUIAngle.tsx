"use client";

import { FC, useRef, useState } from "react";
import { useAppState } from "../../context/AngleContext";
import { MdCloseFullscreen } from "react-icons/md";
import { MdOpenInFull } from "react-icons/md";

interface GripperUIAngleProps {
  ankle: number;
}

const GripperUIAngle: FC<GripperUIAngleProps> = ({ ankle }) => {
  const { updateAnkleData } = useAppState();
  const [angle, setAngle] = useState<number>(0);
  const angleRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const angle = angleRef.current?.value;
      if (angle !== undefined && angle !== null) {
        console.log(ankle, angle);
        const response = await fetch(
          `http://localhost:3000/angularcommand/${ankle}-0-${angle}`
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
  const gripperSubmit = async (angle:number) => {
    console.log("running " + angle)
    try {
      if (angle !== undefined && angle !== null) {
        const response = await fetch(
          `http://localhost:3000/angularcommand/${ankle}-0-${angle}`
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
    <div className='flex flex-col  w-full h-full  items-center justify-center py-2'>
      <div className='text-white flex flex-col items-center justify-center'>
        <form onSubmit={onSubmit} className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                const angle = angleRef.current?.value;
                const angleNumber = Number(angle);
                updateAnkleData(ankle, 0, angleNumber);
                setAngle(angleNumber);
              }}
              type='number'
              ref={angleRef}
              min={0}
              placeholder='0°'
              className='rounded-full p-2 text-black pl-5 w-[150px] bg-white'
            />
            <div className="rounded-full text-black p-3 bg-white flex-shrink-0 cursor-pointer"><MdCloseFullscreen size={20} onClick={()=>gripperSubmit(0)}></MdCloseFullscreen></div>
            <div className="rounded-full text-black p-3 bg-white flex-shrink-0 cursor-pointer"><MdOpenInFull size={20} onClick={()=>gripperSubmit(90)}></MdOpenInFull></div>
          </div>
          <div className='w-full flex'>
            <button
              type='submit'
              className='w-full p-5 h-10 bg-white rounded-full mt-3 flex items-center justify-center text-black font-bold transition hover:shadow-md hover:shadow-white'
            >
              MOVE Gripper
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GripperUIAngle;
