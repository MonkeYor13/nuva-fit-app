import { FlatList, View, Text, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle } from "../imports/imports";
import RopaDeportiva from "../data/ropaDeportiva";
import { CardOffer, CardRopa } from "../imports/imports";
import Contexto from "../context/Contexto";

export default function Home() {
  const tops = RopaDeportiva.filter((item) => item.category === "Tops");
  const leggings = RopaDeportiva.filter((item) => item.category === "Leggings");
  const conjunto = RopaDeportiva.filter(
    (item) => item.category === "Conjuntos"
  );

  const { listOffers } = useContext(Contexto);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* CARD OFFERS */}
        <FlatList
          data={listOffers}
          renderItem={({ item }) => <CardOffer item={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* CARD TOPS */}
        <View style={globalStyle.textConten}>
          <Text style={globalStyle.textTitle}>Tops and Bras Collection</Text>
          <Text style={globalStyle.textSubTitle}>Show all</Text>
        </View>
        <FlatList
          data={tops}
          renderItem={({ item }) => (
            <CardRopa
              item={item}
              // isLiked={isRopaLiked}
              // toggleLike={toggleLike}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* CARD LEGGINGS */}
        <View style={globalStyle.textConten}>
          <Text style={globalStyle.textTitle}>Tops and Bras Collection</Text>
          <Text style={globalStyle.textSubTitle}>Show all</Text>
        </View>
        <FlatList
          data={leggings}
          renderItem={({ item }) => (
            <CardRopa
              item={item}
              // isLiked={isRopaLiked}
              // toggleLike={toggleLike}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* CARD CONJUNTO */}
        <View style={globalStyle.textConten}>
          <Text style={globalStyle.textTitle}>Tops and Bras Collection</Text>
          <Text style={globalStyle.textSubTitle}>Show all</Text>
        </View>
        <FlatList
          data={conjunto}
          renderItem={({ item }) => (
            <CardRopa
              item={item}
              // isLiked={isRopaLiked}
              // toggleLike={toggleLike}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
