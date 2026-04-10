import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { colors } from "../../src/theme";

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  shop: "storefront-outline",
  explore: "search-outline",
  cart: "cart-outline",
  favourite: "heart-outline",
  account: "person-outline",
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#777",
        tabBarStyle: {
          height: 78,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={iconMap[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tabs.Screen name="shop" options={{ title: "Shop" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="favourite" options={{ title: "Favourite" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
    </Tabs>
  );
}
