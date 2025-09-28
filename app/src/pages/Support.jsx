import React from "react";

export default function Support() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Support</h1>

      <p className="mb-4 text-gray-700">
        We’re here to help! Choose one of the options below to get support.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. FAQ</h2>
      <p className="text-gray-700 mb-4">
        Check our Frequently Asked Questions for quick answers to common issues.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Email Support</h2>
      <p className="text-gray-700 mb-4">
        Send us an email at <span className="text-blue-600">support@TALENTFLOW.com</span> and we will respond within 24 hours.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Live Chat</h2>
      <p className="text-gray-700 mb-4">
        Use the live chat option on our website to talk to a support agent instantly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Contact Form</h2>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
