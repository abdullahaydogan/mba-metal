import { Box } from '@mui/material';

import { ContactHeroSection } from '../../sections/contact/ContactHeroSection';
import { ContactDetailsSection } from '../../sections/contact/ContactDetailsSection';
import { ContactFormSection } from '../../sections/contact/ContactFormSection';
import { ContactProjectGuideSection } from '../../sections/contact/ContactProjectGuideSection';

export function Contact() {
    return (
        <Box component="main">
            <ContactHeroSection />
            <ContactDetailsSection />
            <ContactFormSection />
            <ContactProjectGuideSection />
            {/* <ContactCtaSection /> */}
        </Box>
    );
}

export default Contact;