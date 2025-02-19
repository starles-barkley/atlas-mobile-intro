import React, { createContext, useContext } from "react";
import { useActivities } from "@/hooks/useActivities";

export const ActivitiesContext = createContext<any>(null);

export function ActivitiesProvider({ children }: { children: React.ReactNode }) {
  const { getActivities, activities, insertActivity, deleteActivity, deleteAllActivities } = useActivities();

  const value = { getActivities, activities, insertActivity, deleteActivity, deleteAllActivities };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
}

// Add this custom hook export:
export function useActivitiesContext() {
  const context = useContext(ActivitiesContext);
  if (!context) {
    throw new Error("useActivitiesContext must be used within an ActivitiesProvider");
  }
  return context;
}
