import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    ArrowDown,
    ArrowUpRight,
    MessageCircle,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import { Container } from '../../../components/common/Container';

import { contactConfig } from '../../../config/contact.config';

import { contactPageData } from '../../../data/contact/contact.data';

export function ContactHeroSection() {
    const { t } = useTranslation();

    const whatsappUrl =
        `https://wa.me/${contactConfig.whatsapp.value.replace(
            /\D/g,
            ''
        )}`;

    const handleScroll = () => {
        const target =
            document.querySelector(
                contactPageData.hero.scrollTarget
            );

        target?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                minHeight: {
                    xs: '720px',
                    md: '780px',
                    lg: 'min(860px, 92vh)',
                },

                display: 'flex',
                alignItems: 'flex-end',

                overflow: 'hidden',

                bgcolor: '#07100c',

                color: '#fff',
            }}
        >
            {/* BACKGROUND IMAGE */}

            <Box
                component="img"
                src={contactPageData.hero.image}
                alt={t(
                    'contactPage.hero.imageAlt'
                )}
                sx={{
                    position: 'absolute',
                    inset: 0,

                    width: '100%',
                    height: '100%',

                    objectFit: 'cover',

                    objectPosition:
                        'center center',

                    transform: 'scale(1.025)',
                }}
            />

            {/* MAIN DARK OVERLAY */}

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,

                    background: `
                        linear-gradient(
                            90deg,
                            rgba(3, 10, 7, 0.96) 0%,
                            rgba(3, 10, 7, 0.88) 32%,
                            rgba(3, 10, 7, 0.55) 62%,
                            rgba(3, 10, 7, 0.28) 100%
                        )
                    `,
                }}
            />

            {/* VERTICAL OVERLAY */}

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,

                    background: `
                        linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0.35) 0%,
                            rgba(0, 0, 0, 0.04) 35%,
                            rgba(0, 0, 0, 0.58) 100%
                        )
                    `,
                }}
            />

            {/* SUBTLE GRID */}

            <Box
                aria-hidden
                sx={{
                    position: 'absolute',
                    inset: 0,

                    opacity: 0.09,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.15) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.15) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '80px 80px',

                    maskImage:
                        'linear-gradient(to right, black, transparent 85%)',
                }}
            />

            {/* CONTENT */}

            <Container
                sx={{
                    position: 'relative',
                    zIndex: 2,

                    width: '100%',

                    pb: {
                        xs: 8,
                        md: 10,
                        lg: 12,
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: 900,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,

                            mb: {
                                xs: 3,
                                md: 4,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 34,
                                height: 1,

                                bgcolor:
                                    'primary.main',
                            }}
                        />

                        <Typography
                            sx={{
                                color:
                                    'primary.light',

                                fontSize:
                                    '0.72rem',

                                fontWeight: 700,

                                letterSpacing:
                                    '0.18em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'contactPage.hero.eyebrow'
                            )}
                        </Typography>
                    </Box>

                    <Typography
                        component="h1"
                        sx={{
                            maxWidth: 900,

                            fontSize: {
                                xs: '3.6rem',
                                sm: '5rem',
                                md: '6.4rem',
                                lg: '7.2rem',
                            },

                            fontWeight: 700,

                            lineHeight: {
                                xs: 0.98,
                                md: 0.92,
                            },

                            letterSpacing:
                                '-0.065em',

                            textWrap: 'balance',
                        }}
                    >
                        {t(
                            'contactPage.hero.title'
                        )}
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 650,

                            mt: {
                                xs: 3.5,
                                md: 4.5,
                            },

                            color:
                                'rgba(255,255,255,0.72)',

                            fontSize: {
                                xs: '1rem',
                                md: '1.12rem',
                            },

                            lineHeight: 1.8,
                        }}
                    >
                        {t(
                            'contactPage.hero.description'
                        )}
                    </Typography>

                    <Box
                        sx={{
                            mt: 5,

                            display: 'flex',
                            flexWrap: 'wrap',

                            gap: 1.5,
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={
                                handleScroll
                            }
                            endIcon={
                                <ArrowDown
                                    size={17}
                                />
                            }
                            sx={{
                                minHeight: 54,

                                px: 3.5,

                                borderRadius:
                                    '4px',

                                fontWeight: 700,

                                textTransform:
                                    'none',

                                boxShadow: 'none',
                            }}
                        >
                            {t(
                                'contactPage.hero.primaryAction'
                            )}
                        </Button>

                        <Button
                            component="a"
                            href={
                                whatsappUrl
                            }
                            target="_blank"
                            rel="noreferrer"
                            variant="outlined"
                            startIcon={
                                <MessageCircle
                                    size={17}
                                />
                            }
                            endIcon={
                                <ArrowUpRight
                                    size={16}
                                />
                            }
                            sx={{
                                minHeight: 54,

                                px: 3,

                                color: '#fff',

                                borderColor:
                                    'rgba(255,255,255,0.3)',

                                borderRadius:
                                    '4px',

                                fontWeight: 700,

                                textTransform:
                                    'none',

                                backdropFilter:
                                    'blur(8px)',

                                bgcolor:
                                    'rgba(255,255,255,0.04)',

                                '&:hover': {
                                    borderColor:
                                        'rgba(255,255,255,0.65)',

                                    bgcolor:
                                        'rgba(255,255,255,0.08)',
                                },
                            }}
                        >
                            WhatsApp
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* BOTTOM LINE */}

            <Box
                sx={{
                    position: 'absolute',

                    bottom: 0,
                    left: 0,
                    right: 0,

                    height: 1,

                    bgcolor:
                        'rgba(255,255,255,0.12)',
                }}
            />
        </Box>
    );
}

export default ContactHeroSection;