'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to backend API
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Kembali ke Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Mail className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">Contact Us</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan? Tim kami siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="card">
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Kirim email ke kami, kami akan membalas dalam 24 jam
            </p>
            <a href="mailto:elfaress2425@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
              elfaress2425@gmail.com
            </a>
          </div>

          <div className="card">
            <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Telepon</h3>
            <p className="text-gray-600 mb-4">
              Hubungi kami via telepon atau WhatsApp
            </p>
            <a href="tel:+6285712658316" className="text-primary-600 hover:text-primary-700 font-medium block">
              +62 857-1265-8316
            </a>
            <a href="https://wa.me/6285712658316" target="_blank" rel="noopener noreferrer"
               className="text-green-600 hover:text-green-700 font-medium block mt-2">
              Chat via WhatsApp
            </a>
          </div>

          <div className="card">
            <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokasi</h3>
            <p className="text-gray-600 mb-4">
              Indonesia
            </p>
            <p className="text-sm text-gray-500">
              Melayani seluruh Indonesia dan internasional
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="text-green-600 mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-600">
                  Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+62 812-3456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Pilih subjek...</option>
                      <option value="general">Pertanyaan Umum</option>
                      <option value="sales">Penjualan & Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Payment</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            <details className="card group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Bagaimana cara memulai menggunakan OASIS V4?</span>
                <span className="text-primary-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Cukup daftar akun gratis, pilih paket yang sesuai, dan mulai membuat business goals Anda. 
                AI kami akan membantu menggenerate tasks dan optimasi.
              </p>
            </details>

            <details className="card group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Metode pembayaran apa saja yang diterima?</span>
                <span className="text-primary-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Kami menerima semua metode pembayaran populer melalui Midtrans: E-wallet (GoPay, DANA, OVO, ShopeePay), 
                Virtual Account (BCA, Mandiri, BNI, BRI), QRIS, dan Credit Card.
              </p>
            </details>

            <details className="card group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Apakah data saya aman?</span>
                <span className="text-primary-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ya, kami menggunakan enkripsi SSL/TLS, database terenkripsi dengan Supabase, dan payment processing 
                PCI-DSS compliant melalui Midtrans. Data Anda sepenuhnya aman.
              </p>
            </details>

            <details className="card group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                <span>Apakah ada refund policy?</span>
                <span className="text-primary-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ya, kami memberikan refund dalam 7 hari jika terdapat technical issues atau duplicate purchase. 
                Hubungi support kami untuk refund request.
              </p>
            </details>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
