"use client";

import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DoctorsPage() {
  const t = useTranslations("DoctorsPage");
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>(tabParam || "raunak");

  // Refs for Dr. Raunak sections
  const raunakHeroRef = useRef<HTMLDivElement>(null);
  const raunakExpertiseRef = useRef<HTMLDivElement>(null);
  const raunakTimelineRef = useRef<HTMLDivElement>(null);
  const raunakGalleryRef = useRef<HTMLDivElement>(null);
  // Timeline parts
  const raunakTimelineIcon1Ref = useRef<HTMLDivElement>(null);
  const raunakTimelineTrainingRef = useRef<HTMLDivElement>(null);
  const raunakTimelineIcon2Ref = useRef<HTMLDivElement>(null);
  const raunakTimelineQualificationsRef = useRef<HTMLDivElement>(null);
  const raunakTimelineIcon3Ref = useRef<HTMLDivElement>(null);
  const raunakTimelineCareRef = useRef<HTMLDivElement>(null);

  // Refs for Dr. Kavisha sections
  const kavishaHeroRef = useRef<HTMLDivElement>(null);
  const kavishaExpertiseRef = useRef<HTMLDivElement>(null);
  const kavishaTimelineRef = useRef<HTMLDivElement>(null);
  const kavishaGalleryRef = useRef<HTMLDivElement>(null);
  // Timeline parts
  const kavishaTimelineIcon1Ref = useRef<HTMLDivElement>(null);
  const kavishaTimelineExperienceRef = useRef<HTMLDivElement>(null);
  const kavishaTimelineIcon2Ref = useRef<HTMLDivElement>(null);
  const kavishaTimelineQualificationsRef = useRef<HTMLDivElement>(null);
  const kavishaTimelineIcon3Ref = useRef<HTMLDivElement>(null);
  const kavishaTimelineCoursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  useEffect(() => {
    // Animate sections based on active tab
    const animateSection = (ref: React.RefObject<HTMLElement>) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    // Small delay to ensure DOM is ready after tab switch
    const timer = setTimeout(() => {
      if (activeTab === "raunak") {
        animateSection(raunakHeroRef);
        animateSection(raunakExpertiseRef);
        animateSection(raunakTimelineRef);
        // Timeline parts
        animateSection(raunakTimelineIcon1Ref);
        animateSection(raunakTimelineTrainingRef);
        animateSection(raunakTimelineIcon2Ref);
        animateSection(raunakTimelineQualificationsRef);
        animateSection(raunakTimelineIcon3Ref);
        animateSection(raunakTimelineCareRef);
        animateSection(raunakGalleryRef);
      } else if (activeTab === "kavisha") {
        animateSection(kavishaHeroRef);
        animateSection(kavishaExpertiseRef);
        animateSection(kavishaTimelineRef);
        // Timeline parts
        animateSection(kavishaTimelineIcon1Ref);
        animateSection(kavishaTimelineExperienceRef);
        animateSection(kavishaTimelineIcon2Ref);
        animateSection(kavishaTimelineQualificationsRef);
        animateSection(kavishaTimelineIcon3Ref);
        animateSection(kavishaTimelineCoursesRef);
        animateSection(kavishaGalleryRef);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeTab]);
  // Dr. Raunak's expertise areas
  const raunakExpertise = [
    {
      title: t("drRaunak.rhinoplasty"),
      icon: { src: "/icons/rhinoplasty.svg" },
    },
    { title: t("drRaunak.skinSurgery"), icon: { src: "/icons/skin.svg" } },
    {
      title: t("drRaunak.liposuction"),
      icon: { src: "/icons/liposuction.svg" },
    },
    {
      title: t("drRaunak.hairTransplant"),
      icon: { src: "/icons/hairtransplant.svg" },
    },
    { title: t("drRaunak.otoplasty"), icon: { src: "/icons/otoplasty.svg" } },
    { title: t("drRaunak.tummyTuck"), icon: { src: "/icons/tummytuck.svg" } },
    { title: t("drRaunak.peels"), icon: { src: "/icons/peels.svg" } },
  ];

  // Dr. Kavisha's expertise areas
  const kavishaExpertise = [
    {
      title: t("drKavisha.gynecology"),
      icon: { src: "/icons/gynecology.svg" },
    },
    { title: t("drKavisha.prp"), icon: { src: "/icons/prp.svg" } },
    {
      title: t("drKavisha.infertilityCounselling"),
      icon: { src: "/icons/infertilitycounselling.svg" },
    },
  ];

  return (
    <div className="bg-[#f5f7f8] flex flex-col items-center pb-0">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="w-full max-w-[1046px] px-3 mx-auto pt-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="raunak" className="text-lg">
              {t("drRaunak.name")}
            </TabsTrigger>
            <TabsTrigger value="kavisha" className="text-lg">
              {t("drKavisha.name")}
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Dr. Raunak Shinde Tab */}
        <TabsContent value="raunak" className="mt-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-20 pb-16 w-full max-w-[1046px] px-3 mx-auto">
              {/* Hero Section */}
              <section
                ref={raunakHeroRef}
                className="bg-[#d5edfd] rounded-[18px] w-full p-[36px] flex items-center gap-[64px]"
              >
                <div className="relative w-[286px] h-[376px] rounded-[22px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/gallery/raunak.png"
                    alt="Dr. Raunak Shinde"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[59px] text-[#0c1119] flex-1">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-['Playfair_Display'] font-bold text-[48px] leading-normal">
                      {t("drRaunak.name")}
                    </h1>
                    <p className="font-semibold text-[22px] leading-normal">
                      {t("drRaunak.tagline")}
                    </p>
                  </div>
                  <div className="text-[18px] leading-normal">
                    <p className="mb-3">{t("drRaunak.intro1")}</p>
                    <p>{t("drRaunak.intro2")}</p>
                  </div>
                </div>
              </section>

              {/* Expertise Section */}
              <section
                ref={raunakExpertiseRef}
                className="w-full flex flex-col gap-[51px] items-center"
              >
                <div className="flex flex-col gap-2 items-center text-center text-[#0c1119] max-w-[642px]">
                  <h2 className="font-['Playfair_Display'] text-[34px] leading-normal">
                    {t("drRaunak.expertiseTitle")}
                  </h2>
                  <p className="text-[18px] leading-normal">
                    {t("drRaunak.expertiseDescription")}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-[32px] w-full">
                  {raunakExpertise.map((area) => (
                    <div key={area.title}>
                      <ServiceCard
                        title={area.title}
                        icon={area.icon}
                        variant="centered"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Timeline Section - Full Width */}
            <section
              ref={raunakTimelineRef}
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="flex flex-col items-center justify-between h-[820px] w-[320px]">
                <div
                  ref={raunakTimelineIcon1Ref}
                  className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center"
                >
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hat.svg"
                      alt="Education"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div
                  ref={raunakTimelineTrainingRef}
                  className="flex flex-col gap-4 items-center text-center text-[#0c1119]"
                >
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    {t("drRaunak.trainingTitle")}
                  </h3>
                  <div className="font-semibold text-[16px] leading-normal">
                    <p className="mb-0">{t("drRaunak.training1")}</p>
                    <p className="mb-0">{t("drRaunak.training2")}</p>
                    <p>{t("drRaunak.training3")}</p>
                  </div>
                </div>

                <div
                  ref={raunakTimelineIcon2Ref}
                  className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center"
                >
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hands.svg"
                      alt="Care"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="h-[600px] w-[2px] bg-[#0c1119] opacity-20"></div>

              <div className="flex flex-col items-center justify-between h-[720px] w-[400px]">
                <div
                  ref={raunakTimelineQualificationsRef}
                  className="flex flex-col gap-4 items-center text-center text-[#0c1119]"
                >
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    {t("drRaunak.qualificationsTitle")}
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>{t("drRaunak.qualification1")}</li>
                    <li>{t("drRaunak.qualification2")}</li>
                    <li>{t("drRaunak.qualification3")}</li>
                    <li>{t("drRaunak.qualification4")}</li>
                  </ul>
                </div>

                <div
                  ref={raunakTimelineIcon3Ref}
                  className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center"
                >
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/suitcase.svg"
                      alt="Experience"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div
                  ref={raunakTimelineCareRef}
                  className="flex flex-col gap-4 items-center text-center text-[#0c1119]"
                >
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    {t("drRaunak.personalizedCareTitle")}
                  </h3>
                  <p className="font-semibold text-[16px] leading-normal">
                    {t("drRaunak.personalizedCareDescription")}
                  </p>
                </div>
              </div>
            </section>

            {/* Gallery Section - Full Width */}
            <section
              ref={raunakGalleryRef}
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[100px] h-[130px] rounded-[18px] top-0 left-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[90px] h-[100px] rounded-[18px] bottom-0 right-0 z-0"></div>
                <div className="relative w-[380px] h-[285px] rounded-[18px] overflow-hidden ml-[20px] mt-[18px] z-10">
                  <Image
                    src="/gallery/raunak1.png"
                    alt="Dr. Raunak Shinde at conference"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[90px] h-[100px] rounded-[18px] top-0 right-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[90px] h-[100px] rounded-[18px] bottom-0 left-0 z-0"></div>
                <div className="relative w-[260px] h-[285px] rounded-[18px] overflow-hidden ml-[18px] mt-[16px] z-10">
                  <Image
                    src="/gallery/raunak2.png"
                    alt="Dr. Raunak Shinde presenting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        {/* Dr. Kavisha Lambhate Tab */}
        <TabsContent value="kavisha" className="mt-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-20 pb-16 w-full max-w-[1046px] px-3 mx-auto">
              {/* Hero Section */}
              <section
                ref={kavishaHeroRef}
                className="bg-[#d5edfd] rounded-[18px] w-full p-[36px] flex items-center gap-[64px]"
              >
                <div className="relative w-[286px] h-[376px] rounded-[22px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/gallery/kavisha.png"
                    alt="Dr. Kavisha Lambhate"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[59px] text-[#0c1119] flex-1">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-['Playfair_Display'] font-bold text-[48px] leading-normal">
                      {t("drKavisha.name")}
                    </h1>
                    <p className="font-semibold text-[22px] leading-normal">
                      {t("drKavisha.tagline")}
                    </p>
                  </div>
                  <div className="text-[18px] leading-normal">
                    <p>{t("drKavisha.intro")}</p>
                  </div>
                </div>
              </section>

              {/* Expertise Section */}
              <section
                ref={kavishaExpertiseRef}
                className="w-full flex flex-col gap-[51px] items-center"
              >
                <div className="flex flex-col gap-2 items-center text-center text-[#0c1119] max-w-[642px]">
                  <h2 className="font-['Playfair_Display'] text-[34px] leading-normal">
                    {t("drKavisha.expertiseTitle")}
                  </h2>
                  <p className="text-[18px] leading-normal">
                    {t("drKavisha.expertiseDescription")}
                  </p>
                </div>
                <div className="flex justify-center gap-[32px] w-full">
                  {kavishaExpertise.map((area) => (
                    <div key={area.title} className="w-[231px]">
                      <ServiceCard
                        title={area.title}
                        icon={area.icon}
                        variant="centered"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Timeline Section - Full Width */}
            <section
              ref={kavishaTimelineRef}
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="flex flex-col items-center justify-between h-[900px] w-[320px]">
                <div
                  ref={kavishaTimelineIcon1Ref}
                  className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center"
                >
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hat.svg"
                      alt="Education"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div
                  ref={kavishaTimelineExperienceRef}
                  className="flex flex-col gap-4 items-center text-center text-[#0c1119]"
                >
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    {t("drKavisha.experienceTitle")}
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>{t("drKavisha.experience1")}</li>
                    <li>{t("drKavisha.experience2")}</li>
                    <li>{t("drKavisha.experience3")}</li>
                    <li>{t("drKavisha.experience4")}</li>
                  </ul>
                </div>

                <div
                  ref={kavishaTimelineIcon2Ref}
                  className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center"
                >
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/hands.svg"
                      alt="Care"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="h-[700px] w-[2px] bg-[#0c1119] opacity-20"></div>

              <div className="flex flex-col items-center justify-between h-[900px] w-[400px]">
                <div
                  ref={kavishaTimelineQualificationsRef}
                  className="flex flex-col gap-4 items-center text-center text-[#0c1119]"
                >
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    {t("drKavisha.qualificationsTitle")}
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>{t("drKavisha.qualification1")}</li>
                    <li>{t("drKavisha.qualification2")}</li>
                    <li>{t("drKavisha.qualification3")}</li>
                    <li>{t("drKavisha.qualification4")}</li>
                  </ul>
                </div>

                <div
                  ref={kavishaTimelineIcon3Ref}
                  className="bg-[#f6de84] rounded-full w-[200px] h-[200px] flex items-center justify-center"
                >
                  <div className="relative w-[130px] h-[130px]">
                    <Image
                      src="/icons/suitcase.svg"
                      alt="Experience"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div
                  ref={kavishaTimelineCoursesRef}
                  className="flex flex-col gap-4 items-center text-center text-[#0c1119]"
                >
                  <h3 className="font-['Playfair_Display'] text-[28px] leading-normal">
                    {t("drKavisha.coursesTitle")}
                  </h3>
                  <ul className="font-semibold text-[16px] leading-normal list-disc list-inside text-left space-y-1.5">
                    <li>{t("drKavisha.course1")}</li>
                    <li>{t("drKavisha.course2")}</li>
                    <li>{t("drKavisha.course3")}</li>
                    <li>{t("drKavisha.course4")}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Gallery Section - Full Width */}
            <section
              ref={kavishaGalleryRef}
              className="
    relative left-1/2 right-1/2
    w-[100vw] -ml-[50vw] -mr-[50vw]
    /* your existing classes below */
    bg-gradient-to-b from-[#f5f7f8] to-[rgba(0,116,183,0.6)]
    flex items-center justify-center gap-[50px] py-[80px]
  "
            >
              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[70px] h-[115px] rounded-[18px] top-6 right-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[140px] h-[180px] rounded-[18px] bottom-0 left-0 z-0"></div>
                <div className="relative w-[225px] h-[300px] rounded-[18px] overflow-hidden ml-[18px] mt-0 z-10">
                  <Image
                    src="/gallery/kavisha1.png"
                    alt="Dr. Kavisha Lambhate with patients"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[140px] h-[60px] rounded-[18px] top-0 left-[13px] z-0"></div>
                <div className="absolute bg-[#f6de84] w-[70px] h-[115px] rounded-[18px] bottom-0 right-0 z-0"></div>
                <div className="relative w-[187px] h-[305px] rounded-[18px] overflow-hidden ml-0 mt-[14px] z-10">
                  <Image
                    src="/gallery/kavisha2.png"
                    alt="Dr. Kavisha Lambhate at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute bg-[#f6de84] w-[140px] h-[115px] rounded-[18px] top-0 right-0 z-0"></div>
                <div className="absolute bg-[#f6de84] w-[70px] h-[115px] rounded-[18px] bottom-0 left-0 z-0"></div>
                <div className="relative w-[231px] h-[308px] rounded-[18px] overflow-hidden ml-[18px] mt-[11px] z-10">
                  <Image
                    src="/gallery/kavisha3.png"
                    alt="Dr. Kavisha Lambhate with patient"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
