import {
    Box,
    Typography,
} from '@mui/material';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

import {
    contactPageData,
} from '../../../data/contact/contact.data';

/* =========================================================
   CONTACT CTA SECTION
========================================================= */

export function ContactCtaSection() {
    const {
        t,
    } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs:
                        8,

                    md:
                        11,

                    lg:
                        13,
                },

                bgcolor:
                    'background.default',
            }}
        >
            <Container>
                <Box
                    sx={{
                        position:
                            'relative',

                        minHeight: {
                            xs:
                                520,

                            md:
                                570,
                        },

                        display:
                            'flex',

                        alignItems:
                            'flex-end',

                        overflow:
                            'hidden',

                        bgcolor:
                            '#07100c',
                    }}
                >
                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <Box
                        component="img"
                        src={
                            contactPageData
                                .cta
                                .image
                        }
                        alt={t(
                            'contactPage.cta.imageAlt'
                        )}
                        sx={{
                            position:
                                'absolute',

                            inset:
                                0,

                            width:
                                '100%',

                            height:
                                '100%',

                            objectFit:
                                'cover',

                            objectPosition:
                                'center',
                        }}
                    />

                    {/* =================================================
                        PRIMARY OVERLAY
                    ================================================= */}

                    <Box
                        aria-hidden="true"
                        sx={{
                            position:
                                'absolute',

                            inset:
                                0,

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

                    {/* =================================================
                        BOTTOM OVERLAY
                    ================================================= */}

                    <Box
                        aria-hidden="true"
                        sx={{
                            position:
                                'absolute',

                            inset:
                                0,

                            background:
                                'linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.55) 100%)',
                        }}
                    />

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <Box
                        sx={{
                            position:
                                'relative',

                            zIndex:
                                1,

                            width:
                                '100%',

                            p: {
                                xs:
                                    4,

                                sm:
                                    6,

                                md:
                                    8,
                            },

                            color:
                                '#ffffff',
                        }}
                    >
                        {/* EYEBROW */}

                        <Typography
                            sx={{
                                mb:
                                    2,

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

                        {/* TITLE */}

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth:
                                    800,

                                fontSize: {
                                    xs:
                                        '2.8rem',

                                    sm:
                                        '3.8rem',

                                    md:
                                        '5rem',
                                },

                                fontWeight:
                                    700,

                                lineHeight:
                                    0.98,

                                letterSpacing:
                                    '-0.06em',
                            }}
                        >
                            {t(
                                'contactPage.cta.title'
                            )}
                        </Typography>

                        {/* DESCRIPTION */}

                        <Typography
                            sx={{
                                maxWidth:
                                    620,

                                mt:
                                    3,

                                color:
                                    'rgba(255,255,255,0.7)',

                                fontSize: {
                                    xs:
                                        '0.95rem',

                                    md:
                                        '1.05rem',
                                },

                                lineHeight:
                                    1.8,
                            }}
                        >
                            {t(
                                'contactPage.cta.description'
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactCtaSection;