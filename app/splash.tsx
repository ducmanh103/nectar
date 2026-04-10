import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../src/theme";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.replace("/onboarding"), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <FontAwesome5 name="carrot" size={60} color="#fff" style={styles.icon} />
        <View style={styles.textWrap}>
          <Text style={styles.logo}>nectar</Text>
          <Text style={styles.sub}>o n l i n e  g r o c e r i e t</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
    transform: [{ rotate: "-15deg" }],
  },
  textWrap: {
    justifyContent: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "700",
    lineHeight: 68,
  },
  sub: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginTop: -4,
  },
});
