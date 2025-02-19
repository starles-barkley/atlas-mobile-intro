import { reload } from "expo-router/build/global-state/routing";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

export type ActivityType = {
  id: number;
  steps: number;
  date: number;
};

export function useActivities() {
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const db = useSQLiteContext();

  function getActivities() {
    return db.getAllSync<ActivityType>("SELECT * FROM activities");
  }

  function insertActivity(steps: number, date: Date) {
    db.execSync(
      `INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`
    );
    reload();
  }

  function deleteAllActivities() {
    db.execSync("DELETE FROM activities;");
    reload();
  }

  function reload() {
    const data = getActivities();
    setActivities(data);
  }

  useEffect(() => {
    reload();
  }, []);

  return { getActivities, activities, insertActivity, deleteAllActivities };
}
