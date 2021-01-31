import React from 'react';
import { SWRConfig } from 'swr'
import {fetcher} from '../src/utils/fetchJson'
import Head from 'next/head'
import '../src/utils/styling/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig
            value={{
                fetcher: fetcher,
                onError: (err) => {
                    console.error(err)
                },
                revalidateOnReconnect: false,
                revalidateOnFocus: false,
            }}
        >
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap" rel="preload" as="font" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&family=Roboto&display=swap" rel="preload" as="font" crossOrigin/>
            </Head>
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp;
