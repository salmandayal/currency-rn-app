import {View, Text, TextInputProps, TextInput} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {RootState} from 'shared/store';
import {useSelector} from 'react-redux';
import {RF} from 'shared/theme/responsive';
import {GLOBAL_THEME} from 'shared/theme';

interface Props extends TextInputProps {
  onSelectCurrency: () => void;
  currency: string;
}

const CurrencyInput = (props: Props) => {
  const {settings} = useSelector((state: RootState) => state);

  return (
    <Container>
      <Button testID="select-currency-button" onPress={props.onSelectCurrency}>
        <ButtonText>{props.currency.toUpperCase()}</ButtonText>
      </Button>
      <InputContainer>
        <TextInput
          selectionColor={settings.theme.colors.SECONDARY_BACKGROUND_COLOR}
          {...props}
        />
      </InputContainer>
    </Container>
  );
};

export default CurrencyInput;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-vertical: ${GLOBAL_THEME.MARGIN.LOW}px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.SECONDARY_BACKGROUND_COLOR};
  padding: ${RF(16)}px ${RF(32)}px;
  width: 30%;
  align-items: center;
  align-self: center;
  max-height: ${RF(50)}px;
  border-color: ${props => props.theme.colors.SECONDARY_BACKGROUND_COLOR};
  border-width: 1px;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.PRIMARY_BUTTON_TEXT_COLOR};
  font-family: ${GLOBAL_THEME.FONTS.TYPE.BOLD};
`;

const InputContainer = styled.View`
  max-height: ${RF(50)}px;
  width: 70%;
  align-self: center;
  border-color: ${props => props.theme.colors.SECONDARY_BACKGROUND_COLOR};
  border-width: 1px;
  padding: 5px;
  background-color: ${props => props.theme.colors.PRIMARY_BACKGROUND_COLOR};
`;
