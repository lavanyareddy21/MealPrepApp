import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGrid from "../components/CategoriesGrid";

export default function CategoriesScreen({navigation}) {
  return (
    <View style={styles.screen}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Global Cuisine Guide</Text>
      </View> */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CategoriesGrid
            title={itemData.item.title}
            color={itemData.item.color}
            image={itemData.item.image}

            onPress={()=> navigation.navigate('MealsScreen',{
                categoryId : itemData.item.id,
            })}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

const deviceWidth = Dimensions.get("screen").width;
// console.log(deviceWidth);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: deviceWidth < 390 ? 4 : 8,
  },
  titleContainer:{
    backgroundColor: '#40709c',
    alignItems: 'center',
    borderRadius: 15,
    margin: 12,
    padding:10

  },
  title: {
    fontSize: 32,
    fontFamily: "DM-Serif-Text",
    color: "white",
    textAlign: "center",
  },
});
