import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../src/theme";
import { AppInput, AppTitle, PrimaryButton, Screen } from "../src/ui";

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");

  return (
    <Screen>
      <Text style={{ fontSize: 48, textAlign: "center", marginTop: 16 }}>
        🥕
      </Text>

      <View style={{ marginTop: 60 }}>
        <AppTitle title="Sign Up" subtitle="Enter your credentials to continue" />

        <AppInput label="Username" value={username} onChangeText={setUsername} />
        <AppInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          right={<Ionicons name="checkmark" size={22} color={colors.primary} />}
        />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          right={
            <Ionicons name="eye-off-outline" size={22} color={colors.muted} />
          }
        />

        <Text
          style={{
            color: colors.muted,
            lineHeight: 22,
            marginTop: -4,
            marginBottom: 28,
            fontSize: 14,
          }}
        >
          By continuing you agree to our{" "}
          <Text style={{ color: colors.primary }}>Terms of Service</Text> and{" "}
          <Text style={{ color: colors.primary }}>Privacy Policy</Text>.
        </Text>

        {/* Sau khi signup xong thì đi chọn location */}
        <PrimaryButton
          title="Sign Up"
          onPress={() => router.replace("/location")}
        />

        <Text style={{ textAlign: "center", marginTop: 24, color: colors.text, fontWeight: "600" }}>
          Already have an account?{" "}
          <Text
            style={{ color: colors.primary }}
            onPress={() => router.push("/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
