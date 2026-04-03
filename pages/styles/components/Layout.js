import Head from 'next/head'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children, title = "SportsMatch - Find Badminton Partners Instantly" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Find badminton partners in minutes, not hours. Join games near you instantly in Bangalore." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SportsMatch</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#how-it-works" className="text-gray-600 hover:text-primary-600">
                How it Works
              </Link>
              <Link href="/#features" className="text-gray-600 hover:text-primary-600">
                Features
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600">
                Contact
              </Link>
              <button className="btn-primary">
                Get Early Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/#how-it-works" className="text-gray-600">How it Works</Link>
                <Link href="/#features" className="text-gray-600">Features</Link>
                <Link href="/contact" className="text-gray-600">Contact</Link>
                <button className="btn-primary w-full">Get Early Access</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SportsMatch</span>
              </div>
              <p className="text-gray-400">
                Find badminton partners instantly. No more empty courts or cancelled games.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/#how-it-works" className="block text-gray-400 hover:text-white">
                  How it Works
                </Link>
                <Link href="/#features" className="block text-gray-400 hover:text-white">
                  Features
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: achutha.p.sunku2003@gmail.com
              </p>
              <p className="text-gray-400">
                Launching in Bangalore first
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 SportsMatch. Built for players, by players.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
