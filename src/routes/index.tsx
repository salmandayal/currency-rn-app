import {View, Text, StatusBar, Button} from 'react-native';
import React, {useEffect} from 'react';
import {appTheme, THEME} from 'shared/theme';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'shared/store';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getDataFetch} from 'shared/store/reducers/userReducer';

type Props = {};

const Routes = (props: Props) => {
  const {user, settings} = useSelector((state: RootState) => state);

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar
        barStyle={settings.darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          settings.darkMode ? THEME.COLORS.primaryDarkBackground : 'transparent'
        }
      />
      <NavigationContainer
        // @ts-ignore
        theme={appTheme(settings.darkMode)}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SecondScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getDataFetch());
  }, [dispatch]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Second Screen"
        onPress={() => dispatch<any>(getDataFetch())}
      />
    </View>
  );
}

function SecondScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Second Screen</Text>
    </View>
  );
}

export default Routes;
