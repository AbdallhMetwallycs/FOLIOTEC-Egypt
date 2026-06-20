import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  brand: "Falcon Pack Solutions",
  tagline: "Engineered Packaging. Globally Sourced.",
  nav_home: "Home",
  nav_about: "About",
  nav_products: "Products",
  nav_industries: "Industries",
  nav_solutions: "Solutions",
  nav_contact: "Contact",
  cta_rfq: "Request a Quote",
  cta_explore: "Explore Products",

  // Home
  hero_eyebrow: "Packaging Solutions Provider",
  hero_title: "Precision packaging, sourced with German discipline.",
  hero_sub: "We engineer end-to-end packaging supply for industrial, retail and food brands across MENA, Europe and Asia. Trading and sourcing — not a factory.",
  trust_title: "Trusted across 24 markets",
  trust_sub: "From frozen foods to heavy industry, our films and bags meet the spec, the lead time and the budget.",

  features_title: "Built for procurement teams.",
  features_sub: "Specification-grade materials, consolidated sourcing, and accountable delivery.",
  f1_t: "Specification First",
  f1_d: "Every roll, gauge and additive matched to your line — micron, treatment, slip and gloss.",
  f2_t: "Verified Supply",
  f2_d: "Audited supplier network across the EU, Türkiye, China and the GCC. No factory claims — full transparency.",
  f3_t: "On-time Logistics",
  f3_d: "FCL, LCL and air freight with documentation handled end-to-end. DDP available for key corridors.",
  f4_t: "Compliance Ready",
  f4_d: "REACH, RoHS, FDA and EU food-contact documentation supplied with every order.",

  products_title: "Product Catalogue",
  products_sub: "Nine core categories. Made to spec, delivered to schedule.",

  industries_title: "Industries We Serve",
  industries_sub: "Packaging programmes for sectors where reliability is non-negotiable.",

  solutions_title: "How We Work",
  solutions_sub: "A single point of accountability across sourcing, QA, logistics and after-sales.",

  cta_band_title: "Get a quote in 24 hours.",
  cta_band_sub: "Send us your spec — we'll come back with pricing, lead time and a sample plan.",

  // About
  about_title: "About Us",
  about_lede: "A trading and sourcing partner for packaging, built on engineering rigour.",
  about_body_1: "We don't own factories. We own outcomes. Our team operates as the procurement extension for industrial and retail brands that need packaging delivered to specification, on schedule and at a defensible price.",
  about_body_2: "Founded by procurement and polymer engineers, we apply German-style process discipline to a category that too often runs on guesswork. Every supplier in our network is audited. Every shipment is documented. Every spec is verified before it ships.",
  stat_1: "24", stat_1_l: "Countries served",
  stat_2: "180+", stat_2_l: "Active SKUs",
  stat_3: "12", stat_3_l: "Audited mills",
  stat_4: "98%", stat_4_l: "On-time delivery",

  // Industries list
  ind_food: "Food & Beverage",
  ind_food_d: "Frozen, fresh and ambient. Food-contact compliant films and bags.",
  ind_retail: "Retail & E-commerce",
  ind_retail_d: "Branded shopping bags, mailers and protective films at scale.",
  ind_logistics: "Logistics & 3PL",
  ind_logistics_d: "Stretch films, pallet wrap and protective solutions for warehouses.",
  ind_industrial: "Industrial & Manufacturing",
  ind_industrial_d: "Heavy-duty liners, surface protection and machine-grade films.",
  ind_agri: "Agriculture",
  ind_agri_d: "Mulch, silage and greenhouse films built for harsh outdoor cycles.",
  ind_municipal: "Municipal & Hospitality",
  ind_municipal_d: "Garbage bags and liners across gauges, colours and certifications.",

  // Solutions
  sol_1_t: "Specification & Sampling",
  sol_1_d: "We translate your brief into a precise technical sheet, then ship samples from shortlisted suppliers.",
  sol_2_t: "Sourcing & Negotiation",
  sol_2_d: "Multi-supplier RFQs against your spec. Transparent landed-cost modelling, not opaque markups.",
  sol_3_t: "Quality Assurance",
  sol_3_d: "Pre-shipment inspection, COA verification and gauge audits on every production run.",
  sol_4_t: "Logistics & Documentation",
  sol_4_d: "Incoterms-aware freight planning. Certificates, MSDS and customs paperwork handled.",
  sol_5_t: "After-Sales",
  sol_5_d: "Claims, replacements and continuous-improvement reviews — one point of contact.",

  // Contact
  contact_title: "Request a Quote",
  contact_sub: "Tell us what you need. A specialist will respond within one business day.",
  f_name: "Full Name",
  f_company: "Company",
  f_country: "Country",
  f_email: "Email",
  f_phone: "Phone",
  f_product: "Product",
  f_qty: "Quantity",
  f_msg: "Specification & Notes",
  f_submit: "Send RFQ",
  f_sent: "Thank you. Your RFQ has been received.",
  f_select: "Select a product",

  footer_rights: "All rights reserved.",
  footer_tagline: "Packaging trading and sourcing partner.",
};

