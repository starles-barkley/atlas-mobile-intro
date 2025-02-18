import { DatabaseProvider } from "@/components/DatabaseProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <DatabaseProvider>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen
        name="add-activity-screen"
        options={{headerShown: false}}
        />
      </Stack>
    </DatabaseProvider>
  );
}
