"use client";

import { FC } from "react";
import { useAppState } from "../../context/AngleContext";
import toast from "react-hot-toast";

interface ActionButtonsProps {}

const ActionButtons: FC<ActionButtonsProps> = ({}) => {
  const { ankleData, savePosition } = useAppState();

  const handleRun = async () => {
    console.log(ankleData);
    for (const key in ankleData) {
      if (Object.hasOwnProperty.call(ankleData, key)) {
        const item = ankleData[key];
        if (
          item.angle !== undefined &&
          item.angle !== null &&
          item.rotDir !== null
        ) {
          await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(
              `http://localhost:3000/angularcommand/${key}-${item.rotDir}-${item.angle}`
            );
            console.log(key, item.rotDir, item.angle);
            if (response.ok) {
              console.log("Data sent successfully");
              resolve("Data sent successfully"); 
            } else {
              console.error("Failed to send data");
              reject("Failed to send data"); 
            }
          } catch (error) {
            console.error("Error:", error);
            reject(error); // Reject the promise if there is an error during fetch
          }
        }, Number(key) * 1000);
      });
    }}
    }
  };

  const handleStop = () => {
    //stop command
  };

  const handleSavePositions = () => {
    toast.success("Position successfully saved");
    savePosition(ankleData);
  };

  return (
    <div className='w-full h-[10%] bg-zinc-800 p-2 flex-shrink-0 flex gap-1'>
      <div
        className='bg-white w-[28%] h-full rounded-lg flex items-center justify-between flex-shrink-0 hover:bg-zinc-700 hover:text-white cursor-pointer'
        onClick={handleRun}
      >
        <div className='flex items-center justify-center w-full font-bold'>
          RUN
        </div>
      </div>
      <div className='w-[0.5%] bg-zinc-800 h-full'></div>
      <div
        className='bg-white w-[28%] h-full rounded-lg flex items-center justify-between flex-shrink-0 hover:bg-zinc-700 hover:text-white cursor-pointer'
        onClick={handleStop}
      >
        <div className='flex items-center justify-center w-full font-bold'>
          STOP
        </div>
      </div>
      <div className='w-[0.5%] bg-zinc-800 h-full'></div>
      <div
        className='bg-white w-[40%] h-full rounded-lg flex items-center justify-between flex-shrink-0 hover:bg-zinc-700 hover:text-white cursor-pointer'
        onClick={handleSavePositions}
      >
        <div className='flex items-center justify-center w-full font-bold'>
          SAVE ANGLE POSITIONS
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
