export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <header className="relative w-full flex flex-col bg-[url(/assets/images/banner-img.png)] bg-cover bg-center py-32 mt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto xl:px-[110px] md:px-20 px-5 relative z-[1]">
          <div className="w-full max-w-[642px] flex flex-col gap-4">
            <h1 className="w-full max-w-[640px] font-bold text-white xl:text-[64px] md:text-4xl text-3xl tracking-[0] xl:leading-[76.8px]">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Your privacy is important to us
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
              Welcome to iaccs.org.in. We value your trust and are committed to protecting your personal information. 
              This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website and use our services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By accessing or using this website, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">1</span>
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect only the information necessary to provide our services and verify your identity. This includes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Personal Identification Information:</strong>
                  <span className="text-gray-700"> Name, email address, phone number, and postal address.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Professional Information:</strong>
                  <span className="text-gray-700"> Medical registration details, clinic/hospital details, and professional qualifications (required for membership verification).</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Log Data:</strong>
                  <span className="text-gray-700"> IP address, browser type, and usage patterns.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">2</span>
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The data collected is used strictly for the following purposes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Identity Verification:</strong>
                  <span className="text-gray-700"> To confirm your status as a medical professional or member.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Communication:</strong>
                  <span className="text-gray-700"> To send membership confirmations, administrative updates, newsletters, and payment receipts.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Internal Record Keeping:</strong>
                  <span className="text-gray-700"> To maintain an accurate registry of our users and members.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Compliance:</strong>
                  <span className="text-gray-700"> To meet legal and regulatory obligations.</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-800 font-medium">
                We do not sell, trade, or rent your personal identification information to third parties.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">3</span>
              Payment Processing & Financial Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To process payments (e.g., membership fees, event registrations), we use secure, third-party payment gateway providers.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">No Storage of Sensitive Data</h3>
                    <p className="text-green-700">
                      We do not store your credit card numbers, CVVs, expiry dates, or internet banking passwords on our servers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Secure Infrastructure</h3>
                    <p className="text-green-700">
                      All payment transactions are processed through encrypted, PCI-DSS compliant infrastructure provided by our payment partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Third-Party Terms</h3>
                    <p className="text-gray-700">
                      Your payment is subject to the privacy policy and terms of the payment gateway provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">4</span>
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement robust technical and organizational security measures to protect against unauthorized access, 
              alteration, disclosure, or destruction of your personal data. This includes SSL encryption for data 
              transmission and secure server hosting.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">5</span>
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use &quot;cookies&quot; to enhance your browsing experience. Cookies help us understand user 
              behavior and save your preferences. You can set your browser to refuse cookies, but please note that 
              some parts of the site may not function properly as a result.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">6</span>
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to external sites (e.g., medical journals, partner organizations). 
              We do not control the privacy practices of these third-party sites and recommend you review their 
              policies separately.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">7</span>
              Grievance Officer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In accordance with the Information Technology Act 2000 and rules made thereunder, the name and contact 
              details of the Grievance Officer are provided below:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900 w-20">Name:</span>
                  <span className="text-gray-700">Bapan Sarkar</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900 w-20">Title:</span>
                  <span className="text-gray-700">Grievance Officer</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900 w-20">Address:</span>
                  <span className="text-gray-700">168, Mathkal, Nazrul Sarani, Dumdum Cantonment, Kolkata, 700065</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-900 w-20">Email:</span>
                  <a href="mailto:admin@iaccs.org.in" className="text-blue-600 hover:underline">admin@iaccs.org.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">8</span>
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. When updated, the &quot;Last Updated&quot; date 
              at the top of this page will be revised. We encourage you to review this page periodically.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">9</span>
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions regarding this policy or our data practices, please contact us at:
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
        </div>
      </section>
    </div>
  );
}
