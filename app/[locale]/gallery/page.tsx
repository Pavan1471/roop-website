"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
  const t = useTranslations("GalleryPage");
  // Gallery images for carousel
  const clinicImages = [
    { src: "/gallery/gallery1.png", alt: `${t("imageAlt.clinicInterior")} 1` },
    { src: "/gallery/gallery2.png", alt: `${t("imageAlt.clinicInterior")} 2` },
    { src: "/gallery/gallery3.png", alt: `${t("imageAlt.clinicInterior")} 3` },
    { src: "/gallery/gallery4.png", alt: `${t("imageAlt.clinicInterior")} 4` },
    { src: "/gallery/gallery5.png", alt: `${t("imageAlt.clinicInterior")} 5` },
    { src: "/gallery/gallery6.png", alt: `${t("imageAlt.clinicInterior")} 6` },
    { src: "/gallery/gallery7.png", alt: `${t("imageAlt.clinicInterior")} 7` },
    { src: "/gallery/gallery8.png", alt: `${t("imageAlt.clinicInterior")} 8` },
  ];

  return (
    <div className="bg-[#f5f7f8] flex flex-col items-center pb-16">
      {/* Gallery Banner */}
      <section className="rounded-[18px] overflow-hidden relative w-full max-w-[1046px] mx-auto px-3 mb-20">
        <div className="relative h-[250px] w-full">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-[18px]"
            style={{ backgroundImage: "url('/banners/galleryBanner.png')" }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 rounded-[18px]"
            style={{
              background:
                "linear-gradient(to right, rgba(44, 62, 90, 0.95), rgba(0, 116, 183, 0.9) 50%, rgba(224, 240, 245, 0.8))",
            }}
          />
          {/* Content */}
          <div className="absolute inset-0 p-8 flex items-end">
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

      {/* Bento Grid Gallery */}
      <section className="w-full max-w-[1046px] mx-auto px-3 mb-20">
        <div className="grid grid-cols-6 grid-rows-8 gap-4 h-[1400px]">
          {/* Large top-left */}
          <div className="col-span-4 row-span-3 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery1.png"
              alt={t("imageAlt.gallery1")}
              fill
              className="object-cover"
            />
          </div>

          {/* Top-right */}
          <div className="col-span-2 row-span-3 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery2.png"
              alt={t("imageAlt.gallery2")}
              fill
              className="object-cover"
            />
          </div>

          {/* Middle-left */}
          <div className="col-span-3 row-span-3 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery3.png"
              alt={t("imageAlt.gallery3")}
              fill
              className="object-cover"
            />
          </div>

          {/* Middle-right */}
          <div className="col-span-3 row-span-3 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery4.png"
              alt={t("imageAlt.gallery4")}
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom large left */}
          <div className="col-span-2 row-span-4 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery5.png"
              alt={t("imageAlt.gallery5")}
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right tall */}
          <div className="col-span-2 row-span-4 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery6.png"
              alt={t("imageAlt.gallery6")}
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right tall 2 */}
          <div className="col-span-2 row-span-4 relative rounded-[18px] overflow-hidden">
            <Image
              src="/gallery/gallery7.png"
              alt={t("imageAlt.gallery7")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Clinic Glimpses Carousel */}
      <section className="w-full max-w-[1046px] mx-auto px-3">
        <div className="flex flex-col gap-16 items-center">
          {/* Header */}
          <div className="flex flex-col gap-2 items-center text-center text-[#0c1119]">
            <h2 className="font-['Playfair_Display'] font-bold text-[34px] leading-normal">
              {t("carousel.title")}
            </h2>
            <p className="text-[22px] leading-normal">
              {t("carousel.description")}
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 scrollbar-hide">
                {clinicImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 basis-auto">
                    <div className="relative w-[320px] h-[320px] rounded-[18px] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
