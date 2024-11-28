import { FontAwesome5 } from "@expo/vector-icons";
import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "expo-router";

export default function HeaderRight() {
  return (
    <>
      <ThemeSwitcher />
      <Link href="/profile">
        <FontAwesome5 name="user-cog" size={24} color="black" />
      </Link>
    </>
  );
}
