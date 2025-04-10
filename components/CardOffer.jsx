import { View, Image } from "react-native";
import React from "react";


export default function CardOffer({item}) {
  return (
    <View>
      <Image source={item.imagen} />
    </View>
  );
}
