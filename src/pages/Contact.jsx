import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      // Replace these with your EmailJS credentials (see setup instructions)
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // Prepare email template parameters
      const templateParams = {
        to_email: 'sansika.sansikx@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        reply_to: formData.email,
      }

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey)

      // Success
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
        agreeToTerms: false,
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us - Tashiro Corporation"
        description="Get in touch with Tashiro Corporation. Reach out to our team of experts for inquiries about our services and business expansion opportunities."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Get in Touch: Let's Start Building Your Dream Together. Reach Out to Our Team of Experts Today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Send us a message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form and our team will get back to you as quickly as we can.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your E-mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Your Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write Your message here"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  aria-required="true"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  aria-required="true"
                />
                <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-600">
                  I agree to{' '}
                  <a href="#" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">
                    Privacy Policy
                  </a>
                  . <span className="text-red-500">*</span>
                </label>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly at sansika.sansikx@gmail.com
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find us on Google Maps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you have any questions you can report them below with the following information, 
              so that it is easy for us to reply to your message.
            </p>
          </div>

          <div className="max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.155495318717!2d79.87904137499602!3d6.8719644931267645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInMTkuMSJOIDc5wrA1Mic1My44IkU!5e0!3m2!1sen!2slk!4v1763400355703!5m2!1sen!2slk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tashiro Corporation Location"
                aria-label="Google Maps showing Tashiro Corporation location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10" />
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
            <a
              href="#contact-form"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary hover:scale-105 transform"
            >
              Contact Us
            </a>
            <a
              href="#contact-form"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary hover:scale-105 transform"
            >
              Book A Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

