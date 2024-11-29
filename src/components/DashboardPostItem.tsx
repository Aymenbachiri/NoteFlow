import { Image, TouchableOpacity, View } from "react-native";
import { H2 } from "./common/H2";
import { formatDate } from "../lib/utils/utils";
import type { post } from "../lib/types/types";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useTheme } from "../lib/providers/ThemeProvider";
import { useDeletePost } from "../lib/hooks/useDeletePost";

export default function DashboardPostItem({ post }: { post: post }) {
  const { colorScheme } = useTheme();
  const { handleDelete, isDeleting } = useDeletePost({ id: post.id });

  return (
    <View className="rounded mt-2 flex-1 h-full bg-white dark:bg-gray-800 duration-300">
      <View className="p-5 h-full">
        <H2 className="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          {formatDate(post.createdAt)}
        </H2>
        <H2
          className="mb-3 text-2xl pt-3 font-bold leading-5 text-black dark:text-white"
          accessibilityRole="header"
        >
          {post.title}
        </H2>
        <H2 className="mb-4 text-gray-700 dark:text-gray-300">
          {post.description.slice(0, 200)}...
        </H2>
        <View className="flex-row space-x-4 flex items-center gap-3">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            className="h-10 w-10 rounded-full object-cover"
            accessibilityLabel="Author avatar"
          />
          <View>
            <H2 className="font-semibold text-gray-800 dark:text-gray-200">
              {post.author}
            </H2>
            <H2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Author
            </H2>
          </View>
        </View>
        <View className="flex flex-row gap-6 mt-5 justify-center">
          <Link href={`/posts/${post.id}`}>
            <Feather
              name="external-link"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </Link>
          <TouchableOpacity>
            <Feather name="edit" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            disabled={isDeleting}
            style={{ opacity: isDeleting ? 0.5 : 1 }}
          >
            <FontAwesome6 name="trash-alt" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
