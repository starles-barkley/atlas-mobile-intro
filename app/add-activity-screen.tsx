import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddActivityScreen() {
  const [stepsText, setStepsText] = useState("");
  const { insertActivity } = useActivitiesContext();

  const handleAddActivity = () => {
    const steps = parseInt(stepsText, 10);
    if (!isNaN(steps)) {
      insertActivity(steps, new Date());
      router.push("/");
    } else {
      console.warn("Please enter a valid number for steps");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Activity</Text>
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
    backgroundColor: "#FEF9E6",
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
    textAlign: "center",
  },
});
