import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Favorite, Cart, Me } from "../imports/imports";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import globalStyles from "../css/globalStyle";

export default function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: globalStyles.unActive,
        tabBarActiveTintColor: globalStyles.colorDark,
      }}
    >
      <Tab.Screen
        name="myHome"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          title: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="me"
        component={Me}
        options={{
          title: "Me",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="female" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
