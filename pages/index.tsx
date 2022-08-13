import { Button, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import BaseModal from '../components/BaseModal'
import useModal from '../hooks/useModal'

const Home: NextPage = () => {
    const [open, setOpen] = useState(true)
    const { openModal, closeModal, setModalContent } = useModal()
    const handleClose = () => {
        setModalContent(null)
    }
    const handleOpen = () => {
        setOpen(true)
        setModalContent(<BaseModal isOpen={open} onClose={handleClose} />)
    }
    return (
        <>
            <h1 className="tw-text-red-500">Body here</h1>
            <Button onClick={handleOpen}>Open Modal</Button>
        </>
    )
}

export default Home
