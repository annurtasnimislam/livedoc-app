import { Text, View } from 'react-native'
import tw from '../../../library/tailwind'

export default function OuterHeader({ title, subTitle, mt }) {
    return (
        <View style={tw`mt-${mt ? mt : 0}`}>
            <Text style={tw`${styles.bold}`}>{title}</Text>
            <Text style={tw`${styles.gray}`}>{subTitle}</Text>
        </View>
    )
}

const styles = {
    bold: 'text-[24px] text-center font-500',
    gray: 'mt-3 text-[16px] text-center text-gray mb-8',
}
