'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              OASIS V4
            </h3>
            <p className="text-gray-400 mb-4">
              Enterprise-Grade Superintelligence Ecosystem. Platform bisnis lengkap dengan AI/ML integration, 
              payment gateway, dan analytics real-time untuk mengakselerasi revenue Anda.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Tentang OASIS V4
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/legal/contact" className="hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <Mail className="text-primary-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:elfaress2425@gmail.com" className="text-white hover:text-primary-500 transition-colors">
                  elfaress2425@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-primary-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Telepon</p>
                <a href="tel:+6285712658316" className="text-white hover:text-primary-500 transition-colors">
                  +62 857-1265-8316
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Lokasi</p>
                <p className="text-white">Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} OASIS V4. All rights reserved. Built with ❤️ in Indonesia.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/legal/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
