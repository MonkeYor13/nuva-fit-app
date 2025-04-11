import { View, Text } from "react-native";
import React, { useState } from "react";
import Contexto from "./Contexto";
import offersList from "../data/offersList";
import ropaDeportiva from "../data/ropaDeportiva";

export default function UseContext({ children }) {
  const [listOffers, setListOffers] = useState(offersList);
  const [RopaDeportiva, setRopaDeportiva] = useState(ropaDeportiva);
  const [likeRopa, setLikeRopa] = useState([]);

  const toggleLike = (ropa) => {
    setLikeRopa((prevLikes) => {
      if (prevLikes.some((r) => r.id === ropa.id)) {
        return prevLikes.filter((v) => r.id !== ropa.id); // Quitar de favoritos
      } else {
        return [...prevLikes, ropa]; // Añadir a favoritos
      }
    });
  };

  return (
    <Contexto.Provider value={{ listOffers, RopaDeportiva, likeRopa, toggleLike }}>
      {children}
    </Contexto.Provider>
  );
}
