import { Input } from '@rneui/themed'
import tw from 'twrnc'

export default function CustomInput(props) {
  return (
    <Input
      {...props}
      style={tw`shadow-xl bg-gray-100 rounded-3 flex justify-center items-center py-5 px-4`}
      inputContainerStyle={{
        ...props.inputContainerStyle,
        borderBottomWidth: 0,
      }}
    />
  )
}
