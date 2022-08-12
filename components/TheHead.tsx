import Head from 'next/head'
type Props = {
    title?: string
}

const TheHead = ({ title = 'Victor Phan: Product Designer' }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Phan Thành Lộc: Product Designer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}

export default TheHead
