import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import HomeScreen from "@/screens/home";
import SettingScreen from "@/screens/setting";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Training"
        component={HomeScreen}
        options={{
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerTitle,
          headerTitle: "Home workout",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="timer"
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-compass-sharp"
              size={24}
              color={focused ? "blue" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    textTransform: "uppercase",
    fontSize: 24,
  },
});
