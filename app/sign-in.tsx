import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../src/theme";
import { SocialButton } from "../src/ui";

export default function SignInScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/601 1.png")} />

      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

        {/* Login bằng số điện thoại */}
        <Pressable onPress={() => router.push("/number")}>
          <Text style={styles.phone}>🇧🇩 +880</Text>
        </Pressable>

        <Text style={styles.or}>Or connect with social media</Text>

        <SocialButton
          title="Continue with Google"
          bg={colors.google}
          icon="G"
        />
        <SocialButton
          title="Continue with Facebook"
          bg={colors.facebook}
          icon="f"
        />

        {/* Login bằng email */}
        <Pressable onPress={() => router.push("/login")}>
          <Text style={styles.linkText}>Login with Email</Text>
        </Pressable>

        {/* Tạo tài khoản */}
        <Pressable onPress={() => router.push("/signup")}>
          <Text style={styles.signupText}>Create new account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  hero: { width: "100%", height: 320 },
  content: { padding: 24, flex: 1 },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.text,
    lineHeight: 38,
  },
  phone: {
    fontSize: 26,
    color: colors.text,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 18,
    marginTop: 18,
  },
  or: {
    textAlign: "center",
    color: colors.muted,
    marginVertical: 28,
    fontSize: 14,
    fontWeight: "600",
  },
  linkText: {
    textAlign: "center",
    marginTop: 20,
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  signupText: {
    textAlign: "center",
    marginTop: 12,
    color: colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
