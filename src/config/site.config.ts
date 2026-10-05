export const siteConfig = {
  name: 'MBA Metal',

  shortName: 'MBA',

  domain: 'mbametal.com',

  defaultLanguage: 'tr',

  supportedLanguages: [
    'tr',
    'en',
  ] as const,

  seo: {
    title:
      'MBA Metal | Endüstriyel Metal Üretimi',

    description:
      'Tel, boru ve metal parçalarda endüstriyel üretim çözümleri.',
  },
} as const;