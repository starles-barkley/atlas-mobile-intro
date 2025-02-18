import { ActivitiesProvider } from "@/components/ActivitiesProvider";
import { DatabaseProvider } from "@/components/DatabaseProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <Stack>
          <Stack.Screen name="index" options={{headerShown: false}}/>
          <Stack.Screen
          name="add-activity-screen"
          options={{headerShown: false}}
          />
        </Stack>
      </ActivitiesProvider>
    </DatabaseProvider>
  );
}
