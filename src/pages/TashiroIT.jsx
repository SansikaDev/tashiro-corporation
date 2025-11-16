import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEO from '../components/SEO'
import Card from '../components/Card'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

const TashiroIT = () => {
  const services = [
    {
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure and migration services to modernize your business operations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from web apps to enterprise systems.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure data privacy.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize operations.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and BI solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      title: 'Managed Services',
      description: '24/7 IT support and managed services to keep your systems running smoothly.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    },
  ]

  return (
    <>
      <SEO
        title="Tashiro IT - IT Services & Solutions"
        description="Tashiro IT offers cutting-edge IT services and solutions including cloud computing, software development, cybersecurity, and IT consulting."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent/20 to-primary/10 overflow-hidden">
        <Suspense fallback={null}>
          <AnimatedBackground type="particles" color="#90EE90" intensity="medium" />
        </Suspense>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Tashiro IT
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Explore Our Expertise: Elevating Spaces. Enriching Lives, and Bringing Your Vision to Life 
              with Our Comprehensive Range of IT Services and Digital Solutions.
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
              Our IT Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to drive digital transformation and accelerate your business growth.
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
                Why Choose Tashiro IT?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: 'M5 13l4 4L19 7', title: 'Expert Team', desc: 'Our team of certified IT professionals brings years of experience and expertise to every project.' },
                  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Cutting-Edge Technology', desc: 'We leverage the latest technologies and best practices to deliver innovative solutions.' },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: '24/7 Support', desc: 'Round-the-clock support ensures your systems are always running smoothly.' }
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
              <Suspense fallback={<div className="w-full h-96 bg-gray-200 rounded-xl" />}>
                <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <AnimatedBackground type="cube" color="#228B22" />
                </div>
              </Suspense>
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Contact us today to discuss how Tashiro IT can help drive your digital transformation.
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

export default TashiroIT

