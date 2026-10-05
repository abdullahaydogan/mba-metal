import aboutImage from '../../assets/images/about/About.jpg';

import wireBendingImage from '../../assets/images/capabilities/wire-bending.jpeg';
import weldingImage from '../../assets/images/capabilities/welding.jpg';
import metalBendingImage from '../../assets/images/capabilities/metal-bending.jpg';
import manufacturingImage from '../../assets/images/capabilities/manufacturing-worker.jpg';

import automotiveImage from '../../assets/images/industries/automotive.jpeg';
import whiteGoodsImage from '../../assets/images/industries/white-goods.jpeg';
import logisticsImage from '../../assets/images/industries/logistics.jpg';
import retailImage from '../../assets/images/industries/retail.jpg';
import industrialImage from '../../assets/images/industries/industrial.jpg';

import qualityImage from '../../assets/images/quality/industrial-quality.jpg';

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface CompanyStoryData {
    image: string;
}

export interface ManufacturingCapability {
    id: string;
    image: string;
}

export interface ManufacturingCapabilitiesData {
    items: ManufacturingCapability[];
}

export interface WorkingApproachItem {
    id: string;
}

export interface WorkingApproachData {
    items: WorkingApproachItem[];
}

export interface ProductionApproachStep {
    id: string;
}

export interface ProductionApproachData {
    steps: ProductionApproachStep[];
}

export interface IndustryShowcaseItem {
    id: string;
    image: string;
}

export interface IndustriesShowcaseData {
    items: IndustryShowcaseItem[];
}

export interface QualityApproachItem {
    id: string;
}

export interface QualityApproachData {
    image: string;
    items: QualityApproachItem[];
}

/* -------------------------------------------------------------------------- */
/*                               COMPANY STORY                                */
/* -------------------------------------------------------------------------- */

export const companyStoryData: CompanyStoryData = {
    image: aboutImage,
};

/* -------------------------------------------------------------------------- */
/*                        MANUFACTURING CAPABILITIES                          */
/* -------------------------------------------------------------------------- */

export const manufacturingCapabilitiesData: ManufacturingCapabilitiesData = {
    items: [
        {
            id: 'wireForming',
            image: wireBendingImage,
        },
        {
            id: 'metalForming',
            image: metalBendingImage,
        },
        {
            id: 'weldingJoining',
            image: weldingImage,
        },
        {
            id: 'prototypeSerialProduction',
            image: manufacturingImage,
        },
    ],
};

/* -------------------------------------------------------------------------- */
/*                           WORKING APPROACH                                 */
/* -------------------------------------------------------------------------- */

export const workingApproachData: WorkingApproachData = {
    items: [
        {
            id: 'understandRequirement',
        },
        {
            id: 'evaluateManufacturability',
        },
        {
            id: 'sampleValidation',
        },
        {
            id: 'repeatableProduction',
        },
    ],
};

/* -------------------------------------------------------------------------- */
/*                          PRODUCTION APPROACH                               */
/* -------------------------------------------------------------------------- */

export const productionApproachData: ProductionApproachData = {
    steps: [
        {
            id: 'technicalNeed',
        },
        {
            id: 'projectPlanning',
        },
        {
            id: 'production',
        },
        {
            id: 'qualityControl',
        },
        {
            id: 'shipment',
        },
    ],
};

/* -------------------------------------------------------------------------- */
/*                          INDUSTRIES SHOWCASE                               */
/* -------------------------------------------------------------------------- */

export const industriesShowcaseData: IndustriesShowcaseData = {
    items: [
        {
            id: 'automotive',
            image: automotiveImage,
        },
        {
            id: 'whiteGoods',
            image: whiteGoodsImage,
        },
        {
            id: 'retail',
            image: retailImage,
        },
        {
            id: 'logistics',
            image: logisticsImage,
        },
        {
            id: 'industrial',
            image: industrialImage,
        },
    ],
};

/* -------------------------------------------------------------------------- */
/*                           QUALITY APPROACH                                 */
/* -------------------------------------------------------------------------- */

export const qualityApproachData: QualityApproachData = {
    image: qualityImage,

    items: [
        {
            id: 'dimensionalControl',
        },
        {
            id: 'visualControl',
        },
        {
            id: 'processControl',
        },
        {
            id: 'repeatability',
        },
    ],
};