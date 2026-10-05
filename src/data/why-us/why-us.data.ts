import type { LucideIcon } from 'lucide-react';

import {
    Boxes,
    Camera,
    CircleCheckBig,
    DraftingCompass,
    Factory,
    FileSearch,
    Gauge,
    GitBranch,
    Layers3,
    PackageCheck,
    PackageSearch,
    PanelTop,
    Repeat2,
    Settings2,
    ShoppingBasket,
    Store,
    Target,
    Truck,
    UnfoldHorizontal,
    Workflow,
    Wrench,
} from 'lucide-react';

/* =========================================================
   SHARED TYPES
========================================================= */

export interface WhyUsAction {
    label: string;
    href: string;
}

export interface WhyUsLink {
    label: string;
    href: string;
}

/* =========================================================
   HERO
========================================================= */

export interface WhyUsStartingPoint {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const whyUsHeroData = {
    eyebrow: 'NEDEN MBA METAL?',

    title: 'Ürün değil, üretilebilir çözüm arayan firmalar için.',

    description:
        'Tel veya metal bir parçanın üretimini yalnızca makine ve operasyon açısından değerlendirmiyoruz. Parçanın geometrisini, kullanım amacını, malzemesini, üretim adedini, toleranslarını ve ihtiyaç duyduğu operasyon sırasını birlikte ele alarak uygulanabilir bir üretim yaklaşımı oluşturuyoruz.',

    primaryAction: {
        label: 'Projenizi Paylaşın',
        href: '/iletisim',
    },

    secondaryAction: {
        label: 'MBA Metal’i Tanıyın',
        href: '/hakkimizda',
    },

    startingPoints: [
        {
            title: 'Teknik Resim',
            description:
                'Teknik çizim ve ölçüler üzerinden üretilebilirlik değerlendirmesi.',
            icon: DraftingCompass,
        },
        {
            title: 'Numune',
            description:
                'Mevcut parçayı referans alarak ölçü, geometri ve üretim yönteminin incelenmesi.',
            icon: PackageSearch,
        },
        {
            title: 'Fotoğraf & Ölçü',
            description:
                'Teknik adı veya çizimi bulunmayan parçalar için görsel ve temel ölçüler üzerinden başlangıç.',
            icon: Camera,
        },
        {
            title: 'Prototip → Seri Üretim',
            description:
                'İlk ürün ve numune aşamasından tekrarlanabilir üretim sürecine kadar proje desteği.',
            icon: Workflow,
        },
    ] satisfies WhyUsStartingPoint[],
};

/* =========================================================
   WHY MBA METAL / PRINCIPLES
========================================================= */

export interface WhyUsPrinciple {
    category: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export const whyUsPrinciplesData = {
    eyebrow: 'ÜRETİM PARTNERİNİZİ SEÇERKEN',

    title: 'MBA Metal’i farklılaştıran çalışma yaklaşımı.',

    description:
        'Bir üretim partnerini yalnızca sahip olduğu makinelerle değerlendirmek yeterli değildir. Projeyi anlaması, üretilebilirliği sorgulaması, doğru operasyonları belirlemesi ve ihtiyaca uygun bir üretim yolu oluşturması da önemlidir.',

    items: [
        {
            category: 'PROJE ODAĞI',
            title: 'Önce İhtiyacı Anlıyoruz',
            description:
                'Parçanın yalnızca şeklini ve ölçülerini değil; nerede kullanılacağını, hangi fonksiyonu yerine getireceğini ve kullanım sırasında hangi koşullara maruz kalacağını anlamaya çalışıyoruz.',
            icon: Target,
        },
        {
            category: 'ESNEK BAŞLANGIÇ',
            title: 'Teknik Resim Şart Değil',
            description:
                'Teknik çizim önemli bir veri kaynağıdır ancak her proje hazır bir teknik resimle başlamaz. Numune, fotoğraf, temel ölçüler veya çözülmesi gereken kullanım problemi üzerinden de ilk değerlendirmeyi başlatabiliriz.',
            icon: FileSearch,
        },
        {
            category: 'ÜRETİLEBİLİRLİK',
            title: 'Her Çizimi Doğrudan Üretime Almıyoruz',
            description:
                'Geometriyi, malzemeyi, toleransları, operasyon sırasını ve üretim miktarını birlikte değerlendiriyoruz. Gerektiğinde parçanın daha uygulanabilir veya tekrarlanabilir şekilde üretilebilmesi için alternatifler üzerinde çalışıyoruz.',
            icon: Gauge,
        },
        {
            category: 'ÇOKLU KABİLİYET',
            title: 'Tek Operasyonla Sınırlı Kalmıyoruz',
            description:
                'Tel şekillendirme, metal büküm, kaynak ve projenin gerektirdiği tamamlayıcı operasyonları birbirinden bağımsız işlemler olarak değil, ürünün bütün üretim sürecinin parçaları olarak ele alıyoruz.',
            icon: Layers3,
        },
        {
            category: 'ÖLÇEK',
            title: 'Farklı Ölçeklerdeki Projeleri Değerlendiriyoruz',
            description:
                'Üretilebilirlik ve proses uygunluğu sağlandığında yalnızca yüksek hacimli projelere değil; küçük ve orta ölçekli ticari üretim ihtiyaçlarına da proje bazında yaklaşabiliyoruz.',
            icon: Boxes,
        },
        {
            category: 'DEVAMLILIK',
            title: 'Prototipten Tekrarlı Üretime',
            description:
                'Uygun projelerde ilk numune veya ilk ürün doğrulamasından sonra üretim parametrelerini netleştirerek süreci daha düzenli, kontrollü ve tekrarlanabilir bir üretim yapısına taşıyoruz.',
            icon: Repeat2,
        },
    ] satisfies WhyUsPrinciple[],
};

/* =========================================================
   FLEXIBLE START
   "PARÇANIN ADINI BİLMENİZ GEREKMİYOR"
========================================================= */

export interface NamingExample {
    label: string;
}

export interface RelatedCapability {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export const flexibleStartData = {
    eyebrow: 'PARÇANIN ADINI BİLMENİZ GEREKMİYOR',

