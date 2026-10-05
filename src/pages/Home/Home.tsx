import {
  Box,
} from '@mui/material';

import { HeroSection } from '../../sections/home/HeroSection';
import { AboutSection } from '../../sections/home/AboutSection';

export default function Home() {
  return (
    <Box>
      <HeroSection />

      <AboutSection />

      {/*
        Sırada:

        <CapabilitiesSection />
        <IndustriesSection />
        <ProcessSection />
        <QualitySection />
        <ProjectsSection />
        <QuoteSection />
      */}
    </Box>
  );
}