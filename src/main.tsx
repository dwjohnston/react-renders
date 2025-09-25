/* eslint-disable */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactRenders1 } from './react-renders/ReactRenders.tsx'
import { ReactRenders3 } from './react-renders/ReactRenders3.tsx'
import { ReactRenders2 } from './react-renders/ReactRenders2.tsx'
import { ReactRenders5 } from './react-renders/ReactRenders5.tsx'
import { ReactRenders4 } from './react-renders/ReactRenders4.tsx'
import { ReactRenders4b } from './react-renders/ReactRenders4b.tsx'

import { ReactRenders4c } from './react-renders/ReactRenders4c.tsx'


import { Main1, Main2 } from "./App.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>


    <main>

      <details>
        <summary>Example 1 - Straight context example</summary>
        <ReactRenders1 />
      </details>

      <details>
        <summary>Example 2 - Context + one more value</summary>
        <ReactRenders2 />
      </details>


      <details>
        <summary>Example 3 - Two styles of children</summary>
        <ReactRenders3 />
      </details>

      <details>
        <summary>Example 5 - Two types of children - left/right </summary>
        <ReactRenders5 />

      </details>

      <details>
        <summary>Example 4 - Controlled Component Bad</summary>
        <ReactRenders4 />
      </details>


      <details>
        <summary>Example 4b - Just use a form</summary>
        <ReactRenders4b />
      </details>


      <details>
        <summary>Example 4c - Use slots</summary>
        <ReactRenders4c
        />
      </details>



      <Main1 />
      <Main2 />






    </main>

  </StrictMode>,
)
