// SwipeableActivity.tsx
import { Alert, StyleSheet, Text, View } from "react-native";
import { Activity } from "./Activity";
import { Swipeable } from "react-native-gesture-handler";

export default function SwipeableActivity({
  activity,
  deleteActivity,
}: {
  activity: any;
  deleteActivity: (id: number) => void;
}) {
  return (
    <View key={activity.id} style={styles.container}>
      <Swipeable
        renderLeftActions={() => <Action text="Delete" />}
        renderRightActions={() => <Action text="Delete" />}
        onSwipeableOpen={() => {
          Alert.alert("Delete Activity?", undefined, [
            { text: "Cancel", style: "cancel" },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => deleteActivity(activity.id),
            },
          ]);
        }}
      >
        <Activity activity={activity} />
      </Swipeable>
    </View>
  );
}

export const Action = ({ text }: { text: string }) => {
  return (
    <View style={styles.actionView}>
      <Text style={styles.actionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  actionView: {
    backgroundColor: "#D00414",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    padding: 10,
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
  },
});
