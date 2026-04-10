import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../src/ui";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/8140.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.logoWrap}>
          <FontAwesome5 name="carrot" size={48} color="#fff" style={styles.icon} />
        </View>
        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>

        <PrimaryButton
          title="Get Started"
          onPress={() => router.push("/sign-in")}
          style={{ marginTop: 40 }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "flex-end", width: "100%", height: "100%" },
  overlay: {
    paddingHorizontal: 24,
    paddingBottom: 60,
    paddingTop: 40,
  },
  logoWrap: {
    alignItems: "center",
    marginBottom: 24,
  },
  icon: {
    transform: [{ rotate: "-15deg" }],
  },
  title: {
    textAlign: "center",
    fontSize: 46,
    lineHeight: 52,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    textAlign: "center",
    marginTop: 16,
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    fontWeight: "500",
  },
});