    title: '“Buna benzer bir şey lazım” diyerek de başlayabilirsiniz.',

    paragraphs: [
        'Sanayide, üretim tesislerinde veya mağaza ekipmanlarında kullanılan her parçanın teknik adı kullanıcı tarafından bilinmeyebilir. Bir parçanın adını bilmiyor olmanız, üretim ihtiyacınızı bizimle değerlendirmenize engel değildir.',

        'Aynı ürün farklı firmalar veya sektörler tarafından farklı isimlerle tanımlanabilir. Önemli olan parçanın nasıl adlandırıldığı değil; geometrisinin, kullanım amacının, ölçülerinin ve beklenen fonksiyonunun anlaşılmasıdır.',

        'Bu nedenle fotoğraf, fiziksel numune, temel ölçüler, kullanım yeri ve ihtiyaç miktarı birçok projede teknik değerlendirmeyi başlatmak için yeterli bir başlangıç noktası oluşturabilir.',
    ],

    namingExample: {
        eyebrow: 'AYNI PARÇA, FARKLI İSİMLER',

        description:
            'Örneğin ürün teşhirinde kullanılan aynı veya benzer bir tel parça farklı kullanıcılar tarafından şu isimlerle tarif edilebilir:',

        items: [
            {
                label: 'Raf kancası',
            },
            {
                label: 'Tel askı',
            },
            {
                label: 'Pano kancası',
            },
            {
                label: 'Ürün askı çubuğu',
            },
        ] satisfies NamingExample[],
    },

    existingProduct: {
        eyebrow: 'MEVCUT ÜRÜNDEN BAŞLAYABİLİRİZ',

        title: 'Elinizde benzer bir ürün varsa bize gösterin.',

        description:
            'Mevcut parçanın fotoğrafını veya fiziksel numunesini paylaşabilirsiniz. Ardından temel ölçüler, malzeme beklentisi, kullanım koşulları ve ihtiyaç adedi üzerinden üretilebilirliği birlikte değerlendirebiliriz.',

        checklist: [
            'Ürün veya numune fotoğrafı',
            'Temel ölçüler',
            'Kullanım amacı',
            'Malzeme bilgisi varsa malzeme türü',
            'Tahmini üretim veya sipariş adedi',
            'Varsa kritik ölçü ve toleranslar',
        ],
    },

