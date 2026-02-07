import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Caresphere Healthcare LLC",
  description:
    "Privacy Policy for Caresphere Healthcare, a non-medical home care agency in California.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f] md:text-5xl">
          Privacy Policy
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
          Caresphere Healthcare LLC (&quot;<strong>Caresphere</strong>&quot; or &quot;
          <strong>we</strong>&quot;) respects your privacy. This Privacy Policy explains how we
          collect, use, disclose, and protect information when you visit our website or contact us
          about our non-medical home care services in California.
        </p>

        <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
          <p className="m-0 text-sm leading-relaxed text-gray-700">
            <strong className="text-[#1e3a5f]">Quick summary:</strong> We use information to respond
            to inquiries, provide services, operate our website, and comply with law. We do not sell
            your personal information. If we ever share data for targeted advertising/cross-context
            behavioral advertising, you may have the right to opt out under California law.
          </p>
        </div>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">1. Information We Collect</h2>
        <p className="leading-relaxed text-gray-700">
          We may collect information in the following ways:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Information you provide</strong> (e.g., when you fill out forms, request a
            consultation, or contact us): name, email, phone number, address/city, preferred
            services, and message details.
          </li>
          <li>
            <strong>Care inquiry details</strong>: service needs, scheduling preferences, and
            general information you share to help us evaluate fit. (Please avoid entering sensitive
            medical details through website forms.)
          </li>
          <li>
            <strong>Website usage data</strong>: IP address, device/browser type, pages viewed, and
            approximate location derived from IP.
          </li>
          <li>
            <strong>Cookies & similar technologies</strong>: to remember preferences and understand
            website performance (see our{" "}
            <Link href="/cookie-policy" className="text-[#3f9d92] hover:underline">
              Cookie Policy
            </Link>
            ).
          </li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">2. How We Use Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li>To respond to questions, requests, and consultation inquiries.</li>
          <li>To provide and improve our services and website experience.</li>
          <li>To communicate about scheduling, updates, and operational notices.</li>
          <li>To analyze website traffic and improve content and performance.</li>
          <li>To detect, prevent, and address fraud, abuse, or security issues.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">3. Legal Bases (General)</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Depending on context, our processing may be based on providing requested services, our
          legitimate interests in operating and securing the site, compliance with law, and/or your
          consent (e.g., optional cookies where required).
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          4. How We Share Information
        </h2>
        <p className="leading-relaxed text-gray-700">
          We do not sell your personal information. We may share information with:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Service providers</strong> who help operate our website and business (e.g.,
            hosting, analytics, email delivery, customer relationship tools), under appropriate
            confidentiality and security obligations.
          </li>
          <li>
            <strong>Professional advisors</strong> (e.g., attorneys, accountants) as needed.
          </li>
          <li>
            <strong>Authorities</strong> if required by law, subpoena, court order, or to protect
            rights, safety, and security.
          </li>
          <li>
            <strong>Business transfers</strong> (e.g., merger, acquisition, or asset sale), where
            information may be transferred as part of the transaction.
          </li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">5. Cookies and Analytics</h2>
        <p className="leading-relaxed text-gray-700">
          We may use cookies and similar tools to operate our site and understand how visitors use
          it. You can control cookies through your browser settings and (where implemented) our
          cookie consent banner. For details, see our{" "}
          <Link href="/cookie-policy" className="text-[#3f9d92] hover:underline">
            Cookie Policy
          </Link>
          .
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">6. Data Retention</h2>
        <p className="leading-relaxed text-gray-700">
          We keep information for as long as reasonably necessary for the purposes described in this
          Policy, including to provide services, comply with legal obligations, resolve disputes,
          and enforce agreements. Retention periods vary depending on the type of information and
          why we collected it.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">7. Data Security</h2>
        <p className="leading-relaxed text-gray-700">
          We use reasonable administrative, technical, and physical safeguards designed to protect
          information. However, no method of transmission or storage is completely secure, and we
          cannot guarantee absolute security.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">8. Children&apos;s Privacy</h2>
        <p className="leading-relaxed text-gray-700">
          Our website is not directed to children under 13, and we do not knowingly collect personal
          information from children under 13. If you believe a child has provided personal
          information, contact us so we can delete it.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          9. California Privacy Rights (CCPA/CPRA)
        </h2>
        <p className="leading-relaxed text-gray-700">
          If you are a California resident, you may have rights under the California Consumer
          Privacy Act as amended by the CPRA, depending on whether the law applies to our business
          and the information at issue. These rights may include:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Right to Know/Access</strong>: request categories and specific pieces of
            personal information we collected.
          </li>
          <li>
            <strong>Right to Delete</strong>: request deletion of personal information, subject to
            exceptions.
          </li>
          <li>
            <strong>Right to Correct</strong>: request correction of inaccurate personal
            information.
          </li>
          <li>
            <strong>Right to Opt Out</strong>: opt out of &quot;sale&quot; or &quot;sharing&quot;
            (as defined by California law), if applicable.
          </li>
          <li>
            <strong>Non-Discrimination</strong>: you will not receive discriminatory treatment for
            exercising your rights.
          </li>
        </ul>

        <h3 className="mt-8 mb-4 text-xl font-bold text-[#1e3a5f]">How to Submit a Request</h3>
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
          We may need to verify your identity before processing your request. Authorized agents may
          submit requests on your behalf where permitted by law.
        </p>

        <h3 className="mt-8 mb-4 text-xl font-bold text-[#1e3a5f]">
          Do Not Sell or Share My Personal Information
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          If we engage in activities considered &quot;selling&quot; or &quot;sharing&quot; under
          California law, you can opt out by contacting us at{" "}
          <a href="mailto:info@caresphereservices.com" className="text-[#3f9d92] hover:underline">
            info@caresphereservices.com
          </a>{" "}
          and/or by using an on-site &quot;Do Not Sell or Share&quot; link if provided.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">10. Your Choices</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Marketing communications</strong>: You can opt out of promotional emails by
            using the unsubscribe link (if provided) or contacting us.
          </li>
          <li>
            <strong>Cookies</strong>: Adjust cookie settings via your browser and our cookie banner
            (if available).
          </li>
          <li>
            <strong>Updating information</strong>: Contact us to update or correct your information.
          </li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">11. Third-Party Links</h2>
        <p className="leading-relaxed text-gray-700">
          Our website may link to third-party sites. We are not responsible for their privacy
          practices. Please review those policies.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">12. Changes to This Policy</h2>
        <p className="leading-relaxed text-gray-700">
          We may update this Policy from time to time. We will update the &quot;Last Updated&quot;
          date above when changes are made.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">13. Contact Us</h2>
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
