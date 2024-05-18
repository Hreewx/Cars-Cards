import React, { ReactNode, createContext, useState } from "react";
import { Car } from "../../components/CarsBox";

type CarsContextType = {
  carsState: Car[];
  setCarsState: React.Dispatch<React.SetStateAction<Car[]>>;
};

export const CarsContext = createContext<CarsContextType | undefined>(
  undefined
);

export const CarsProvider = ({ children }: { children: ReactNode }) => {
  const [carsState, setCarsState] = useState<Car[]>([]);

  return (
    <CarsContext.Provider value={{ carsState, setCarsState }}>
      {children}
    </CarsContext.Provider>
  );
};
