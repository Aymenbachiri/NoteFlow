import { Link, type RelativePathString } from "expo-router";
import { Image, View } from "react-native";
import { H2 } from "./common/H2";
import { formatDate } from "../lib/utils/utils";
import type { post } from "../lib/types/types";

export default function PostItem({ post }: { post: post }) {
  const defaultImage =
    "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  return (
    <Link
      href={`/posts/${post.id}` as RelativePathString}
      aria-label="Article"
      className="rounded mt-2 bg-white dark:bg-gray-800 duration-300"
    >
      {/* Image Section */}
      <View className="flex-1">
        <Image
          source={{ uri: post.imageUrl || defaultImage }}
          style={{ height: 256, width: "100%", borderRadius: 8 }}
          resizeMode="cover"
          accessibilityLabel={post.title || "Post image"}
        />
      </View>
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
      </View>
    </Link>
  );
}
