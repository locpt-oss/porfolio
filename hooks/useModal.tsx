import { motion } from 'framer-motion'
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from 'react'

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
    const [open, setOpen] = useState(false)
    const [modalComponent, setModalComponent] = useState<ReactNode>(null)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)
    const setModalContent = useCallback(
        (modalContent: ReactNode) => setModalComponent(modalContent),
        [setModalComponent]
    )

    const modalProviderData = { openModal, closeModal, setModalContent }

    return (
        <ModalContext.Provider value={modalProviderData}>
            {children}
            {open && (
                <Backdrop onClick={closeModal}>
                    <BaseModal>{modalComponent}</BaseModal>
                </Backdrop>
            )}
        </ModalContext.Provider>
    )
}
interface IBackdrop {
    children: ReactNode
    onClick: () => void
}
const Backdrop = ({ children, onClick }: IBackdrop) => {
    return (
        <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}

interface IBaseModal {
    children: ReactNode
}

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: { y: '100vh', opacity: 0 },
}
const BaseModal = ({ children }: IBaseModal) => {
    return (
        <motion.div
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </motion.div>
    )
}

export default function useModal() {
    return useContext(ModalContext)
}
