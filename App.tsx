import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./components/ui/bottom-navigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
