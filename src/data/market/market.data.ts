import manufacturingImage
    from '../../assets/images/capabilities/manufacturing-worker.jpg';

import energyImage
    from '../../assets/images/industries/solutions-production.jpg';

import {
    routes,
} from '../../constants/routes';

export interface MarketSegmentItem {
    id:
        | 'machineryEquipment'
        | 'energyElectricalHvac';

    number:
        | '01'
        | '02';

    image: string;

    applications: readonly string[];
}

export const marketPageData = {
    hero: {
        segmentsAnchor:
            '#market-segments',

        contactHref:
            routes.contact,
    },

    segments: {
        id:
            'market-segments',

        items: [
            {
                id:
                    'machineryEquipment',

                number:
                    '01',

                image:
                    manufacturingImage,

                applications: [
                    'agricultureConstructionMachinery',
                    'foodProcessingPackaging',
                    'textileMachinery',
                    'plasticInjectionPackaging',
                    'conveyorElevatorLifting',
                    'compressorPumpGeneratorMotor',
                    'industrialOvenBoilerHeating',
                    'warehouseLogisticsEquipment',
                    'machineryMaintenance',
                ],
            },

            {
                id:
                    'energyElectricalHvac',

                number:
                    '02',

                image:
                    energyImage,

                applications: [
                    'solarEnergy',
                    'windEnergy',
                    'electricalPanels',
                    'generatorTransformer',
                    'hvac',
                    'boilerPressureVesselPiping',
                    'dataCenterTelecom',
                    'electricalDistribution',
                ],
            },
        ] satisfies MarketSegmentItem[],
    },

    approach: {
        id:
            'market-approach',

        items: [
            'technicalRequirement',
            'manufacturability',
            'processPlanning',
            'production',
            'qualityControl',
        ],
    },

    cta: {
        id:
            'market-contact',

        contactHref:
            routes.contact,
    },
} as const;