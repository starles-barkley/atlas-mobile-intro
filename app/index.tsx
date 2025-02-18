import { useActivities } from "@/hooks/useActivities";
import { Link, router } from "expo-router";
import { act } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { activities } = useActivities();
  return (
    <View style={styles.container}>
      {activities.map((activity) => (
        <Text key={activity.id}>
          {activity.steps} steps on{" "}
          {new Date(activity.date).toLocaleDateString()}
        </Text>
      ))}
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  },
})