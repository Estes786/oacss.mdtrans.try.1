'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Store, Star, ShoppingCart } from 'lucide-react'

export default function MarketplacePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const products = [
    {
      id: '1',
      name: 'Digital Marketing Masterclass',
      description: 'Complete 40-hour course covering SEO, SEM, Social Media, Email Marketing',
      price: 500000,
      rating: 4.8,
      reviews: 234,
      image: '📚',
      category: 'Course',
    },
    {
      id: '2',
      name: 'Premium E-Book Bundle',
      description: '10 bestselling e-books about business growth and digital transformation',
      price: 150000,
      rating: 4.9,
      reviews: 567,
      image: '📖',
      category: 'E-Book',
    },
    {
      id: '3',
      name: 'Website Template Pro',
      description: 'Professional responsive website template for startups and SMEs',
      price: 300000,
      rating: 4.7,
      reviews: 123,
      image: '🎨',
      category: 'Template',
    },
    {
      id: '4',
      name: 'SaaS Starter Kit',
      description: 'Complete boilerplate for building SaaS applications with Next.js',
      price: 750000,
      rating: 4.9,
      reviews: 89,
      image: '💻',
      category: 'Software',
    },
    {
      id: '5',
      name: 'Instagram Growth Guide',
      description: 'Step-by-step guide to grow Instagram followers organically',
      price: 99000,
      rating: 4.6,
      reviews: 891,
      image: '📱',
      category: 'Guide',
    },
    {
      id: '6',
      name: 'Business Plan Templates',
      description: 'Professional business plan templates for various industries',
      price: 199000,
      rating: 4.7,
      reviews: 345,
      image: '📊',
      category: 'Template',
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
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
            <Store className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">Marketplace</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
          <p className="text-gray-600">Discover premium digital products to accelerate your business</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="card group hover:shadow-xl transition-all">
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
                >
                  <ShoppingCart size={18} />
                  <span>Beli</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Checkout</h2>
              
              <div className="mb-6">
                <div className="text-5xl mb-3 text-center">{selectedProduct.image}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{selectedProduct.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-4">
                  {formatPrice(selectedProduct.price)}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Metode Pembayaran:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border-2 border-gray-300 rounded-lg p-3 hover:border-primary-600 transition-colors text-center">
                    💚 GoPay
                  </button>
                  <button className="border-2 border-gray-300 rounded-lg p-3 hover:border-primary-600 transition-colors text-center">
                    💙 DANA
                  </button>
                  <button className="border-2 border-gray-300 rounded-lg p-3 hover:border-primary-600 transition-colors text-center">
                    💜 OVO
                  </button>
                  <button className="border-2 border-gray-300 rounded-lg p-3 hover:border-primary-600 transition-colors text-center">
                    🧡 ShopeePay
                  </button>
                  <button className="border-2 border-gray-300 rounded-lg p-3 hover:border-primary-600 transition-colors text-center">
                    🏦 VA Bank
                  </button>
                  <button className="border-2 border-gray-300 rounded-lg p-3 hover:border-primary-600 transition-colors text-center">
                    💳 Card
                  </button>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={() => alert('Payment integration coming soon!')}
                  className="flex-1 bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kenapa Belanja di OASIS V4?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">PCI-DSS compliant via Midtrans</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📥</div>
              <h3 className="font-semibold text-gray-900 mb-1">Instant Download</h3>
              <p className="text-sm text-gray-600">Akses langsung setelah pembayaran</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600">Customer support siap membantu</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
