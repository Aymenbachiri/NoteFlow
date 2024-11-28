import "../../global.css";
import { Stack } from "expo-router";
import { ThemeProvider } from "../lib/providers/ThemeProvider";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerRight: () => <ThemeSwitcher />,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
