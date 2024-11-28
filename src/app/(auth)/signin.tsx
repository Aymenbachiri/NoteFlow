import { useSignInUser } from "@/src/lib/hooks/useSignInUser";
import { Link, type RelativePathString } from "expo-router";
import { Text, TextInput, Button, View } from "react-native";

export default function SignInScreen() {
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    onSignInPress,
  } = useSignInUser();

  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="aymen.bachiri99@gmail.com"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Sign In" onPress={onSignInPress} />
      <View>
        <Text>Don't have an account?</Text>
        <Link href={"/(auth)/signup" as RelativePathString}>
          <Text>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
