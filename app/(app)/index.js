import { useRouter } from "expo-router";
import React from "react";
import { View, Button, StyleSheet } from "react-native";
const Index = () => {
  const router = useRouter();
  let token = true;
  return (
    <View style={styles.container}>
      <Button onPress={() => router.push("/(tabs)")} title="Login"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
export default Index;
