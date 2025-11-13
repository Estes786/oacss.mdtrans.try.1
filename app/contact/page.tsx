'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">Hubungi kami untuk pertanyaan atau bantuan</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:elfaress2425@gmail.com" className="text-blue-600 hover:underline">
                elfaress2425@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Phone className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
              <a href="tel:+6285712658316" className="text-blue-600 hover:underline">
                +62 857-1265-8316
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lokasi</h3>
              <p className="text-gray-600">Indonesia</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nama lengkap Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
