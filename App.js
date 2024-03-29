import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import MyTabs from './navigations/Tabs/MyTabs';
import SettingScreen from './screen/TaskScreen';
import ImageTask from './screen/task/ImageTask';
import TaskManager from './screen/task/TaskManager';
export default function App() {
  const Stack = createNativeStackNavigator ();
  return (
   <NavigationContainer>
 
    <Stack.Navigator 
   
    >
      <Stack.Screen name='Home' options={{
        headerShown:false
      }}  component={MyTabs}/>
      <Stack.Screen name='Setting' component={SettingScreen}  
      
      
      />
      <Stack.Screen name='imageTask' component={ImageTask}/>
      <Stack.Screen name='localStorge' component={TaskManager}/>

    </Stack.Navigator>
 
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
