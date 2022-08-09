import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {GLOBAL_THEME} from '.';
import {RF} from './responsive';

const MainText = styled.Text`
  color: ${props => props.theme.colors.PRIMARY_TEXT_COLOR};
  font-size: ${RF(24)}px;
  text-align: center;
  font-family: ${GLOBAL_THEME.FONTS.TYPE.SEMIBOLD};
`;

const TextContainer = styled.View`
  padding: 16px;
  margin: 20px 0;
`;

const RegularText = styled.Text`
  color: ${props => props.theme.colors.PRIMARY_TEXT_COLOR};
  font-size: ${props => (props.size ? props.size : RF(14))}px;
  text-align: ${props => (props.align ? props.align : 'left')};
  font-family: ${GLOBAL_THEME.FONTS.TYPE.REGULAR};
`;

const InputText = styled.TextInput``;

const GlobalStylesheet = StyleSheet.create({
  basicContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {InputText, MainText, RegularText, TextContainer, GlobalStylesheet};
