module.exports = function (api) {
  api.cache(false)

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '~': './src',
            '~/store': './src/store',
          },
        },
      ],
      ['module:react-native-dotenv'],
    ],
  }
}
