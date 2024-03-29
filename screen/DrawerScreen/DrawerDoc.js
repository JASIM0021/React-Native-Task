import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerDoc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Drawer initial screen {"\n"} swipe left to right or click the top right icon to open drawer</Text>
    </View>
  )
}

export default DrawerDoc

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