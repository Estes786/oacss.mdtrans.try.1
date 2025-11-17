'use client';

import Link from 'next/link';
import { 
  Rocket, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Store, 
  BarChart3, 
  Bot,
  Zap,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                OASIS V4
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                Features
              </Link>
              <Link href="#trinity" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                Trinity MOAT
              </Link>
              <Link href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">
                Pricing
              </Link>
              <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Superintelligence
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Ecosystem Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              The <span className="text-blue-600 font-semibold">Proven Money Machine</span> that transforms your business with AI-driven automation, intelligent marketplace, and revenue optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition flex items-center gap-2">
                Launch Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="#trinity" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-4 rounded-lg text-lg font-semibold transition">
                Explore Trinity MOAT
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, label: 'Revenue Generated', value: '$1M+' },
              { icon: Users, label: 'Active Users', value: '10K+' },
              { icon: TrendingUp, label: 'Avg Growth Rate', value: '350%' },
              { icon: CheckCircle2, label: 'Success Rate', value: '95%' },
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trinity MOAT Section */}
      <section id="trinity" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Trinity <span className="text-blue-600">MOAT</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The core revenue engine that powers OASIS V4 - Three integrated systems working in perfect harmony
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DACOO */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-blue-200 dark:border-blue-800">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">DACOO</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">Digital Asset Creation & Optimization</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>AI-powered content generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Goal decomposition engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Asset optimization for max revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Template marketplace integration</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-300 dark:border-blue-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Potential</div>
                <div className="text-2xl font-bold text-blue-600">$5K-$20K/mo</div>
              </div>
            </div>

            {/* AEGM */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-purple-200 dark:border-purple-800">
              <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AEGM</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-4">AI-Enhanced Growth Machine</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Real-time growth analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Automated A/B testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Customer journey optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Predictive revenue forecasting</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-purple-300 dark:border-purple-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Potential</div>
                <div className="text-2xl font-bold text-purple-600">$10K-$50K/mo</div>
              </div>
            </div>

            {/* OVS */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-green-200 dark:border-green-800">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">OVS</h3>
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-4">Omnichannel Value System</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Outcome verification & proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-channel tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive ROI reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Attribution modeling</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-green-300 dark:border-green-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Potential</div>
                <div className="text-2xl font-bold text-green-600">$15K-$100K/mo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Complete Ecosystem <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to build, grow, and optimize your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Store,
                title: 'Marketplace',
                description: 'Digital products store with ready-to-use templates, courses, and tools. Revenue sharing for creators.',
                color: 'blue'
              },
              {
                icon: BarChart3,
                title: 'VAR Intelligence',
                description: 'Visual analytics and reporting with real-time dashboards and predictive insights.',
                color: 'purple'
              },
              {
                icon: Bot,
                title: 'Agent as a Service',
                description: 'Pre-built and custom AI agents marketplace. Deploy intelligent automation instantly.',
                color: 'green'
              },
              {
                icon: Zap,
                title: 'AI Architecture',
                description: 'Strategic AI integration consulting and custom intelligent systems development.',
                color: 'yellow'
              },
              {
                icon: DollarSign,
                title: 'Payment Integration',
                description: 'Seamless DOKU payment gateway integration for all transactions.',
                color: 'red'
              },
              {
                icon: Users,
                title: 'Portfolio PM',
                description: 'Unified portfolio and marketplace for managing all your digital assets.',
                color: 'indigo'
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
                <div className={`bg-${feature.color}-100 dark:bg-${feature.color}-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Money Machine?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of entrepreneurs transforming their businesses with OASIS V4
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-blue-100 text-sm">
            No credit card required • 100% free infrastructure • Deploy in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-white">OASIS V4</span>
              </div>
              <p className="text-sm">
                Superintelligence Ecosystem Platform. The Proven Money Machine.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#trinity" className="hover:text-white transition">Trinity MOAT</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-white transition">API Reference</Link></li>
                <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 OASIS V4 Superintelligence Ecosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
