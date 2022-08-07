import {StatusBar} from 'react-native';
import React from 'react';
import {appTheme, THEME} from 'shared/theme';
import {useSelector} from 'react-redux';
import {RootState} from 'shared/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getDataFetch} from 'shared/store/reducers/userReducer';

type Props = {};

const Routes = (props: Props) => {
  const {user, settings} = useSelector((state: RootState) => state);

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
        theme={appTheme(settings.darkMode)}
      />
    </>
  );
};

export default Routes;
