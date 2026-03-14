export default function TermsConditions() {
  return (
    <div className="bg-white">
      <header className="relative w-full flex flex-col bg-[url(/assets/images/banner-img.png)] bg-cover bg-center py-32 mt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto xl:px-[110px] md:px-20 px-5 relative z-[1]">
          <div className="w-full max-w-[642px] flex flex-col gap-4">
            <h1 className="w-full max-w-[640px] font-bold text-white xl:text-[64px] md:text-4xl text-3xl tracking-[0] xl:leading-[76.8px]">
              Terms & Conditions
            </h1>
            <p className="text-lg text-white/90">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </header>

      <section className="w-full bg-white py-16 xl:px-[110px] md:px-20 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-gray-500 text-sm">
              <strong>Last Updated:</strong> January 8, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-700 leading-relaxed">
              <strong>Welcome to our website.</strong>
              <br />
              <br />
              This website is owned and operated by{" "}
              <strong>BAPAN SARKAR</strong>. By accessing or using this website,
              you agree to be bound by the terms and conditions set forth below.
              <br />
              <br />
              <strong>Contact Information</strong>
              <br />
              <br />
              For the purpose of these Terms and Conditions, as well as for any
              grievances or inquiries regarding our services, please find our
              official contact details below:
              <br />
              <br />
              <strong>Operator/Owner Name:</strong> Bapan Sarkar
              <br />
              <strong>Business Address:</strong> 168, Mathkal, Nazrul Sarani,
              Dumdum Cantonment, Kolkata, West Bengal - 700065
              <br />
              <strong>Official Email:</strong> admin@iaccs.org.in
              <br />
              <strong>Contact Number:</strong> +91 8918505434
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                1
              </span>
              Definitions
            </h2>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">
                    &quot;ACCS&quot; / &quot;We&quot; / &quot;Us&quot;
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    refers to the Association for Critical Care Sciences.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">
                    &quot;User&quot; / &quot;You&quot; / &quot;Member&quot;
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    refers to any individual accessing the site or applying for
                    membership.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">
                    &quot;Services&quot;
                  </strong>
                  <span className="text-gray-700">
                    {" "}
                    refers to membership, educational resources, events, and
                    related activities provided by ACCS.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                2
              </span>
              Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To be eligible for membership, you must:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  Be a student or professional in Critical Care Sciences, ICU,
                  Emergency Medicine, or related clinical fields.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  Provide accurate and truthful information during registration.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  Be at least 18 years of age.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                3
              </span>
              Membership & Fees
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
                <p className="text-gray-700">
                  Membership is divided into <strong>Student (₹50/year)</strong>{" "}
                  and <strong>Professional (₹100/year)</strong> categories.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-700">
                  Membership is valid for one year from the date of approval and
                  must be renewed annually.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Service Delivery
                </h3>
                <p className="text-gray-700">
                  Upon successful payment, membership confirmation and access to
                  digital resources will be processed within 24 to 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                4
              </span>
              Payment Terms
            </h2>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Secure Processing:</strong>
                  <span className="text-gray-700">
                    {" "}
                    Payments are processed through secure third-party payment
                    gateways. We do not store your credit/debit card details or
                    net banking credentials.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Currency:</strong>
                  <span className="text-gray-700">
                    {" "}
                    All transactions are processed in Indian Rupees (INR).
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-900">Payment Failure:</strong>
                  <span className="text-gray-700">
                    {" "}
                    In case of a technical error resulting in a double deduction
                    or payment failure where the service is not rendered, please
                    contact us within 7 days for resolution.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                5
              </span>
              Refund & Cancellation Policy
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h3 className="font-semibold text-red-800 mb-2">
                  Membership Fees
                </h3>
                <p className="text-red-700">
                  All membership fees are <strong>non-refundable</strong> once
                  the application has been processed and membership has been
                  activated.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Cancellations
                </h3>
                <p className="text-yellow-700">
                  Users may choose not to renew their membership at the end of
                  the term. No mid-term cancellations with partial refunds are
                  permitted.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                6
              </span>
              User Responsibilities & Conduct
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  Provide accurate information.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  Maintain professional ethics and respect patient
                  confidentiality in all ACCS-related forums.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  Not attempt to gain unauthorized access to any part of the
                  website or its servers.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                7
              </span>
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content, including logos, text, and educational materials, is
              the exclusive property of ACCS. Unauthorized reproduction or
              distribution is strictly prohibited.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                8
              </span>
              Indemnity
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless ACCS and its
              officers from any claims, damages, or expenses (including legal
              fees) arising from your use of the website, your violation of
              these terms, or your infringement of any third-party rights.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                9
              </span>
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, ACCS shall not be liable
              for any indirect, incidental, or consequential damages arising
              from the use of our services or the inability to access the
              website.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                10
              </span>
              Governing Law & Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts in Kolkata, West Bengal.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                11
              </span>
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For any clarifications regarding these terms, please contact:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:admin@iaccs.org.in"
                      className="text-blue-600 hover:underline"
                    >
                      admin@iaccs.org.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">
                      168, Mathkal, Nazrul Sarani, Dumdum Cantonment, Kolkata,
                      700065
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-blue-800 leading-relaxed">
              <strong>Acknowledgment:</strong> By using our website and
              services, you acknowledge that you have read, understood, and
              agree to be bound by these Terms and Conditions, as well as our
              Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
