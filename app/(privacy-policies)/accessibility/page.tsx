export const metadata = {
  title: "Accessibility Statement | Caresphere Healthcare LLC",
  description: "Accessibility Statement for the Caresphere Healthcare LLC website.",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f] md:text-5xl">
          Accessibility Statement
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
          Caresphere Healthcare LLC is committed to providing a website that is accessible to the
          widest possible audience, including people with disabilities. We aim to follow best
          practices and standards in accessibility.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">1. Accessibility Standards</h2>
        <p className="leading-relaxed text-gray-700">
          We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA (or
          the most current version reasonably feasible), and we continuously work to improve the
          accessibility of our Site.
        </p>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">2. Ongoing Efforts</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Improving keyboard navigation and focus indicators</li>
          <li>Providing text alternatives for meaningful images</li>
          <li>Maintaining sufficient contrast and readable typography</li>
          <li>Supporting assistive technologies where feasible</li>
        </ul>

        <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
          <p className="mb-3 font-bold text-[#1e3a5f]">Need help?</p>
          <p className="mb-0 text-sm leading-relaxed text-gray-700">
            If you have difficulty accessing any part of our website, we want to help.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
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

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">3. Feedback</h2>
        <p className="leading-relaxed text-gray-700">
          If you encounter an accessibility barrier, please tell us:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>The webpage URL</li>
          <li>A description of the issue</li>
          <li>The assistive technology you&apos;re using (if any)</li>
          <li>Your preferred contact method for follow-up</li>
        </ul>

        <h2 className="mt-12 mb-4 text-2xl font-bold text-[#1e3a5f]">4. Third-Party Content</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Some third-party content or tools (e.g., embedded maps, videos, forms) may not be fully
          accessible. We will work with vendors where possible and provide alternatives when
          reasonable.
        </p>
      </div>
    </div>
  );
}
