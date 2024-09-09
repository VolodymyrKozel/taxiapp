import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Link href="/(auth)/sign-up" className="mb-5">
        <Text className="text-black text-md font-JakartaBold ">Sign Up</Text>
      </Link>
      <Text>Sign In</Text>
    </SafeAreaView>
  );
}
