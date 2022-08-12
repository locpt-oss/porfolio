import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'
import Footer from '../../components/Footer'
import TheHead from '../../components/TheHead'

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
            <TheHead />
            <>{page}</>
            <Footer />
        </>
    )
}

export default AboutPage
