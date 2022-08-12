import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/default'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

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
            {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
    )
}

export default RootApp
