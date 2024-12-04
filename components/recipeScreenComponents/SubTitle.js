import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SubTitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    subTitleContainer:{
        padding:6,
        marginHorizontal:2,
        marginVertical: 4,
        borderBottomColor: 'pink',
        borderBottomWidth: 2
    },
    subTitle:{
        color: 'pink',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    }
})