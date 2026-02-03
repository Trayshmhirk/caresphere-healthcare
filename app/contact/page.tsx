"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, ArrowLeft, BadgeCheck, Clock, Calendar } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show a loading toast that we can dismiss or update later
    const toastId = toast.loading("Sending your request...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Throw the specific error from the API (e.g. "Missing required fields")
        throw new Error(data.error || "Something went wrong.");
      }

      // Success!
      toast.success(data.message, { id: toastId }); // Updates the loading toast to success

      // Clear the form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to connect. Please check your internet.",
        { id: toastId } // Updates the loading toast to error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9]">
      {/* Simple Header */}
      <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-1 transition hover:opacity-80">
            <Image
              src="/img/logo.png" // Crop your logo to just the circle
              alt="Caresphere Healthcare"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-2xl font-bold text-[#1e3a5f]">
              Caresphere<span className="text-[#3f9d92]">.</span>
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:bg-blue-50 hover:text-[#1e3a5f]">
              <ArrowLeft className="mr-2 size-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-8 pb-14 md:py-10 lg:py-20">
        <div className="grid min-h-150 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl lg:grid-cols-12">
          {/* === LEFT SIDE: Contact Info (Dark Navy) === */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#1e3a5f] p-7 text-white md:p-10 lg:col-span-5 lg:p-14">
            {/* Decorative Background Elements */}
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#3f9d92] opacity-20 blur-[80px]"></div>

            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#3f9d92] px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                <Calendar className="size-4" /> Free In-Home Assessment Available
              </div>

              <h1 className="mb-6 font-serif text-4xl leading-tight font-bold lg:text-5xl">
                Let&apos;s discuss your care needs.
              </h1>

              <p className="mb-10 text-lg leading-relaxed font-light text-blue-100">
                Need care or making a referral? Contact Caresphere Healthcare LLC today. We are
                fully licensed and ready to help.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <a
                  href="tel:1234567890"
                  className="group flex items-start gap-4 transition hover:opacity-90"
                >
                  <div className="rounded-xl bg-white/10 p-3 transition-colors group-hover:bg-[#3f9d92]">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold tracking-wider text-blue-300 uppercase">
                      Call Us Directly
                    </p>
                    <p className="text-xl font-bold">(123) 456-7890</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:caresphere@outlook.com"
                  className="group flex items-start gap-4 transition hover:opacity-90"
                >
                  <div className="rounded-xl bg-white/10 p-3 transition-colors group-hover:bg-[#3f9d92]">
                    <Mail className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold tracking-wider text-blue-300 uppercase">
                      Email Us
                    </p>
                    <p className="text-xl font-bold break-all">caresphere@outlook.com</p>
                  </div>
                </a>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold tracking-wider text-blue-300 uppercase">
                      Service Areas
                    </p>
                    <p className="text-lg font-medium">Los Angeles & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Footer */}
            <div className="relative z-10 mt-12 border-t border-blue-800/50 pt-8">
              <div className="flex items-center gap-3 text-blue-200">
                <BadgeCheck className="size-6 text-[#3f9d92]" />
                <div>
                  <p className="font-bold text-white">License Number: 194701220</p>
                  <p className="text-xs opacity-70">Licensed by the State of California</p>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT SIDE: Form (Clean White) === */}
          <div className="relative bg-white p-7 md:p-10 lg:col-span-7 lg:p-14">
            <div className="mx-auto max-w-md lg:max-w-none">
              <h2 className="mb-2 font-serif text-2xl font-bold text-[#1e3a5f]">
                Send us a message
              </h2>
              <p className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                <Clock className="size-4" /> We usually respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <Input
                      placeholder="e.g. John Doe"
                      required
                      className="h-12 border-gray-200 bg-gray-50 focus:border-[#3f9d92] focus:ring-[#3f9d92]/20"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <Input
                      placeholder="e.g. (555) 123-4567"
                      type="tel"
                      required
                      className="h-12 border-gray-200 bg-gray-50 focus:border-[#3f9d92] focus:ring-[#3f9d92]/20"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <Input
                    placeholder="e.g. john@example.com"
                    type="email"
                    required
                    className="h-12 border-gray-200 bg-gray-50 focus:border-[#3f9d92] focus:ring-[#3f9d92]/20"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">How can we help?</label>
                  <Textarea
                    placeholder="Please share details about your loved one's care needs..."
                    className="min-h-40 resize-none border-gray-200 bg-gray-50 p-4 focus:border-[#3f9d92] focus:ring-[#3f9d92]/20"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-4 h-14 w-full rounded-xl bg-[#1e3a5f] text-lg font-bold text-white shadow-lg transition-all hover:bg-[#162c4b] hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Free Assessment"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
