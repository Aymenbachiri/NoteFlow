import { View } from "react-native";

export default function PostItemSkeleton() {
  return (
    <View className="flex-1 animate-pulse">
      <View className="overflow-hidden animate-pulse rounded bg-white dark:bg-gray-800 shadow-md transition-shadow duration-300">
        {/* Skeleton for Image Section */}
        <View className="h-64 w-full rounded animate-pulse bg-gray-200 dark:bg-gray-700" />

        <View className="p-5 animate-pulse">
          {/* Skeleton for Date */}
          <View className="mb-2 h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />

          {/* Skeleton for Title */}
          <View className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

          {/* Skeleton for Description */}
          <View className="mb-4 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
          <View className="mb-4 h-4 w-11/12 rounded bg-gray-200 dark:bg-gray-700" />
          <View className="mb-4 h-4 w-10/12 rounded bg-gray-200 dark:bg-gray-700" />

          {/* Skeleton for Author Section */}
          <View className="flex-row items-center space-x-4">
            <View className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
            <View className="flex-1">
              <View className="mb-2 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
              <View className="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
