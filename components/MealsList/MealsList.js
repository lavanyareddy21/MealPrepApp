import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

export default function MealsList({items}) {
  return (
    <View style={styles.container}>
        <FlatList 
        data={items}
        keyExtractor={(item)=> item.id}
        renderItem={(itemData)=> 
            <MealItem id= {itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}/>
        }

        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
})