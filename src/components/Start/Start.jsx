import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import doctors from '../../assets/Images/Doctor/doctors.png'
import tw from '../../library/tailwind'
import { Wrapper } from '../Resource'

export default function Start() {
    const navigation = useNavigation()

    return (
        <Wrapper statusBar="light">
            <View style={tw`${styles.container}`}>
                <Text style={tw`${styles.title}`}>LiveDoc</Text>
                <Image source={doctors} style={tw`${styles.img}`} />
            </View>
            <View style={tw`${styles.box}`}>
                <Text style={tw`${styles.bold}`}>Find Trusted Doctors</Text>
                <Text style={tw`${styles.brief}`}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it
                    over 2000 years old.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={tw`${styles.text}`}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </Wrapper>
    )
}

const styles = {
    container: 'bg-primary pt-10',
    title: 'pl-6 text-[26px] text-white font-800 mb-2',
    img: 'h-[350px] w-[100%]',
    box: 'h-100% bg-white px-5 py-10 flex items-center rounded-t-14 relative bottom-6 shadow-2xl shadow-dark',
    bold: 'text-primary text-[24px] font-700 mb-4',
    brief: 'text-center text-gray text-[16px]',
    text: 'text-white text-[15px] font-700 bg-secondary px-14 py-3 rounded-3 mt-10',
}
