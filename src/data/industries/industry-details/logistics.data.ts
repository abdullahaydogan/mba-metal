import logisticsHeroImage
    from '../../../assets/images/industries/logistics.jpg';

import logisticsOverviewImage
    from '../../../assets/images/industries/solutions-production.jpg';

import logisticsWireImage
    from '../../../assets/images/capabilities/wire-bending.jpeg';

import logisticsWeldingImage
    from '../../../assets/images/capabilities/welding.jpg';

import logisticsBendingImage
    from '../../../assets/images/capabilities/metal-bending.jpg';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const logisticsIndustry: IndustryDetail = {
    slug: 'lojistik-tasima',

    translationKey:
        'industryDetail.logistics',

    heroImage:
        logisticsHeroImage,

    overviewImage:
        logisticsOverviewImage,

    applications: [
        {
            titleKey:
                'industryDetail.logistics.applications.transportCages.title',

            descriptionKey:
                'industryDetail.logistics.applications.transportCages.description',

            image:
                logisticsWeldingImage,
        },

        {
            titleKey:
                'industryDetail.logistics.applications.wireComponents.title',

            descriptionKey:
                'industryDetail.logistics.applications.wireComponents.description',

            image:
                logisticsWireImage,
        },

        {
            titleKey:
                'industryDetail.logistics.applications.bentComponents.title',

            descriptionKey:
                'industryDetail.logistics.applications.bentComponents.description',

            image:
                logisticsBendingImage,
        },

        {
            titleKey:
                'industryDetail.logistics.applications.customSolutions.title',

            descriptionKey:
                'industryDetail.logistics.applications.customSolutions.description',

            image:
                logisticsOverviewImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.logistics.requirements.loadResistance.title',

            descriptionKey:
                'industryDetail.logistics.requirements.loadResistance.description',
        },

        {
            titleKey:
                'industryDetail.logistics.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.logistics.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.logistics.requirements.joiningQuality.title',

            descriptionKey:
                'industryDetail.logistics.requirements.joiningQuality.description',
        },

        {
            titleKey:
                'industryDetail.logistics.requirements.repeatProduction.title',

            descriptionKey:
                'industryDetail.logistics.requirements.repeatProduction.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.logistics.production.wire.need',

            solutionKey:
                'industryDetail.logistics.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.logistics.production.joining.need',

            solutionKey:
                'industryDetail.logistics.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.logistics.production.forming.need',

            solutionKey:
                'industryDetail.logistics.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.logistics.production.custom.need',

            solutionKey:
                'industryDetail.logistics.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.logistics.production.control.need',

            solutionKey:
                'industryDetail.logistics.production.control.solution',
        },
    ],
};