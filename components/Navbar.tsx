"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("Navigation");
  
  // Get current locale from params or useLocale
  const currentLocale = (params.locale as string) || locale || 'en';
  
  const nav = [
    { href: `/${currentLocale}`, label: t("home") },
    { href: `/${currentLocale}/services`, label: t("services") },
    { href: `/${currentLocale}/doctors`, label: t("doctors") },
    { href: `/${currentLocale}/gallery`, label: t("gallery") },
    { href: `/${currentLocale}/contact`, label: t("contact") },
  ];
  
  const toggleLanguage = () => {
    // Toggle between en and hi
    const newLocale = currentLocale === 'en' ? 'hi' : 'en';
    
    // Remove the current locale from the pathname
    // pathname could be: /en, /en/services, /hi, /hi/doctors, etc.
    let pathWithoutLocale = pathname;
    
    // Remove /en or /hi from the start of the path
    if (pathWithoutLocale.startsWith('/en')) {
      pathWithoutLocale = pathWithoutLocale.substring(3); // Remove '/en'
    } else if (pathWithoutLocale.startsWith('/hi')) {
      pathWithoutLocale = pathWithoutLocale.substring(3); // Remove '/hi'
    }
    
    // Ensure path starts with / if not empty
    if (pathWithoutLocale && !pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }
    
    // Construct new path: /{newLocale}{pathWithoutLocale}
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    
    console.log('Switching locale:', { 
      currentLocale, 
      newLocale, 
      pathname, 
      pathWithoutLocale, 
      newPath 
    });
    
    // Navigate to the new path
    window.location.href = newPath;
  };
  
  return (
    <nav className="bg-[#E0F0F5] rounded-2xl px-5 py-1.5">
      <div className="flex items-center justify-between h-[54px]">
        {/* Logo with symbol and text - clickable to home */}
        <Link href={`/${currentLocale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logos/logoSymbol.png" 
            alt="Roop Clinic Logo" 
            width={43} 
            height={54}
            className="object-contain"
          />
          <Image 
            src="/logos/logoText.png" 
            alt="Roop Clinic" 
            width={93} 
            height={25}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center justify-between gap-6">
          {nav.map((n) => (
            <Link 
              key={n.label} 
              href={n.href} 
              className={`text-[16px] font-semibold transition-colors ${
                pathname === n.href 
                  ? "text-[#0074B7] font-bold" 
                  : "hover:text-[#0074B7]"
              }`}
            >
              {n.label}
            </Link>
          ))}
          {/* Translate icon */}
          <button onClick={toggleLanguage} className="hover:opacity-80 transition-opacity" aria-label="Switch language">
            <Image 
              src="/icons/translate.svg" 
              alt="Translate" 
              width={19} 
              height={19}
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
