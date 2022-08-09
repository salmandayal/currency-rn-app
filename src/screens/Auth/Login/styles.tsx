import {THEME} from 'shared/theme';
import {RF} from 'shared/theme/responsive';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 0 ${RF(25)}px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.PRIMARY_BACKGROUND_COLOR};
`;

const TextContainer = styled.View`
  padding: ${RF(16)}px;
`;

const Text = styled.Text`
  color: #000000;
  font-size: ${RF(24)}px;
  font-family: ${THEME.FONTS.TYPE.REGULAR};
`;

const Button = styled.TouchableOpacity`
  margin: ${RF(32)}px 0;
  background-color: #23a8d9;
  padding: ${RF(16)}px ${RF(32)}px;
  border-radius: ${RF(8)}px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: ${THEME.FONTS.TYPE.SEMIBOLD};
`;

export {Container, TextContainer, Text, Button, ButtonText};
