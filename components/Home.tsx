import React from 'react';

import {View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import MenuStack from './Menu';

const Stack = createStackNavigator();

const HomeComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Menu')} title="Menu" />
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeComponent} />
      <Stack.Screen
        name="Menu"
        component={MenuStack}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
