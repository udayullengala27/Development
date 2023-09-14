import { BookOpen, Home, User, BarChart2, TrendingUp, Mail, Airplay, Activity, Eye, AtSign, Gift, Bell, MessageSquare } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/merchant/dashboard'
  },
  {
    header: 'Apps & Pages'
  },
  {
    id: 'leads',
    title: 'Leads',
    icon: <User size={20} />,
    navLink: '/merchant/leads'
  },
  {
    id: 'statistics',
    title: 'Statistics',
    icon: <BarChart2 size={20} />,
    navLink: '/merchant/statistics'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: <TrendingUp size={20} />,
    navLink: '/merchant/analytics'
  },
  {
    id: 'emailStats',
    title: 'Email Stats',
    icon: <Airplay size={20} />,
    navLink: '/merchant/email-statistics'
  },
  {
    id: 'overallStats',
    title: 'Overall Stats',
    icon: <Activity size={20} />,
    navLink: '/merchant/overall-statistics'
  },
  {
    id: 'consentStats',
    title: 'Consent Stats',
    icon: <Eye size={20} />,
    navLink: '/merchant/consent-statistics'
  },
  {
    id: 'emails',
    title: 'Emails',
    icon: <Mail size={20} />,
    navLink: '/merchant/emails'
  },
  {
    id: 'campaignTemplate',
    title: 'Campaign Template',
    icon: <AtSign size={20} />,
    navLink: '/merchant/campaign-template'
  },
  {
    id: 'emailKlaviyo',
    title: 'Email Klaviyo',
    icon: <Mail size={20} />,
    navLink: '/merchant/email-klaviyo'
  },
  {
    id: 'offersLog',
    title: 'Offers Log',
    icon: <Gift size={20} />,
    navLink: '/merchant/offers-log'
  },
  {
    id: 'referralOffers',
    title: 'Referral offers',
    icon: <Gift size={20} />,
    navLink: '/merchant/referral-offers'
  },
  {
    id: 'referralOffersEdit',
    title: 'Referral offers edit',
    icon: <Gift size={20} />,
    navLink: '/merchant/referral-offers-edit'
  },
  {
    id: 'popup-notification',
    title: 'Popup NotIfication',
    icon: <Bell size={20} />,
    navLink: '/merchant/popup-notification'
  },
  {
    id: 'sms-reports',
    title: 'Sms Reports',
    icon: <MessageSquare size={20} />,
    navLink: '/merchant/sms-reports'
  }
]
