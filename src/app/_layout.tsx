import "../../global.css";
import { Stack } from "expo-router";
import Providers from "../lib/providers/Providers";
import HeaderRight from "../components/HeaderRight";

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerTitle: "Profile",
          }}
        />
        <Stack.Screen
          name="(auth)/signup"
          options={{
            headerTitle: "Sign Up",
          }}
        />
        <Stack.Screen
          name="posts/[id]"
          options={{
            headerTitle: "Post",
          }}
        />
      </Stack>
    </Providers>
  );
}
