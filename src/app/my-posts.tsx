import { ActivityIndicator, View } from "react-native";
import { H2 } from "../components/common/H2";
import { usePosts } from "../lib/hooks/usePosts";
import { useUser } from "@clerk/clerk-expo";

export default function MyPosts() {
  const { posts, loading, error } = usePosts();
  const { user } = useUser();
  const userPosts = posts.filter(
    (post) => post.author === user?.emailAddresses[0].emailAddress
  );

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <H2>Error: {error}</H2>
      </View>
    );
  }

  if (userPosts.length === 0) {
    return (
      <View className="flex-1 flex items-center justify-center">
        <H2>You have not created any posts yet.</H2>
      </View>
    );
  }

  if (loading) return <ActivityIndicator size="large" color="black" />;

  return (
    <View>
      <H2>My Posts</H2>
    </View>
  );
}
