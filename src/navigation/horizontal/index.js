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
    id: 'product-review',
    title: 'Product Reviews',
    icon: <User size={20} />,
    navLink: '/merchant/product-review'
  },
  {
    id: 'home',
    title: 'Home',
    icon: <User size={20} />,
    navLink: '/merchant/home'
  },
  {
    id: 'recommendation',
    title: 'Recommendation',
    icon: <User size={20} />,
    navLink: '/merchant/recommendation'
  },
  {
    id: 'homepage',
    title: 'Homepage Recommendation',
    icon: <User size={20} />,
    navLink: '/merchant/homepageRecommendation'
  },
  {
    id: 'mainhome',
    title: 'Main Home',
    icon: <User size={20} />,
    navLink: '/merchant/mainhome'
  }
]