import defenseHeroImage
    from '../../../assets/images/industries/defense-aerospace-security/defense-hero.jpg';

import defenseWireImage
    from '../../../assets/images/industries/defense-aerospace-security/defense-wire.jpg';

import defenseProductionImage
    from '../../../assets/images/industries/defense-aerospace-security/defense-production.jpg';

import defenseBendingImage
    from '../../../assets/images/industries/defense-aerospace-security/defense-bending.jpg';

import defenseWeldingImage
    from '../../../assets/images/industries/defense-aerospace-security/defense-welding.jpg';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const defenseAerospaceSecurityIndustry: IndustryDetail = {
    slug: 'savunma-havacilik-guvenlik',

    translationKey:
        'industryDetail.defenseAerospaceSecurity',

    heroImage:
        defenseHeroImage,

    overviewImage:
        defenseProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.applications.wireComponents.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.applications.wireComponents.description',

            image:
                defenseWireImage,
        },

        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.applications.weldedComponents.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.applications.weldedComponents.description',

            image:
                defenseWeldingImage,
        },

        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.applications.bentComponents.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.applications.bentComponents.description',

            image:
                defenseBendingImage,
        },

        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.applications.customComponents.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.applications.customComponents.description',

            image:
                defenseProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.requirements.precision.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.requirements.precision.description',
        },

        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.requirements.repeatability.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.requirements.repeatability.description',
        },

        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.requirements.traceability.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.requirements.traceability.description',
        },

        {
            titleKey:
                'industryDetail.defenseAerospaceSecurity.requirements.quality.title',

            descriptionKey:
                'industryDetail.defenseAerospaceSecurity.requirements.quality.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.defenseAerospaceSecurity.production.wire.need',

            solutionKey:
                'industryDetail.defenseAerospaceSecurity.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.defenseAerospaceSecurity.production.forming.need',

            solutionKey:
                'industryDetail.defenseAerospaceSecurity.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.defenseAerospaceSecurity.production.joining.need',

            solutionKey:
                'industryDetail.defenseAerospaceSecurity.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.defenseAerospaceSecurity.production.repeat.need',

            solutionKey:
                'industryDetail.defenseAerospaceSecurity.production.repeat.solution',
        },

        {
            needKey:
                'industryDetail.defenseAerospaceSecurity.production.control.need',

            solutionKey:
                'industryDetail.defenseAerospaceSecurity.production.control.solution',
        },
    ],
};