import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login.jsx'
import Forget from './components/Forget/Forget.jsx'
import CreateWebsite from './components/CreateWebsite/CreateWebsite.jsx'
import HelpLayout from './components/HelpLayout/HelpLayout.jsx'
import Help from './components/Help/Help.jsx'
import HelpQuestion from './components/HelpQuestion/HelpQuestion.jsx'
import NotFound from './components/NotFound.jsx'
import Shopify from './components/Shopify/Shopify.jsx'
import Shopee from './components/Shopee/Shopee.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import NewLayout from './components/NewLayout.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsServices from './components/TermsServices/TermsServices.jsx'
import WhyKonigle from './components/WhyKonigle/WhyKonigle.jsx'
import Integration from './components/Inegration/Integration.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import New from './components/New/New.jsx'
import BioLink from './components/BioLink/BioLink.jsx'
import EComWeb from './components/eComWeb/eComWeb.jsx'
import Blog from './components/Blogs/Blog.jsx'
import FunnelBuild from './components/FunnelBuild/FunnelBuild.jsx'
import HelpDesk from './components/HelpDesk/HelpDesk.jsx'
import SEO from './components/SEO/SEO.jsx'
import CRM from './components/CRM/CRM.jsx'
import AITool from './components/AITool/AITool.jsx'
import SellerTool from './components/SellerTool/SellerTool.jsx'
import AllFeatures from './components/AllFeatures/AllFeatures.jsx'
import DEMO from './components/DEMO/DEMO.jsx'
import About from './components/About/About.jsx'
import Job from './components/Job/Job.jsx'
import Press from './components/Press/Press.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter ([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path: "",
        element : <Home />
      },
      {
        path: "/createwebsite",
        element: <CreateWebsite/>
      }
    ]
  },
  {
    path: "/",
    element: <HelpLayout/>,
    children: [
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/helpquestion",
        element: <HelpQuestion/>
      },
      {
        path: "/shopify",
        element: <Shopify/>
      },
      {
        path: "/shopee",
        element: <Shopee/>
      },
      {
        path :"/faq",
        element: <FAQ/>
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy/>
      },
      {
        path: '/termservices',
        element: <TermsServices />
      },
     
    ]
  },
  {
    path: "/",
    element: <NewLayout />,
    children:[
        {
          path: '/pricing',
          element: <Pricing />,
      },
      {
        path: '/blog',
        element: <Blogs />
      },
      {
        path: '/whykonigle',
        element: <WhyKonigle />
      },
      {
        path: '/app',
        element: <Integration />
      },
      {
        path: '/customers',
        element: <Testimonials />
      },
      {
        path: '/new',
        element: <New />
      },
      {
        path: '/website/for/linkinbio',
        element: <BioLink />
      },
      {
        path: '/website/for/ecommerce',
        element: <EComWeb />
      },
      {
        path: '/website/for/blog',
        element: <Blog />
      },
      {
        path: '/website/for/marketing-funnels',
        element: <FunnelBuild />
      },
      {
        path: '/website/for/helpdesk',
        element: <HelpDesk />
      },
      {
        path:  '/website/seo',
        element: <SEO />
      },
      {
        path: '/features/crm',
        element: <CRM />
      },
      {
        path: '/features/ai-tools',
        element: <AITool />
      },
      {
        path: '/seller-tools',
        element: <SellerTool />
      },
      {
        path: "/features/all",
        element: <AllFeatures/>
      },
      {
        path: "website/builder/demo",
        element: <DEMO />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/press",
        element: <Press />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/login",
    element : <Login />
  },
  {
    path: "/forgetpassword",
    element : <Forget/>
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "company/konigle",
    element: <Job />
  }
])


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="createwebsite" element={<CreateWebsite />} />
//       <Route path="/help" element={<HelpLayout />}>      
//       <Route path="" element={<Help />} />
//       </Route>
//       <Route path="/help/question" element={<HelpQuestion />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/forgetpassword" element={<Forget />} />
//     </Route>
//   )
// );




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
