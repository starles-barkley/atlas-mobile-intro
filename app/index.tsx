// index.tsx
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import SwipeableActivity from "@/components/SwipeableActivity";

export default function Index() {
  const { activities, deleteActivity, deleteAllActivities } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          renderItem={({ item }) => (
            <SwipeableActivity activity={item} deleteActivity={deleteActivity} />
          )}
          data={activities}
          estimatedItemSize={50}
        />
      </View>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
      <Pressable style={styles.deleteButton} onPress={deleteAllActivities}>
        <Text style={styles.buttonText}>Delete All Activities</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    textAlign: "center",
    marginTop: 16,
  },
  deleteButton: {
    backgroundColor: "#D00414",
    padding: 16,
    width: "100%",
    textAlign: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
