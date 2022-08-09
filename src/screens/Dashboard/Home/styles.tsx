import {RF} from 'shared/theme/responsive';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const Container = styled.View`
  flex: 1;
  padding: 0 ${RF(20)}px;
  background-color: ${props => props.theme.colors.PRIMARY_BACKGROUND_COLOR};
`;

const VerticalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const styles = StyleSheet.create({
  settingsIcon: {
    alignSelf: 'flex-end',
    marginVertical: RF(20),
  },
  exchaneIcon: {
    marginVertical: RF(20),
    marginTop: RF(30),
    alignSelf: 'center',
  },
});

export {Container, VerticalContainer, styles};
