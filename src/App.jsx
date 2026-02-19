import Registration from "./Components/Registration.jsx"
// import { useNavigate } from "react-router-dom"
function App() {
  const destinations = [
    {
      country: "Mercedes Benz Lab",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/mercedes.webp",
    },
    {
      country: "AICTE IDEA Lab",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/aicte.webp",
    },
    {
      country: "PTC Centre of Excellence",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/ptc.webp",
    },
    {
      country: "Mobile App Development",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/mobiledev.jpeg",
    },
    {
      country: "Amazon Web Services",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/aws.webp",
    },
    {
      country: "Oracle Academy Workforce Development Program",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/oracle.webp"
    },
    {
      country: "Capgemini 5G Lab",
      flag: "https://www.nietbschool.ac.in/assets/images/lab/capgemini_5g.webp"
    }
  ];
  const servicesData = [
    {
      title: "Excellent Academic Ambiance",
      description:
        "A 13.90-acre of lush green NIET campus offers delightful spaces for study, sports, and social interaction. A large number of Lecture theatres, Wi-Fi enabled campus, a separate Hostel for boys and girls, a library with more than 3200 National & International Journals, Innovation Labs, in campus bank and ATM, a gym, and campus shops.",
      image: "https://cdn-icons-png.flaticon.com/510/3135/3135755.png",
    },
    {
      title: "Excellent Placement Record",
      description:
        "2700+ Record-Breaking Placements. Average package 6 LPA. National Highest package 51 LPA and international placement achieved for MBA student at Dubai. Providing the highest number of placements in the region for the last 5 consecutive years.",
      image: "https://cdn-icons-png.flaticon.com/510/2997/2997988.png",
    },
    {
      title: "Pyramid Finishing School",
      description:
        "NIET has come up with Pyramid Finishing School. The student is assessed with various skills and Particular training. Many industry Tie-ups, Techie Edge, Image Edge, Sharpen skill edge, fork edge and corporate edge. Once training and workshops are over, students are given opportunities to appear for the recruitment drives.",
      image: "https://cdn-icons-png.flaticon.com/510/942/942748.png",
    },
    {
      title: "Foreign Language",
      description:
        "Language Lab for German, Japanese & French. Authorized Center for Cambridge English Language Assessment (BEC)",
      image: "https://cdn-icons-png.flaticon.com/510/2436/2436632.png",
    },
    {
      title: "International Linkages",
      description:
        "International Study Tour Plan.",
      image: "https://cdn-icons-png.flaticon.com/510/1995/1995574.png",
    },
    {
      title: "Holistic Education",
      description:
        "An environment that encourages self-learning, sports, social, culture, technical skills, and all-around development.",
      image: "https://cdn-icons-png.flaticon.com/510/1995/1995574.png",
    },
  ];
  const testimonialsData = [
    {
      name: "Anshu Kamari",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Hi, I'm Nitish Kumar, a PGDM student of the 2022-2024 batch. My specialization was in marketing. I'm thankful to the faculty at NIET for teaching me crucial marketing skills. From 7P's to advanced social media strategies, their training helped secure my job at Axis Bank. The placement team on campus gave me ample opportunities that helped me secure this job.",
    },
    {
      name: "Anshu Kamari",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Hi, I'm Nitish Kumar, a PGDM student of the 2022-2024 batch. My specialization was in marketing. I'm thankful to the faculty at NIET for teaching me crucial marketing skills. From 7P's to advanced social media strategies, their training helped secure my job at Axis Bank. The placement team on campus gave me ample opportunities that helped me secure this job.",
    },
    {
      name: "Anshu Kamari",
      role: "Graduate",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      review:
        "I, Anshu Kamari, am thankful to NIET for providing me with an internship opportunity at U.S. International. This experience enhanced my skills in data collection, teamwork, and customer relationship management. Now working as an inside sales executive at Viraj Ventures, I appreciate the guidance received throughout my academic journey.",
    },
    {
      name: "Aditya Kumar",
      role: "Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "As a PGDM student of the 2022-2024 batch, I secured an internship at Indian Oil Corporation Limited's R&D team. Subsequently, I landed a management trainee position at Lindstrom, thanks to NIET's professional development programs and excellent infrastructure. Grateful for the academic guidance and placement support, thank you, NIET.",
    }
    // {
    //   name: "Aditya Kumar",
    //   role: "Student",
    //   image: "https://randomuser.me/api/portraits/men/32.jpg",
    //   review:
    //     "As a PGDM student of the 2022-2024 batch, I secured an internship at Indian Oil Corporation Limited's R&D team. Subsequently, I landed a management trainee position at Lindstrom, thanks to NIET's professional development programs and excellent infrastructure. Grateful for the academic guidance and placement support, thank you, NIET.",
    // }
  ];

  const studyGuidePoints = [
    "Top Study Destinations in 2025",
    "How to Choose the Right University",
    "Student Visa & Documentation Tips",
  ];
  const consultingServicesData = [
    {
      title: "Abhiranjan Kumar",
      description:
        "Cease Fire",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "Aditya Kumar",
      description:
        "Lindstrom",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      title: "Anshu Kumari",
      description:
        "Viraaj Ventures",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      title: "Nitish Kumar",
      description:
        "Axis Bank",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    }
  ];
  // const navigate=useNavigate();
  return (

    <div className="lg:m-0 m-3">
      {/*Home Page Section */}
      <section className="w-full h-full ">
        <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[100vh] ">

          {/* HERO IMAGE */}
          <img
            src="https://www.niet.co.in/assets/frontend/images/niet-college-1.webp"
            alt="Hero banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/*2nd Section */}
      <section className="mt-4" id="apply-section" >
        <div className="flex flex-col lg:flex lg:flex-row  bg-[url('https://www.nietbschool.ac.in/assets/images/applynow-hero-banner.jpeg')]">

          <div className="lg:h-[100vh] w-full min-h-screen lg:w-[100vh] lg:m-6 lg:p-16 m-4 p-4">
            <p className="text-white lg:text-xl mb-4 bg-gray-500 rounded-2xl w-65 p-1 pl-4">NIET BUSINESS SCHOOL</p>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight font-display sm:grid ">
              1st Private Institute in Uttar Pradesh<br class="hidden sm:block" />
              to get <span class="text-[#FFD54F] italic ">Autonomous Status</span> by UGC
            </h1>
            <p className="mt-2 text-xl text-white">
              Start your application for NIET Business School's industry-aligned PGDM and MBA-equivalent programs.
              Experience outcome-driven learning, global exposure and robust placement support.
            </p>
          </div>
          <div className="lg:w-[80vh] h-full p-6 ">
            <Registration />
          </div>
        </div>
      </section>

      {/*3rd Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-10 ">

          {/* Left */}
          <div className="flex flex-col h-full">
            <h1 className="text-3xl lg:text-4xl font-bold text-red-600 ">
              How to Apply ?
            </h1>

            <div className="lg:w-[100vh] lg:h-[90vh] w-full h-full mt-4  shadow-lg group">
              <img
                src="https://www.niet.co.in/assets/frontend/images/why-us-overview.webp"
                alt="niet_image"
                className="w-full h-full object-cover transition-transform rounded-xl duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 mt-14">

            {/* Step 1 */}
            <div className="group flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D6323A] text-white font-bold flex items-center justify-center text-lg">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Step 1: Register
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Register on the portal by filling and submitting the Registration Form.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex items-start gap-5 bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D6323A] text-white font-bold flex items-center justify-center text-lg">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Step 2: Fill the form
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Complete your application form with all required details and information.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex items-start gap-5 bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D6323A] text-white font-bold flex items-center justify-center text-lg">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Step 3: Pay the fees
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Upload required documents and pay the admission fee to confirm your admission.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex items-start gap-5 bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D6323A] text-white font-bold flex items-center justify-center text-lg">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Step 4: Done
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Your application is complete. You will receive confirmation and further instructions via email.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4">
              <button
                className="
            bg-[#D6323A] text-white px-8 py-3 rounded-lg font-semibold
            transition-all duration-300
            hover:bg-[#b52a30] hover:scale-105 hover:shadow-xl
            focus:ring-4 focus:ring-red-200
          "
              >
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/*4th section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">

          {/* Heading */}
          <div className="mb-8 md:mb-10">
            <p className="text-lg md:text-4xl font-semibold tracking-[0.15em] uppercase text-[#D6323A] mb-1">
              Industry & Innovation
            </p>
            <h2 className="text-sm md:text-2xl font-bold text-gray-600 mb-1">
              Learn Inside Advanced Labs and Centres of Excellence
            </h2>
          </div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Mercedes Benz Lab", img: "/assets/images/lab/mercedes.webp" },
              { name: "AICTE IDEA Lab", img: "/assets/images/lab/aicte.webp" },
              { name: "PTC Centre of Excellence", img: "/assets/images/lab/ptc.webp" },
              { name: "Mobile App Development", img: "/assets/images/lab/mobiledev.jpeg" },
              { name: "Cisco Networking Academy", img: "/assets/images/lab/cisco.webp" },
              { name: "Automation Lab", img: "/assets/images/lab/automation.webp" },
              { name: "Amazon Web Services", img: "/assets/images/lab/aws.webp" },
              { name: "Salesforce Academy", img: "/assets/images/lab/saleforce.webp" },
              { name: "Robotics Lab", img: "/assets/images/lab/robotics.webp" },
              { name: "Capgemini PLM Lab", img: "/assets/images/lab/capgemini.webp" },
              { name: "Big Data Lab", img: "/assets/images/lab/big-data.webp" },
              { name: "Product Design and Development Lab", img: "/assets/images/lab/product_desing_and_development.webp" },
              { name: "Rapid Prototyping and Reverse Engineering Lab", img: "/assets/images/lab/rapid_prototyping.webp" },
              { name: "Oracle Academy Workforce Development Program", img: "/assets/images/lab/oracle.webp" },
              { name: "VMware VSphere Overview", img: "/assets/images/lab/vmware.webp" },
              { name: "Metaverse Centre of Excellence in AR/VR", img: "/assets/images/lab/metaverse.webp" },
              { name: "Capgemini 5G Lab", img: "/assets/images/lab/capgemini_5g.webp" },
              { name: "Automation Anywhere & Ui Path Centre of Excellence", img: "/assets/images/lab/ui_path.jpeg" },
            ].map((lab, index) => (
              <div key={index} className="group">
                <div className="flex items-center p-4 md:p-5 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full group-hover:-translate-y-1">
                  <img src={lab.img} alt={lab.name} className="w-12 h-12 object-contain mr-4" />
                  <h6 className="text-gray-900 font-semibold text-sm md:text-base group-hover:text-[#D6323A] transition-colors">
                    {lab.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/*5th section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-red-600">
              Why NIET
            </h2>
            <p className="mt-3 text-2xl text-black">
              NIET For Better and Bright Future
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 shadow-amber-100">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14"
                  />
                </div>

                <h3 className="font-semibold text-red-600 text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600  p-2 flex justify-items-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*6th section */}

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-red-600 flex justify-center">
              What Our Students Say
            </h2>
          </div>

          {/* Testimonials Slider */}
          <div
            className="
        flex gap-6
        overflow-x-auto
        snap-x snap-mandatory
        scroll-smooth
        pb-4
        [-ms-overflow-style:none]
        [scrollbar-width:none]
      "
          >
            {testimonialsData.map((item, index) => {
              const initials = item.name
                .split(" ")
                .map(word => word[0])
                .join("");

              return (
                <div
                  key={index}
                  className="
              relative bg-white rounded-2xl p-6
              shadow-md transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              w-[85%] sm:w-[320px] md:w-[360px]
              snap-center shrink-0
            "
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 text-purple-200 text-3xl">
                    ❝
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                      {initials}
                    </div>

                    <div>
                      <div className="flex text-yellow-400 text-sm mb-1">
                        ★★★★★
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.review}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Image Section */}
          <div
            className="
        mt-8 lg:mt-16
        rounded-2xl lg:p-8
        transition-all duration-500
        hover:shadow-2xl
      "
          >
            <div className="w-full h-full lg:h-[50vh] lg:max-w-7xl overflow-hidden rounded-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_640.jpg"
                alt="NIET Campus"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </section>

      {/*7th section */}
      <section className="bg-gray-50 py-10 pb-20 md:pb-24 ">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-14 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-red-600 flex justify-center">
              Excellent Placement Record
            </h2>
          </div>

          {/* SNAP VIDEO SLIDER */}
          <div
            className="
        flex gap-6
        overflow-x-auto
        snap-x snap-mandatory
        scroll-smooth
        pb-4
        [-ms-overflow-style:none]
        [scrollbar-width:none]
      "
          >
            {consultingServicesData.map((item, index) => (
              <div
                key={index}
                className="
            group bg-white rounded-2xl shadow-md overflow-hidden
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
            flex flex-col
            w-[85%] sm:w-[300px] md:w-[320px] lg:w-[23%]
            snap-center shrink-0
          "
              >
                {/* Video */}
                <div className="overflow-hidden">
                  <video
                    src={item.video}
                    className="
                w-full object-cover p-3
                h-90 sm:h-56 md:h-86
                transition-transform duration-500
                group-hover:scale-105 rounded-2xl
              "
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                </div>

                {/* Content */}
                <div className="p-6 mt-4 md:mt-10 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/*company  */}
      <section className="bg-gray-50 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-red-600">
              Our Top Recruiters
            </h2>
          </div>

          {/* Marquee Row 1 */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee">
              {[
                "/assets/images/company/1.png",
                "/assets/images/company/2.png",
                "/assets/images/company/3.png",
                "/assets/images/company/4.png",
                "/assets/images/company/5.png",
              ].concat([
                "/assets/images/company/1.png",
                "/assets/images/company/2.png",
                "/assets/images/company/3.png",
                "/assets/images/company/4.png",
                "/assets/images/company/5.png",
              ]).map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 w-40 h-20 md:w-32 md:h-16 flex items-center justify-center group"
                >
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="
                max-h-16 md:max-h-12 w-auto object-contain
                filter mix-blend-multiply
                transition-transform duration-300
                group-hover:scale-110
              "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 (Reverse) */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee-reverse">
              {[
                "/assets/images/company/6.png",
                "/assets/images/company/7.png",
                "/assets/images/company/8.png",
                "/assets/images/company/9.png",
                "/assets/images/company/10.png",
              ].concat([
                "/assets/images/company/6.png",
                "/assets/images/company/7.png",
                "/assets/images/company/8.png",
                "/assets/images/company/9.png",
                "/assets/images/company/10.png",
              ]).map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 w-40 h-20 md:w-32 md:h-16 flex items-center justify-center group"
                >
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="
                max-h-16 md:max-h-12 w-auto object-contain
                filter mix-blend-multiply
                transition-transform duration-300
                group-hover:scale-110
              "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/*Footer */}
      <footer className="bg-gray-100 text-gray-800  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

          {/* Top Section */}
          <div className="py-6 border-b border-gray-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left Column */}
              <div className="lg:col-span-4">
                <img
                  src="/assets/images/logo.webp"
                  alt="NIET Business School"
                  className="h-20 w-auto"
                  loading="eager"
                />

                <div className="space-y-3 text-[16px] lg:text-lg text-gray-700 mt-3">
                  <p>
                    NIET Business School,<br />
                    Plot No. 19, Knowledge Park II,<br />
                    Greater Noida, Uttar Pradesh – 201310
                  </p>

                  <div className="flex items-center gap-2">
                    <i className="fas fa-envelope text-gray-600"></i>
                    <a
                      href="mailto:admission@nietbschool.ac.in"
                      className="hover:text-[#D6323A] transition-colors"
                    >
                      admission@nietbschool.ac.in
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <i className="fas fa-globe text-gray-600"></i>
                    <a
                      href="https://www.nietbschool.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D6323A] transition-colors"
                    >
                      www.nietbschool.ac.in
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <i className="fas fa-phone text-gray-600"></i>
                    <div className="flex flex-col">
                      <a href="tel:+919289801606" className="hover:text-[#D6323A]">
                        +91-9289801606
                      </a>
                      <a href="tel:+918010500700" className="hover:text-[#D6323A]">
                        +91-8010500700
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] lg:text-lg">
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:text-[#D6323A]">About Institute</a></li>
                  <li><a href="/program" className="hover:text-[#D6323A]">Program</a></li>
                  <li><a href="/blog" className="hover:text-[#D6323A]">Blog</a></li>
                  <li><a href="/faculty" className="hover:text-[#D6323A]">Faculty & Mentorship</a></li>
                  <li><a href="/student-life" className="hover:text-[#D6323A]">Student Life</a></li>
                  <li><a href="/media" className="hover:text-[#D6323A]">News</a></li>
                </ul>

                <ul className="space-y-2">
                  <li><a href="/events" className="hover:text-[#D6323A]">Events</a></li>
                  <li><a href="/placement" className="hover:text-[#D6323A]">Placements</a></li>
                  <li><a href="/contact" className="hover:text-[#D6323A]">Contact Us</a></li>
                  <li><a href="/mandatory-disclosure" className="hover:text-[#D6323A]">Mandatory Disclosure</a></li>
                </ul>

                <ul className="space-y-2">
                  <li><a href="/grievance-redressal" className="hover:text-[#D6323A]">Grievance Redressal</a></li>
                  <li><a href="/nirf" className="hover:text-[#D6323A]">NIRF Rankings</a></li>
                  <li><a href="/iaqc" className="hover:text-[#D6323A]">IQAC</a></li>
                  <li><a href="/privacy-policy" className="hover:text-[#D6323A]">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2026 NIET Business School. All rights reserved.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/niet.business.school.official/"
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-105 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/niet_business_school/"
                className="w-10 h-10 bg-gradient-to-r from-[#E4405F] to-[#C13584] rounded-full flex items-center justify-center text-white hover:scale-105 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/niet-bschool/"
                className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:scale-105 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@NIETBusinessSchool"
                className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-105 transition"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default App
