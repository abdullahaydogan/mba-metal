import {
    Box,
} from '@mui/material';

import {
    MarketHeroSection,
} from '../../sections/market/MarketHeroSection';

import {
    MarketSegmentsSection,
} from '../../sections/market/MarketSegmentsSection';

import {
    MarketApproachSection,
} from '../../sections/market/MarketApproachSection';

import {
    MarketCtaSection,
} from '../../sections/market/MarketCtaSection';

export function Market() {
    return (
        <Box component="main">
            <MarketHeroSection />
            <MarketSegmentsSection />
            <MarketApproachSection />
            <MarketCtaSection />
        </Box>
    );
}

export default Market;