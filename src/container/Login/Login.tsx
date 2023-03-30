import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc'

import Button from '~/components/Button'
import Input from '~/components/Input'
import rootStore from '~/store'
function Login(): JSX.Element {
  const { loginStore } = rootStore
  const { onSubmit, email, password } = loginStore
  return (
    <SafeAreaView style={tw`justify-center items-center h-100`}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={value => {
          runInAction(() => {
            loginStore.email = value
          })
        }}
      />
      <Input
        value={password}
        placeholder="Password"
        onChangeText={value => {
          runInAction(() => {
            loginStore.password = value
          })
        }}
      />
      <Button title={'Submit'} onPress={() => onSubmit()} />
    </SafeAreaView>
  )
}

export default observer(Login)
