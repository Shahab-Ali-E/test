import { createStackNavigator } from '@react-navigation/stack';

//screens
import More from '../screens/More';
import Settings from '../screens/MoreStackScreens/Settings'
import Tasbeeh from '../screens/MoreStackScreens/Tasbeeh'

const Stack = createStackNavigator();

const StackNavigation =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="More" 
        component={More} 
        
      />
      <Stack.Screen name='Settings' component={Settings}/>
      <Stack.Screen name='Tasbeeh' component={Tasbeeh}/>
    </Stack.Navigator>
  );
}

export default StackNavigation