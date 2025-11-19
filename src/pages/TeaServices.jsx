import { Link } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import SEO from '../components/SEO'
import Card from '../components/Card'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

const TeaServices = () => {
  const [clickedCard, setClickedCard] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setClickedCard(null)
      setIsClosing(false)
    }, 300) // Match animation duration
  }

  const services = [
    {
      title: 'Tea Production',
      description: 'Premium tea cultivation and processing using traditional methods combined with modern quality control.',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    },
    {
      title: 'Tea Distribution',
      description: 'Efficient distribution network ensuring fresh, high-quality tea reaches customers worldwide.',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    },
    {
      title: 'Custom Blends',
      description: 'Create unique tea blends tailored to your preferences and business needs.',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    },
    {
      title: 'Tea Consultation',
      description: 'Expert consultation on tea selection, brewing techniques, and tea-related business strategies.',
      image: 'https://images.unsplash.com/photo-1597481499750-3c0c9c0b0a5a?w=400&h=300&fit=crop',
    },
    {
      title: 'Wholesale Services',
      description: 'Bulk tea supply for restaurants, cafes, hotels, and retail businesses.',
      image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop',
    },
    {
      title: 'Tea Education',
      description: 'Educational programs and workshops on tea culture, history, and appreciation.',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop',
    },
  ]

  return (
    <>
      <SEO
        title="Tea Services - Premium Tea Production & Distribution"
        description="Tashiro Tea Services specializes in premium tea production, distribution, and related services, bringing the finest tea experiences to customers worldwide."
      />

      {/* Full page backdrop blur overlay - appears when any card is clicked */}
      {clickedCard !== null && (
        <div 
          className={`fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}
          onClick={handleClose}
        />
      )}

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br from-accent/20 to-primary/10 overflow-hidden transition-all duration-300 ${clickedCard !== null ? 'blur-sm' : ''}`}>
        <Suspense fallback={null}>
          <AnimatedBackground type="tea" color="#228B22" intensity="medium" />
        </Suspense>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Tea Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Explore Our Expertise: Elevating Spaces. Enriching Lives, and Bringing Your Vision to Life 
              with Our Comprehensive Range of Premium Tea Production and Distribution Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 transform"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Tea Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From cultivation to cup, we provide comprehensive tea services that honor tradition while embracing innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`animate-slide-up relative transition-all duration-300 cursor-pointer ${clickedCard !== null && clickedCard !== index ? 'blur-sm opacity-50' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setClickedCard(index)}
              >
                <div className="relative z-10">
                  <Card
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Click Popup Modal - appears when a card is clicked - positioned outside sections to appear on top */}
      {clickedCard !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <div 
            className={`bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative pointer-events-auto ${
              isClosing ? 'animate-fade-out-down' : 'opacity-0 animate-fade-in-up'
            }`}
            style={!isClosing ? { animationDelay: '0.15s', animationFillMode: 'forwards' } : {}}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Close popup"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8">
              {/* Description on Left */}
              <div className="flex-1 min-w-0">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{services[clickedCard].title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{services[clickedCard].description}</p>
              </div>
              {/* Image on Right */}
              <div className="flex-1 min-w-0">
                <img
                  src={services[clickedCard].image}
                  alt={services[clickedCard].title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className={`py-20 bg-gradient-to-br from-accent/10 to-primary/5 transition-all duration-300 ${clickedCard !== null ? 'blur-sm' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1 animate-slide-up group" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop"
                alt="Premium tea selection"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Tea Services?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: 'M5 13l4 4L19 7', title: 'Premium Quality', desc: 'We source only the finest tea leaves and use traditional methods to ensure exceptional quality.' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Sustainable Practices', desc: 'Our tea production follows sustainable and environmentally friendly practices.' },
                  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Global Reach', desc: 'Our distribution network ensures fresh tea reaches customers around the world.' }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start transition-transform duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden transition-all duration-300 ${clickedCard !== null ? 'blur-sm' : ''}`}>
        <div className="absolute inset-0 opacity-10">
          <Suspense fallback={null}>
            <AnimatedBackground type="particles" color="#FFFFFF" intensity="low" />
          </Suspense>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-up">
            Experience the Finest Tea
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Contact us today to discover how our tea services can enhance your business or personal tea experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary hover:scale-105 transform"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary hover:scale-105 transform"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeaServices

