import React from "react";
import Navbar from "../components/Navbar"; // Your Navbar component
import Footer from "../components/Footer"; // Your Footer component
import PrivacyPolicyHeader from "../components/PrivacyPolicyHeader"; // Your PrivacyPolicyHeader component
import PrivacyPolicySection from "../components/PrivacyPolicySection"; // Your PrivacyPolicySection component
import PrivacyPolicyContact from "../components/PrivacyPolicyContact"; // Your PrivacyPolicyContact component

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-200">
      <Navbar />

      <main className="flex-grow my-16 mx-14 md:mx-40 lg:mx-72">
        <PrivacyPolicyHeader />
        <PrivacyPolicySection
          title="Information We Collect"
          content={
            <>
              <p>
                At MASAR ALSHALAL DOCUMENTS CLEARING, we may collect various types of information from users of our platform, including but not limited to:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Personal Information: We may collect personal information such as your name, email address, and other details when you create an account or communicate with us.
                </li>
                <li>
                  Usage Information: We collect information about your interactions with our platform, including pages visited, documents processed, and search queries.
                </li>
                <li>
                  Device Information: We gather information about the devices you use to access our platform, including IP addresses, browser types, and operating systems.
                </li>
                <li>
                  Cookies and Similar Technologies: We employ cookies and similar technologies to collect data about your preferences and activities on our platform.
                </li>
              </ul>
            </>
          }
        />

        <PrivacyPolicySection
          title="How We Use Your Information"
          content={
            <>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Providing and Improving Our Services: We use your information to operate, maintain, and enhance our platform, ensuring personalized user experiences and content recommendations.
                </li>
                <li>
                  Communication: We may use your contact information to send you updates, newsletters, and administrative messages related to MASAR ALSHALAL DOCUMENTS CLEARING.
                </li>
                <li>
                  Research and Analytics: Aggregated and anonymized data may be used for research and analytics to improve our platform's functionality and user experience.
                </li>
              </ul>
            </>
          }
        />

        {/* Add more PrivacyPolicySection components for other sections as needed */}
        
        <PrivacyPolicyContact />
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
