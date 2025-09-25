import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ReactRenders1 } from './react-renders/ReactRenders.tsx'
import { ReactRenders3 } from './react-renders/ReactRenders3.tsx'
import { ReactRenders2 } from './react-renders/ReactRenders2.tsx'
import { ReactRenders5 } from './react-renders/ReactRenders5.tsx'
import { ReactRenders4 } from './react-renders/ReactRenders4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ReactRenders1/> */}

    {/* <ReactRenders2/> */}

    <ReactRenders3/>
    {/* <ReactRenders4/> */}
        <ReactRenders5/>

  </StrictMode>,
)
