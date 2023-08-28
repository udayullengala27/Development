import { lazy } from 'react'
import Emails from '../../views/campaign-emails/Emails'
import EmailVerify from '../../views/campaign-emails/EmailVerify'
const Leads = lazy(() => import('../../views/Leads/Leads'))


const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  },
  {
    path: '/merchant/emails',
    element: <Emails />
  },
  {
    path: '/merchant/email-verify',
    element: <EmailVerify />
  }
]

export default Customers_Routes