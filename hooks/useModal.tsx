import { createContext, ReactNode, useContext, useState } from 'react'

interface IModalContext {
    openModal: () => void
    closeModal: () => void
    setModalContent: (modalContent: ReactNode) => void
}

const ModalContext = createContext<IModalContext>({
    openModal: () => {},
    closeModal: () => {},
    setModalContent: (_) => {},
})
interface IModalProviderProps {
    children: ReactNode
}

export const ModalProvider = ({ children }: IModalProviderProps) => {
    const [modalComponent, setModalComponent] = useState<ReactNode>(null)

    const openModal = () => {}
    const closeModal = () => {}
    const setModalContent = (modalContent: ReactNode) =>
        setModalComponent(modalContent)

    const modalProviderData = { openModal, closeModal, setModalContent }

    return (
        <ModalContext.Provider value={modalProviderData}>
            {children}
            {modalComponent ?? <></>}
        </ModalContext.Provider>
    )
}

// TODO: Create BaseModal to wrap modal children instead of using modalComponent(Third party UI Lib) to make code much more cleaner
export default function useModal() {
    return useContext(ModalContext)
}
