import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { groceryProducts, products } from "../../src/data";
import { groceryImages, productImages } from "../../src/images";
import { colors, shadow } from "../../src/theme";

const ALL_PRODUCTS = [...products, ...groceryProducts];

const IMAGE_MAP: Record<string, any> = {
  ...productImages,
  ...groceryImages,
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const product = ALL_PRODUCTS.find((p) => p.id === id);

  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [detailOpen, setDetailOpen] = useState(true);

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Sản phẩm không tìm thấy.</Text>
      </View>
    );
  }

  const productImage = IMAGE_MAP[product.id];

  return (
    <View style={styles.root}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </Pressable>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="share-social-outline" size={22} color={colors.text} />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ── Product Image ── */}
        <View style={styles.imageWrap}>
          {productImage ? (
            <Image
              source={productImage}
              style={styles.productImage}
              resizeMode="contain"
            />
          ) : (
            <Text style={{ fontSize: 100, textAlign: "center" }}>
              {product.emoji}
            </Text>
          )}
        </View>

        {/* ── Product Info ── */}
        <View style={styles.infoSection}>
          {/* Name + Heart */}
          <View style={styles.nameRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productMeta}>{product.size}</Text>
            </View>
            <Pressable onPress={() => setLiked((v) => !v)} style={styles.heartBtn}>
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={26}
                color={liked ? "#FF6B6B" : "#B3B3B3"}
              />
            </Pressable>
          </View>

          <View style={styles.divider} />

          {/* Quantity + Price */}
          <View style={styles.qtyRow}>
            <View style={styles.qtyControl}>
              <Pressable
                onPress={() => setQty((q) => Math.max(1, q - 1))}
                style={styles.qtyBtn}
              >
                <Ionicons name="remove" size={20} color={colors.text} />
              </Pressable>
              <Text style={styles.qtyText}>{qty}</Text>
              <Pressable
                onPress={() => setQty((q) => q + 1)}
                style={styles.qtyBtn}
              >
                <Ionicons name="add" size={20} color={colors.primary} />
              </Pressable>
            </View>
            <Text style={styles.price}>
              ${(product.price * qty).toFixed(2)}
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Product Detail accordion */}
          <Pressable
            onPress={() => setDetailOpen((v) => !v)}
            style={styles.accordionHeader}
          >
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Ionicons
              name={detailOpen ? "chevron-up" : "chevron-down"}
              size={20}
              color={colors.text}
            />
          </Pressable>
          {detailOpen && (
            <Text style={styles.accordionBody}>
              {product.name} is nutritious and fresh. It may be good for weight
              loss. It may be good for your heart. As part of a healthful and
              varied diet.
            </Text>
          )}

          <View style={styles.divider} />

          {/* Nutritions row */}
          <Pressable style={styles.infoRow}>
            <Text style={styles.infoRowLabel}>Nutritions</Text>
            <View style={styles.infoRowRight}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>100gr</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.text} />
            </View>
          </Pressable>

          <View style={styles.divider} />

          {/* Review row */}
          <Pressable style={styles.infoRow}>
            <Text style={styles.infoRowLabel}>Review</Text>
            <View style={styles.infoRowRight}>
              {/* 5 stars */}
              <View style={{ flexDirection: "row", marginRight: 6 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Ionicons key={s} name="star" size={16} color="#F3A63A" />
                ))}
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.text} />
            </View>
          </Pressable>

          <View style={styles.divider} />
        </View>
      </ScrollView>

      {/* ── Add To Basket button (floating bottom) ── */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add To Basket</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 12,
    backgroundColor: colors.white,
  },
  iconBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrap: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    backgroundColor: "#FAFAFA",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "90%",
    height: "90%",
  },
  infoSection: {
    paddingHorizontal: 20,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },
  productMeta: {
    fontSize: 14,
    color: colors.muted,
  },
  heartBtn: {
    paddingLeft: 12,
    paddingTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtyControl: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    minWidth: 40,
    textAlign: "center",
  },
  price: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.text,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  accordionBody: {
    fontSize: 13,
    color: colors.muted,
    lineHeight: 20,
    marginTop: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoRowLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  infoRowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  badge: {
    backgroundColor: colors.card,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 12,
    color: colors.muted,
    fontWeight: "600",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 32,
    paddingTop: 12,
    backgroundColor: colors.white,
    ...shadow,
  },
  addBtn: {
    height: 62,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
