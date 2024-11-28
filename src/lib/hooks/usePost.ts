import { useEffect, useState } from "react";
import type { post } from "../types/types";
import { API_URL } from "@/src/components/common/Constants";

export function usePost({ id }: { id: string }) {
  const [post, setPost] = useState<post>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchPost() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch post");
      }
      const data = await res.json();
      setPost(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
}
