import { useRouter } from "expo-router";
import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { createUserAccount } from "../lib/appwrite/api";
const Index = () => {
  const router = useRouter();
  const submit = React.useCallback(async (values) => {
    const newUser = await createUserAccount(values);
    console.log(newUser, "user");
  }, []);
  return (
    <View style={styles.container}>
       
      <Button onPress={submit()} title="Submit"></Button>
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
