import { Box } from '@mui/material';

import { CapabilitiesHeroSection } from '../../sections/capabilities/CapabilitiesHeroSection';
import { ProductionApproachSection } from '../../sections/capabilities/ProductionApproachSection';
import { MainCapabilitiesSection } from '../../sections/capabilities/MainCapabilitiesSection';
import { PartnerProcessesSection } from '../../sections/capabilities/PartnerProcessesSection';
import { ProjectFlowSection } from '../../sections/capabilities/ProjectFlowSection';
import { OemProductionSection } from '../../sections/capabilities/OemProductionSection';
import { QuoteRequirementsSection } from '../../sections/capabilities/QuoteRequirementsSection';
import { CapabilitiesFaqSection } from '../../sections/capabilities/CapabilitiesFaqSection';
import { CapabilitiesCtaSection } from '../../sections/capabilities/CapabilitiesCtaSection';

export function Capabilities() {
    return (
        <Box component="main">
            <CapabilitiesHeroSection />
            <ProductionApproachSection />
            <MainCapabilitiesSection />
            <PartnerProcessesSection />
            <ProjectFlowSection />
            <OemProductionSection />
            <QuoteRequirementsSection />
            <CapabilitiesFaqSection />
            <CapabilitiesCtaSection />
        </Box>
    );
}