import {
    Activity,
    Box,
    CheckCircle2,
    CircleDot,
    Factory,
    GitBranch,
    Layers3,
    PackageCheck,
    RefreshCw,
    Ruler,
    Settings,
    Sparkles,
    Wrench,
    type LucideIcon,
} from 'lucide-react';

import manufacturingWorkerImage from '../../assets/images/capabilities/manufacturing-worker.jpg';
import wireBendingImage from '../../assets/images/capabilities/wire-bending.jpg';
import wireBendingDetailImage from '../../assets/images/capabilities/wire-bending.jpeg';
import weldingImage from '../../assets/images/capabilities/welding.jpg';
import metalBendingImage from '../../assets/images/capabilities/metal-bending.jpg';

/* =========================================================
   TYPES
========================================================= */

export interface ProductionApproachItem {
    key: string;
    icon: LucideIcon;
}

export interface MainCapabilityItem {
    slug: string;
    href: string;
    image: string;
    icon: LucideIcon;
}

export interface PartnerProcessGroup {
    key: string;
}

export interface ProjectFlowItem {
    key: string;
    icon: LucideIcon;
}

export interface QuoteRequirementItem {
    key: string;
}

/* =========================================================
   DATA
========================================================= */

export const capabilitiesPageData = {
    /* =====================================================
       HERO
    ===================================================== */

    hero: {
        primaryAction: {
            href: '/iletisim',
        },

        secondaryAction: {
            href: '#main-capabilities',
        },

        image: manufacturingWorkerImage,
    },

    /* =====================================================
       PRODUCTION APPROACH
    ===================================================== */

    productionApproach: {
        id: 'production-approach',

        items: [
            {
                key: 'cad',
                icon: Ruler,
            },
            {
                key: 'dfm',
                icon: GitBranch,
            },
            {
                key: 'prototype',
                icon: RefreshCw,
            },
            {
                key: 'processes',
                icon: Settings,
            },
            {
                key: 'stainless',
                icon: Activity,
            },
            {
                key: 'management',
                icon: CheckCircle2,
            },
        ] satisfies ProductionApproachItem[],
    },

    /* =====================================================
       MAIN CAPABILITIES
    ===================================================== */

    mainCapabilities: {
        id: 'main-capabilities',

        items: [
            {
                slug: 'tel-cekme',
                href: '/uretim-kabiliyetleri/tel-cekme',
                image: manufacturingWorkerImage,
                icon: Activity,
            },
            {
                slug: 'cnc-tel-bukme',
                href: '/uretim-kabiliyetleri/cnc-tel-bukme',
                image: wireBendingImage,
                icon: GitBranch,
            },
            {
                slug: '2d-3d-tel-sekillendirme',
                href:
                    '/uretim-kabiliyetleri/2d-3d-tel-sekillendirme',
                image: wireBendingDetailImage,
                icon: Layers3,
            },
            {
                slug: 'mig-tig-kaynak',
                href: '/iletisim',
                image: weldingImage,
                icon: Sparkles,
            },
            {
                slug: 'puntali-kaynak',
                href:
                    '/uretim-kabiliyetleri/puntali-kaynak',
                image: weldingImage,
                icon: CircleDot,
            },
            {
                slug: 'dis-acma',
                href: '/iletisim',
                image: metalBendingImage,
                icon: Settings,
            },
            {
                slug: 'boru-bukme',
                href: '/iletisim',
                image: metalBendingImage,
                icon: RefreshCw,
            },
            {
                slug: 'paslanmaz-celik-isleme',
                href: '/hizli-teklif',
                image: metalBendingImage,
                icon: Wrench,
            },
            {
                slug: 'prototip-seri-uretim',
                href: '/iletisim',
                image: manufacturingWorkerImage,
                icon: Factory,
            },
        ] satisfies MainCapabilityItem[],
    },

    /* =====================================================
       PARTNER PROCESSES
    ===================================================== */

    partnerProcesses: {
        id: 'partner-processes',

        image: manufacturingWorkerImage,

        groups: [
            {
                key: 'manufacturing',
            },
            {
                key: 'surface',
            },
        ] satisfies PartnerProcessGroup[],

        coordination: {
            steps: [
                'technicalSpecification',
                'partnerProcess',
                'processTracking',
                'qualityControl',
                'shipping',
            ],
        },
    },

    /* =====================================================
       PROJECT FLOW
    ===================================================== */

    projectFlow: {
        id: 'project-flow',

        items: [
            {
                key: 'technicalRequest',
                icon: Ruler,
            },
            {
                key: 'dfmReview',
                icon: Settings,
            },
            {
                key: 'quoteSample',
                icon: Box,
            },
            {
                key: 'serialProduction',
                icon: Factory,
            },
            {
                key: 'inspectionShipping',
                icon: PackageCheck,
            },
        ] satisfies ProjectFlowItem[],
    },

    /* =====================================================
       OEM / CONTRACT MANUFACTURING
    ===================================================== */

    oemProduction: {
        id: 'oem-fason-uretim',
    },

    /* =====================================================
       QUOTE REQUIREMENTS
    ===================================================== */

    quoteRequirements: {
        id: 'teklif-bilgileri',

        items: [
            {
                key: 'technicalDocument',
            },
            {
                key: 'materialDimensions',
            },
            {
                key: 'tolerances',
            },
            {
                key: 'quantity',
            },
            {
                key: 'additionalProcesses',
            },
            {
                key: 'packagingDelivery',
            },
        ] satisfies QuoteRequirementItem[],
    },

    /* =====================================================
       FAQ
    ===================================================== */

    faq: {
        id: 'faq',

        items: [
            'customParts',
            'prototype',
            'weldingThreading',
            'partnerProcesses',
            'coating',
            'minimumOrder',
        ],
    },

    /* =====================================================
       FINAL CTA
    ===================================================== */

    finalCta: {
        id: 'capabilities-contact',

        primaryAction: {
            href: '/iletisim',
        },

        secondaryAction: {
            href: '/iletisim',
        },
    },
};