import Link from "next/link";

export const metadata = {
  title: "California Privacy Notice | Caresphere Healthcare LLC",
  description: "California Privacy Notice for Caresphere Healthcare LLC.",
};

export default function CaliforniaPrivacyNoticePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f] md:text-5xl">
          California Privacy Notice
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
          This California Privacy Notice supplements our{" "}
          <Link href="/privacy-policy" className="text-[#3f9d92] hover:underline">
            Privacy Policy
          </Link>{" "}
          and applies to California residents, to the extent the California Consumer Privacy Act
          (CCPA), as amended by the CPRA, applies.
        </p>

        <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
          <p className="m-0 text-sm leading-relaxed text-gray-700">
            <strong className="text-[#1e3a5f]">We do not sell personal information.</strong> If we
            share personal information for cross-context behavioral advertising (as defined by
            California law), you may have the right to opt out.
          </p>
        </div>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          1. Categories of Personal Information We Collect
        </h2>
        <p className="leading-relaxed text-gray-700">
          Depending on how you interact with us, we may collect the following categories:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-4 text-left font-bold text-[#1e3a5f]">
                  Category
                </th>
                <th className="border border-gray-200 p-4 text-left font-bold text-[#1e3a5f]">
                  Examples
                </th>
                <th className="border border-gray-200 p-4 text-left font-bold text-[#1e3a5f]">
                  Business/Commercial Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-4 align-top">Identifiers</td>
                <td className="border border-gray-200 p-4 align-top">
                  Name, email, phone number, IP address
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Respond to inquiries, provide services, security, communications
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 align-top">Customer records</td>
                <td className="border border-gray-200 p-4 align-top">
                  Contact details and service request details
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Provide and manage services, scheduling, customer support
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 align-top">Internet/Network activity</td>
                <td className="border border-gray-200 p-4 align-top">
                  Pages viewed, interactions, device/browser data
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Analytics, site performance, security
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-4 align-top">Geolocation (approx.)</td>
                <td className="border border-gray-200 p-4 align-top">
                  Approximate location derived from IP
                </td>
                <td className="border border-gray-200 p-4 align-top">
                  Fraud prevention, analytics, service area insights
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          We do not intentionally collect sensitive personal information (as defined by California
          law) through standard website inquiry forms. Please avoid entering medical details online.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">2. Sources</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Directly from you (forms, calls, emails)</li>
          <li>Automatically from your device/browser (cookies, logs)</li>
          <li>Service providers that support website operations</li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">3. Retention</h2>
        <p className="leading-relaxed text-gray-700">
          We retain personal information as long as reasonably necessary for the purposes described,
          including legal, accounting, and security needs.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">4. Disclosures</h2>
        <p className="leading-relaxed text-gray-700">We may disclose personal information to:</p>
        <ul className="space-y-2 text-gray-700">
          <li>Service providers/contractors who process it on our behalf</li>
          <li>Professional advisors</li>
          <li>Authorities where required by law</li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">5. Your California Rights</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Right to know/access</li>
          <li>Right to delete</li>
          <li>Right to correct</li>
          <li>Right to opt out of sale/sharing (if applicable)</li>
          <li>Right to limit use/disclosure of sensitive personal information (if applicable)</li>
          <li>Right to non-discrimination</li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          6. How to Exercise Your Rights
        </h2>
        <p className="leading-relaxed text-gray-700">
          Email:{" "}
          <a href="mailto:info@caresphereservices.com" className="text-[#3f9d92] hover:underline">
            info@caresphereservices.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:1234567890" className="text-[#3f9d92] hover:underline">
            (123) 456-7890
          </a>
        </p>
        <p className="text-sm leading-relaxed text-gray-600">
          We may verify your identity before fulfilling requests. Authorized agents may submit
          requests with appropriate documentation.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">7. Do Not Sell or Share</h2>
        <p className="leading-relaxed text-gray-700">
          To opt out of sale/sharing (if applicable), contact us at{" "}
          <a href="mailto:info@caresphereservices.com" className="text-[#3f9d92] hover:underline">
            info@caresphereservices.com
          </a>
          . If we provide a &quot;Do Not Sell or Share My Personal Information&quot; link, you may
          also use that link.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">8. Contact</h2>
        <p className="leading-relaxed text-gray-700">
          Caresphere Healthcare LLC
          <br />
          Email:{" "}
          <a href="mailto:info@caresphereservices.com" className="text-[#3f9d92] hover:underline">
            info@caresphereservices.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:1234567890" className="text-[#3f9d92] hover:underline">
            (123) 456-7890
          </a>
        </p>
      </div>
    </div>
  );
}
