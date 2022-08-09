import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {RF} from 'shared/theme/responsive';
import {Button, ButtonText, Container, Text, TextContainer} from './styles';

type Props = {};

const Login = (props: Props) => {
  return (
    <Container>
      <TextContainer>
        <Text>Welcome to Currency App</Text>
      </TextContainer>

      <Button>
        <ButtonText>Change something</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
