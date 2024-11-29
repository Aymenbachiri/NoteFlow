import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { post } from "../types/types";
import { useUser } from "@clerk/clerk-expo";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import { EditBlogPost, editPostSchema } from "../schema/editPostSchema";
import { API_URL } from "./../../components/common/Constants";

async function updatePost(data: EditBlogPost, id: string) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${JSON.stringify(
          responseBody
        )}`
      );
    }

    return responseBody;
  } catch (error) {
    console.error("Detailed Post update error:", error);
    throw error;
  }
}

export function useEditPost({ post }: { post: post | undefined }) {
  const { user } = useUser();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EditBlogPost>({
    resolver: zodResolver(editPostSchema),
    defaultValues: {
      id: "",
      title: "",
      description: "",
      imageUrl: "",
      author: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (post) {
      setValue("id", post.id);
      setValue("title", post.title);
      setValue("description", post.description);
      setValue("imageUrl", post.imageUrl);
    }
  }, [post, setValue]);

  useEffect(() => {
    if (user) {
      const creatorName = user.emailAddresses[0].emailAddress;
      setValue("author", creatorName);
    }
  }, [user, setValue]);

  const onSubmit = async (data: EditBlogPost) => {
    if (!user) {
      console.error("You must be logged in to edit Post");
      Alert.alert("Authentication Error", "You must be logged in to edit Post");
      return;
    }

    if (!post?.id) {
      console.error("Post ID is missing");
      Alert.alert("Validation Error", "Post ID is missing");
      return;
    }

    try {
      const response = await updatePost(data, post.id);

      reset();
      router.push("/my-posts");
      console.log("Post updated successfully!");
      Alert.alert("Success", "Post updated successfully!");
    } catch (error) {
      console.error("Post update error:", error);

      if (error instanceof Error) {
        Alert.alert("Update Error", error.message);
      } else {
        Alert.alert(
          "Unexpected Error",
          "An unexpected error occurred while updating the Post."
        );
      }
    }
  };

  return { control, errors, handleSubmit: handleSubmit(onSubmit) };
}
