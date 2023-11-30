import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { React, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants"
// const CLERK_PUBLISHABLE_KEY = process.env.EXPO_CLERK_PUBLISHABLE_KEY;
// console.log(CLERK_PUBLISHABLE_KEY, "log")
//  manage token
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return;
    }
  },
};
const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {

    if (!isLoaded) return;

    const inTabGroup = segments[0] === "(auth)";
    
    if (isSignedIn && inTabGroup) {
      router.replace("(/tabs)");
    } else if (!isSignedIn) {
      router.replace("/login");
    }

  }, [isSignedIn]);
  return <Slot />;
};

const Root = () => {
  return (
    <ClerkProvider
      publishableKey={"pk_test_Y2FyZWZ1bC1mb3dsLTI2LmNsZXJrLmFjY291bnRzLmRldiQ"}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
};

export default Root;
