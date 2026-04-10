import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "../src/theme";
import { AppInput, AppTitle, CircleButton, Screen } from "../src/ui";

export default function VerificationScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");

  return (
    <Screen>
      <Pressable onPress={() => router.back()} style={{ marginBottom: 24 }}>
        <Ionicons name="chevron-back" size={28} color={colors.text} />
      </Pressable>

      <View style={{ marginTop: 20 }}>
        <AppTitle title="Enter your 4-digit code" />

        <AppInput
          label="Code"
          value={code}
          onChangeText={setCode}
          placeholder="- - - -"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 180,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            color: colors.primary,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Resend Code
        </Text>

        <CircleButton onPress={() => router.push("/location")} />
      </View>
    </Screen>
  );
}
