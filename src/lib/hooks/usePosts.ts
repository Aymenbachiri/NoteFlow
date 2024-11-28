import { useEffect, useState } from "react";
import type { post } from "../types/types";
import { API_URL } from "@/src/components/common/Constants";

export function usePosts() {
  const [posts, setPosts] = useState<post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPosts() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error };
}
