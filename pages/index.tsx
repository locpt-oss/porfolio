import { Button } from '@chakra-ui/button'
import type { NextPage } from 'next'
import useModal from '../hooks/useModal'

const Home: NextPage = () => {
    const { openModal, closeModal, setModalContent } = useModal()
    // const handleClose = () => closeModal()
    const handleOpen = () => openModal()
    return (
        <>
            <h1 className="tw-red-500 tw-text-lg tw-font-bold">Body here</h1>
            <Button onClick={handleOpen}>Open Modal</Button>
        </>
    )
}

export default Home
