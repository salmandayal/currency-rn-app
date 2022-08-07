module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          assets: ['./src/assets'],
          routes: ['./src/routes'],
          screens: ['./src/screens'],
          shared: ['./src/shared'],
        },
      },
    ],
    'babel-plugin-styled-components',
    'react-native-reanimated/plugin',
  ],
};
