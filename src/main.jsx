import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import { ThemeProvider } from './ThemeContext.jsx'
import App from './App.jsx'
import SiteHome from './Componets/SiteHome/SiteHome.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import Careers from './Componets/Careers/Careers.jsx'
import About from './Componets/About/About.jsx'
import FeaturedProjectsSection from './Componets/Home/FeaturedProjectsSection/FeaturedProjectsSection.jsx'
import Blog from './Componets/Blog/Blog.jsx'
import Reels from './Componets/Reels/Reels.jsx'
import ShowreelPage from './Componets/Reels/ShowreelPage.jsx'
import Sitemap from './Componets/Sitemap/Sitemap.jsx'
import ServicesRoute from './Componets/Services/ServicesRoute.jsx'

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
          <Route path="sitemap.xml" element={<Navigate to="/sitemap" replace />} />
          <Route path="showreel" element={<ShowreelPage />} />
          <Route path="work" element={<Reels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppRoot />
    </ThemeProvider>
  </StrictMode>,
)
