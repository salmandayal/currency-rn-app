import React, {useState} from 'react';
import AppInput from 'shared/components/AppInput';
import {
  GlobalStylesheet,
  MainText,
  RegularText,
  TextContainer,
} from 'shared/theme/globalStyles';
import {Button, ButtonText, Container} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {loginVS} from 'shared/validations/AuthValidations';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from 'shared/store/reducers/userReducer';
import {ActivityIndicator} from 'react-native';
import {RootState} from 'shared/store';
import AppLoader from 'shared/components/AppLoader';

type Props = {};

const Login = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const initialFormValues = {
    email: '',
    password: '',
  };
  const onLogin = (params: typeof initialFormValues) => {
    //Set User
    setLoading(true);
    setTimeout(() => {
      dispatch(setUser(params));
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        contentContainerStyle={GlobalStylesheet.basicContainer}>
        <TextContainer>
          <MainText>Welcome to Currency App</MainText>
        </TextContainer>

        <Formik
          initialValues={initialFormValues}
          onSubmit={values => onLogin(values)}
          validationSchema={loginVS}>
          {({errors, touched, handleChange, handleSubmit, values}) => (
            <>
              {/* {console.log(touched.email, errors.email)} */}
              <AppInput
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="Enter Number"
                label="Email"
                returnKeyType="done"
                keyboardType="email-address"
                testID="email-input"
              />
              {touched.email && errors.email ? (
                <RegularText>{'Hello'}</RegularText>
              ) : null}
              <AppInput
                placeholder="Enter Password"
                label="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                returnKeyType="done"
                testID="password-input"
              />
              {touched.email && errors.password ? (
                <RegularText>{errors.password}</RegularText>
              ) : null}
              {loading ? (
                <AppLoader />
              ) : (
                <Button
                  testID="login-button"
                  onPress={() => {
                    console.log(values);
                    onLogin(values);
                  }}>
                  <ButtonText>Login</ButtonText>
                </Button>
              )}
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Login;
