import industrialHeroImage
    from '../../../assets/images/industries/industrial.jpg';

import industrialOverviewImage
    from '../../../assets/images/industries/solutions-production1.jpg';

import industrialWireImage
    from '../../../assets/images/capabilities/wire-bending.jpeg';

import industrialWeldingImage
    from '../../../assets/images/capabilities/welding.jpg';

import industrialBendingImage
    from '../../../assets/images/capabilities/metal-bending.jpg';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const industrialIndustry: IndustryDetail = {
    slug: 'endustriyel-uretim',

    translationKey:
        'industryDetail.industrial',

    heroImage:
        industrialHeroImage,

    overviewImage:
        industrialOverviewImage,

    applications: [
        {
            titleKey:
                'industryDetail.industrial.applications.wireComponents.title',

            descriptionKey:
                'industryDetail.industrial.applications.wireComponents.description',

            image:
                industrialWireImage,
        },

        {
            titleKey:
                'industryDetail.industrial.applications.weldedAssemblies.title',

            descriptionKey:
                'industryDetail.industrial.applications.weldedAssemblies.description',

            image:
                industrialWeldingImage,
        },

        {
            titleKey:
                'industryDetail.industrial.applications.formedParts.title',

            descriptionKey:
                'industryDetail.industrial.applications.formedParts.description',

            image:
                industrialBendingImage,
        },

        {
            titleKey:
                'industryDetail.industrial.applications.customComponents.title',

            descriptionKey:
                'industryDetail.industrial.applications.customComponents.description',

            image:
                industrialOverviewImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.industrial.requirements.manufacturability.title',

            descriptionKey:
                'industryDetail.industrial.requirements.manufacturability.description',
        },

        {
            titleKey:
                'industryDetail.industrial.requirements.tolerance.title',

            descriptionKey:
                'industryDetail.industrial.requirements.tolerance.description',
        },

        {
            titleKey:
                'industryDetail.industrial.requirements.processStability.title',

            descriptionKey:
                'industryDetail.industrial.requirements.processStability.description',
        },

        {
            titleKey:
                'industryDetail.industrial.requirements.qualityControl.title',

            descriptionKey:
                'industryDetail.industrial.requirements.qualityControl.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.industrial.production.wire.need',

            solutionKey:
                'industryDetail.industrial.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.industrial.production.joining.need',

            solutionKey:
                'industryDetail.industrial.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.industrial.production.forming.need',

            solutionKey:
                'industryDetail.industrial.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.industrial.production.custom.need',

            solutionKey:
                'industryDetail.industrial.production.custom.solution',
        },

        {
            needKey:
                'industryDetail.industrial.production.control.need',

            solutionKey:
                'industryDetail.industrial.production.control.solution',
        },
    ],
};