import { API_URL } from '@env'
import { Button, SafeAreaView, Text, View } from 'react-native'

import rootStore from '~/store'

function Home({ navigation }): JSX.Element {
  const backgroundStyle = {
    height: '100%',
  }
  const {
    homeStore: { page, text },
  } = rootStore
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>{API_URL}</Text>
      <View style={{ flex: 1 }} />
      <Button
        onPress={() => {
          navigation.navigate('Login')
        }}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        title={'Go to Login'}
      />
    </SafeAreaView>
  )
}

export default Home
