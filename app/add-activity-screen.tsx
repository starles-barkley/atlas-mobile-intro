import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AddActivityScreen() {
  return (
    <View>
      <Text>Add Activity Screen</Text>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go Back</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
  backgroundColor: "#D00414",
  padding: 16,
  width: "100%",
  textAlign: "center",
},
  buttonText: {
  color: "white",
},
})