import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
    {/* <!-- Header Section --> */}
    <header className="relative w-full flex flex-col bg-[url(/assets/images/banner-img.png)] bg-cover bg-center py-32 mt-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto xl:px-[110px] md:px-20 px-5 relative z-[1]">
            <div className="w-full max-w-[642px] flex flex-col gap-8">
                <div className="text-white">
                    <h1 className="w-full max-w-[640px] font-bold text-white xl:text-[64px] md:text-4xl text-3xl tracking-[0] xl:leading-[76.8px]">Welcome to ACCS The Association for Critical Care Sciences</h1>
                    <p className="mt-2 text-white/80">RECOGNITION . STANDARDS . EXCELLENCE .</p>
                </div>
                <p className="text-lg text-white/90">ACCS is dedicated to advancing clinical excellence, promoting education, and strengthening the future workforce in Critical Care Science. Together, we work for recognition, standardization, and growth of our profession</p>

                <div className="flex gap-6">
                    <Link href="/membership" className="inline-block px-8 py-4 bg-white text-gray-900 font-medium text-base rounded hover:bg-gray-100 transition-colors">
                        Volunteer Today
                    </Link>
                </div>
            </div>
        </div>
    </header>

    {/* <!-- About Us Section --> */}
    <section id="about" className="w-full bg-white flex flex-col gap-16 py-16 xl:px-[110px] md:px-20 px-5">
        <div className="w-full flex flex-wrap gap-12 lg:gap-[82px]">
            <div className="flex-1 min-w-[300px] flex flex-col gap-6 relative">
                <h2 className="font-bold text-gray-900 xl:text-2xl md:text-xl text-lg tracking-[0] xl:leading-[120%]">MISSION & VISION</h2>

                <p className="text-gray-600 text-base tracking-[0] leading-[160%]">The Association for Critical Care Sciences (ACCS) is a community-led initiative formed to represent, support, and advance the field of Critical Care Science in India. We work towards unifying students, graduates, educators, and professionals to strengthen recognition, create academic opportunities, and uphold high standards in clinical practice.</p>

                <h3 className="font-bold text-gray-900">MISSION & VISION</h3>

                <p className="text-gray-700">To empower Critical Care professionals through education, advocacy, collaboration, and skill development, ensuring excellence in patient care across Intensive Care settings.</p>

                <p className="text-gray-700">A future where Critical Care Science is nationally recognized, standardized, and valued as an essential healthcare specialty supported by strong academic pathways, ethical practice, and professional dignity.</p>

                <div>
                    <Link href="/about-us" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium text-base px-8 py-4 rounded transition-colors">
                        Learn more
                    </Link>
                </div>
            </div>

            <div className="md:w-[480px] md:flex-shrink-0">
                <img className="w-full h-auto rounded-lg" alt="About us" src="/assets/images/about-us.png" />
            </div>
        </div>
    </section>

    <section id="services" className="relative w-full bg-yellow-400 xl:py-[120px] md:py-20 py-10">
        <div className="max-w-[1500px] mx-auto xl:px-[206px] md:px-10 px-5">
            <div className="flex flex-wrap md:flex-nowrap gap-10 justify-center">
                <div className="font-bold text-gray-900 xl:text-[48px] md:text-3xl text-2xl tracking-[0] xl:leading-[120%]">200+ Student Members</div>
                <div className="font-bold text-gray-900 xl:text-[48px] md:text-3xl text-2xl tracking-[0] xl:leading-[120%]">200+ Professional Members</div>
            </div>
        </div>
    </section>

    {/* <!-- Projects Section --> */}
    <section className="relative w-full bg-white xl:px-[110px] md:px-20 px-5 py-24">
        <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-wrap items-start gap-8 xl:mb-16 md:mb-10 mb-5">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="font-bold text-gray-900 text-base tracking-[2.00px] leading-[normal] whitespace-nowrap uppercase">
                            Building the Future
                        </div>
                    </div>
                    <div className="w-[72px] h-0.5 bg-gray-400"></div>
                </div>

                <h2 className="max-w-[640px] font-bold text-gray-900 xl:text-[48px] md:text-3xl text-2xl !leading-tight">Building the Future of Critical Care Professionals in India</h2>
                <p className="md:pl-80 text-gray-600">Empowering students, trainees, and professionals through organized efforts, education, and advocacy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative w-full h-[421px] overflow-hidden rounded-[20px]">
                    <img className="absolute inset-0 w-full h-full object-cover" alt="Mission smile 1k" src="/assets/images/child-care.png" />
                    <div className="absolute inset-0 bg-black rounded-[20px] opacity-60"></div>
                    <div className="absolute top-12 left-8 right-8 flex flex-col">
                        <h3 className="font-bold text-white text-2xl md:text-[28px] tracking-[0] leading-[140%]">
                            Advocacy for Recognition
                        </h3>
                        <div className="mt-4 text-white/90 text-base tracking-[0] leading-[160%]">
                            Working toward the official recognition of Critical Care Science under national healthcare frameworks. We collaborate with policymakers, institutions, and stakeholders to secure professional identity and rights
                        </div>
                        <Link href="/about-us" className="inline-block w-fit mt-8 px-6 py-3 bg-white text-gray-900 font-medium text-base rounded hover:bg-gray-100 transition-colors">
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="relative w-full h-[421px] overflow-hidden rounded-[20px]">
                    <img className="absolute inset-0 w-full h-full object-cover" alt="Weekly excursions" src="/assets/images/about-us.png" />
                    <div className="absolute inset-0 bg-black rounded-[20px] opacity-60"></div>
                    <div className="absolute top-12 left-8 right-8 flex flex-col">
                        <div className="font-bold text-white text-2xl md:text-[28px] tracking-[0] leading-[140%]">
                            Training & Skill Development
                        </div>
                        <div className="mt-4 text-white/90 text-base tracking-[0] leading-[160%]">
                            Helping students and professionals enhance their knowledge and hands-on ICU skills through workshops and training programs.
                        </div>
                        <Link href="/about-us" className="inline-block w-fit mt-8 px-6 py-3 bg-white text-gray-900 font-medium text-base rounded hover:bg-gray-100 transition-colors">
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="relative w-full h-[421px] overflow-hidden rounded-[20px]">
                    <img className="absolute inset-0 w-full h-full object-cover" alt="Monthly public awareness" src="/assets/images/medical-camp.png" />
                    <div className="absolute inset-0 bg-black rounded-[20px] opacity-60"></div>
                    <div className="absolute top-12 left-8 right-8 flex flex-col">
                        <div className="font-bold text-white text-2xl md:text-[28px] tracking-[0] leading-[140%]">
                            Academic Support & Study Resources
                        </div>
                        <div className="mt-4 text-white/90 text-base tracking-[0] leading-[160%]">
                            Providing structured learning materials, mentorship, and access to essential educational resources for students and practicing professionals in critical care domains
                        </div>
                        <Link href="/about-us" className="inline-block w-fit mt-8 px-6 py-3 bg-white text-gray-900 font-medium text-base rounded hover:bg-gray-100 transition-colors">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Statistics Section --> */}
    <section className="relative w-full bg-gray-900 xl:py-[85px] py-16 xl:px-[110px] md:px-20 px-5">
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-8 max-w-[633px]">
                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-white xl:text-[48px] md:text-3xl text-2xl tracking-[0] !leading-tight">
                            Join us to make it possible to create a better place for Critical Care Professionals.
                        </h2>

                        <Link href="/membership" className="inline-block w-fit px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base rounded transition-colors">
                            Join Us
                        </Link>
                    </div>                    
                </div>

                <div className="w-full flex justify-center lg:justify-end">
                    <div className="relative max-w-[480px]">
                        <img className="w-full h-auto rounded-lg" alt="About us" src="/assets/images/about-us.png" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Call to Action Section --> */}
    {/* <section className="relative py-24 w-full flex items-center justify-center bg-[url(/assets/images/Donor-Focused-Version.png)] bg-cover bg-center">
        <div className="inset-0 bg-opacity-50 bg-black absolute"></div>
        <div className="flex flex-col items-center gap-8 px-4 max-w-5xl relative">
            <h2 className="font-bold text-white xl:text-[48px] md:text-3xl text-2xl !leading-none">
                Your generosity makes it possible for us to build a healing space that delivers specialized medical care and support to children with special needs.
            </h2>

            <div className="flex gap-8">
                <button className="h-auto px-8 py-4 bg-yellow-500 hover:opacity-90 text-[#000000] font-medium text-base rounded backdrop-blur-2xl backdrop-brightness-[100%]">
                    Join as a volunteer
                </button>

                <button className="h-auto px-8 py-4 bg-white hover:opacity-90 text-primary-text font-medium text-base rounded backdrop-blur-2xl backdrop-brightness-[100%]">
                    Donate
                </button>
            </div>
        </div>
    </section> */}

    {/* <!-- Events Section --> */}
    <section id="media" className="w-full bg-white xl:px-[110px] md:px-20 px-5 py-16">
        <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="font-bold text-gray-900 xl:text-[48px] md:text-3xl text-2xl !leading-none">
                    Our Events
                </h2>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-400 rounded-[20px] p-8 md:p-10">
                    <div className="flex items-start gap-5">
                        <div className="flex flex-col">
                            <div className="font-bold text-gray-900 text-4xl md:text-5xl tracking-[0] leading-tight">
                                13
                            </div>
                            <div className="font-medium text-gray-900 text-base tracking-[2.00px] leading-[normal]">
                                APR
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-2">
                                NEXT EVENT
                            </div>
                            <div className="font-bold text-gray-900 text-xl md:text-[28px] tracking-[0] leading-[140%]">
                                Coming Soon...
                            </div>
                        </div>

                        <img className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0" alt="Arrow button" src="/assets/images/arrow-button.png" />
                    </div>
                </div>

                <div className="bg-yellow-400 rounded-[20px] p-8 md:p-10">
                    <div className="flex items-start gap-5">
                        <div className="flex flex-col">
                            <div className="font-bold text-gray-900 text-4xl md:text-5xl tracking-[0] leading-tight">
                                25
                            </div>
                            <div className="font-medium text-gray-900 text-base tracking-[2.00px] leading-[normal]">
                                APR
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-2">
                                NEXT EVENT
                            </div>
                            <div className="font-bold text-gray-900 text-xl md:text-[28px] tracking-[0] leading-[140%]">
                                Coming Soon...
                            </div>
                        </div>

                        <img className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0" alt="Arrow button" src="/assets/images/arrow-button.png" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
