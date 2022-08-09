import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/Dashboard/Home';

type Props = {};
const Stack = createNativeStackNavigator();

const DashBoardStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DashBoardStack;
