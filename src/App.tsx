import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectScreen from './screens/ConnectScreen/ConnectScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LightScreen from './screens/LightsScreen/LightsScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{title: 'Phue'}}
        />
        <Stack.Screen name={PageEnum.CONNECT} component={ConnectScreen} />
        <Stack.Screen name={PageEnum.LIGHT} component={LightScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

enum PageEnum {
  HOME = 'Home',
  CONNECT = 'Connect',
  LIGHT = 'Lights',
}

export default App;
