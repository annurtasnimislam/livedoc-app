import { View, Text, TouchableOpacity } from 'react-native'
import tw from '../../../library/tailwind'

export default function LargeButton({ text, mt }) {
    return (
        <View style={tw`${styles.flex} mt-${mt}`}>
            <TouchableOpacity style={tw`${styles.container}`}>
                <Text style={tw`${styles.text}`}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    flex: 'flex items-center',
    container: 'w-90% bg-secondary py-2.3 rounded-full',
    text: 'text-center text-white font-600',
}
