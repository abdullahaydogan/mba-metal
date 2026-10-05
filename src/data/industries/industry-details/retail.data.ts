import retailHeroImage
    from '../../../assets/images/industries/retail.jpg';

import retailOverviewImage
    from '../../../assets/images/industries/solutions-production1.jpg';

import retailWireImage
    from '../../../assets/images/industries/white-goods/white-goods-wire.jpg';

import retailWeldingImage
    from '../../../assets/images/industries/white-goods/white-goods-welding.jpg';

import retailBendingImage
    from '../../../assets/images/capabilities/wire-bending.jpeg';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const retailIndustry: IndustryDetail = {
    slug: 'perakende-magazacilik',

    translationKey:
        'industryDetail.retail',

    heroImage:
        retailHeroImage,

    overviewImage:
        retailOverviewImage,

    applications: [
        {
            titleKey:
                'industryDetail.retail.applications.wireSystems.title',

            descriptionKey:
                'industryDetail.retail.applications.wireSystems.description',

            image:
                retailWireImage,
        },

        {
            titleKey:
                'industryDetail.retail.applications.weldedComponents.title',

            descriptionKey:
                'industryDetail.retail.applications.weldedComponents.description',

            image:
                retailWeldingImage,
        },

        {
            titleKey:
                'industryDetail.retail.applications.displayComponents.title',

            descriptionKey:
                'industryDetail.retail.applications.displayComponents.description',

            image:
                retailBendingImage,
        },

        {
            titleKey:
                'industryDetail.retail.applications.customEquipment.title',

            descriptionKey:
                'industryDetail.retail.applications.customEquipment.description',

            image:
                retailOverviewImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.retail.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.retail.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.retail.requirements.joiningQuality.title',

            descriptionKey:
                'industryDetail.retail.requirements.joiningQuality.description',
        },

        {
            titleKey:
                'industryDetail.retail.requirements.visualQuality.title',

            descriptionKey:
                'industryDetail.retail.requirements.visualQuality.description',
        },

        {
            titleKey:
                'industryDetail.retail.requirements.repeatProduction.title',

            descriptionKey:
                'industryDetail.retail.requirements.repeatProduction.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.retail.production.wire.need',

            solutionKey:
                'industryDetail.retail.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.retail.production.joining.need',

            solutionKey:
                'industryDetail.retail.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.retail.production.forming.need',

            solutionKey:
                'industryDetail.retail.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.retail.production.custom.need',

            solutionKey:
                'industryDetail.retail.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.retail.production.control.need',

            solutionKey:
                'industryDetail.retail.production.control.solution',
        },
    ],
};