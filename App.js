import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FrameworkScreen from "./screens/FrameworkScreen";
import FrameworkDetailScreen from "./screens/FrameworkDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#212121" },
        headerTintColor: "#f5f5f5",
        sceneContainerStyle: { backgroundColor: "#3F3F3F" },
        drawerContentStyle: { backgroundColor: "#3F3F3F" },
        drawerInactiveTintColor: "#f5f5f5",
        drawerActiveTintColor: "#212121",
        drawerActiveBackgroundColor: "#f5f5f5",
      }}
    >
      <Drawer.Screen
        name="CodeLang"
        component={CategoriesScreen}
        options={{
          title: "CodeLang",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-sharp" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#212121" },
              headerTintColor: "#f5f5f5",
              contentStyle: { backgroundColor: "#3F3F3F" },
            }}
          >
            <Stack.Screen
              name="Language"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Frameworks"
              component={FrameworkScreen}
              // options={({ route, navigation }) => {
              //   const cId = route.params.codeId;
              //   return {
              //     title: cId,
              //   };
              // }}
            />
            <Stack.Screen
              name="FrameworkDetail"
              component={FrameworkDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
