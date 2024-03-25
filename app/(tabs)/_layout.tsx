import React from "react";
import { Stack, useRouter } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  return <Stack />;
}
