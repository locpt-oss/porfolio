import Head from 'next/head'
import { ReactElement } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface ChildrenElement {
    children: ReactElement
}
const Layout: React.FC<ChildrenElement> = ({
    children,
}: ChildrenElement): ReactElement => {
    return (
        // Short term for React.Fragment
        <>
            <Head>
                <title>Victor Phan: Product Designer</title>
                <meta
                    name="description"
                    content="Phan Thành Lộc: Product Designer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout
