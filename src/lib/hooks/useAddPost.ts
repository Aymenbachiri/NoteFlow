import { API_URL } from "@/src/components/common/Constants";
import { useUser } from "@clerk/clerk-expo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { type BlogPost, PostSchema } from "../schema/postSchema";

export function useAddPost() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm<BlogPost>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
    },
  });

  const registerPost = async (data: BlogPost) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error response from API:", errorData);
      throw new Error(errorData.error || "Failed to add post");
    }
  };

  const onSubmit = async (data: BlogPost) => {
    const postData = {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      author: user?.emailAddresses[0].emailAddress,
    };

    setLoading(true);
    try {
      await registerPost(postData);

      Alert.alert("Success", "Post added successfully!", [
        { text: "OK", onPress: () => reset() },
      ]);

      setLoading(false);
    } catch (error: Error | any) {
      console.error("Post addition error:", error);
      Alert.alert("Error", error.message || "An unexpected error occurred", [
        { text: "OK" },
      ]);
      setError("root", {
        type: "manual",
        message: error instanceof Error ? error.message : "Add Post failed",
      });
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    onSubmit,
    control,
  };
}
