// components/CategoriesGrid.js
import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

export default function CategoriesGrid({ title, color, image, onPress }) {
  return (
    <View style={[styles.gridContainer,{backgroundColor:color}]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.pressableContainer,
          pressed ? styles.pressedBtn : null,
        ]}

        onPress={onPress}

      >
        <View style={styles.innerContainer}>
          <Image source={image} style={styles.image} />
          <View style={[styles.textContainer, { backgroundColor: color }]}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 12,
    height: 250,
    // backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressedBtn: {
    opacity: 0.5,
  },
  pressableContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding:2
  },
  image: {
    width: "100%",
    height: "85%",
    borderRadius:10
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontFamily: "DM-Serif-Text",
    fontSize: 20,
    color: "white", // Assuming text color contrast against the background color
  },
});
