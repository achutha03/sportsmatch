import Layout from '../components/Layout'
import { Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <Layout title="Contact - SportsMatch">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">achutha.p.sunku2003@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">Bangalore, India</p>
                    <p className="text-sm text-gray-500">Launching in Whitefield first</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-2">
                  Interested in Partnerships?
                </h3>
                <p className="text-primary-700 text-sm">
                  We're looking for badminton courts, equipment partners, and community leaders 
                  in Bangalore. Let's build the future of sports together.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              <form className="space-y-6" action="https://formspree.io/f/xpwzgkqr" method="POST">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Court Partnership</option>
                    <option>Feedback</option>
                    <option>Press/Media</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
