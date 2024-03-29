import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>This is Screen1</Text>
  </View>

  )
}

export default Screen1

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
    },
    text:{
        color:'green',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20
    }
})