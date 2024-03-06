import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/styles/main.scss'

import { RouterProvider } from 'react-router-dom'
import router from '@/router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<RouterProvider router={router} />)
