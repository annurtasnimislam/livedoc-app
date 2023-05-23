import { FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text } from 'react-native'
import tw from '../../library/tailwind'
import { InputIcon, InputIcons, LargeButton, OuterHeader, Wrapper } from '../Resource'

export default function Registration() {
    const [gender, setGender] = useState()

    const navigation = useNavigation()

    return (
        <Wrapper mb="20">
            <OuterHeader
                title="Join us to start searching"
                subTitle="You can search c ourse, apply course and find scholarship for abroad studies"
            />
            <InputIcon placeholder="Enter Name">
                <FontAwesome5 name="user" size={18} color="#808D9E" />
            </InputIcon>
            <InputIcon placeholder="Enter Email">
                <MaterialCommunityIcons name="email-outline" size={20} color="#808D9E" />
            </InputIcon>
            <InputIcon placeholder="Enter Phone">
                <Feather name="phone-call" size={17} color="#808D9E" />
            </InputIcon>

            {/* picker */}
            <View style={tw`${styles.container}`}>
                <Text style={tw`${styles.gender}`}>Gender</Text>
                <Picker style={tw`w-[43%]`} onValueChange={(e) => setGender(e)} selectedValue={gender} required>
                    <Picker.Item style={tw`${styles.label}`} label="Select" value="" />
                    <Picker.Item style={tw`text-[13px]`} label="Male" value="male" />
                    <Picker.Item style={tw`text-[13px]`} label="Female" value="female" />
                    <Picker.Item style={tw`text-[13px]`} label="Others" value="others" />
                </Picker>
            </View>
            {/* picker */}
            <InputIcons placeholder="Enter password" />
            <InputIcons placeholder="Confirm password" />
            <LargeButton text="Sign Up" mt="8" />
            <Text style={tw`${styles.account}`}>
                Have an account?{' '}
                <Text style={tw`text-primary`} onPress={() => navigation.navigate('login')}>
                    Sign In
                </Text>
            </Text>
        </Wrapper>
    )
}

const styles = {
    container: 'h-11.5 flex-row justify-between items-center border border-light rounded-2 my-3.5 ',
    gender: 'pl-6 text-dark_gray text-[15px]',
    label: 'text-secondary text-[13px]',
    account: 'text-dark_gray mt-2 text-center',
}
