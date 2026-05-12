
"use client";

import { useState } from "react";

export default function WhatsAppReplyGenerator() {
  const [customerMessage, setCustomerMessage] = useState("");
  const [reply, setReply] = useState("");

  const generateReply = () => {
    if (!customerMessage) return;

    setReply(
      `Hi! Thank you for your message regarding "${customerMessage}". We appreciate your interest and will assist you as soon as possible.`
    );
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      {/* Hero */}
      <section className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold">
          WhatsApp Reply Generator
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Generate professional customer replies instantly using AI.
        </p>

      </section>

      {/* Generator */}
      <section className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Input */}
        <div className="border rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Customer Message
          </h2>

          <textarea
            className="w-full border rounded-xl px-4 py-4 h-56"
            placeholder="Example: Hi, is this product still available?"
            onChange={(e) => setCustomerMessage(e.target.value)}
          />

          <button
            onClick={generateReply}
            className="mt-6 bg-black text-white px-6 py-3 rounded-xl"
          >
            Generate Reply
          </button>

        </div>

        {/* Result */}
        <div className="border rounded-2xl p-8 bg-black text-white">

          <h2 className="text-2xl font-semibold mb-6">
            AI Reply
          </h2>

          <div className="text-lg leading-8 text-gray-200">
            {reply || "Your AI-generated WhatsApp reply will appear here."}
          </div>

        </div>

      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
          Why Sellers Need AI WhatsApp Replies
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Indonesian sellers receive hundreds of customer
          inquiries daily on WhatsApp. AI-generated replies
          help businesses respond faster, improve customer
          satisfaction and increase conversion rates.
        </p>

      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mt-24">

        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-8">

          <div>
            <h3 className="text-xl font-semibold">
              Can AI generate professional customer replies?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. AI can instantly generate polite and professional responses for customers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Can sellers use AI replies for WhatsApp Business?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. Many online sellers use AI to speed up customer support and sales conversations.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

