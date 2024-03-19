"use client";

import { FC } from "react";
import { useAppState } from "@/context/AngleContext";
import GripperUIAngle from "./GripperUIAngle";

interface PositionsUIProps {}
interface AnkleData {
  rotDir: number;
  angle: number;
}
interface Position {
  key: number;
  value: { [key: string]: AnkleData };
}

const PositionsUI: FC<PositionsUIProps> = ({}) => {
  const { positions } = useAppState();

  const handleRun = async (ankleData: { [key: string]: AnkleData }) => {
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
            }, Number(key) * 500);
          });
        }
      }
    }
  };

  const runOnce = () => {
    const runAllPositions = async (positions: Position[]) => {
      for (const position of positions) {
        const { key, value } = position;
        for (const subKey in value) {
          if (Object.hasOwnProperty.call(value, subKey)) {
            const ankleData: { [key: string]: AnkleData } = {}; // Define ankleData with correct type
            ankleData[subKey] = value[subKey]; // Assign ankleData for the current subKey

            await handleRun(ankleData);
            console.log("RUnED")
          }
        }
        await new Promise((resolve) => setTimeout(resolve, key * 500)); // Delay between positions
      }
    };
    const modifyAndRunAllPositions = async (positions: Position[]) => {
      for (let i = positions.length - 1; i >= 0; i--) {
        const { key, value } = positions[i];
        const modifiedAnkleData: { [key: string]: AnkleData } = {}; // Define modifiedAnkleData with correct type

        for (const subKey in value) {
          if (Object.hasOwnProperty.call(value, subKey)) {
            const ankleData = value[subKey];
            const modifiedRotDir = ankleData.rotDir === 0 ? 1 : 0;
            modifiedAnkleData[subKey] = {
              ...ankleData,
              rotDir: modifiedRotDir,
            };
          }
        }

        await handleRun(modifiedAnkleData);
        await new Promise((resolve) => setTimeout(resolve, key * 500));
      }
    };

    // Usage
    runAllPositions(positions)
      .then(() => modifyAndRunAllPositions(positions))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className='flex flex-col w-full h-full items-center justify-center relative pb-12'>
      <div className='h-36 bg-green-500 flex items-center justify-center w-[20%] fixed top-14 border-[1px] border-black'>
        <GripperUIAngle ankle={6}></GripperUIAngle>
      </div>

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
              marginTop: i === 0 ? "144px" : "0",
            }}
          >
            position {i + 1}
          </div>
        ))}
      {!positions ||
        (positions.length === 0 && (
          <div className='mt-40'>No saved positions</div>
        ))}
      <div className='fixed w-[20%] h-14  bg-white border-t-[1px] border-black bottom-0 z-50 flex items-center justify-around p-2 gap-2'>
        <div
          onClick={runOnce}
          className='w-full h-full flex items-center justify-center rounded-md bg-zinc-800 text-white hover:bg-zinc-700 cursor-pointer'
        >
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
