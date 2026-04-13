import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Product } from "./data";
import { productImages } from "./images";
import { colors, radius, shadow, spacing } from "./theme";

export function Screen({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) {
  return (
    <ScrollView
      style={[styles.screen, style]}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

export function AppTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <View style={{ marginBottom: spacing.xl }}>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

export function PrimaryButton({
  title,
  onPress,
  rightIcon,
  style,
}: {
  title: string;
  onPress?: () => void;
  rightIcon?: string;
  style?: any;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.primaryButton, style]}>
      <Text style={styles.primaryButtonText}>{title}</Text>
      {rightIcon ? (
        <Ionicons
          name={rightIcon as any}
          size={20}
          color={colors.white}
          style={{ position: "absolute", right: 20 }}
        />
      ) : null}
    </Pressable>
  );
}

export function CircleButton({
  onPress,
  icon = "arrow-forward",
}: {
  onPress?: () => void;
  icon?: string;
}) {
  return (
    <Pressable onPress={onPress} style={styles.circleButton}>
      <Ionicons name={icon as any} size={24} color={colors.white} />
    </Pressable>
  );
}

export function SocialButton({
  title,
  bg,
  icon,
  onPress,
}: {
  title: string;
  bg: string;
  icon: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.socialButton, { backgroundColor: bg }]}
    >
      <Text style={styles.socialIcon}>{icon}</Text>
      <Text style={styles.socialText}>{title}</Text>
    </Pressable>
  );
}

export function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  left,
  right,
}: {
  label?: string;
  value?: string;
  onChangeText?: (v: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <View style={{ marginBottom: spacing.lg }}>
      {!!label && <Text style={styles.inputLabel}>{label}</Text>}
      <View style={styles.inputWrap}>
        {left ? <View style={{ marginRight: 10 }}>{left}</View> : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B1B1B1"
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
        {right ? <View style={{ marginLeft: 10 }}>{right}</View> : null}
      </View>
    </View>
  );
}

export function ProductCard({ item }: { item: Product }) {
  const prodImg = productImages[item.id as keyof typeof productImages];
  return (
    <Pressable
      onPress={() => router.push(`/product/${item.id}` as any)}
      style={styles.card}
    >
      {prodImg ? (
        <Image
          source={prodImg}
          style={styles.cardImage}
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.cardEmoji}>{item.emoji}</Text>
      )}
      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.cardMeta}>{item.size}</Text>

      <View style={styles.cardBottom}>
        <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
        <Pressable style={styles.plusBtn}>
          <Ionicons name="add" size={20} color={colors.white} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    lineHeight: 22,
  },
  primaryButton: {
    height: 62,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    ...shadow,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  circleButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    ...shadow,
  },
  socialButton: {
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
  },
  socialIcon: {
    position: "absolute",
    left: 24,
    color: colors.white,
    fontWeight: "700",
    fontSize: 28,
  },
  socialText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  inputLabel: {
    fontSize: 16,
    color: colors.muted,
    marginBottom: 10,
    fontWeight: "600",
  },
  inputWrap: {
    minHeight: 56,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: colors.text,
    paddingVertical: 8,
  },
  card: {
    width: 173,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    padding: 16,
    marginRight: 16,
  },
  cardEmoji: {
    fontSize: 58,
    textAlign: "center",
    marginBottom: 12,
  },
  cardImage: {
    width: "100%",
    height: 100,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    minHeight: 42,
  },
  cardMeta: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 4,
    marginBottom: 16,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  plusBtn: {
    width: 46,
    height: 46,
    borderRadius: 17,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
