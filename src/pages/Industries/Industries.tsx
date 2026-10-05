import { Box,} from '@mui/material';

import { IndustriesHeroSection,} from '../../sections/industries/IndustriesHeroSection';
import { IndustriesShowcaseSection,} from '../../sections/industries/IndustriesShowcaseSection';
import IndustrySolutionsSection from '../../sections/industries/IndustrySolutionsSection';
import { IndustryApproachSection } from '../../sections/industries/IndustryApproachSection';
import { IndustriesCtaSection } from '../../sections/industries/IndustriesCtaSection';

export function Industries() {
    return (
        <Box component="main">
            <IndustriesHeroSection />
            <IndustriesShowcaseSection />
            <IndustrySolutionsSection />
            <IndustryApproachSection />
            <IndustriesCtaSection />
        </Box>
    );
}

export default Industries;