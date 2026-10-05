import { useTranslation } from 'react-i18next';

import { PageHero } from '../../sections/shared/PageHero';

import { CompanyStorySection } from '../../sections/about/CompanyStorySection';
import { ProductionApproachSection } from '../../sections/about/ProductionApproachSection';
import { ManufacturingCapabilitiesSection } from '../../sections/about/ManufacturingCapabilitiesSection';
import { WorkingApproachSection } from '../../sections/about/WorkingApproachSection';
import { IndustriesShowcaseSection } from '../../sections/about/IndustriesShowcaseSection';
import { QualityApproachSection } from '../../sections/about/QualityApproachSection';

export function About() {
    const { t } = useTranslation();

    return (
        <>
            <PageHero
                eyebrow={t('aboutPage.hero.eyebrow' )}
                title={t(  'aboutPage.hero.title')}
                description={t( 'aboutPage.hero.description' )}
            />
            <CompanyStorySection />
            <ProductionApproachSection />
            <ManufacturingCapabilitiesSection />
            <WorkingApproachSection />
            <IndustriesShowcaseSection />
            <QualityApproachSection />
        </>
    );
}

export default About;