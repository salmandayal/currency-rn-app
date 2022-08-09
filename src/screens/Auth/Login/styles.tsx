import {GLOBAL_THEME} from 'shared/theme';
import {RF} from 'shared/theme/responsive';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 0 ${RF(25)}px;
  background-color: ${props => props.theme.colors.PRIMARY_BACKGROUND_COLOR};
`;

const Button = styled.TouchableOpacity`
  margin: ${RF(32)}px 0;
  background-color: ${props => props.theme.colors.SECONDARY_BACKGROUND_COLOR};
  padding: ${RF(16)}px ${RF(32)}px;
  border-radius: ${RF(8)}px;
  min-width: ${RF(200)}px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.PRIMARY_BUTTON_TEXT_COLOR};
  font-family: ${GLOBAL_THEME.FONTS.TYPE.BOLD};
`;

export {Container, Button, ButtonText};
