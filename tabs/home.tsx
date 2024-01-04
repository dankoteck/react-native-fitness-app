import { StyleSheet } from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@/screens/home";
import SettingScreen from "@/screens/setting";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
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
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerTitle,
          headerTitle: "Settings",
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
