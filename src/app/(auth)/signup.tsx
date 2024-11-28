import { useSignUpUser } from "@/src/lib/hooks/useSignUpUser";
import { TextInput, Button, View } from "react-native";

export default function SignUpScreen() {
  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    pendingVerification,
    code,
    setCode,
    onSignUpPress,
    onPressVerify,
  } = useSignUpUser();

  return (
    <View className="flex-1 bg-white mt-8 gap-3 dark:bg-black px-6 py-10">
      {!pendingVerification && (
        <>
          <TextInput
            autoCapitalize="none"
            value={emailAddress}
            placeholder="aymen.bachiri99@gmail.com"
            onChangeText={(email) => setEmailAddress(email)}
          />
          <TextInput
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <Button title="Sign Up" onPress={onSignUpPress} />
        </>
      )}
      {pendingVerification && (
        <>
          <TextInput
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
          />
          <Button title="Verify Email" onPress={onPressVerify} />
        </>
      )}
    </View>
  );
}
