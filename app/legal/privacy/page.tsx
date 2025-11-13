'use client'

import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Kembali ke Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Shield className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">Privacy Policy</span>
          </div>
        </div>
      </nav>

      <main className="legal-content py-12">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Last Updated:</strong> November 11, 2025
        </p>

        <section className="mb-8">
          <h2>1. Introduction</h2>
          <p>
            OASIS V4 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we 
            collect, use, disclose, and safeguard your information when you use our platform and services.
          </p>
          <p>
            By using OASIS V4, you consent to the data practices described in this policy. If you do not agree with 
            this policy, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, phone number, password</li>
            <li><strong>Profile Information:</strong> Company name, website, bio, avatar</li>
            <li><strong>Payment Information:</strong> Billing details (processed securely through Midtrans)</li>
            <li><strong>Communications:</strong> Messages, feedback, support requests</li>
            <li><strong>Content:</strong> Any content you create, upload, or share on the platform</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, features used, click patterns</li>
            <li><strong>Location Data:</strong> General geographic location based on IP address</li>
            <li><strong>Cookies and Tracking:</strong> Session data, preferences, analytics (see Cookie Policy below)</li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <ul>
            <li><strong>Authentication Providers:</strong> Google, Facebook (if you use social login)</li>
            <li><strong>Payment Processors:</strong> Midtrans transaction data</li>
            <li><strong>Analytics Services:</strong> Aggregated usage statistics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          
          <h3>3.1 Service Provision</h3>
          <ul>
            <li>Creating and managing your account</li>
            <li>Processing transactions and delivering digital products</li>
            <li>Providing customer support</li>
            <li>Personalizing your experience</li>
          </ul>

          <h3>3.2 Communication</h3>
          <ul>
            <li>Sending transactional emails (order confirmations, receipts)</li>
            <li>Responding to inquiries and support requests</li>
            <li>Sending service updates and announcements</li>
            <li>Marketing communications (with your consent)</li>
          </ul>

          <h3>3.3 Analytics and Improvement</h3>
          <ul>
            <li>Analyzing usage patterns to improve our services</li>
            <li>Conducting research and development</li>
            <li>Monitoring and analyzing trends</li>
            <li>Testing new features</li>
          </ul>

          <h3>3.4 Security and Fraud Prevention</h3>
          <ul>
            <li>Detecting and preventing fraudulent activities</li>
            <li>Protecting against security threats</li>
            <li>Enforcing our Terms and Conditions</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          
          <h3>4.1 Service Providers</h3>
          <ul>
            <li><strong>Payment Processing:</strong> Midtrans (for payment transactions)</li>
            <li><strong>Hosting:</strong> Supabase (database and authentication)</li>
            <li><strong>Analytics:</strong> Google Analytics (anonymized data)</li>
            <li><strong>Email Services:</strong> Transactional email providers</li>
          </ul>

          <h3>4.2 Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to:</p>
          <ul>
            <li>Court orders or legal processes</li>
            <li>Government or regulatory requests</li>
            <li>Protection of rights, property, or safety</li>
            <li>Enforcement of our policies</li>
          </ul>

          <h3>4.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be transferred to 
            the acquiring entity. We will notify you of any such change.
          </p>

          <h3>4.4 With Your Consent</h3>
          <p>
            We may share your information with third parties when you explicitly consent to such sharing.
          </p>
        </section>

        <section className="mb-8">
          <h2>5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul>
            <li><strong>Encryption:</strong> SSL/TLS encryption for data in transit</li>
            <li><strong>Access Controls:</strong> Role-based access to personal data</li>
            <li><strong>Secure Storage:</strong> Encrypted databases with Supabase</li>
            <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
            <li><strong>Payment Security:</strong> PCI-DSS compliant payment processing via Midtrans</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure. While we strive to protect 
            your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2>6. Your Rights and Choices</h2>
          
          <h3>6.1 Access and Update</h3>
          <p>
            You can access and update your account information at any time through your account settings.
          </p>

          <h3>6.2 Data Portability</h3>
          <p>
            You have the right to request a copy of your personal data in a structured, machine-readable format.
          </p>

          <h3>6.3 Deletion</h3>
          <p>
            You can request deletion of your account and personal data by contacting us at{' '}
            <a href="mailto:elfaress2425@gmail.com">elfaress2425@gmail.com</a>. 
            Please note that some information may be retained for legal or operational purposes.
          </p>

          <h3>6.4 Marketing Communications</h3>
          <p>
            You can opt out of marketing emails by clicking the "unsubscribe" link in any marketing email 
            or by updating your communication preferences in your account settings.
          </p>

          <h3>6.5 Cookies</h3>
          <p>
            You can control cookies through your browser settings. However, disabling cookies may limit 
            your ability to use certain features.
          </p>
        </section>

        <section className="mb-8">
          <h2>7. Cookie Policy</h2>
          <p>We use cookies and similar tracking technologies for:</p>
          
          <h3>7.1 Essential Cookies</h3>
          <ul>
            <li>Authentication and security</li>
            <li>Session management</li>
            <li>Load balancing</li>
          </ul>

          <h3>7.2 Analytics Cookies</h3>
          <ul>
            <li>Understanding how visitors use our site</li>
            <li>Measuring effectiveness of features</li>
            <li>Identifying technical issues</li>
          </ul>

          <h3>7.3 Preference Cookies</h3>
          <ul>
            <li>Remembering your settings and preferences</li>
            <li>Language selection</li>
            <li>Theme preferences</li>
          </ul>

          <h3>7.4 Marketing Cookies</h3>
          <ul>
            <li>Delivering relevant advertisements (with consent)</li>
            <li>Measuring campaign effectiveness</li>
            <li>Personalizing content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>8. Data Retention</h2>
          <p>We retain your information for as long as necessary to:</p>
          <ul>
            <li>Provide our services</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
          </ul>
          <p>
            Account information is retained until you request deletion. Transaction records are retained 
            for 7 years as required by Indonesian tax law.
          </p>
        </section>

        <section className="mb-8">
          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 18 years of age. We do not knowingly collect 
            personal information from children. If we become aware that we have collected information from 
            a child, we will take steps to delete such information promptly.
          </p>
          <p>
            If you believe we have collected information from a child, please contact us at{' '}
            <a href="mailto:elfaress2425@gmail.com">elfaress2425@gmail.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than Indonesia. 
            These countries may have different data protection laws. By using our services, you consent 
            to such transfers.
          </p>
          <p>
            We ensure appropriate safeguards are in place, such as:
          </p>
          <ul>
            <li>Standard contractual clauses</li>
            <li>Data processing agreements</li>
            <li>Compliance with applicable data protection laws</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>11. Third-Party Services</h2>
          <p>
            Our platform may contain links to third-party websites or services. We are not responsible for 
            the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>
          
          <h3>Key Third-Party Services:</h3>
          <ul>
            <li><strong>Midtrans:</strong> Payment processing - See{' '}
              <a href="https://midtrans.com/privacy" target="_blank" rel="noopener noreferrer">
                Midtrans Privacy Policy
              </a>
            </li>
            <li><strong>Supabase:</strong> Database and authentication - See{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
                Supabase Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>12. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by:
          </p>
          <ul>
            <li>Posting the updated policy on our platform</li>
            <li>Updating the "Last Updated" date</li>
            <li>Sending an email notification (for significant changes)</li>
          </ul>
          <p>
            Your continued use of our services after changes become effective constitutes acceptance of 
            the revised Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2>13. Contact Information</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, 
            please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:elfaress2425@gmail.com">elfaress2425@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+6285712658316">+62 857-1265-8316</a></li>
            <li><strong>Address:</strong> Indonesia</li>
          </ul>
          <p>
            We will respond to your inquiry within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2>14. Compliance with Indonesian Law</h2>
          <p>
            This Privacy Policy is designed to comply with:
          </p>
          <ul>
            <li>Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE)</li>
            <li>Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik</li>
            <li>Peraturan Menteri Komunikasi dan Informatika terkait perlindungan data pribadi</li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your privacy. 
            If you have any concerns, please don't hesitate to contact us.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
