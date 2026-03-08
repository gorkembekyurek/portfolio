import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "tr" | "en";

const translations = {
  tr: {
    // Navbar
    nav: {
      about: "Hakkımda",
      projects: "Projeler",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    // Hero
    hero: {
      greeting: "Merhaba,",
      iam: "Ben ",
      subtitle: "Backend Developer",
      description: "Laravel, Ionic ve modern web teknolojileriyle ölçeklenebilir uygulamalar geliştiriyorum. E-ticaret'ten fintech'e kadar geniş bir yelpazede deneyim.",
      projectsBtn: "./projeler.sh",
      contactBtn: "./iletisim.sh",
      cvBtn: "CV İndir",
    },
    // About
    about: {
      terminal: "$ cat about.md",
      title: "Hakkımda",
      personal: "Kişisel",
      personalDesc: "Ben Görkem. Backend geliştirme odaklı bir yazılımcıyım. Temiz kod yazmayı, ölçeklenebilir sistemler tasarlamayı ve yeni teknolojiler öğrenmeyi seviyorum. E-ticaret ve fintech alanlarında projeler geliştirdim.",
      location: "Konum",
      locationVal: "İstanbul / Güngören",
      languages: "Diller",
      languagesVal: "Türkçe, İngilizce",
      interests: "İlgi Alanları",
      interestsVal: "Borsa, Teknoloji",
      experience: "Deneyim",
      exp1Title: "Bilgi İşlem Stajyeri",
      exp1Company: "Emlak Yönetim Hizmetleri A.Ş.",
      exp1Date: "Haz 2024 – Ağu 2024",
      exp1Desc: "Zorunlu staj kapsamında bilgi işlem departmanında görev aldım. Sistem yönetimi ve teknik destek süreçlerinde deneyim kazandım.",
      exp2Title: "Freelance Developer",
      exp2Company: "Bağımsız",
      exp2Desc: "Laravel ile e-ticaret platformu, Ionic ile mobil uygulama ve BIST hisse takip uygulaması geliştirme.",
      education: "Eğitim",
      edu1Title: "Bilgisayar Programcılığı",
      edu1School: "İstanbul Kültür Üniversitesi",
      edu1Desc: "Mezun — GNO: 3.13 / 4.00. Yazılım geliştirme, veri yapıları, algoritma ve veritabanı yönetimi.",
      edu2Title: "Online Eğitimler",
      edu2School: "Udemy / YouTube",
      edu2Desc: "Laravel, Ionic, TypeScript ve modern web teknolojileri üzerine sürekli öğrenme.",
    },
    // Projects
    projects: {
      terminal: "$ ls ./projects",
      title: "Projelerim",
      p1Title: "E-Ticaret Web Sitesi",
      p1Desc: "Laravel framework ile geliştirilmiş tam kapsamlı e-ticaret platformu. Ürün yönetimi, sepet sistemi, ödeme entegrasyonu ve admin paneli içerir.",
      p2Title: "E-Ticaret Mobil App",
      p2Desc: "Ionic framework ile cross-platform olarak geliştirilen e-ticaret mobil uygulaması. iOS ve Android'de çalışır, push notification ve offline destek sunar.",
      p3Title: "BIST Hisse Takip App",
      p3Desc: "Borsa İstanbul hisselerini anlık olarak takip edebileceğiniz uygulama. Canlı fiyat güncellemeleri, grafik analizi ve portföy yönetimi özellikleri sunar.",
    },
    // Skills
    skills: {
      terminal: "$ cat skills.json",
      title: "Yetenekler",
    },
    // Contact
    contact: {
      terminal: "$ ./contact --send-message",
      title: "İletişim",
      description: "Yeni projeler ve işbirlikleri için her zaman açığım. Backend geliştirme, API tasarımı veya mobil uygulama konularında benimle iletişime geçebilirsiniz.",
      nameLabel: "// isim",
      namePlaceholder: "Adınız",
      emailLabel: "// email",
      messageLabel: "// mesaj",
      messagePlaceholder: "Mesajınız...",
      send: "Gönder",
    },
    // Footer
    footer: {
      builtWith: "Built with",
      andCode: "& code",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello,",
      iam: "I'm ",
      subtitle: "Backend Developer",
      description: "I build scalable applications with Laravel, Ionic and modern web technologies. Experience ranging from e-commerce to fintech.",
      projectsBtn: "./projects.sh",
      contactBtn: "./contact.sh",
      cvBtn: "Download CV",
    },
    about: {
      terminal: "$ cat about.md",
      title: "About Me",
      personal: "Personal",
      personalDesc: "I'm Görkem. A developer focused on backend development. I love writing clean code, designing scalable systems and learning new technologies. I've developed projects in e-commerce and fintech.",
      location: "Location",
      locationVal: "Istanbul / Güngören",
      languages: "Languages",
      languagesVal: "Turkish, English",
      interests: "Interests",
      interestsVal: "Stock Market, Technology",
      experience: "Experience",
      exp1Title: "IT Intern",
      exp1Company: "Emlak Yönetim Hizmetleri A.Ş.",
      exp1Date: "Jun 2024 – Aug 2024",
      exp1Desc: "Worked in the IT department as a mandatory intern. Gained experience in system administration and technical support processes.",
      exp2Title: "Freelance Developer",
      exp2Company: "Independent",
      exp2Desc: "E-commerce platform with Laravel, mobile app with Ionic and BIST stock tracking app development.",
      education: "Education",
      edu1Title: "Computer Programming",
      edu1School: "Istanbul Kültür University",
      edu1Desc: "Graduated — GPA: 3.13 / 4.00. Software development, data structures, algorithms and database management.",
      edu2Title: "Online Courses",
      edu2School: "Udemy / YouTube",
      edu2Desc: "Continuous learning on Laravel, Ionic, TypeScript and modern web technologies.",
    },
    projects: {
      terminal: "$ ls ./projects",
      title: "My Projects",
      p1Title: "E-Commerce Website",
      p1Desc: "Full-featured e-commerce platform built with Laravel framework. Includes product management, cart system, payment integration and admin panel.",
      p2Title: "E-Commerce Mobile App",
      p2Desc: "Cross-platform e-commerce mobile app built with Ionic framework. Runs on iOS and Android with push notifications and offline support.",
      p3Title: "BIST Stock Tracker App",
      p3Desc: "App for real-time tracking of Borsa Istanbul stocks. Features live price updates, chart analysis and portfolio management.",
    },
    skills: {
      terminal: "$ cat skills.json",
      title: "Skills",
    },
    contact: {
      terminal: "$ ./contact --send-message",
      title: "Contact",
      description: "I'm always open to new projects and collaborations. Feel free to reach out about backend development, API design or mobile app topics.",
      nameLabel: "// name",
      namePlaceholder: "Your Name",
      emailLabel: "// email",
      messageLabel: "// message",
      messagePlaceholder: "Your message...",
      send: "Send",
    },
    footer: {
      builtWith: "Built with",
      andCode: "& code",
    },
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

type Translations = DeepStringify<typeof translations.tr>;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Lang) || "tr";
    }
    return "tr";
  });

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};
