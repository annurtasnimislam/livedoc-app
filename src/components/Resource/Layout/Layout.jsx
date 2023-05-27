import Hamburger from './Hamburger/Hamburger'

export default function Layout({ children }) {
    return (
        <>
            <Hamburger />
            {children}
        </>
    )
}
