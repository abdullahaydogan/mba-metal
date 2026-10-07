export const siteConfig = {
    name: 'MBA Metal',

    url:
        import.meta.env.VITE_SITE_URL ||
        'https://mbametal.com',

    defaultLocale: 'tr',

    supportedLocales: [
        'tr',
        'en',
        'de',
        'ru',
    ],

    defaultTitle:
        'MBA Metal | Tel Şekillendirme, Metal Büküm ve Kaynaklı Üretim',

    defaultDescription:
        'MBA Metal; tel şekillendirme, metal büküm, kaynak ve projeye özel tel ve metal parça üretimi alanlarında endüstriyel üretim çözümleri sunar.',

    ogImage: '/og-image.jpg',
} as const;