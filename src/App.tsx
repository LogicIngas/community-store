import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation/RootNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    // Roboto
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("../assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-ExtraBold": require("../assets/fonts/Roboto-ExtraBold.ttf"),

    // Nunito
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("../assets/fonts/Nunito-ExtraBold.ttf"),

    // Roboto Condensed
    "Roboto_Condensed-Regular": require("../assets/fonts/Roboto_Condensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}