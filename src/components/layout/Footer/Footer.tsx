import {
    type ReactNode,
} from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Phone,
} from 'lucide-react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Link,
} from 'react-router-dom';

import {
    Container,
} from '../../common/Container';

import {
    Logo,
} from '../../common/Logo';

import {
    navigationItems,
} from '../../../config/navigation.config';

import {
    contactConfig,
} from '../../../config/contact.config';

import {
    routes,
} from '../../../constants/routes';

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
    const {
        t,
    } = useTranslation();

    const currentYear =
        new Date().getFullYear();

    /* =========================================================
       WHATSAPP
    ========================================================= */

    const whatsappNumber =
        contactConfig.whatsapp.value.replace(
            /\D/g,
            ''
        );

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}`;

    /* =========================================================
       CORPORATE LINKS
    ========================================================= */

    const corporateLinks =
        navigationItems.filter(
            (item) =>
                item.id === 'about' ||
                item.id === 'whyUs'
        );

    return (
        <Box
            component="footer"
            sx={{
                position:
                    'relative',

                overflow:
                    'hidden',

                bgcolor:
                    '#06100b',

                color:
                    '#ffffff',

                borderTop:
                    '1px solid rgba(255,255,255,0.08)',
            }}
        >
            {/* =================================================
                BACKGROUND GRID
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    inset:
                        0,

                    opacity:
                        0.14,

                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                        )
                    `,

                    backgroundSize:
                        '72px 72px',

                    maskImage:
                        'linear-gradient(to bottom, black 0%, transparent 88%)',

                    WebkitMaskImage:
                        'linear-gradient(to bottom, black 0%, transparent 88%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                RIGHT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    top:
                        -330,

                    right:
                        -250,

                    width:
                        680,

                    height:
                        680,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(42,155,107,0.15) 0%, rgba(42,155,107,0.04) 40%, transparent 70%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                LEFT GLOW
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    left:
                        -300,

                    bottom:
                        -400,

                    width:
                        650,

                    height:
                        650,

                    borderRadius:
                        '50%',

                    background:
                        'radial-gradient(circle, rgba(42,155,107,0.08) 0%, transparent 68%)',

                    pointerEvents:
                        'none',
                }}
            />

            {/* =================================================
                TOP ACCENT
            ================================================= */}

            <Box
                aria-hidden="true"
                sx={{
                    position:
                        'absolute',

                    top:
                        0,

                    left:
                        0,

                    width: {
                        xs:
                            100,

                        sm:
                            160,

                        md:
                            220,
                    },

                    height:
                        '2px',

                    bgcolor:
                        'primary.main',
                }}
            />

            <Container>
                {/* =================================================
                    MAIN FOOTER
                ================================================= */}

                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex:
                            1,

                        py: {
                            xs:
                                7,

                            sm:
                                8,

                            md:
                                9,

                            lg:
                                10,
                        },

                        display:
                            'grid',

                        gridTemplateColumns: {
                            xs:
                                '1fr',

                            sm:
                                'repeat(2, minmax(0, 1fr))',

                            lg:
                                '1.65fr 0.75fr 0.85fr 1.25fr',
                        },

                        columnGap: {
                            sm:
                                6,

                            lg:
                                8,
                        },

                        rowGap: {
                            xs:
                                6,

                            md:
                                7,
                        },

                        alignItems:
                            'start',
                    }}
                >
                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <Box
                        sx={{
                            maxWidth:
                                410,
                        }}
                    >
                        <Box
                            sx={{
                                display:
                                    'inline-flex',

                                '& img':
                                    {
                                        filter:
                                            'brightness(0) invert(1)',
                                    },
                            }}
                        >
                            <Logo
                                size="large"
                            />
                        </Box>

                        <Typography
                            sx={{
                                mt:
                                    3.5,

                                maxWidth:
                                    380,

                                color:
                                    'rgba(255,255,255,0.58)',

                                fontSize:
                                    '0.9rem',

                                lineHeight:
                                    1.85,
                            }}
                        >
                            {t(
                                'footer.company.description'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                mt:
                                    2,

                                maxWidth:
                                    380,

                                color:
                                    'rgba(255,255,255,0.36)',

                                fontSize:
                                    '0.78rem',

                                lineHeight:
                                    1.75,
                            }}
                        >
                            {t(
                                'footer.company.sectors'
                            )}
                        </Typography>

                        <Box
                            sx={{
                                mt:
                                    3.5,

                                display:
                                    'flex',

                                alignItems:
                                    'center',

                                gap:
                                    1.4,
                            }}
                        >
                            <Box
                                sx={{
                                    width:
                                        34,

                                    height:
                                        '1px',

                                    bgcolor:
                                        'primary.main',
                                }}
                            />

                            <Typography
                                sx={{
                                    color:
                                        'primary.light',

                                    fontSize:
                                        '0.62rem',

                                    fontWeight:
                                        750,

                                    letterSpacing:
                                        '0.15em',

                                    textTransform:
                                        'uppercase',
                                }}
                            >
                                {t(
                                    'footer.signature'
                                )}
                            </Typography>
                        </Box>
                    </Box>

                    {/* =================================================
                        CORPORATE
                    ================================================= */}

                    <Box>
                        <FooterHeading>
                            {t(
                                'footer.corporate'
                            )}
                        </FooterHeading>

                        <Box
                            sx={{
                                mt:
                                    3,

                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                alignItems:
                                    'flex-start',

                                gap:
                                    1.75,
                            }}
                        >
                            {corporateLinks.map(
                                (
                                    item
                                ) => (
                                    <FooterRouterLink
                                        key={
                                            item.id
                                        }
                                        to={
                                            item.href
                                        }
                                    >
                                        {t(
                                            item.labelKey
                                        )}
                                    </FooterRouterLink>
                                )
                            )}

                            <FooterRouterLink
                                to={
                                    routes.contact
                                }
                            >
                                {t(
                                    'navigation.contact'
                                )}
                            </FooterRouterLink>
                        </Box>
                    </Box>

                    {/* =================================================
                        PRODUCTION
                    ================================================= */}

                    <Box>
                        <FooterHeading>
                            {t(
                                'footer.production'
                            )}
                        </FooterHeading>

                        <Box
                            sx={{
                                mt:
                                    3,

                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                alignItems:
                                    'flex-start',

                                gap:
                                    1.75,
                            }}
                        >
                            <FooterRouterLink
                                to={
                                    routes.capabilities
                                }
                            >
                                {t(
                                    'footer.capabilities'
                                )}
                            </FooterRouterLink>

                            <FooterRouterLink
                                to={
                                    routes.industries
                                }
                            >
                                {t(
                                    'footer.industries'
                                )}
                            </FooterRouterLink>

                            <FooterRouterLink
                                to={
                                    routes.market
                                }
                            >
                                {t(
                                    'navigation.market'
                                )}
                            </FooterRouterLink>
                        </Box>
                    </Box>

                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <Box>
                        <FooterHeading>
                            {t(
                                'footer.contact'
                            )}
                        </FooterHeading>

                        <Box
                            sx={{
                                mt:
                                    3,

                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                gap:
                                    1.15,
                            }}
                        >
                            <ContactItem
                                href={`tel:${contactConfig.phone.value}`}
                                icon={
                                    <Phone
                                        size={
                                            16
                                        }
                                        strokeWidth={
                                            1.6
                                        }
                                    />
                                }
                                label={t(
                                    'footer.phone'
                                )}
                                value={
                                    contactConfig
                                        .phone
                                        .display
                                }
                            />

                            <ContactItem
                                href={`mailto:${contactConfig.email}`}
                                icon={
                                    <Mail
                                        size={
                                            16
                                        }
                                        strokeWidth={
                                            1.6
                                        }
                                    />
                                }
                                label={t(
                                    'footer.email'
                                )}
                                value={
                                    contactConfig.email
                                }
                            />

                            <Box
                                component="a"
                                href={
                                    whatsappUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    minHeight:
                                        62,

                                    px:
                                        1.6,

                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    justifyContent:
                                        'space-between',

                                    gap:
                                        1.5,

                                    border:
                                        '1px solid rgba(255,255,255,0.09)',

                                    bgcolor:
                                        'rgba(255,255,255,0.025)',

                                    color:
                                        '#ffffff',

                                    textDecoration:
                                        'none',

                                    transition:
                                        'border-color 180ms ease, background-color 180ms ease, transform 180ms ease',

                                    '&:hover':
                                        {
                                            borderColor:
                                                'rgba(48,165,115,0.52)',

                                            bgcolor:
                                                'rgba(48,165,115,0.07)',

                                            transform:
                                                'translateY(-2px)',

                                            '& .footer-whatsapp-arrow':
                                                {
                                                    transform:
                                                        'translate(2px, -2px)',
                                                },
                                        },
                                }}
                            >
                                <Box
                                    sx={{
                                        display:
                                            'flex',

                                        alignItems:
                                            'center',

                                        gap:
                                            1.2,

                                        minWidth:
                                            0,
                                    }}
                                >
                                    <ContactIcon>
                                        <MessageCircle
                                            size={
                                                16
                                            }
                                            strokeWidth={
                                                1.6
                                            }
                                        />
                                    </ContactIcon>

                                    <Box>
                                        <Typography
                                            sx={{
                                                color:
                                                    'rgba(255,255,255,0.36)',

                                                fontSize:
                                                    '0.55rem',

                                                fontWeight:
                                                    750,

                                                letterSpacing:
                                                    '0.10em',

                                                textTransform:
                                                    'uppercase',
                                            }}
                                        >
                                            WhatsApp
                                        </Typography>

                                        <Typography
                                            sx={{
                                                mt:
                                                    0.25,

                                                color:
                                                    'rgba(255,255,255,0.82)',

                                                fontSize:
                                                    '0.77rem',

                                                fontWeight:
                                                    600,
                                            }}
                                        >
                                            {t(
                                                'footer.whatsapp'
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>

                                <ArrowUpRight
                                    className="footer-whatsapp-arrow"
                                    size={
                                        14
                                    }
                                    strokeWidth={
                                        1.6
                                    }
                                    style={{
                                        flexShrink:
                                            0,

                                        transition:
                                            'transform 180ms ease',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* =================================================
                    BOTTOM FOOTER
                ================================================= */}

                <Box
                    sx={{
                        position:
                            'relative',

                        zIndex:
                            1,

                        minHeight:
                            82,

                        py:
                            2.5,

                        display:
                            'flex',

                        flexDirection: {
                            xs:
                                'column',

                            sm:
                                'row',
                        },

                        alignItems: {
                            xs:
                                'flex-start',

                            sm:
                                'center',
                        },

                        justifyContent:
                            'space-between',

                        gap:
                            2,

                        borderTop:
                            '1px solid rgba(255,255,255,0.09)',
                    }}
                >
                    <Typography
                        sx={{
                            color:
                                'rgba(255,255,255,0.35)',

                            fontSize:
                                '0.71rem',

                            lineHeight:
                                1.6,
                        }}
                    >
                        © {currentYear}{' '}
                        MBA Metal.{' '}
                        {t(
                            'footer.copyright'
                        )}
                    </Typography>

                    <Box
                        sx={{
                            display:
                                'flex',

                            alignItems:
                                'center',

                            gap:
                                1.25,
                        }}
                    >
                        <Box
                            sx={{
                                width:
                                    6,

                                height:
                                    6,

                                borderRadius:
                                    '50%',

                                bgcolor:
                                    'primary.main',

                                boxShadow:
                                    '0 0 16px rgba(48,165,115,0.65)',
                            }}
                        />

                        <Typography
                            sx={{
                                color:
                                    'rgba(255,255,255,0.35)',

                                fontSize:
                                    '0.61rem',

                                fontWeight:
                                    750,

                                letterSpacing:
                                    '0.15em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            MBA METAL
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

interface FooterHeadingProps {
    children: ReactNode;
}

function FooterHeading({
    children,
}: FooterHeadingProps) {
    return (
        <Box>
            <Typography
                component="h3"
                sx={{
                    color:
                        'rgba(255,255,255,0.38)',

                    fontSize:
                        '0.61rem',

                    fontWeight:
                        750,

                    letterSpacing:
                        '0.15em',

                    textTransform:
                        'uppercase',
                }}
            >
                {children}
            </Typography>

            <Box
                sx={{
                    width:
                        24,

                    height:
                        '1px',

                    mt:
                        1.5,

                    bgcolor:
                        'primary.main',
                }}
            />
        </Box>
    );
}

/* =========================================================
   ROUTER LINK
========================================================= */

interface FooterRouterLinkProps {
    to: string;

    children: ReactNode;
}

function FooterRouterLink({
    to,
    children,
}: FooterRouterLinkProps) {
    return (
        <Box
            component={
                Link
            }
            to={
                to
            }
            sx={{
                display:
                    'inline-flex',

                alignItems:
                    'center',

                color:
                    'rgba(255,255,255,0.62)',

                textDecoration:
                    'none',

                fontSize:
                    '0.85rem',

                lineHeight:
                    1.5,

                transition:
                    'color 180ms ease, transform 180ms ease',

                '&::before':
                    {
                        content:
                            '""',

                        width:
                            0,

                        height:
                            '1px',

                        mr:
                            0,

                        bgcolor:
                            'primary.main',

                        transition:
                            'width 180ms ease, margin-right 180ms ease',
                    },

                '&:hover':
                    {
                        color:
                            '#ffffff',

                        transform:
                            'translateX(2px)',

                        '&::before':
                            {
                                width:
                                    14,

                                mr:
                                    1,
                            },
                    },
            }}
        >
            {children}
        </Box>
    );
}

/* =========================================================
   CONTACT ICON
========================================================= */

interface ContactIconProps {
    children: ReactNode;
}

function ContactIcon({
    children,
}: ContactIconProps) {
    return (
        <Box
            sx={{
                width:
                    32,

                height:
                    32,

                display:
                    'flex',

                alignItems:
                    'center',

                justifyContent:
                    'center',

                flexShrink:
                    0,

                color:
                    'primary.light',

                border:
                    '1px solid rgba(255,255,255,0.09)',
            }}
        >
            {children}
        </Box>
    );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

interface ContactItemProps {
    href: string;

    icon: ReactNode;

    label: string;

    value: string;
}

function ContactItem({
    href,
    icon,
    label,
    value,
}: ContactItemProps) {
    return (
        <Box
            component="a"
            href={
                href
            }
            sx={{
                minHeight:
                    62,

                px:
                    1.6,

                display:
                    'flex',

                alignItems:
                    'center',

                gap:
                    1.2,

                border:
                    '1px solid rgba(255,255,255,0.09)',

                bgcolor:
                    'rgba(255,255,255,0.025)',

                color:
                    '#ffffff',

                textDecoration:
                    'none',

                transition:
                    'border-color 180ms ease, background-color 180ms ease, transform 180ms ease',

                '&:hover':
                    {
                        borderColor:
                            'rgba(48,165,115,0.52)',

                        bgcolor:
                            'rgba(48,165,115,0.07)',

                        transform:
                            'translateY(-2px)',

                        '& .footer-contact-value':
                            {
                                color:
                                    'primary.light',
                            },
                    },
            }}
        >
            <ContactIcon>
                {icon}
            </ContactIcon>

            <Box
                sx={{
                    minWidth:
                        0,
                }}
            >
                <Typography
                    sx={{
                        color:
                            'rgba(255,255,255,0.36)',

                        fontSize:
                            '0.55rem',

                        fontWeight:
                            750,

                        letterSpacing:
                            '0.10em',

                        textTransform:
                            'uppercase',
                    }}
                >
                    {label}
                </Typography>

                <Typography
                    className="footer-contact-value"
                    sx={{
                        mt:
                            0.25,

                        color:
                            'rgba(255,255,255,0.82)',

                        fontSize:
                            '0.77rem',

                        lineHeight:
                            1.5,

                        overflowWrap:
                            'anywhere',

                        transition:
                            'color 180ms ease',
                    }}
                >
                    {value}
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;