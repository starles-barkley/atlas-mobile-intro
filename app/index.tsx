import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Pressable onPress={() => Alert.alert("Clicked!")}>
        <Text>Click Me</Text>
      </Pressable>
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
  }
})