const ar: Dict = {
  brand: "فالكون باك للحلول",
  tagline: "تغليف هندسي. مصادر عالمية.",
  nav_home: "الرئيسية",
  nav_about: "من نحن",
  nav_products: "المنتجات",
  nav_industries: "القطاعات",
  nav_solutions: "حلولنا",
  nav_contact: "تواصل معنا",
  cta_rfq: "طلب عرض سعر",
  cta_explore: "استعرض المنتجات",

  hero_eyebrow: "مزود حلول التغليف",
  hero_title: "تغليف بدقة هندسية، بمصادر موثوقة.",
  hero_sub: "نقدم سلسلة توريد متكاملة للتغليف الصناعي والتجزئة والأغذية في الشرق الأوسط وأوروبا وآسيا. شركة تجارة ومصادر — لسنا مصنعاً.",
  trust_title: "موثوقون في 24 سوقاً",
  trust_sub: "من الأغذية المجمدة إلى الصناعات الثقيلة، أفلامنا وأكياسنا تلبي المواصفات والمواعيد والميزانية.",

  features_title: "مصمم لفِرَق المشتريات.",
  features_sub: "مواد بمواصفات دقيقة، مصادر موحدة، وتسليم بمسؤولية كاملة.",
  f1_t: "المواصفات أولاً",
  f1_d: "كل لفافة وسمك ومادة مضافة مطابقة لخط إنتاجك.",
  f2_t: "توريد موثق",
  f2_d: "شبكة موردين مدققة في الاتحاد الأوروبي وتركيا والصين والخليج.",
  f3_t: "لوجستيات في الموعد",
  f3_d: "حاويات كاملة وجزئية وشحن جوي مع كامل المستندات.",
  f4_t: "متوافق مع المعايير",
  f4_d: "وثائق REACH وRoHS وFDA مع كل طلب.",

  products_title: "كتالوج المنتجات",
  products_sub: "تسع فئات أساسية. حسب المواصفات وفي الموعد.",

  industries_title: "القطاعات التي نخدمها",
  industries_sub: "برامج تغليف للقطاعات التي لا تحتمل التهاون.",

  solutions_title: "كيف نعمل",
  solutions_sub: "نقطة مسؤولية واحدة عبر المصادر والجودة واللوجستيات وما بعد البيع.",

  cta_band_title: "احصل على عرض سعر خلال 24 ساعة.",
  cta_band_sub: "أرسل لنا مواصفاتك وسنعود إليك بالأسعار والمواعيد وخطة العينات.",

  about_title: "من نحن",
  about_lede: "شريك تجارة ومصادر للتغليف، مبني على الانضباط الهندسي.",
  about_body_1: "لا نملك مصانع. نملك النتائج. نعمل كذراع مشتريات للعلامات الصناعية والتجارية التي تحتاج تغليفاً بالمواصفات وفي الموعد.",
  about_body_2: "أسسها مهندسو مشتريات وبوليمرات. نطبق انضباطاً ألمانياً على فئة كثيراً ما تدار بالتخمين.",
  stat_1: "24", stat_1_l: "دولة نخدمها",
  stat_2: "+180", stat_2_l: "صنف نشط",
  stat_3: "12", stat_3_l: "مصنع مدقق",
  stat_4: "98٪", stat_4_l: "تسليم في الموعد",

  ind_food: "الأغذية والمشروبات",
  ind_food_d: "مجمدة وطازجة. أفلام وأكياس متوافقة مع الغذاء.",
  ind_retail: "التجزئة والتجارة الإلكترونية",
  ind_retail_d: "أكياس تسوق وأغلفة بريدية وأفلام حماية.",
  ind_logistics: "اللوجستيات",
  ind_logistics_d: "أفلام تمدد وأغلفة منصات وحماية المستودعات.",
  ind_industrial: "الصناعة والتصنيع",
  ind_industrial_d: "بطانات ثقيلة وأفلام حماية للأسطح.",
  ind_agri: "الزراعة",
  ind_agri_d: "أفلام تغطية وسيلاج وصوبات للظروف القاسية.",
  ind_municipal: "البلديات والضيافة",
  ind_municipal_d: "أكياس قمامة بكل المقاسات والشهادات.",

  sol_1_t: "المواصفات والعينات",
  sol_1_d: "نحول طلبك إلى ورقة فنية دقيقة ونرسل عينات من موردين مختارين.",
  sol_2_t: "المصادر والتفاوض",
  sol_2_d: "طلبات عروض متعددة بناءً على مواصفاتك وشفافية كاملة في التكاليف.",
  sol_3_t: "ضمان الجودة",
  sol_3_d: "تفتيش قبل الشحن وتحقق من الشهادات.",
  sol_4_t: "اللوجستيات والوثائق",
  sol_4_d: "تخطيط شحن وفق الإنكوترمز مع جميع الشهادات.",
  sol_5_t: "ما بعد البيع",
  sol_5_d: "مطالبات واستبدال وتحسين مستمر — نقطة تواصل واحدة.",

  contact_title: "طلب عرض سعر",
  contact_sub: "أخبرنا باحتياجك. سيرد عليك مختص خلال يوم عمل واحد.",
  f_name: "الاسم الكامل",
  f_company: "الشركة",
  f_country: "الدولة",
  f_email: "البريد الإلكتروني",
  f_phone: "الهاتف",
  f_product: "المنتج",
  f_qty: "الكمية",
  f_msg: "المواصفات والملاحظات",
  f_submit: "إرسال الطلب",
  f_sent: "شكراً لك. تم استلام طلبك.",
  f_select: "اختر منتجاً",

  footer_rights: "جميع الحقوق محفوظة.",
  footer_tagline: "شريكك في تجارة ومصادر التغليف.",
};

const dicts = { en, ar };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof en) => string;
  dir: "ltr" | "rtl";
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof en) => dicts[lang][key] ?? en[key];
  const dir = lang === "ar" ? "rtl" : "ltr";

  return <LangContext.Provider value={{ lang, setLang, t, dir }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang outside LangProvider");
  return ctx;
}
