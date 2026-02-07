import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Caresphere Healthcare LLC",
  description: "Cookie Policy for the Caresphere Healthcare LLC website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f] md:text-5xl">
          Cookie Policy
        </h1>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            <strong>Effective Date:</strong> February 7, 2026
          </p>
          <p>
            <strong>Last Updated:</strong> February 7, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed text-gray-700">
          This Cookie Policy explains how Caresphere Healthcare LLC uses cookies and similar
          technologies on our website. For more information about how we handle personal
          information, see our{" "}
          <Link href="/privacy-policy" className="text-[#3f9d92] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">1. What Are Cookies?</h2>
        <p className="leading-relaxed text-gray-700">
          Cookies are small text files stored on your device when you visit a website. They help
          websites function, improve performance, and remember preferences. Similar technologies
          include pixels, local storage, and SDKs.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          2. Types of Cookies We May Use
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-4 text-left font-bold text-[#1e3a5f]">
                  Category
                </th>
                <th className="border border-gray-200 p-4 text-left font-bold text-[#1e3a5f]">
                  Purpose
                </th>
                <th className="border border-gray-200 p-4 text-left font-bold text-[#1e3a5f]">
                  Examples
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-4 align-top">
                  <strong>Essential</strong>
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Required for basic functionality, security, and site operations.
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Session cookies, security cookies, load balancing
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 align-top">
                  <strong>Functional</strong>
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Remember your preferences and improve user experience.
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Language settings, form persistence
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 align-top">
                  <strong>Analytics</strong>
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Help us understand how visitors use the site and improve performance.
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Page views, traffic sources, time on page
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 align-top">
                  <strong>Advertising/Targeting</strong> (if used)
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Deliver relevant ads and measure campaigns; may be considered &quot;sharing&quot;
                  under California law.
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Ad pixels, cross-site tracking (only if enabled)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">3. Managing Cookies</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Browser controls:</strong> Most browsers let you delete or block cookies.
            Blocking essential cookies may affect site functionality.
          </li>
          <li>
            <strong>Consent banner:</strong> If we use non-essential cookies, you may be able to set
            preferences using our cookie banner (where available).
          </li>
          <li>
            <strong>Do Not Track:</strong> Some browsers send &quot;Do Not Track&quot; signals. Our
            Site may not respond to all such signals due to varying standards.
          </li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          4. Changes to This Cookie Policy
        </h2>
        <p className="leading-relaxed text-gray-700">
          We may update this Cookie Policy from time to time and will update the &quot;Last
          Updated&quot; date above.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">5. Contact</h2>
        <p className="leading-relaxed text-gray-700">
          Questions? Contact us at{" "}
          <a href="mailto:info@caresphereservices.com" className="text-[#3f9d92] hover:underline">
            info@caresphereservices.com
          </a>{" "}
          or call{" "}
          <a href="tel:1234567890" className="text-[#3f9d92] hover:underline">
            (123) 456-7890
          </a>
          .
        </p>
      </div>
    </div>
  );
}
