import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ExercisesScreen from "@/screens/exercises";
import HomeTabs from "@/tabs/home";
import { RootStackParamList } from "@/ultilities/types";
import { getDifficultString } from "@/ultilities/utils";

type ExercisesRoute = NativeStackScreenProps<
  RootStackParamList,
  "Exercises"
>["route"];

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const getExercisesOptions = ({ route }: { route: ExercisesRoute }) => {
    const { target, difficult } = route.params;
    return {
      title: `${target.toUpperCase()} ${getDifficultString(difficult)}`,
      headerTintColor: "#000",
      headerTitleStyle: {
        fontSize: 24,
      },
    };
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "seashell" }}>
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
              options={getExercisesOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
