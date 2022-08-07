import * as Yup from 'yup';

const loginVS = Yup.object().shape({
  email: Yup.string()
    .email('Please Enter a Valid Email')
    .required('Enter Your Email'),
  password: Yup.string().required('Enter Your Password'),
});

export {loginVS};
