import Layout from '../components/Layout'
import EmailSignup from '../components/EmailSignup'
import { 
  Clock, 
  Users, 
  MapPin, 
  Shield, 
  Star, 
  Smartphone,
  Zap,
  CheckCircle,
  MessageCircle
} from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Badminton Partners in 
              <span className="text-primary-600"> 10 Minutes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              No more WhatsApp chaos or empty courts. Join players near you instantly, 
              with guaranteed reliability and skill matching.
            </p>
            
            <div className="max-w-md mx-auto mb-12">
              <EmailSignup />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Launching in Bangalore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>iOS & Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tired of This?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Chaos</h3>
              <p className="text-gray-600">
                47 messages to organize one game. Half the people ghost at the last minute.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wasted Time</h3>
              <p className="text-gray-600">
                Show up to find only 2 people when you need 4. Or court's double-booked.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Mismatch</h3>
              <p className="text-gray-600">
                Beginners getting destroyed by pros, or advanced players bored with casual games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How SportsMatch Works
            </h2>
            <p className="text-xl text-gray-600">
              From opening the app to playing - in under 15 minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create or Join</h3>
              <p className="text-gray-600">
                "Badminton, 7 PM, Whitefield" in 3 taps. Or join nearby games instantly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                Matched by location, time, and skill level. ₹50 deposit ensures everyone shows up.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Play & Rate</h3>
              <p className="text-gray-600">
                Show up, play, rate other players. Deposit auto-refunded when you attend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Players Love SportsMatch
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Zap className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Find games in seconds, not hours. Perfect for spontaneous players.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-accent-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guaranteed Reliability</h3>
              <p className="text-gray-600">
                Deposit system ensures 95%+ show-up rate. No more wasted trips.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Matching</h3>
              <p className="text-gray-600">
                Play with people at your level. Beginner to advanced categories.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-accent-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hyperlocal</h3>
              <p className="text-gray-600">
                Find games within 5km. No more traveling across the city.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Star className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Player Ratings</h3>
              <p className="text-gray-600">
                Rate and be rated. Build trust in the community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-accent-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Court Suggestions</h3>
              <p className="text-gray-600">
                Get nearby court recommendations with directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Never Play Alone Again?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the waitlist and be among the first to play when we launch in Bangalore.
          </p>
          
          <div className="max-w-md mx-auto">
            <EmailSignup className="[&_input]:border-primary-400 [&_input]:bg-white/10 [&_input]:text-white [&_input::placeholder]:text-primary-200 [&_button]:bg-white [&_button]:text-primary-600 [&_button:hover]:bg-primary-50" />
          </div>
          
          <p className="text-primary-200 mt-4 text-sm">
            No spam. Just updates on launch and early access.
          </p>
        </div>
      </section>
    </Layout>
  )
}
