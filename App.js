import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsScreen from "./screens/MealsScreen";
import RecipeScreen from "./screens/RecipeScreen";
import "react-native-gesture-handler";
import FavoriteScreen from "./screens/FavoriteScreen";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import FavoritesContextProvider from "./store/context/fav-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // cardStyle: { backgroundColor: "#102436" },// for stack nab=vigation
        sceneContainerStyle: {backgroundColor: "#102436"},
        headerStyle: { backgroundColor: "#40709c" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 24,
        },
        drawerContentStyle: {
          backgroundColor: '#102436'
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#0a3459',
        drawerActiveBackgroundColor: '#5f82a2'

      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Global Cuisin Guide", drawerIcon: ({color, size}) => (
          <FontAwesome5 name="list-ul" size={size} color={color} />
        ) }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen}
      options={{ drawerIcon : ({size, color}) => (
        <MaterialIcons name='favorite' size={size} color={color} />
      )}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "DM-Serif-Text": require("./assets/fonts/DMSerifText-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: "#102436" },
            headerStyle: { backgroundColor: "#40709c" },
            headerTintColor: "white",
            // headerBackTitle: "Back",
            headerTitleStyle: {
              fontSize: 24,
            },
            headerBackTitleStyle: {
              fontSize: 16,
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsScreen" component={MealsScreen} 
          options={{headerBackTitle: 'Categories'}}
          />
          <Stack.Screen
            name="recipeScreen"
            component={RecipeScreen}
            options={{
              title: "Recipe",
              // headerRight: () => {
              //   return <Button title="Fav" color={'white'}/>
              // }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
