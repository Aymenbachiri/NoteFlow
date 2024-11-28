import { Stack } from "expo-router";
import "../../global.css";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeProvider, useTheme } from "../lib/providers/ThemeProvider";

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
