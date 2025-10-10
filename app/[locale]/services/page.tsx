"use client";

import { ServiceCardIcon } from "../../../components/ServiceCard";
import AnimatedServiceCard from "../../../components/AnimatedServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("ServicesPage");
  // All services organized by category with descriptions
  const aestheticServices: {
    title: string;
    icon: ServiceCardIcon;
    description: string;
  }[] = [
    {
      title: t("aestheticTreatments.skin.title"),
      icon: {
        src: "/icons/skin.svg",
        alt: t("aestheticTreatments.skin.title"),
      },
      description: t("aestheticTreatments.skin.description"),
    },
    {
      title: t("aestheticTreatments.hairLoss.title"),
      icon: {
        src: "/icons/hairloss.svg",
        alt: t("aestheticTreatments.hairLoss.title"),
      },
      description: t("aestheticTreatments.hairLoss.description"),
    },
    {
      title: t("aestheticTreatments.face.title"),
      icon: {
        src: "/icons/face.svg",
        alt: t("aestheticTreatments.face.title"),
      },
      description: t("aestheticTreatments.face.description"),
    },
    {
      title: t("aestheticTreatments.weightLoss.title"),
      icon: {
        src: "/icons/weightloss.svg",
        alt: t("aestheticTreatments.weightLoss.title"),
      },
      description: t("aestheticTreatments.weightLoss.description"),
    },
    {
      title: t("aestheticTreatments.maleBreast.title"),
      icon: {
        src: "/icons/gynecology.svg",
        alt: t("aestheticTreatments.maleBreast.title"),
      },
      description: t("aestheticTreatments.maleBreast.description"),
    },
    {
      title: t("aestheticTreatments.abdomen.title"),
      icon: {
        src: "/icons/tummytuck.svg",
        alt: t("aestheticTreatments.abdomen.title"),
      },
      description: t("aestheticTreatments.abdomen.description"),
    },
    {
      title: t("aestheticTreatments.infertilityCounselling.title"),
      icon: {
        src: "/icons/infertilitycounselling.svg",
        alt: t("aestheticTreatments.infertilityCounselling.title"),
      },
      description: t("aestheticTreatments.infertilityCounselling.description"),
    },
  ];

  const nonSurgicalServices: {
    title: string;
    icon: ServiceCardIcon;
    description: string;
  }[] = [
    {
      title: t("nonSurgical.gynecology.title"),
      icon: {
        src: "/icons/gynecology.svg",
        alt: t("nonSurgical.gynecology.title"),
      },
      description: t("nonSurgical.gynecology.description"),
    },
    {
      title: t("nonSurgical.cosmetology.title"),
      icon: {
        src: "/icons/cosmetology.svg",
        alt: t("nonSurgical.cosmetology.title"),
      },
      description: t("nonSurgical.cosmetology.description"),
    },
    {
      title: t("nonSurgical.microneedling.title"),
      icon: {
        src: "/icons/microneedling.svg",
        alt: t("nonSurgical.microneedling.title"),
      },
      description: t("nonSurgical.microneedling.description"),
    },
    {
      title: t("nonSurgical.prp.title"),
      icon: { src: "/icons/prp.svg", alt: t("nonSurgical.prp.title") },
      description: t("nonSurgical.prp.description"),
    },
    {
      title: t("nonSurgical.peels.title"),
      icon: { src: "/icons/peels.svg", alt: t("nonSurgical.peels.title") },
      description: t("nonSurgical.peels.description"),
    },
    {
      title: t("nonSurgical.botox.title"),
      icon: { src: "/icons/face.svg", alt: t("nonSurgical.botox.title") },
      description: t("nonSurgical.botox.description"),
    },
    {
      title: t("nonSurgical.threads.title"),
      icon: { src: "/icons/face.svg", alt: t("nonSurgical.threads.title") },
      description: t("nonSurgical.threads.description"),
    },
    {
      title: t("nonSurgical.faceRejuvenation.title"),
      icon: {
        src: "/icons/face.svg",
        alt: t("nonSurgical.faceRejuvenation.title"),
      },
      description: t("nonSurgical.faceRejuvenation.description"),
    },
  ];

  const surgicalServices: {
    title: string;
    icon: ServiceCardIcon;
    description: string;
  }[] = [
    {
      title: t("surgical.hairTransplant.title"),
      icon: {
        src: "/icons/hairtransplant.svg",
        alt: t("surgical.hairTransplant.title"),
      },
      description: t("surgical.hairTransplant.description"),
    },
    {
      title: t("surgical.liposuction.title"),
      icon: {
        src: "/icons/liposuction.svg",
        alt: t("surgical.liposuction.title"),
      },
      description: t("surgical.liposuction.description"),
    },
    {
      title: t("surgical.fatGrafting.title"),
      icon: {
        src: "/icons/fatgrafting.svg",
        alt: t("surgical.fatGrafting.title"),
      },
      description: t("surgical.fatGrafting.description"),
    },
    {
      title: t("surgical.tummyTuck.title"),
      icon: {
        src: "/icons/tummytuck.svg",
        alt: t("surgical.tummyTuck.title"),
      },
      description: t("surgical.tummyTuck.description"),
    },
    {
      title: t("surgical.gynecomastia.title"),
      icon: {
        src: "/icons/gynecology.svg",
        alt: t("surgical.gynecomastia.title"),
      },
      description: t("surgical.gynecomastia.description"),
    },
    {
      title: t("surgical.rhinoplasty.title"),
      icon: {
        src: "/icons/rhinoplasty.svg",
        alt: t("surgical.rhinoplasty.title"),
      },
      description: t("surgical.rhinoplasty.description"),
    },
    {
      title: t("surgical.otoplasty.title"),
      icon: {
        src: "/icons/otoplasty.svg",
        alt: t("surgical.otoplasty.title"),
      },
      description: t("surgical.otoplasty.description"),
    },
  ];

  const laserServices: {
    title: string;
    icon: ServiceCardIcon;
    description: string;
  }[] = [
    {
      title: t("laserTreatments.mnrfCelina.title"),
      icon: {
        src: "/icons/mnrfcelina.svg",
        alt: t("laserTreatments.mnrfCelina.title"),
      },
      description: t("laserTreatments.mnrfCelina.description"),
    },
    {
      title: t("laserTreatments.tattooRemoval.title"),
      icon: {
        src: "/icons/tattooremoval.svg",
        alt: t("laserTreatments.tattooRemoval.title"),
      },
      description: t("laserTreatments.tattooRemoval.description"),
    },
    {
      title: t("laserTreatments.laserHairReduction.title"),
      icon: {
        src: "/icons/laserhairreduction.svg",
        alt: t("laserTreatments.laserHairReduction.title"),
      },
      description: t("laserTreatments.laserHairReduction.description"),
    },
    {
      title: t("laserTreatments.hifu.title"),
      icon: {
        src: "/icons/hifu.svg",
        alt: t("laserTreatments.hifu.title"),
      },
      description: t("laserTreatments.hifu.description"),
    },
    {
      title: t("laserTreatments.hydrafacial.title"),
      icon: {
        src: "/icons/face.svg",
        alt: t("laserTreatments.hydrafacial.title"),
      },
      description: t("laserTreatments.hydrafacial.description"),
    },
  ];

  const ScrollableRow = ({
    services,
  }: {
    services: {
      title: string;
      icon: ServiceCardIcon;
      description: string;
    }[];
  }) => {
    return (
      <div className="relative w-screen -ml-[50vw] left-[50%]">
        {/* The carousel stays fully visible so tall cards aren't cut */}
        <Carousel opts={{ align: "start", dragFree: true }}>
          <CarouselContent
            className="ml-0 scrollbar-hide"
            style={{ overflow: "visible" }}
          >
            {services.map((service) => (
              <CarouselItem
                key={service.title}
                className="pl-[36px] basis-auto"
                style={{ overflow: "visible" }}
              >
                <div className="w-[232px]" style={{ overflow: "visible" }}>
                  <AnimatedServiceCard
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-20 pb-16">
      {/* Banner with gradient overlay */}
      <section className="rounded-2xl overflow-hidden relative">
        <div className="relative h-[200px] md:h-[250px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/banners/servicesBanner.png')" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(44, 62, 90, 0.95), rgba(0, 116, 183, 0.85), rgba(212, 243, 249, 0.7))",
            }}
          />
          <div className="absolute inset-0 p-6 md:p-10 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-[38px] md:text-[48px] font-bold text-white">
                {t("banner.title")}
              </h1>
              <p className="text-white text-[18px] md:text-[22px]">
                {t("banner.description")}
              </p>
            </div>
            <button className="bg-[#F6DE84] text-[#0C1119] rounded-xl h-11 px-6 text-[16px] font-bold hidden md:block">
              {t("banner.bookButton")}
            </button>
          </div>
        </div>
      </section>

      {/* Aesthetic Treatments */}
      <section
        className="flex flex-col gap-8"
        style={{
          overflow: "visible",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">{t("aestheticTreatments.title")}</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">
            {t("aestheticTreatments.viewAll")}
          </button>
        </div>
        <ScrollableRow services={aestheticServices} />
      </section>

      {/* Non Surgical */}
      <section
        className="flex flex-col gap-8"
        style={{
          overflow: "visible",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">{t("nonSurgical.title")}</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">
            {t("nonSurgical.viewAll")}
          </button>
        </div>
        <ScrollableRow services={nonSurgicalServices} />
      </section>

      {/* Surgical */}
      <section
        className="flex flex-col gap-8"
        style={{
          overflow: "visible",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">{t("surgical.title")}</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">
            {t("surgical.viewAll")}
          </button>
        </div>
        <ScrollableRow services={surgicalServices} />
      </section>

      {/* Laser Treatments */}
      <section
        className="flex flex-col gap-8"
        style={{
          overflow: "visible",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[34px]">{t("laserTreatments.title")}</h2>
          <button className="text-[18px] hover:text-[#0074B7] transition-colors">
            {t("laserTreatments.viewAll")}
          </button>
        </div>
        <ScrollableRow services={laserServices} />
      </section>
    </div>
  );
}
