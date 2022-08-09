import {StatusBar} from 'react-native';
import React from 'react';
import {appTheme, THEME} from 'shared/theme';
import {useSelector} from 'react-redux';
import {RootState} from 'shared/store';
import {NavigationContainer} from '@react-navigation/native';
import DashBoardStack from './DashBoard/DashBoard.routes';
import AuthStack from './Auth/Auth.routes';
import {SafeArea} from 'shared/components/styles/SafeAreaView.styled';
import {ThemeProvider} from 'styled-components';

type Props = {};

const Routes = (props: Props) => {
  const {user, settings} = useSelector((state: RootState) => state);

  return (
    <ThemeProvider theme={settings.theme}>
      <StatusBar
        barStyle={settings.darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          settings.darkMode ? THEME.COLORS.primaryDarkBackground : 'transparent'
        }
      />
      <SafeArea height="100%">
        <NavigationContainer
          // @ts-ignore
          theme={appTheme(settings.darkMode)}>
          {user.authenticated ? <DashBoardStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeArea>
      {/* <SafeArea /> */}
    </ThemeProvider>
  );
};

export default Routes;
