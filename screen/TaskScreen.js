import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageToggle from '../components/ImageToggle'
import { useNavigation } from '@react-navigation/native'

const TaskScreen = () => {
  const navigation = useNavigation()

  const onbtnClicked =(btn)=>{
    if(btn=='image'){
      navigation.navigate('imageTask')
    } else {
      navigation.navigate('localStorge')
    }
  }

  return (   
  

    <View style={styles.container}>
      
      <TouchableOpacity style={styles.btn} onPress={()=>onbtnClicked('image')}>
        <Text style={styles.text}>Image Task (Local / fetch) </Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.btn} onPress={()=>onbtnClicked('')}>
        <Text style={styles.text}>LocalStorage Task</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:30,
    rowGap:20
  },
  btn:{
    height:50,
    width:'100%',
    borderRadius:10,
   
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white'
  }
})