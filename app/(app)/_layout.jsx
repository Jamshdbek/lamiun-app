import { Redirect, Stack, useRouter } from "expo-router";

export default function AppLayout() {
  const token = true;
  const router = useRouter()
  //   if (isLoading) {
  //     return <Text>Loading...</Text>;
  //   }

  if (token) {
    // return <Redirect href="/register" />;
    router.push('/register')
  } else {
    return <Stack />;
  }
}
