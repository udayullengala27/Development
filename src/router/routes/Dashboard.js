import { lazy } from 'react'
import Demo from '../../views/dashboard/Demo'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))
import Report from '../../views/Report/Report'
import Notification from '../../views/Notification/Notification'
import Mapro from '../../views/dashboard/Mapro'
import Rewards from '../../views/dashboard/Rewards'
import Referrals from '../../views/dashboard/Referrals'
import Campaign from '../../views/dashboard/Campaign'

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
    path: '/merchant/campaign/',
    element: <Campaign />
  },
    {
    path: '/merchant/mapro/',
    element: <Mapro/>
  },
    {
    path: '/merchant/rewards/',
    element: <Rewards />
  },
  {
    path: '/merchant/dashboard/notification',
    element: <Notification />
  },
    {
    path: '/merchant/referrals/',
    element: <Referrals/>
  }
]

export default Dashboard_Routes
