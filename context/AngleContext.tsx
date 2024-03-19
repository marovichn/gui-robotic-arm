"use client"

// Create a new file, e.g., AppStateContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AnkleData {
  rotDir: number;
  angle: number;
}

interface Position {
  key: number;
  value: { [key: number]: AnkleData };
}

interface AppState {
  key: number;
  positions: Position[];
  ankleData: { [key: number]: AnkleData };
  updateAnkleData: (ankle: number, rotDir: number, angle: number) => void;
  savePosition: (ankleData: { [key: number]: AnkleData }) => void;
}

// Create a context to hold the global state
const AppStateContext = createContext<AppState>({
  key: 0,
  positions: [],
  ankleData: {
    1: { rotDir: 0, angle: 0 },
    2: { rotDir: 0, angle: 0 },
    3: { rotDir: 0, angle: 0 },
    4: { rotDir: 0, angle: 0 },
    5: { rotDir: 0, angle: 0 },
    6: { rotDir: 0, angle: 0 },
  },
  updateAnkleData: () => {},
  savePosition: () => {},
});

// Create a provider component to wrap your app
export const AppStateProvider = ({
  children,
}:{children: React.ReactNode}) => {
  const [key, setKey] = useState<number>(0);
  const [ankleData, setAnkleData] = useState<{ [key: number]: AnkleData }>({
    1: { rotDir: 0, angle: 0 },
    2: { rotDir: 0, angle: 0 },
    3: { rotDir: 0, angle: 0 },
    4: { rotDir: 0, angle: 0 },
    5: { rotDir: 0, angle: 0 },
    6: { rotDir: 0, angle: 0 },
  });
  const [positions, setPositions] = useState<Position[]>([]);

  const savePosition = (ankleData: { [key: number]: AnkleData }) => {
    setPositions((prevPosData: Position[]) => {
      return [
        ...prevPosData,
        {
          key: key + 1,
          value: ankleData,
        },
      ];
    });
    setKey((p) => p + 1);
    console.log(ankleData)
  };

  const updateAnkleData = (ankle: number, rotDir: number, angle: number) => {
    // Update ankle data with the new angle and rotation direction
    setAnkleData((prevAnkleData) => ({
      ...prevAnkleData,
      [ankle]: { rotDir, angle },
    }));
  };

  return (
    <AppStateContext.Provider
      value={{ key, positions, ankleData, updateAnkleData, savePosition }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to access the state and update functions
export const useAppState = () => useContext(AppStateContext);
