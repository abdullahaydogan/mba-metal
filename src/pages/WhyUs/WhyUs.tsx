import { Box } from '@mui/material';

import { WhyUsHeroSection } from '../../sections/why-us/WhyUsHeroSection';
import { WhyUsPrinciplesSection } from '../../sections/why-us/WhyUsPrinciplesSection';
import { SolutionExamplesSection } from '../../sections/why-us/SolutionExamplesSection';
import { ProjectFlowSection } from '../../sections/why-us/ProjectFlowSection';
import { ExploreSolutionsSection } from '../../sections/why-us/ExploreSolutionsSection';
import { WhyUsCtaSection } from '../../sections/why-us/WhyUsCtaSection';
import { FlexibleStartSection } from '../../sections/why-us/FlexibleStartSection';

export function WhyUs() {
    return (
        <Box>
            <WhyUsHeroSection />
            <WhyUsPrinciplesSection />
            <SolutionExamplesSection />
            <ProjectFlowSection />
            <ExploreSolutionsSection />
            <FlexibleStartSection />
            <WhyUsCtaSection />
        </Box>
    );
}