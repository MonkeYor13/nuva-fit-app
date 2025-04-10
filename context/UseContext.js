import { View, Text } from "react-native";
import React, {useState} from "react";
import Contexto from "./Contexto";
import offersList from "../data/offersList";

export default function UseContext({ children }) {
  const [listOffers, setListOffers] = useState(offersList);
  return (
    <Contexto.Provider value={{ listOffers }}>{children}</Contexto.Provider>
  );
}
