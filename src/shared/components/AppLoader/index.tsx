import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {RootState} from 'shared/store';

type Props = {};

const AppLoader = (props: Props) => {
  const {settings} = useSelector((state: RootState) => state);
  return (
    <Container>
      <ActivityIndicator
        color={settings.theme.colors.SECONDARY_BACKGROUND_COLOR}
        size="large"
      />
    </Container>
  );
};

export default AppLoader;

const Container = styled.View`
  margin: 20px 0;
  width: 100%;
  aligh-items: center;
  justify-content: center;
  padding: 20px;
`;
