import { FlatList, View } from "react-native";
import { H2 } from "../components/common/H2";
import { usePosts } from "../lib/hooks/usePosts";
import { MyText } from "../components/common/MyText";
import PostItem from "../components/PostItem";
import PostItemSkeleton from "../components/PostItemSkeleton";

export default function Posts() {
  const { posts, loading, error } = usePosts();

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <H2>Error: {error}</H2>
      </View>
    );
  }

  return (
    <View className="flex-1 dark:bg-black">
      <H2 className="my-6">Our Posts</H2>
      <MyText className="mb-4">
        Discover insightful articles, inspiring stories, and the latest trends
        in blogging and content creation. Dive into a world of knowledge with
        our expertly curated posts, designed to spark your creativity and fuel
        your passion for writing.
      </MyText>

      {loading ? (
        <FlatList
          data={[...Array(5)]}
          renderItem={() => <PostItemSkeleton />}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostItem post={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
}
