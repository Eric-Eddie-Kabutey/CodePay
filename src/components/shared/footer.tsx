import React from 'react'
import Link from 'next/link';
import { Logo } from './logo';

function Footer() {
  return (
    <footer className="bg-white w-full">
        {/* Main Footer Content */}
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="w-full flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
            {/* Logo */}
            <div>
              <Link href="/">
                <Logo variant="wordmark" className="h-10" />
              </Link>
            </div>

            {/* Footer Links */}
            <div className="w-[60%] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Products Column */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Products</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li><a href="/products" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">Remittance Engine</a></li>
                  <li><a href="/products" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">Banking Suite</a></li>
                  <li><a href="/products" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">Agent Network</a></li>
                </ul>
              </div>

              {/* Solutions Column */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Solutions</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li><a href="/solutions" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">For Startups</a></li>
                  <li><a href="/solutions" className='text-neutral-600 text-sm hover:text-navy-600 transition-colors'>For Banks</a></li>
                  <li><a href="/solutions" className='text-neutral-600 text-sm hover:text-navy-600 transition-colors'>For Enterprises</a></li>
                </ul>
              </div>

              {/* Developers Column */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Developers</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li><a href="/developers" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">Documentation</a></li>
                  <li><a href="/developers" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">API Reference</a></li>
                  <li><a href="/developers" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">SDKs</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Company</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li><a href="/about" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">About</a></li>
                  <li><a href="/blog" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">Blog</a></li>
                  <li><a href="/contact" className="text-neutral-600 text-sm hover:text-navy-600 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider with Policies */}
          <div className="border-t border-b border-neutral-200 py-3 sm:py-4 my-6 sm:my-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-3 sm:gap-5 mb-3 sm:mb-0">
                <a href="#" className="text-neutral-600 text-xs sm:text-xs hover:text-navy-600 transition-colors">Privacy Policy</a>
                <a href="#" className="text-neutral-600 text-xs sm:text-xs hover:text-navy-600 transition-colors">Terms of Service</a>
                <a href="#" className="text-neutral-600 text-xs sm:text-xs hover:text-navy-600 transition-colors">Security</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-600 hover:text-navy-600 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-neutral-600 hover:text-navy-600 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Text */}
          <div className="text-neutral-600 text-xs sm:text-xs font-normal mb-4">
            <p>
              CodePay is Africa's AI-powered blockchain remittance and banking infrastructure platform.
              We help banks, fintechs, and remittance companies launch and scale financial products across Africa.
              For regulatory or legal inquiries, please contact us at legal@codepay.io.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-neutral-600 mt-4 text-xs sm:text-sm text-left">
            © CodePay 2024. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer