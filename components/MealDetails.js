import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealDetails({duration, complexity, affordability ,style, textStyle}) {
  return (
    <View style={[styles.detailsContainer, style]}>
            <Text style={[styles.details, textStyle]}>DURATION:{duration}m</Text>
            <Text style={[styles.details, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.details, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    details:{
        fontSize: 14,
        fontWeight: 500,
        paddingHorizontal: 6,
      },
      detailsContainer: {
         flexDirection: 'row',
         paddingHorizontal:10,
         paddingTop:5,
         paddingBottom:10,
        //  justifyContent:'space-between',
         justifyContent:'center'
      }
})