import {
    CheckCircle2,
    Factory,
    GitBranch,
    PackageCheck,
    Ruler,
    Settings2,
    type LucideIcon,
} from 'lucide-react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    motion,
    useReducedMotion,
} from 'motion/react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
} from '../../../components/common/Container';

/* =========================================================
   TYPES
========================================================= */

interface ApproachItem {
    id:
        | 'technicalRequirements'
        | 'manufacturability'
        | 'processPlanning'
        | 'qualityControl'
        | 'repeatableProduction'
        | 'delivery';

    icon: LucideIcon;
}

/* =========================================================
   DATA
========================================================= */

const approachItems: ApproachItem[] = [
    {
        id: 'technicalRequirements',
        icon: Ruler,
    },
    {
        id: 'manufacturability',
        icon: GitBranch,
    },
    {
        id: 'processPlanning',
        icon: Settings2,
    },
    {
        id: 'qualityControl',
        icon: CheckCircle2,
    },
    {
        id: 'repeatableProduction',
        icon: Factory,
    },
    {
        id: 'delivery',
        icon: PackageCheck,
    },
];

/* =========================================================
   SECTION
========================================================= */

export function IndustryApproachSection() {
    const { t } = useTranslation();

    return (
        <Box
            component="section"
            id="industry-approach"
            sx={{
                position: 'relative',
                overflow: 'clip',

                bgcolor: '#f5f7f4',
                color: '#0b1711',

                borderTop:
                    '1px solid rgba(10,40,27,0.08)',

                borderBottom:
                    '1px solid rgba(10,40,27,0.08)',
            }}
        >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: 0,

                    opacity: 0.38,

                    backgroundImage: `
                        linear-gradient(
                            rgba(14,66,43,0.045) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(14,66,43,0.045) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '72px 72px',

                    maskImage:
                        'linear-gradient(to right, black, transparent 92%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                BACKGROUND PROCESS TYPOGRAPHY
            ================================================= */}

            <Typography
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: {
                        md: 80,
                        lg: 120,
                    },

                    right: {
                        md: -40,
                        lg: -70,
                    },

                    display: {
                        xs: 'none',
                        md: 'block',
                    },

                    fontSize: {
                        md: '9rem',
                        lg: '13rem',
                        xl: '16rem',
                    },

                    lineHeight: 0.8,

                    fontWeight: 800,

                    letterSpacing:
                        '-0.08em',

                    color:
                        'rgba(24,103,68,0.025)',

                    userSelect: 'none',

                    pointerEvents: 'none',
                }}
            >
                PROCESS
            </Typography>

            {/* =================================================
                AMBIENT LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 760,
                    height: 760,

                    left: -430,
                    top: '18%',

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(62,157,108,0.11), transparent 68%)',

                    pointerEvents: 'none',
                }}
            />

            {/* =================================================
                RIGHT AMBIENT LIGHT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    width: 650,
                    height: 650,

                    right: -400,
                    bottom: '8%',

                    borderRadius: '50%',

                    background:
                        'radial-gradient(circle, rgba(33,115,79,0.07), transparent 70%)',

                    pointerEvents: 'none',
                }}
            />

            <Container>
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,

                        display: 'grid',

                        gridTemplateColumns: {
                            xs: '1fr',

                            lg:
                                'minmax(360px, 0.82fr) minmax(0, 1.18fr)',
                        },

                        columnGap: {
                            lg: 9,
                            xl: 13,
                        },

                        alignItems: 'start',

                        py: {
                            xs: 10,
                            md: 13,
                            lg: 0,
                        },
                    }}
                >
                    {/* =================================================
                        LEFT / STICKY INTRO
                    ================================================= */}

                    <Box
                        sx={{
                            position: {
                                xs: 'relative',
                                lg: 'sticky',
                            },

                            top: {
                                lg: 120,
                            },

                            minHeight: {
                                lg: '100vh',
                            },

                            display: {
                                lg: 'flex',
                            },

                            flexDirection: {
                                lg: 'column',
                            },

                            justifyContent: {
                                lg: 'center',
                            },

                            py: {
                                lg: 10,
                            },

                            mb: {
                                xs: 8,
                                lg: 0,
                            },
                        }}
                    >
                        {/* EYEBROW */}

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',

                                gap: 1.5,

                                mb: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 38,
                                    height: '1px',

                                    bgcolor:
                                        '#21734f',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        '#21734f',

                                    fontSize:
                                        '0.68rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.17em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'industriesPage.approach.eyebrow'
                                )}
                            </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: 590,

                                fontSize: {
                                    xs: '2.65rem',
                                    sm: '3.4rem',
                                    md: '4rem',
                                    lg: '4.35rem',
                                },

                                lineHeight: 0.99,

                                fontWeight: 500,

                                letterSpacing:
                                    '-0.055em',

                                color: '#0b1711',
                            }}
                        >
                            {t(
                                'industriesPage.approach.title'
                            )}
                        </Typography>

                        {/* DESCRIPTION */}

                        <Typography
                            sx={{
                                mt: 3.5,

                                maxWidth: 480,

                                color:
                                    'rgba(11,23,17,0.64)',

                                fontSize: {
                                    xs: '0.96rem',
                                    md: '1rem',
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'industriesPage.approach.description'
                            )}
                        </Typography>

                        {/* =================================================
                            ENGINEERING DECORATION
                        ================================================= */}

                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    lg: 'block',
                                },

                                position: 'relative',

                                mt: 6,

                                width: 300,

                                py: 2.4,

                                pl: 2.5,

                                borderLeft:
                                    '1px solid rgba(33,115,79,0.26)',

                                '&::before': {
                                    content: '""',

                                    position:
                                        'absolute',

                                    left: -3.5,
                                    top: 0,

                                    width: 6,
                                    height: 6,

                                    bgcolor:
                                        '#21734f',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        'rgba(11,23,17,0.38)',

                                    fontSize:
                                        '0.61rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.16em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                ENGINEERED FOR
                                PRODUCTION
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,

                                    color:
                                        '#145c3c',

                                    fontSize:
                                        '0.68rem',

                                    fontWeight: 800,

                                    letterSpacing:
                                        '0.13em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                MBA METAL /
                                PROCESS
                            </Typography>
                        </Box>
                    </Box>

                    {/* =================================================
                        RIGHT / PROCESS TIMELINE
                    ================================================= */}

                    <Box
                        sx={{
                            position: 'relative',

                            py: {
                                lg: '20vh',
                            },

                            '&::before': {
                                content: '""',

                                position:
                                    'absolute',

                                top: {
                                    xs: 25,
                                    lg: '20vh',
                                },

                                bottom: {
                                    xs: 25,
                                    lg: '20vh',
                                },

                                left: {
                                    xs: 23,
                                    lg: 27,
                                },

                                width: '1px',

                                background:
                                    `
                                    linear-gradient(
                                        180deg,
                                        rgba(33,115,79,0.08),
                                        rgba(33,115,79,0.35) 15%,
                                        rgba(33,115,79,0.35) 85%,
                                        rgba(33,115,79,0.08)
                                    )
                                    `,
                            },
                        }}
                    >
                        {approachItems.map(
                            (item) => (
                                <ApproachStep
                                    key={item.id}
                                    item={item}
                                />
                            )
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   APPROACH STEP
========================================================= */

interface ApproachStepProps {
    item: ApproachItem;
}

function ApproachStep({
    item,
}: ApproachStepProps) {
    const { t } = useTranslation();

    const reduceMotion =
        useReducedMotion();

    const Icon = item.icon;

    const basePath =
        `industriesPage.approach.items.${item.id}`;

    const meta = t(
        `${basePath}.meta`
    );

    const metaItems = meta
        .split('·')
        .map((item) => item.trim())
        .filter(Boolean);

    return (
        <Box
            component={motion.article}
            initial={
                reduceMotion
                    ? false
                    : {
                          opacity: 0,
                          y: 45,
                          x: 8,
                      }
            }
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={{
                once: true,
                amount: 0.38,
            }}
            transition={{
                duration: 0.65,

                ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                ],
            }}
            sx={{
                position: 'relative',

                display: 'grid',

                gridTemplateColumns: {
                    xs:
                        '48px minmax(0,1fr)',

                    lg:
                        '56px minmax(0,1fr)',
                },

                columnGap: {
                    xs: 2.5,
                    md: 3.5,
                },

                minHeight: {
                    xs: 230,
                    md: 250,
                    lg: 290,
                },

                '&:last-of-type': {
                    minHeight: {
                        xs: 190,
                        lg: 230,
                    },
                },

                '&:hover .approach-panel':
                    {
                        transform:
                            'translateX(8px)',

                        bgcolor:
                            'rgba(255,255,255,0.72)',

                        borderColor:
                            'rgba(33,115,79,0.18)',

                        boxShadow:
                            '0 24px 70px rgba(15,58,39,0.08)',
                    },

                '&:hover .approach-icon':
                    {
                        bgcolor:
                            '#176744',

                        color: '#ffffff',

                        borderColor:
                            '#176744',

                        transform:
                            'scale(1.04)',
                    },

                '&:hover .approach-line':
                    {
                        width: 74,
                    },

                '&:hover .timeline-dot':
                    {
                        transform:
                            'scale(1.45)',

                        bgcolor:
                            '#176744',
                    },
            }}
        >
            {/* =================================================
                ICON COLUMN
            ================================================= */}

            <Box
                sx={{
                    position: 'relative',

                    zIndex: 4,
                }}
            >
                <Box
                    className="approach-icon"
                    sx={{
                        position: 'relative',

                        width: {
                            xs: 48,
                            lg: 56,
                        },

                        height: {
                            xs: 48,
                            lg: 56,
                        },

                        display: 'grid',

                        placeItems: 'center',

                        bgcolor:
                            'rgba(245,247,244,0.96)',

                        color:
                            '#21734f',

                        border:
                            '1px solid rgba(26,91,61,0.22)',

                        boxShadow:
                            '0 10px 30px rgba(20,65,44,0.06)',

                        transition:
                            `
                            transform 280ms ease,
                            background-color 280ms ease,
                            color 280ms ease,
                            border-color 280ms ease
                            `,
                    }}
                >
                    <Icon
                        size={20}
                        strokeWidth={1.5}
                    />
                </Box>

                {/* TIMELINE DOT */}

                <Box
                    className="timeline-dot"
                    sx={{
                        position: 'absolute',

                        left: {
                            xs: 21,
                            lg: 25,
                        },

                        top: {
                            xs: 67,
                            lg: 75,
                        },

                        width: 7,
                        height: 7,

                        borderRadius:
                            '50%',

                        bgcolor:
                            '#348a62',

                        border:
                            '2px solid #f5f7f4',

                        boxShadow:
                            '0 0 0 1px rgba(33,115,79,0.22)',

                        transition:
                            'transform 280ms ease, background-color 280ms ease',
                    }}
                />
            </Box>

            {/* =================================================
                PANEL
            ================================================= */}

            <Box
                className="approach-panel"
                sx={{
                    position: 'relative',

                    zIndex: 2,

                    maxWidth: 620,

                    mt: -8,

                    mb: 4,

                    px: {
                        xs: 2.5,
                        md: 3.5,
                    },

                    py: {
                        xs: 3,
                        md: 3.5,
                    },

                    bgcolor:
                        'rgba(255,255,255,0.44)',

                    border:
                        '1px solid rgba(33,115,79,0.08)',

                    boxShadow:
                        '0 14px 50px rgba(15,58,39,0.025)',

                    backdropFilter:
                        'blur(8px)',

                    transition:
                        `
                        transform 400ms cubic-bezier(0.22,1,0.36,1),
                        background-color 300ms ease,
                        border-color 300ms ease,
                        box-shadow 300ms ease
                        `,

                    '&::before': {
                        content: '""',

                        position:
                            'absolute',

                        top: 0,
                        left: 0,

                        width: 3,
                        height: 48,

                        bgcolor:
                            '#348a62',

                        opacity: 0.8,
                    },

                    '&::after': {
                        content: '""',

                        position:
                            'absolute',

                        inset: 0,

                        background:
                            `
                            linear-gradient(
                                135deg,
                                rgba(52,138,98,0.045),
                                transparent 42%
                            )
                            `,

                        pointerEvents:
                            'none',
                    },
                }}
            >
                {/* CONTENT */}

                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    {/* TITLE */}

                    <Typography
                        component="h3"
                        sx={{
                            color:
                                '#0b1711',

                            fontSize: {
                                xs: '1.5rem',
                                md: '1.85rem',
                            },

                            lineHeight: 1.1,

                            fontWeight: 600,

                            letterSpacing:
                                '-0.035em',
                        }}
                    >
                        {t(
                            `${basePath}.title`
                        )}
                    </Typography>

                    {/* ACCENT LINE */}

                    <Box
                        className="approach-line"
                        sx={{
                            width: 42,
                            height: '2px',

                            mt: 2.2,
                            mb: 2.2,

                            bgcolor:
                                '#348a62',

                            transition:
                                'width 380ms cubic-bezier(0.22,1,0.36,1)',
                        }}
                    />

                    {/* DESCRIPTION */}

                    <Typography
                        sx={{
                            maxWidth: 530,

                            color:
                                'rgba(11,23,17,0.72)',

                            fontSize:
                                '0.94rem',

                            lineHeight: 1.75,
                        }}
                    >
                        {t(
                            `${basePath}.description`
                        )}
                    </Typography>

                    {/* =================================================
                        TECHNICAL TAGS
                    ================================================= */}

                    <Box
                        sx={{
                            display: 'flex',

                            flexWrap: 'wrap',

                            gap: 0.8,

                            mt: 2.7,
                        }}
                    >
                        {metaItems.map(
                            (
                                metaItem
                            ) => (
                                <Box
                                    key={
                                        metaItem
                                    }
                                    sx={{
                                        px: 1.15,
                                        py: 0.65,

                                        border:
                                            '1px solid rgba(33,115,79,0.16)',

                                        bgcolor:
                                            'rgba(255,255,255,0.38)',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color:
                                                '#176744',

                                            fontSize:
                                                '0.6rem',

                                            lineHeight: 1,

                                            fontWeight:
                                                800,

                                            letterSpacing:
                                                '0.11em',

                                            textTransform:
                                                'uppercase',
                                        }}
                                    >
                                        {
                                            metaItem
                                        }
                                    </Typography>
                                </Box>
                            )
                        )}
                    </Box>
                </Box>

                {/* =================================================
                    CORNER TECH DETAIL
                ================================================= */}

                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',

                        right: 14,
                        bottom: 14,

                        width: 18,
                        height: 18,

                        borderRight:
                            '1px solid rgba(33,115,79,0.16)',

                        borderBottom:
                            '1px solid rgba(33,115,79,0.16)',
                    }}
                />
            </Box>
        </Box>
    );
}

export default IndustryApproachSection;