import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import globalStyles from "../css/globalStyle";

export default function CardRopa({ item, toggleLike, isRopaLiked }) {
  // Limitar texto de los nombres de vinos con 3 puntitos
  const truncarText = (text, limite) => {
    return text.length > limite ? text.substring(0, limite) + "..." : text;
  };
  return (
    <View style={globalStyles.card}>
      <View>
        <Image
          source={item.imagen}
          resizeMode="cover"
          style={globalStyles.cardImagen}
        />
        <Pressable style={globalStyles.heart} onPress={() => toggleLike(item)}>
          <MaterialIcons
            name="favorite"
            size={24}
            color={globalStyles.colorLiked}
          />
        </Pressable>
      </View>
      <Text style={globalStyles.cardText}>{truncarText(item.titulo, 26)}</Text>
      <View style={globalStyles.cardContentRow}>
        <Text style={globalStyles.cardTitulo}>${item.precio}</Text>
        <View style={globalStyles.cardPonderacion}>
          <AntDesign name="star" size={16} color={globalStyles.colorDark} />
          <Text style={globalStyles.cardText}>{item.ponderacion}</Text>
        </View>
      </View>
    </View>
  );
}
