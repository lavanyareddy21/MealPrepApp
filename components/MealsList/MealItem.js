import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("recipeScreen", {
      mealId: id,
    });
  }
  return (
    <View style={styles.MealContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressedBtn : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MealContainer: {
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 10,
    backgroundColor: "white",
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  pressedBtn: {
    opacity: 0.65,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontFamily: "DM-Serif-Text",
    fontSize: 24,
    textAlign: "center",
    padding: 6,
  },
});
