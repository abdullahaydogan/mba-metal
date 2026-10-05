import {
    Box,
    Container,
    Typography,
} from '@mui/material';

import {
    Activity,
    ArrowUpRight,
    Clock3,
    Mail,
    MessageCircle,
    Phone,
    type LucideIcon,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

/* =========================================================
   TYPES
========================================================= */

interface ContactItem {
    id: string;
    labelKey: string;
    valueKey: string;
    href: string;
    icon: LucideIcon;
    external?: boolean;
}

interface WorkingHourItem {
    id: string;
    labelKey: string;
    value?: string;
    valueKey?: string;
    highlight?: boolean;
}

/* =========================================================
   DATA
========================================================= */

const contactItems: ContactItem[] = [
    {
        id: 'phone',

        labelKey:
            'contactPage.details.phone.label',

        valueKey:
            'contactPage.details.phone.value',

        href: 'tel:+905300508658',

        icon: Phone,
    },

    {
        id: 'whatsapp',

        labelKey:
            'contactPage.details.whatsapp.label',

        valueKey:
            'contactPage.details.whatsapp.value',

        href: 'https://wa.me/905300508658',

        icon: MessageCircle,

        external: true,
    },

    {
        id: 'email',

        labelKey:
            'contactPage.details.email.label',

        valueKey:
            'contactPage.details.email.value',

        href:
            'mailto:mbametalekipman@gmail.com',

        icon: Mail,
    },
];

const workingHours: WorkingHourItem[] = [
    {
        id: 'weekdays',

        labelKey:
            'contactPage.details.workingHours.weekdays',

        value: '08:00 - 18:00',
    },

    {
        id: 'saturday',

        labelKey:
            'contactPage.details.workingHours.saturday',

        value: '08:00 - 13:00',
    },

    {
        id: 'sunday',

        labelKey:
            'contactPage.details.workingHours.sunday',

        valueKey:
            'contactPage.details.workingHours.closed',

        highlight: true,
    },
];

/* =========================================================
   COMPONENT
========================================================= */

export function ContactDetailsSection() {
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',

                overflow: 'hidden',

                py: {
                    xs: 9,
                    sm: 11,
                    md: 14,
                    lg: 16,
                },

                bgcolor: 'background.default',

                backgroundImage: (theme) => `
                    linear-gradient(
                        ${theme.palette.divider} 1px,
                        transparent 1px
                    ),
                    linear-gradient(
                        90deg,
                        ${theme.palette.divider} 1px,
                        transparent 1px
                    )
                `,

                backgroundSize: '72px 72px',

                '&::before': {
                    content: '""',

                    position: 'absolute',

                    inset: 0,

                    pointerEvents: 'none',

                    background: (theme) => `
                        linear-gradient(
                            180deg,
                            ${theme.palette.background.default} 0%,
                            transparent 16%,
                            transparent 84%,
                            ${theme.palette.background.default} 100%
                        )
                    `,
                },

                '&::after': {
                    content: '""',

                    position: 'absolute',

                    top: -220,
                    right: -180,

                    width: 520,
                    height: 520,

                    borderRadius: '50%',

                    border: '1px solid',

                    borderColor: 'divider',

                    opacity: 0.55,

                    pointerEvents: 'none',
                },
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: 'relative',

                    zIndex: 1,
                }}
            >
                {/* =====================================================
                    HEADER
                ===================================================== */}

                <Box
                    sx={{
                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            md:
                                'minmax(0, 1.1fr) minmax(320px, 0.65fr)',
                        },

                        columnGap: {
                            md: 10,
                            lg: 14,
                        },

                        rowGap: 4,

                        alignItems: 'end',

                        mb: {
                            xs: 7,
                            md: 10,
                        },
                    }}
                >
                    {/* LEFT */}

                    <Box>
                        <Box
                            sx={{
                                display: 'flex',

                                alignItems: 'center',

                                gap: 1.5,

                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 7,
                                    height: 7,

                                    flexShrink: 0,

                                    borderRadius:
                                        '50%',

                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: 12,

                                    fontWeight: 700,

                                    lineHeight: 1,

                                    letterSpacing:
                                        '0.18em',

                                    textTransform:
                                        'uppercase',

                                    color:
                                        'primary.main',
                                }}
                            >
                                {t(
                                    'contactPage.details.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 800,

                                m: 0,

                                fontSize: {
                                    xs: '2.65rem',
                                    sm: '3.5rem',
                                    md: '4.4rem',
                                    lg: '5rem',
                                },

                                lineHeight: {
                                    xs: 1,
                                    md: 0.96,
                                },

                                letterSpacing:
                                    '-0.055em',

                                fontWeight: 700,

                                color:
                                    'text.primary',
                            }}
                        >
                            {t(
                                'contactPage.details.title'
                            )}
                        </Typography>
                    </Box>

                    {/* RIGHT */}

                    <Box
                        sx={{
                            maxWidth: 520,

                            justifySelf: {
                                md: 'end',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 46,
                                height: 1,

                                mb: 2.5,

                                bgcolor:
                                    'primary.main',
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 16,
                                    md: 18,
                                },

                                lineHeight: 1.8,

                                color:
                                    'text.secondary',
                            }}
                        >
                            {t(
                                'contactPage.details.description'
                            )}
                        </Typography>
                    </Box>
                </Box>

                {/* =====================================================
                    CONTACT DIRECTORY
                ===================================================== */}

                <Box
                    sx={{
                        borderTop:
                            '1px solid',

                        borderColor:
                            'divider',
                    }}
                >
                    {contactItems.map(
                        (
                            item,
                            index
                        ) => {
                            const Icon =
                                item.icon;

                            return (
                                <Box
                                    key={
                                        item.id
                                    }
                                    component="a"
                                    href={
                                        item.href
                                    }
                                    target={
                                        item.external
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        item.external
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                    sx={{
                                        position:
                                            'relative',

                                        isolation:
                                            'isolate',

                                        display:
                                            'grid',

                                        gridTemplateColumns:
                                            {
                                                xs:
                                                    '42px minmax(0, 1fr) 32px',

                                                sm:
                                                    '58px 180px minmax(0, 1fr) 42px',

                                                md:
                                                    '74px 230px minmax(0, 1fr) 48px',
                                            },

                                        columnGap: {
                                            xs: 1.5,
                                            sm: 2.5,
                                            md: 4,
                                        },

                                        alignItems:
                                            'center',

                                        minHeight: {
                                            xs: 110,
                                            sm: 122,
                                            md: 138,
                                        },

                                        px: {
                                            xs: 0.5,
                                            sm: 1,
                                            md: 2,
                                        },

                                        borderBottom:
                                            '1px solid',

                                        borderColor:
                                            'divider',

                                        textDecoration:
                                            'none',

                                        color:
                                            'inherit',

                                        overflow:
                                            'hidden',

                                        transition:
                                            'padding 300ms cubic-bezier(0.22, 1, 0.36, 1)',

                                        '&::before':
                                            {
                                                content:
                                                    '""',

                                                position:
                                                    'absolute',

                                                inset: 0,

                                                zIndex:
                                                    -1,

                                                bgcolor:
                                                    'primary.main',

                                                transform:
                                                    'scaleY(0)',

                                                transformOrigin:
                                                    'bottom',

                                                transition:
                                                    'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            },

                                        '&:hover::before':
                                            {
                                                transform:
                                                    'scaleY(1)',
                                            },

                                        '&:hover':
                                            {
                                                px: {
                                                    md: 3,
                                                },

                                                '& .contact-index':
                                                    {
                                                        color:
                                                            'primary.contrastText',

                                                        opacity:
                                                            0.55,
                                                    },

                                                '& .contact-label':
                                                    {
                                                        color:
                                                            'primary.contrastText',

                                                        opacity:
                                                            0.72,
                                                    },

                                                '& .contact-mobile-label':
                                                    {
                                                        color:
                                                            'primary.contrastText',

                                                        opacity:
                                                            0.72,
                                                    },

                                                '& .contact-value':
                                                    {
                                                        color:
                                                            'primary.contrastText',

                                                        transform:
                                                            'translateX(10px)',
                                                    },

                                                '& .contact-icon':
                                                    {
                                                        color:
                                                            'primary.contrastText',

                                                        borderColor:
                                                            'rgba(255, 255, 255, 0.35)',
                                                    },

                                                '& .contact-arrow':
                                                    {
                                                        color:
                                                            'primary.contrastText',

                                                        transform:
                                                            'translate(4px, -4px)',
                                                    },
                                            },
                                    }}
                                >
                                    {/* NUMBER */}

                                    <Typography
                                        className="contact-index"
                                        sx={{
                                            fontSize: {
                                                xs: 10,
                                                md: 12,
                                            },

                                            fontWeight: 700,

                                            letterSpacing:
                                                '0.16em',

                                            color:
                                                'text.secondary',

                                            opacity: 0.6,

                                            transition:
                                                'color 220ms ease, opacity 220ms ease',
                                        }}
                                    >
                                        {String(
                                            index +
                                                1
                                        ).padStart(
                                            2,
                                            '0'
                                        )}
                                    </Typography>

                                    {/* TYPE */}

                                    <Box
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                sm: 'flex',
                                            },

                                            alignItems:
                                                'center',

                                            gap: 1.5,
                                        }}
                                    >
                                        <Box
                                            className="contact-icon"
                                            sx={{
                                                display:
                                                    'grid',

                                                placeItems:
                                                    'center',

                                                width: 40,
                                                height: 40,

                                                flexShrink: 0,

                                                border:
                                                    '1px solid',

                                                borderColor:
                                                    'divider',

                                                color:
                                                    'text.secondary',

                                                transition:
                                                    'color 220ms ease, border-color 220ms ease',
                                            }}
                                        >
                                            <Icon
                                                size={
                                                    17
                                                }
                                                strokeWidth={
                                                    1.6
                                                }
                                            />
                                        </Box>

                                        <Typography
                                            className="contact-label"
                                            sx={{
                                                fontSize:
                                                    11,

                                                fontWeight: 700,

                                                letterSpacing:
                                                    '0.15em',

                                                textTransform:
                                                    'uppercase',

                                                color:
                                                    'text.secondary',

                                                transition:
                                                    'color 220ms ease, opacity 220ms ease',
                                            }}
                                        >
                                            {t(
                                                item.labelKey
                                            )}
                                        </Typography>
                                    </Box>

                                    {/* VALUE */}

                                    <Box
                                        sx={{
                                            minWidth: 0,
                                        }}
                                    >
                                        <Typography
                                            className="contact-mobile-label"
                                            sx={{
                                                display: {
                                                    xs: 'block',
                                                    sm: 'none',
                                                },

                                                mb: 0.75,

                                                fontSize:
                                                    10,

                                                fontWeight: 700,

                                                letterSpacing:
                                                    '0.14em',

                                                textTransform:
                                                    'uppercase',

                                                color:
                                                    'text.secondary',

                                                transition:
                                                    'color 220ms ease, opacity 220ms ease',
                                            }}
                                        >
                                            {t(
                                                item.labelKey
                                            )}
                                        </Typography>

                                        <Typography
                                            className="contact-value"
                                            sx={{
                                                fontSize: {
                                                    xs: 18,
                                                    sm: 24,
                                                    md: 30,
                                                },

                                                lineHeight: 1.1,

                                                fontWeight: 600,

                                                letterSpacing:
                                                    '-0.035em',

                                                color:
                                                    'text.primary',

                                                overflowWrap:
                                                    'anywhere',

                                                transition:
                                                    'color 220ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                            }}
                                        >
                                            {t(
                                                item.valueKey
                                            )}
                                        </Typography>
                                    </Box>

                                    {/* ARROW */}

                                    <Box
                                        className="contact-arrow"
                                        sx={{
                                            display:
                                                'grid',

                                            placeItems:
                                                'center',

                                            justifySelf:
                                                'end',

                                            color:
                                                'text.primary',

                                            transition:
                                                'color 220ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                        }}
                                    >
                                        <ArrowUpRight
                                            size={
                                                22
                                            }
                                            strokeWidth={
                                                1.5
                                            }
                                        />
                                    </Box>
                                </Box>
                            );
                        }
                    )}
                </Box>

                {/* =====================================================
                    WORKING HOURS
                ===================================================== */}

                <Box
                    sx={{
                        mt: {
                            xs: 7,
                            md: 10,
                        },

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            md:
                                'minmax(0, 0.75fr) minmax(0, 1.25fr)',
                        },

                        borderTop:
                            '1px solid',

                        borderBottom:
                            '1px solid',

                        borderColor:
                            'divider',
                    }}
                >
                    {/* WORKING HOURS LEFT */}

                    <Box
                        sx={{
                            py: {
                                xs: 4,
                                md: 5,
                            },

                            pr: {
                                md: 7,
                            },

                            borderRight: {
                                xs: 'none',
                                md: '1px solid',
                            },

                            borderBottom: {
                                xs: '1px solid',
                                md: 'none',
                            },

                            borderColor:
                                'divider',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',

                                alignItems:
                                    'center',

                                gap: 2,

                                mb: 2.5,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'grid',

                                    placeItems:
                                        'center',

                                    width: 44,
                                    height: 44,

                                    flexShrink: 0,

                                    border:
                                        '1px solid',

                                    borderColor:
                                        'divider',

                                    color:
                                        'primary.main',
                                }}
                            >
                                <Clock3
                                    size={19}
                                    strokeWidth={
                                        1.6
                                    }
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: 11,

                                    fontWeight: 700,

                                    letterSpacing:
                                        '0.16em',

                                    textTransform:
                                        'uppercase',

                                    color:
                                        'text.secondary',
                                }}
                            >
                                {t(
                                    'contactPage.details.workingHours.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                maxWidth: 390,

                                fontSize: {
                                    xs: 24,
                                    md: 30,
                                },

                                lineHeight: 1.2,

                                letterSpacing:
                                    '-0.035em',

                                fontWeight: 600,

                                color:
                                    'text.primary',
                            }}
                        >
                            {t(
                                'contactPage.details.workingHours.title'
                            )}
                        </Typography>
                    </Box>

                    {/* WORKING HOURS RIGHT */}

                    <Box
                        sx={{
                            py: {
                                xs: 1.5,
                                md: 2.5,
                            },

                            pl: {
                                md: 7,
                            },
                        }}
                    >
                        {workingHours.map(
                            (
                                item,
                                index
                            ) => (
                                <Box
                                    key={
                                        item.id
                                    }
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        justifyContent:
                                            'space-between',

                                        gap: 3,

                                        minHeight:
                                            68,

                                        borderBottom:
                                            index <
                                            workingHours.length -
                                                1
                                                ? '1px solid'
                                                : 'none',

                                        borderColor:
                                            'divider',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: 13,
                                                md: 14,
                                            },

                                            color:
                                                'text.secondary',
                                        }}
                                    >
                                        {t(
                                            item.labelKey
                                        )}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: 13,
                                                md: 14,
                                            },

                                            fontWeight: 600,

                                            color:
                                                item.highlight
                                                    ? 'primary.main'
                                                    : 'text.primary',
                                        }}
                                    >
                                        {item.valueKey
                                            ? t(
                                                  item.valueKey
                                              )
                                            : item.value}
                                    </Typography>
                                </Box>
                            )
                        )}
                    </Box>
                </Box>

                {/* =====================================================
                    BOTTOM MICRO COPY
                ===================================================== */}

                <Box
                    sx={{
                        display: 'flex',

                        alignItems: 'center',

                        gap: 1.5,

                        mt: 3,
                    }}
                >
                    <Activity
                        size={14}
                        strokeWidth={1.6}
                    />

                    <Typography
                        sx={{
                            fontSize: 11,

                            fontWeight: 600,

                            letterSpacing:
                                '0.1em',

                            textTransform:
                                'uppercase',

                            color:
                                'text.secondary',
                        }}
                    >
                        MBA Metal
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactDetailsSection;