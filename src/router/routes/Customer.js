import { lazy } from 'react'
const Leads = lazy(() => import('@src/views/Leads/Leads'))
const ProductReview = lazy(() => import('@src/views/Product_Review/ProductReview'))
const Home = lazy(() => import('@src/views/home/Home'))
const Recommendation = lazy(() => import('@src/views/recommendation/Recommendation'))
const HomePageRecommendation = lazy(() => import('@src/views/HomePageRecommendation/HomePageRecommendation'))
const MainHome = lazy(() => import('@src/views/MainHome/MainHome'))
const Timeline = lazy(() => import("@src/views/TimeLine/Timeline"))
const WebsiteAnalytics = lazy(() => import("@src/views/WebsiteAnalytics/WebsiteAnalytics"))
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
  },
  {
    path: '/merchant/mainhome',
    element: <MainHome/>
  },
  {
    path: '/merchant/timeline',
    element: <Timeline/>
  },
  {
    path: '/merchant/website-analytics',
    element: <WebsiteAnalytics/>
  }
]

export default Customers_Routes