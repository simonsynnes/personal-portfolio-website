"use client";

import { SectionName } from "@/library/interfaces";
import React, { useState, createContext, useContext } from "react";

type CurrentSectionContextProviderProps = {
  children: React.ReactNode;
};

type CurrentSectionContextType = {
  currentSection: SectionName;
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const CurrentSectionContext =
  createContext<CurrentSectionContextType | null>(null);

const CurrentSectionContextProvider = ({
  children,
}: CurrentSectionContextProviderProps) => {
  const [currentSection, setCurrentSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // keeping track of this to disable the observer temporarily when a user clicks on a link

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const useCurrentSectionContext = () => {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useCurrentSectionContext must be used within an CurrentSectionContextProvider"
    );
  }

  return context;
};

export default CurrentSectionContextProvider;
