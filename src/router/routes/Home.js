import { lazy } from 'react'
const Home = lazy(() => import('@src/views/home/Home'))


const Homes_Routes = [
  {
    path: '/',
    element: <Home />,
    meta: {
        layout: "blank"
    }
  }
]

export default Homes_Routes
