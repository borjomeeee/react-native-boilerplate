module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@App': './src',
          '@UI': './src/Components',
          '@Services': './src/Services',
          '@Navigation': './src/Navigation',
          '@Lib': './src/Lib',
          '@Redux': './src/Redux',
        },
        extensions: [
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
