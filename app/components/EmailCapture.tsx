'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [signupType, setSignupType] = useState<'self' | 'gift' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that a signup type is selected
    if (!signupType) {
      alert('Please select whether this is for yourself or as a gift.');
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          signupType,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to join. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-[#fcbe11]/20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#dd7409] to-[#c66508] flex items-center justify-center shadow-lg animate-float">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif font-semibold mb-3 text-[#1a1511]">You're on the list!</h3>
          <p className="text-lg text-[#4a3728]/70">
            We'll be in touch soon with launch updates and early access details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#fcbe11]/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-6 py-5 text-lg border-2 border-[#8b6f47]/20 rounded-2xl focus:border-[#fdbf14] focus:outline-none focus:ring-4 focus:ring-[#fcbe11]/10 transition-all bg-[#fef9ed]/30"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-[#4a3728]/70 uppercase tracking-wide">I'm interested for: <span className="text-[#dd7409]">*</span></p>
            
            <label className={`flex items-center space-x-4 cursor-pointer group p-4 rounded-xl transition-all border-2 ${
              signupType === 'self' 
                ? 'bg-[#dd7409]/5 border-[#dd7409]' 
                : 'hover:bg-[#fef9ed]/50 border-transparent'
            }`}>
              <input
                type="radio"
                name="signupType"
                checked={signupType === 'self'}
                onChange={() => setSignupType('self')}
                className="w-6 h-6 text-[#dd7409] focus:ring-[#dd7409] cursor-pointer"
              />
              <div className="flex-1">
                <span className="text-lg text-[#4a3728] group-hover:text-[#1a1511] transition-colors font-medium block">
                  🤰 Myself
                </span>
                <span className="text-sm text-[#4a3728]/60">
                  I'm preparing for my own postpartum journey
                </span>
              </div>
            </label>

            <label className={`flex items-center space-x-4 cursor-pointer group p-4 rounded-xl transition-all border-2 ${
              signupType === 'gift' 
                ? 'bg-[#dd7409]/5 border-[#dd7409]' 
                : 'hover:bg-[#fef9ed]/50 border-transparent'
            }`}>
              <input
                type="radio"
                name="signupType"
                checked={signupType === 'gift'}
                onChange={() => setSignupType('gift')}
                className="w-6 h-6 text-[#dd7409] focus:ring-[#dd7409] cursor-pointer"
              />
              <div className="flex-1">
                <span className="text-lg text-[#4a3728] group-hover:text-[#1a1511] transition-colors font-medium block">
                  🎁 To gift to someone
                </span>
                <span className="text-sm text-[#4a3728]/60">
                  I want to support someone's recovery
                </span>
              </div>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#dd7409] text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-[#c66508] hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Joining...
              </>
            ) : (
              <>
                Join Early Access
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-sm text-[#4a3728]/50">
            ✨ Launching Spring 2026 • Limited early access spots
          </p>
        </form>
      </div>
    </div>
  );
}

