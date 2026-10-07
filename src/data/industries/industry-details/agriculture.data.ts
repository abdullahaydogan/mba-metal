import agricultureHeroImage
    from '../../../assets/images/industries/agriculture/agriculture-hero.png';

import agricultureProductionImage
    from '../../../assets/images/industries/agriculture/agriculture-production.png';

import agricultureWireImage
    from '../../../assets/images/industries/agriculture/agriculture-wire.png';

import agricultureProtectionImage
    from '../../../assets/images/industries/agriculture/agriculture-protection.png';

import agricultureLivestockImage
    from '../../../assets/images/industries/agriculture/agriculture-livestock.png';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const agricultureIndustry: IndustryDetail = {
    slug: 'tarim-hayvancilik',

    translationKey:
        'industryDetail.agriculture',

    heroImage:
        agricultureHeroImage,

    overviewImage:
        agricultureProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.agriculture.applications.wireParts.title',

            descriptionKey:
                'industryDetail.agriculture.applications.wireParts.description',

            image:
                agricultureWireImage,
        },

        {
            titleKey:
                'industryDetail.agriculture.applications.protectionStructures.title',

            descriptionKey:
                'industryDetail.agriculture.applications.protectionStructures.description',

            image:
                agricultureProtectionImage,
        },

        {
            titleKey:
                'industryDetail.agriculture.applications.livestockEquipment.title',

            descriptionKey:
                'industryDetail.agriculture.applications.livestockEquipment.description',

            image:
                agricultureLivestockImage,
        },

        {
            titleKey:
                'industryDetail.agriculture.applications.customParts.title',

            descriptionKey:
                'industryDetail.agriculture.applications.customParts.description',

            image:
                agricultureProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.agriculture.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.agriculture.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.agriculture.requirements.structuralDurability.title',

            descriptionKey:
                'industryDetail.agriculture.requirements.structuralDurability.description',
        },

        {
            titleKey:
                'industryDetail.agriculture.requirements.joiningQuality.title',

            descriptionKey:
                'industryDetail.agriculture.requirements.joiningQuality.description',
        },

        {
            titleKey:
                'industryDetail.agriculture.requirements.repeatableProduction.title',

            descriptionKey:
                'industryDetail.agriculture.requirements.repeatableProduction.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.agriculture.production.wire.need',

            solutionKey:
                'industryDetail.agriculture.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.agriculture.production.protection.need',

            solutionKey:
                'industryDetail.agriculture.production.protection.solution',
        },

        {
            needKey:
                'industryDetail.agriculture.production.joining.need',

            solutionKey:
                'industryDetail.agriculture.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.agriculture.production.custom.need',

            solutionKey:
                'industryDetail.agriculture.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.agriculture.production.control.need',

            solutionKey:
                'industryDetail.agriculture.production.control.solution',
        },
    ],
};