import { lazy } from 'react'
const Leads = lazy(() => import('../../views/Leads/Leads'))
const ProductReview = lazy(() => import('../../views/Product_Review/ProductReview'))
const Home = lazy(() => import('../../views/home/Home'))


const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  },
  {
    path: '/merchant/product-review',
    element: <ProductReview/>
  },
  {
    path: '/merchant/home',
    element: <Home/>
  }
]

export default Customers_Routes