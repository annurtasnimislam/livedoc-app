import { View, Text, TouchableOpacity } from 'react-native'
import tw from '../../../library/tailwind'

export default function LargeButton() {
    return (
        <View style={tw`${styles.flex}`}>
            <TouchableOpacity style={tw`${styles.container}`}>
                <Text style={tw`${styles.text}`}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    flex: 'flex items-center',
    container: 'w-90% bg-secondary py-2.3 rounded-full',
    text: 'text-center text-white font-600',
}
