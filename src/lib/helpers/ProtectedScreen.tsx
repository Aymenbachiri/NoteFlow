import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function ProtectedScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)/signin"} />;
  }

  return <>{children}</>;
}
