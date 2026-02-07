export const metadata = {
  title: "Data Security | Caresphere Healthcare LLC",
  description: "Data Security Statement for Caresphere Healthcare LLC.",
};

export default function DataSecurityPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f] md:text-5xl">
          Data Security
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
          Caresphere Healthcare LLC takes reasonable steps to protect the confidentiality and
          security of personal information. This statement describes our general approach to
          information security.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">1. Safeguards</h2>
        <p className="leading-relaxed text-gray-700">
          We use reasonable administrative, technical, and physical safeguards designed to protect
          information, which may include:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>Access controls and least-privilege practices</li>
          <li>Secure hosting and network protections</li>
          <li>Encryption in transit where supported (e.g., HTTPS)</li>
          <li>Vendor reviews and contractual protections where appropriate</li>
          <li>Security monitoring and incident response procedures</li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">2. Important Limitations</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          No method of data transmission or storage is completely secure. While we work to protect
          information, we cannot guarantee absolute security. You are responsible for using secure
          devices and networks when communicating with us online.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">3. Reporting Concerns</h2>
        <p className="leading-relaxed text-gray-700">
          If you believe your information has been compromised or you notice suspicious activity
          related to our Site, contact us:{" "}
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
