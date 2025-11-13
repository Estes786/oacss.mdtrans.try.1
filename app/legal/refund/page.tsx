"use client"

import Link from "next/link"
import Footer from "@/components/layout/Footer"
import { ArrowLeft, DollarSign, AlertCircle } from "lucide-react"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Kembali ke Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <DollarSign className="text-primary-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">Refund Policy</span>
          </div>
        </div>
      </nav>

      <main className="legal-content py-12">
        <h1>Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Last Updated:</strong> November 12, 2025
        </p>

        <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
          <div className="flex items-start space-x-3">
            <DollarSign className="text-green-600 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">7-Day Money-Back Guarantee</h3>
              <p className="text-green-800">
                We stand behind our service quality. If you're not satisfied within the first 7 days of your
                subscription, we'll provide a full refund - no questions asked.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2>1. Eligibility for Refunds</h2>

          <h3>1.1 Eligible Refund Requests</h3>
          <p>You may request a refund if:</p>
          <ul>
            <li>
              <strong>Within 7 Days:</strong> You request a refund within 7 days of your initial subscription purchase
            </li>
            <li>
              <strong>Service Unavailability:</strong> Our service was unavailable for more than 24 consecutive hours
            </li>
            <li>
              <strong>Technical Issues:</strong> Persistent technical problems that prevent you from using core
              features, and we were unable to resolve them within a reasonable timeframe
            </li>
            <li>
              <strong>Billing Errors:</strong> You were charged incorrectly or accidentally charged multiple times
            </li>
            <li>
              <strong>Unauthorized Charges:</strong> Your account was charged without your authorization
            </li>
            <li>
              <strong>Service Not as Described:</strong> The service significantly differs from what was advertised
            </li>
          </ul>

          <h3>1.2 Non-Eligible Refund Requests</h3>
          <p>Refunds will NOT be granted for:</p>
          <ul>
            <li>Requests made more than 7 days after purchase (except for specific exceptions listed above)</li>
            <li>Change of mind after the 7-day guarantee period</li>
            <li>Violation of our Terms of Service</li>
            <li>Subscription renewal charges (you must cancel before renewal date)</li>
            <li>Unused API quota or storage (non-transferable)</li>
            <li>User error or misunderstanding of service features</li>
            <li>Third-party service failures beyond our control</li>
            <li>Dissatisfaction with specific AI-generated content results (as quality varies)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>2. Refund Types</h2>

          <h3>2.1 Full Refund</h3>
          <p>100% of the payment amount will be refunded if:</p>
          <ul>
            <li>Request is made within 7 days of initial purchase</li>
            <li>Service was unavailable for extended period &gt;24 hours</li>
            <li>Billing error or unauthorized charge confirmed</li>
            <li>Service critically fails to meet advertised functionality</li>
          </ul>

          <h3>2.2 Prorated Refund</h3>
          <p>For annual subscriptions, prorated refunds may be available:</p>
          <ul>
            <li>
              <strong>Calculation:</strong> (Remaining months / 12) × Annual subscription amount
            </li>
            <li>
              <strong>Minimum:</strong> At least 3 months must remain in subscription
            </li>
            <li>
              <strong>Exclusions:</strong> Promotional discounts are non-refundable
            </li>
          </ul>
          <p>
            <strong>Example:</strong> If you paid Rp 30,000,000 for annual Enterprise plan and cancel after 6 months,
            you'll receive: (6/12) × Rp 30,000,000 = Rp 15,000,000
          </p>

          <h3>2.3 Service Credits</h3>
          <p>Instead of monetary refund, we may offer service credits for:</p>
          <ul>
            <li>Minor service disruptions</li>
            <li>Performance issues that don't meet SLA</li>
            <li>Customer satisfaction adjustments</li>
          </ul>
          <p>Service credits can be applied to future invoices and have no expiration date.</p>
        </section>

        <section className="mb-8">
          <h2>3. How to Request a Refund</h2>

          <h3>Step 1: Contact Us</h3>
          <p>
            Email us at{" "}
            <a href="mailto:elfaress2425@gmail.com" className="text-blue-600 hover:underline">
              elfaress2425@gmail.com
            </a>{" "}
            with:
          </p>
          <ul>
            <li>
              <strong>Subject:</strong> "Refund Request - [Your Order ID]"
            </li>
            <li>
              <strong>Your full name</strong> as registered on account
            </li>
            <li>
              <strong>Email address</strong> associated with account
            </li>
            <li>
              <strong>Order ID</strong> (found in transaction confirmation email)
            </li>
            <li>
              <strong>Reason for refund</strong> with specific details
            </li>
            <li>
              <strong>Payment proof</strong> (receipt or transaction screenshot)
            </li>
          </ul>

          <h3>Step 2: Verification</h3>
          <p>Our team will:</p>
          <ul>
            <li>Verify your account and transaction details (1-2 business days)</li>
            <li>Review your usage history and support tickets</li>
            <li>Assess refund eligibility based on this policy</li>
            <li>May request additional information if needed</li>
          </ul>

          <h3>Step 3: Decision</h3>
          <p>You will receive a response within 48 hours with either:</p>
          <ul>
            <li>
              <strong>Approval:</strong> Refund amount and processing timeline
            </li>
            <li>
              <strong>Denial:</strong> Reason for denial and alternative solutions
            </li>
            <li>
              <strong>Partial Approval:</strong> Modified refund amount with explanation
            </li>
          </ul>

          <h3>Step 4: Processing</h3>
          <p>If approved, refund will be processed within:</p>
          <ul>
            <li>
              <strong>Bank Transfer / VA:</strong> 5-10 business days to original account
            </li>
            <li>
              <strong>E-Wallet (GoPay, Dana, OVO):</strong> 3-7 business days
            </li>
            <li>
              <strong>Credit Card:</strong> 10-14 business days (depends on bank)
            </li>
            <li>
              <strong>QRIS:</strong> 5-10 business days to linked account
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>4. Special Refund Scenarios</h2>

          <h3>4.1 Subscription Cancellation</h3>
          <p>
            <strong>Important:</strong> Cancelling your subscription does not automatically trigger a refund.
          </p>
          <ul>
            <li>Monthly subscriptions: No refund for current billing period; service continues until period ends</li>
            <li>Annual subscriptions: May be eligible for prorated refund (see section 2.2)</li>
            <li>Trial period: Cancel before trial ends to avoid charges (no refund needed)</li>
          </ul>

          <h3>4.2 Service Downgrade</h3>
          <p>If you downgrade from a higher tier:</p>
          <ul>
            <li>
              <strong>Monthly:</strong> Downgrade takes effect on next billing cycle (no refund for current period)
            </li>
            <li>
              <strong>Annual:</strong> Prorated credit applied to next invoice or refunded upon request
            </li>
          </ul>

          <h3>4.3 Account Suspension/Termination</h3>
          <p>If we suspend or terminate your account due to Terms of Service violations:</p>
          <ul>
            <li>No refunds will be provided</li>
            <li>Any unused credits or balances are forfeited</li>
            <li>Appeal process is available (contact support)</li>
          </ul>

          <h3>4.4 Force Majeure</h3>
          <p>In cases of events beyond our control (natural disasters, government actions, etc.):</p>
          <ul>
            <li>Service disruptions may occur without refund eligibility</li>
            <li>Service credits may be offered as compensation</li>
            <li>Extended service period may be provided</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>5. Payment Method-Specific Policies</h2>

          <h3>5.1 Midtrans Payment Gateway</h3>
          <p>All refunds are processed through Midtrans, our payment gateway partner:</p>
          <ul>
            <li>Refunds return to the original payment method used</li>
            <li>Midtrans processing fees may apply (non-refundable)</li>
            <li>Timeline depends on payment method and bank</li>
            <li>Status updates available via Midtrans notification</li>
          </ul>

          <h3>5.2 Refund Limitations by Payment Type</h3>
          <ul>
            <li>
              <strong>Bank Transfer / VA:</strong> Fully refundable
            </li>
            <li>
              <strong>E-Wallets:</strong> Fully refundable to wallet balance
            </li>
            <li>
              <strong>Credit/Debit Card:</strong> Fully refundable (subject to bank processing)
            </li>
            <li>
              <strong>QRIS:</strong> Refunded to linked account
            </li>
          </ul>

          <h3>5.3 Currency and Conversion</h3>
          <p>All transactions and refunds are in Indonesian Rupiah (IDR). For international payments:</p>
          <ul>
            <li>Exchange rates fluctuate; refund may differ slightly from original charge</li>
            <li>Currency conversion fees are non-refundable</li>
            <li>International transaction fees by your bank are non-refundable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>6. Refund Timeline & Process</h2>

          <table className="min-w-full divide-y divide-gray-200 border rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Request Received</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Day 0</td>
                <td className="px-6 py-4 text-sm text-gray-500">You submit refund request via email</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Verification</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2 days</td>
                <td className="px-6 py-4 text-sm text-gray-500">We verify your account and transaction details</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Decision</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">48 hours</td>
                <td className="px-6 py-4 text-sm text-gray-500">You receive approval or denial notification</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Processing</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-14 days</td>
                <td className="px-6 py-4 text-sm text-gray-500">Refund initiated and processed by Midtrans</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Completion</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Varies</td>
                <td className="px-6 py-4 text-sm text-gray-500">Funds appear in your account (bank-dependent)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2>7. Dispute Resolution</h2>

          <h3>7.1 If Refund Request is Denied</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Request a detailed explanation of the denial</li>
            <li>Provide additional evidence or information</li>
            <li>Request a secondary review by management</li>
            <li>File a formal complaint (see process below)</li>
          </ul>

          <h3>7.2 Complaint Process</h3>
          <ol>
            <li>
              <strong>Initial Contact:</strong> Email elfaress2425@gmail.com with "Complaint - Refund Denied"
            </li>
            <li>
              <strong>Management Review:</strong> Your case will be escalated to senior management
            </li>
            <li>
              <strong>Response:</strong> You'll receive a response within 7 business days
            </li>
            <li>
              <strong>Resolution:</strong> Final decision will be made and communicated
            </li>
          </ol>

          <h3>7.3 External Mediation</h3>
          <p>If dispute cannot be resolved internally:</p>
          <ul>
            <li>You may contact consumer protection agencies in Indonesia</li>
            <li>Mediation through Badan Penyelesaian Sengketa Konsumen (BPSK)</li>
            <li>Legal recourse as outlined in our Terms and Conditions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>8. Policy Updates</h2>
          <p>We may update this Refund Policy from time to time. Changes will be communicated via:</p>
          <ul>
            <li>Email notification to all active users</li>
            <li>Notice on our website</li>
            <li>Updated "Last Updated" date at the top of this page</li>
          </ul>
          <p>
            Significant changes will take effect 30 days after notification. Your continued use of our services after
            changes become effective constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="mb-8">
          <h2>9. Contact Information</h2>
          <p>For refund requests, questions, or disputes:</p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:elfaress2425@gmail.com" className="text-blue-600 hover:underline">
                elfaress2425@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+6285712658316" className="text-blue-600 hover:underline">
                +62 857-1265-8316
              </a>
            </li>
            <li>
              <strong>Business Hours:</strong> Monday - Friday, 09:00 - 18:00 WIB
            </li>
            <li>
              <strong>Response Time:</strong> Within 48 hours
            </li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-blue-600 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Fair and Transparent</h3>
              <p className="text-blue-800">
                Our refund policy is designed to be fair and transparent. We value customer satisfaction and will work
                with you to resolve any issues. If you have questions about refund eligibility, don't hesitate to
                contact us before requesting a refund.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-700">Money-Back Guarantee:</p>
              <p className="text-gray-600">7 days from purchase</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Response Time:</p>
              <p className="text-gray-600">48 hours</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Processing Time:</p>
              <p className="text-gray-600">5-14 business days</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Contact Email:</p>
              <p className="text-gray-600">elfaress2425@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

