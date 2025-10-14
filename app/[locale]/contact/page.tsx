"use client";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  
  // Refs for sections
  const bannerRef = useRef<HTMLDivElement>(null);
  const contactMethodsRef = useRef<HTMLDivElement>(null);
  const stayInTouchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Banner animation - slide up and fade in
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    
    // Contact methods section - slide up and fade in
    if (contactMethodsRef.current) {
      gsap.fromTo(
        contactMethodsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactMethodsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    
    // Stay in touch section - slide up and fade in
    if (stayInTouchRef.current) {
      gsap.fromTo(
        stayInTouchRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stayInTouchRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="bg-[#f5f7f8] flex flex-col items-center gap-20 pb-16">
      {/* Contact Banner */}
      <section ref={bannerRef} className="relative w-full max-w-[1046px] mx-auto px-3">
        <div className="relative h-[250px] w-full rounded-[18px] overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-inherit"
            style={{ backgroundImage: "url('/banners/contactBanner.png')" }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 rounded-inherit"
            style={{
              background:
                "linear-gradient(to right, rgba(44, 62, 90, 0.95), rgba(0, 116, 183, 0.85), rgba(212, 243, 249, 0.7))",
            }}
          />
          {/* Content */}
          <div className="absolute inset-0 p-8 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="font-['Playfair_Display'] font-bold text-[48px] text-white leading-tight">
                {t("banner.title")}
              </h1>
              <p className="text-white text-[22px]">
                {t("banner.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telephone Support & Email Assistance */}
      <section ref={contactMethodsRef} className="w-full max-w-[1046px] mx-auto px-3 flex gap-12 items-start">
        {/* Telephone Support */}
        <div className="flex-1 flex flex-col gap-10 items-center">
          <h2 className="font-['Playfair_Display'] text-[34px] leading-normal text-[#0c1119] text-center">
            {t("telephoneSupport.title")}
          </h2>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-full w-[52px] h-[52px] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#0c1119]" />
              </div>
              <p className="font-semibold text-[22px] text-[#0c1119]">
                {t("telephoneSupport.phone")}
              </p>
            </div>
            <p className="font-light text-[16px] text-[#0c1119] text-center">
              {t("telephoneSupport.availability")}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[208px] w-[1px] bg-[#0c1119] opacity-20"></div>

        {/* Email Assistance */}
        <div className="flex-1 flex flex-col gap-10 items-center">
          <h2 className="font-['Playfair_Display'] text-[34px] leading-normal text-[#0c1119] text-center">
            {t("emailAssistance.title")}
          </h2>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-full w-[52px] h-[52px] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#0c1119]" />
              </div>
              <p className="font-semibold text-[22px] text-[#0c1119]">
                {t("emailAssistance.email")}
              </p>
            </div>
            <p className="font-light text-[16px] text-[#0c1119] text-center">
              {t("emailAssistance.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stay in Touch Section */}
      <section ref={stayInTouchRef} className="w-full max-w-[1046px] mx-auto px-3 flex gap-12 items-center">
        {/* Image with decorative boxes */}
        <div className="relative flex-shrink-0">
          <div className="absolute bg-[#f6de84] w-[133px] h-[172px] rounded-[22px] top-0 left-0 z-0"></div>
          <div className="absolute bg-[#f6de84] w-[119px] h-[134px] rounded-[22px] bottom-0 right-0 z-0"></div>
          <div className="relative w-[367px] h-[280px] rounded-[18px] overflow-hidden ml-[26px] mt-[20px] z-10">
            <Image
              src="/gallery/contactimages.png"
              alt="Medical consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-7 flex-1">
          <h2 className="font-['Playfair_Display'] text-[48px] leading-tight text-[#0c1119]">
            {t("stayInTouch.title")}
          </h2>
          <p className="text-[18px] text-[#0c1119] leading-normal">
            {t("stayInTouch.description")}
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-start">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119] leading-normal flex-1">
                {t("stayInTouch.address")}
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119]">
                {t("stayInTouch.phone")}
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119]">
                {t("stayInTouch.email")}
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#f6de84] rounded-lg w-[36px] h-[36px] flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-[#0c1119]" />
              </div>
              <p className="text-[18px] text-[#0c1119]">
                {t("stayInTouch.instagram")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
