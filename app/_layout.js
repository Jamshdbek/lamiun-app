import { Stack } from "expo-router";
import { useEffect } from "react";

const Layout = () => {
  const token = true;
  useEffect(() => {}, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack>
  );
};

export default Layout;
