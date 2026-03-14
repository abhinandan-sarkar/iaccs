export default function RefundPolicy() {
  return (
    <div className="bg-white">
      <header className="relative w-full flex flex-col bg-[url(/assets/images/banner-img.png)] bg-cover bg-center py-32 mt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto xl:px-[110px] md:px-20 px-5 relative z-[1]">
          <div className="w-full max-w-[642px] flex flex-col gap-4">
            <h1 className="w-full max-w-[640px] font-bold text-white xl:text-[64px] md:text-4xl text-3xl tracking-[0] xl:leading-[76.8px]">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-white/90">
              Our policy regarding cancellations and refunds
            </p>
          </div>
        </div>
      </header>

      <section className="w-full bg-white py-16 xl:px-[110px] md:px-20 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-gray-500 text-sm">
              <strong>Last Updated:</strong> January 7, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-700 leading-relaxed">
              At Association for Critical Care Sciences (ACCS), we value our members and strive to provide the best 
              professional support. Please read our policy regarding cancellations and refunds below:
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">1</span>
              Membership Fees
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-5 border border-red-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">Non-Refundable</h3>
                    <p className="text-red-700">
                      All membership fees (Student or Professional) are <strong>non-refundable</strong> once the payment 
                      is successful and the membership has been activated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-5 border border-green-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Application Rejection</h3>
                    <p className="text-green-700">
                      In the rare event that a membership application is rejected by the ACCS committee due to eligibility 
                      issues, a <strong>full refund</strong> will be processed to the original payment source within 
                      <strong> 7-10 working days</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">2</span>
              Event/Workshop Registrations
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-lg p-5 border border-yellow-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-1">7-Day Cancellation Window</h3>
                    <p className="text-yellow-700">
                      For specific events or workshops, cancellation requests must be sent to{" "}
                      <a href="mailto:admin@iaccs.org.in" className="text-yellow-800 underline font-medium">
                        admin@iaccs.org.in
                      </a>{" "}
                      at least <strong>7 days prior</strong> to the event date to be eligible for a refund (minus processing fees).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">No Refunds</h3>
                    <p className="text-red-700">
                      No refunds will be provided for cancellations made <strong>less than 7 days</strong> before an 
                      event or for <strong>&quot;no-shows&quot;</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">3</span>
              Duplicate Payments
            </h2>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Technical Errors</h3>
                  <p className="text-blue-700">
                    In case of technical errors resulting in duplicate payments for the same service, the extra amount 
                    will be <strong>refunded to the original payment method</strong> after verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">4</span>
              Refund Process
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Original Payment Method</h3>
                    <p className="text-gray-700">
                      All eligible refunds will be credited back to the <strong>original mode of payment</strong> (Credit Card, 
                      Debit Card, Net Banking, or UPI) used at the time of transaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Processing Time</h3>
                    <p className="text-gray-700">
                      The refund typically takes <strong>5 to 7 business days</strong> to reflect in your account, depending 
                      on your bank&apos;s processing time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">5</span>
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For any issues related to payments or refunds, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:admin@iaccs.org.in" className="text-blue-600 hover:underline">
                      admin@iaccs.org.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">
                      168, Mathkal, Nazrul Sarani, Dumdum Cantonment, Kolkata, 700065
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-3">Quick Summary</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Membership fees are non-refundable after activation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Full refund for rejected applications (7-10 working days)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Event cancellations: 7 days prior notice required
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Duplicate payments will be refunded after verification
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Refunds processed in 5-7 business days
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

