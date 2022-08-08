import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'
import Footer from '../../components/Footer'

type Props = {}

type AboutPageWithLayout = NextPage<Props> & {
    getLayout: (page: ReactElement) => ReactNode
}

const AboutPage: AboutPageWithLayout = (props: Props): ReactElement => {
    return <div>AboutPage</div>
}

AboutPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <>{page}</>
            <Footer />
        </>
    )
}

export default AboutPage
