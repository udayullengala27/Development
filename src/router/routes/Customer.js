import { lazy } from 'react'
const Leads = lazy(() => import('../../views/Leads/Leads'))
const Moviesdash = lazy(() => import('../../views/Movies/MovieDash'))
const Property = lazy(() => import('../../views/PropertyList/Propertylist'))
const Campaign = lazy(() => import('../../views/Campaign/Campaign'))
const Email = lazy(() => import('../../views/Emails/Email'))
const CreateCampaign = lazy(() => import('../../views/CreateCampaign/CreateCampaign'))
const NewDashBoard = lazy(() => import('../../views/NewDashboard/NewDashBoard'))

const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  },
  {
    path: '/merchant/moviesdash',
    element: <Moviesdash />
  },
  {
    path: '/merchant/propertylist',
    element: <Property />
  },
  {
    path: '/merchant/campaign',
    element: <Campaign />
  },
  {
    path: '/merchant/email',
    element: <Email />
  },
  {
    path: '/merchant/createcampaign',
    element: <CreateCampaign />
  },
  {
    path: '/merchant/newdashboard',
    element: <NewDashBoard />
  }
]

export default Customers_Routes