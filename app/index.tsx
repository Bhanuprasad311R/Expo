import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-red-700">
      <View className="flex-1 items-center justify-center bg-gradient-to-b from-red-500 to-red-700 px-6">
        <Text className="text-white text-lg font-semibold text-center bg-white/10 px-4 py-2 rounded-xl shadow-md">
          Edit <Text className="underline">index.tsx</Text> to edit this screen.
        </Text>
      </View>
    </SafeAreaView>
  );
}
