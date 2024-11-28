import { MyView } from "../components/common/MyView";
import { MyText } from "../components/common/MyText";
import { H1 } from "../components/common/H1";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { useTheme } from "../lib/providers/ThemeProvider";
import { Entypo } from "@expo/vector-icons";
import Body from "../components/Body";

export default function Index() {
  const { colorScheme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <ScrollView className="flex-1 dark:bg-black">
        <Body />
      </ScrollView>
    </>
  );
}
