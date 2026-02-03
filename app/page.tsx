import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Calendar,
  Heart,
  UserCheck,
  Shield,
  CheckCircle2,
  MapPin,
  Car,
  Pill,
  Home as HomeIcon,
  Stethoscope,
  ArrowRight,
  BadgeCheck,
  Menu,
  Mail,
} from "lucide-react";
import Image from "next/image";
const Sheet = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.Sheet));
const SheetContent = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetContent));
const SheetHeader = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetHeader));
const SheetTitle = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTitle));
const SheetTrigger = dynamic(() => import("@/components/ui/sheet").then((mod) => mod.SheetTrigger));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfbf9]">
      {/* === TOP BAR (Contact Info) === */}
      <div className="hidden bg-[#1e3a5f] px-4 py-3 text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-medium tracking-wide opacity-90">
            Serving Los Angeles & Surrounding Areas
          </span>
          <div className="flex items-center gap-6 text-blue-100">
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-[#3f9d92]" /> License #: 194701220
            </span>
            <a href="mailto:caresphere@outlook.com" className="transition hover:text-white">
              caresphere@outlook.com
            </a>
          </div>
        </div>
      </div>

      {/* === NAVIGATION === */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-[#1e3a5f] transition hover:opacity-80"
          >
            Caresphere<span className="text-[#3f9d92]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 font-sans text-sm font-medium tracking-wide text-gray-600 md:flex">
            <a href="#services" className="transition hover:text-[#1e3a5f]">
              Our Services
            </a>
            <a href="#about" className="transition hover:text-[#1e3a5f]">
              About Us
            </a>
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
                  <SheetTitle className="font-serif text-2xl font-bold text-[#1e3a5f]">
                    Caresphere<span className="text-[#3f9d92]">.</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-6">
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-4">
                    <p className="text-xs font-bold tracking-widest text-[#3f9d92] uppercase">
                      Menu
                    </p>
                    <a
                      href="#services"
                      className="text-lg font-medium text-gray-700 transition hover:text-[#1e3a5f]"
                    >
                      Our Services
                    </a>
                    <a
                      href="#about"
                      className="text-lg font-medium text-gray-700 transition hover:text-[#1e3a5f]"
                    >
                      About Us
                    </a>
                    <Link
                      href="/contact"
                      className="text-lg font-medium text-gray-700 transition hover:text-[#1e3a5f]"
                    >
                      Contact Us
                    </Link>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4">
                    <Link href="/contact">
                      <Button className="w-full rounded-full bg-[#1e3a5f] py-6 text-lg font-bold text-white shadow-lg transition-colors hover:bg-[#162c4b]">
                        Request Care Today
                      </Button>
                    </Link>
                  </div>

                  {/* Contact Info (Repurposed from Top Bar for mobile) */}
                  <div className="mt-auto border-t border-gray-100 pt-8">
                    <p className="mb-4 text-xs font-bold tracking-widest text-[#3f9d92] uppercase">
                      Quick Contact
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <BadgeCheck className="size-5 text-[#3f9d92]" />
                        <span>License #: 194701220</span>
                      </div>
                      <a
                        href="mailto:caresphere@outlook.com"
                        className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#1e3a5f]"
                      >
                        <Mail className="size-5 text-[#3f9d92]" />
                        <span>caresphere@outlook.com</span>
                      </a>
                      <a
                        href="tel:1234567890"
                        className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#1e3a5f]"
                      >
                        <Phone className="size-5 text-[#3f9d92]" />
                        <span>(123) 456-7890</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* === HERO SECTION (Background Image) === */}
      <section className="relative flex min-h-162.5 items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <Image
          src="https://i.postimg.cc/gJdnvCnQ/caresphere-image5.jpg"
          alt="Compassionate home care"
          fill
          priority // This tells Next.js to load this image immediately
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-[#1e3a5f]/85 via-[#1e3a5f]/70 to-transparent"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div className="max-w-2xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3f9d92] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3f9d92]"></span>
              </span>
              Licensed Non-Medical Home Care
            </div>

            <h1 className="mb-6 font-serif text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
              Compassionate, Reliable Home Care <br />
              <span className="text-[#3f9d92]">You Can Trust</span>
            </h1>

            <p className="mb-8 max-w-lg text-xl leading-relaxed font-light text-blue-100">
              Licensed non-medical home care services supporting seniors and adults to live safely
              and comfortably at home across Los Angeles.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 w-full rounded-full bg-[#3f9d92] px-8 text-lg font-bold text-white shadow-xl hover:bg-[#2d7a70] sm:w-auto"
                >
                  <Phone className="mr-2 size-5" /> Call for Free Assessment
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-14 w-full rounded-full border border-white/30 bg-white/10 px-8 text-lg text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#1e3a5f] sm:w-auto"
                >
                  <Calendar className="mr-2 size-5" /> Request Care Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === WHO WE SERVE (Split Section) === */}
      <section className="bg-[#fcfbf9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-[#1e3a5f]">Who We Serve</h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-[#3f9d92]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* For Families */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-50 overflow-hidden bg-blue-50">
                {/* Abstract Image Placeholder */}
                <div className="absolute inset-0 bg-[#1e3a5f]/70 bg-[url('https://i.postimg.cc/7YkZFMKg/caresphere-image3.jpg')] bg-cover bg-center mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 font-serif text-3xl font-bold text-white">
                  For Families
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg leading-relaxed text-gray-600">
                  When a loved one needs extra support, choosing the right caregiver matters. At{" "}
                  <strong>Caresphere Healthcare LLC</strong>, we provide dependable, compassionate
                  care that gives families peace of mind.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center font-bold text-[#3f9d92] hover:underline"
                >
                  Find Support <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>

            {/* For Professionals */}
            {/* bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop')] */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-50 overflow-hidden bg-teal-50">
                {/* New Image: Doctor talking with senior, professional & clean */}
                <div className="absolute inset-0 bg-[#3f9d92] bg-[url('https://i.postimg.cc/FsRjLvQ7/caresphere-image2.jpg')] bg-cover bg-center opacity-90 mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 font-serif text-3xl font-bold text-white">
                  For Professionals
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg leading-relaxed text-gray-600">
                  <strong>Caresphere Healthcare LLC</strong> partners with hospitals, social
                  workers, and community organizations to deliver consistent, high-quality
                  non-medical home care with clear communication and reliable follow-through.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center font-bold text-[#1e3a5f] hover:underline"
                >
                  Partner With Us <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === OUR SERVICES (Icon Grid) === */}
      <section id="services" className="relative bg-white px-6 py-24">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-[0.03]"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-wider text-[#3f9d92] uppercase">
              Our Services
            </span>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1e3a5f]">
              Personalized Home Care
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#3f9d92]"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Personal Care Assistance",
                icon: UserCheck,
                color: "bg-blue-100 text-blue-700",
              },
              {
                title: "Companionship & Supervision",
                icon: Heart,
                color: "bg-red-100 text-red-700",
              },
              {
                title: "Meal Preparation",
                icon: Stethoscope,
                color: "bg-green-100 text-green-700",
              }, // Using Stethoscope as 'Health' proxy or find a Spoon icon
              {
                title: "Light Housekeeping",
                icon: HomeIcon,
                color: "bg-orange-100 text-orange-700",
              },
              { title: "Medication Reminders", icon: Pill, color: "bg-purple-100 text-purple-700" },
              {
                title: "Transportation & Errands",
                icon: Car,
                color: "bg-yellow-100 text-yellow-700",
              },
              {
                title: "Alzheimer’s & Dementia Support",
                icon: Shield,
                color: "bg-teal-100 text-teal-700",
              },
              {
                title: "Customized Care Plans",
                icon: CheckCircle2,
                color: "bg-gray-100 text-gray-700",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="group cursor-default border border-gray-100 shadow-sm transition-all duration-300 hover:border-[#3f9d92] hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div
                    className={`mb-6 flex size-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${service.color}`}
                  >
                    <service.icon className="size-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f]">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US (Image Left, Checklist Right) === */}
      <section className="relative overflow-hidden bg-[#1e3a5f] py-24">
        {/* Decorative Circle */}
        <div className="pointer-events-none absolute top-0 right-0 h-125 w-125 rounded-full bg-[#3f9d92] opacity-20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-3xl border-t-4 border-l-4 border-[#3f9d92]"></div>
            <div className="overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl">
              <Image
                src="https://i.postimg.cc/brdjQrTL/caresphere-image1.jpg"
                alt="Caregiver holding senior hand"
                className="h-auto w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute -right-6 -bottom-6 max-w-50 rounded-xl bg-white p-6 shadow-xl">
              <p className="font-serif text-lg font-bold text-[#1e3a5f]">100% Licensed</p>
              <p className="text-sm text-gray-500">By the State of California</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-white">
            <h2 className="mb-8 font-serif text-4xl font-bold lg:text-5xl">
              Why Choose Caresphere Healthcare LLC
            </h2>

            <div className="space-y-6">
              {[
                "Fully licensed by the State of California",
                "Thorough caregiver screening and training",
                "Personalized, client-centered care plans",
                "Reliable scheduling and responsive communication",
                "Commitment to dignity, safety, and compassion",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-[#3f9d92]" />
                  <span className="text-lg font-medium text-blue-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION === */}
      <section className="bg-[#3f9d92] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl">
            Need care or making a referral?
          </h2>
          <p className="mb-10 text-xl opacity-90">
            Contact Caresphere Healthcare LLC today for a free in-home assessment.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-16 rounded-full bg-white px-10 text-lg font-bold text-[#1e3a5f] shadow-xl hover:bg-blue-50"
              >
                Get a Free Assessment
              </Button>
            </Link>
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 px-6 font-bold text-white hover:underline"
            >
              <Phone className="size-5" /> Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* === ABOUT US (Bento Grid) === */}
      <section id="about" className="bg-[#fcfbf9] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-wider text-[#3f9d92] uppercase">
              About Us
            </span>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1e3a5f]">
              Dedicated to Dignity
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Who We Are */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-[#1e3a5f]">
                <UserCheck className="size-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-[#1e3a5f]">Who We Are</h3>
              <p className="leading-relaxed text-gray-600">
                Caresphere Healthcare LLC is a licensed non-medical home care agency dedicated to
                helping individuals maintain independence, dignity, and quality of life at home.
              </p>
            </div>

            {/* Our Mission */}
            <div className="transform rounded-2xl bg-[#1e3a5f] p-8 text-white shadow-lg md:-translate-y-4">
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-[#3f9d92] text-white">
                <Shield className="size-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold">Our Mission</h3>
              <p className="leading-relaxed text-blue-100">
                To deliver compassionate, reliable home care services that support clients and
                provide peace of mind for families and referral partners.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-teal-100 text-[#3f9d92]">
                <Heart className="size-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-[#1e3a5f]">Our Commitment</h3>
              <p className="leading-relaxed text-gray-600">
                We work collaboratively with families and professionals to ensure continuity of
                care, clear communication, and dependable service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER (Contact Info included here) === */}
      <footer className="border-t border-gray-800 bg-gray-900 px-6 pt-20 pb-10 text-gray-300">
        <div className="mx-auto mb-16 grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 font-serif text-3xl font-bold text-white">
              Caresphere<span className="text-[#3f9d92]">.</span>
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
                <Pill className="size-5 text-[#3f9d92]" />{" "}
                {/* Using Pill as Email generic or swap for Mail */}
                <a href="mailto:caresphere@outlook.com" className="transition hover:text-white">
                  caresphere@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-[#3f9d92]" />
                <span>
                  Los Angeles & <br />
                  Surrounding Areas
                </span>
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
                <a href="#services" className="transition hover:text-[#3f9d92]">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-[#3f9d92]">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#3f9d92]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Caresphere Healthcare LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
