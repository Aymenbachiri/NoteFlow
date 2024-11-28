import { AntDesign, Entypo } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { H1 } from "./common/H1";
import { MyText } from "./common/MyText";
import { useTheme } from "../lib/providers/ThemeProvider";
import { Link } from "expo-router";
import { H2 } from "./common/H2";

export default function Body() {
  const { colorScheme } = useTheme();

  return (
    <>
      <View className="mt-4 p-1">
        <Entypo
          name="feather"
          size={24}
          color={colorScheme === "light" ? "#000" : "#fff"}
        />
      </View>
      <H1 className="mt-4 p-1">Unleash your creativity with NoteFlow</H1>
      <MyText className="mt-4 p-1">
        Step into a world of thoughts, ideas, and inspiration. Whether you're
        jotting down personal reflections or sharing valuable wisdom, NoteFlow
        is your go-to platform for capturing and exploring insights that spark
        your imagination.
      </MyText>

      <Link
        href="/posts"
        className="dark:text-white flex flex-row mx-auto items-center text-center mt-3"
      >
        <H2>Discover Posts</H2>
        <AntDesign
          name="arrowright"
          size={24}
          color={colorScheme === "light" ? "#000" : "#fff"}
        />
      </Link>

      <Image
        source={require("../../assets/images/hand-holding-black-pen_1384-178.png")}
        className="mt-4 p-1 w-[400px] h-[360px] m-auto rounded-md"
      />
    </>
  );
}
