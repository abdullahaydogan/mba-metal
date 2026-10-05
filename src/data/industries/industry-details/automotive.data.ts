import automotiveHeroImage from '../../../assets/images/industries/automotive/automotive-hero.jpg';

import automotiveWireImage from '../../../assets/images/industries/automotive/automotive-wire.jpg';

import automotiveProductionImage from '../../../assets/images/industries/automotive/automotive-production.jpg';

import automotiveBendingImage from '../../../assets/images/industries/automotive/automotive-bending.jpg';

import automotiveTubeBendingImage from '../../../assets/images/industries/automotive/automotive-tube-bending.jpg';

import type { IndustryDetail, } from '../../../types/industry-detail.types';

export const automotiveIndustry: IndustryDetail = {
    slug: 'otomotiv',

    translationKey:
        'industryDetail.automotive',

    heroImage: automotiveHeroImage,

    overviewImage:
        automotiveProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.automotive.applications.wireForm.title',

            descriptionKey:
                'industryDetail.automotive.applications.wireForm.description',

            image: automotiveWireImage,
        },

        {
            titleKey:
                'industryDetail.automotive.applications.weldedComponents.title',

            descriptionKey:
                'industryDetail.automotive.applications.weldedComponents.description',

            image: automotiveProductionImage,
        },

        {
            titleKey:
                'industryDetail.automotive.applications.bentParts.title',

            descriptionKey:
                'industryDetail.automotive.applications.bentParts.description',

            image: automotiveBendingImage,
        },

        {
            titleKey:
                'industryDetail.automotive.applications.tubeParts.title',

            descriptionKey:
                'industryDetail.automotive.applications.tubeParts.description',

            image: automotiveTubeBendingImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.automotive.requirements.repeatability.title',

            descriptionKey:
                'industryDetail.automotive.requirements.repeatability.description',
        },

        {
            titleKey:
                'industryDetail.automotive.requirements.tolerance.title',

            descriptionKey:
                'industryDetail.automotive.requirements.tolerance.description',
        },

        {
            titleKey:
                'industryDetail.automotive.requirements.process.title',

            descriptionKey:
                'industryDetail.automotive.requirements.process.description',
        },

        {
            titleKey:
                'industryDetail.automotive.requirements.quality.title',

            descriptionKey:
                'industryDetail.automotive.requirements.quality.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.automotive.production.wire.need',

            solutionKey:
                'industryDetail.automotive.production.wire.solution',
        },
        {
            needKey:
                'industryDetail.automotive.production.joining.need',

            solutionKey:
                'industryDetail.automotive.production.joining.solution',
        },
        {
            needKey:
                'industryDetail.automotive.production.forming.need',

            solutionKey:
                'industryDetail.automotive.production.forming.solution',
        },
        {
            needKey:
                'industryDetail.automotive.production.repeat.need',

            solutionKey:
                'industryDetail.automotive.production.repeat.solution',
        },
        {
            needKey:
                'industryDetail.automotive.production.control.need',

            solutionKey:
                'industryDetail.automotive.production.control.solution',
        },
    ],
};