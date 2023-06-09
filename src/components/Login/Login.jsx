import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'expo-checkbox'
import { useState } from 'react'
import { View, Text } from 'react-native'
import tw from '../../library/tailwind'
import { InputIcon, InputIcons, LargeButton, OuterHeader, Wrapper } from '../Resource'

export default function Login() {
    const [checked, setChecked] = useState(false)
    const navigation = useNavigation()

    return (
        <Wrapper>
            <OuterHeader
                title="Welcome back"
                subTitle="You can search c ourse, apply course and find scholarship for abroad studies"
            />
            <InputIcon placeholder="Enter email or phone">
                <MaterialCommunityIcons name="email-outline" size={20} color="#808D9E" />
            </InputIcon>
            <InputIcons placeholder="Enter Password" />
            <View style={tw`${styles.container}`}>
                <View style={tw`${styles.checkbox}`}>
                    <Checkbox value={checked} onValueChange={setChecked} />
                    <Text style={tw`${styles.remember}`}>Remember me</Text>
                </View>
                <Text style={tw`${styles.forgot}`}>Forgot Passowrd</Text>
            </View>
            <LargeButton />
            <Text style={tw`${styles.account}`}>
                don’t Have an account?{' '}
                <Text style={tw`text-primary`} onPress={() => navigation.navigate('registration')}>
                    Sign up
                </Text>
            </Text>
        </Wrapper>
    )
}

const styles = {
    container: 'flex-row justify-between items-center mb-[20%]',
    checkbox: 'flex-row gap-2 items-center',
    remember: 'text-dark_gray',
    forgot: 'text-primary font-500',
    account: 'text-dark_gray mt-2 text-center',
}
