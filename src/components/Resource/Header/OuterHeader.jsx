import { Text } from 'react-native'
import tw from '../../../library/tailwind'

export default function OuterHeader({ title, subTitle }) {
    return (
        <>
            <Text style={tw`${styles.bold}`}>{title}</Text>
            <Text style={tw`${styles.gray}`}>{subTitle}</Text>
        </>
    )
}

const styles = {
    bold: 'text-[24px] text-center font-500 mt-8',
    gray: 'mt-3 text-[16px] text-center text-gray mb-10',
}
