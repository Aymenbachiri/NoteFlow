import { useClerk, useUser } from "@clerk/clerk-expo";
import SignInScreen from "./(auth)/signin";
import { TouchableOpacity, View } from "react-native";
import { H2 } from "../components/common/H2";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!user) {
    return <SignInScreen />;
  }

  return (
    <View className="flex-1 flex gap-5 dark:bg-black">
      <H2>Add Post</H2>
      <H2>My Posts</H2>
      <TouchableOpacity onPress={() => signOut()}>
        <H2>Sign Out</H2>
      </TouchableOpacity>
    </View>
  );
}
