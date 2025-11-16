import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEO from '../components/SEO'
import Card from '../components/Card'
import AnimatedNumber from '../components/AnimatedNumber'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

const ImportExport = () => {
  const services = [
    {
      title: 'International Trade',
      description: 'Comprehensive import and export services for goods including tofu, tea, and other premium products.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    },
    {
      title: 'Logistics Management',
      description: 'End-to-end logistics solutions ensuring efficient and timely delivery of your products.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop',
    },
    {
      title: 'Customs Clearance',
      description: 'Expert customs clearance services to navigate complex international trade regulations.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    },
    {
      title: 'Supply Chain Solutions',
      description: 'Optimized supply chain management to reduce costs and improve efficiency.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure products meet international standards.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    },
    {
      title: 'Market Expansion',
      description: 'Strategic support for entering new markets and expanding your global presence.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    },
  ]

  return (
    <>
      <SEO
        title="Import/Export - International Trade Services"
        description="Tashiro Import/Export provides comprehensive international trade services, handling logistics for tofu, tea, and other premium products across global markets."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent/20 to-primary/10 overflow-hidden">
        <Suspense fallback={null}>
          <AnimatedBackground type="particles" color="#90EE90" intensity="medium" />
        </Suspense>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Import/Export Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Explore Our Expertise: Elevating Spaces. Enriching Lives, and Bringing Your Vision to Life 
              with Our Comprehensive Range of International Trade and Logistics Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
              Our Import/Export Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive international trade solutions to help your business expand globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Import/Export Services?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Global Network', desc: 'Extensive network of partners and agents worldwide ensures smooth operations across borders.' },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Fast & Reliable', desc: 'Efficient processes and reliable partners ensure timely delivery of your goods.' },
                  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Compliance & Security', desc: 'Full compliance with international trade regulations and secure handling of all shipments.' }
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
            <div className="relative animate-slide-up group" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Global trade and logistics"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg animate-float">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Countries served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Suspense fallback={null}>
            <AnimatedBackground type="particles" color="#FFFFFF" intensity="low" />
          </Suspense>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-up">
            Expand Your Global Reach
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Contact us today to learn how our import/export services can help your business grow internationally.
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

export default ImportExport

