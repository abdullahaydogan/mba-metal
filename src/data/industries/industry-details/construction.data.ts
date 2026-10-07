import constructionHeroImage
    from '../../../assets/images/industries/construction/construction-hero.png';

import constructionProductionImage
    from '../../../assets/images/industries/construction/construction-production.png';

import constructionWireImage
    from '../../../assets/images/industries/construction/construction-wire.png';

import constructionStructuresImage
    from '../../../assets/images/industries/construction/construction-structures.png';

import constructionPartsImage
    from '../../../assets/images/industries/construction/construction-parts.png';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const constructionIndustry: IndustryDetail = {
    slug: 'insaat-genel-sanayi',

    translationKey:
        'industryDetail.construction',

    heroImage:
        constructionHeroImage,

    overviewImage:
        constructionProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.construction.applications.wireParts.title',

            descriptionKey:
                'industryDetail.construction.applications.wireParts.description',

            image:
                constructionWireImage,
        },

        {
            titleKey:
                'industryDetail.construction.applications.wireStructures.title',

            descriptionKey:
                'industryDetail.construction.applications.wireStructures.description',

            image:
                constructionStructuresImage,
        },

        {
            titleKey:
                'industryDetail.construction.applications.supportParts.title',

            descriptionKey:
                'industryDetail.construction.applications.supportParts.description',

            image:
                constructionPartsImage,
        },

        {
            titleKey:
                'industryDetail.construction.applications.customParts.title',

            descriptionKey:
                'industryDetail.construction.applications.customParts.description',

            image:
                constructionProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.construction.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.construction.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.construction.requirements.structuralSuitability.title',

            descriptionKey:
                'industryDetail.construction.requirements.structuralSuitability.description',
        },

        {
            titleKey:
                'industryDetail.construction.requirements.joiningQuality.title',

            descriptionKey:
                'industryDetail.construction.requirements.joiningQuality.description',
        },

        {
            titleKey:
                'industryDetail.construction.requirements.repeatableProduction.title',

            descriptionKey:
                'industryDetail.construction.requirements.repeatableProduction.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.construction.production.wire.need',

            solutionKey:
                'industryDetail.construction.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.construction.production.structures.need',

            solutionKey:
                'industryDetail.construction.production.structures.solution',
        },

        {
            needKey:
                'industryDetail.construction.production.joining.need',

            solutionKey:
                'industryDetail.construction.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.construction.production.custom.need',

            solutionKey:
                'industryDetail.construction.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.construction.production.control.need',

            solutionKey:
                'industryDetail.construction.production.control.solution',
        },
    ],
};