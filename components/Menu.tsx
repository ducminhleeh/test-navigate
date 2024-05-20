import {useNavigation} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Button, View} from 'react-native';
import ListStack from './List';

const Stack = createStackNavigator();

const MenuComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('List')} title="List" />
    </View>
  );
};

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuComponent}
        options={{
          title: 'Menu',
        }}
      />
      <Stack.Screen
        name="List"
        component={ListStack}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
