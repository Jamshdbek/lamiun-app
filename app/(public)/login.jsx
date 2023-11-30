import { useOAuth, useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import { Pressable, TextInput, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

   
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  const [emailAddress, setEmailAddress] = useState("");
  const { signIn, setActive, isLoaded } = useSignIn();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="email"
        value={emailAddress}
        onChangeText={setEmailAddress}
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />
      <Button onPress={onSignInPress} title="Login" color={"#6c47ff"}></Button>

      <Button
      title="Sign in with Google"
      onPress={onPress}
    />

      <Link href="/register" asChild>
        <Pressable style={styles.button}>
          <Text>Forgot password?</Text>
        </Pressable>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    marginTop:20,
    alignItems: "center",
  },
});

export default Login;
