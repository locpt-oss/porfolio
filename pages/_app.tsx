import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/default'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ModalProvider } from '../hooks/useModal'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function RootApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>) // Nullish coalescing operator (??)
    return (
        <ChakraProvider>
            <ModalProvider>
                {getLayout(<Component {...pageProps} />)}
            </ModalProvider>
        </ChakraProvider>
    )
}

export default RootApp
