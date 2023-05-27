import { Text } from 'react-native'
import tw from '../../library/tailwind'
import { Layout, Wrapper } from '../Resource'

export default function Home() {
    return (
        <Layout>
            <Wrapper statusBar="light"></Wrapper>
        </Layout>
    )
}

const styles = {
    img: 'h-10 w-10',
}
