import { useActivities } from "@/hooks/useActivities";
import { createContext, useContext } from "react";

const ActivitiesContext = createContext({});

export const useActivitiesContext = () => useContext(ActivitiesContext);

export function ActivitiesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activities } = useActivities();
  return (
    <ActivitiesContext.Provider value={{ activities }}>
      {children}
    </ActivitiesContext.Provider>
  );
}