'use client'

import {Provider} from 'react-redux'
import { store } from '../store'
import { ModalsProvider } from '@mantine/modals'

export function ReduxProvider({children}) {
    return <ModalsProvider><Provider store={store}>{children} </Provider></ModalsProvider>
}