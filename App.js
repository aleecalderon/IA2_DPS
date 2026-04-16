import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ARScreen from "./src/screens/ARScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="AR" component={ARScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}