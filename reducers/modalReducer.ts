import { ModalActionKind } from './enums'

interface IModalState {}
interface IModalAction {
    type: ModalActionKind
}

export const modalReducer = (state: IModalState, action: IModalAction) => {}