    relatedCapabilitiesTitle:
        'Bu tür projelerde ilgili üretim kabiliyetlerimizi de inceleyebilirsiniz.',

    relatedCapabilities: [
        {
            title: 'CNC Tel Bükme',
            description:
                'Teknik resim veya numuneye göre farklı geometrilerde özel tel parçaların değerlendirilmesi.',
            href: '/uretim-kabiliyetleri',
            icon: UnfoldHorizontal,
        },
        {
            title: 'Endüstriyel Tel Şekillendirme',
            description:
                'Sanayi, ekipman ve özel uygulamalar için tel form ve parça üretim çözümleri.',
            href: '/uretim-kabiliyetleri',
            icon: Settings2,
        },
    ] satisfies RelatedCapability[],
};

/* =========================================================
   COMMERCIAL / MARKET SOLUTIONS
========================================================= */

export interface CommercialSolution {
    category: string;
    title: string;
    description: string;
    extendedDescription: string;
    tags: string[];
    icon: LucideIcon;
    href: string;
}

export const commercialSolutionsData = {
    eyebrow: 'TEK BİR PAZARA BAĞLI DEĞİLİZ',

    title: 'Aynı üretim yeteneği farklı ticari ürünlere dönüşebilir.',

    description:
        'Tel ve metal işleme altyapısı; otomotivden fabrika içi lojistiğe, mağaza ekipmanlarından endüstriyel depolamaya kadar birbirinden farklı kullanım alanları için farklı ürün ve ekipmanlara dönüştürülebilir.',

    items: [
        {
            category: 'FABRİKA & OTOMOTİV',
            title: 'Taşıma Çözümleri',

            description:
                'Üretim hattı ve fabrika içi malzeme hareketine yönelik metal ekipman uygulamaları.',

            extendedDescription:
                'Parça taşıma, üretim hattı besleme, ara stoklama veya tesis içi lojistik ihtiyaçlarına göre tel ve metal konstrüksiyon çözümleri değerlendirilebilir.',

            tags: [
                'Fabrika içi lojistik',
                'Parça taşıma',
                'Üretim hattı',
            ],

            icon: Truck,

            href: '/sektorler',
        },
        {
            category: 'MARKET & MAĞAZA',
            title: 'Raf Sistemleri',

            description:
                'Mağaza, market ve ticari satış noktalarında kullanılabilecek tel ve metal raf çözümleri.',

            extendedDescription:
                'Ürün sergileme, raf içi düzenleme ve ticari alan organizasyonu için farklı ölçü ve geometrilerde metal ve tel sistemler geliştirilebilir.',

            tags: [
                'Market',
                'Mağaza',
                'Raf',
                'Teşhir',
            ],

            icon: Store,

            href: '/sektorler',
        },
        {
            category: 'SANAYİ',
            title: 'Endüstriyel Tel Sepetler',

            description:
                'Taşıma, depolama, üretim ve farklı endüstriyel kullanım alanları için tel sepet çözümleri.',

            extendedDescription:
                'Parça toplama, proses içi taşıma, depolama veya üretim alanı organizasyonu gibi ihtiyaçlar için projeye özel tel sepet geometrileri değerlendirilebilir.',

            tags: [
                'Depolama',
                'Taşıma',
                'Üretim',
                'Endüstriyel kullanım',
            ],

            icon: ShoppingBasket,

            href: '/projeler',
        },
        {
            category: 'PERAKENDE',
            title: 'Raf Kancaları',

            description:
                'Ürün teşhirinde kullanılan farklı geometrilerde tel pano ve raf askı elemanları.',

            extendedDescription:
                'Ürünün boyutu, ağırlığı, pano veya raf sistemi ve teşhir ihtiyacına göre farklı boy, açı ve formlarda tel askı parçaları üretilebilir.',

            tags: [
                'Raf kancası',
                'Tel askı',
                'Pano sistemi',
            ],

            icon: PanelTop,

            href: '/projeler',
        },
        {
            category: 'ÜRÜN TEŞHİRİ',
            title: 'Mağaza Tel Sepetleri',

            description:
                'Kampanya ve ürün teşhir alanlarında kullanılabilecek tel sepet ve mağaza ekipmanları.',

            extendedDescription:
                'Satış alanlarında ürün gruplama, kampanya teşhiri veya raf tamamlayıcı ekipman ihtiyacına göre farklı sepet yapıları değerlendirilebilir.',

            tags: [
                'Teşhir',
                'Kampanya alanı',
                'Mağaza ekipmanı',
            ],

            icon: PackageCheck,

            href: '/projeler',
        },
        {
            category: 'ÖZEL BÜKÜM',
            title: 'L / U / Kanca Formları',

            description:
                'Projeye göre farklı ölçü ve geometrilerde özel bükümlü tel ve metal parçalar.',

            extendedDescription:
                'Standart ürün gruplarına girmeyen L, U, kanca veya projeye özgü geometriler teknik gereksinimlere göre değerlendirilebilir.',

            tags: [
                'L form',
                'U form',
                'Kanca',
                'Özel geometri',
            ],

            icon: GitBranch,

            href: '/uretim-kabiliyetleri',
        },
    ] satisfies CommercialSolution[],
};

/* =========================================================
   PROJECT FLOW
========================================================= */

export interface ProjectFlowItem {
    title: string;
    description: string;
    detail: string;
    icon: LucideIcon;
}

export const projectFlowData = {
    eyebrow: 'BİZİMLE ÇALIŞMAK',

    title: 'Talebi üretime dönüştüren anlaşılır bir süreç.',

    description:
        'Projenin kapsamı ve teknik karmaşıklığı değişebilir. Ancak doğru bir ilk değerlendirme için ihtiyaç duyulan temel bilgiler çoğu projede benzerdir.',

    items: [
        {
            title: 'Talebinizi Paylaşın',

            description:
                'Teknik resim, fotoğraf, numune veya kullanım ihtiyacınızı bizimle paylaşın.',

            detail:
                'Varsa malzeme, ölçü, tolerans, ihtiyaç adedi ve parçanın kullanım koşulları gibi ek bilgiler ilk değerlendirmeyi hızlandırır.',

            icon: FileSearch,
        },
        {
            title: 'Üretilebilirliği İnceleyelim',

            description:
                'Geometri, operasyon, malzeme, tolerans ve adet yapısını birlikte değerlendirelim.',

            detail:
                'Parçanın hangi operasyonlardan geçeceği, üretim sırasında dikkat edilmesi gereken noktalar ve uygulanabilir proses yaklaşımı belirlenir.',

            icon: Gauge,
        },
        {
            title: 'Numune / İlk Ürün',

            description:
                'Gerekli projelerde ilk parça veya numune üzerinden üretim yaklaşımını doğrulayalım.',

            detail:
                'Ölçüler, form, bağlantı noktaları ve kullanım açısından kritik özellikler ilk ürün üzerinden kontrol edilerek gerekli düzenlemeler yapılabilir.',

            icon: Wrench,
        },
        {
            title: 'Üretim Planı',

            description:
                'Onaylanan proje için uygun ve tekrarlanabilir üretim akışını oluşturalım.',

            detail:
                'Operasyon sırası, üretim kontrol noktaları ve proje gereksinimleri netleştirilerek üretim süreci planlanır.',

            icon: Factory,
        },
    ] satisfies ProjectFlowItem[],

    footer: {
        eyebrow: 'KONTROLLÜ ÜRETİM',

        description:
            'Amaç yalnızca ilk parçayı üretebilmek değil; uygun projelerde aynı üretim yaklaşımını kontrollü ve tekrarlanabilir şekilde sürdürebilmektir.',
    },
};

/* =========================================================
   MBA METAL ECOSYSTEM
========================================================= */

export interface ExploreSolution {
    category: string;
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export const exploreSolutionsData = {
    eyebrow: 'MBA METAL EKOSİSTEMİ',

    title: 'İhtiyacınıza göre doğru çözüm alanından devam edin.',

    description:
        'İster özel bir tel parça ister endüstriyel ekipman veya mağaza çözümü arayın; ilgili üretim ve uygulama alanlarımız üzerinden projenize en yakın başlığa ulaşabilirsiniz.',

    items: [
        {
            category: 'ÜRETİM',
            title: 'CNC Tel Bükme',

            description:
                'Teknik resim veya numuneye göre özel tel parça ve form çözümleri.',

            href: '/uretim-kabiliyetleri',

            icon: UnfoldHorizontal,
        },
        {
            category: 'ÜRETİM',
            title: 'Endüstriyel Tel Şekillendirme',

            description:
                'Sanayi, ekipman ve özel uygulamalar için tel şekillendirme çözümleri.',

            href: '/uretim-kabiliyetleri',

            icon: Settings2,
        },
        {
            category: 'MAĞAZA',
            title: 'Raf Kancaları',

            description:
                'Tel pano, raf ve ürün teşhir sistemleri için farklı geometrilerde askı elemanları.',

            href: '/projeler',

            icon: PanelTop,
        },
        {
            category: 'MAĞAZA',
            title: 'Tel Raf Sistemleri',

            description:
                'Market ve ticari satış alanlarında kullanılabilecek tel ve metal raf çözümleri.',

            href: '/projeler',

            icon: Store,
        },
        {
            category: 'MAĞAZA',
            title: 'Market Tel Sepetleri',

            description:
                'Ürün teşhiri, kampanya alanları, taşıma ve mağaza kullanımı için tel sepet çözümleri.',

            href: '/projeler',

            icon: ShoppingBasket,
        },
        {
            category: 'KURUMSAL',
            title: 'MBA Metal Hakkında',

            description:
                'Üretim yaklaşımımızı, çalışma alanlarımızı ve MBA Metal’i daha yakından inceleyin.',

            href: '/hakkimizda',

            icon: Factory,
        },
    ] satisfies ExploreSolution[],
};

/* =========================================================
   FINAL CTA
========================================================= */

export interface WhyUsTrustItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const whyUsCtaData = {
    eyebrow: 'BİZE BİR PARÇA GÖSTERİN',

