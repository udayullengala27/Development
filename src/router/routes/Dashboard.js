import { lazy } from 'react'
import Demo from '../../views/dashboard/Demo'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))
import Report from '../../views/Report/Report'
import Notification from '../../views/Notification/Notification'
import Statistics from '../../views/Statistics/Statistics'
import Analytics from '../../views/analytics/Analytics'
import EmailStats from '../../views/email-stats/EmailStats'
import OverallStats from '../../views/overall-stats/OverallStats'
import ConsentStats from '../../views/consent-stats/ConsentStats'


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
  },
  {
    path: '/merchant/email-statistics',
    element: <EmailStats />
  },
  {
    path: '/merchant/overall-statistics',
    element: <OverallStats />
  },
  {
    path: '/merchant/consent-statistics',
    element: <ConsentStats />
  }
]

export default Dashboard_Routes
