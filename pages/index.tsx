import { Button } from '@chakra-ui/button'
import type { NextPage } from 'next'
import MyModal from '../components/MyModal'
import ProjectModal from '../components/ProjectModal'
import useModal from '../hooks/useModal'

const Home: NextPage = () => {
    const { setModalContent, openModal, closeModal } = useModal()
    const handleOpen1 = () => {
        setModalContent(<ProjectModal closeProjectModal={closeModal} />)
        openModal()
    }
    const handleOpen2 = () => {
        setModalContent(<MyModal closeMyModal={closeModal}></MyModal>)
        openModal()
    }
    return (
        <>
            <h1 className="tw-red-500 tw-text-lg tw-font-bold">Body here</h1>
            <Button onClick={handleOpen1}>Open Project Modal</Button>
            <Button onClick={handleOpen2}>Open My Modal</Button>
        </>
    )
}

export default Home
