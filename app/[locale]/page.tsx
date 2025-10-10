"use client";
import { useTranslations } from "next-intl";
import ServiceCard, { ServiceCardIcon } from "../../components/ServiceCard";

export default function Home() {
  const t = useTranslations("HomePage");
  
  const cards: { title: string; description?: string; icon: ServiceCardIcon }[] = [
    {
      title: t("services.rhinoplasty.title"),
      description: t("services.rhinoplasty.description"),
      icon: { src: "/icons/rhinoplasty.svg", alt: "Rhinoplasty icon" },
    },
    {
      title: t("services.cosmetology.title"),
      description: t("services.cosmetology.description"),
      icon: { src: "/icons/cosmetology.svg", alt: "Cosmetology icon" },
    },
    {
      title: t("services.gynecology.title"),
      description: t("services.gynecology.description"),
      icon: { src: "/icons/gynecology.svg", alt: "Gynecology icon" },
    },
    {
      title: t("services.liposuction.title"),
      description: t("services.liposuction.description"),
      icon: { src: "/icons/liposuction.svg", alt: "Liposuction icon" },
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-20 pb-16">
        {/* Hero */}
        <section className="rounded-2xl overflow-hidden relative">
          <div className="relative h-[340px] md:h-[380px] w-full">
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/banners/landingBanner.png')" }}
            />
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{ 
                background: "linear-gradient(to right, rgba(44, 62, 90, 0.95), rgba(0, 116, 183, 0.85), rgba(212, 243, 249, 0.7))" 
              }}
            />
            {/* Content container */}
            <div className="absolute inset-0 p-6 md:p-10 flex items-center justify-between">
              {/* Left content */}
              <div className="flex flex-col gap-5 max-w-[672px] z-10">
                <h1 className="text-[26px] md:text-[34px] text-white" dangerouslySetInnerHTML={{ __html: t.raw('hero.title').replace('<highlight>', '<span class="text-[#F6DE84] font-bold">').replace('</highlight>', '</span>') }} />
                <p className="text-white/90 text-[14px] md:text-[18px] max-w-[512px]">
                  {t('hero.description')}
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#F6DE84] text-[#0C1119] rounded-xl h-11 px-6 text-[16px] font-semibold">{t('hero.consultButton')}</button>
                  <button className="border border-white text-white rounded-xl h-11 px-6 text-[16px] font-semibold">{t('hero.exploreButton')}</button>
                </div>
              </div>
              {/* Right hero images */}
              <div className="hidden md:block relative z-10 flex-shrink-0">
                <img 
                  src="/gallery/heroimages.svg" 
                  alt="Clinic interior" 
                  className="h-[280px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="flex flex-col items-center gap-6">
          <div className="text-center max-w-[592px]">
            <h2 className="text-[34px]">{t('services.title')}</h2>
            <p className="text-[18px] text-[#0C1119]/80">
              {t('services.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[47px] w-full">
            {cards.map((c) => (
              <ServiceCard key={c.title} title={c.title} description={c.description} icon={c.icon} />
            ))}
          </div>
          <button className="text-[22px]">{t('services.viewAll')}</button>
        </section>

        {/* Redefining section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative hidden md:block">
            <img 
              src="/gallery/confidence.svg" 
              alt="Confidence" 
              className="w-full max-w-[400px] h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 max-w-[582px]">
            <h2 className="text-[32px] md:text-[48px] leading-tight" dangerouslySetInnerHTML={{ __html: t.raw('redefining.title').replace('<highlight>', '<span class="text-[#0074B7]">').replace('</highlight>', '</span>') }} />
            <p className="text-[18px] text-[#0C1119]/90">
              {t('redefining.description')}
            </p>
            <button className="bg-[#F6DE84] text-[#0C1119] rounded-xl h-11 px-6 text-[16px] font-semibold w-[216px]">{t('redefining.consultButton')}</button>
          </div>
        </section>
      </div>

      {/* Meet Our Specialists - Full Width */}
      <section className="-mx-3 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-gradient-to-t from-[#0074B7] to-[#F5F7F8] px-[20px] md:px-[48px] py-[43px]">
        <div className="mx-auto max-w-[1046px] flex flex-col gap-16 items-center">
          <div className="text-center max-w-[582px]">
            <h2 className="text-[34px]">{t('specialists.title')}</h2>
            <p className="text-[18px] text-[#0C1119]/80">
              {t('specialists.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1046px]">
            <div className="bg-[#E0F0F5] rounded-2xl p-6 flex gap-4">
              <div className="rounded-2xl overflow-hidden w-[221px] h-[290px] flex-shrink-0">
                <img 
                  src="/gallery/raunak.png" 
                  alt="Dr. Raunak Shinde" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[34px] font-bold">{t('specialists.drRaunak.name')}</h3>
                  <p className="text-[18px]">
                    {t('specialists.drRaunak.description')}
                  </p>
                </div>
                <button className="border border-[#0C1119] rounded-xl h-[42px] w-[145px] text-[16px] font-semibold">{t('specialists.drRaunak.button')}</button>
              </div>
            </div>
            <div className="bg-[#E0F0F5] rounded-2xl p-6 flex gap-4">
              <div className="rounded-2xl overflow-hidden w-[226px] h-[290px] flex-shrink-0">
                <img 
                  src="/gallery/kavisha.png" 
                  alt="Dr. Kavisha Lambhate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[34px] font-bold">{t('specialists.drKavisha.name')}</h3>
                  <p className="text-[16px]">{t('specialists.drKavisha.description')}</p>
                </div>
                <button className="border border-[#0C1119] rounded-xl h-[42px] w-[145px] text-[16px] font-semibold">{t('specialists.drKavisha.button')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
