import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExercisesScreen from "@/screens/exercises";
import HomeTabs from "@/tabs/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Exercises"
          component={ExercisesScreen}
          options={{
            headerTitleStyle: {
              fontSize: 24,
            },
            headerTintColor: "#000",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
