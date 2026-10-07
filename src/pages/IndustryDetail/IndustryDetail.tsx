import {
    Navigate,
    useParams,
} from 'react-router-dom';

import {
    Box,
} from '@mui/material';

import {
    automotiveIndustry,
} from '../../data/industries/industry-details/automotive.data';

import {
    whiteGoodsIndustry,
} from '../../data/industries/industry-details/whiteGoods.data';

import {
    retailIndustry,
} from '../../data/industries/industry-details/retail.data';

import {
    furnitureIndustry,
} from '../../data/industries/industry-details/furniture.data';

import {
    logisticsIndustry,
} from '../../data/industries/industry-details/logistics.data';

import {
    industrialIndustry,
} from '../../data/industries/industry-details/industrial.data';

import {
    defenseAerospaceSecurityIndustry,
} from '../../data/industries/industry-details/defenseAerospaceSecurity.data';

import {
    marineIndustry,
} from '../../data/industries/industry-details/marine.data';

import {
    medicalIndustry,
} from '../../data/industries/industry-details/medical.data';

import {
    agricultureIndustry,
} from '../../data/industries/industry-details/agriculture.data';

import {
    constructionIndustry,
} from '../../data/industries/industry-details/construction.data';

import {
    IndustryDetailHeroSection,
} from '../../sections/industry-detail/IndustryDetailHeroSection';

import {
    IndustryOverviewSection,
} from '../../sections/industry-detail/IndustryOverviewSection';

import {
    IndustryApplicationsSection,
} from '../../sections/industry-detail/IndustryApplicationsSection';

import {
    IndustryRequirementsSection,
} from '../../sections/industry-detail/IndustryRequirementsSection';

import {
    IndustryProductionSection,
} from '../../sections/industry-detail/IndustryProductionSection';

import type {
    IndustryDetail as IndustryDetailType,
} from '../../types/industry-detail.types';

const industries: Record<
    string,
    IndustryDetailType
> = {
    otomotiv:
        automotiveIndustry,

    'beyaz-esya':
        whiteGoodsIndustry,

    'perakende-magazacilik':
        retailIndustry,

    mobilya:
        furnitureIndustry,

    'lojistik-tasima':
        logisticsIndustry,

    'endustriyel-uretim':
        industrialIndustry,

    'savunma-havacilik-guvenlik':
        defenseAerospaceSecurityIndustry,

    'gemi-denizcilik-liman':
        marineIndustry,

    'medikal-hijyen-urunleri':
        medicalIndustry,

    'tarim-hayvancilik':
        agricultureIndustry,

    'insaat-genel-sanayi':
        constructionIndustry,
};

export function IndustryDetail() {
    const {
        industrySlug,
    } = useParams<{
        industrySlug: string;
    }>();

    if (!industrySlug) {
        return (
            <Navigate
                to="/sektorler"
                replace
            />
        );
    }

    const industry =
        industries[industrySlug];

    if (!industry) {
        return (
            <Navigate
                to="/sektorler"
                replace
            />
        );
    }

    return (
        <Box component="main">
            <IndustryDetailHeroSection
                industry={industry}
            />

            <IndustryOverviewSection
                industry={industry}
            />

            <IndustryApplicationsSection
                industry={industry}
            />

            <IndustryRequirementsSection
                industry={industry}
            />

            <IndustryProductionSection
                industry={industry}
            />
        </Box>
    );
}

export default IndustryDetail;