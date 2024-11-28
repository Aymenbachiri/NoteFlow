import {
  AntDesign,
  Feather,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import { H2 } from "./common/H2";
import { useTheme } from "../lib/providers/ThemeProvider";
import { MyText } from "./common/MyText";

export default function Features() {
  const { colorScheme } = useTheme();

  const features = [
    {
      title: "Seamless Writing Tools",
      description:
        "Effortlessly draft and edit blog posts with our intuitive editor designed to boost your productivity.",
      icon: (
        <FontAwesome
          name="pencil"
          size={24}
          color={colorScheme === "dark" ? "#fff" : "#000"}
        />
      ),
    },
    {
      title: "Real-Time Preview",
      description:
        "Instantly see how your content will look on your blog with our real-time preview feature.",
      icon: (
        <Feather
          name="eye"
          size={24}
          color={colorScheme === "dark" ? "#fff" : "#000"}
        />
      ),
    },
    {
      title: "Detailed Analytics",
      description:
        "Track your blog's performance with insights into views, likes, and shares to improve engagement.",
      icon: (
        <AntDesign
          name="barschart"
          size={24}
          color={colorScheme === "dark" ? "#fff" : "#000"}
        />
      ),
    },
    {
      title: "Global Accessibility",
      description:
        "Reach a worldwide audience with multilingual support and optimized blog designs for all devices.",
      icon: (
        <SimpleLineIcons
          name="globe"
          size={24}
          color={colorScheme === "dark" ? "#fff" : "#000"}
        />
      ),
    },
  ];

  return (
    <View className="flex-1 bg-white mt-8 dark:bg-black px-6 py-10">
      <View className="mx-auto max-w-7xl">
        <H2 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          Discover{"\n"}the Features of Penny Post
        </H2>

        <View className="mt-2 flex-row items-center">
          <View className="h-1 w-40 rounded-full bg-blue-500" />
          <View className="ml-1 h-1 w-3 rounded-full bg-blue-500" />
          <View className="ml-1 h-1 w-1 rounded-full bg-blue-500" />
        </View>

        <View className="mt-8 lg:flex-row xl:mt-12">
          <FlatList
            data={features}
            keyExtractor={(item) => item.title}
            numColumns={2}
            columnWrapperStyle={{ gap: 16 }}
            renderItem={({ item }) => (
              <View className="space-y-3 flex-1 px-2 gap-2">
                <View className="inline-block rounded-xl bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                  <H2 className="text-2xl">{item.icon}</H2>
                </View>
                <H2 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                  {item.title}
                </H2>
                <MyText className="text-gray-500 dark:text-gray-300">
                  {item.description}
                </MyText>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
