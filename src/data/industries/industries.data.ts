/* =========================================================
   IMAGES
========================================================= */

import automotiveImage
    from '../../assets/images/industries/automotive.jpeg';

import whiteGoodsImage
    from '../../assets/images/industries/white-goods.jpeg';

import retailImage
    from '../../assets/images/industries/retail.jpg';

import logisticsImage
    from '../../assets/images/industries/logistics.jpg';

import industrialImage
    from '../../assets/images/industries/industrial.jpg';

import defenseAerospaceSecurityImage
    from '../../assets/images/industries/defense-aerospace-security/defense-hero.jpg';

import marineImage
    from '../../assets/images/industries/marine/marine-hero.jpg';

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
                id:
                    'medical',
            },

            {
                id:
                    'agriculture',
            },

            {
                id:
                    'construction',
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