import { API_URL } from "@/src/components/common/Constants";
import { useState } from "react";
import { Alert } from "react-native";

export function useDeletePost({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              setIsDeleting(true);
              const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              });

              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || "Failed to delete post");
              }

              Alert.alert("Success", "Post deleted successfully", [
                {
                  text: "OK",
                  onPress: () => {},
                },
              ]);
            } catch (error) {
              const errorMessage =
                error instanceof Error
                  ? error.message
                  : "An unexpected error occurred";
              Alert.alert("Error", `Failed to delete post: ${errorMessage}`, [
                { text: "OK" },
              ]);
              console.error("Delete error:", error);
            } finally {
              setIsDeleting(false);
            }
          },
        },
      ]
    );
  };
  return { handleDelete, isDeleting };
}
