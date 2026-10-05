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

/* ================================================================
   FOOTER
================================================================ */

export function Footer() {
    const {
        t,
    } = useTranslation();

    const currentYear =
        new Date().getFullYear();

    /* ------------------------------------------------------------
       WHATSAPP
    ------------------------------------------------------------ */

    const whatsappNumber =
        contactConfig.whatsapp.value.replace(
            /\D/g,
            ''
        );

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}`;

    /* ------------------------------------------------------------
       CORPORATE LINKS
    ------------------------------------------------------------ */

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
                position: 'relative',

                overflow: 'hidden',

                bgcolor:
                    'background.paper',

                color:
                    'text.primary',

                borderTop:
                    '1px solid',

                borderColor:
                    'divider',
            }}
        >
            {/* =====================================================
                AMBIENT BACKGROUND
            ===================================================== */}

            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',

                    top: -280,
                    right: -220,

                    width: 620,
                    height: 620,

                    borderRadius:
                        '50%',

                    background: (
                        theme
                    ) =>
                        `radial-gradient(
                            circle,
                            ${theme.palette.primary.main}18 0%,
                            transparent 68%
                        )`,

                    pointerEvents:
                        'none',
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

                        zIndex: 1,

                        display:
                            'grid',

                        gridTemplateColumns:
                            {
                                xs: '1fr',

                                sm: '1.2fr 1fr',

                                lg: '1.55fr 0.8fr 0.8fr 1.15fr',
                            },

                        gap: {
                            xs: 5,

                            md: 6,

                            lg: 8,
                        },

                        py: {
                            xs: 6,

                            sm: 7,

                            md: 8,
                        },
                    }}
                >
                    {/* =============================================
                        BRAND
                    ============================================= */}

                    <Box
                        sx={{
                            maxWidth: 360,
                        }}
                    >
                        <Logo
                            size="large"
                        />

                        <Typography
                            sx={{
                                mt: 3,

                                maxWidth: 330,

                                color:
                                    'text.secondary',

                                fontSize:
                                    '0.92rem',

                                lineHeight: 1.8,
                            }}
                        >
                            {t(
                                'footer.description'
                            )}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 3,

                                color:
                                    'primary.main',

                                fontSize:
                                    '0.68rem',

                                fontWeight:
                                    700,

                                letterSpacing:
                                    '0.15em',

                                textTransform:
                                    'uppercase',
                            }}
                        >
                            {t(
                                'footer.tagline'
                            )}
                        </Typography>
                    </Box>

                    {/* =============================================
                        CORPORATE
                    ============================================= */}

                    <Box>
                        <FooterHeading>
                            {t(
                                'footer.corporate'
                            )}
                        </FooterHeading>

                        <Box
                            sx={{
                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                alignItems:
                                    'flex-start',

                                gap: 1.6,

                                mt: 3,
                            }}
                        >
                            {corporateLinks.map(
                                (item) => (
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
                                    routes.quality
                                }
                            >
                                {t(
                                    'navigation.quality'
                                )}
                            </FooterRouterLink>

                            <FooterRouterLink
                                to={
                                    routes.projects
                                }
                            >
                                {t(
                                    'navigation.projects'
                                )}
                            </FooterRouterLink>
                        </Box>
                    </Box>

                    {/* =============================================
                        PRODUCTION
                    ============================================= */}

                    <Box>
                        <FooterHeading>
                            {t(
                                'footer.production'
                            )}
                        </FooterHeading>

                        <Box
                            sx={{
                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                alignItems:
                                    'flex-start',

                                gap: 1.6,

                                mt: 3,
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
                                    routes.quality
                                }
                            >
                                {t(
                                    'footer.quality'
                                )}
                            </FooterRouterLink>

                            <FooterRouterLink
                                to={
                                    routes.projects
                                }
                            >
                                {t(
                                    'footer.projects'
                                )}
                            </FooterRouterLink>
                        </Box>
                    </Box>

                    {/* =============================================
                        CONTACT
                    ============================================= */}

                    <Box>
                        <FooterHeading>
                            {t(
                                'footer.contact'
                            )}
                        </FooterHeading>

                        <Box
                            sx={{
                                display:
                                    'flex',

                                flexDirection:
                                    'column',

                                gap: 2.2,

                                mt: 3,
                            }}
                        >
                            {/* PHONE */}

                            <ContactLink
                                href={`tel:${contactConfig.phone.value}`}
                                icon={
                                    <Phone
                                        size={
                                            17
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

                            {/* EMAIL */}

                            <ContactLink
                                href={`mailto:${contactConfig.email}`}
                                icon={
                                    <Mail
                                        size={
                                            17
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

                            {/* WHATSAPP */}

                            <Box
                                component="a"
                                href={
                                    whatsappUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    width:
                                        'fit-content',

                                    display:
                                        'flex',

                                    alignItems:
                                        'center',

                                    gap: 1,

                                    color:
                                        'primary.main',

                                    textDecoration:
                                        'none',

                                    fontSize:
                                        '0.82rem',

                                    fontWeight:
                                        700,

                                    transition:
                                        'opacity 180ms ease, transform 180ms ease',

                                    '&:hover':
                                        {
                                            opacity:
                                                0.72,

                                            transform:
                                                'translateX(3px)',
                                        },
                                }}
                            >
                                <MessageCircle
                                    size={17}
                                    strokeWidth={
                                        1.7
                                    }
                                />

                                {t(
                                    'footer.whatsapp'
                                )}

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={
                                        1.7
                                    }
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

                        zIndex: 1,

                        minHeight: 84,

                        py: 2.5,

                        display: 'flex',

                        flexDirection: {
                            xs: 'column',

                            sm: 'row',
                        },

                        alignItems: {
                            xs: 'flex-start',

                            sm: 'center',
                        },

                        justifyContent:
                            'space-between',

                        gap: 2,

                        borderTop:
                            '1px solid',

                        borderColor:
                            'divider',
                    }}
                >
                    {/* COPYRIGHT */}

                    <Typography
                        sx={{
                            color:
                                'text.secondary',

                            fontSize:
                                '0.76rem',

                            lineHeight: 1.6,
                        }}
                    >
                        © {currentYear}{' '}
                        MBA Metal.{' '}
                        {t(
                            'footer.copyright'
                        )}
                    </Typography>

                    {/* BRAND SIGNATURE */}

                    <Box
                        sx={{
                            display:
                                'flex',

                            alignItems:
                                'center',

                            gap: 1.5,
                        }}
                    >
                        <Box
                            sx={{
                                width: 6,

                                height: 6,

                                borderRadius:
                                    '50%',

                                bgcolor:
                                    'primary.main',
                            }}
                        />

                        <Typography
                            sx={{
                                color:
                                    'text.secondary',

                                fontSize:
                                    '0.67rem',

                                fontWeight:
                                    700,

                                letterSpacing:
                                    '0.14em',

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

/* ================================================================
   FOOTER HEADING
================================================================ */

interface FooterHeadingProps {
    children: ReactNode;
}

function FooterHeading({
    children,
}: FooterHeadingProps) {
    return (
        <Typography
            component="h3"
            sx={{
                color:
                    'text.primary',

                fontSize:
                    '0.72rem',

                fontWeight:
                    800,

                letterSpacing:
                    '0.14em',

                textTransform:
                    'uppercase',
            }}
        >
            {children}
        </Typography>
    );
}

/* ================================================================
   FOOTER ROUTER LINK
================================================================ */

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
            component={Link}
            to={to}
            sx={{
                display:
                    'inline-flex',

                color:
                    'text.secondary',

                textDecoration:
                    'none',

                fontSize:
                    '0.86rem',

                lineHeight: 1.5,

                transition:
                    'color 180ms ease, transform 180ms ease',

                '&:hover': {
                    color:
                        'primary.main',

                    transform:
                        'translateX(3px)',
                },
            }}
        >
            {children}
        </Box>
    );
}

/* ================================================================
   CONTACT LINK
================================================================ */

interface ContactLinkProps {
    href: string;

    icon: ReactNode;

    label: string;

    value: string;
}

function ContactLink({
    href,
    icon,
    label,
    value,
}: ContactLinkProps) {
    return (
        <Box
            component="a"
            href={href}
            sx={{
                width:
                    'fit-content',

                display:
                    'flex',

                alignItems:
                    'flex-start',

                gap: 1.4,

                color:
                    'text.primary',

                textDecoration:
                    'none',

                transition:
                    'transform 180ms ease',

                '&:hover': {
                    transform:
                        'translateX(3px)',
                },

                '&:hover .footer-contact-value':
                    {
                        color:
                            'primary.main',
                    },
            }}
        >
            {/* ICON */}

            <Box
                sx={{
                    mt: 0.25,

                    color:
                        'primary.main',

                    display:
                        'flex',

                    flexShrink: 0,
                }}
            >
                {icon}
            </Box>

            {/* CONTENT */}

            <Box>
                <Typography
                    sx={{
                        color:
                            'text.secondary',

                        fontSize:
                            '0.65rem',

                        fontWeight:
                            700,

                        letterSpacing:
                            '0.08em',

                        textTransform:
                            'uppercase',
                    }}
                >
                    {label}
                </Typography>

                <Typography
                    className="footer-contact-value"
                    sx={{
                        mt: 0.35,

                        color:
                            'text.primary',

                        fontSize:
                            '0.84rem',

                        lineHeight: 1.5,

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