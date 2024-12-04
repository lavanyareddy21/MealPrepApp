import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function IconBtn({icon, color, onPress}) {
  return (
    <View style={styles.container}> 
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
    <MaterialIcons name={icon} size={29} color={color} />
    </Pressable> 
    </View>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.25
        },
    container: {
      marginHorizontal: 10
    }
})