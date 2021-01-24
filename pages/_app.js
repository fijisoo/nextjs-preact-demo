import React from 'react';
import { SWRConfig } from 'swr'
import {fetcher} from '../src/utils/fetchJson'

function MyApp({ Component, pageProps }) {
    return (
        <SWRConfig
            value={{
                fetcher: fetcher,
                onError: (err) => {
                    console.error(err)
                },
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp;
