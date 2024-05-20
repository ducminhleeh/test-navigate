import {useNavigation} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Button, View} from 'react-native';
import Item from './Item';

const Stack = createStackNavigator();

const ListComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Menu',
            params: {
              screen: 'List',
              params: {
                screen: 'Item',
              },
            },
          })
        }
        title="Item"
      />
    </View>
  );
};

const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={ListComponent}
        options={{
          title: 'List',
        }}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={{
          title: 'Item',
        }}
      />
    </Stack.Navigator>
  );
};

export default ListStack;
