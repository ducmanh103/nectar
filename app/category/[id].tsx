import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { categoryProducts, CategoryItem } from "../../src/data";
import { colors, shadow } from "../../src/theme";

const CATEGORY_LABELS: Record<string, string> = {
  "beverages":   "Beverages",
  "fruits-veg":  "Fresh Fruits & Vegetable",
  "meat-fish":   "Meat & Fish",
  "bakery":      "Bakery & Snacks",
  "dairy":       "Dairy & Eggs",
  "cooking-oil": "Cooking Oil & Ghee",
  "cereals":     "Cereals",
  "spices":      "Spices",
};

function ProductCard({ item }: { item: CategoryItem }) {
  const [added, setAdded] = useState(false);

  return (
    <View style={styles.card}>
      {/* Product emoji as image placeholder */}
      <Text style={styles.cardEmoji}>{item.emoji}</Text>

      <Text style={styles.cardName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.cardSize}>{item.size}</Text>

      <View style={styles.cardBottom}>
        <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
        <Pressable
          onPress={() => setAdded((v) => !v)}
          style={[styles.addBtn, added && styles.addBtnActive]}
        >
          <Ionicons name={added ? "checkmark" : "add"} size={22} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const label = CATEGORY_LABELS[id ?? ""] ?? "Category";
  const items = categoryProducts[id ?? ""] ?? [];

  return (
    <View style={styles.root}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={26} color={colors.text} />
        </Pressable>

        <Text style={styles.headerTitle}>{label}</Text>

        <Pressable onPress={() => router.push("/filter" as any)} style={styles.iconBtn}>
          <Ionicons name="options-outline" size={24} color={colors.text} />
        </Pressable>
      </View>

      {/* ── Product Grid ── */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard item={item} />}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 60 }}>
            <Text style={{ fontSize: 48 }}>🛒</Text>
            <Text style={{ color: colors.muted, marginTop: 12, fontSize: 15 }}>
              No products yet
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 52,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    flex: 1,
    textAlign: "center",
  },
  iconBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 14,
  },
  card: {
    width: "48%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    padding: 14,
    ...shadow,
  },
  cardEmoji: {
    fontSize: 72,
    textAlign: "center",
    marginBottom: 10,
  },
  cardName: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.text,
    minHeight: 40,
  },
  cardSize: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
    marginBottom: 14,
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
  addBtn: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnActive: {
    backgroundColor: colors.primaryDark,
  },
});
