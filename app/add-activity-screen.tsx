import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
  // Use a string state for text input
  const [stepsText, setStepsText] = useState("");
  const { insertActivity } = useActivitiesContext();

  const handleAddActivity = () => {
    // Convert to number before inserting
    const steps = parseInt(stepsText, 10);
    if (!isNaN(steps)) {
      insertActivity(steps, new Date());
      router.push("/");
    } else {
      // Optionally, handle the case where conversion fails
      console.warn("Please enter a valid number for steps");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Activity Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Steps"
        keyboardType="number-pad"
        value={stepsText}
        onChangeText={setStepsText}
      />
      <Pressable style={styles.addButton} onPress={handleAddActivity}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go Back</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    marginBottom: 16,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#D00414",
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
