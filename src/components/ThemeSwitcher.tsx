import { View, TouchableOpacity } from "react-native";
import { useTheme } from "../lib/providers/ThemeProvider";
import { Feather } from "@expo/vector-icons";

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useTheme();

  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity onPress={toggleColorScheme}>
        <Feather
          name={colorScheme === "dark" ? "sun" : "moon"}
          size={24}
          color={"#000"}
        />
      </TouchableOpacity>
    </View>
  );
}
