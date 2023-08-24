import { lazy } from 'react'
import Demo from '../../views/dashboard/Demo'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))
import Report from '../../views/Report/Report'
import Notification from '../../views/Notification/Notification'
import Statistics from '../../views/Statistics/Statistics'
import Analytics from '../../views/analytics/Analytics'


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
    path: '/merchant/dashboard/report',
    element: <Report />
  },
  {
    path: '/merchant/dashboard/notification',
    element: <Notification />
  },
  {
    path: '/merchant/statistics',
    element: <Statistics />
  },
  {
    path: '/merchant/analytics',
    element: <Analytics />
  }
]

export default Dashboard_Routes
