import {
    RouterProvider,
} from 'react-router-dom'
import { Router } from './AppRouter'

export default function App() {
    return (
        <RouterProvider router={Router} />
    )
}