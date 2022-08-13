import { ReactElement } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TheHead from '../components/TheHead'

interface ChildrenElement {
    children: ReactElement
}
const Layout: React.FC<ChildrenElement> = ({
    children,
}: ChildrenElement): ReactElement => {
    return (
        <>
            <TheHead />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout
