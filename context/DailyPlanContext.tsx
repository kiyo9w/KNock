import React, { createContext, useState, ReactNode } from 'react';

type DailyPlanContextType = {
  showDailyPlan: boolean;
  toggleDailyPlan: () => void;
};

export const DailyPlanContext = createContext<DailyPlanContextType>({
  showDailyPlan: false,
  toggleDailyPlan: () => {},
});

type DailyPlanProviderProps = {
  children: ReactNode;
};

export const DailyPlanProvider = ({ children }: DailyPlanProviderProps) => {
  const [showDailyPlan, setShowDailyPlan] = useState(false);

  const toggleDailyPlan = () => {
    setShowDailyPlan((prev) => !prev);
  };

  return (
    <DailyPlanContext.Provider value={{ showDailyPlan, toggleDailyPlan }}>
      {children}
    </DailyPlanContext.Provider>
  );
};
