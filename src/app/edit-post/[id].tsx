import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { usePost } from "@/src/lib/hooks/usePost";
import PostItemSkeleton from "@/src/components/PostItemSkeleton";
import { H2 } from "@/src/components/common/H2";
import ProtectedScreen from "@/src/lib/helpers/ProtectedScreen";
import { Controller } from "react-hook-form";
import { useEditPost } from "@/src/lib/hooks/useEditPost";

export default function EditProduct() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { post, loading, error } = usePost({ id });
  const { control, errors, handleSubmit } = useEditPost({ post });

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <H2>Error: {error}</H2>
      </View>
    );
  }

  if (loading) {
    return <PostItemSkeleton />;
  }

  return (
    <ProtectedScreen>
      <View className="flex-1 dark:bg-black">
        <H2 className="dark:text-white my-4">Edit Post</H2>
        <View className="flex flex-col gap-3 mt-8 dark:bg-black">
          <H2 className="mx-2">Title</H2>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                placeholder="Title"
                className="dark:bg-white rounded-md border mx-1"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={{
                  borderColor: errors.title ? "red" : "black",
                  borderWidth: 1,
                }}
              />
            )}
          />
          {errors.title && (
            <H2 className="text-red-500 text-sm mx-2">
              {errors.title.message}
            </H2>
          )}
        </View>
        <View className="flex flex-col gap-3 mt-8 dark:bg-black">
          <H2 className="mx-2">Content</H2>
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                placeholder="Content"
                className="dark:bg-white rounded-md border mx-1"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={true}
                numberOfLines={4}
                style={{
                  borderColor: errors.description ? "red" : "black",
                  borderWidth: 1,
                  textAlignVertical: "top",
                  padding: 10,
                }}
              />
            )}
          />
          {errors.description && (
            <H2 className="text-red-500 text-sm mx-2">
              {errors.description.message}
            </H2>
          )}
        </View>
        <View className="flex flex-col gap-3 mt-8 dark:bg-black">
          <H2 className="mx-2">Image Url</H2>
          <Controller
            control={control}
            name="imageUrl"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                placeholder="Image URL"
                className=" dark:bg-white rounded-md border mx-1 h-14"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={{
                  borderColor: errors.imageUrl ? "red" : "black",
                  borderWidth: 1,
                }}
              />
            )}
          />
          {errors.imageUrl && (
            <H2 className="text-red-500 text-sm mx-2">
              {errors.imageUrl.message}
            </H2>
          )}

          <TouchableOpacity onPress={handleSubmit} className="mt-4">
            <H2 className="text-center">Edit Post</H2>
          </TouchableOpacity>
        </View>
      </View>
    </ProtectedScreen>
  );
}
