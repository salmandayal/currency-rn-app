import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {THEME} from 'shared/theme';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'shared/store';
import {useEffect} from 'react';
import {setUser} from 'shared/store/reducers/userReducer';

type Props = {};

const Routes = (props: Props) => {
  let darkMode = true;
  const {user} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log('Password dcheck', user.password);

  useEffect(() => {}, []);
  return (
    <>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          darkMode ? THEME.COLORS.primaryDarkBackground : 'transparent'
        }
      />
      <View>
        <Text>Routes</Text>
      </View>
    </>
  );
};

export default Routes;
