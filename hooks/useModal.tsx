import { createContext, useContext } from 'react'
interface IModal {}
const ModalContext = createContext<IModal>({})
interface ModalProviderProps {
    children: React.ReactNode
}
export const ModalProvider = ({ children }: ModalProviderProps) => {
    return <ModalContext.Provider value={}>{children}</ModalContext.Provider>
}

export default function useModal() {
    return useContext(ModalContext)
}
