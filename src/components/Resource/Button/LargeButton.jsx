import { View, Text, TouchableOpacity } from 'react-native'
import tw from '../../../library/tailwind'

export default function LargeButton({ text, mt, onPress }) {
    return (
        <TouchableOpacity style={tw`${styles.container} mt-${mt ? mt : 0}`} onPress={onPress}>
            <Text style={tw`${styles.text}`}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: 'w-90% bg-secondary py-2.3 rounded-full mx-auto',
    text: 'text-center text-white font-600',
}
