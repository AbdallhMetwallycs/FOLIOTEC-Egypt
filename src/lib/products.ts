export type ProductKey =
  | "film-blowing"
  | "flexo-printing"
  | "laminated-films"
  | "frozen-food"
  | "shrink-films"
  | "stretch-films"
  | "protective-films"
  | "shopping-bags"
  | "garbage-bags";

export const PRODUCTS: { key: ProductKey; en: string; ar: string; descEn: string; descAr: string }[] = [
  { key: "film-blowing", en: "Film Blowing", ar: "نفخ الأفلام",
    descEn: "Mono and co-extruded LDPE / HDPE / LLDPE films, custom gauge and width.",
    descAr: "أفلام LDPE وHDPE وLLDPE أحادية ومتعددة الطبقات بسمك وعرض حسب الطلب." },
  { key: "flexo-printing", en: "Flexographic Printing", ar: "الطباعة الفلكسوغرافية",
    descEn: "Up to 8-colour flexo print on film and bag substrates with brand-grade registration.",
    descAr: "طباعة فلكسو حتى 8 ألوان بدقة تسجيل عالية للعلامات التجارية." },
  { key: "laminated-films", en: "Laminated Films", ar: "الأفلام المغلفة",
    descEn: "Multi-layer laminates for barrier, print and structural performance.",
    descAr: "أفلام متعددة الطبقات لأداء الحاجز والطباعة والهيكل." },
  { key: "frozen-food", en: "Frozen Food Packaging", ar: "تغليف الأغذية المجمدة",
    descEn: "Low-temperature resilient films and bags with food-contact certification.",
    descAr: "أفلام وأكياس مقاومة للتجميد ومعتمدة لتلامس الأغذية." },
  { key: "shrink-films", en: "Shrink Films", ar: "أفلام الانكماش",
    descEn: "POF, PVC and PE shrink for bundling, multipack and display.",
    descAr: "أفلام انكماش POF وPVC وPE للتجميع والعرض." },
  { key: "stretch-films", en: "Stretch Films", ar: "أفلام التمدد",
    descEn: "Cast and blown stretch wrap for pallets — hand and machine grade.",
    descAr: "أفلام تمدد للمنصات يدوية وآلية." },
  { key: "protective-films", en: "Protective Films", ar: "أفلام الحماية",
    descEn: "Surface protection films for metal, glass, profiles and appliances.",
    descAr: "أفلام حماية الأسطح للمعادن والزجاج." },
  { key: "shopping-bags", en: "Shopping Bags", ar: "أكياس التسوق",
    descEn: "Branded retail bags — die-cut, soft-loop, vest and bio options.",
    descAr: "أكياس تسوق مطبوعة بمقابض متعددة." },
  { key: "garbage-bags", en: "Garbage Bags", ar: "أكياس القمامة",
    descEn: "Municipal and commercial liners across all gauges and standards.",
    descAr: "أكياس قمامة تجارية وبلدية بكل المعايير." },
];
