import { MyView } from "../components/common/MyView";
import { MyText } from "../components/common/MyText";
import { H1 } from "../components/common/H1";
import { H2 } from "../components/common/H2";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { useTheme } from "../lib/providers/ThemeProvider";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const { colorScheme, toggleColorScheme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <MyView className="justify-center flex-1 items-center dark:bg-black">
        <MyText className="text-green-600">
          Edit app/index.tsx to edit this screen.ss
        </MyText>
        <H1>hello</H1>
        <H2>world</H2>
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity onPress={toggleColorScheme}>
            <Feather
              name={colorScheme === "dark" ? "sun" : "moon"}
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </MyView>
    </>
  );
}
