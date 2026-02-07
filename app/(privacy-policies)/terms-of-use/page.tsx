import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Caresphere Healthcare LLC",
  description: "Terms of Use for the Caresphere Healthcare LLC website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f] md:text-5xl">
          Terms of Use
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
          These Terms of Use (&quot;<strong>Terms</strong>&quot;) govern your access to and use of
          the Caresphere Healthcare LLC website (the &quot;<strong>Site</strong>&quot;). By using
          the Site, you agree to these Terms. If you do not agree, do not use the Site.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">1. About Our Services</h2>
        <p className="leading-relaxed text-gray-700">
          Caresphere Healthcare LLC provides <strong>non-medical home care</strong> support services
          (e.g., companionship, assistance with daily activities, light housekeeping, meal
          preparation, errands/transportation support, and similar services).{" "}
          <strong>We do not provide medical advice or medical services</strong>. If you have a
          medical emergency, call 911.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">2. Eligibility</h2>
        <p className="leading-relaxed text-gray-700">
          You must be at least 18 years old to use this Site.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">3. Permitted Use</h2>
        <ul className="space-y-2 text-gray-700">
          <li>You may use the Site for lawful purposes and in accordance with these Terms.</li>
          <li>
            You agree not to misuse the Site, attempt unauthorized access, or interfere with
            security or performance.
          </li>
          <li>
            You agree not to submit unlawful, harmful, defamatory, infringing, or misleading
            content.
          </li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">4. Intellectual Property</h2>
        <p className="leading-relaxed text-gray-700">
          The Site and its content (text, graphics, logos, and design) are owned by Caresphere
          Healthcare LLC or licensed to us and are protected by intellectual property laws. You may
          not copy, reproduce, distribute, or create derivative works without permission, except for
          personal, non-commercial use.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">5. Third-Party Links</h2>
        <p className="leading-relaxed text-gray-700">
          The Site may contain links to third-party websites. We do not control and are not
          responsible for their content or practices. Your use of third-party sites is at your own
          risk.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">6. Disclaimers</h2>
        <p className="leading-relaxed text-gray-700">
          The Site is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not
          warrant that the Site will be uninterrupted, error-free, or free of harmful components.
          Content is for general informational purposes only and does not constitute professional or
          medical advice.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">7. Limitation of Liability</h2>
        <p className="leading-relaxed text-gray-700">
          To the fullest extent permitted by law, Caresphere Healthcare LLC and its owners,
          employees, contractors, and affiliates will not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from your use of (or inability to use)
          the Site.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">8. Indemnification</h2>
        <p className="leading-relaxed text-gray-700">
          You agree to indemnify and hold harmless Caresphere Healthcare LLC from claims,
          liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising
          from your use of the Site or violation of these Terms.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">9. Privacy</h2>
        <p className="leading-relaxed text-gray-700">
          Your use of the Site is also subject to our{" "}
          <Link href="/privacy-policy" className="text-[#3f9d92] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">
          10. Changes to the Site and Terms
        </h2>
        <p className="leading-relaxed text-gray-700">
          We may change or discontinue the Site at any time. We may update these Terms periodically.
          Continued use of the Site after updates means you accept the revised Terms.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">11. Governing Law</h2>
        <p className="leading-relaxed text-gray-700">
          These Terms are governed by the laws of the State of California, without regard to
          conflict of law principles.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">12. Contact</h2>
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
