import {TextInputProps} from 'react-native';
import React from 'react';
import {InputText, RegularText} from 'shared/theme/globalStyles';
import {GLOBAL_THEME} from 'shared/theme';
import styled from 'styled-components/native';

interface Props extends TextInputProps {
  label?: string;
}

const AppInput = (props: Props) => {
  return (
    <>
      <RegularText>{props.label}</RegularText>
      <InputContainer>
        <InputText {...props} />
      </InputContainer>
    </>
  );
};

export default AppInput;

const InputContainer = styled.View`
  width: 100%;
  align-self: center;
  height: 50px;
  margin-vertical: ${GLOBAL_THEME.MARGIN.LOW}px;
  border-color: ${props => props.theme.colors.SECONDARY_BACKGROUND_COLOR};
  border-width: 1px;
  border-radius: 10px;
  padding: 5px;
  background-color: ${props => props.theme.colors.PRIMARY_BACKGROUND_COLOR};
`;
