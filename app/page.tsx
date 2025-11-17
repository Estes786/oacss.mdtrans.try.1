"use client"

import Link from "next/link"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Real-Time Dashboard",
      description: "Monitor semua metrik bisnis dalam satu dashboard - Revenue, conversion, traffic, dan growth metrics",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: "AI-Powered Insights",
      description: "Dapatkan insight otomatis dengan machine learning - Anomaly detection, trend forecasting, dan recommendations",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Multi-Touch Attribution",
      description: "Lacak customer journey lengkap - Campaign performance, channel attribution, dan ROI optimization",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
      title: "Midtrans Payment",
      description: "Legal-grade payment gateway - E-wallet, VA, QRIS, Credit Card",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const paymentMethods = [
    { name: "GoPay", icon: "💚" },
    { name: "DANA", icon: "💙" },
    { name: "OVO", icon: "💜" },
    { name: "ShopeePay", icon: "🧡" },
    { name: "BCA VA", icon: "🏦" },
    { name: "Mandiri VA", icon: "🏦" },
    { name: "BNI VA", icon: "🏦" },
    { name: "BRI VA", icon: "🏦" },
    { name: "QRIS", icon: "📱" },
    { name: "Credit Card", icon: "💳" },
  ]

  const stats = [
    {
      value: "10M+",
      label: "Total Revenue",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2v20m0 0l8-8m-8 8l-8-8" strokeWidth="2" />
        </svg>
      ),
    },
    {
      value: "1000+",
      label: "Active Users",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
    },
    {
      value: "24/7",
      label: "AI Support",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />

        <nav className="relative max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-2xl font-bold text-gray-900">OASIS Analytics</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Dashboard
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Marketplace
            </Link>
            <Link href="/legal/contact" className="btn-primary">
              Hubungi Kami
            </Link>
          </div>
        </nav>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-semibold">Enterprise-Grade Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Real-Time
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Business Intelligence
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeIn">
            Platform Business Intelligence lengkap untuk bisnis digital Indonesia - Unified dashboard dengan
            <strong> real-time analytics</strong>, <strong>AI-powered insights</strong>, dan{" "}
            <strong>automated reporting</strong>. Terima pembayaran dengan <strong>Midtrans Payment Gateway</strong>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn">
            <Link href="/dashboard" className="btn-primary inline-flex items-center space-x-2">
              <span>Mulai Sekarang</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </Link>
            <Link href="/about" className="btn-secondary inline-flex items-center space-x-2">
              <span>Pelajari Lebih Lanjut</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fadeIn">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Trinity MOAT Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Analytics Suite</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform BI lengkap dengan fitur real-time analytics, AI insights, dan payment gateway integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-transform duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4 
                                group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span className="font-semibold">Legal-Grade Payment Gateway</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Midtrans Payment Integration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Terima pembayaran dari semua metode populer di Indonesia dengan keamanan enterprise-grade
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-4xl mb-2">{method.icon}</div>
                  <div className="text-sm font-medium text-gray-700">{method.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" strokeWidth="2" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Wallet Ready</h3>
              <p className="text-gray-600">GoPay, DANA, OVO, ShopeePay - Semua e-wallet populer</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <svg className="w-10 h-10 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeWidth="2" />
                <line x1="1" y1="10" x2="23" y2="10" strokeWidth="2" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Virtual Account</h3>
              <p className="text-gray-600">BCA, Mandiri, BNI, BRI, Permata - Transfer bank 24/7</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Payment</h3>
              <p className="text-gray-600">QRIS & Credit Card - Pembayaran instan real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Mengakselerasi Revenue Anda?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Bergabunglah dengan bisnis digital Indonesia yang sudah menggunakan OASIS Analytics untuk mengoptimasi revenue mereka
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
                                              hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl 
                                              transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
            >
              <span>Mulai Gratis</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </Link>
            <Link
              href="/legal/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold 
                                                   hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Hubungi Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

