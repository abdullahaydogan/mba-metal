/* =========================================================
   IMAGES
========================================================= */

import automotiveImage
    from '../../assets/images/industries/automotive.jpeg';

import whiteGoodsImage
    from '../../assets/images/industries/white-goods.jpeg';

import retailImage
    from '../../assets/images/industries/retail.jpg';

import furnitureImage
    from '../../assets/images/industries/furniture/furniture-hero.png';

import logisticsImage
    from '../../assets/images/industries/logistics.jpg';

import industrialImage
    from '../../assets/images/industries/industrial.jpg';

import defenseAerospaceSecurityImage
    from '../../assets/images/industries/defense-aerospace-security/defense-hero.jpg';

import marineImage
    from '../../assets/images/industries/marine/marine-hero.jpg';

import medicalImage
    from '../../assets/images/industries/medical/medical-hero.png';

import agricultureImage
    from '../../assets/images/industries/agriculture/agriculture-hero.png';

import constructionImage
    from '../../assets/images/industries/construction/construction-hero.png';

/* =========================================================
   ROUTES
========================================================= */

import {
    routes,
} from '../../constants/routes';

/* =========================================================
   TYPES
========================================================= */

export interface IndustryItem {
    id:
    | 'automotive'
    | 'whiteGoods'
    | 'retail'
    | 'furniture'
    | 'logistics'
    | 'railwayIndustrial'
    | 'defenseAerospaceSecurity'
    | 'marine'
    | 'medical'
    | 'agriculture'
    | 'construction';

    image?: string;

    /*
     * Sektör detay sayfası hazırsa
     * ilgili route burada tanımlanır.
     */
    href?: string;
}

export interface IndustrySolutionItem {
    id:
    | 'wireForming'
    | 'weldedComponents'
    | 'tubeComponents'
    | 'customProduction'
    | 'prototypeProduction'
    | 'serialProduction';
}

export interface IndustryApproachItem {
    id:
    | 'technicalRequirements'
    | 'manufacturability'
    | 'qualityRequirements'
    | 'productionVolume'
    | 'packaging'
    | 'delivery';
}

/* =========================================================
   PAGE DATA
========================================================= */

export const industriesPageData = {
    /* =====================================================
       HERO
    ===================================================== */

    hero: {
        contactHref:
            '/iletisim',

        industriesAnchor:
            '#industries-showcase',
    },

    /* =====================================================
       INDUSTRIES
    ===================================================== */

    industries: {
        id:
            'industries-showcase',

        items: [
            {
                id:
                    'automotive',

                image:
                    automotiveImage,

                href:
                    routes.automotive,
            },

            {
                id:
                    'whiteGoods',

                image:
                    whiteGoodsImage,

                href:
                    routes.whiteGoods,
            },

            {
                id:
                    'retail',

                image:
                    retailImage,
            },

            {
                id:
                    'furniture',

                image:
                    furnitureImage,

                href:
                    routes.furniture,
            },

            {
                id:
                    'logistics',

                image:
                    logisticsImage,

                href:
                    routes.logistics,
            },

            {
                id:
                    'railwayIndustrial',

                image:
                    industrialImage,

                href:
                    routes.industrial,
            },

            {
                id:
                    'defenseAerospaceSecurity',

                image:
                    defenseAerospaceSecurityImage,

                href:
                    routes.defenseAerospaceSecurity,
            },

            {
                id:
                    'marine',

                image:
                    marineImage,

                href:
                    routes.marine,
            },

            {
                id: 'medical',
                image: medicalImage,
                href: routes.medical,
            },

            {
                id: 'agriculture',
                image: agricultureImage,
                href: routes.agriculture,
            },

            {
                id: 'construction',
                image: constructionImage,
                href: routes.construction,
            },
        ] satisfies IndustryItem[],
    },

    /* =====================================================
       SOLUTIONS
    ===================================================== */

    solutions: {
        id:
            'industry-solutions',

        items: [
            {
                id:
                    'wireForming',
            },

            {
                id:
                    'weldedComponents',
            },

            {
                id:
                    'tubeComponents',
            },

            {
                id:
                    'customProduction',
            },

            {
                id:
                    'prototypeProduction',
            },

            {
                id:
                    'serialProduction',
            },
        ] satisfies IndustrySolutionItem[],
    },

    /* =====================================================
       APPROACH
    ===================================================== */

    approach: {
        id:
            'industry-approach',

        items: [
            {
                id:
                    'technicalRequirements',
            },

            {
                id:
                    'manufacturability',
            },

            {
                id:
                    'qualityRequirements',
            },

            {
                id:
                    'productionVolume',
            },

            {
                id:
                    'packaging',
            },

            {
                id:
                    'delivery',
            },
        ] satisfies IndustryApproachItem[],
    },

    /* =====================================================
       CTA
    ===================================================== */

    cta: {
        id:
            'industries-contact',

        contactHref:
            '/iletisim',
    },
} as const;