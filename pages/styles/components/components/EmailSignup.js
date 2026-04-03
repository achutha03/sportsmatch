import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function EmailSignup({ className = "" }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      // Using Formspree for email collection
      const response = await fetch('https://formspree.io/f/xpwzgkqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: 'Early access signup for SportsMatch'
        }),
      })
      
      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center justify-center space-x-2 text-accent-600 ${className}`}>
        <CheckCircle className="w-5 h-5" />
        <span className="font-medium">Thanks! We'll notify you when we launch.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="flex-1 relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
      >
        {status === 'loading' ? 'Signing up...' : 'Get Early Access'}
      </button>
    </form>
  )
}
