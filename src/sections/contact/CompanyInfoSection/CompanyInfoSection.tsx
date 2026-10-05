import {
    Box,
    Typography,
} from '@mui/material';

import {
    Building2,
    Mail,
    Phone,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import { contactConfig } from '../../../config/contact.config';

import { siteConfig } from '../../../config/site.config';

export function CompanyInfoSection() {
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 9,
                    md: 12,
                },

                bgcolor:
                    'background.default',
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1fr 1fr',
                        },

                        gap: {
                            xs: 6,
                            lg: 12,
                        },

                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography
                            variant="overline"
                            sx={{
                                display: 'block',

                                mb: 2,

                                color:
                                    'primary.main',
                            }}
                        >
                            {t(
                                'contactPage.company.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 600,

                                mb: 3,

                                fontSize: {
                                    xs: '2.4rem',
                                    md: '3.2rem',
                                },

                                fontWeight: 700,

                                lineHeight: 1.05,

                                letterSpacing:
                                    '-0.045em',
                            }}
                        >
                            {t(
                                'contactPage.company.title'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 580,

                                color:
                                    'text.secondary',

                                lineHeight: 1.85,
                            }}
                        >
                            {t(
                                'contactPage.company.description'
                            )}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            borderTop:
                                '1px solid',

                            borderColor:
                                'divider',
                        }}
                    >
                        <InfoRow
                            icon={
                                <Building2
                                    size={
                                        18
                                    }
                                />
                            }
                            label={t(
                                'contactPage.company.name'
                            )}
                            value={
                                siteConfig.name
                            }
                        />

                        <InfoRow
                            icon={
                                <Phone
                                    size={
                                        18
                                    }
                                />
                            }
                            label={t(
                                'contactPage.company.phone'
                            )}
                            value={
                                contactConfig
                                    .phone
                                    .display
                            }
                        />

                        <InfoRow
                            icon={
                                <Mail
                                    size={
                                        18
                                    }
                                />
                            }
                            label={t(
                                'contactPage.company.email'
                            )}
                            value={contactConfig.email.trim()}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

interface InfoRowProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoRow({
    icon,
    label,
    value,
}: InfoRowProps) {
    return (
        <Box
            sx={{
                py: 3,

                display: 'grid',

                gridTemplateColumns:
                    '36px minmax(110px, 0.6fr) 1fr',

                gap: 2,

                alignItems: 'center',

                borderBottom:
                    '1px solid',

                borderColor:
                    'divider',
            }}
        >
            <Box
                sx={{
                    color:
                        'primary.main',
                }}
            >
                {icon}
            </Box>

            <Typography
                sx={{
                    color:
                        'text.secondary',

                    fontSize:
                        '0.85rem',

                    fontWeight: 600,
                }}
            >
                {label}
            </Typography>

            <Typography
                sx={{
                    fontWeight: 600,

                    wordBreak:
                        'break-word',
                }}
            >
                {value}
            </Typography>
        </Box>
    );
}

export default CompanyInfoSection;