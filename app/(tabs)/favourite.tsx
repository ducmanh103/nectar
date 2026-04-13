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

type FavItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
};

const INITIAL_FAVS: FavItem[] = [
  { id: "sprite-can",        name: "Sprite Can",          size: "325ml, Price", price: 1.50,  emoji: "🧃" },
  { id: "diet-coke",         name: "Diet Coke",           size: "355ml, Price", price: 1.99,  emoji: "🥤" },
  { id: "apple-grape-juice", name: "Apple & Grape Juice", size: "2L, Price",    price: 15.50, emoji: "🍇" },
  { id: "coca-cola-can",     name: "Coca Cola Can",       size: "325ml, Price", price: 4.99,  emoji: "🥤" },
  { id: "pepsi-can",         name: "Pepsi Can",           size: "330ml, Price", price: 4.99,  emoji: "🫙" },
];

export default function FavouriteScreen() {
  const router = useRouter();
  const [favs, setFavs] = useState<FavItem[]>(INITIAL_FAVS);

  const removeFav = (id: string) =>
    setFavs((prev) => prev.filter((f) => f.id !== id));

  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourrite</Text>
      </View>

      {favs.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ fontSize: 60 }}>🤍</Text>
          <Text style={styles.emptyText}>No favourites yet</Text>
        </View>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          >
            {favs.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => router.push(`/product/${item.id}` as any)}
                style={styles.row}
              >
                {/* Emoji */}
                <Text style={styles.rowEmoji}>{item.emoji}</Text>

                {/* Info */}
                <View style={styles.rowInfo}>
                  <Text style={styles.rowName}>{item.name}</Text>
                  <Text style={styles.rowSize}>{item.size}</Text>
                </View>

                {/* Price + arrow */}
                <View style={styles.rowRight}>
                  <Text style={styles.rowPrice}>${item.price.toFixed(2)}</Text>
                  <Ionicons name="chevron-forward" size={20} color={colors.muted} />
                </View>
              </Pressable>
            ))}
          </ScrollView>

          {/* Add all to cart */}
          <View style={styles.bottomBar}>
            <Pressable style={styles.addAllBtn}>
              <Text style={styles.addAllText}>Add All To Cart</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", paddingTop: 52 },
  header: {
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: colors.text },
  list: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 120 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 12,
  },
  rowEmoji: { fontSize: 52, width: 64, textAlign: "center" },
  rowInfo: { flex: 1 },
  rowName: { fontSize: 15, fontWeight: "700", color: colors.text, marginBottom: 3 },
  rowSize: { fontSize: 13, color: colors.muted },
  rowRight: { flexDirection: "row", alignItems: "center", gap: 4 },
  rowPrice: { fontSize: 15, fontWeight: "700", color: colors.text },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 32,
    paddingTop: 12,
    backgroundColor: "#fff",
    ...shadow,
  },
  addAllBtn: {
    height: 62,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  addAllText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: colors.muted, marginTop: 16, fontWeight: "600" },
});
