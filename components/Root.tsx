import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './Home';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} options={{title: ''}} />
    </Stack.Navigator>
  );
};

export default Root;
