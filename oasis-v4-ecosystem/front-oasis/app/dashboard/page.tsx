'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Target,
  TrendingUp,
  ShieldCheck,
  Store,
  BarChart3,
  Bot,
  Settings,
  Menu,
  X,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'dacoo', name: 'DACOO', icon: Target },
    { id: 'aegm', name: 'AEGM', icon: TrendingUp },
    { id: 'ovs', name: 'OVS', icon: ShieldCheck },
    { id: 'marketplace', name: 'Marketplace', icon: Store },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'agents', name: 'AI Agents', icon: Bot },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O4</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">OASIS V4</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activeSection === item.id
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
            <div className="text-sm font-semibold mb-1">Free Tier</div>
            <div className="text-xs opacity-90 mb-3">Upgrade for more features</div>
            <button className="w-full bg-white text-blue-600 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="md:hidden mr-4">
                <Menu className="w-6 h-6 text-gray-500" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {navigationItems.find(item => item.id === activeSection)?.name || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <Activity className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 sm:p-6 lg:p-8">
          {activeSection === 'overview' && <OverviewContent />}
          {activeSection === 'dacoo' && <DACOOContent />}
          {activeSection === 'aegm' && <AEGMContent />}
          {activeSection === 'ovs' && <OVSContent />}
          {activeSection === 'marketplace' && <MarketplaceContent />}
          {activeSection === 'analytics' && <AnalyticsContent />}
          {activeSection === 'agents' && <AgentsContent />}
          {activeSection === 'settings' && <SettingsContent />}
        </div>
      </main>
    </div>
  );
}

// Overview Content Component
function OverviewContent() {
  const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12.5%', isPositive: true, icon: DollarSign },
    { label: 'Active Users', value: '1,234', change: '+8.3%', isPositive: true, icon: Users },
    { label: 'Conversion Rate', value: '3.45%', change: '-2.1%', isPositive: false, icon: TrendingUp },
    { label: 'Active Agents', value: '23', change: '+15.2%', isPositive: true, icon: Bot },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome to OASIS V4! 🚀</h2>
        <p className="text-blue-100 mb-6">Your superintelligence ecosystem is ready. Start building your money machine today.</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Quick Start Guide
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            Watch Tutorial
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className={`flex items-center text-sm font-semibold ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Trinity MOAT Quick Access */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link href="#" onClick={() => {}} className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition">
          <Target className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DACOO</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Create & optimize digital assets</p>
          <div className="text-blue-600 font-semibold text-sm">Launch →</div>
        </Link>

        <Link href="#" onClick={() => {}} className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition">
          <TrendingUp className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AEGM</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Optimize growth & conversions</p>
          <div className="text-purple-600 font-semibold text-sm">Launch →</div>
        </Link>

        <Link href="#" onClick={() => {}} className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6 border border-green-200 dark:border-green-800 hover:shadow-xl transition">
          <ShieldCheck className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">OVS</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Verify outcomes & track ROI</p>
          <div className="text-green-600 font-semibold text-sm">Launch →</div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New digital asset created', time: '2 hours ago', type: 'success' },
            { action: 'A/B test completed with 15% improvement', time: '5 hours ago', type: 'success' },
            { action: 'ROI report generated', time: '1 day ago', type: 'info' },
            { action: 'New AI agent deployed', time: '2 days ago', type: 'success' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                <span className="text-gray-900 dark:text-white">{activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// DACOO Content Component
function DACOOContent() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Digital Asset Creation & Optimization
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Transform your ideas into revenue-generating digital assets with AI-powered optimization.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition text-left font-semibold">
              + Create New Digital Asset
            </button>
            <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-3 rounded-lg transition text-left font-semibold">
              📊 Decompose Business Goal
            </button>
            <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-3 rounded-lg transition text-left font-semibold">
              ⚡ Optimize Existing Asset
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Your Assets</h3>
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            No assets yet. Create your first digital asset to get started!
          </div>
        </div>
      </div>
    </div>
  );
}

// AEGM Content Component
function AEGMContent() {
  return (
    <div className="space-y-6">
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          AI-Enhanced Growth Machine
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Accelerate growth with real-time analytics, A/B testing, and customer journey optimization.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Growth Analytics</h3>
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          Analytics dashboard coming soon. Connect your data sources to get started!
        </div>
      </div>
    </div>
  );
}

// OVS Content Component
function OVSContent() {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Omnichannel Value System
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Verify outcomes, track ROI, and prove business value across all channels.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Outcome Verification</h3>
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          Start tracking your outcomes to see verification results here.
        </div>
      </div>
    </div>
  );
}

// Placeholder components
function MarketplaceContent() {
  return <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
    <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
  </div>;
}

function AnalyticsContent() {
  return <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4">Analytics</h2>
    <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
  </div>;
}

function AgentsContent() {
  return <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4">AI Agents</h2>
    <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
  </div>;
}

function SettingsContent() {
  return <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
  </div>;
}
