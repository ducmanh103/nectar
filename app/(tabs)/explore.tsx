import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, shadow } from "../../src/theme";

type Category = {
  id: string;
  name: string;
  emoji: string;
  bg: string;
};

const categories: Category[] = [
  { id: "fruits-veg",  name: "Fresh Fruits\n& Vegetable", emoji: "🧺",  bg: "#E8F5E4" },
  { id: "cooking-oil", name: "Cooking Oil\n& Ghee",       emoji: "🫙",  bg: "#FFF3D6" },
  { id: "meat-fish",   name: "Meat & Fish",               emoji: "🥩",  bg: "#FFE4E4" },
  { id: "bakery",      name: "Bakery & Snacks",           emoji: "🍞",  bg: "#F5E8FF" },
  { id: "dairy",       name: "Dairy & Eggs",              emoji: "🧀",  bg: "#FFFDE7" },
  { id: "beverages",   name: "Beverages",                 emoji: "🧃",  bg: "#E3F2FD" },
  { id: "cereals",     name: "Cereals",                   emoji: "🌾",  bg: "#FFF8E1" },
  { id: "spices",      name: "Spices",                    emoji: "🌶️", bg: "#FCE4EC" },
];

export default function ExploreScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("fruits-veg");
  const [search, setSearch] = useState("");

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.root}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.title}>Find Products</Text>
      </View>

      {/* ── Search bar (tap → go to search screen) ── */}
      <Pressable
        onPress={() => router.push("/search" as any)}
        style={styles.searchWrap}
      >
        <Ionicons name="search" size={20} color="#7C7C7C" />
        <Text style={styles.searchPlaceholder}>Search Store</Text>
      </Pressable>

      {/* ── Category Grid ── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      >
        {filtered.map((cat) => {
          const isActive = selected === cat.id;
          return (
            <Pressable
              key={cat.id}
              onPress={() => {
                setSelected(cat.id);
                router.push(`/category/${cat.id}` as any);
              }}
              style={[
                styles.card,
                { backgroundColor: cat.bg },
                isActive && styles.cardActive,
              ]}
            >
              {/* Emoji – big centred */}
              <Text style={styles.cardEmoji}>{cat.emoji}</Text>
              <Text style={styles.cardLabel}>{cat.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 56,
  },
  header: {
    alignItems: "center",
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#181725",
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    width: "48%",
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "flex-end",
    minHeight: 155,
    ...shadow,
  },
  cardActive: {
    borderWidth: 2,
    borderColor: "#EB4335",
  },
  cardEmoji: {
    fontSize: 72,
    marginBottom: 8,
    textAlign: "center",
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    lineHeight: 20,
  },
  searchPlaceholder: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#7C7C7C",
    fontWeight: "500",
  },
});
