import { ScrollView, StatusBar } from "react-native";
import { useTheme } from "../lib/providers/ThemeProvider";
import Body from "../components/Body";
import Features from "../components/Features";

export default function Index() {
  const { colorScheme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView className="flex-1 dark:bg-black bg-white">
        <Body />
        <Features />
      </ScrollView>
    </>
  );
}
