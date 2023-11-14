import { useRouter } from "expo-router";
import { View, Button, StyleSheet } from "react-native";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import * as Random from "expo-random";
// import { AuthSession } from "expo-auth-session";
const Index = () => {
  const router = useRouter();
  // const signInWithGoogleAsync = async () => {
  //   alert("hi")
  // };
  let token = true;
 if(token){
  // return router.push("/(tabs)/home")
 }
  return (
    <View style={styles.container}>
      {/* <Button title="Sign in with Google" onPress={signInWithGoogleAsync} /> */}
      <Button
        onPress={() => router.push("/(tabs)/home")}
        title="Login"
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth:"20%",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
export default Index;
