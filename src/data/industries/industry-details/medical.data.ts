import medicalHeroImage
    from '../../../assets/images/industries/medical/medical-hero.png';

import medicalProductionImage
    from '../../../assets/images/industries/medical/medical-production.png';

import medicalWireImage
    from '../../../assets/images/industries/medical/medical-wire.png';

import medicalBasketImage
    from '../../../assets/images/industries/medical/medical-basket.png';

import medicalComponentsImage
    from '../../../assets/images/industries/medical/medical-components.png';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const medicalIndustry: IndustryDetail = {
    slug: 'medikal-hijyen-urunleri',

    translationKey:
        'industryDetail.medical',

    heroImage:
        medicalHeroImage,

    overviewImage:
        medicalProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.medical.applications.wireComponents.title',

            descriptionKey:
                'industryDetail.medical.applications.wireComponents.description',

            image:
                medicalWireImage,
        },

        {
            titleKey:
                'industryDetail.medical.applications.wireBaskets.title',

            descriptionKey:
                'industryDetail.medical.applications.wireBaskets.description',

            image:
                medicalBasketImage,
        },

        {
            titleKey:
                'industryDetail.medical.applications.supportComponents.title',

            descriptionKey:
                'industryDetail.medical.applications.supportComponents.description',

            image:
                medicalComponentsImage,
        },

        {
            titleKey:
                'industryDetail.medical.applications.customComponents.title',

            descriptionKey:
                'industryDetail.medical.applications.customComponents.description',

            image:
                medicalProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.medical.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.medical.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.medical.requirements.surfaceQuality.title',

            descriptionKey:
                'industryDetail.medical.requirements.surfaceQuality.description',
        },

        {
            titleKey:
                'industryDetail.medical.requirements.joiningQuality.title',

            descriptionKey:
                'industryDetail.medical.requirements.joiningQuality.description',
        },

        {
            titleKey:
                'industryDetail.medical.requirements.repeatableProduction.title',

            descriptionKey:
                'industryDetail.medical.requirements.repeatableProduction.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.medical.production.wire.need',

            solutionKey:
                'industryDetail.medical.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.medical.production.basket.need',

            solutionKey:
                'industryDetail.medical.production.basket.solution',
        },

        {
            needKey:
                'industryDetail.medical.production.joining.need',

            solutionKey:
                'industryDetail.medical.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.medical.production.custom.need',

            solutionKey:
                'industryDetail.medical.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.medical.production.control.need',

            solutionKey:
                'industryDetail.medical.production.control.solution',
        },
    ],
};