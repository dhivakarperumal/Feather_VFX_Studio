import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'
import Home from './Componets/Home/Home.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import Careers from './Componets/Careers/Careers.jsx'
import About from './Componets/About/About.jsx'
import Blog from './Componets/Blog/Blog.jsx'
import Reels from './Componets/Reels/Reels.jsx'


function AppRoot() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contactus" element={<Navigate to="/contact" replace />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="reels" element={<Reels />} />
          <Route path="work" element={<Reels />} />
          <Route path="projects" element={<Reels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
)
