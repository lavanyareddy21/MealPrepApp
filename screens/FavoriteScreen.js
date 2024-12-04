import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
// import { FavoritesContext } from '../store/context/fav-context'
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoriteScreen() {

  // const favMealsCtx = useContext(FavoritesContext);
  // const favMeals = MEALS.filter((meal)=> favMealsCtx.ids.includes(meal.id))

  const favMealIds = useSelector(state => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal)=> favMealIds.includes(meal.id))

  if (favMeals.length === 0){
    return(
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList items={favMeals}/>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  }

})