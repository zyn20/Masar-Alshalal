import React from "react";
import FAST from "../assets/client1.jpg";
import ITU from "../assets/client2.jpeg";
import NUST from "../assets/client3.jpeg";
import UOP from "../assets/client4.jpeg";
import aboutimg from "../assets/Aboutus.png";
function Testimonial() {
  return (
    <section class="  bg-blue-100 rounded-lg">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12 ">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            About Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
            At MASAR ALSHALAL DOCUMENTS CLEARING, we're your dedicated partner
            in simplifying document processing in the UAE. Our vision is to set
            the industry standard for efficiency, reliability, and
            professionalism in document clearance services. With extensive
            experience in UAE documentation, our seasoned professionals offer a
            range of services, including New Business Setup, Local Sponsorship,
            Emigration Card & Labour Card processing, Ejari for Commercial &
            Residential properties, Office solutions, Medical Typing, Emirates
            ID Typing, Typing & Attestation, Family Visa assistance, Tasheel
            Services, Office Renewal, and Pakistani Passport & ID Renewal. We
            specialize in Document Clearing and offer PRO Services to streamline
            your interactions with government authorities, ensuring a smooth
            experience in the UAE.
          </p>
          <div className="relative w-64 h-64 mx-auto">
            <img
              src={aboutimg}
              alt="About Us"
              className="object-cover object-center w-full h-full rounded-lg shadow-lg mt-5"
            />
          </div>
          <section class="text-gray-900">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-7">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  Who We Are
                </h1>
              </div>
              <div class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
                <ul>
                  <li className="mb-3">
                    <p>
                      <strong>Our Vision:</strong> To be the foremost provider
                      of document clearance services in the UAE, setting the
                      industry standard for efficiency, reliability, and
                      professionalism.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      <strong>Our Expertise:</strong> With years of experience
                      in navigating the intricacies of UAE documentation, we
                      have honed our expertise to perfection. Our team comprises
                      seasoned professionals who are well-versed in UAE
                      regulations and procedures.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Our Commitment:</strong> At MASAR ALSHALAL
                      DOCUMENTS CLEARING, we transcend the role of a mere
                      documents clearing company; we are your dedicated partner
                      in simplifying the intricate world of document processing
                      in the United Arab Emirates (UAE).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="text-gray-900">
            <div class="container px-5 py-6 mx-auto">
              <div class="text-center mb-7">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  Why Choose Us:
                </h1>
              </div>
              <div class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
                <ul>
                  <li className="mb-3">
                    <p>
                      <strong>Peace of Mind:</strong> Entrust your document
                      processing to us and enjoy the peace of mind that comes
                      from knowing experts are taking care of every detail.
                    </p>
                  </li>
                  <li className="mb-3">
                    <p>
                      <strong>Success: </strong> Our mission is to help you
                      transform challenges into opportunities. By efficiently
                      handling your documentation, we empower your journey in
                      the UAE to be marked by achievements.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Dedication:</strong> We are committed to your
                      success. Our team works tirelessly to ensure that your
                      documents are processed without delay, allowing you to
                      focus on your goals
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <hr className="my-6 " />
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Testimonials
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify font-medium md:font-bold  ">
            What Our Clients Say
          </p>
        </div>

        <div class="flex flex-wrap ">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-27 h-27 object-cover object-center sm:mb-0 mb-4"
                src={FAST}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-[1.35rem] text-gray-900">
                  Pricilia Doe
                </h2>
                <h3 class="text-gray-500 mb-3 text-[1.15rem]">
                  Client From China
                </h3>
                <p class="mb-4">
                  "I had a critical business presentation in the UAE, and I
                  needed my documents cleared urgently. MASAR ALSHALAL DOCUMENTS
                  CLEARING came to my rescue! Their team efficiently handled all
                  the paperwork, ensuring my presentation went off without a
                  hitch. Thank you for your exceptional service!"
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={ITU}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-[1.35rem] text-gray-900">
                  Sheikh Abdullah
                </h2>
                <h3 class="text-gray-500 mb-3 text-[1.15rem]">
                  Client From Oman
                </h3>
                <p class="mb-4">
                  "I was overwhelmed by the complex process of getting my
                  student visa for the UAE. MASAR ALSHALAL DOCUMENTS CLEARING
                  made it all seem easy. They guided me through the entire visa
                  application process, and I'm now pursuing my dream of studying
                  in the UAE. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={NUST}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-[1.35rem] text-gray-900">
                  Muneeb Al Sheikh Musalaam
                </h2>
                <h3 class="text-gray-500 mb-3 text-[1.15rem]">
                  Mechatronics engineer at Huwaar
                </h3>
                <p class="mb-4">
                  "Running a business in the UAE comes with its fair share of
                  paperwork. MASAR ALSHALAL DOCUMENTS CLEARING has been our
                  trusted partner in handling all our document processing needs.
                  Their expertise and dedication have saved us valuable time and
                  resources. Thank you for your invaluable support!"
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={UOP}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-medium text-[1.35rem] text-gray-900">
                  Mr.John Harzier
                </h2>
                <h3 class="text-gray-500 mb-3 text-[1.15rem]">
                  Client From US
                </h3>
                <p class="mb-4">
                  "As a legal professional, I understand the importance of
                  precise documentation. MASAR ALSHALAL DOCUMENTS CLEARING has
                  consistently delivered accurate and reliable document clearing
                  services. Their attention to detail and knowledge of UAE
                  regulations are commendable. I rely on them for all my legal
                  document processing needs."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
