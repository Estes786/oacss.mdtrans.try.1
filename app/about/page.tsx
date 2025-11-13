'use client'

import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Target, TrendingUp, ShieldCheck, Rocket, Users, Award, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Kembali ke Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Rocket className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">About OASIS V4</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Award size={20} />
            <span className="font-semibold">Enterprise-Grade Platform</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tentang OASIS V4
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform superintelligence yang mengubah cara bisnis mencapai target revenue mereka 
            melalui AI automation, data analytics, dan payment integration.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <Target className="text-blue-600 mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Memberdayakan bisnis di Indonesia untuk mencapai pertumbuhan eksponensial melalui 
              teknologi AI/ML, automation, dan data-driven decision making. Kami percaya setiap 
              bisnis berhak mendapatkan akses ke tools enterprise-grade tanpa biaya mahal.
            </p>
          </div>

          <div className="card">
            <Zap className="text-purple-600 mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Menjadi platform superintelligence #1 di Asia Tenggara yang membantu jutaan bisnis 
              mengoptimalkan revenue, meningkatkan efisiensi, dan mencapai sustainable growth 
              melalui Trinity MOAT system yang terbukti efektif.
            </p>
          </div>
        </div>

        {/* Trinity MOAT Explanation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Apa itu Trinity MOAT?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group hover:scale-105 transition-transform">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DACOO</h3>
              <h4 className="text-sm font-semibold text-blue-600 mb-2">Digital Asset Creation & Optimization</h4>
              <p className="text-gray-600 mb-4">
                Buat dan optimasi aset digital dengan bantuan AI. Dari ebooks, courses, templates, 
                hingga software products - semuanya dioptimasi untuk maximum revenue.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ AI-generated content ideas</li>
                <li>✓ Automatic optimization suggestions</li>
                <li>✓ Revenue tracking & analytics</li>
                <li>✓ Market research automation</li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-transform">
              <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AEGM</h3>
              <h4 className="text-sm font-semibold text-green-600 mb-2">AI-Enhanced Growth Machine</h4>
              <p className="text-gray-600 mb-4">
                Akselerasi growth dengan machine learning algorithms yang menganalisis data, 
                memprediksi trends, dan memberikan actionable recommendations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Real-time analytics dashboard</li>
                <li>✓ A/B testing automation</li>
                <li>✓ Customer journey mapping</li>
                <li>✓ AI-powered recommendations</li>
              </ul>
            </div>

            <div className="card group hover:scale-105 transition-transform">
              <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">OVS</h3>
              <h4 className="text-sm font-semibold text-purple-600 mb-2">Omnichannel Value System</h4>
              <p className="text-gray-600 mb-4">
                Verifikasi hasil bisnis secara real-time across all channels. Track, measure, 
                dan optimize ROI dari setiap marketing channel yang Anda gunakan.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Multi-channel attribution</li>
                <li>✓ ROI verification & reporting</li>
                <li>✓ Performance benchmarking</li>
                <li>✓ Outcome-based optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose OASIS V4 */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kenapa Memilih OASIS V4?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">🚀 Enterprise-Grade Technology</h3>
              <p className="text-gray-600 text-sm">
                Built with Next.js 15, Supabase, dan HuggingFace AI/ML. Stack yang sama 
                digunakan oleh unicorn companies worldwide.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">💳 Legal-Grade Payment</h3>
              <p className="text-gray-600 text-sm">
                Integrasi Midtrans dengan semua metode pembayaran populer. PCI-DSS compliant 
                dan fully secured.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">🔒 Security First</h3>
              <p className="text-gray-600 text-sm">
                SSL/TLS encryption, RLS database security, JWT authentication, dan regular 
                security audits.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Data-Driven Insights</h3>
              <p className="text-gray-600 text-sm">
                Real-time analytics, AI-powered recommendations, dan actionable insights 
                untuk setiap business decision.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">🤖 AI Automation</h3>
              <p className="text-gray-600 text-sm">
                Otomasi tasks repetitive dengan AI agents. Focus on strategy, let AI 
                handle the execution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">📱 Mobile-First Design</h3>
              <p className="text-gray-600 text-sm">
                Responsive design yang sempurna di semua devices. Manage bisnis Anda 
                dari smartphone, tablet, atau desktop.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">🌐 Indonesian Market Focus</h3>
              <p className="text-gray-600 text-sm">
                Dirancang khusus untuk market Indonesia dengan payment methods lokal, 
                bahasa Indonesia, dan compliance dengan regulasi lokal.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">💪 Scalable Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Cloud-native architecture yang scale automatically. Handle traffic spikes 
                tanpa downtime.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Impact & Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10M+</div>
              <div className="text-gray-600">Total Revenue Processed</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan OASIS V4?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Mulai journey Anda menuju exponential growth hari ini
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/dashboard" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
                                              hover:bg-blue-50 transition-all shadow-lg inline-block">
              Mulai Gratis
            </Link>
            <Link href="/legal/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold 
                                                   hover:bg-white hover:text-blue-600 transition-all inline-block">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
