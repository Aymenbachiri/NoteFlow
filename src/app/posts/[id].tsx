import { H2 } from "@/src/components/common/H2";
import PostItemSkeleton from "@/src/components/PostItemSkeleton";
import { usePost } from "@/src/lib/hooks/usePost";
import { formatDate } from "@/src/lib/utils/utils";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, ScrollView, View } from "react-native";

export default function Post() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { post, loading, error } = usePost({ id });
  const { title, description, author, imageUrl, createdAt } = post || {};

  if (error) {
    return (
      <View className="flex-1 flex justify-center items-center p-4">
        <H2 className="text-red-500 text-center">Error: {error}</H2>
      </View>
    );
  }

  if (loading) return <PostItemSkeleton />;

  return (
    <ScrollView className="relative mx-auto flex-1 dark:bg-gray-900">
      <ImageBackground
        className="h-[500px] w-full rounded-md bg-cover bg-center shadow-md"
        source={{
          uri:
            imageUrl ||
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ height: 500 }}
      ></ImageBackground>
      <View className="mx-auto max-w-3xl rounded-md bg-white p-5 shadow-lg dark:bg-gray-900 sm:p-10">
        <H2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </H2>
        <View className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <H2 className="text-sm text-gray-700 dark:text-gray-300">
            Written By :{" "}
            <H2 className="font-medium pt-1 text-indigo-600 transition duration-500 hover:text-indigo-500 dark:text-indigo-400">
              {author}
            </H2>
          </H2>
          <H2 className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(createdAt!)}
          </H2>
        </View>
        <H2 className="mt-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
          {description}
        </H2>
      </View>
    </ScrollView>
  );
}
