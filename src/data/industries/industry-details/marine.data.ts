import marineHeroImage
    from '../../../assets/images/industries/marine/marine-hero.jpg';

import marineProductionImage
    from '../../../assets/images/industries/marine/marine-production.jpg';

import marineMetalComponentsImage
    from '../../../assets/images/industries/marine/marine-metal-components.jpg';

import marineWeldingImage
    from '../../../assets/images/industries/marine/marine-welding.jpg';

import marinePortImage
    from '../../../assets/images/industries/marine/marine-port.jpg';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const marineIndustry: IndustryDetail = {
    slug:
        'gemi-denizcilik-liman',

    translationKey:
        'industryDetail.marine',

    heroImage:
        marineHeroImage,

    overviewImage:
        marineProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.marine.applications.metalComponents.title',

            descriptionKey:
                'industryDetail.marine.applications.metalComponents.description',

            image:
                marineMetalComponentsImage,
        },

        {
            titleKey:
                'industryDetail.marine.applications.weldedComponents.title',

            descriptionKey:
                'industryDetail.marine.applications.weldedComponents.description',

            image:
                marineWeldingImage,
        },

        {
            titleKey:
                'industryDetail.marine.applications.portEquipment.title',

            descriptionKey:
                'industryDetail.marine.applications.portEquipment.description',

            image:
                marinePortImage,
        },

        {
            titleKey:
                'industryDetail.marine.applications.customComponents.title',

            descriptionKey:
                'industryDetail.marine.applications.customComponents.description',

            image:
                marineProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.marine.requirements.corrosionResistance.title',

            descriptionKey:
                'industryDetail.marine.requirements.corrosionResistance.description',
        },

        {
            titleKey:
                'industryDetail.marine.requirements.durability.title',

            descriptionKey:
                'industryDetail.marine.requirements.durability.description',
        },

        {
            titleKey:
                'industryDetail.marine.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.marine.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.marine.requirements.productionQuality.title',

            descriptionKey:
                'industryDetail.marine.requirements.productionQuality.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.marine.production.wire.need',

            solutionKey:
                'industryDetail.marine.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.marine.production.forming.need',

            solutionKey:
                'industryDetail.marine.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.marine.production.joining.need',

            solutionKey:
                'industryDetail.marine.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.marine.production.custom.need',

            solutionKey:
                'industryDetail.marine.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.marine.production.control.need',

            solutionKey:
                'industryDetail.marine.production.control.solution',
        },
    ],
};