import { Button } from '@chakra-ui/button'

type Props = {
    closeMyModal: () => void
}

const MyModal = ({ closeMyModal }: Props) => {
    return (
        <div className="tw-bg-white tw-w-full tw-h-full tw-rounded-lg">
            <h1>My Modal new</h1>
            <Button onClick={closeMyModal}>Close Modal</Button>
        </div>
    )
}

export default MyModal
