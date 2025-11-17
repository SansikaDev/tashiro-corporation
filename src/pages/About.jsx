import { Link } from 'react-router-dom'
import React, { lazy, Suspense, useState } from 'react'
import SEO from '../components/SEO'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

const About = () => {
  const TeamCard = ({ name, title, bio, imgSrc }) => {
    const [loaded, setLoaded] = useState(false)
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white/90 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700">
        <div className="flex-shrink-0">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-accent/10">
            <img
              src={imgSrc}
              alt={name}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 1.2s ease, transform 1.2s ease',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'scale(1)' : 'scale(1.03)'
              }}
            />
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-primary font-medium mb-2">{title}</p>
          <p className="text-gray-600 leading-relaxed max-w-xl whitespace-pre-line">{bio}</p>
        </div>
      </div>
    )
  }

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
            Tashiro Corporation is a multi-sector enterprise founded on a strategic Japan–Sri Lanka partnership. We combine Japanese precision and Sri Lankan heritage to deliver world-class IT solutions and premium export products including Ceylon tea and Ayurvedic specialties.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up group" style={{ animationDelay: '0.1s' }}>
              <img
                src="https://images.unsplash.com/photo-1516685018646-549c88b9a4d8?w=1000&h=700&fit=crop"
                alt="Tashiro Corporation"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Connecting Sri Lanka with the World
              </h2>
              <div className="space-y-6">
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Purpose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tashiro Corporation unites Japanese innovation with Sri Lankan potential to provide
                    secure IT solutions and to export premium Sri Lankan products to international markets,
                    including Japan. We emphasize reliability, quality assurance, and sustainable partnerships.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Ideology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We operate with honesty, respect, and mutual understanding—combining Japanese operational
                    discipline with Sri Lanka’s natural resources and craftsmanship. Our ideology centers on
                    trust, long-term relationships, and contributing to the Japan–Sri Lanka partnership.
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
                Tashiro Corporation is founded on a strong Japan–Sri Lanka partnership, bringing together
                Japanese business precision and Sri Lankan natural resources. Our work honors a history of
                friendship between the two nations and builds on shared values of trust and mutual respect.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a multi-sector company, we are committed to innovation, quality assurance, and sustainable
                growth across Global IT Solutions, premium Ceylon Tea exports, and Ayurvedic & specialty
                Sri Lankan products.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We source products from trusted manufacturers, maintain strict quality controls, and work to
                introduce Sri Lanka's finest goods to global markets—especially Japan—while nurturing long-term
                partnerships.
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
              We focus on three core verticals that leverage our combined expertise and Sri Lanka’s unique strengths.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { to: '/tashiro-it', title: 'Global IT Solutions', desc: 'Secure, scalable system development, web & mobile apps, automation, and IT consulting.' },
                { to: '/tea-services', title: 'Export of Ceylon Tea', desc: 'Premium single-origin teas, custom packaging, and strict quality control for export markets.' },
                { to: '/import-export', title: 'Ayurvedic & Specialty Products', desc: 'Ayurvedic oils, herbal supplements, spices, and organic food items sourced responsibly.' }
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

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Leadership guiding Tashiro Corporation's Japan–Sri Lanka mission.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <TeamCard
              name="Mr. Yasunori Koto"
              title="President – Tashiro Corporation"
              imgSrc="https://images.unsplash.com/photo-1545996124-1f6a7f7f6b3f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              bio={`It is my privilege to share this message as we continue to strengthen the vision and purpose of Tashiro Corporation—a venture founded on the partnership between Japan and Sri Lanka.\n\nOur mission is to build a corporation that unites Japanese innovation with Sri Lankan potential, while facilitating the export of high-quality Sri Lankan products to Japan. Through this initiative, we aim to introduce Sri Lanka’s finest tea, ayurvedic items, food products, and other unique resources to the Japanese market with unwavering trust and quality.\n\nThis corporation is also deeply rooted in gratitude. The friendship between Japan and Sri Lanka has a remarkable history, especially during the J. R. Jayewardene era, when Sri Lanka played a significant role in supporting Japan on the international stage. That act of goodwill created a long-lasting bond between our nations—one that Japan continues to value and respect.\n\nThrough Tashiro Corporation, we honor that history by contributing to the continued strengthening of Japan–Sri Lanka relations. This effort is not only a business venture, but also a personal commitment to deepen the partnership that began decades ago.\n\nTogether with my Sri Lankan partners, we remain dedicated to working with honesty, respect, and mutual understanding—building a future of shared growth and meaningful cooperation between our two countries.`}
            />
            <TeamCard
              name="Mr. Saman Dharmasena"
              title="Director"
              imgSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              bio="Mr. Saman Dharmasena brings local market expertise and strategic business development experience to Tashiro Corporation. He focuses on supply chain partnerships and export compliance for premium Sri Lankan products."
            />

            <TeamCard
              name="Mr. Kapil Kodithuwakku"
              title="Director"
              imgSrc="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              bio="Mr. Kapil Kodithuwakku provides operational leadership and oversees quality control across our tea and ayurvedic product lines. He ensures products meet international standards."
            />

            
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

