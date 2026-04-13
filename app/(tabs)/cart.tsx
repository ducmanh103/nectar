import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, shadow } from "../../src/theme";

type CartItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
  qty: number;
};

const INITIAL_CART: CartItem[] = [
  { id: "pepper",   name: "Bell Pepper Red",   size: "1kg, Price",   price: 4.99, emoji: "🫑", qty: 1 },
  { id: "chicken",  name: "Egg Chicken Red",  size: "4pcs, Price",  price: 1.99, emoji: "🍗", qty: 1 },
  { id: "banana",   name: "Organic Bananas",  size: "12kg, Price",  price: 3.00, emoji: "🍌", qty: 1 },
  { id: "ginger",   name: "Ginger",           size: "250gm, Price", price: 2.99, emoji: "🫚", qty: 1 },
];

export default function CartScreen() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ fontSize: 60 }}>🛒</Text>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          >
            {items.map((item) => (
              <View key={item.id} style={styles.card}>
                {/* Emoji image */}
                <Text style={styles.cardEmoji}>{item.emoji}</Text>

                {/* Info */}
                <View style={styles.cardInfo}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={styles.cardSize}>{item.size}</Text>

                  {/* Qty row */}
                  <View style={styles.qtyRow}>
                    <Pressable
                      onPress={() => updateQty(item.id, -1)}
                      style={styles.qtyBtn}
                    >
                      <Ionicons name="remove" size={18} color={colors.text} />
                    </Pressable>
                    <Text style={styles.qtyText}>{item.qty}</Text>
                    <Pressable
                      onPress={() => updateQty(item.id, +1)}
                      style={styles.qtyBtn}
                    >
                      <Ionicons name="add" size={18} color={colors.primary} />
                    </Pressable>
                  </View>
                </View>

                {/* Price + remove */}
                <View style={styles.cardRight}>
                  <Pressable onPress={() => removeItem(item.id)}>
                    <Ionicons name="close" size={20} color="#B0B0B0" />
                  </Pressable>
                  <Text style={styles.cardPrice}>
                    ${(item.price * item.qty).toFixed(2)}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Checkout bar */}
          <View style={styles.bottomBar}>
            <Pressable style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Go to Checkout</Text>
              <View style={styles.totalBadge}>
                <Text style={styles.totalBadgeText}>${total.toFixed(2)}</Text>
              </View>
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
  list: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 120 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 12,
  },
  cardEmoji: { fontSize: 58, width: 72, textAlign: "center" },
  cardInfo: { flex: 1 },
  cardName: { fontSize: 15, fontWeight: "700", color: colors.text, marginBottom: 2 },
  cardSize: { fontSize: 13, color: colors.muted, marginBottom: 10 },
  qtyRow: { flexDirection: "row", alignItems: "center", gap: 2 },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    minWidth: 34,
    textAlign: "center",
  },
  cardRight: { alignItems: "flex-end", justifyContent: "space-between", height: 70 },
  cardPrice: { fontSize: 16, fontWeight: "700", color: colors.text },
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
  checkoutBtn: {
    height: 62,
    borderRadius: 18,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  checkoutText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  totalBadge: {
    position: "absolute",
    right: 16,
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  totalBadgeText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: colors.muted, marginTop: 16, fontWeight: "600" },
});
