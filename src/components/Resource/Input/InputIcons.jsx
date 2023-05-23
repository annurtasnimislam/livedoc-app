import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { View, TextInput } from 'react-native'
import tw from '../../../library/tailwind'

export default function InputIcon({ placeholder }) {
    const [open, setOpen] = useState(true)

    return (
        <View style={tw`${styles.container}`}>
            <Feather style={tw`pr-2`} name="lock" size={19} color="#808D9E" />
            <TextInput placeholder={placeholder} secureTextEntry={open ? true : false} />
            <Feather
                style={tw`${styles.eye}`}
                name={open ? 'eye-off' : 'eye'}
                size={19}
                color="#808D9E"
                onPress={() => setOpen(!open)}
            />
        </View>
    )
}

const styles = {
    container: 'flex-row items-center my-3.5 border border-light rounded-2 py-2 px-3',
    eye: 'absolute right-3',
}
