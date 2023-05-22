import { View, TextInput } from 'react-native'
import tw from '../../../library/tailwind'

export default function InputIcon({ children, placeholder }) {
    return (
        <View style={tw`${styles.container}`}>
            {children}
            <TextInput placeholder={placeholder} />
        </View>
    )
}

const styles = {
    container: 'w-[100%] flex-row gap-2 items-center my-3.5 border border-light rounded-2 py-2 pl-3 pr-1',
}
