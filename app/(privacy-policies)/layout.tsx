"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, BadgeCheck, Menu, Mail, MapPin, Pill } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Sheet = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet));
const SheetContent = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetContent));
const SheetHeader = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetHeader));
const SheetTitle = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTitle));
const SheetTrigger = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger));

export default function PrivacyPoliciesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfbf9]">
      {/* === TOP BAR (Contact Info) === */}
      <div className="hidden bg-[#1e3a5f] px-4 py-3 text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-medium tracking-wide opacity-90">
            Serving Torrance, Carson, Longbeach, Lomita, and Los Angeles
          </span>
          <div className="flex items-center gap-6 text-blue-100">
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-[#3f9d92]" /> License #: 194701220
            </span>
            <a href="mailto:info@caresphereservices.com" className="transition hover:text-white">
              info@caresphereservices.com
            </a>
          </div>
        </div>
      </div>

      {/* === NAVIGATION === */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-1 transition hover:opacity-80">
            <Image
              src="/img/logo.png"
              alt="Caresphere Healthcare"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-2xl font-bold text-[#1e3a5f]">Caresphere</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 font-sans text-sm font-medium tracking-wide text-gray-600 md:flex">
            <Link href="/#services" className="transition hover:text-[#1e3a5f]">
              Our Services
            </Link>
            <Link href="/#about" className="transition hover:text-[#1e3a5f]">
              About Us
            </Link>
            <Link href="/contact">
              <Button className="rounded-full bg-[#1e3a5f] px-6 text-white shadow-lg hover:bg-[#162c4b]">
                Request Care Today
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation (Hamburger) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#1e3a5f]">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-75 flex-col bg-white p-0">
                <SheetHeader className="border-b border-gray-100 p-6 text-left">
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-1 transition hover:opacity-80">
                      <Image
                        src="/img/logo.png"
                        alt="Caresphere Healthcare"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                      <span className="font-serif text-2xl font-bold text-[#1e3a5f]">
                        Caresphere
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-1 flex-col gap-6 p-6">
                  <Link
                    href="/#services"
                    className="text-lg font-medium text-gray-700 transition hover:text-[#1e3a5f]"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/#about"
                    className="text-lg font-medium text-gray-700 transition hover:text-[#1e3a5f]"
                  >
                    About Us
                  </Link>
                  <Link href="/contact">
                    <Button className="w-full rounded-full bg-[#1e3a5f] px-6 text-white shadow-lg hover:bg-[#162c4b]">
                      Request Care Today
                    </Button>
                  </Link>

                  <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <BadgeCheck className="size-5 text-[#3f9d92]" />
                      <span>License #: 194701220</span>
                    </div>
                    <a
                      href="mailto:info@caresphereservices.com"
                      className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#1e3a5f]"
                    >
                      <Mail className="size-5 text-[#3f9d92]" />
                      <span>info@caresphereservices.com</span>
                    </a>
                    <a
                      href="tel:1234567890"
                      className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#1e3a5f]"
                    >
                      <Phone className="size-5 text-[#3f9d92]" />
                      <span>(123) 456-7890</span>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* === MAIN CONTENT === */}
      <main className="flex-1">{children}</main>

      {/* === FOOTER === */}
      <footer className="border-t border-gray-800 bg-gray-900 px-5 pt-20 pb-10 text-gray-300 md:px-6">
        <div className="mx-auto mb-16 grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 flex items-center gap-3 font-serif text-3xl font-bold text-white">
              <Image
                src="/img/logo.png"
                alt="Caresphere Healthcare LLC"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span>Caresphere</span>
            </div>
            <p className="mb-6 max-w-sm text-gray-400">
              Compassionate, reliable home care services for seniors and adults across Los Angeles.
              Fully licensed and insured.
            </p>
            <div className="flex w-fit items-center gap-2 rounded-lg bg-gray-800/50 px-4 py-2 font-semibold text-[#3f9d92]">
              <BadgeCheck className="size-5" /> License Number: 194701220
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-[#3f9d92]" />
                <a href="tel:1234567890" className="transition hover:text-white">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Pill className="size-5 text-[#3f9d92]" />
                <a
                  href="mailto:info@caresphereservices.com"
                  className="transition hover:text-white"
                >
                  info@caresphereservices.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-[#3f9d92]" />
                <span>Torrance, Carson, Longbeach, Lomita, and Los Angeles</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="transition hover:text-[#3f9d92]">
                  Free Assessment
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-[#3f9d92]">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="transition hover:text-[#3f9d92]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#3f9d92]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy Policy Links */}
        <div className="border-t border-gray-800 bg-gray-800/50 px-6 py-7">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-center text-sm text-gray-300">
            <Link href="/privacy-policy" className="transition hover:text-[#3f9d92]">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/terms-of-use" className="transition hover:text-[#3f9d92]">
              Terms of Use
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/cookie-policy" className="transition hover:text-[#3f9d92]">
              Cookie Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/accessibility" className="transition hover:text-[#3f9d92]">
              Accessibility
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/california-privacy-notice" className="transition hover:text-[#3f9d92]">
              California Privacy Notice
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/data-security" className="transition hover:text-[#3f9d92]">
              Data Security
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Caresphere Healthcare LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
