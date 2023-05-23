import { StatusBar } from 'expo-status-bar'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
import tw from '../../../library/tailwind'

export default function Wrapper({ children, statusBar, onScroll, mb }) {
    return (
        <>
            <StatusBar
                backgroundColor={statusBar === 'light' ? '#419cd9' : '#fff'}
                style={statusBar === 'light' ? 'light' : 'dark'}
            />
            <KeyboardAvoidingView style={tw`flex-1`}>
                <View style={tw`${styles.container}`}>
                    <ScrollView
                        onScroll={onScroll ? onScroll : ''}
                        style={tw`flex-1 bg-white pt-${statusBar === 'light' ? 0 : 10} px-${
                            statusBar === 'light' ? 0 : 8
                        }`}>
                        <View style={tw`mb-${mb ? mb : 0}`}>{children}</View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = {
    container: 'flex-1 justify-center',
}
