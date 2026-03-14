export default function About() {
  return (
    <div className="bg-white">
      <header className="relative w-full flex flex-col bg-[url(/assets/images/banner-img.png)] bg-cover bg-center py-32 mt-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto xl:px-[110px] md:px-20 px-5 relative z-[1]">
          <div className="w-full max-w-[642px] flex flex-col gap-4">
            <h1 className="w-full max-w-[640px] font-bold text-white xl:text-[64px] md:text-4xl text-3xl tracking-[0] xl:leading-[76.8px]">About Us</h1>
          </div>
        </div>
      </header>
    
      <section className="w-full bg-white flex flex-col gap-16 py-16 xl:px-[110px] md:px-20 px-5">
        <div className="w-full max-w-4xl">
          <div className="flex-1 flex flex-col gap-8 relative">
            <h2 className="font-bold text-gray-900 xl:text-[48px] md:text-3xl text-2xl !leading-tight">Delivering Free Healthcare to Underserved Communities Worldwide</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>The Association for Critical Care Sciences (ACCS) was founded to represent, strengthen, and advance the discipline of Critical Care Sciences in India.</p>

              <p>With a rapidly evolving healthcare landscape and an increasing demand for advanced critical care professionals, our association serves as a unified platform for students, educators, researchers, healthcare institutions, and practicing professionals working in critical and emergency care environments.</p>

              <p>Critical Care Sciences has been a part of formal healthcare education in India for over two decades through Diploma, Bachelor&apos;s, and Master&apos;s level programs offered by recognized universities and medical institutions. Despite the significant clinical contribution of Critical Care professionals—especially in ICUs, emergency services, trauma units, ventilatory management, invasive monitoring, and life-support systems—the discipline still lacks standardized national recognition, legal identity, and regulatory framework. This gap has resulted in challenges related to employment, professional designation, licensure, and academic growth.</p>

              <p>ACCS was formed with the aim of addressing these challenges and enabling systemic reform. We advocate for national recognition under the NCAHP Act, standardized curriculum and training protocols, formal registration pathways, and defined career structures aligned with global medical education norms.</p>

              <p>Our mission extends beyond representation—we seek to build a professional ecosystem that encourages excellence in clinical skills, research, ethics, safety, leadership, and patient-centered care.</p>

              <p>As an association, we work to foster collaboration between healthcare delivery systems, universities, government authorities, regulatory bodies, and industry stakeholders. We actively promote continuing medical education, skill development programs, workshops, conferences, clinical exposure, and research initiatives to strengthen competency and enhance the quality of critical care services across India.</p>

              <p>At our core, we believe that recognition is not only a matter of identity—it is a matter of patient safety, system accountability, and national healthcare progress. Critical Care professionals are often the first line of response when a patient&apos;s life hangs in balance. Their expertise is indispensable to modern health systems, and their role deserves the regulatory foundation, respect, and structure that aligns with their contribution.</p>
              
              <p>ACCS stands as a voice, a movement, and a commitment—dedicated to advancing the future of Critical Care Sciences and ensuring that every professional in this field receives the dignity, clarity, and opportunities they rightfully deserve.</p>
            </div>
          </div>
        </div>
      </section>

    {/* <section className="w-full flex flex-col gap-16 py-16 xl:px-[110px] md:px-20 px-5 bg-yellow-500">
        <div className="w-full flex gap-[82px]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <div className="flex justify-center">
                    <img 
                        src="https://img.freepik.com/free-photo/smiling-elderly-male-near-plant_23-2148036681.jpg" 
                        alt="Chairman"
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>

                <div>
                    <p className="text-yellow-100 font-semibold uppercase tracking-wide mb-2">
                        Chairman’s Desk
                    </p>

                    <h2 className="text-4xl font-bold mb-4">
                        Message From Our Chairman
                    </h2>

                    <p className="leading-relaxed mb-6">
                        Our vision is to create a future where innovation and dedication come 
                        together to achieve excellence. We believe in empowering people, embracing 
                        new opportunities, and continuously pushing boundaries to bring meaningful 
                        change to society.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold">Mr. John Anderson</h3>
                        <p className="text-yellow-900">Chairman & Founder</p>
                    </div>
                </div>

            </div>
        </div>
    </section> */}

      <section className="w-full bg-gray-50 flex flex-col gap-16 py-16 xl:px-[110px] md:px-20 px-5">
        <div className="w-full">
          <div className="flex-1 flex flex-col gap-8 relative text-center">
            <h2 className="font-bold text-gray-900 xl:text-[48px] md:text-3xl text-2xl">Our Governing Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <img
                  src="/assets/images/bapan-sarkar.jpg"
                  alt="Bapan Sarkar"
                  className="w-48 h-48 mx-auto rounded-xl object-cover border border-gray-200"
                />
                <h3 className="text-xl font-semibold uppercase mt-4 text-gray-900">Bapan Sarkar</h3>
                <p className="text-gray-600">President</p>
                <p className="text-gray-500">M.sc CCST</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <img
                  src="/assets/images/atri-banerjee.jpg"
                  alt="Atri Banerjee"
                  className="w-48 h-48 mx-auto rounded-xl object-cover border border-gray-200"
                />
                <h3 className="text-xl font-semibold uppercase mt-4 text-gray-900">Atri Banerjee</h3>
                <p className="text-gray-600">General Secretary</p>
                <p className="text-gray-500">B.sc CCT</p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                <img
                  src="/assets/images/trina-ghorai.jpg"
                  alt="Trina Ghorai"
                  className="w-48 h-48 mx-auto rounded-xl object-cover border border-gray-200"
                />
                <h3 className="text-xl font-semibold uppercase mt-4 text-gray-900">Trina Ghorai</h3>
                <p className="text-gray-600">Vice President</p>
                <p className="text-gray-500">M.sc CCST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
