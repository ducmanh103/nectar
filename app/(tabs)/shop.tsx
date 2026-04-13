import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { groceryCategories, groceryProducts, products } from "../../src/data";
import { categoryImages, groceryImages } from "../../src/images";
import { colors } from "../../src/theme";
import { ProductCard, Screen } from "../../src/ui";

export default function ShopScreen() {
  const router = useRouter();
  const exclusive = products.slice(0, 2);
  const bestSelling = products.slice(2, 4);
  const [activeCategory, setActiveCategory] = useState("pulses");

  return (
    <Screen>
      <Text style={{ textAlign: "center", fontSize: 36, marginTop: 10 }}>
        🥕
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
        <Ionicons name="location-sharp" size={20} color="#4C4F4D" />
        <Text
          style={{
            marginLeft: 8,
            color: '#4C4F4D',
            fontWeight: "600",
            fontSize: 16
          }}
        >
          Dhaka, Banassre
        </Text>
      </View>

      <Pressable
        onPress={() => {}}
        style={{
          height: 52,
          borderRadius: 15,
          backgroundColor: colors.card,
          marginTop: 18,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="search" size={20} color="#181B19" />
        <TextInput
          editable={false}
          placeholder="Search Store"
          style={{ marginLeft: 10, flex: 1, fontSize: 15, fontWeight: "600" }}
          placeholderTextColor="#7C7C7C"
        />
      </Pressable>

      {/* ── Banner ── */}
      <View
        style={{
          height: 130,
          borderRadius: 18,
          overflow: "hidden",
          marginTop: 20,
          backgroundColor: "#F4E8CE",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Decorative veggies – left cluster */}
        <View style={{ width: 130, height: "100%", position: "relative" }}>
          <Text style={{ position: "absolute", bottom: -6, left: -4, fontSize: 64 }}>🥕</Text>
          <Text style={{ position: "absolute", bottom: 10, left: 42, fontSize: 44 }}>🧅</Text>
          <Text style={{ position: "absolute", top: 0, left: 8, fontSize: 40 }}>🌿</Text>
          <Text style={{ position: "absolute", top: 6, left: 50, fontSize: 36 }}>🍅</Text>
        </View>

        {/* Text block – center */}
        <View style={{ flex: 1, alignItems: "center", paddingRight: 8 }}>
          <Text style={{ fontSize: 20, fontWeight: "800", color: colors.text, textAlign: "center" }}>
            Fresh Vegetables
          </Text>
          <Text style={{ color: colors.primary, marginTop: 4, fontWeight: "700", fontSize: 14 }}>
            Get Up To 40% OFF
          </Text>

          {/* Pagination dots */}
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 14 }}>
            <View style={{ width: 18, height: 6, borderRadius: 3, backgroundColor: colors.primary, marginHorizontal: 3 }} />
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#C8C8C8", marginHorizontal: 3 }} />
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#C8C8C8", marginHorizontal: 3 }} />
          </View>
        </View>

        {/* Decorative veggies – top right */}
        <View style={{ width: 60, height: "100%", position: "relative" }}>
          <Text style={{ position: "absolute", top: -4, right: -4, fontSize: 42 }}>🥦</Text>
          <Text style={{ position: "absolute", bottom: 4, right: 0, fontSize: 34 }}>🫑</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.text }}>
          Exclusive Offer
        </Text>
        <Pressable>
          <Text style={{ color: colors.primary, fontWeight: '600', fontSize: 16 }}>See all</Text>
        </Pressable>
      </View>

      <FlatList
        horizontal
        data={exclusive}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.text }}>
          Best Selling
        </Text>
        <Pressable>
          <Text style={{ color: colors.primary, fontWeight: '600', fontSize: 16 }}>See all</Text>
        </Pressable>
      </View>

      <FlatList
        horizontal
        data={bestSelling}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* ── Groceries Section ── */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.text }}>
          Groceries
        </Text>
        <Pressable>
          <Text style={{ color: colors.primary, fontWeight: '600', fontSize: 16 }}>See all</Text>
        </Pressable>
      </View>

      {/* Category chips */}
      <FlatList
        horizontal
        data={groceryCategories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 4 }}
        renderItem={({ item }) => {
          const isActive = activeCategory === item.id;
          return (
            <Pressable
              onPress={() => setActiveCategory(item.id)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: isActive ? colors.primary : item.bg,
                borderRadius: 20,
                paddingHorizontal: 16,
                paddingVertical: 10,
                marginRight: 10,
                borderWidth: isActive ? 0 : 1,
                borderColor: '#E2E2E2',
              }}
            >
              <Text style={{ fontSize: 20, marginRight: 6 }}>{item.emoji}</Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '600',
                color: isActive ? '#fff' : colors.text,
              }}>{item.name}</Text>
            </Pressable>
          );
        }}
      />

      {/* Grocery product grid (2 columns) */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 16 }}>
        {groceryProducts.map((item) => {
          const prodImg = groceryImages[item.id as keyof typeof groceryImages];
          return (
            <Pressable
              key={item.id}
              style={{
                width: '48%',
                borderRadius: 18,
                borderWidth: 1,
                borderColor: '#E2E2E2',
                backgroundColor: '#fff',
                padding: 14,
                marginBottom: 14,
              }}
            >
              {/* product image */}
              {prodImg ? (
                <Image
                  source={prodImg}
                  style={{
                    width: '100%',
                    height: 110,
                    resizeMode: 'contain',
                    marginBottom: 10,
                  }}
                />
              ) : (
                <Text style={{ fontSize: 64, textAlign: 'center', marginBottom: 10 }}>{item.emoji}</Text>
              )}
              <Text style={{ fontSize: 16, fontWeight: '700', color: colors.text }}>{item.name}</Text>
              <Text style={{ color: '#7C7C7C', fontSize: 13, marginTop: 2, marginBottom: 14 }}>{item.size}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: colors.text }}>${item.price.toFixed(2)}</Text>
                <Pressable
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 16,
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons name="add" size={22} color="#fff" />
                </Pressable>
              </View>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}
