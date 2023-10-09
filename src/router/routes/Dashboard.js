import { lazy } from 'react'
import Demo from '@src/views/dashboard/Demo'
const Dashboard = lazy(() => import('@src/views/dashboard/Dashboard'))
import Report from '@src/views/Report/Report'
import Notification from '@src/views/Notification/Notification'
import Statistics from '@src/views/Statistics/Statistics'
import Analytics from '@src/views/analytics/Analytics'
import EmailStats from '@src/views/email-stats/EmailStats'
import OverallStats from '@src/views/overall-stats/OverallStats'
import ConsentStats from '@src/views/consent-stats/ConsentStats'
import WizardModernVertical from '@src/views/Campaign/Campaign'
import OffersLog from '@src/views/offers-log/OffersLog'
import SmsReports from '@src/views/sms-reports/SmsReports'
import SamplesDashboard from './../../views/samples-dashboard/SamplesDashboard'


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
  },
  {
    path: '/merchant/campaign',
    element: <WizardModernVertical />
  },
  {
    path: '/merchant/sms-reports',
    element: <SmsReports />
  },
  {
    path: '/merchant/samples-dashboard',
    element: <SamplesDashboard />
  }
]

export default Dashboard_Routes
