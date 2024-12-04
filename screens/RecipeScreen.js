import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/recipeScreenComponents/SubTitle";
import ListIngredientsAndSteps from "../components/recipeScreenComponents/ListIngredientsAndSteps";
import IconBtn from "../components/recipeScreenComponents/IconBtn";
import { CATEGORIES } from "../data/dummy-data";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/fav-context";

export default function RecipeScreen({ route, navigation }) {
  // const favMealsCtx = useContext(FavoritesContext);

  const favMealIds =  useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const catId = route.params.categoryId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const category = CATEGORIES.find((cat) => cat.id === catId); // Find category by id

  // const mealIsFavorite = favMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favMealIds.includes(mealId);

  // ---------Header with respective recipe name--------
  //   useLayoutEffect(()=>{
  //     const recipeTitle = MEALS.find((meal) => meal.id === mealId).title

  //     navigation.setOptions({
  //         title: recipeTitle
  //     });
  // },[mealId, navigation]);


  // ----------Context-----------
  // function changeFavStateHandler() {
  //   if (mealIsFavorite){
  //     favMealsCtx.removeFavorite(mealId);
  //   } else {
  //     favMealsCtx.addFavorite(mealId);
  //   }
  // }

  function changeFavStateHandler() {
    if (mealIsFavorite){
      dispatch(removeFavorite({id: mealId}));
    } else {
      dispatch(addFavorite({id: mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            icon={mealIsFavorite ? 'favorite' : 'favorite-border'}
            color={mealIsFavorite ? 'red': 'white'}
            onPress={changeFavStateHandler}
          />
        );
      },
      headerBackTitle: category?.title,
    });
  }, [navigation, changeFavStateHandler, category]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.mealDetailsStyling}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <ListIngredientsAndSteps data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <ListIngredientsAndSteps data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    padding: 1,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 1,
  },
  title: {
    fontFamily: "DM-Serif-Text",
    fontSize: 24,
    textAlign: "center",
    padding: 6,
    color: "white",
    margin: 8,
  },
  mealDetailsStyling: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
