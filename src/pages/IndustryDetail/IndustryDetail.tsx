import {
    Box,
} from '@mui/material';

import {
    Navigate,
    useParams,
} from 'react-router-dom';

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

import {
    logisticsIndustry,
} from '../../data/industries/industry-details/logistics.data';

import {
    industrialIndustry,
} from '../../data/industries/industry-details/industrial.data';

import {
    routes,
} from '../../constants/routes';

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = {
    otomotiv:
        automotiveIndustry,

    'beyaz-esya':
        whiteGoodsIndustry,

    'perakende-magazacilik':
        retailIndustry,

    'lojistik-tasima':
        logisticsIndustry,

    'endustriyel-uretim':
        industrialIndustry,
} as const;

type IndustrySlug =
    keyof typeof industries;

/* =========================================================
   PAGE
========================================================= */

export function IndustryDetail() {
    const {
        industrySlug,
    } = useParams<{
        industrySlug: string;
    }>();

    if (!industrySlug) {
        return (
            <Navigate
                to={
                    routes.industries
                }
                replace
            />
        );
    }

    const industry =
        industries[
            industrySlug as IndustrySlug
        ];

    if (!industry) {
        return (
            <Navigate
                to={
                    routes.industries
                }
                replace
            />
        );
    }

    return (
        <Box component="main">
            <IndustryDetailHeroSection
                industry={
                    industry
                }
            />

            <IndustryOverviewSection
                industry={
                    industry
                }
            />

            <IndustryApplicationsSection
                industry={
                    industry
                }
            />

            <IndustryRequirementsSection
                industry={
                    industry
                }
            />

            <IndustryProductionSection
                industry={
                    industry
                }
            />
        </Box>
    );
}

export default IndustryDetail;