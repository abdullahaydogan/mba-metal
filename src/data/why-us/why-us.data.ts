import type {
    LucideIcon,
} from 'lucide-react';

import {
    Boxes,
    Camera,
    CircleCheckBig,
    DraftingCompass,
    Factory,
    FileSearch,
    Gauge,
    Layers3,
    PackageCheck,
    PackageSearch,
    PanelTop,
    Repeat2,
    Settings2,
    ShoppingBasket,
    Store,
    Target,
    UnfoldHorizontal,
    Workflow,
    Wrench,
} from 'lucide-react';

/* =========================================================
   TYPES
========================================================= */

export interface WhyUsStartingPointItem {
    id:
        | 'technicalDrawing'
        | 'sample'
        | 'photoMeasurement'
        | 'prototypeToSerial';

    icon: LucideIcon;
}

export interface WhyUsPrincipleItem {
    id:
        | 'projectFocus'
        | 'flexibleStart'
        | 'manufacturability'
        | 'multiCapability'
        | 'projectScale'
        | 'continuity';

    icon: LucideIcon;
}

export interface SolutionExampleItem {
    id:
        | 'customProduction'
        | 'existingProduct'
        | 'prototypeToSerial'
        | 'industryAndProduction'
        | 'retailAndDisplay'
        | 'logisticsAndOperations';

    icon: LucideIcon;
}

export interface ProjectFlowItem {
    id:
        | 'shareRequest'
        | 'manufacturability'
        | 'sampleFirstProduct'
        | 'productionPlan';

    icon: LucideIcon;
}

export interface ExploreSolutionItem {
    id:
        | 'cncWireBending'
        | 'industrialWireForming'
        | 'shelfHooks'
        | 'wireShelfSystems'
        | 'marketWireBaskets'
        | 'aboutMbaMetal';

    href: string;

    icon: LucideIcon;
}

export interface FlexibleStartNamingItem {
    id:
        | 'shelfHook'
        | 'wireHanger'
        | 'panelHook'
        | 'productHangerRod';
}

export interface FlexibleStartChecklistItem {
    id:
        | 'photo'
        | 'dimensions'
        | 'usage'
        | 'material'
        | 'quantity'
        | 'tolerances';
}

export interface FlexibleStartCapabilityItem {
    id:
        | 'cncWireBending'
        | 'industrialWireForming';

    href: string;

    icon: LucideIcon;
}

export interface WhyUsTrustItem {
    id:
        | 'projectBasedEvaluation'
        | 'multiProcessApproach'
        | 'productionContinuity';

    icon: LucideIcon;
}

/* =========================================================
   PAGE DATA
========================================================= */

export const whyUsPageData = {
    /* =====================================================
       HERO
    ===================================================== */

    hero: {
        primaryActionHref:
            '/iletisim',

        secondaryActionHref:
            '/hakkimizda',

        startingPoints: [
            {
                id: 'technicalDrawing',
                icon: DraftingCompass,
            },
            {
                id: 'sample',
                icon: PackageSearch,
            },
            {
                id: 'photoMeasurement',
                icon: Camera,
            },
            {
                id: 'prototypeToSerial',
                icon: Workflow,
            },
        ] satisfies WhyUsStartingPointItem[],
    },

    /* =====================================================
       PRINCIPLES
    ===================================================== */

    principles: {
        items: [
            {
                id: 'projectFocus',
                icon: Target,
            },
            {
                id: 'flexibleStart',
                icon: FileSearch,
            },
            {
                id: 'manufacturability',
                icon: Gauge,
            },
            {
                id: 'multiCapability',
                icon: Layers3,
            },
            {
                id: 'projectScale',
                icon: Boxes,
            },
            {
                id: 'continuity',
                icon: Repeat2,
            },
        ] satisfies WhyUsPrincipleItem[],
    },

    /* =====================================================
       SOLUTION EXAMPLES
    ===================================================== */

    solutionExamples: {
        id: 'solution-examples',

        examples: [
            {
                id: 'customProduction',
                icon: Settings2,
            },
            {
                id: 'existingProduct',
                icon: Repeat2,
            },
            {
                id: 'prototypeToSerial',
                icon: Boxes,
            },
            {
                id: 'industryAndProduction',
                icon: Factory,
            },
            {
                id: 'retailAndDisplay',
                icon: ShoppingBasket,
            },
            {
                id: 'logisticsAndOperations',
                icon: PackageCheck,
            },
        ] satisfies SolutionExampleItem[],
    },

    /* =====================================================
       PROJECT FLOW
    ===================================================== */

    projectFlow: {
        id: 'project-flow',

        items: [
            {
                id: 'shareRequest',
                icon: FileSearch,
            },
            {
                id: 'manufacturability',
                icon: Gauge,
            },
            {
                id: 'sampleFirstProduct',
                icon: Wrench,
            },
            {
                id: 'productionPlan',
                icon: Factory,
            },
        ] satisfies ProjectFlowItem[],
    },

    /* =====================================================
       EXPLORE SOLUTIONS
    ===================================================== */

    exploreSolutions: {
        id: 'explore-solutions',

        items: [
            {
                id: 'cncWireBending',

                href:
                    '/uretim-kabiliyetleri',

                icon: UnfoldHorizontal,
            },
            {
                id: 'industrialWireForming',

                href:
                    '/uretim-kabiliyetleri',

                icon: Settings2,
            },
            {
                id: 'shelfHooks',

                href:
                    '/projeler',

                icon: PanelTop,
            },
            {
                id: 'wireShelfSystems',

                href:
                    '/projeler',

                icon: Store,
            },
            {
                id: 'marketWireBaskets',

                href:
                    '/projeler',

                icon: ShoppingBasket,
            },
            {
                id: 'aboutMbaMetal',

                href:
                    '/hakkimizda',

                icon: Factory,
            },
        ] satisfies ExploreSolutionItem[],
    },

    /* =====================================================
       FLEXIBLE START
    ===================================================== */

    flexibleStart: {
        id: 'flexible-start',

        paragraphIds: [
            'paragraph1',
            'paragraph2',
            'paragraph3',
        ] as const,

        namingExample: {
            items: [
                {
                    id: 'shelfHook',
                },
                {
                    id: 'wireHanger',
                },
                {
                    id: 'panelHook',
                },
                {
                    id: 'productHangerRod',
                },
            ] satisfies FlexibleStartNamingItem[],
        },

        existingProduct: {
            checklist: [
                {
                    id: 'photo',
                },
                {
                    id: 'dimensions',
                },
                {
                    id: 'usage',
                },
                {
                    id: 'material',
                },
                {
                    id: 'quantity',
                },
                {
                    id: 'tolerances',
                },
            ] satisfies FlexibleStartChecklistItem[],
        },

        relatedCapabilities: [
            {
                id: 'cncWireBending',

                href:
                    '/uretim-kabiliyetleri',

                icon: UnfoldHorizontal,
            },
            {
                id: 'industrialWireForming',

                href:
                    '/uretim-kabiliyetleri',

                icon: Settings2,
            },
        ] satisfies FlexibleStartCapabilityItem[],
    },

    /* =====================================================
       CTA
    ===================================================== */

    cta: {
        id: 'why-us-contact',

        primaryActionHref:
            '/hizli-teklif',

        secondaryActionHref:
            '/iletisim',

        trustItems: [
            {
                id:
                    'projectBasedEvaluation',

                icon: FileSearch,
            },
            {
                id:
                    'multiProcessApproach',

                icon: Factory,
            },
            {
                id:
                    'productionContinuity',

                icon: CircleCheckBig,
            },
        ] satisfies WhyUsTrustItem[],
    },
} as const;