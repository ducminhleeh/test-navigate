import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './components/Root';

const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
