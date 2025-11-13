'use client'

import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Kembali ke Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <FileText className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">Terms & Conditions</span>
          </div>
        </div>
      </nav>

      <main className="legal-content py-12">
        <h1>Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Last Updated:</strong> November 11, 2025
        </p>

        <section className="mb-8">
          <h2>1. Introduction</h2>
          <p>
            Welcome to OASIS V4 ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of 
            the OASIS V4 platform, including any content, functionality, and services offered on or through 
            the platform (collectively, the "Services").
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
            you must not access or use our Services.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. Definitions</h2>
          <ul>
            <li><strong>"Platform"</strong> refers to the OASIS V4 website, applications, and related services.</li>
            <li><strong>"User"</strong> or "you" refers to any person or entity that accesses or uses the Services.</li>
            <li><strong>"Content"</strong> refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials.</li>
            <li><strong>"Digital Assets"</strong> refers to any digital products available for purchase on the platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>3. Eligibility</h2>
          <p>
            To use our Services, you must:
          </p>
          <ul>
            <li>Be at least 18 years old or have parental/guardian consent</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Not be prohibited from using the Services under Indonesian law or any other applicable jurisdiction</li>
            <li>Provide accurate, current, and complete information during registration</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>4. Account Registration and Security</h2>
          <h3>4.1 Account Creation</h3>
          <p>
            You may need to create an account to access certain features. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Keep your account information up to date</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>

          <h3>4.2 Account Responsibility</h3>
          <p>
            You are solely responsible for all activities that occur under your account. We are not liable for any 
            loss or damage arising from your failure to maintain account security.
          </p>
        </section>

        <section className="mb-8">
          <h2>5. Payment Terms (Midtrans Integration)</h2>
          <h3>5.1 Payment Processing</h3>
          <p>
            All payments are processed through Midtrans, our trusted payment gateway partner. By making a purchase, 
            you agree to comply with Midtrans' terms and conditions.
          </p>

          <h3>5.2 Accepted Payment Methods</h3>
          <ul>
            <li><strong>E-Wallets:</strong> GoPay, DANA, OVO, ShopeePay</li>
            <li><strong>Virtual Account:</strong> BCA, Mandiri, BNI, BRI, Permata</li>
            <li><strong>QRIS:</strong> All QRIS-compatible apps</li>
            <li><strong>Credit/Debit Cards:</strong> Visa, Mastercard, JCB</li>
          </ul>

          <h3>5.3 Pricing and Fees</h3>
          <p>
            All prices are displayed in Indonesian Rupiah (IDR) and include applicable taxes unless stated otherwise. 
            Payment processing fees may apply depending on the payment method chosen.
          </p>

          <h3>5.4 Refund Policy</h3>
          <p>
            Digital products are generally non-refundable once purchased and delivered. However, refunds may be 
            granted in the following cases:
          </p>
          <ul>
            <li>Technical issues preventing access to purchased content</li>
            <li>Duplicate purchases made in error</li>
            <li>Content significantly differs from description</li>
          </ul>
          <p>
            Refund requests must be submitted within 7 days of purchase to{' '}
            <a href="mailto:elfaress2425@gmail.com">elfaress2425@gmail.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2>6. Intellectual Property Rights</h2>
          <h3>6.1 Ownership</h3>
          <p>
            All content, features, and functionality on the Platform, including but not limited to text, graphics, 
            logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive 
            property of OASIS V4 or its licensors.
          </p>

          <h3>6.2 License to Use</h3>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and 
            use the Services for personal, non-commercial purposes.
          </p>

          <h3>6.3 Digital Asset License</h3>
          <p>
            Upon purchase of a Digital Asset, you receive a license to use that asset in accordance with the 
            specific license terms provided with the asset. This typically includes:
          </p>
          <ul>
            <li>Personal or commercial use rights (as specified)</li>
            <li>Prohibition on resale or redistribution</li>
            <li>No transfer of copyright or ownership</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>7. Prohibited Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Use the Services for fraudulent purposes</li>
            <li>Upload or distribute malware, viruses, or harmful code</li>
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Engage in automated data collection (scraping, bots, etc.)</li>
            <li>Interfere with the proper functioning of the Services</li>
            <li>Impersonate any person or entity</li>
            <li>Share or resell purchased digital assets without authorization</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>8. Privacy and Data Protection</h2>
          <p>
            Your use of the Services is also governed by our{' '}
            <Link href="/legal/privacy" className="text-primary-600 hover:text-primary-700 underline">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR 
            A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that:
          </p>
          <ul>
            <li>The Services will be uninterrupted, secure, or error-free</li>
            <li>Defects will be corrected</li>
            <li>The Services are free from viruses or harmful components</li>
            <li>The results of using the Services will meet your requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OASIS V4 SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, 
            OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
          </p>
          <p>
            Our total liability shall not exceed the amount you paid to us in the twelve (12) months preceding 
            the claim, or IDR 1,000,000, whichever is greater.
          </p>
        </section>

        <section className="mb-8">
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless OASIS V4, its affiliates, officers, directors, 
            employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including 
            reasonable attorneys' fees) arising out of or relating to:
          </p>
          <ul>
            <li>Your use of the Services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your Content or conduct</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>12. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material changes by:
          </p>
          <ul>
            <li>Posting the updated Terms on the Platform</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an email notification (if you have an account)</li>
          </ul>
          <p>
            Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2>13. Termination</h2>
          <h3>13.1 By You</h3>
          <p>
            You may terminate your account at any time by contacting us at{' '}
            <a href="mailto:elfaress2425@gmail.com">elfaress2425@gmail.com</a>
          </p>

          <h3>13.2 By Us</h3>
          <p>
            We may suspend or terminate your access to the Services at any time, with or without notice, for:
          </p>
          <ul>
            <li>Violation of these Terms</li>
            <li>Fraudulent, illegal, or harmful activity</li>
            <li>Extended periods of inactivity</li>
            <li>Upon your request</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>14. Governing Law and Dispute Resolution</h2>
          <h3>14.1 Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia, 
            without regard to its conflict of law provisions.
          </p>

          <h3>14.2 Dispute Resolution</h3>
          <p>
            Any disputes arising out of or relating to these Terms or the Services shall be resolved through:
          </p>
          <ol>
            <li>Good faith negotiations between the parties</li>
            <li>Mediation, if negotiations fail</li>
            <li>Binding arbitration in Jakarta, Indonesia, if mediation fails</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2>15. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:elfaress2425@gmail.com">elfaress2425@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+6285712658316">+62 857-1265-8316</a></li>
            <li><strong>Address:</strong> Indonesia</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
            shall remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2>17. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and any other legal notices published by us on the 
            Services, constitute the entire agreement between you and OASIS V4 concerning your use of the Services.
          </p>
        </section>

        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Acknowledgment:</strong> By using OASIS V4, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
