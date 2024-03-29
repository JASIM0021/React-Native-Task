import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import SettingScreen from '../../screen/TaskScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import FontAwesome5  from  'react-native-vector-icons/FontAwesome5'
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    
    screenOptions={{
        headerShown:false
        
      }}
    >
      <Tab.Screen   name="Drawer" component={HomeScreen} 
      
      options={{
        tabBarLabel: 'Drawer',
        
        
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="menu" color={'green'} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} 
      
      options={{
        tabBarLabel: 'Task',
        
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="tasks" color={'green'} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs