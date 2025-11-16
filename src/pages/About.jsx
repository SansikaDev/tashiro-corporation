import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEO from '../components/SEO'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Tashiro Corporation"
        description="Learn about Tashiro Corporation, a subsidiary of Tashiro.jp, and our vision for expansion into IT services, tea production, and international trade."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-accent/20 to-primary/10 overflow-hidden">
        <Suspense fallback={null}>
          <AnimatedBackground type="particles" color="#90EE90" intensity="low" />
        </Suspense>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Crafting Timeless Spaces with Innovative Designs, Meticulous Attention to Detail, and a Passion 
            for Sustainable Living to Inspire, Enrich, and Transform the Way We Experience Our Built Environment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up group" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                alt="Tashiro Corporation heritage"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                The PeakStudio Journey to Architectural Excellence
              </h2>
              <div className="space-y-6">
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-primary mb-3">Vision to Reality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    PeakStudio's Journey of Architectural Innovation. Architectural Ingenuity Unveiled. 
                    PeakStudio's Path to Excellence. From our roots in traditional tofu production at Tashiro.jp, 
                    we've built a legacy of quality, innovation, and customer satisfaction.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-primary mb-3">Building Dreams</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pioneering Innovation, Collaborative Excellence, and Unwavering Commitment to Transforming 
                    Visions into Timeless Realities. As Tashiro Corporation, we're expanding beyond our traditional 
                    boundaries to embrace new opportunities in technology, tea services, and global trade.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 transform"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Our Heritage */}
          <div className="mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Heritage
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Tashiro Corporation is a proud subsidiary of Tashiro.jp, a company with deep roots in the 
                traditional art of tofu production. For generations, Tashiro.jp has been committed to creating 
                the finest quality tofu, using time-honored techniques passed down through the years.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building on this foundation of excellence, Tashiro Corporation was established to explore new 
                horizons and expand our business reach. We believe that the same principles that made our tofu 
                business successful—quality, innovation, and customer focus—can be applied to new industries 
                and markets.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expansion into IT services, tea production, and international trade represents our commitment 
                to growth, diversification, and continued excellence in everything we do.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Quality First', desc: 'We maintain the highest standards in everything we do, from product quality to customer service.' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Innovation', desc: 'We embrace new technologies and ideas to stay ahead of the curve and deliver cutting-edge solutions.' },
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'Collaboration', desc: 'We work closely with our partners and clients to achieve shared success and mutual growth.' }
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-accent/10 rounded-xl animate-slide-up hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Expansion Vision */}
          <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-8 md:p-12 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Expansion Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
              We're excited to announce our plans to expand into three new business areas, each representing 
              a natural extension of our core values and expertise.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { to: '/tashiro-it', title: 'Tashiro IT', desc: 'Cutting-edge IT services and digital solutions for modern businesses.' },
                { to: '/tea-services', title: 'Tea Services', desc: 'Premium tea production and distribution services worldwide.' },
                { to: '/import-export', title: 'Import/Export', desc: 'Comprehensive international trade and logistics services.' }
              ].map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Link>
              ))}
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
            Let's Start Building Your Vision
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Reach Out to Us for Expert Guidance, Collaborative Design, and Tailored Solutions to Shape 
            Your Vision into Reality.
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

export default About

