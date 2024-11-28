import "../../global.css";
import { Stack } from "expo-router";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Providers from "../lib/providers/Providers";

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerRight: () => <ThemeSwitcher />,
          }}
        />
      </Stack>
    </Providers>
  );
}
