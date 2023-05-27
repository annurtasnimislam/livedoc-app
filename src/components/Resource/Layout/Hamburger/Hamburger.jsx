import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native'
import patient from '../../../../assets/Images/Patient/patient.png'
import tw from '../../../../library/tailwind'

export default function Hamburger() {
    return (
        <View style={tw`${styles.container}`}>
            <View style={tw`${styles.user}`}>
                <Image style={tw`${styles.img}`} source={patient} />
                <Text style={tw`${styles.name}`}>Touhid</Text>
            </View>
            <View style={tw`${styles.flex}`}>
                <MaterialCommunityIcons name="logout" size={20} color="white" />
                <Text style={tw`${styles.logout}`}>Logout</Text>
            </View>
        </View>
    )
}

const styles = {
    container: 'flex-row justify-between items-center px-6 pt-5 pb-3 bg-primary',
    user: 'flex-row gap-2 items-center',
    img: 'h-12 w-12 rounded-full',
    name: 'text-white font-700',
    flex: 'flex-row gap-1 items-center',
    logout: 'text-white font-700',
}
