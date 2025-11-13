'use client'

import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { Home, Target, TrendingUp, ShieldCheck, Store, ArrowLeft, DollarSign, Users, Activity, Package } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Kembali ke Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Home className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">Dashboard</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome to OASIS V4 - Your business intelligence center</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Revenue</span>
              <DollarSign className="text-green-600" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">Rp 10.5M</div>
            <div className="text-sm text-green-600 mt-1">+25% from last month</div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Active Users</span>
              <Users className="text-blue-600" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">1,234</div>
            <div className="text-sm text-blue-600 mt-1">+15% from last month</div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Conversions</span>
              <Activity className="text-purple-600" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">456</div>
            <div className="text-sm text-purple-600 mt-1">+8% from last month</div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Products</span>
              <Package className="text-orange-600" size={20} />
            </div>
            <div className="text-3xl font-bold text-gray-900">89</div>
            <div className="text-sm text-orange-600 mt-1">12 new this month</div>
          </div>
        </div>

        {/* Trinity MOAT Modules */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trinity MOAT Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/dashboard/dacoo" className="card hover:scale-105 transition-transform group">
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">DACOO</h3>
            <p className="text-gray-600 mb-4">Digital Asset Creation & Optimization</p>
            <div className="text-sm text-blue-600 font-medium">Manage Assets →</div>
          </Link>

          <Link href="/dashboard/aegm" className="card hover:scale-105 transition-transform group">
            <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AEGM</h3>
            <p className="text-gray-600 mb-4">AI-Enhanced Growth Machine</p>
            <div className="text-sm text-green-600 font-medium">View Analytics →</div>
          </Link>

          <Link href="/dashboard/ovs" className="card hover:scale-105 transition-transform group">
            <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">OVS</h3>
            <p className="text-gray-600 mb-4">Omnichannel Value System</p>
            <div className="text-sm text-purple-600 font-medium">Verify Outcomes →</div>
          </Link>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/marketplace" className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Store className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Marketplace</h3>
                <p className="text-sm text-gray-600">Browse and purchase digital products</p>
              </div>
            </div>
          </Link>

          <Link href="/legal/contact" className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contact Support</h3>
                <p className="text-sm text-gray-600">Get help from our 24/7 support team</p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
