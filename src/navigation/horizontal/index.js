import {  BookOpen, Home, User } from 'react-feather'

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
    id: 'moviesdash',
    title: 'MovieDash',
    icon: <User size={20} />,
    navLink: '/merchant/moviesdash'
  },
  {
    id: 'propertylist',
    title: 'Propertylist',
    icon: <User size={20} />,
    navLink: '/merchant/propertylist'
  },
  {
    id: 'campaign',
    title: 'Campaign',
    icon: <User size={20} />,
    navLink: '/merchant/campaign'
  },
  {
    id: 'email',
    title: 'Email',
    icon: <User size={20} />,
    navLink: '/merchant/email'
  },
  {
    id: 'createcampaign',
    title: 'CreateCampaign',
    icon: <User size={20} />,
    navLink: '/merchant/createcampaign'
  },
  {
    id: 'newdashboard',
    title: 'NewDashBoard',
    icon: <User size={20} />,
    navLink: '/merchant/newdashboard'
  }
]