import { useUser } from "@clerk/clerk-expo";
import SignInScreen from "./(auth)/signin";
import { View } from "react-native";
import { H2 } from "../components/common/H2";

export default function Profile() {
  const { user } = useUser();

  if (!user) {
    return <SignInScreen />;
  }

  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <H2 className="dark:text">Profile</H2>
    </View>
  );
}
