import whiteGoodsHeroImage
    from '../../../assets/images/industries/white-goods/white-goods-hero.jpg';

import whiteGoodsProductionImage
    from '../../../assets/images/industries/white-goods/white-goods-production.jpg';

import whiteGoodsWireImage
    from '../../../assets/images/industries/white-goods/white-goods-wire.jpg';

import whiteGoodsWeldingImage
    from '../../../assets/images/industries/white-goods/white-goods-welding.jpg';

import whiteGoodsBendingImage
    from '../../../assets/images/industries/white-goods/white-goods-bending.jpg';

import type {
    IndustryDetail,
} from '../../../types/industry-detail.types';

export const whiteGoodsIndustry: IndustryDetail = {
    slug: 'beyaz-esya',

    translationKey:
        'industryDetail.whiteGoods',

    heroImage:
        whiteGoodsHeroImage,

    overviewImage:
        whiteGoodsProductionImage,

    applications: [
        {
            titleKey:
                'industryDetail.whiteGoods.applications.wireForm.title',

            descriptionKey:
                'industryDetail.whiteGoods.applications.wireForm.description',

            image:
                whiteGoodsWireImage,
        },

        {
            titleKey:
                'industryDetail.whiteGoods.applications.weldedComponents.title',

            descriptionKey:
                'industryDetail.whiteGoods.applications.weldedComponents.description',

            image:
                whiteGoodsWeldingImage,
        },

        {
            titleKey:
                'industryDetail.whiteGoods.applications.bentParts.title',

            descriptionKey:
                'industryDetail.whiteGoods.applications.bentParts.description',

            image:
                whiteGoodsBendingImage,
        },

        {
            titleKey:
                'industryDetail.whiteGoods.applications.serialComponents.title',

            descriptionKey:
                'industryDetail.whiteGoods.applications.serialComponents.description',

            image:
                whiteGoodsProductionImage,
        },
    ],

    requirements: [
        {
            titleKey:
                'industryDetail.whiteGoods.requirements.repeatability.title',

            descriptionKey:
                'industryDetail.whiteGoods.requirements.repeatability.description',
        },

        {
            titleKey:
                'industryDetail.whiteGoods.requirements.dimensionalStability.title',

            descriptionKey:
                'industryDetail.whiteGoods.requirements.dimensionalStability.description',
        },

        {
            titleKey:
                'industryDetail.whiteGoods.requirements.serialProduction.title',

            descriptionKey:
                'industryDetail.whiteGoods.requirements.serialProduction.description',
        },

        {
            titleKey:
                'industryDetail.whiteGoods.requirements.surfaceQuality.title',

            descriptionKey:
                'industryDetail.whiteGoods.requirements.surfaceQuality.description',
        },
    ],

    productionItems: [
        {
            needKey:
                'industryDetail.whiteGoods.production.wire.need',

            solutionKey:
                'industryDetail.whiteGoods.production.wire.solution',
        },

        {
            needKey:
                'industryDetail.whiteGoods.production.joining.need',

            solutionKey:
                'industryDetail.whiteGoods.production.joining.solution',
        },

        {
            needKey:
                'industryDetail.whiteGoods.production.forming.need',

            solutionKey:
                'industryDetail.whiteGoods.production.forming.solution',
        },

        {
            needKey:
                'industryDetail.whiteGoods.production.repeat.need',

            solutionKey:
                'industryDetail.whiteGoods.production.repeat.solution',
        },

        {
            needKey:
                'industryDetail.whiteGoods.production.control.need',

            solutionKey:
                'industryDetail.whiteGoods.production.control.solution',
        },
    ],
};