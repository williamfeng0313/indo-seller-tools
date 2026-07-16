import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Indo Seller Tools",
  description:
    "Privacy Policy for Indo Seller Tools, a free tool website for online sellers.",
  alternates: {
    canonical: "https://indosellertools.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <article className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back to Home
        </Link>

        <h1 className="mt-10 text-4xl md:text-5xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-600 leading-8">
          Last updated: July 2026
        </p>

        <p className="mt-8 text-gray-700 leading-8">
          Indo Seller Tools provides free calculators and tools for online
          sellers. This Privacy Policy explains how we collect, use, and protect
          information when you use our website.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Information We Collect</h2>

        <p className="mt-4 text-gray-700 leading-8">
          We may collect basic analytics data such as page views, referrers,
          device type, browser type, and general usage information. We do not
          require users to create an account to use our tools.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Cookies and Advertising</h2>

        <p className="mt-4 text-gray-700 leading-8">
          We may use cookies or similar technologies to understand website usage
          and to display advertisements. Third-party vendors, including Google,
          may use cookies to serve ads based on a user&apos;s prior visits to
          this website or other websites.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          Google&apos;s use of advertising cookies enables it and its partners to
          serve ads to users based on their visit to this site and/or other sites
          on the internet.
        </p>

        <p className="mt-4 text-gray-700 leading-8">
          Users may opt out of personalized advertising by visiting Google Ads
          Settings.
        </p>

        <h2 className="mt-10 text-2xl font-bold">How We Use Information</h2>

        <p className="mt-4 text-gray-700 leading-8">
          We use information to improve our tools, understand website
          performance, fix issues, and improve user experience.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Third-Party Links</h2>

        <p className="mt-4 text-gray-700 leading-8">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those websites.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Contact</h2>

        <p className="mt-4 text-gray-700 leading-8">
          If you have questions about this Privacy Policy, please contact us at:
          fengwilliam45@gmail.com
        </p>
      </article>
    </main>
  );
}