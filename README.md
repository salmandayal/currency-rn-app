# React Native APP

A Test app made with React-Native 0.69

## Main technologies used

1. Redux Toolkit + Saga
2. Splash Screen
3. StoryBook
4. Styled Components
5. Jest + Enzyme
6. React Navigation

## Install and run

- Make sure to have install JDK 11 for Android
- Setting the API key to get currency rates

```
API_LAYER_KEY=****8
```

### Android steps

- yarn install
- npx react-native run-android

### iOS steps

- yarn install
- npx pod-install
- npx react-native run-ios

### To run the storybook

- Change the value of LOAD_STORYBOOK to true in .env
- yarn storybook
