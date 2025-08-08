"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useState, useContext } from "react";

type ReservationContextType = {
  range: { from: any; to: any };
  setRange: React.Dispatch<React.SetStateAction<{ from: any; to: any }>>;
  resetRange: () => void;
};

const ReservationContext = createContext<ReservationContextType>({
  range: { from: undefined, to: undefined },
  setRange: () => {},
  resetRange: () => {},
});

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }: any) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
