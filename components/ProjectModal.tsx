import { Button } from '@chakra-ui/button'

type Props = {
    closeProjectModal: () => void
}

const ProjectModal = ({ closeProjectModal }: Props) => {
    return (
        <div className="tw-bg-white tw-w-full tw-h-full tw-rounded-lg">
            <h1>Project Modal</h1>
            <Button onClick={closeProjectModal}>Close Modal</Button>
        </div>
    )
}

export default ProjectModal
