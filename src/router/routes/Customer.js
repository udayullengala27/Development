import { lazy } from 'react'
import Emails from '@src/views/campaign-emails/Emails'
import EmailVerify from '@src/views/campaign-emails/EmailVerify'
import CampaignTemplate from '@src/views/campaign-template/CampaignTemplate'
import EmailKlaviyo from '@src/views/email-klaviyo/EmailKlaviyo'
import ReferralOffers from '@src/views/Referral/ReferralOffers'
import Referrals from '@src/views/referral-dashboard/ReferralDashboard'
const Leads = lazy(() => import('@src/views/Leads/Leads'))
import OffersLog from '@src/views/offers-log/OffersLog'
import PopupNotification from '@src/views/popup-notification/PopupNotification'

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
  },
  {
    path: '/merchant/campaign-template',
    element: <CampaignTemplate />
  },
  {
    path: '/merchant/email-klaviyo',
    element: <EmailKlaviyo />
  },
  {
    path: '/merchant/referral-offers',
    element: <ReferralOffers />
  },
  {
    path: '/merchant/referral-dashboard',
    element: <Referrals />
  },
  {
    path: '/merchant/offers-log',
    element: <OffersLog />
  },
  {
    path: '/merchant/popup-notification',
    element: <PopupNotification />
  }
]

export default Customers_Routes