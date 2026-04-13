import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { categoryProducts, CategoryItem } from "../src/data";
import { colors, shadow } from "../src/theme";

// Flatten all products from all categories into one searchable list
const ALL_ITEMS: CategoryItem[] = Object.values(categoryProducts).flat();

// Deduplicate by id
const UNIQUE_ITEMS = ALL_ITEMS.filter(
  (item, idx, arr) => arr.findIndex((x) => x.id === item.id) === idx
);

function ProductCard({ item }: { item: CategoryItem }) {
  const [added, setAdded] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.cardEmoji}>{item.emoji}</Text>
      <Text style={styles.cardName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.cardSize}>{item.size}</Text>
      <View style={styles.cardBottom}>
        <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
        <Pressable
          onPress={() => setAdded((v) => !v)}
          style={[styles.addBtn, added && styles.addBtnDone]}
        >
          <Ionicons name={added ? "checkmark" : "add"} size={22} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}

export default function SearchScreen() {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return UNIQUE_ITEMS;
    return UNIQUE_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.size.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <View style={styles.root}>
      {/* ── Top search bar ── */}
      <View style={styles.topBar}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#7C7C7C" />
          <TextInput
            ref={inputRef}
            autoFocus
            value={query}
            onChangeText={setQuery}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
            returnKeyType="search"
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={18} color="#B0B0B0" />
            </Pressable>
          )}
        </View>
        {/* Filter icon */}
        <Pressable onPress={() => router.push("/filter" as any)} style={styles.filterBtn}>
          <Ionicons name="options-outline" size={24} color={colors.text} />
        </Pressable>
      </View>

      {/* ── Results ── */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => <ProductCard item={item} />}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={{ fontSize: 52 }}>🔍</Text>
            <Text style={styles.emptyText}>No results for "{query}"</Text>
            <Text style={styles.emptyHint}>
              Try checking your spelling or use more general terms
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
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    paddingHorizontal: 14,
    height: 52,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: colors.text,
    fontWeight: "500",
  },
  filterBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  listContent: {
    paddingHorizontal: 16,
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
    backgroundColor: "#fff",
    padding: 14,
    ...shadow,
  },
  cardEmoji: {
    fontSize: 70,
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
  addBtnDone: {
    backgroundColor: colors.primaryDark,
  },
  empty: {
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginTop: 16,
    textAlign: "center",
  },
  emptyHint: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 20,
  },
});