    title: 'Üretilebilir mi? Önce onu birlikte değerlendirelim.',

    description:
        'Teknik çiziminiz varsa paylaşın. Yoksa numune, fotoğraf veya temel ölçülerle başlayabiliriz. Parçanın kullanım amacını, malzemesini, kritik ölçülerini ve ihtiyaç adedini birlikte değerlendirerek uygulanabilir üretim yaklaşımını belirleyelim.',

    primaryAction: {
        label: 'Projenizi Paylaşın',
        href: '/hizli-teklif',
    },

    secondaryAction: {
        label: 'İletişime Geçin',
        href: '/iletisim',
    },

    trustItems: [
        {
            title: 'Proje Bazlı Değerlendirme',

            description:
                'Her talebi ürünün kullanım amacı, geometrisi, malzemesi ve üretim gereksinimlerine göre ayrı değerlendiriyoruz.',

            icon: FileSearch,
        },
        {
            title: 'Çoklu Üretim Yaklaşımı',

            description:
                'Tel şekillendirme, metal büküm, kaynak ve gerekli tamamlayıcı operasyonları proje bütünlüğü içerisinde ele alıyoruz.',

            icon: Factory,
        },
        {
            title: 'Üretim Sürekliliği',

            description:
                'Uygun projelerde ilk numuneden tekrarlanabilir üretim sürecine geçişi planlı ve kontrollü şekilde ele alıyoruz.',

            icon: CircleCheckBig,
        },
    ] satisfies WhyUsTrustItem[],
};

/* =========================================================
   PAGE META / SECTION ORDER
========================================================= */

export const whyUsPageData = {
    meta: {
        title: 'Neden MBA Metal?',
        description:
            'MBA Metal’in proje değerlendirme, üretilebilirlik, özel tel ve metal parça üretimi ve tekrarlanabilir üretim yaklaşımını keşfedin.',
    },

    sectionOrder: [
        'hero',
        'principles',
        'flexibleStart',
        'commercialSolutions',
        'projectFlow',
        'exploreSolutions',
        'cta',
    ] as const,
};
export const solutionExamplesData = {
    eyebrow: 'ÇÖZÜM ÖRNEKLERİ',

    title:
        'Farklı ihtiyaçlara, üretilebilir metal çözümleri.',

    description:
        'İhtiyaç yalnızca bir parçanın üretilmesi olmayabilir. Ürün geliştirme, mevcut parçanın yeniden üretilmesi, seri üretime geçiş veya operasyonel ihtiyaçlar için farklı başlangıç noktalarından ilerleyebiliriz.',

    examples: [
        {
            icon: Settings2,

            eyebrow: 'ÖZEL ÜRETİM',

            title:
                'Teknik ihtiyaca özel parça üretimi',

            description:
                'Teknik resim, ölçü, numune veya kullanım senaryosu üzerinden ihtiyacı değerlendirerek üretilebilir bir metal parça çözümüne dönüştürüyoruz.',

            details: [
                'Teknik resim üzerinden değerlendirme',
                'Ölçü ve tolerans kontrolü',
                'Malzeme ve üretim yöntemi değerlendirmesi',
                'Prototip veya seri üretim planlaması',
            ],
        },

        {
            icon: Repeat2,

            eyebrow: 'MEVCUT ÜRÜN',

            title:
                'Elinizdeki parçadan yeniden üretim',

            description:
                'Teknik dokümanı bulunmayan mevcut parçalar için numune, fotoğraf ve temel ölçüler üzerinden üretim yaklaşımı oluşturabiliriz.',

            details: [
                'Numune üzerinden inceleme',
                'Temel ölçülerin değerlendirilmesi',
                'Kullanım amacının anlaşılması',
                'Tekrarlanabilir üretim yapısının oluşturulması',
            ],
        },

        {
            icon: Boxes,

            eyebrow: 'PROTOTİP → SERİ',

            title:
                'Deneme üretiminden tekrarlı siparişe',

            description:
                'Yeni geliştirilen ürünlerde ilk numune ve prototip çalışmalarından başlayarak uygun projelerde tekrarlı üretim sürecine geçişi destekliyoruz.',

            details: [
                'İlk numune üretimi',
                'Ürün ve proses doğrulaması',
                'Revizyonların değerlendirilmesi',
                'Seri üretime geçiş planlaması',
            ],
        },

        {
            icon: Factory,

            eyebrow: 'SANAYİ VE ÜRETİM',

            title:
                'Makine ve üretim hatlarına yönelik parçalar',

            description:
                'Makine, ekipman, üretim hattı ve yardımcı sistemlerde kullanılan tel ve metal parçalar için proje bazlı üretim çözümleri geliştiriyoruz.',

            details: [
                'Makine ve ekipman parçaları',
                'Bağlantı ve sabitleme elemanları',
                'Tel ve metal komponentler',
                'Proje bazlı özel üretimler',
            ],
        },

        {
            icon: ShoppingBasket,

            eyebrow: 'MAĞAZACILIK VE TEŞHİR',

            title:
                'Raf, askı ve teşhir sistemleri için çözümler',

            description:
                'Perakende ve mağazacılık uygulamalarında kullanılan tel ürünler, askılar, kancalar ve teşhir elemanları için ihtiyaca özel üretim gerçekleştiriyoruz.',

            details: [
                'Raf ve pano kancaları',
                'Ürün askı elemanları',
                'Tel teşhir parçaları',
                'Özel ölçülü mağaza ekipmanları',
            ],
        },

        {
            icon: PackageCheck,

            eyebrow: 'LOJİSTİK VE OPERASYON',

            title:
                'Taşıma, depolama ve operasyon ekipmanları',

            description:
                'Depolama, taşıma ve operasyon süreçlerinde ihtiyaç duyulan metal ve tel komponentleri kullanım koşullarına göre değerlendirerek üretime hazırlıyoruz.',

            details: [
                'Taşıma ekipmanı parçaları',
                'Depolama sistemi komponentleri',
                'Koruyucu ve sabitleyici parçalar',
                'Operasyonel özel çözümler',
            ],
        },
    ],
};