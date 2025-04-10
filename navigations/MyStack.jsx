import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Home  from "../screens/Home";
import MyTabs from "./MyTabs";

export default function MyStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
}
