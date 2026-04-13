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
import { colors } from "../src/theme";

const CATEGORIES = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"];
const BRANDS = ["Individual Collection", "Cocola", "Itad", "Kazi Farmas"];

export default function FilterScreen() {
  const router = useRouter();
  const [selCat, setSelCat] = useState<string[]>(["Eggs"]);
  const [selBrand, setSelBrand] = useState<string[]>(["Cocola"]);

  const toggleCat = (item: string) =>
    setSelCat((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );

  const toggleBrand = (item: string) =>
    setSelBrand((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );

  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.closeBtn}>
          <Ionicons name="close" size={26} color={colors.text} />
        </Pressable>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        {CATEGORIES.map((cat) => {
          const active = selCat.includes(cat);
          return (
            <Pressable key={cat} onPress={() => toggleCat(cat)} style={styles.row}>
              <View style={[styles.checkbox, active && styles.checkboxActive]}>
                {active && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text style={[styles.rowLabel, active && styles.rowLabelActive]}>{cat}</Text>
            </Pressable>
          );
        })}

        <View style={styles.divider} />

        {/* Brand */}
        <Text style={styles.sectionTitle}>Brand</Text>
        {BRANDS.map((brand) => {
          const active = selBrand.includes(brand);
          return (
            <Pressable key={brand} onPress={() => toggleBrand(brand)} style={styles.row}>
              <View style={[styles.checkbox, active && styles.checkboxActive]}>
                {active && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text style={[styles.rowLabel, active && styles.rowLabelActive]}>{brand}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Apply button */}
      <View style={styles.bottom}>
        <Pressable onPress={() => router.back()} style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply Filter</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", paddingTop: 52 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeBtn: { width: 40, height: 40, justifyContent: "center" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: colors.text },
  body: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  rowLabel: { fontSize: 15, color: colors.muted },
  rowLabelActive: { color: colors.text, fontWeight: "600" },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 20 },
  bottom: {
    paddingHorizontal: 20,
    paddingBottom: 36,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: "#fff",
  },
  applyBtn: {
    height: 62,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  applyText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
