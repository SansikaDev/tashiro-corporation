import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEO from '../components/SEO'
import Card from '../components/Card'
import VideoBackground from '../components/VideoBackground'
import AnimatedNumber from '../components/AnimatedNumber'

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'))

const Home = () => {
  const expansions = [
    {
      title: 'Tashiro IT',
      description: 'Cutting-edge IT services and solutions to drive digital transformation and innovation for businesses of all sizes.',
      link: '/tashiro-it',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    },
    {
      title: 'Tea Services',
      description: 'Premium tea production, distribution, and related services, bringing the finest tea experiences to customers worldwide.',
      link: '/tea-services',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop',
    },
    {
      title: 'Import/Export',
      description: 'Comprehensive international trade services, handling logistics for tofu, tea, and other premium products across global markets.',
      link: '/import-export',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    },
  ]

  return (
    <>
      <SEO
        title="Tashiro Corporation - Expanding Horizons Beyond Tradition"
        description="Tashiro Corporation - Expanding beyond tofu into IT services, tea production, and international trade. Discover our vision for growth and innovation."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background - Using a placeholder video URL, replace with your own */}
        <VideoBackground
          videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          fallbackImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        />
        
        {/* Animated Particles Overlay */}
        <Suspense fallback={null}>
          <AnimatedBackground type="particles" color="#90EE90" intensity="medium" />
        </Suspense>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full animate-slide-up">
            <span className="text-primary font-semibold text-sm">Beyond Tradition, We Build Dreams</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Architecture Designed for
            <span className="block text-accent mt-2 animate-float">Life & Innovation</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Where Creativity, Sustainability, and Innovation Merge to Shape Tomorrow's World through 
            Timeless Design Excellence and Inspired Spaces Crafted for Today and Beyond
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/about"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
              aria-label="Learn more about Tashiro Corporation"
            >
              Explore Our Vision
            </Link>
            <Link
              to="/contact"
              className="bg-white/90 backdrop-blur-sm text-primary border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:scale-105 transform"
              aria-label="Contact us"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white scroll-smooth">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tashiro Corporation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Crafting Timeless Spaces with Innovative Designs, Meticulous Attention to Detail, and a Passion 
              for Sustainable Living to Inspire, Enrich, and Transform the Way We Experience Our Built Environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Tashiro Journey to Excellence
              </h3>
              <div className="space-y-6">
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h4 className="text-xl font-semibold text-primary mb-2">Vision to Reality</h4>
                  <p className="text-gray-600">
                    Tashiro Corporation's Journey of Innovation. From our tofu heritage at Tashiro.jp, 
                    we're expanding our horizons with architectural ingenuity and excellence.
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h4 className="text-xl font-semibold text-primary mb-2">Building Dreams</h4>
                  <p className="text-gray-600">
                    Pioneering Innovation, Collaborative Excellence, and Unwavering Commitment to Transforming 
                    Visions into Timeless Realities.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 transform"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative animate-slide-up group" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Modern architecture representing innovation"
                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg animate-float">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={99} suffix="%" />
                </div>
                <div className="text-sm text-gray-600">Productivity increase on average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Opportunities Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expansion Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Our Creations: A Showcase of Inspiring Projects Reflecting Our Dedication to Innovation, 
              Quality Craftsmanship, and Timeless Design in Architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expansions.map((expansion, index) => (
              <div
                key={expansion.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  title={expansion.title}
                  description={expansion.description}
                  link={expansion.link}
                  image={expansion.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Discovering Architectural Mastery Evolution
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Exploring the Intersection of Vision, Innovation, and Craftsmanship to deliver exceptional 
                results and exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedNumber value={205} suffix="M+" />
                  </div>
                  <div className="text-gray-600">Monthly active users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedNumber value={99} suffix="%" />
                  </div>
                  <div className="text-gray-600">Customer satisfaction</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
                >
                  Book A Call
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Global business expansion"
                className="rounded-xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg animate-float">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedNumber value={27} suffix="% ↑" />
                </div>
                <div className="text-sm text-gray-600">Yearly Growth Rate</div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Start Building Your Vision
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reach Out to Us for Expert Guidance, Collaborative Design, and Tailored Solutions to Shape 
            Your Vision into Reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

