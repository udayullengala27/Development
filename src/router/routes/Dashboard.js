import { lazy } from 'react'
import Demo from '../../views/dashboard/Demo'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))
import Report from '../../views/Report/Report'
import Notification from '../../views/Notification/Notification'
import App from '../../views/dashboard/App'


const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/demo',
    element: <Demo />
  },
  {
    path: '/merchant/apps',
    element: <App />
  },
  {
    path: '/merchant/dashboard/report',
    element: <Report />
  },
  {
    path: '/merchant/dashboard/notification',
    element: <Notification />
  }
]

export default Dashboard_Routes
