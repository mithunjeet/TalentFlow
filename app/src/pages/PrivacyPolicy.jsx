import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-gray-700">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Personal information such as name, email, and phone number.</li>
        <li>Usage data including pages visited and time spent on the site.</li>
        <li>Cookies and tracking technologies to improve user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>To provide and maintain our services.</li>
        <li>To communicate updates, offers, or other information.</li>
        <li>To analyze user behavior and improve our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell your personal information. We may share data with trusted partners to provide services or comply with legal obligations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at <span className="text-blue-600">support@TALENTFLOW.com</span>.
      </p>
    </div>
  );
}
