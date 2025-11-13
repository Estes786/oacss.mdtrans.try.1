'use client'

import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { Check, X, Zap, Rocket, Award, Star } from 'lucide-react'

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '299,000',
      priceAnnual: '3,050,100',
      description: 'Perfect for freelancers and solopreneurs starting their digital business',
      icon: Zap,
      color: 'blue',
      features: [
        { name: 'AI-powered content generator', included: true },
        { name: '10 professional templates/month', included: true },
        { name: 'Basic analytics dashboard', included: true },
        { name: 'Email automation (500/month)', included: true },
        { name: 'Social media scheduler (5 posts/day)', included: true },
        { name: 'Basic CRM tools', included: true },
        { name: '10 active projects', included: true },
        { name: '5,000 API requests/month', included: true },
        { name: '2GB storage', included: true },
        { name: 'Email support (48h response)', included: true },
        { name: 'Knowledge base access', included: true },
        { name: 'Community forum', included: true },
        { name: 'Priority support', included: false },
        { name: 'Live chat', included: false },
        { name: 'Dedicated account manager', included: false },
      ],
      limits: {
        projects: 10,
        api: '5,000',
        storage: '2GB'
      }
    },
    {
      name: 'Professional',
      price: '999,000',
      priceAnnual: '10,189,800',
      description: 'Ideal for growing businesses and agencies needing advanced tools',
      icon: Rocket,
      color: 'green',
      popular: true,
      features: [
        { name: 'Everything in Starter, plus:', included: true },
        { name: 'Advanced multi-language AI', included: true },
        { name: 'Unlimited professional templates', included: true },
        { name: 'Advanced analytics & reporting', included: true },
        { name: 'Marketing campaign automation', included: true },
        { name: 'Customer journey mapping', included: true },
        { name: 'A/B testing tools', included: true },
        { name: 'Zapier integration', included: true },
        { name: 'Webhook support', included: true },
        { name: '50 active projects', included: true },
        { name: '50,000 API requests/month', included: true },
        { name: '20GB storage', included: true },
        { name: 'Priority email (24h response)', included: true },
        { name: 'Live chat support', included: true },
        { name: 'Monthly strategy call (1h)', included: true },
        { name: 'Dedicated account manager', included: false },
      ],
      limits: {
        projects: 50,
        api: '50,000',
        storage: '20GB'
      }
    },
    {
      name: 'Enterprise',
      price: '2,999,000',
      priceAnnual: '30,589,800',
      description: 'For large organizations requiring custom solutions and dedicated support',
      icon: Award,
      color: 'purple',
      features: [
        { name: 'Everything in Professional, plus:', included: true },
        { name: 'Custom AI model training', included: true },
        { name: 'White-label solutions', included: true },
        { name: 'Dedicated infrastructure', included: true },
        { name: 'Predictive analytics', included: true },
        { name: 'Custom reporting', included: true },
        { name: 'Business intelligence dashboard', included: true },
        { name: 'SOC 2 compliance assistance', included: true },
        { name: 'GDPR compliance tools', included: true },
        { name: 'Unlimited projects', included: true },
        { name: '500,000 API requests/month', included: true },
        { name: '200GB storage', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: '24/7 phone support', included: true },
        { name: 'Weekly strategy sessions', included: true },
        { name: 'Custom team training', included: true },
      ],
      limits: {
        projects: 'Unlimited',
        api: '500,000',
        storage: '200GB'
      }
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="text-primary-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">OASIS V4</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Dashboard
            </Link>
            <Link href="/legal/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Star size={20} />
            <span className="font-semibold">Transparent Pricing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Plan</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className="text-gray-700 font-medium">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-gray-700 font-medium">Annual <span className="text-green-600 text-sm">(Save 15%)</span></span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                tier.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
              } hover:shadow-2xl transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${tier.color}-100 flex items-center justify-center`}>
                  <tier.icon className={`text-${tier.color}-600`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900">
                    Rp {tier.price}
                    <span className="text-lg text-gray-600 font-normal">/month</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    or Rp {tier.priceAnnual}/year
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      ) : (
                        <X className="text-gray-400 flex-shrink-0 mt-0.5" size={20} />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Usage Limits:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Projects:</strong> {tier.limits.projects}</p>
                    <p><strong>API Requests:</strong> {tier.limits.api}/month</p>
                    <p><strong>Storage:</strong> {tier.limits.storage}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major payment methods through Midtrans: GoPay, DANA, OVO, ShopeePay, 
                bank transfers (BCA, Mandiri, BNI, BRI), QRIS, and credit/debit cards (Visa, Mastercard).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes! You can cancel your subscription at any time. Your service will continue until the end 
                of your current billing period. We also offer a 7-day money-back guarantee for new subscribers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What's the refund policy?</h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee. If you're not satisfied within the first 7 days, 
                we'll provide a full refund. See our <Link href="/legal/refund" className="text-blue-600 hover:underline">Refund Policy</Link> for details.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade at any time. Upgrades take effect immediately with 
                prorated billing. Downgrades take effect at the next billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">
                Yes! All plans include a 14-day free trial. No credit card required to start. You can 
                explore all features before committing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">What happens if I exceed my limits?</h3>
              <p className="text-gray-600">
                You'll receive notifications when approaching limits. For API requests, you can purchase 
                add-ons or upgrade your plan. Storage and projects will be soft-capped with upgrade prompts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-gray-600">
                Yes! For large organizations with specific needs, we offer custom enterprise solutions with 
                tailored pricing. Contact us at <a href="mailto:elfaress2425@gmail.com" className="text-blue-600 hover:underline">elfaress2425@gmail.com</a> to discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <Link
              href="/legal/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
