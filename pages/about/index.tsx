import { Button } from '@chakra-ui/button'
import { NextPage } from 'next/types'
import { ReactElement, ReactNode } from 'react'
import Footer from '../../components/Footer'
import TheHead from '../../components/TheHead'
import useModal from '../../hooks/useModal'

type Props = {}

type AboutPageWithLayout = NextPage<Props> & {
    getLayout: (page: ReactElement) => ReactNode
}

const AboutPage: AboutPageWithLayout = (props: Props): ReactElement => {
    const { openModal, closeModal, setModalContent } = useModal()
    const handleOpen = () => openModal()
    return (
        <>
            <Button onClick={handleOpen}>Open Modal</Button>
            <div>AboutPage</div>
        </>
    )
}

AboutPage.getLayout = (page: ReactElement) => {
    return (
        <>
            <TheHead />
            <main>{page}</main>
            <Footer />
        </>
    )
}

export default AboutPage
