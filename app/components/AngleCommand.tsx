"use client";

import { useRouter } from "next/navigation";
import { FC, useRef, useState } from "react";

interface AngleCommandProps {}

const AngleCommand: FC<AngleCommandProps> = ({}) => {
  const [rotDir, setRotDir] = useState(0); // 1 for clockwise, -1 for counterclockwise
  /* const router = useRouter(); */
  const angleRef = useRef<HTMLInputElement>(null);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const angle = angleRef.current?.value;
      if (angle !== undefined && angle !== null) {
        /* router.push(`http://localhost:3000/angularcommand/${rotDir}-${angle}`); */
        /* const response = await fetch(
          `http://192.168.0.19:3000/angularcommand/${rotDir}-${angle}`
        ); */
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
        console.error("Angle is not defined");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='flex flex-col bg-black max-sm:w-[225px] sm:w-[350px] p-5 pr-7 py-8 rounded-lg items-center justify-center'>
      <div className='items-center justify-center text-white flex flex-col'>
        <h1 className='font-bold text-xl mb-5'>Angle Command</h1>
        <form onSubmit={onSubmit} className='flex flex-col gap-y-2'>
          <label className='ml-6'>Angle:</label>
          <div className='flex items-center max-sm:gap-x-2 sm:gap-x-5'>
            <input
              type='number'
              ref={angleRef}
              min={0}
              className='rounded-full p-2 text-black pl-5 w-[100px]'
            />
            <div
              onClick={() => setRotDir(0)}
              className='w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold hover:cursor-pointer'
              style={{
                background: rotDir === 0 ? "#98EECC" : "",
                color: rotDir === 0 ? "white" : "",
              }}
            >
              R
            </div>
            <div
              onClick={() => setRotDir(1)}
              className='w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold hover:cursor-pointer'
              style={{
                background: rotDir === 1 ? "#98EECC" : "",
                color: rotDir === 1 ? "white" : "",
              }}
            >
              L
            </div>
          </div>
          <button className='w-full p-5 h-10 bg-white rounded-full mt-3 flex items-center justify-center text-black hover:cursor-pointer font-bold transition hover:shadow-md hover:shadow-white'>
            RUN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AngleCommand;
