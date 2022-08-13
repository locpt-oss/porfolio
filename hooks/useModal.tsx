import { createContext, useContext, useState } from 'react'

interface IModal {}

const ModalContext = createContext<IModal>({})
interface IModalProviderProps {
    children: React.ReactNode
}

export const ModalProvider = ({ children }: IModalProviderProps) => {
    const [modalContent, setModalContent] = useState(null)

    const modalProviderData = {}

    return (
        <ModalContext.Provider value={modalProviderData}>
            {children}
            {modalContent}
        </ModalContext.Provider>
    )
}

export default function useModal() {
    return useContext(ModalContext)
}
