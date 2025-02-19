import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import SwipeableActivity from "@/components/SwipeableActivity"; // if you use Swipeable, else import Activity
// If you're NOT using Swipeable, replace SwipeableActivity with Activity in the renderItem.

export default function Index() {
  const { activities, deleteActivity, deleteAllActivities } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlashList
          data={activities}
          renderItem={({ item }) => (
            // If using swipe, pass deleteActivity:
            <SwipeableActivity activity={item} deleteActivity={deleteActivity} />
            // If NOT using swipe, just do:
            // <Activity activity={item} />
          )}
          estimatedItemSize={50}
        />
      </View>
      <Link style={styles.addButton} href={"/add-activity-screen"} replace>
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
    backgroundColor: "#FEF9E6",
    padding: 16,
    paddingTop: 48,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    flex: 1,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#1ED2AF", // Green
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D00414", // Red
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    textAlign: "center",
  },
});
