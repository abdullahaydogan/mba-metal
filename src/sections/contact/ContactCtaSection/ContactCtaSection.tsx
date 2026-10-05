import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import { routes } from '../../../constants/routes';

import { contactPageData } from '../../../data/contact/contact.data';

export function ContactCtaSection() {
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 8,
                    md: 11,
                    lg: 13,
                },

                bgcolor:
                    'background.default',
            }}
        >
            <Container>
                <Box
                    sx={{
                        position: 'relative',

                        minHeight: {
                            xs: 520,
                            md: 570,
                        },

                        display: 'flex',

                        alignItems:
                            'flex-end',

                        overflow: 'hidden',

                        bgcolor: '#07100c',
                    }}
                >
                    {/* IMAGE */}

                    <Box
                        component="img"
                        src={
                            contactPageData.cta
                                .image
                        }
                        alt={t(
                            'contactPage.cta.imageAlt'
                        )}
                        sx={{
                            position:
                                'absolute',

                            inset: 0,

                            width: '100%',
                            height: '100%',

                            objectFit:
                                'cover',

                            objectPosition:
                                'center',
                        }}
                    />

                    {/* OVERLAY */}

                    <Box
                        sx={{
                            position:
                                'absolute',

                            inset: 0,

                            background: `
                                linear-gradient(
                                    90deg,
                                    rgba(3, 10, 7, 0.96) 0%,
                                    rgba(3, 10, 7, 0.82) 45%,
                                    rgba(3, 10, 7, 0.32) 100%
                                )
                            `,
                        }}
                    />

                    <Box
                        sx={{
                            position:
                                'absolute',

                            inset: 0,

                            background:
                                'linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.55) 100%)',
                        }}
                    />

                    {/* CONTENT */}

                    <Box
                        sx={{
                            position:
                                'relative',

                            zIndex: 1,

                            width: '100%',

                            p: {
                                xs: 4,
                                sm: 6,
                                md: 8,
                            },

                            color: '#fff',
                        }}
                    >
                        <Typography
                            sx={{
                                mb: 2,

                                color:
                                    'primary.light',

                                fontSize:
                                    '0.72rem',

                                fontWeight:
                                    700,

                                letterSpacing:
                                    '0.16em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'contactPage.cta.eyebrow'
                            )}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 800,

                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.8rem',
                                    md: '5rem',
                                },

                                fontWeight: 700,

                                lineHeight: 0.98,

                                letterSpacing:
                                    '-0.06em',
                            }}
                        >
                            {t(
                                'contactPage.cta.title'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 620,

                                mt: 3,

                                color:
                                    'rgba(255,255,255,0.7)',

                                fontSize: {
                                    xs: '0.95rem',
                                    md: '1.05rem',
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'contactPage.cta.description'
                            )}
                        </Typography>

                        <Button
                            component={Link}
                            to={routes.quote}
                            variant="contained"
                            endIcon={
                                <ArrowUpRight
                                    size={17}
                                />
                            }
                            sx={{
                                mt: 4.5,

                                minHeight: 54,

                                px: 3.5,

                                borderRadius:
                                    '4px',

                                boxShadow:
                                    'none',

                                fontWeight:
                                    700,

                                textTransform:
                                    'none',
                            }}
                        >
                            {t(
                                'contactPage.cta.button'
                            )}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactCtaSection;