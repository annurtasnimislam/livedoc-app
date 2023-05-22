import { FontAwesome5, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { View, Text } from 'react-native'
import tw from '../../library/tailwind'
import { InputIcon, OuterHeader, Wrapper } from '../Resource'

export default function Registration() {
    return (
        <Wrapper>
            <OuterHeader
                title="Join us to start searching"
                subTitle="You can search c ourse, apply course and find scholarship for abroad studies"
            />
            <InputIcon>
                <FontAwesome5 name="user" size={18} color="#808D9E" />
            </InputIcon>
            <InputIcon>
                <MaterialCommunityIcons name="email-outline" size={20} color="#808D9E" />
            </InputIcon>
            <InputIcon>
                {/* <Ionicons name="call-outline" size={20} color="#808D9E" /> */}
                <Feather name="phone-call" size={18} color="#808D9E" />
            </InputIcon>
            <View style={tw`${styles.container}`}>
                <View style={tw`${styles.label}`}>
                    <MaterialCommunityIcons name="all-inclusive-box-outline" size={20} color="#808D9E" />
                    <Text style={tw`${styles.gender}`}>Gender</Text>
                </View>
                <Picker
                    style={tw`${styles.picker}`}
                    // onValueChange={(e) => props.setSex(e)}
                    // selectedValue={props.sex}
                    // required
                >
                    <Picker.Item style={tw`text-secondary text-[13px]`} label="Select" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Others" value="others" />
                </Picker>
            </View>
        </Wrapper>
    )
}

const styles = {
    container: 'flex-row justify-between items-center',
    label: 'flex-row gap-2',
    gender: 'text-dark_gray',
    picker: 'w-[40%]',
}
