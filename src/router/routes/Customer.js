import { lazy } from 'react'
import HomePageRecommendation from '../../views/HomePageRecommendation/HomePageRecommendation'
const Leads = lazy(() => import('@src/views/Leads/Leads'))
const ProductReview = lazy(() => import('@src/views/Product_Review/ProductReview'))
const Home = lazy(() => import('@src/views/home/Home'))
const Recommendation = lazy(() => import('@src/views/recommendation/Recommendation'))
const HomepageRecommendation = lazy(() => import('@src/views/HomePageRecommendation/HomePageRecommendation'))


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
  },
  {
    path: '/merchant/recommendation',
    element: <Recommendation/>
  },
  {
    path: '/merchant/homepageRecommendation',
    element: <HomePageRecommendation/>
  }
]

export default Customers_Routes