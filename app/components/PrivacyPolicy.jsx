// pages/privacy-policy.js (or components/PrivacyPolicy.js if you prefer to import it)

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full"> {/* Updated rounded and shadow */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Privacy Policy for Cricshub
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          This Privacy Policy describes how Cricshub ("we," "us," or "our") collects, uses, and discloses your information when you use our website, www.cricshub.com (the "Service"). By accessing or using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-2 leading-relaxed">
          We collect several types of information from and about users of our Service, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4 space-y-2">
          <li>
            <strong className="font-semibold">Personal Information:</strong> Information that can be used to identify you, such as your name, email address, and any other information you provide when you register for an account, subscribe to our newsletter, or contact us.
          </li>
          <li>
            <strong className="font-semibold">Usage Data:</strong> Information about how you access and use the Service, such as your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.
          </li>
          <li>
            <strong className="font-semibold">Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies (like web beacons and pixels) to track activity on our Service and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-2 leading-relaxed">
          We use the collected information for various purposes, including to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4 space-y-2">
          <li>Provide and maintain our Service.</li>
          <li>Improve, personalize, and expand our Service.</li>
          <li>Understand and analyze how you use our Service.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes.</li>
          <li>Send you emails.</li>
          <li>Find and prevent fraud.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          3. How We Share Your Information
        </h2>
        <p className="text-gray-700 mb-2 leading-relaxed">
          We may share your information in the following situations:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4 space-y-2">
          <li>
            <strong className="font-semibold">With Service Providers:</strong> We may share your personal information with service providers to monitor and analyze the use of our Service, to contact you.
          </li>
          <li>
            <strong className="font-semibold">For Business Transfers:</strong> We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
          </li>
          <li>
            <strong className="font-semibold">With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
          </li>
          <li>
            <strong className="font-semibold">With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
          </li>
          <li>
            <strong className="font-semibold">With Other Users:</strong> When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
          </li>
          <li>
            <strong className="font-semibold">With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          4. Data Retention
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          5. Your Data Protection Rights
        </h2>
        <p className="text-gray-700 mb-2 leading-relaxed">
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4 space-y-2">
          <li>
            <strong className="font-semibold">The right to access</strong> – You have the right to request copies of your personal data.
          </li>
          <li>
            <strong className="font-semibold">The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
          </li>
          <li>
            <strong className="font-semibold">The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.
          </li>
          <li>
            <strong className="font-semibold">The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong className="font-semibold">The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.
          </li>
          <li>
            <strong className="font-semibold">The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          6. Security of Your Personal Information
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          7. Links to Other Websites
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          8. Children's Privacy
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from anyone under the age of 13 without verification of parental consent, we take steps to remove that information from our servers.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">
          10. Contact Us
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          If you have any questions about this Privacy Policy, you can contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4 space-y-2">
          <li>By email: [Your Contact Email Here, e.g., privacy@cricshub.com]</li>
          <li>By visiting this page on our website: [Link to your contact page, e.g., www.cricshub.com/contact]</li>
        </ul>

        <p className="text-gray-600 text-sm mt-8 text-center">
          Last updated: August 4, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
