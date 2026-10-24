import { StrictMode, lazy, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

const SiteHome = lazy(() => import('./Componets/SiteHome/SiteHome.jsx'))
const Contact = lazy(() => import('./Componets/Contact/Contact.jsx'))
const Careers = lazy(() => import('./Componets/Careers/Careers.jsx'))
const About = lazy(() => import('./Componets/About/About.jsx'))
const FeaturedProjectsSection = lazy(() => import('./Componets/Home/FeaturedProjectsSection/FeaturedProjectsSection.jsx'))
const Blog = lazy(() => import('./Componets/Blog/Blog.jsx'))
const Reels = lazy(() => import('./Componets/Reels/Reels.jsx'))
const ShowreelPage = lazy(() => import('./Componets/Reels/ShowreelPage.jsx'))
const Sitemap = lazy(() => import('./Componets/Sitemap/Sitemap.jsx'))
const ServicesRoute = lazy(() => import('./Componets/Services/ServicesRoute.jsx'))

/**
 * AOSManager — must live inside <BrowserRouter> so useLocation() works.
 * Initialises AOS once, then re-refreshes it on every route change so
 * scroll-reveal animations replay when the user navigates to a new page.
 */
function AOSManager() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
      delay: 0,
    })
  }, [])

  useEffect(() => {
    // Small delay lets the new page's DOM render before AOS scans elements
    const id = setTimeout(() => AOS.refresh(), 120)
    return () => clearTimeout(id)
  }, [location.pathname])

  return null
}

function AppRoot() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AOSManager />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<SiteHome />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ServicesRoute />} />
            <Route path="projects" element={<FeaturedProjectsSection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contactus" element={<Navigate to="/contact" replace />} />
            <Route path="careers" element={<Careers />} />
            <Route path="blog" element={<Blog />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="showreel" element={<ShowreelPage />} />
            <Route path="work" element={<Reels />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)
