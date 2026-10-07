import furnitureHeroImage
    from '../../../assets/images/industries/furniture/furniture-hero.png';

import furnitureProductionImage
    from '../../../assets/images/industries/furniture/furniture-production.png';

import furnitureWireImage
    from '../../../assets/images/industries/furniture/furniture-wire.png';

import furnitureTubeImage
    from '../../../assets/images/industries/furniture/furniture-tube.png';

import furnitureComponentsImage
    from '../../../assets/images/industries/furniture/furniture-components.png';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const furnitureIndustry: IndustryDetail = {
    slug:
        'mobilya',

    translationKey:
        'industryDetail.furniture',

    heroImage:
        furnitureHeroImage,

    overviewImage:
        furnitureProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.furniture.applications.wireComponents.title',

            descriptionKey:
                'industryDetail.furniture.applications.wireComponents.description',

            image:
                furnitureWireImage,
        },

        {
            titleKey:
                'industryDetail.furniture.applications.tubeComponents.title',

            descriptionKey:
                'industryDetail.furniture.applications.tubeComponents.description',

            image:
                furnitureTubeImage,
        },

        {
            titleKey:
                'industryDetail.furniture.applications.metalComponents.title',

            descriptionKey:
                'industryDetail.furniture.applications.metalComponents.description',

            image:
                furnitureComponentsImage,
        },

        {
            titleKey:
                'industryDetail.furniture.applications.customProduction.title',

            descriptionKey:
                'industryDetail.furniture.applications.customProduction.description',

            image:
                furnitureProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.furniture.requirements.dimensionalConsistency.title',

            descriptionKey:
                'industryDetail.furniture.requirements.dimensionalConsistency.description',
        },

        {
            titleKey:
                'industryDetail.furniture.requirements.surfaceQuality.title',

            descriptionKey:
                'industryDetail.furniture.requirements.surfaceQuality.description',
        },

        {
            titleKey:
                'industryDetail.furniture.requirements.assemblyCompatibility.title',

            descriptionKey:
                'industryDetail.furniture.requirements.assemblyCompatibility.description',
        },

        {
            titleKey:
                'industryDetail.furniture.requirements.repeatableProduction.title',

            descriptionKey:
                'industryDetail.furniture.requirements.repeatableProduction.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.furniture.production.wire.need',

            solutionKey:
                'industryDetail.furniture.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.furniture.production.tube.need',

            solutionKey:
                'industryDetail.furniture.production.tube.solution',
        },

        {
            needKey:
                'industryDetail.furniture.production.forming.need',

            solutionKey:
                'industryDetail.furniture.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.furniture.production.joining.need',

            solutionKey:
                'industryDetail.furniture.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.furniture.production.custom.need',

            solutionKey:
                'industryDetail.furniture.production.custom.solution',
        },
    ],
};