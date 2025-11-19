import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/SEO'
import LoadingScreen from './components/LoadingScreen'

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return null
}

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const TashiroIT = lazy(() => import('./pages/TashiroIT'))
const TeaServices = lazy(() => import('./pages/TeaServices'))
const ImportExport = lazy(() => import('./pages/ImportExport'))
const Contact = lazy(() => import('./pages/Contact'))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Scroll to top on page refresh/load
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    // Preload critical resources
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop',
      ]
      imageUrls.forEach(url => {
        const img = new Image()
        img.src = url
      })
    }
    preloadImages()
  }, [])

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <SEO 
          title="Tashiro Corporation - Expanding Horizons"
          description="Tashiro Corporation - Expanding beyond tofu into IT services, tea production, and international trade."
        />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/tashiro-it" element={<TashiroIT />} />
              <Route path="/tea-services" element={<TeaServices />} />
              <Route path="/import-export" element={<ImportExport />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

