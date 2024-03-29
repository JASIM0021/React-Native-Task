import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingScreen from './TaskScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerDoc from './DrawerScreen/DrawerDoc';
import Screen1 from './DrawerScreen/Screen1';
import Screen2 from './DrawerScreen/Screen2';
import constant from '../constant';


const DrawerScreen = [

  {
    name:constant.Home,
    screen:DrawerDoc
  },
  {
    name:constant.Screen1,
    screen:Screen1
  },
  {
    name:constant.Screen2,
    screen:Screen2
  }
]

const HomeScreen = () => {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator initialRouteName="Home">
      
        {
          DrawerScreen.map((item,index)=><Drawer.Screen key={`DrawerIndex`+index} name={item.name}component={item.screen} />)
        }

        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})