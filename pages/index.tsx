import { Button, useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import BaseModal from '../components/BaseModal'

const Home: NextPage = () => {
    const [openModal, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <h1 className="tw-text-red-500">Body here</h1>
            <Button onClick={handleOpen}>Open Modal</Button>
            <BaseModal isOpen={openModal} onClose={handleClose} />
        </>
    )
}

export default Home
