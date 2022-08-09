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
        // @ts-ignore
        barStyle={settings.theme.STATUS_BAR_STYLE}
        backgroundColor={settings.theme.colors.PRIMARY_BACKGROUND_COLOR}
      />
      <SafeArea height="100%">
        <NavigationContainer>
          {user.authenticated ? <DashBoardStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeArea>
      {/* <SafeArea /> */}
    </ThemeProvider>
  );
};

export default Routes;
