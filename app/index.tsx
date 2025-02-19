import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { useActivities } from "@/hooks/useActivities";
import { Link, router } from "expo-router";
import { act } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Activity } from "@/components/Activity";

export default function Index() {
  const { activities } = useActivitiesContext();
  return (
    <View style={styles.container}>
      <View style={styles.list}>
       <FlashList
          renderItem={({ item }) => (<Activity activity={item} />)}
          data={activities}
          estimatedItemSize={50}
        />
      </View>
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
  list: {

  }
})