import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { View, TextInput } from 'react-native'
import tw from '../../../library/tailwind'

export default function InputIcon({ placeholder }) {
    const [open, setOpen] = useState(true)

    return (
        <View style={tw`${styles.container}`}>
            <View style={tw`${styles.flex}`}>
                <Feather name="lock" size={19} color="#808D9E" />
                <TextInput placeholder={placeholder} secureTextEntry={open ? true : false} />
            </View>
            <Feather name={open ? 'eye-off' : 'eye'} size={19} color="#808D9E" onPress={() => setOpen(!open)} />
        </View>
    )
}

const styles = {
    container: 'w-[100%] flex-row justify-between items-center my-3.5 border border-light rounded-2 py-2 px-3',
    flex: 'flex-row gap-2 items-center',
}
