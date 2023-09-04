import {  BookOpen, Home, User, BarChart2, TrendingUp, Mail, Airplay, Activity, Eye } from 'react-feather'

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
    icon: <Mail size={20} />,
    navLink: '/merchant/email-statistics'
  },
  {
    id: 'emails',
    title: 'Emails',
    icon: <Airplay size={20} />,
    navLink: '/merchant/emails'
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
  }
]
