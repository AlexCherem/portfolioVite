import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from '@/App'
import {GlobalStyled} from "@/styles/Global.styled";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <GlobalStyled />
        <App />
    </StrictMode>
)