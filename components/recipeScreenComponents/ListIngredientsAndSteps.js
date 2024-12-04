import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListIngredientsAndSteps({data}) {
  return  data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
    <Text style={styles.itemText} >{dataPoint}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:6,
        marginVertical: 4,
        backgroundColor: 'tan'
    },
    itemText:{
        color: 'midnightblue',
        textAlign:'center',
        fontWeight: '600'
    }
})