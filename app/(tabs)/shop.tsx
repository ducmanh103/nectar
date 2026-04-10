import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    ImageBackground,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { products } from "../../src/data";
import { colors } from "../../src/theme";
import { ProductCard, Screen } from "../../src/ui";

export default function ShopScreen() {
  const router = useRouter();
  const exclusive = products.slice(0, 2);
  const bestSelling = products.slice(2, 4);

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

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop",
        }}
        style={{
          height: 120,
          borderRadius: 18,
          overflow: "hidden",
          marginTop: 20,
          justifyContent: "center",
          paddingHorizontal: 18,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            width: 220,
            borderRadius: 14,
            padding: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "800", color: colors.text }}>
            Fresh Vegetables
          </Text>
          <Text style={{ color: colors.primary, marginTop: 4, fontWeight: "600" }}>
            Get Up To 40% OFF
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
             <View style={{ width: 16, height: 6, borderRadius: 3, backgroundColor: colors.primary, marginHorizontal: 2 }} />
             <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#D9D9D9', marginHorizontal: 2 }} />
             <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#D9D9D9', marginHorizontal: 2 }} />
          </View>
        </View>
      </ImageBackground>

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
    </Screen>
  );
}
