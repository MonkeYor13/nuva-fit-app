import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigations/MyStack";
import UseContext from "./context/UseContext";

export default function App() {
  return (
    <NavigationContainer>
      <UseContext>
        <MyStack />
        <StatusBar style="auto" />
      </UseContext>
    </NavigationContainer>
  );
}
