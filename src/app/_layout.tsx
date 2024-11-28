import { Stack } from "expo-router";
import "../../global.css";
import { ThemeProvider } from "../lib/providers/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Index",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
