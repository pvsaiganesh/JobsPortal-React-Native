import { useState,  } from "react";
import { StyleSheet } from "react-native";
import { Stack, useRouter,  } from "expo-router";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../../components";

export default function TabOneScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={false}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="60%"
              handlePress={false}
            />
          ),
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              const route = `/${searchTerm}`;
              if (searchTerm) {
                router.push(route);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
